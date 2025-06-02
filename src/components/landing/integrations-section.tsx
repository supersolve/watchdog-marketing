'use client'

import { CheckIcon } from 'lucide-react'
import { SectionTitle } from '../ui/section-title'
import Image from 'next/image'

type ImageLogo = {
  name: string
  type: 'image'
  src: string
  bgColor: string
  textColor: string
}

type IconLogo = {
  name: string
  type: 'icon'
  icon: string
  bgColor: string
  textColor: string
}

type Logo = ImageLogo | IconLogo

type Integration = {
  name: string
  description: string
  country: string
  logos: Logo[]
  status: 'available' | 'coming'
}

const integrations: Integration[] = [
  {
    name: 'Tripletex',
    description: 'Software used by 140 000 Norwegian businesses',
    country: 'Norway',
    logos: [
      {
        name: 'Tripletex',
        type: 'image',
        src: '/logo-tripletex.png',
        bgColor: 'bg-white',
        textColor: 'text-blue-600',
      },
    ],
    status: 'available',
  },
  {
    name: 'PowerOffice, Fiken, and more',
    description:
      'We are continually updating support for PowerOffice, Fiken, and more',
    country: 'Norway',
    logos: [
      {
        name: 'PowerOffice',
        type: 'image',
        src: '/logo-poweroffice.png',
        bgColor: 'bg-white',
        textColor: 'text-green-600',
      },
      {
        name: 'Fiken',
        type: 'image',
        src: '/logo-fiken.svg',
        bgColor: 'bg-white',
        textColor: 'text-purple-600',
      },
    ],
    status: 'coming',
  },
  {
    name: 'Quickbooks and more',
    description: 'We will open support for US-based software in Q3 2025',
    country: 'United States',
    logos: [
      {
        name: 'Intuit QuickBooks',
        type: 'image',
        src: '/logo-intuit.svg',
        bgColor: 'bg-white',
        textColor: 'text-green-700',
      },
    ],
    status: 'coming',
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Use what you already have"
          subtitle="Automatically monitor incoming invoices from your existing accounting system"
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
                    // Available badge - full text on desktop, icon only on mobile with tooltip
                    <div className="relative group">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        <CheckIcon className="h-3 w-3" />
                        <span className="ml-1 hidden sm:inline">Available</span>
                      </span>
                      {/* Mobile tooltip */}
                      <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-stone-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 sm:hidden">
                        Available
                      </div>
                    </div>
                  ) : (
                    // Coming Soon badge - shortened text on mobile with tooltip
                    <div className="relative group">
                      <span className="inline-flex items-center rounded-full bg-stone-200 px-2 py-1 text-xs font-medium text-stone-800">
                        <span className="sm:hidden">Soon</span>
                        <span className="hidden sm:inline">Coming Soon</span>
                      </span>
                      {/* Mobile tooltip */}
                      <div className="absolute top-full right-0 mt-1 px-2 py-1 bg-stone-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 sm:hidden">
                        Coming Soon
                      </div>
                    </div>
                  )}
                </div>

                {/* Logo Bubbles */}
                <div className="mb-4 hidden sm:block">
                  <div className="flex gap-2">
                    {integration.logos.map((logo, index) => (
                      <div
                        key={`${integration.name}-${index}`}
                        className={`h-16 w-16 rounded-full ${logo.bgColor} flex items-center justify-center flex-shrink-0 border border-stone-100`}
                        title={logo.name}
                      >
                        {logo.type === 'image' ? (
                          <div className="relative h-14 w-14">
                            <Image
                              src={logo.src}
                              alt={`${logo.name} logo`}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        ) : (
                          <span
                            className={`text-xl font-bold ${logo.textColor}`}
                            role="img"
                            aria-label={`${logo.name} logo`}
                          >
                            {logo.icon}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 pr-16 sm:pr-0">
                    <span
                      className="text-sm"
                      role="img"
                      aria-label={`${integration.country} flag`}
                    >
                      {integration.country === 'Norway' ? '🇳🇴' : '🇺🇸'}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {integration.name}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-stone-600">
              Don&apos;t see your accounting software? Contact us at{' '}
              <a
                href="mailto:contact@supersolve.ai"
                className="text-blue-600 hover:underline"
              >
                contact@supersolve.ai{' '}
              </a>
              to request an integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
