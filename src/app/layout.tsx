import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/app/header'
import './globals.css'
import { Footer } from '@/components/app/footer'
import { logEnvironmentStatus } from '@/lib/environment-check'
import { CookieConsent } from '@/components/app/cookie-consent'
import { GoogleAnalytics } from '@/components/app/google-analytics'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

// Log environment status on startup (server-side only)
if (typeof window === 'undefined') {
  logEnvironmentStatus()
}

export const metadata: Metadata = {
  title: 'Watchdog',
  description: 'Stop overcharging.',
  icons: {
    icon: '/logo-watchdog-background.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-secondary`}
      >
        <Header />
        <div className="container mx-auto px-0">{children}</div>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
