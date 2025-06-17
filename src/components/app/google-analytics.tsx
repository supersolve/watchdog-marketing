'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null)

  useEffect(() => {
    // Check initial consent status
    const consentChoice = localStorage.getItem('cookie-consent')
    setConsent(consentChoice)

    // Listen for consent events
    const handleConsentAccepted = () => {
      setConsent('accepted')
    }

    window.addEventListener('cookie-consent-accepted', handleConsentAccepted)

    return () => {
      window.removeEventListener(
        'cookie-consent-accepted',
        handleConsentAccepted
      )
    }
  }, [])

  // Only render analytics if consent is accepted
  if (consent !== 'accepted') {
    return null
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X51RDDG53K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X51RDDG53K');
        `}
      </Script>
    </>
  )
}
