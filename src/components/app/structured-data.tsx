import Script from 'next/script'

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Watchdog',
    legalName: 'supersolve AS',
    alternateName: 'supersolve AS',
    url: 'https://watchdog.no',
    logo: 'https://watchdog.no/logo-watchdog-background.png',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Benjamin',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Parkveien 12',
      addressLocality: 'Oslo',
      addressCountry: 'NO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'demo@supersolve.ai',
      contactType: 'Sales',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Askeladden & Co',
      url: 'https://www.askeladden.co/companies',
    },
    sameAs: [],
    description:
      'Watchdog is an AI-powered invoice validation and procurement oversight platform developed by Supersolve AS, part of the Askeladden & Co portfolio. The software helps businesses detect billing errors and ensure contract compliance.',
  }

  // SoftwareApplication Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Watchdog',
    alternateName: 'Watchdog Invoice Validation',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Invoice Management Software',
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Tier',
        price: '0',
        priceCurrency: 'NOK',
        priceValidUntil: '2026-03-31', // Update annually
        availability: 'https://schema.org/InStock',
        description:
          'Free tier includes 500 invoices and 1 agreement, no credit card required',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          value: '500',
          unitText: 'invoices',
        },
      },
      {
        '@type': 'Offer',
        name: 'Pro Tier',
        price: 'Contact for pricing',
        priceCurrency: 'NOK',
        availability: 'https://schema.org/InStock',
        description:
          'Unlimited invoices and agreements with dedicated account manager',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    description:
      'AI-powered invoice validation software that automatically scans, validates, and detects errors in procurement invoices. Integrates with major ERP systems including Tripletex, PowerOffice, Visma, and Microsoft Dynamics Business Central. Setup time approximately 1 hour.',
    featureList: [
      'Automated invoice scanning and validation',
      'AI-powered invoice error detection',
      'Agreement tracking and compliance monitoring',
      'Pricing discrepancy detection',
      'Missing discount identification',
      'Duplicate charge detection',
      'Quantity validation',
      'ERP system integration (Tripletex, PowerOffice, Visma, Microsoft Business Central, 24SevenOffice, Fiken)',
      'Supplier invoice management',
      'Cost savings analysis and reporting',
      'Automated supplier communication',
      'Real-time error alerts',
    ],
    screenshot: 'https://watchdog.no/website-preview.png',
    softwareVersion: '1.0',
    url: 'https://watchdog.no',
    creator: {
      '@type': 'Organization',
      name: 'supersolve AS',
    },
    provider: {
      '@type': 'Organization',
      name: 'supersolve AS',
      url: 'https://watchdog.no',
    },
    maintainer: {
      '@type': 'Organization',
      name: 'supersolve AS',
    },
    datePublished: '2024',
    inLanguage: 'en',
    keywords:
      'invoice validation, procurement software, invoice error detection, AI invoice scanning, ERP integration, supplier management, invoice automation',
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Watchdog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Watchdog is an AI-powered platform that automatically scans your invoices, compares them to your agreements, and alerts you of discrepancies before they impact your bottom line. It helps businesses detect billing errors, missing discounts, duplicate charges, and other irregularities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Watchdog work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Watchdog works in three simple steps: 1) Scan every invoice and agreement - connect via your accounting software or upload directly. 2) Receive alerts when issues are detected with all relevant documentation. 3) Get your money back with automated error summaries and draft follow-up emails to suppliers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which accounting systems does Watchdog integrate with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Watchdog integrates with major accounting and ERP systems including Tripletex, PowerOffice, Visma Business NXT, Microsoft Business Central, 24SevenOffice, and Fiken. You can also upload invoices and agreements directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Watchdog cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Watchdog offers a free tier and a business tier with unlimited invoices and agreements with a dedicated account manager, custom pricing is available.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to set up Watchdog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can get started with Watchdog in approximately 1 hour. Simply connect to your existing accounting systems or upload your invoices and agreements directly - no replacements needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of invoice errors does Watchdog detect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Watchdog detects pricing discrepancies, missing discounts, duplicate charges, incorrect quantities, billing errors, and ensures negotiated terms with suppliers are met. It scans every order line for important changes.',
        },
      },
    ],
  }

  // WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Watchdog',
    url: 'https://watchdog.no',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://watchdog.no/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // BreadcrumbList Schema for better context
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://watchdog.no',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://watchdog.no/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Careers',
        item: 'https://watchdog.no/careers',
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
