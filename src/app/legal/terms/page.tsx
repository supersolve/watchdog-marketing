import { SectionTitle } from '@/components/ui/section-title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Watchdog',
  description:
    'Read our terms of service to understand your rights and responsibilities when using Watchdog.',
}

export default function TermsPage() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Terms of Service"
          subtitle="These terms govern your use of Watchdog and our overcharge detection services."
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
              1. Acceptance of Terms
            </h2>
            <p className="text-stone-600 mb-4">
              By accessing or using Watchdog (&ldquo;the Service&rdquo;), you
              agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
              If you do not agree to these Terms, you may not use the Service.
            </p>
            <p className="text-stone-600 mb-6">
              These Terms apply to all users of the Service, including without
              limitation users who are browsers, customers, merchants, and
              contributors of content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-stone-600 mb-4">
              Watchdog is an overcharge detection service that helps users
              identify and recover from billing errors, subscription
              overcharges, and unauthorized charges across their financial
              accounts.
            </p>
            <p className="text-stone-600 mb-4">Our services include:</p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>Automated monitoring of your connected financial accounts</li>
              <li>Detection of potential overcharges and billing errors</li>
              <li>Assistance with dispute resolution and refund claims</li>
              <li>Subscription management and cancellation services</li>
              <li>Financial insights and spending analysis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              3. Account Registration and Security
            </h2>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Account Creation
            </h3>
            <p className="text-stone-600 mb-4">
              To use our Service, you must create an account and provide
              accurate, complete, and current information. You are responsible
              for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Account Security
            </h3>
            <p className="text-stone-600 mb-4">
              You are responsible for all activities that occur under your
              account. You must immediately notify us of any unauthorized use of
              your account or any other breach of security.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Financial Account Connection
            </h3>
            <p className="text-stone-600 mb-6">
              By connecting your financial accounts to our Service, you
              authorize us to access and analyze your transaction data solely
              for the purpose of providing overcharge detection services. We use
              bank-level security and encryption to protect your financial
              information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              4. User Responsibilities and Conduct
            </h2>
            <p className="text-stone-600 mb-4">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-stone-600 mb-6">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>
                Attempt to gain unauthorized access to any part of the Service
              </li>
              <li>
                Use the Service to transmit viruses, malware, or other harmful
                code
              </li>
              <li>
                Impersonate any person or entity or misrepresent your
                affiliation
              </li>
              <li>
                Collect or harvest any personally identifiable information from
                the Service
              </li>
              <li>
                Use automated systems to access the Service without permission
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              5. Subscription and Payment Terms
            </h2>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Subscription Plans
            </h3>
            <p className="text-stone-600 mb-4">
              We offer various subscription plans with different features and
              pricing. Current pricing and plan details are available on our
              website and may be updated from time to time.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Payment and Billing
            </h3>
            <p className="text-stone-600 mb-4">
              Subscription fees are billed in advance on a recurring basis. You
              authorize us to charge your designated payment method for all
              applicable fees.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Refunds and Cancellation
            </h3>
            <p className="text-stone-600 mb-4">
              You may cancel your subscription at any time through your account
              settings. Cancellations take effect at the end of your current
              billing period. We do not provide refunds for partial months of
              service, except as required by law.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Success Fees
            </h3>
            <p className="text-stone-600 mb-6">
              For certain services, we may charge a success fee based on the
              amount of money we help you recover from overcharges. These fees
              will be clearly disclosed before you authorize any recovery
              actions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-stone-600 mb-4">
              The Service and its original content, features, and functionality
              are owned by Watchdog and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p className="text-stone-600 mb-6">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on our Service without our
              prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              7. Privacy and Data Protection
            </h2>
            <p className="text-stone-600 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how
              we collect, use, and protect your information when you use the
              Service. By using the Service, you agree to the collection and use
              of information in accordance with our Privacy Policy.
            </p>
            <p className="text-stone-600 mb-6">
              We implement appropriate security measures to protect your
              personal and financial information, but we cannot guarantee
              absolute security of data transmitted over the internet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              8. Disclaimers and Limitations
            </h2>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Service Availability
            </h3>
            <p className="text-stone-600 mb-4">
              We strive to maintain high service availability, but we do not
              guarantee that the Service will be available at all times. The
              Service may be temporarily unavailable due to maintenance,
              updates, or technical issues.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              No Guarantee of Results
            </h3>
            <p className="text-stone-600 mb-4">
              While we work diligently to identify overcharges and assist with
              recovery, we cannot guarantee specific results or the amount of
              money you may recover. Success depends on various factors
              including merchant policies and the nature of the charges.
            </p>

            <h3 className="text-xl font-medium text-stone-800 mb-3">
              Third-Party Services
            </h3>
            <p className="text-stone-600 mb-6">
              Our Service may integrate with third-party financial institutions
              and service providers. We are not responsible for the
              availability, accuracy, or reliability of these third-party
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-stone-600 mb-4">
              To the maximum extent permitted by applicable law, Watchdog shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-stone-600 mb-6">
              Our total liability to you for all claims arising out of or
              relating to the Service shall not exceed the amount you paid us in
              the twelve (12) months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-stone-600 mb-6">
              You agree to defend, indemnify, and hold harmless Watchdog and its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees arising out of or relating to your violation of
              these Terms or your use of the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              11. Termination
            </h2>
            <p className="text-stone-600 mb-4">
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including without limitation if you breach the Terms.
            </p>
            <p className="text-stone-600 mb-6">
              Upon termination, your right to use the Service will cease
              immediately. If you wish to terminate your account, you may simply
              discontinue using the Service and cancel your subscription.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-stone-600 mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>
            <p className="text-stone-600 mb-6">
              Any disputes arising out of or relating to these Terms or the
              Service shall be resolved through binding arbitration in
              accordance with the rules of [Arbitration Organization], except
              that you may assert claims in small claims court if your claims
              qualify.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-stone-600 mb-6">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days&apos;
              notice prior to any new terms taking effect. Your continued use of
              the Service after such changes constitutes acceptance of the new
              Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              14. Severability
            </h2>
            <p className="text-stone-600 mb-6">
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions will remain in full force
              and effect. The invalid or unenforceable provision will be
              replaced with a valid provision that most closely matches the
              intent of the original provision.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              15. Contact Information
            </h2>
            <p className="text-stone-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-stone-50 p-6 rounded-lg">
              <p className="text-stone-600 mb-2">
                <strong>Email:</strong> legal@watchdog.com
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
