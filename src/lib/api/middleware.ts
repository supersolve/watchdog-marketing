import { NextRequest } from 'next/server'
import { RateLimitError, BotDetectionError } from '@/lib/errors'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5 // 5 requests per 15 minutes per IP
const CLEANUP_INTERVAL = 60 * 60 * 1000 // Clean up old entries every hour

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

// Cleanup old rate limit entries to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitMap.entries()) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(key)
    }
  }
}, CLEANUP_INTERVAL)

/**
 * Extract client IP address from request headers
 */
function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwardedFor?.split(',')[0] || realIp || 'unknown'
}

/**
 * Check if request is rate limited
 */
export function checkRateLimit(request: NextRequest): void {
  const clientIP = getClientIP(request)
  const now = Date.now()
  const record = rateLimitMap.get(clientIP)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(clientIP, { count: 1, timestamp: now })
    return
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    throw new RateLimitError()
  }

  record.count++
}

/**
 * Detect if request is from a bot
 */
export function detectBot(request: NextRequest): void {
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

  const isBot = botPatterns.some((pattern) => userAgent.includes(pattern))

  if (isBot) {
    throw new BotDetectionError()
  }
}

/**
 * Validate required environment variables
 */
export function validateEnvironment(requiredVars: string[]): void {
  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}

/**
 * Apply all middleware checks to a request
 */
export function applyMiddleware(
  request: NextRequest,
  requiredEnvVars: string[] = []
): void {
  validateEnvironment(requiredEnvVars)
  detectBot(request)
  checkRateLimit(request)
}
