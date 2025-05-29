'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '../ui/section-title'

const steps = [
  {
    number: 1,
    title: 'Connect Your Data',
    description:
      'Connect Watchdog to your accounting software or upload your invoices manually and agreements directly',
    details:
      'Connect Watchdog to your accounting software or upload your invoices and agreements directly.  Our API integration ensures your data stays protected.',
    image: '/placeholder.svg',
  },
  {
    number: 2,
    title: 'Let Watchdog Work',
    description:
      'Let Watchdog continually monitor your invoices and agreements',
    details:
      'Let Watchdog continually monitor your invoices and agreements for errors or unexpected changes - such as price jumps or missing discounts.',
    image: '/placeholder.svg',
  },
  {
    number: 3,
    title: 'Get Instant Alerts',
    description:
      'Receive alerts when Watchdog detects an issue and recommendations on how to resolve it',
    details:
      'Receive alerts when Watchdog detects an issue and get recommendations on how to resolve it with your suppliers.',
    image: '/placeholder.svg',
  },
]

export function HowItWorksSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1)

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber)
  }

  const currentStep =
    steps.find((step) => step.number === expandedStep) || steps[0]

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="How Watchdog works"
          subtitle="Get your own financial Watchdog in 3 simple steps"
        />

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Single Image - Desktop Only */}
            <div className="hidden lg:flex justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <Image
                  src={currentStep.image}
                  alt={`${currentStep.title} illustration`}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Steps List */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={cn(
                      'rounded-lg border transition-all duration-200',
                      expandedStep === step.number
                        ? 'border-accent bg-accent/10 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    )}
                  >
                    <button
                      onClick={() => toggleStep(step.number)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div
                            className={cn(
                              'flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold mt-1',
                              expandedStep === step.number
                                ? 'bg-accent text-white'
                                : 'bg-stone-100 text-stone-600'
                            )}
                          >
                            {step.number}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">
                              {step.title}
                            </h3>
                            {expandedStep !== step.number && (
                              <p className="text-base text-stone-600 mt-2 leading-relaxed">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronDownIcon
                          className={cn(
                            'h-6 w-6 text-stone-400 transition-transform duration-200 flex-shrink-0 mt-1',
                            expandedStep === step.number ? 'rotate-180' : ''
                          )}
                        />
                      </div>
                    </button>

                    {/* Expandable Content - Mobile Image + Details */}
                    {expandedStep === step.number && (
                      <div className="px-6 pb-6">
                        {/* Mobile Image - Only when expanded */}
                        <div className="lg:hidden mt-4 mb-6">
                          <div className="relative w-full max-w-sm mx-auto">
                            <Image
                              src={step.image}
                              alt={`${step.title} illustration`}
                              width={400}
                              height={300}
                              className="w-full h-auto rounded-lg shadow-md"
                            />
                          </div>
                        </div>

                        <div className="lg:ml-14 pt-4 border-t border-accent/20">
                          <p className="text-stone-700 leading-relaxed text-base">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
