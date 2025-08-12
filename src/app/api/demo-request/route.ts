import { NextRequest, NextResponse } from 'next/server'
import { applyMiddleware } from '@/lib/api/middleware'
import { createEmailService } from '@/lib/api/email-service'
import { validateDemoRequest, DemoRequestData } from '@/lib/validations'
import { ValidationError, formatErrorResponse, withTimeout } from '@/lib/errors'

// Read request body with size limit to prevent large payloads
async function readJsonWithLimit(req: NextRequest, maxBytes = 1024 * 1024) {
  const reader = req.body?.getReader()
  if (!reader) return {}

  const chunks: Uint8Array[] = []
  let received = 0

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) {
      received += value.byteLength
      if (received > maxBytes) {
        throw new ValidationError('Request body too large')
      }
      chunks.push(value)
    }
  }

  const bodyString = new TextDecoder('utf-8').decode(concatUint8Arrays(chunks))
  try {
    return JSON.parse(bodyString)
  } catch {
    throw new ValidationError('Invalid JSON body')
  }
}

function concatUint8Arrays(arrays: Uint8Array[]): Uint8Array {
  const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0)
  const result = new Uint8Array(totalLength)
  let offset = 0
  for (const arr of arrays) {
    result.set(arr, offset)
    offset += arr.length
  }
  return result
}

function maskEmail(email: string): string {
  const m = email.match(/([^@])[^@]*(@.*)/)
  return m ? `${m[1]}***${m[2]}` : '***'
}

function isBrowserRequest(req: NextRequest): boolean {
  // Presence of Origin header implies a browser-initiated CORS request
  return !!req.headers.get('origin')
}

function isAllowedOrigin(origin: string): boolean {
  const allowed =
    process.env.NODE_ENV === 'production'
      ? [
          'https://thewatchdog.no',
          'https://www.thewatchdog.no',
          'https://supersolve.ai',
          'https://www.supersolve.ai',
        ]
      : ['http://localhost:3000', 'http://127.0.0.1:3000']
  return allowed.includes(origin)
}

export async function POST(request: NextRequest) {
  console.log('=== Demo Request API Called ===')
  try {
    // Basic Origin allowlist for browser requests
    const origin = request.headers.get('origin')
    if (origin && isBrowserRequest(request) && !isAllowedOrigin(origin)) {
      return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 })
    }

    // Check environment variables first
    if (!process.env.RESEND_API_KEY && !process.env.DISABLE_EMAIL_SEND) {
      console.error('RESEND_API_KEY environment variable is missing')
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 503 }
      )
    }
    console.log('Environment variables check passed')

    // Apply middleware checks (environment validation, bot detection, rate limiting)
    applyMiddleware(request, ['RESEND_API_KEY'])
    console.log('Middleware checks passed')

    // Parse and validate request body with size cap
    const body = await readJsonWithLimit(request, 256 * 1024)
    const { companyName, email, pricingTier, buttonSource } =
      body as DemoRequestData
    const safeLogEmail = email ? maskEmail(email) : 'n/a'
    console.log('Request data:', {
      companyName: companyName ? `${companyName.slice(0, 2)}***` : 'n/a',
      email: safeLogEmail,
      pricingTier: pricingTier || 'none',
      buttonSource: buttonSource || 'unknown',
    })

    // Validate input data
    const validation = validateDemoRequest({
      companyName,
      email,
      pricingTier: pricingTier || '',
      buttonSource: buttonSource || 'unknown',
    })
    if (!validation.isValid) {
      throw new ValidationError('Validation failed', validation.errors)
    }
    console.log('Input validation passed')

    // Optionally skip sending email (for local testing)
    if (process.env.DISABLE_EMAIL_SEND === 'true') {
      console.log('[DISABLED] Would send demo request email')
      return NextResponse.json({
        success: true,
        message: 'Demo request submitted (email sending disabled)',
      })
    }

    // Create email service and send demo request email
    console.log('About to create email service...')
    const emailService = createEmailService()
    console.log('Email service created, about to send email...')

    // Send email with timeout protection
    await withTimeout(
      emailService.sendDemoRequestEmail({
        companyName: companyName.trim(),
        email: email.trim(),
        pricingTier: pricingTier?.trim() || '',
        buttonSource: buttonSource?.trim() || 'unknown',
      }),
      10000, // 10 second timeout
      'Email sending timed out'
    )
    console.log('Email sent successfully!')

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
    })
  } catch (error) {
    console.error('=== Demo Request API Error ===')
    console.error('Error processing demo request:', error)

    // Enhanced error logging for debugging without leaking PII
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      })
    }

    const errorResponse = formatErrorResponse(error)
    console.error('Formatted error response:', errorResponse)
    return NextResponse.json(
      {
        error: errorResponse.error,
        ...('validation_errors' in errorResponse
          ? { validation_errors: errorResponse.validation_errors }
          : {}),
      },
      { status: errorResponse.status }
    )
  }
}
