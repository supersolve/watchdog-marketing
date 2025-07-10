'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('cookie-consent')

    if (!consentChoice) {
      // Small delay to ensure page has loaded before showing popup
      const timer = setTimeout(() => setShowConsent(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // If consent was already given, dispatch the event again for any components that might have missed it
      if (consentChoice === 'accepted') {
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('cookie-consent-accepted'))
        }, 100)
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)

    // Trigger Google Analytics initialization
    window.dispatchEvent(new CustomEvent('cookie-consent-accepted'))
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Cookie Consent
        </h3>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        We use cookies and analytics to improve your experience on our website.
        By accepting, you agree to our use of cookies for analytics and
        marketing purposes.
      </p>

      <div className="flex gap-3">
        <Button onClick={handleAccept} className="flex-1" size="sm">
          Accept All
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="flex-1"
          size="sm"
        >
          Decline
        </Button>
      </div>
    </div>
  )
}
