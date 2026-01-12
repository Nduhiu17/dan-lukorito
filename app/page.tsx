import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CommitmentsSection } from "@/components/commitments-section"
import { VisionSection } from "@/components/vision-section"
import { ValuesSection } from "@/components/values-section"
import { CallToActionSection } from "@/components/call-to-action-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CommitmentsSection />
      <VisionSection />
      <ValuesSection />
      <CallToActionSection />
      <Footer />
    </main>
  )
}
