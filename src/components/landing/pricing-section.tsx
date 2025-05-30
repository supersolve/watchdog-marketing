import { Button } from '../ui/button'
import { SectionTitle } from '../ui/section-title'
import { cn } from '@/lib/utils'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'For the curious who want to try Watchdog',
    invoiceLimit: 'Includes 500 invoice scans and three alerts',
    cta: 'Try for free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$1000',
    period: '/month', 
    description: 'For businesses wanting to boost their bottom line',
    invoiceLimit: 'Includes 10,000 invoice scans and unlimited alerts',
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large businesses with specific needs',
    invoiceLimit: 'Includes unlimited scans and alerts',
    cta: 'Contact Sales',
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Simple, transparent pricing"
          subtitle="Choose the plan that fits your business needs. Start free and scale as you grow."
        />

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative rounded-2xl border bg-white p-8 shadow-sm',
                tier.popular
                  ? 'border-accent ring-2 ring-accent/20'
                  : 'border-stone-200'
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-stone-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-semibold text-stone-600 min-h-[3rem]">
                  {tier.description}
                </p>
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-stone-900">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-lg text-stone-600">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-sm text-stone-600 whitespace-pre-line">
                    {tier.invoiceLimit}
                  </p>
                </div>

                <Button
                  variant={tier.popular ? 'accent' : 'outline'}
                  size="lg"
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
