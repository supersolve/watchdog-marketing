'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { SectionTitle } from '../ui/section-title'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { DemoRequestModal } from '../app/demo-request-modal'

const pricingTiers = [
  {
    name: 'Free',
    price: 'NOK 0',
    period: '/per month',
    description: 'For the curious who want to try Watchdog',
    cta: 'Request Demo',
    url: 'https://app.watchdog.no/sign-up',
    popular: false,
    features: [
      'Includes 500 invoices',
      'Includes 1 agreement',
      'No credit card required',
    ],
  },
  {
    name: 'Pro',
    price: 'Custom',
    period: '',
    description: 'For businesses wanting to improve their bottom line',
    cta: 'Request Demo',
    url: '#contact',
    popular: true,
    features: [
      'Unlimited invoices',
      'Unlimited agreements',
      'Dedicated account manager',
    ],
  },
]

export function PricingSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string>('')
  const [activeMobileTier, setActiveMobileTier] = useState(1) // Default to second tier (Pro)

  const handleRequestDemo = (tierName: string) => {
    setSelectedTier(tierName)
    setIsDemoModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsDemoModalOpen(false)
    setSelectedTier('')
  }

  const handleMobileTierChange = (index: number) => {
    setActiveMobileTier(index)
  }

  const renderPricingCard = (tier: (typeof pricingTiers)[0]) => (
    <div
      key={tier.name}
      className={cn(
        'relative rounded-2xl border bg-white shadow-sm flex flex-col',
        tier.popular
          ? 'border-accent ring-2 ring-accent/20'
          : 'border-stone-200'
      )}
    >
      {tier.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center rounded-full bg-accent px-6 py-1 text-sm font-medium text-white whitespace-nowrap">
            Most popular
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className="px-8 py-6 text-center">
        <h3 className="text-xl font-semibold text-stone-900">{tier.name}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-4xl font-bold text-stone-900">
            {tier.price}
          </span>
          {tier.period && (
            <span className="text-lg text-stone-600">{tier.period}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-stone-600">{tier.description}</p>
      </div>

      {/* Features Section */}
      <div className="px-8 py-6 flex-grow">
        <div className="grid grid-cols-1 gap-3">
          {tier.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm">
              <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
              <span className="text-stone-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 pb-8">
        <Button
          variant={tier.popular ? 'accent' : 'outline'}
          size="lg"
          className="w-full"
          onClick={() => handleRequestDemo(tier.name)}
        >
          {tier.cta}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            title="Try for free, scale if you want"
            subtitle="See if Watchdog works for you, then pay for what you need"
          />

          {/* Mobile View - Single Card with Pills */}
          <div className="mx-auto mt-16 lg:hidden">
            <div className="max-w-sm mx-auto">
              {renderPricingCard(pricingTiers[activeMobileTier])}
            </div>

            {/* Mobile Pills Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {pricingTiers.map((tier, index) => (
                <button
                  key={tier.name}
                  onClick={() => handleMobileTierChange(index)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeMobileTier === index
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  )}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop View - All Cards */}
          <div className="hidden lg:grid mx-auto mt-16 max-w-4xl grid-cols-2 gap-16">
            {pricingTiers.map((tier) => renderPricingCard(tier))}
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseModal}
        pricingTier={selectedTier}
        buttonSource={
          selectedTier ? `plan: ${selectedTier.toLowerCase()}` : 'pricing'
        }
      />
    </>
  )
}
