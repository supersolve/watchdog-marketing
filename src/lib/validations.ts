// Shared validation utilities for forms and API routes

export interface ValidationResult {
  isValid: boolean
  error?: string
}

export interface FormValidationErrors {
  [key: string]: string
}

/**
 * Validates email address format and length
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' }
  }

  const trimmedEmail = email.trim()

  if (trimmedEmail.length === 0) {
    return { isValid: false, error: 'Email is required' }
  }

  if (trimmedEmail.length > 254) {
    return { isValid: false, error: 'Email must be 254 characters or less' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please provide a valid email address' }
  }

  return { isValid: true }
}

/**
 * Validates company name length and format
 */
export function validateCompanyName(name: string): ValidationResult {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Company name is required' }
  }

  const trimmedName = name.trim()

  if (trimmedName.length === 0) {
    return { isValid: false, error: 'Company name is required' }
  }

  if (trimmedName.length > 100) {
    return {
      isValid: false,
      error: 'Company name must be 100 characters or less',
    }
  }

  return { isValid: true }
}

/**
 * Validates demo request form data
 */
export interface DemoRequestData {
  companyName: string
  email: string
  pricingTier: string
  buttonSource: string
}

export function validateDemoRequest(data: DemoRequestData): {
  isValid: boolean
  errors: FormValidationErrors
} {
  const errors: FormValidationErrors = {}

  const emailValidation = validateEmail(data.email)
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!
  }

  const companyValidation = validateCompanyName(data.companyName)
  if (!companyValidation.isValid) {
    errors.companyName = companyValidation.error!
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Sanitizes HTML content to prevent XSS
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
