import { Resend } from 'resend'
import { ExternalServiceError } from '@/lib/errors'
import { escapeHtml } from '@/lib/validations'
import { logger } from '@/lib/logger'

export interface DemoRequestEmailData {
  companyName: string
  email: string
  pricingTier: string
  buttonSource?: string
}

/**
 * Email service for handling demo request emails
 */
export class EmailService {
  private resend: Resend

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey)
    logger.log('Resend client created')
  }

  /**
   * Send demo request notification email
   */
  async sendDemoRequestEmail(data: DemoRequestEmailData): Promise<void> {
    logger.log('=== Email Service: Starting to send email ===')
    // Sanitize inputs for HTML content
    const safeCompanyName = escapeHtml(data.companyName.trim())
    const safeEmail = escapeHtml(data.email.trim())
    const safePricingTier = escapeHtml(data.pricingTier.trim())
    const safeButtonSource = escapeHtml((data.buttonSource || 'unknown').trim())
    logger.log('Input sanitization completed')

    try {
      logger.log('About to call Resend API...')
      const { error } = await this.resend.emails.send({
        from: 'Demo Requests <noreply@email.watchdog.no>',
        to: ['demo@supersolve.ai'],
        subject: `New Demo Request from ${safeCompanyName}`,
        html: this.generateDemoRequestEmailTemplate(
          safeCompanyName,
          safeEmail,
          safePricingTier,
          safeButtonSource
        ),
      })
      logger.log('Resend API call completed, checking for errors...')

      if (error) {
        logger.error('Resend API returned error:', error)
        throw new ExternalServiceError('Resend', 'Failed to send email')
      }
      logger.log('Email sent successfully via Resend!')
    } catch (error) {
      logger.error('=== Email Service Error ===')
      logger.error('Error in sendDemoRequestEmail:', error)

      if (error instanceof ExternalServiceError) {
        logger.error('Re-throwing ExternalServiceError')
        throw error
      }

      logger.error('Unexpected error sending email:', error)
      if (error instanceof Error) {
        logger.error('Error details:', {
          name: error.name,
          message: error.message,
          stack:
            process.env.NODE_ENV === 'development' ? error.stack : undefined,
        })
      }
      throw new ExternalServiceError(
        'Resend',
        'Unexpected error occurred while sending email'
      )
    }
  }

  /**
   * Generate HTML template for demo request email
   */
  private generateDemoRequestEmailTemplate(
    companyName: string,
    email: string,
    pricingTier: string,
    buttonSource: string
  ): string {
    // Create custom message based on pricing tier
    let pricingMessage = 'Please follow up with this demo request promptly.'
    if (pricingTier) {
      pricingMessage = `Requested ${pricingTier} plan. Please follow up with this demo request promptly.`
    }

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Demo Request</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${pricingTier ? `<p><strong>Interested Plan:</strong> ${pricingTier}</p>` : ''}
          <p><strong>Button Source:</strong> ${buttonSource}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <p style="color: #666; font-size: 14px;">
          ${pricingMessage}
        </p>
      </div>
    `
  }
}

/**
 * Factory function to create email service instance
 */
export function createEmailService(): EmailService {
  logger.log('Creating email service...')
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is required')
  }

  return new EmailService(apiKey)
}
