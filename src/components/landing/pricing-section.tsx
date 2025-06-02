import { Button } from '../ui/button'
import { SectionTitle } from '../ui/section-title'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Free',
    price: 'NOK 0',
    period: '/per month',
    description: 'For the curious who want to try Watchdog',
    cta: 'Try for free',
    url: 'https://app.thewatchdog.no/sign-up',
    popular: false,
    features: [
      '500 free invoices',
      'No credit card required'
    ]
  },
  {
    name: 'Pro',
    price: 'NOK 995',
    period: '/per month',
    description: 'For businesses wanting to boost their bottom line',
    cta: 'Try Watchdog',
    url: 'https://app.thewatchdog.no/sign-up',
    popular: true,
    features: [
      '1000 monthly invoices included',
      '5 NOK / additional invoice',
      'No credit card required'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large businesses with specific needs',
    cta: 'Contact Sales',
    url: '#contact',
    popular: false,
    features: [
      'Unlimited invoices',
      'Single sign-on (SSO)',
      'Dedicated account manager'
    ]
  },
]

export function PricingSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Try for free, scale if you want"
          subtitle="See if Watchdog works for you, then pay for what you need"
        />

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
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
                <h3 className="text-xl font-semibold text-stone-900">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-stone-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-lg text-stone-600">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-stone-600">
                  {tier.description}
                </p>
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
                {tier.url.startsWith('#') ? (
                  <Button
                    variant={tier.popular ? 'accent' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                ) : (
                  <a href={tier.url} rel="noopener noreferrer">
                    <Button
                      variant={tier.popular ? 'accent' : 'outline'}
                      size="lg"
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
