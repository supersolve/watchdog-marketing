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
 * Detect if request is from a malicious bot (not legitimate crawlers)
 * Allows legitimate SEO crawlers (Googlebot, Bingbot, etc.) and AI crawlers
 */
export function detectBot(request: NextRequest): void {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''

  // Allow legitimate SEO and AI crawlers
  const allowedBots = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'applebot',
    'gptbot',
    'chatgpt-user',
    'ccbot',
    'anthropic-ai',
    'claude-web',
    'perplexitybot',
    'applebot-extended',
  ]

  // Check if it's an allowed bot
  const isAllowedBot = allowedBots.some((bot) => userAgent.includes(bot))
  if (isAllowedBot) {
    return // Allow legitimate crawlers
  }

  // Block malicious/scraping bots (but not legitimate crawlers)
  const maliciousBotPatterns = [
    'curl',
    'wget',
    'python-requests',
    'scrapy',
    'scraper',
    'httpie',
    'postman',
    'insomnia',
  ]

  const isMaliciousBot = maliciousBotPatterns.some((pattern) =>
    userAgent.includes(pattern)
  )

  if (isMaliciousBot) {
    throw new BotDetectionError()
  }

  // Allow other bots that might be legitimate (like monitoring tools)
  // Only block if explicitly malicious
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
