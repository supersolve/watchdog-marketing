import { Button } from '../ui/button'
import { SectionTitle } from '../ui/section-title'
import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const pricingTiers = [
  {
    name: 'Free',
    price: 'NOK 0',
    period: '/month',
    description: 'Perfect for trying out Watchdog',
    invoiceLimit: 'Up to 100 invoices',
    features: [
      'Basic invoice scanning',
      'Email alerts',
      'Simple dashboard',
      'Community support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'NOK 10,000',
    period: '/month',
    description: 'For growing businesses',
    invoiceLimit: 'Up to 5,000 invoices/year',
    features: [
      'Advanced AI scanning',
      'Real-time alerts (email, SMS, in-app)',
      'Agreement upload & monitoring',
      'Advanced analytics dashboard',
      'Priority support',
      'API access',
      'Custom integrations',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    invoiceLimit: 'Unlimited invoices',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom AI training',
      'Advanced security & compliance',
      'White-label options',
      'Custom reporting',
      'SLA guarantees',
    ],
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
                <p className="mt-2 text-sm text-stone-600">
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
                  <p className="mt-2 text-sm font-medium text-accent">
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

              <div className="mt-8">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-sm text-stone-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-stone-600">
            All plans include a 14-day free trial. No credit card required.{' '}
            <a
              href="#"
              className="font-medium text-accent hover:text-accent/80"
            >
              View detailed feature comparison →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
