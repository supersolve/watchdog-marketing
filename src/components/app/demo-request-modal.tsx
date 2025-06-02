'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

function validateCompanyName(name: string): boolean {
  return name.trim().length >= 1 && name.length <= 100
}

export function DemoRequestModal({ isOpen, onClose }: DemoRequestModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState({
    companyName: '',
    email: '',
  })

  const validateForm = () => {
    const errors = {
      companyName: '',
      email: '',
    }

    if (!validateCompanyName(formData.companyName)) {
      errors.companyName = 'Company name must be between 1 and 100 characters'
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Please provide a valid email address'
    }

    setValidationErrors(errors)
    return !errors.companyName && !errors.email
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    if (!privacyConsent) {
      setError('Please consent to data processing to proceed')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName.trim(),
          email: formData.email.trim(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            'Too many requests. Please try again in a few minutes.'
          )
        }
        throw new Error(result.error || 'Failed to submit demo request')
      }

      setIsSubmitted(true)

      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ companyName: '', email: '' })
        setPrivacyConsent(false)
        setValidationErrors({ companyName: '', email: '' })
        onClose()
      }, 3000)
    } catch (err) {
      // Don't log potentially sensitive data
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear validation errors when user starts typing
    if (validationErrors[name as keyof typeof validationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ companyName: '', email: '' })
      setIsSubmitted(false)
      setError('')
      setPrivacyConsent(false)
      setValidationErrors({ companyName: '', email: '' })
      onClose()
    }
  }

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <DialogHeader>
        <DialogTitle>Request a Demo</DialogTitle>
      </DialogHeader>

      <DialogContent>
        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Thank you!
            </h3>
            <p className="text-stone-600">
              We&apos;ll be in touch soon to schedule your demo.
            </p>
          </div>
        ) : (
          <>
            <p className="text-stone-600 mb-6">
              Write your email and we will help you get started.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                    validationErrors.companyName
                      ? 'border-red-300'
                      : 'border-stone-300'
                  }`}
                  placeholder="Your company name"
                />
                {validationErrors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  maxLength={254}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                    validationErrors.email
                      ? 'border-red-300'
                      : 'border-stone-300'
                  }`}
                  placeholder="your@company.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-stone-700">
                  I consent to my data being processed to schedule a demo.{' '}
                  <a
                    href="/legal/privacy"
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  disabled={isSubmitting || !privacyConsent}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Request Demo'
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
