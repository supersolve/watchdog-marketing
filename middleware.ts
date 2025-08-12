import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // HTTPS enforcement in production
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') !== 'https'
  ) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    )
  }

  // Add security headers for all requests
  const response = NextResponse.next()

  // Add additional security for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Check request size (limit to 1MB for API requests)
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 1024 * 1024) {
      return new NextResponse('Request too large', { status: 413 })
    }

    // Ensure JSON content type for POST requests
    if (request.method === 'POST') {
      const contentType = request.headers.get('content-type')
      if (!contentType?.includes('application/json')) {
        return new NextResponse('Invalid content type', { status: 400 })
      }
    }

    // More restrictive CORS headers for API routes
    const origin = request.headers.get('origin')
    const allowedOrigins =
      process.env.NODE_ENV === 'production'
        ? [
            'https://thewatchdog.no',
            'https://www.thewatchdog.no',
            'https://supersolve.ai',
            'https://www.supersolve.ai',
          ]
        : ['http://localhost:3000', 'http://127.0.0.1:3000']

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.append('Vary', 'Origin')
    } else if (process.env.NODE_ENV !== 'production') {
      // Allow localhost in development
      response.headers.set('Access-Control-Allow-Origin', '*')
    }

    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.set('Access-Control-Max-Age', '86400') // 24 hours

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: response.headers })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
