import {
  AboutSection,
  HowItWorksSection,
  PricingSection,
  HeroSection,
  BenefitsSection,
} from '@/components/landing'
import { IntegrationsAnimation } from '@/components/landing/integrations'

export default function Home() {
  return (
    <main className="isolate">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IntegrationsAnimation />
      <PricingSection />
      <AboutSection />
    </main>
  )
}
