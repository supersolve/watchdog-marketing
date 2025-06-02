// Standardized error handling utilities

/**
 * Base application error class
 */
export class AppError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode
    this.isOperational = isOperational

    Error.captureStackTrace(this, this.constructor)
  }
}

/**
 * Validation error class
 */
export class ValidationError extends AppError {
  public readonly errors: Record<string, string>

  constructor(message: string, errors: Record<string, string> = {}) {
    super(message, 400)
    this.errors = errors
  }
}

/**
 * Rate limit error class
 */
export class RateLimitError extends AppError {
  constructor(message = 'Too many requests. Please try again later.') {
    super(message, 429)
  }
}

/**
 * Authentication error class
 */
export class AuthenticationError extends AppError {
  constructor(message = 'Authentication required') {
    super(message, 401)
  }
}

/**
 * External service error class
 */
export class ExternalServiceError extends AppError {
  public readonly service: string

  constructor(service: string, message: string) {
    super(`${service} service error: ${message}`, 503)
    this.service = service
  }
}

/**
 * Timeout error class
 */
export class TimeoutError extends AppError {
  constructor(message = 'Request timed out') {
    super(message, 408)
  }
}

/**
 * Bot detection error class
 */
export class BotDetectionError extends AppError {
  constructor(message = 'Automated requests not allowed') {
    super(message, 403)
  }
}

/**
 * Environment configuration error class
 */
export class EnvironmentError extends AppError {
  constructor(message: string) {
    super(message, 503)
  }
}

/**
 * Safely extract error message from unknown error
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unexpected error occurred'
}

/**
 * Check if error is operational (safe to show to user)
 */
export function isOperationalError(error: unknown): boolean {
  if (error instanceof AppError) {
    return error.isOperational
  }
  return false
}

/**
 * Format error for API response
 */
export function formatErrorResponse(error: unknown) {
  if (error instanceof ValidationError) {
    return {
      error: error.message,
      validation_errors: error.errors,
      status: error.statusCode,
    }
  }

  if (error instanceof AppError) {
    return {
      error: error.message,
      status: error.statusCode,
    }
  }

  // For unknown errors, don't expose internal details
  return {
    error: 'Internal server error',
    status: 500,
  }
}

/**
 * Promise timeout wrapper
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
  timeoutMessage = 'Operation timed out'
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new TimeoutError(timeoutMessage)), timeoutMs)
    ),
  ])
}
