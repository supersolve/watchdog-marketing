'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { useForm } from '../hooks'
import { validateDemoRequest, DemoRequestData } from '@/lib/validations'

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  pricingTier?: string
}

// Wrapper function to match form hook interface
const validateForm = (data: DemoRequestData) => {
  const result = validateDemoRequest(data)
  return result.errors
}

export function DemoRequestModal({
  isOpen,
  onClose,
  pricingTier,
}: DemoRequestModalProps) {
  const [privacyConsent, setPrivacyConsent] = useState(false)

  const form = useForm<DemoRequestData>({
    initialValues: {
      companyName: '',
      email: '',
      pricingTier: pricingTier || '',
    },
    validate: validateForm,
    onSubmit: async (values) => {
      if (!privacyConsent) {
        throw new Error('Please consent to data processing to proceed')
      }

      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
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

      // Reset form and close modal after 3 seconds
      setTimeout(() => {
        handleClose()
      }, 3000)
    },
  })

  const handleClose = () => {
    if (!form.isSubmitting) {
      form.reset()
      setPrivacyConsent(false)
      onClose()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    form.setValue(name as keyof DemoRequestData, value)
  }

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <DialogHeader>
        <DialogTitle>Request a Demo</DialogTitle>
      </DialogHeader>

      <DialogContent>
        {form.isSubmitted ? (
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

            {form.generalError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{form.generalError}</p>
              </div>
            )}

            <form onSubmit={form.handleSubmit} className="space-y-4">
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
                  value={form.values.companyName}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                    form.errors.companyName
                      ? 'border-red-300'
                      : 'border-stone-300'
                  }`}
                  placeholder="Enter your company name"
                />
                {form.errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.errors.companyName}
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
                  value={form.values.email}
                  onChange={handleInputChange}
                  required
                  maxLength={254}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
                    form.errors.email ? 'border-red-300' : 'border-stone-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {form.errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.errors.email}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 text-accent border-stone-300 rounded focus:ring-accent"
                />
                <label
                  htmlFor="privacyConsent"
                  className="text-sm text-stone-600"
                >
                  I consent to the processing of my personal data for demo
                  scheduling purposes as described in the{' '}
                  <a
                    href="/legal/privacy"
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={form.isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  disabled={form.isSubmitting || !privacyConsent}
                >
                  {form.isSubmitting ? 'Submitting...' : 'Request Demo'}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
