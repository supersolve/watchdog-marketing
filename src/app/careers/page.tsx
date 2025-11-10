import type { Metadata } from 'next'
import { CareersContent } from '@/components/app/careers-content'

export const metadata: Metadata = {
  title: 'Careers - Join Watchdog',
  description:
    'Join Watchdog and help us permanently remove invoice errors from society. Work with experienced serial founders and consultants from BCG and BEKK. Backed by investors from OpenAI, Cognite, and A&CO.',
  alternates: {
    canonical: 'https://watchdog.no/careers',
  },
  openGraph: {
    title: 'Careers - Join Watchdog',
    description:
      'Join Watchdog and help us permanently remove invoice errors from society. Work with AI, procurement, and financial technology.',
    url: 'https://watchdog.no/careers',
    siteName: 'Watchdog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Watchdog Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Watchdog',
    description:
      'Join Watchdog and help us permanently remove invoice errors from society.',
    images: ['/opengraph-image.png'],
  },
}

export default async function CareersPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: 'no' | 'en' }>
}) {
  const sp = await searchParams
  const initialLanguage = sp?.lang === 'no' ? 'no' : 'en'
  return (
    <main className="relative">
      <CareersContent
        schedulerUrl="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Va6TPDiQr8TigkBcuuMQAz7UygYirCgm_lELJYh_ZYJwthsGgkZ9DH-yCJt98tJo97c4hEaPE?gv=true"
        initialLanguage={initialLanguage}
      />
    </main>
  )
}
