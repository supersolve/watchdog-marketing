'use client'

import Image from 'next/image'
import { SectionTitle } from '../ui/section-title'

const testimonials = [
  {
    id: 1,
    company: 'Baker Brun',
    logo: '/placeholder.svg',
    quote: 'xxx',
    name: 'Magnus Brun',
    role: 'CEO',
    photo: '/placeholder.svg',
  },
  {
    id: 2,
    company: 'Digg Pizza',
    logo: '/placeholder.svg',
    quote: 'xxx',
    name: 'Gaute Bakke',
    role: 'CEO',
    photo: '/placeholder.svg',
  },
  {
    id: 3,
    company: 'Ghost Town',
    logo: '/placeholder.svg',
    quote: 'xxx',
    name: 'Chris Jarodd',
    role: 'CEO',
    photo: '/placeholder.svg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="What our customers say"
          subtitle="See how companies like yours are saving money and time with Watchdog"
        />

        {/* Testimonials Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full max-w-md h-[28rem]"
                role="group"
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className="bg-background rounded-lg border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
                  {/* Company Logo */}
                  <div className="mb-8">
                    <div className="h-12 w-40 relative">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>

                  {/* Quote - Serif Font */}
                  <div className="mb-8 flex-grow">
                    <blockquote className="text-stone-700 leading-relaxed text-lg font-serif">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>

                  {/* Customer Details with Photo - Footer */}
                  <div className="border-t border-stone-200 pt-6 mt-auto">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 relative rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.photo}
                          alt={`${testimonial.name} photo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">
                          {testimonial.name}
                        </div>
                        <div className="text-stone-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
