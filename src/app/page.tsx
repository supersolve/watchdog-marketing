import type { Metadata } from 'next'
import {
  AboutSection,
  HowItWorksSection,
  PricingSection,
  HeroSection,
  BenefitsSection,
} from '@/components/landing'
import { IntegrationsAnimation } from '@/components/landing/integrations'

export const metadata: Metadata = {
  title:
    'Watchdog - AI-Powered Invoice Validation & Procurement Error Detection',
  description:
    'Stop losing millions to invoice errors. Watchdog uses AI to automatically scan, validate, and detect errors in procurement invoices. Connect to your ERP system in 1 hour.',
  keywords: [
    'invoice validation',
    'procurement software',
    'invoice error detection',
    'agreement tracking',
    'agreement validation',
    'AI invoice scanning',
    'invoice automation',
    'procurement AI',
    'invoice discrepancy detection',
    'ERP integration',
    'financial watchdog',
    'invoice auditing',
    'supplier invoice management',
    'cost savings procurement',
    'invoice reconciliation',
    'automated invoice checking',
    'procurement errors',
  ],
  alternates: {
    canonical: 'https://watchdog.no',
  },
  openGraph: {
    title:
      'Watchdog - AI-Powered Invoice Validation & Procurement Error Detection',
    description:
      'Stop losing millions to invoice errors. Watchdog uses AI to automatically scan, validate, and detect errors in procurement invoices.',
    url: 'https://watchdog.no',
    siteName: 'Watchdog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Watchdog - AI for Procurement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Watchdog - AI-Powered Invoice Validation & Procurement Error Detection',
    description:
      'Stop losing millions to invoice errors. Watchdog uses AI to automatically scan, validate, and detect errors in procurement invoices.',
    images: ['/opengraph-image.png'],
  },
}

export default function Home() {
  return (
    <main className="isolate">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IntegrationsAnimation />
      <PricingSection />
      <AboutSection />
    </main>
  )
}
