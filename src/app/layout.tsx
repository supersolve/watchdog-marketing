import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/app/header'
import { Footer } from '@/components/app/footer'
import { CookieConsent } from '@/components/app/cookie-consent'
import { GoogleAnalytics } from '@/components/app/google-analytics'
import { StructuredData } from '@/components/app/structured-data'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Watchdog - AI-Powered Invoice Validation & Procurement Software',
    template: '%s | Watchdog',
  },
  description:
    'AI-powered invoice validation and procurement error detection. Automatically scan, validate, and detect errors in procurement invoices. Integrate with your ERP in 1 hour.',
  metadataBase: new URL('https://watchdog.no'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo-watchdog-background.png', sizes: '180x180' }],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Watchdog - AI-Powered Invoice Validation & Procurement Software',
    description:
      'AI that monitors, validates, and automates procurement invoices. Stop losing millions to invoice errors.',
    url: '/',
    siteName: 'Watchdog',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Watchdog - AI for Procurement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchdog - AI-Powered Invoice Validation & Procurement Software',
    description:
      'AI that monitors, validates, and automates procurement invoices. Stop losing millions to invoice errors.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <StructuredData />
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
