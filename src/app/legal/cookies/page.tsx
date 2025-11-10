import { SectionTitle } from '@/components/ui/section-title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Learn how Watchdog uses cookies and similar technologies on our website. Manage your cookie preferences and understand our use of Google Analytics.',
  alternates: {
    canonical: 'https://watchdog.no/legal/cookies',
  },
  openGraph: {
    title: 'Cookie Policy - Watchdog',
    description:
      'Learn how Watchdog uses cookies and similar technologies on our website.',
    url: 'https://watchdog.no/legal/cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Cookie Policy" />

        <div className="mt-16 prose prose-lg prose-stone mx-auto">
          <p className="text-sm text-stone-500 mb-8">
            Last updated: 10 November 2025
          </p>

          <p className="text-stone-600 mb-8">
            This Cookie Policy explains how supersolve AS (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar
            technologies when you visit our websites. For information about how
            we process personal data more broadly, please refer to our{' '}
            <a href="/legal/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              1. What are cookies?
            </h2>
            <p className="text-stone-600 mb-6">
              Cookies are small text files stored on your device when you visit
              a website. They help the website function properly, remember your
              preferences, and provide usage insights. We also use similar
              technologies, such as local storage, and refer to them
              collectively as &ldquo;cookies&rdquo; in this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              2. What types of cookies do we use?
            </h2>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Strictly necessary cookies
            </h3>
            <p className="text-stone-600 mb-4">
              These are essential for core site functionality and cannot be
              disabled. They support basic features such as page navigation and
              secure access. Example: Cookie preference storage, session
              handling
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Analytics cookies
            </h3>
            <p className="text-stone-600 mb-4">
              We use Google Analytics 4 to help us understand how visitors
              interact with our website (e.g. page visits, device types,
              referral sources). These cookies are only set with your consent.
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>
                <strong>Data collected:</strong> pseudonymized identifiers,
                device/browser info, usage patterns
              </li>
              <li>
                <strong>Retention:</strong> up to 2 months
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              3. Managing your preferences
            </h2>
            <p className="text-stone-600 mb-6">
              You can accept or reject analytics cookies through the cookie
              banner that appears on your first visit. Disabling cookies may
              affect the functionality of certain parts of the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              4. Third-party services
            </h2>
            <p className="text-stone-600 mb-6">
              We use Google Analytics, a web analytics service provided by
              Google LLC. Data may be processed outside the EU/EEA. Where
              applicable, such transfers are protected by Standard Contractual
              Clauses (SCCs) and appropriate safeguards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              5. Updates to this policy
            </h2>
            <p className="text-stone-600 mb-6">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, regulation, or our data practices. The
              &ldquo;Last updated&rdquo; date above will be revised accordingly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              6. Contact
            </h2>
            <p className="text-stone-600 mb-2">
              <strong>supersolve AS</strong>
            </p>
            <p className="text-stone-600">
              <strong>Email:</strong> privacy@supersolve.ai
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
