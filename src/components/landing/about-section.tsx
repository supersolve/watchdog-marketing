import { SectionTitle } from '../ui/section-title'
import Image from 'next/image'

const investors = [
  { name: 'A&CO', logo: '/logo-a&co.png' },
  { name: 'Open AI', logo: '/logo-openAI.svg' },
  { name: 'Cognite', logo: '/logo-cognite.png' },
]

const previousExperience = [
  { name: 'BCG', logo: '/logo-bcg.svg' },
  { name: 'BEKK', logo: '/logo-bekk.svg' },
]

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle title="About Us" />

        {/* Hero Section */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-stone-900/5 rounded-2xl -z-10" />
            <div className="aspect-square rounded-2xl bg-white p-8 shadow-xl ring-1 ring-stone-900/10">
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

          <div className="lg:pl-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
                We want to permanently remove invoice errors from society
              </h3>
            </div>

            <div className="space-y-4 text-lg text-stone-600">
              <p>
                Businesses lose millions of NOK every year due to invoicing
                errors. Previously, financial teams had to either spend long
                hours manually analyzing order lines, or blindly trust invoices
                from their suppliers.
              </p>

              <p>
                Now, we are building Watchdog to allow CFOs, controllers, and
                procurers to identify and resolve every error in minutes.
              </p>
            </div>

            {/* Team Experience */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
                Team Experience
              </h3>
              <p className="mt-4 mb-10 text-lg text-stone-600">
                Our team consists of serial founders and consultants from BCG
                and BEKK.
              </p>
              <div className="grid grid-cols-2 gap-16">
                {previousExperience.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-start"
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={180}
                      height={90}
                      className="object-contain h-10 w-auto"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-stone-900">
              Backed by serial founders and executives working at
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 items-center justify-items-center max-w-4xl mx-auto">
            {investors.map((investor) => (
              <div
                key={investor.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={investor.logo}
                  alt={`${investor.name} logo`}
                  width={200}
                  height={100}
                  className="object-contain h-8 w-auto"
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
