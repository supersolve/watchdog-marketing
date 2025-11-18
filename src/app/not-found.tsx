import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description:
    'The page you are looking for does not exist. Return to Watchdog homepage or explore our AI-powered invoice validation platform.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-9xl font-serif font-bold text-stone-200 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-stone-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="accent" size="lg">
              Go to Homepage
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn About Us
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-sm text-stone-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/"
              className="text-stone-600 hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stone-600 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-stone-600 hover:text-accent transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/legal/privacy"
              className="text-stone-600 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
