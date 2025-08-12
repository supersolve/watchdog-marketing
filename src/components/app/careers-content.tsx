'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface CareersContentProps {
  schedulerUrl: string
  initialLanguage?: Language
}

type Language = 'no' | 'en'

const LazyGoogleSchedulerButton = dynamic(
  () =>
    import('@/components/app/google-scheduler').then(
      (m) => m.GoogleSchedulerButton
    ),
  {
    ssr: false,
    loading: () => (
      <Button variant="accent" size="lg" type="button" disabled>
        Loading...
      </Button>
    ),
  }
)

export function CareersContent({
  schedulerUrl,
  initialLanguage = 'en',
}: CareersContentProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    function handleDocumentMouseDown(event: MouseEvent) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleDocumentMouseDown)
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown)
    }
  }, [isMenuOpen])

  const isNorwegian = language === 'no'

  const label = isNorwegian ? 'Sett opp en rask prat' : 'Book a quick chat'

  return (
    <section className="relative mx-auto max-w-3xl px-6 sm:px-8 pt-24 sm:pt-32 pb-28">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Job posting: founding engineer
        </p>
      </div>

      {/* Memo card */}
      <div className="bg-background border border-border rounded-xl p-8 sm:p-12 shadow-sm">
        <header className="mb-10 sm:mb-12 flex items-start justify-between gap-2 sm:gap-3 w-full">
          <h1 className="font-serif text-3xl sm:text-3xl tracking-tight flex-1 min-w-0 pr-2">
            {isNorwegian
              ? 'Vi vokser fort og søker Norges mest ambisiøse utviklere'
              : 'We’re growing fast and looking for Norway’s most ambitious devs'}
          </h1>

          <div
            ref={containerRef}
            className="relative shrink-0"
            aria-label="Language selector"
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              aria-haspopup="menu"
              aria-expanded={isMenuOpen}
              aria-controls="language-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              title={isNorwegian ? 'Norwegian' : 'English'}
              className="inline-flex items-center gap-1 px-2 h-8"
            >
              <span
                className="text-sm font-medium lowercase"
                aria-label={isNorwegian ? 'Norwegian' : 'English'}
              >
                {isNorwegian ? 'no' : 'en'}
              </span>
              <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </Button>

            {isMenuOpen && (
              <div
                id="language-menu"
                role="menu"
                className="absolute right-0 mt-2 w-32 rounded-md border bg-background shadow-md p-1 z-10"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="w-full flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-stone-100"
                  onClick={() => {
                    setLanguage('no')
                    const params = new URLSearchParams(window.location.search)
                    params.set('lang', 'no')
                    router.replace(`${pathname}?${params.toString()}`)
                    setIsMenuOpen(false)
                  }}
                >
                  Norwegian
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="w-full flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-stone-100"
                  onClick={() => {
                    setLanguage('en')
                    const params = new URLSearchParams(window.location.search)
                    params.set('lang', 'en')
                    router.replace(`${pathname}?${params.toString()}`)
                    setIsMenuOpen(false)
                  }}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </header>

        {isNorwegian ? (
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Watchdog er et AI-produkt som skanner selskapers innkjøp for feil
              og gir varsler ved avvik. Vi lanserte piloter i mai og har
              allerede analysert innkjøp for mer enn 4 milliarder kroner.
            </p>
            <p>Vi jakter eksepsjonelle utviklere som kan:</p>
            <ul className="list-disc pl-4 space-y-0 text-lg leading-relaxed text-stone-700">
              <li>
                Bygge og vedlikeholde features på tvers av frontend, backend og
                infra.
              </li>
              <li>
                Ta eierskap over system fra ende-til-ende: arkitektur,
                implementering, lansering og iterering.
              </li>
              <li>
                Samarbeide tett med teamet og omgjøre brukerbehov til intuitive
                brukeropplevelser.
              </li>
              <li>Bidra til kultur- og produktutvikling.</li>
            </ul>
            <p>
              Vi er i “hustle mode”; har høyt tempo, shipper raskt og jobber
              sent for å sikre at vi vinner markedet. Vi kan tilby god lønn,
              eierandel og gleden av å bygge noe folk faktisk elsker å bruke.
            </p>
            <p>
              Teamet består av tidligere gründere, ex-BCG og ex-BEKK, backet av
              investorer fra bl.a. A&Co og OpenAI.
            </p>
            <p>
              Book 10–15 minutter med meg hvis du er interessert i å høre mer.
              Du trenger ikke CV eller søknad.
            </p>

            <div className="pt-4 text-base sm:text-lg italic">
              <p>Benjamin Bjorvatn Øien</p>
              <p>Co-founder & CEO, supersolve (teamet bak Watchdog)</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Watchdog is an AI product that scans company purchases for errors
              and alerts when something’s off. We launched pilots in May and
              have already analyzed over NOK 4 billion in purchases.
            </p>
            <p>We’re after exceptional developers who can:</p>
            <ul className="list-disc pl-4 space-y-0 text-lg leading-relaxed text-stone-700">
              <li>
                Build and maintain features across frontend, backend, and infra.
              </li>
              <li>
                Own systems end-to-end: architecture, implementation, launch,
                iteration.
              </li>
              <li>
                Work closely with the team to turn user needs into intuitive
                experiences.
              </li>
              <li>Shape our culture and product direction.</li>
            </ul>
            <p>
              We’re in hustle mode; we have a high pace, we ship fast, and work
              late to win the market. We offer a competitive salary, equity, and
              the joy of building something people truly love.
            </p>
            <p>
              Our team includes former founders, ex-BCG, and ex-BEKK, backed by
              investors from A&Co and OpenAI.
            </p>
            <p>
              Book 10–15 minutes with me if you want to hear more (no CV or
              application needed).
            </p>

            <div className="pt-4 text-base sm:text-lg italic">
              <p>Benjamin Bjorvatn Øien</p>
              <p>Co-founder & CEO, supersolve (team behind Watchdog)</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <LazyGoogleSchedulerButton
          url={schedulerUrl}
          label={label}
          color="#616161"
        />
      </div>
    </section>
  )
}
