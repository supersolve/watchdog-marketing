'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { SectionTitle } from '../ui/section-title'

const testimonials = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    logo: '/placeholder.svg',
    quote:
      "Watchdog has saved us thousands of dollars by catching billing errors we never would have noticed. It's like having a financial detective working 24/7.",
    name: 'Sarah Johnson',
    role: 'CFO',
    photo: '/placeholder.svg',
  },
  {
    id: 2,
    company: 'GreenLeaf Industries',
    logo: '/placeholder.svg',
    quote:
      "The integration was seamless and the alerts are incredibly accurate. We've reduced our invoice processing time by 60% while improving accuracy.",
    name: 'Michael Chen',
    role: 'Finance Director',
    photo: '/placeholder.svg',
  },
  {
    id: 3,
    company: 'Innovate Labs',
    logo: '/placeholder.svg',
    quote:
      'Before Watchdog, we were manually checking hundreds of invoices. Now we only focus on the ones that actually need attention. Game changer.',
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    photo: '/placeholder.svg',
  },
  {
    id: 4,
    company: 'BuildRight Construction',
    logo: '/placeholder.svg',
    quote:
      'The ROI was immediate. In the first month alone, Watchdog identified over $15,000 in billing discrepancies across our vendor contracts.',
    name: 'David Thompson',
    role: 'Financial Controller',
    photo: '/placeholder.svg',
  },
  {
    id: 5,
    company: 'Digital Dynamics',
    logo: '/placeholder.svg',
    quote:
      'What impressed us most was how quickly it learned our business patterns. The AI gets smarter every month and catches even subtle pricing changes.',
    name: 'Lisa Park',
    role: 'VP of Finance',
    photo: '/placeholder.svg',
  },
  {
    id: 6,
    company: 'Coastal Enterprises',
    logo: '/placeholder.svg',
    quote:
      'The peace of mind is invaluable. Knowing that every invoice is being monitored means I can focus on strategic initiatives instead of manual reviews.',
    name: 'Robert Martinez',
    role: 'Chief Financial Officer',
    photo: '/placeholder.svg',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0
    )
  }

  // Calculate how many cards fit in the viewport
  const cardWidth = 384 + 24 // w-96 + gap
  const translateX = -(currentIndex * cardWidth)

  return (
    <section className="py-16 sm:py-24 lg:py-32 overflow-x-clip">
      <div className="">
        <SectionTitle
          title="Don't take our word for it"
          subtitle="See how companies like yours are saving money and time with Watchdog"
        />

        {/* Slider Container */}
        <div className="mt-16 relative h-auto pb-5">
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-96 h-96 mr-6"
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

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-stone-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5 text-stone-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-stone-300 hover:border-stone-400 hover:bg-stone-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5 text-stone-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
