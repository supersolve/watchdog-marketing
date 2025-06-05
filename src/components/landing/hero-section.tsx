'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { DemoRequestModal } from '../app/demo-request-modal'

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-20">
            {/* Text Content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* Heading with circular image on mobile */}
                <div className="flex items-center gap-4 lg:block">
                  <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
                      Get your{' '}
                      <span className="font-serif">Financial Watchdog</span>
                    </h1>
                  </div>
                  {/* Circular image for mobile/tablet, hidden on large screens */}
                  <div className="flex-shrink-0 lg:hidden">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
                      <Image
                        src="/watchdog0.svg"
                        alt="Financial Watchdog"
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-lg xl:text-xl leading-7 sm:leading-8 text-stone-600">
                  <span className="text-stone-900 font-bold">
                    Never overpay again.
                  </span>{' '}
                  Watchdog automatically scans your invoices, compares them to
                  your agreements, and alerts you of errors before they hurt
                  your bottom line.
                </p>
                <div className="mt-8 sm:mt-10 flex items-center gap-x-4 sm:gap-x-6">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    Request Demo
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Large Image for desktop */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <Image
                src="/watchdog0.svg"
                alt="Financial Watchdog Dashboard Preview"
                width={400}
                height={400}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        buttonSource="hero"
      />
    </>
  )
}
