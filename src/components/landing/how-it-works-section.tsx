'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionTitle } from '../ui/section-title'

const steps = [
  {
    number: 1,
    title: 'Connect Your Accounting Software',
    description:
      'Seamlessly integrate Watchdog with your accounting software API',
    details:
      'Connect your existing accounting system in just a few clicks. We support all major platforms including QuickBooks, Xero, FreshBooks, and more. Our secure API integration ensures your data stays protected while giving Watchdog access to analyze your invoices and agreements.',
    image: '/placeholder.svg',
  },
  {
    number: 2,
    title: 'Let Watchdog Work',
    description: 'Our AI automatically scans and analyzes your invoices',
    details:
      'Once connected, Watchdog continuously monitors your incoming invoices. Our advanced AI compares each invoice against your stored agreements, contracts, and historical pricing data to identify any discrepancies or unexpected changes.',
    image: '/placeholder.svg',
  },
  {
    number: 3,
    title: 'Get Instant Alerts',
    description: 'Receive immediate notifications about pricing discrepancies',
    details:
      "When Watchdog detects an issue - whether it's an overcharge, unexpected fee, or pricing change - you'll receive instant notifications via email, SMS, or in-app alerts. Never miss another billing error again.",
    image: '/placeholder.svg',
  },
  {
    number: 4,
    title: 'Add Your Agreements',
    description: 'Upload contracts and agreements for comprehensive monitoring',
    details:
      "Enhance Watchdog's accuracy by uploading your vendor contracts, service agreements, and pricing schedules. This allows for even more precise monitoring and helps catch subtle pricing changes that might otherwise go unnoticed.",
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
          title="How it works"
          subtitle="Get started in minutes and let Watchdog protect your finances automatically"
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
              <div className="space-y-4">
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
                      className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={cn(
                              'flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold',
                              expandedStep === step.number
                                ? 'bg-accent text-white'
                                : 'bg-stone-100 text-stone-600'
                            )}
                          >
                            {step.number}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-stone-900">
                              {step.title}
                            </h3>
                            {expandedStep !== step.number && (
                              <p className="text-sm text-stone-600 mt-1">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <ChevronDownIcon
                          className={cn(
                            'h-5 w-5 text-stone-400 transition-transform duration-200 flex-shrink-0',
                            expandedStep === step.number ? 'rotate-180' : ''
                          )}
                        />
                      </div>
                    </button>

                    {/* Expandable Content - Mobile Image + Details */}
                    {expandedStep === step.number && (
                      <div className="px-4 pb-4">
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

                        <div className="lg:ml-12 pt-4 border-t border-accent/20">
                          <p className="text-stone-700 leading-relaxed">
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
