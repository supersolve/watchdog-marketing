import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5 // 5 requests per 15 minutes per IP
const CLEANUP_INTERVAL = 60 * 60 * 1000 // Clean up old entries every hour

// Cleanup old rate limit entries to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitMap.entries()) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(key)
    }
  }
}, CLEANUP_INTERVAL)

function getRateLimitKey(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwardedFor?.split(',')[0] || realIp || 'unknown'
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, timestamp: now })
    return false
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

function validateCompanyName(name: string): boolean {
  return name.trim().length >= 1 && name.length <= 100
}

// Basic bot detection
function detectBot(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''

  // Check for common bot patterns
  const botPatterns = [
    'bot',
    'crawler',
    'spider',
    'scraper',
    'curl',
    'wget',
    'python-requests',
  ]

  return botPatterns.some((pattern) => userAgent.includes(pattern))
}

// Add request timeout wrapper
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
    ),
  ])
}

export async function POST(request: NextRequest) {
  try {
    // Environment variable validation
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    // Basic bot detection
    if (detectBot(request)) {
      return NextResponse.json(
        { error: 'Automated requests not allowed' },
        { status: 403 }
      )
    }

    // Rate limiting check
    const rateLimitKey = getRateLimitKey(request)
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { companyName, email } = await request.json()

    // Enhanced input validation
    if (!companyName || !email) {
      return NextResponse.json(
        { error: 'Company name and email are required' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    if (!validateCompanyName(companyName)) {
      return NextResponse.json(
        { error: 'Company name must be between 1 and 100 characters' },
        { status: 400 }
      )
    }

    // Sanitize inputs for HTML content
    const safeCompanyName = escapeHtml(companyName.trim())
    const safeEmail = escapeHtml(email.trim())

    // Send email notification with timeout protection
    const emailPromise = resend.emails.send({
      from: 'Demo Requests <noreply@demo.supersolve.ai>',
      to: ['demo@supersolve.ai'],
      subject: `New Demo Request from ${safeCompanyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Demo Request</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company Name:</strong> ${safeCompanyName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Please follow up with this demo request promptly.
          </p>
        </div>
      `,
    })

    const { error } = await withTimeout(emailPromise, 10000) // 10 second timeout

    if (error) {
      console.error('Failed to send demo request email')
      return NextResponse.json(
        { error: 'Failed to send demo request. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'Request timeout') {
      return NextResponse.json(
        { error: 'Request timed out. Please try again.' },
        { status: 408 }
      )
    }

    console.error('Error processing demo request')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
