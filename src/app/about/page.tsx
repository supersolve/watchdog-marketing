import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Watchdog',
  description:
    'Watchdog is a software product developed by supersolve AS, a Norwegian technology company in the venture portfolio of Askeladden & Co. Invoice validation and procurement oversight software.',
  alternates: {
    canonical: 'https://watchdog.no/about',
  },
  openGraph: {
    title: 'About Watchdog',
    description:
      'Watchdog is developed by supersolve AS, part of the Askeladden & Co portfolio. Invoice validation and procurement oversight software.',
    url: 'https://watchdog.no/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-stone-900 mb-4">
            About Watchdog
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Watchdog Section */}
          <section>
            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              Watchdog is a software product developed by{' '}
              <strong className="text-stone-900">supersolve AS</strong>, a
              Norwegian technology company in the venture portfolio of{' '}
              <a
                href="https://www.askeladden.co/companies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Askeladden & Co
              </a>
              . Watchdog analyzes invoices and compares them with purchase
              agreements, supplier contracts, and price lists. The software
              helps organizations check whether they are billed according to
              agreed terms.
            </p>
            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              The system connects to common accounting and ERP platforms in
              Norway. In a typical setup, companies can connect their data and
              begin analysis in about one hour, depending on the system used.
              Once connected, Watchdog reviews invoices automatically and
              highlights potential discrepancies, such as incorrect pricing,
              duplicates, or missing contractual discounts. Results are
              presented as alerts or reports that finance, procurement, or
              accounting teams can investigate.
            </p>
            <p className="text-lg leading-relaxed text-stone-700">
              Watchdog is used by organizations with many suppliers or complex
              agreements. The software is designed to handle large purchase
              volumes and continuous invoice streams without manual review. It
              supports oversight of supplier billing and helps companies
              maintain control over contract compliance.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-stone-200"></div>

          {/* Supersolve Section */}
          <section>
            <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-6">
              About supersolve AS
            </h2>
            <p className="text-lg leading-relaxed text-stone-700">
              <strong className="text-stone-900">supersolve AS</strong> is a
              Norwegian software company that develops tools for financial
              document analysis and procurement oversight. Its primary product
              is Watchdog. The company operates from Parkveien 12 in Oslo,
              Norway.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-stone-200"></div>

          {/* Askeladden Section */}
          <section>
            <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-6">
              About Askeladden & Co
            </h2>
            <p className="text-lg leading-relaxed text-stone-700">
              <a
                href="https://www.askeladden.co/companies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Askeladden & Co
              </a>{' '}
              is a venture builder based in Norway. It establishes and develops
              companies across sectors such as services, retail, and software.
              supersolve AS and Watchdog are part of the Askeladden & Co
              portfolio.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-stone-200 mt-16"></div>

          {/* Footer info */}
          <section className="text-center pt-8">
            <p className="text-sm text-stone-500">
              <strong>supersolve AS</strong> • Organization Number: 933 860 175
              • Parkveien 12, Oslo, Norway
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
