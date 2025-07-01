import { TrendingUpIcon, SearchIcon, ClockIcon } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUpIcon,
    title: 'To boost profits',
    description:
      'Cut costly invoice errors and ensure negotiated terms with suppliers are met.',
  },
  {
    icon: SearchIcon,
    title: 'To stay in control',
    description:
      'Scan every order line from suppliers for important changes.',
  },
  {
    icon: ClockIcon,
    title: 'To save time',
    description:
      'Check for errors in minutes, not hours, and prioritize errors that matter.',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-stone-900 sm:text-4xl">
            Why do companies use Watchdog?
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                {/* Icon */}
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
