import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/app/header'
import { Footer } from '@/components/app/footer'
import { CookieConsent } from '@/components/app/cookie-consent'
import { GoogleAnalytics } from '@/components/app/google-analytics'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Watchdog - AI for procurement',
  metadataBase: new URL('https://thewatchdog.no'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo-watchdog-background.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Watchdog - AI for procurement',
    description:
      'AI that monitors, validates, and automates procurement invoices.',
    url: '/',
    siteName: 'Watchdog',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Watchdog – Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Watchdog - AI for procurement',
    description:
      'AI that monitors, validates, and automates procurement invoices.',
    images: ['/opengraph-image.png'],
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
