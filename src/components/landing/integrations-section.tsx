'use client'

import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import { SectionTitle } from '../ui/section-title'

const integrations = [
  {
    name: 'Tripletex',
    description: 'Complete accounting and invoicing solution',
    logo: '/placeholder.svg',
    status: 'available',
    features: ['Invoice monitoring', 'Real-time sync', 'Automated alerts'],
  },
  {
    name: 'AccountFlow',
    description: 'Modern cloud-based accounting platform',
    logo: '/placeholder.svg',
    status: 'coming',
    features: ['Invoice tracking', 'Contract analysis', 'Price validation'],
  },
  {
    name: 'FinanceHub',
    description: 'Enterprise financial management system',
    logo: '/placeholder.svg',
    status: 'coming',
    features: ['Bulk processing', 'Advanced reporting', 'Multi-currency'],
  },
  {
    name: 'BookKeeper Pro',
    description: 'Professional bookkeeping and tax software',
    logo: '/placeholder.svg',
    status: 'coming',
    features: ['Tax compliance', 'Expense tracking', 'Audit trails'],
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Seamlessly connect"
          subtitle="Watchdog automatically monitors your invoices in your accounting system"
        />

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Logo */}
                <div className="mb-4">
                  <div className="h-12 w-12 rounded-lg bg-stone-100 flex items-center justify-center">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    {integration.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {integration.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-stone-600">{feature}</span>
                    </div>
                  ))}
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
