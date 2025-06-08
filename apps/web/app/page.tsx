import { FloatingHeader } from "@/components/floating-header"
import { HeroSection } from "@/components/hero-section"
import { WhitelistSection } from "@/components/whitelist-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <FloatingHeader />
      <HeroSection />
      <FeaturesSection />
      <WhitelistSection />
      <Footer />
    </div>
  )
}
