import { SectionTitle } from '@/components/ui/section-title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Watchdog',
  description:
    'Learn how Watchdog protects your privacy and handles your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
        />

        <div className="mt-16 prose prose-lg prose-stone mx-auto">
          <p className="text-sm text-stone-500 mb-8">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Personal Information
            </h3>
            <p className="text-stone-600 mb-4">
              We collect information you provide directly to us, such as when
              you create an account, use our services, or contact us. This may
              include:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Account credentials and authentication information</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Usage Information
            </h3>
            <p className="text-stone-600 mb-4">
              We automatically collect certain information about your use of our
              services:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage patterns and preferences</li>
              <li>Log data and analytics information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Financial Data
            </h3>
            <p className="text-stone-600 mb-6">
              To provide our overcharge detection services, we may collect and
              analyze:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>
                Transaction data from connected accounts (with your explicit
                consent)
              </li>
              <li>Billing and subscription information</li>
              <li>Payment history and patterns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-stone-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Detect and prevent overcharges on your accounts</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>
                Respond to your comments, questions, and customer service
                requests
              </li>
              <li>
                Communicate with you about products, services, and promotional
                offers
              </li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>
                Detect, investigate, and prevent fraudulent transactions and
                other illegal activities
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-stone-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties, except in the following
              circumstances:
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Service Providers
            </h3>
            <p className="text-stone-600 mb-4">
              We may share your information with third-party service providers
              who perform services on our behalf, such as payment processing,
              data analysis, email delivery, and customer service.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Legal Requirements
            </h3>
            <p className="text-stone-600 mb-4">
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Business Transfers
            </h3>
            <p className="text-stone-600 mb-6">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-stone-600 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
            <p className="text-stone-600 mb-6">
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-stone-600 mb-4">
              You have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Access and Portability
            </h3>
            <p className="text-stone-600 mb-4">
              You can request access to your personal information and receive a
              copy in a portable format.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Correction and Updates
            </h3>
            <p className="text-stone-600 mb-4">
              You can update or correct your personal information through your
              account settings or by contacting us.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Deletion
            </h3>
            <p className="text-stone-600 mb-4">
              You can request deletion of your personal information, subject to
              certain legal obligations.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Marketing Communications
            </h3>
            <p className="text-stone-600 mb-6">
              You can opt out of marketing communications at any time by
              following the unsubscribe instructions in our emails or contacting
              us directly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-stone-600 mb-4">
              We use cookies and similar tracking technologies to collect and
              use personal information about you. You can control cookies
              through your browser settings, but disabling cookies may affect
              the functionality of our services.
            </p>
            <p className="text-stone-600 mb-6">
              We use both session and persistent cookies for authentication,
              preferences, analytics, and advertising purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-stone-600 mb-6">
              We retain your personal information for as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes, and enforce our agreements. When we no longer need your
              information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-stone-600 mb-6">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information in accordance with applicable data
              protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-stone-600 mb-6">
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected such
              information, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-stone-600 mb-6">
              We may update this privacy policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of our services after such changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-stone-600 mb-4">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us:
            </p>
            <div className="bg-stone-50 p-6 rounded-lg">
              <p className="text-stone-600 mb-2">
                <strong>Email:</strong> privacy@watchdog.com
              </p>
              <p className="text-stone-600 mb-2">
                <strong>Address:</strong> Parkveien 12, 0164 Oslo, Norway
              </p>
              <p className="text-stone-600">
                <strong>Phone:</strong> +47 900 00 000
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
