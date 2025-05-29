import {
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
  IntegrationsSection,
  PricingSection,
  AboutSection,
} from '@/components/landing'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <AboutSection />
    </main>
  )
}
