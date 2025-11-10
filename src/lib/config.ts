/**
 * Centralized configuration for security and CORS
 */

export const ALLOWED_ORIGINS = {
  production: [
    'https://watchdog.no',
    'https://www.watchdog.no',
    'https://thewatchdog.no',
    'https://www.thewatchdog.no',
    'https://supersolve.ai',
    'https://www.supersolve.ai',
  ],
  development: ['http://localhost:3000', 'http://127.0.0.1:3000'],
} as const

export function getAllowedOrigins(): readonly string[] {
  return process.env.NODE_ENV === 'production'
    ? ALLOWED_ORIGINS.production
    : ALLOWED_ORIGINS.development
}
