import type { Metadata } from 'next'
import { CareersContent } from '@/components/app/careers-content'

export const metadata: Metadata = {
  title: 'Careers | Watchdog',
}

export default function CareersPage() {
  return (
    <main className="relative">
      <CareersContent schedulerUrl="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Va6TPDiQr8TigkBcuuMQAz7UygYirCgm_lELJYh_ZYJwthsGgkZ9DH-yCJt98tJo97c4hEaPE?gv=true" />
    </main>
  )
}
