'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '../ui/section-title'

const steps = [
  {
    number: 1,
    title: 'Scan every invoice',
    description: 'Watchdog scans both historical and new invoices',
    details:
      'Watchdog scans both historical and new invoices. Just set a start date, then connect them via your accounting software or upload them directly.',
    image: '/step1.png',
  },
  {
    number: 2,
    title: 'Receive alerts',
    description: 'Watchdog alerts you when it detects an issue',
    details:
      'Watchdog alerts you when it detects an issue, collects the relevant docs, and allows you to validate the issue in seconds.',
    image: '/step2.png',
  },
  {
    number: 3,
    title: 'Get your money back',
    description:
      'Watchdog summarizes the errors and drafts a follow-up email to the supplier',
    details:
      'Watchdog summarizes the errors and drafts a follow-up email to the supplier - making it easy for them to validate the error and refund you.',
    image: '/step3.png',
  },
]

export function HowItWorksSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber)
  }

  const currentStep =
    steps.find((step) => step.number === expandedStep) || steps[0]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="How Watchdog works"
          subtitle="Upload your data and let Watchdog work for you"
        />

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Single Image - Desktop Only */}
            <div className="hidden lg:flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <Image
                  src={currentStep.image}
                  alt={`${currentStep.title} illustration`}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
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
                        ? 'border-accent bg-stone-50 lg:bg-stone-200 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    )}
                  >
                    <button
                      onClick={() => toggleStep(step.number)}
                      className="w-full p-6 text-left focus:outline-none rounded-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div
                            className={cn(
                              'flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold flex-shrink-0 mt-0.5',
                              expandedStep === step.number
                                ? 'bg-accent text-white'
                                : 'bg-stone-100 text-stone-600'
                            )}
                          >
                            {step.number}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">
                              {step.title}
                            </h3>
                            {expandedStep !== step.number && (
                              <p className="text-base text-stone-600 leading-relaxed">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronDownIcon
                          className={cn(
                            'h-6 w-6 text-stone-400 transition-transform duration-200 flex-shrink-0 mt-0.5',
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
                              className="w-full h-auto rounded-lg"
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
