import {
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
  IntegrationsSection,
  PricingSection,
} from '@/components/landing'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
    </main>
  )
}
