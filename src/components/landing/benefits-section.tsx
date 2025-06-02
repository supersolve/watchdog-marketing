import { TrendingDownIcon, SearchIcon, ClockIcon } from 'lucide-react'

const benefits = [
  {
    icon: SearchIcon,
    title: 'To track every order line',
    description:
      'Track changes across hundreds of thousands of order lines from suppliers in real-time.',
  },
  {
    icon: TrendingDownIcon,
    title: 'To save costs',
    description:
      'Identify costly invoice errors and ensure your negotiated terms with suppliers are met.',
  },
  {
    icon: ClockIcon,
    title: 'To save time',
    description:
      'Stop spending hours on sparse, ad hoc errors checks, and focus on running your business.',
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
