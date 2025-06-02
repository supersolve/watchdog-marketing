import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="text-5xl tracking-tight sm:text-6xl lg:text-5xl xl:text-6xl">
                Get your <span className="font-serif">Financial Watchdog</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-600 sm:text-xl">
                <span className="text-stone-900 font-bold">
                  Never overpay again.
                </span>{' '}
                Watchdog automatically scans your invoices, compares them to
                your agreements, and alerts you of errors before they hurt your
                bottom line.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="https://app.thewatchdog.no/sign-up" rel="noopener noreferrer">
                  <Button variant="accent" size="lg">
                    Try Watchdog
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/watchdog0.svg"
              alt="Financial Watchdog Dashboard Preview"
              width={400}
              height={400}
              className="w-full h-auto rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
