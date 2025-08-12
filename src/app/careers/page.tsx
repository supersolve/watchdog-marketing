import type { Metadata } from 'next'
import { GoogleSchedulerButton } from '@/components/app/google-scheduler'

export const metadata: Metadata = {
  title: 'Careers | Watchdog',
}

export default function CareersPage() {
  return (
    <main className="relative">
      <section className="relative mx-auto max-w-3xl px-6 sm:px-8 pt-24 sm:pt-32 pb-28">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
          Job posting: founding engineer
        </p>
        {/* Memo card */}
        <div className="bg-background border border-border rounded-xl p-8 sm:p-12 shadow-sm">
          <header className="mb-10 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-3xl tracking-tight">
              Vi vokser fort og søker Norges mest ambisiøse utviklere
            </h1>
          </header>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Watchdog er et AI-produkt som skanner selskapers innkjøp for feil
              og gir varsler ved avvik. Vi lanserte piloter i mai og har
              allerede analysert innkjøp for mer enn 4 milliarder kroner.
            </p>
            <p>Vi jakter eksepsjonelle utviklere som kan:</p>
            <ul className="list-disc pl-4 space-y-0 text-lg leading-relaxed text-stone-700">
              <li>
                Implementere og vedlikeholde features på tvers av frontend,
                backend and infra.
              </li>
              <li>
                Ta eierskap over system fra ende-til-ende: arkitektur,
                implementering, lansering og iterering.
              </li>
              <li>
                Samarbeider godt med teamet med å omgjøre brukerbehov til
                intuitive brukeropplevelser.
              </li>
              <li>Ønsker å utvikle kulturen og produktretningen vår.</li>
            </ul>
            <p>
              Vi er i &quot;hustle mode&quot;; har høyt tempo, shipper raskt og
              jobber sent for å sikre at vi vinner markedet. Vi kan tilby god
              lønn, eierandel og gleden av å bygge noe folk faktisk elsker å
              bruke.
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
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <GoogleSchedulerButton
            url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Va6TPDiQr8TigkBcuuMQAz7UygYirCgm_lELJYh_ZYJwthsGgkZ9DH-yCJt98tJo97c4hEaPE?gv=true"
            color="#616161"
            label="Book an appointment"
          />
        </div>
      </section>
    </main>
  )
}
