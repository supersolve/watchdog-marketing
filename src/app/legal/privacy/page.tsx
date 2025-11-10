import { SectionTitle } from '@/components/ui/section-title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Watchdog protects your privacy and handles your personal information. GDPR-compliant data processing for invoice validation and procurement software.',
  alternates: {
    canonical: 'https://watchdog.no/legal/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Watchdog',
    description:
      'Learn how Watchdog protects your privacy and handles your personal information.',
    url: 'https://watchdog.no/legal/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Privacy Policy" />
        <div className="mt-16 prose prose-lg prose-stone mx-auto">
          <p className="text-sm text-stone-500 mb-8">
            Last updated: 10 November 2025
          </p>

          <p className="text-stone-600 mb-8">
            This Privacy Policy describes how supersolve AS (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;), through our
            &ldquo;Watchdog&rdquo; service, processes personal data on behalf of
            our customers.
          </p>

          <p className="text-stone-600 mb-8">We act in two distinct roles:</p>
          <ul className="list-disc pl-6 text-stone-600 mb-8">
            <li>
              As a <strong>Data Controller</strong> when you visit our website.
            </li>
            <li>
              As a <strong>Data Processor</strong> when we provide the Watchdog
              service to our business customers, who act as Data Controllers
              under applicable data protection laws.
            </li>
          </ul>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              1. Who we are
            </h2>
            <p className="text-stone-600 mb-6">
              supersolve AS (Org. no. 933 860 175) is the provider of Watchdog,
              an AI-powered tool that analyzes invoice and contract data to help
              businesses detect billing errors and cost-saving opportunities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              2. Website Visitors – Controller Role
            </h2>
            <p className="text-stone-600 mb-4">
              When you visit our website, we may collect limited personal data,
              such as your:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-4">
              <li>Browser and device information.</li>
              <li>Information submitted through contact forms.</li>
            </ul>
            <p className="text-stone-600 mb-4">
              This data is processed to operate the site securely, respond to
              inquiries, and improve site performance. We do not use your data
              for profiling, advertising, or resale.
            </p>
            <p className="text-stone-600 mb-6">
              Website logs are retained for up to 2 months unless required for
              security investigations. Contact form submissions are stored for
              up to 12 months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              3. Watchdog Customers – Processor Role
            </h2>
            <p className="text-stone-600 mb-4">
              When delivering the Watchdog service, we process personal data on
              behalf of our customers and only in accordance with their
              documented instructions. The data is solely used to:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-4">
              <li>
                Detect pricing discrepancies, missing discounts, duplicate
                charges, and other irregularities.
              </li>
              <li>
                Present insights to authorized users for validation and action.
              </li>
              <li>Improve financial accuracy and reduce costs.</li>
            </ul>
            <p className="text-stone-600 mb-6">
              We do not use data for profiling, marketing, or unrelated
              purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              4. Data processing
            </h2>
            <p className="text-stone-600 mb-4">
              We process business-related personal data appearing in invoices
              and contracts, such as:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-4">
              <li>
                <strong>Contact Details:</strong> Name, company email, phone
                number, and job title of our customers&rsquo; or their
                suppliers&rsquo; employees.
              </li>
              <li>
                <strong>User Information:</strong> Usernames or User ID of our
                customer&rsquo;s employees who access Watchdog.
              </li>
              <li>
                <strong>Invoice &amp; Contract Data:</strong> Personal data that
                may be found in invoices, contracts, or their attachments, such
                as the names of consultants.
              </li>
            </ul>
            <p className="text-stone-600 mb-6">
              We do not process special categories of data (sensitive personal
              data) beyond what may incidentally appear in documents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              5. Data retention
            </h2>
            <p className="text-stone-600 mb-6">
              We retain personal data processed on behalf of customers only for
              the duration of the customer relationship. Upon termination of the
              service agreement, we delete all customer data without undue
              delay, unless legal obligations require a longer retention period.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              6. Legal basis
            </h2>
            <p className="text-stone-600 mb-6">
              We process data on behalf of our customers, based on a data
              processing agreement under Article 28 of the GDPR. Each customer
              remains the data controller.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              7. Sub-processors and transfers
            </h2>
            <p className="text-stone-600 mb-4">
              We use trusted sub-processors to support delivery of the Watchdog
              service. Primary processing and storage occur in secure EU/EEA
              data centers.
            </p>
            <p className="text-stone-600 mb-6">
              Some sub-processors (e.g., Google Cloud) may process data outside
              the EU/EEA. In such cases, we rely on EU Standard Contractual
              Clauses (SCCs) and implement appropriate safeguards to ensure
              lawful transfers. A list of sub-processors is available upon
              request.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              8. Security measures
            </h2>
            <p className="text-stone-600 mb-4">
              Data security is a high priority. We have implemented appropriate
              technical and organizational measures to protect personal data,
              including:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>TLS 1.3 encryption in transit</li>
              <li>AES-256 encryption at rest</li>
              <li>Strict access control with multi-factor authentication</li>
              <li>Hosting in secure EU-based data centers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              9. Your rights
            </h2>
            <p className="text-stone-600 mb-6">
              If you are a data subject, please contact the organization using
              Watchdog (our customer) to exercise your rights under the GDPR
              (e.g. access, rectification, deletion).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              10. Contact
            </h2>
            <p className="text-stone-600">
              <strong>supersolve AS</strong>
            </p>
            <p className="text-stone-600">
              <strong>Email:</strong> privacy@supersolve.ai
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              11. Changes to this Privacy Policy
            </h2>
            <p className="text-stone-600 mb-6">
              We may update this Privacy Policy from time to time to reflect
              legal, technical, or operational changes. If we make material
              changes, we will notify customers and update the &ldquo;Last
              updated&rdquo; date above.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
