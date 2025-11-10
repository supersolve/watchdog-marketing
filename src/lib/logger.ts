/**
 * Simple logging utility that respects environment
 * In production, only errors are logged to avoid log spam
 */

const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = {
  /**
   * Log general information (only in development)
   */
  log: (...args: unknown[]) => {
    if (isDevelopment) {
      console.log(...args)
    }
  },

  /**
   * Log errors (always logged, even in production)
   */
  error: (...args: unknown[]) => {
    console.error(...args)
  },

  /**
   * Log warnings (only in development)
   */
  warn: (...args: unknown[]) => {
    if (isDevelopment) {
      console.warn(...args)
    }
  },

  /**
   * Log debug information (only in development)
   */
  debug: (...args: unknown[]) => {
    if (isDevelopment) {
      console.debug(...args)
    }
  },
}
