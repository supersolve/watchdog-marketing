import {
  HeroSection,
  BenefitsSection,
  HowItWorksSection,
  // TestimonialsSection,
  IntegrationsSection,
  PricingSection,
  AboutSection,
} from '@/components/landing'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      {/* <TestimonialsSection /> */}
      <IntegrationsSection />
      <PricingSection />
      <AboutSection />
    </main>
  )
}
