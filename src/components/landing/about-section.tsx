import { SectionTitle } from '../ui/section-title'
import Image from 'next/image'

const investors = [
  { name: 'A&CO', logo: '/logo-a&co.png' },
  { name: 'Open AI', logo: '/logo-openAI.svg' },
  { name: 'Cognite', logo: '/logo-cognite.png' },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="We are a team of serial founders and former consultants at BCG and BEKK"
        />

        {/* Team Description */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8">
            <h3 className="text-xl font-md tracking-tight text-stone-900 sm:text-3xl">
              We want to permanently remove invoice errors from society
            </h3>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Businesses lose millions of NOK every year due to invoicing
              errors.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Previously, financial teams had to either spend long hours
              manually analyzing order lines or blindly trust invoices from
              their suppliers.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Now, we are building Watchdog to allow CFOs, controllers, and
              procurers to monitor every order line and cut time on analysis{' '}
              from hours to seconds.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="aspect-square rounded-2xl bg-stone-200 p-8 shadow-md">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src="/benjamin.png"
                    alt="Benjamin - Founder"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div className="mx-auto mt-32 mb-16 max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h3 className="text-xl font-md tracking-tight text-stone-900 sm:text-3xl">
              Backed by serial founders and executives working at
            </h3>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:max-w-none lg:grid-cols-3">
            {investors.map((investor) => (
              <div
                key={investor.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={investor.logo}
                  alt={`${investor.name} logo`}
                  width={400}
                  height={200}
                  className="object-contain max-h-12 w-auto max-w-full"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
