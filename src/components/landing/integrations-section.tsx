'use client'

import { CheckIcon } from 'lucide-react'
import { SectionTitle } from '../ui/section-title'

const integrations = [
  {
    name: 'Tripletex',
    description: 'Software used by 140 000 Norwegian businesses',
    country: 'Norway',
    flag: '🇳🇴',
    status: 'available',
  },
  {
    name: 'PowerOffice, Fiken, and more',
    description:
      'Support for Power Office, Fiken, and more updated continually',
    country: 'Norway',
    flag: '🇳🇴',
    status: 'coming',
  },
  {
    name: 'Quickbooks and Xero',
    description: 'We will open support for Quickbooks and Xero in Q3 2025',
    country: 'United States',
    flag: '🇺🇸',
    status: 'coming',
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Seamlessly connect"
          subtitle="Watchdog automatically monitors invoices from your accounting system"
        />

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="relative bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {integration.status === 'available' ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      <CheckIcon className="h-3 w-3 mr-1" />
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-stone-200 px-2 py-1 text-xs font-medium text-stone-800">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Flag Icon */}
                <div className="mb-4">
                  <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <span className="text-3xl" role="img" aria-label={`${integration.country} flag`}>
                      {integration.flag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-stone-900">
                      {integration.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 mb-2 font-medium">
                    {integration.country}
                  </p>
                  <p className="text-sm text-stone-600">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-6">
              Don&apos;t see your accounting software? We&apos;re constantly
              adding new integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
