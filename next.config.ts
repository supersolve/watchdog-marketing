import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Security-related configurations
  poweredByHeader: false, // Remove X-Powered-By header

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort()',
          },
          // HSTS (only in production)
          ...(process.env.NODE_ENV === 'production'
            ? [
                {
                  key: 'Strict-Transport-Security',
                  value: 'max-age=31536000; includeSubDomains; preload',
                },
              ]
            : []),
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // No 'unsafe-eval'; allow inline for GA snippet via 'unsafe-inline'
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://calendar.google.com",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com https://calendar.google.com",
              "font-src 'self' fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://calendar.google.com",
              'frame-src https://calendar.google.com',
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ]
  },

  // Redirect configuration for security
  async redirects() {
    return [
      // Redirect common security probe paths
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/.env',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
