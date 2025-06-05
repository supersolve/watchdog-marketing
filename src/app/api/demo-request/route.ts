import { NextRequest, NextResponse } from 'next/server'
import { applyMiddleware } from '@/lib/api/middleware'
import { createEmailService } from '@/lib/api/email-service'
import { validateDemoRequest, DemoRequestData } from '@/lib/validations'
import { ValidationError, formatErrorResponse, withTimeout } from '@/lib/errors'

export async function POST(request: NextRequest) {
  console.log('=== Demo Request API Called ===')
  try {
    // Check environment variables first
    if (!process.env.RESEND_API_KEY) {
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

    // Parse and validate request body
    const body = await request.json()
    const { companyName, email, pricingTier, buttonSource } =
      body as DemoRequestData
    console.log('Request data:', {
      companyName,
      email,
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

    // Enhanced error logging for debugging
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
