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
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:items-center lg:gap-y-20">
            {/* Text Content */}
            <div className="lg:pr-8 lg:pt-4 lg:col-span-3 flex flex-col justify-center">
              <div className="max-w-lg lg:max-w-2xl">
                {/* Heading with circular image on mobile */}
                <div className="flex items-center gap-4 lg:block">
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                      Get a{' '}
                      <span className="font-serif">Financial Watchdog</span>
                    </h1>
                  </div>
                  {/* Circular image for mobile/tablet, hidden on large screens */}
                  <div className="flex-shrink-0 lg:hidden">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
                      <Image
                        src="/watchdog.svg"
                        alt="Watchdog AI-powered invoice validation logo - dog with magnifying glass examining documents"
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-lg xl:text-2xl leading-7 sm:leading-8 text-stone-600">
                  <span className="font-bold">
                    You&apos;re probably losing millions from invoicing errors.
                  </span>{' '}
                  <span className="sm:block">
                    Find and fix them with Watchdog.
                  </span>
                </p>
                <div className="mt-8 sm:mt-10 flex items-center gap-x-4 sm:gap-x-6 justify-center sm:justify-start">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-auto max-w-xs px-8"
                  >
                    Request Demo
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Large Image for desktop */}
            <div className="hidden lg:flex justify-center items-center lg:col-span-2 min-h-[400px]">
              <Image
                src="/watchdog.svg"
                alt="Watchdog AI invoice validation software - automated invoice error detection and procurement oversight"
                width={350}
                height={350}
                className="w-full max-w-xs h-auto"
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
