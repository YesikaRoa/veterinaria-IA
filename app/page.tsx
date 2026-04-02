import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { AdoptionSection } from "@/components/adoption-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AdoptionSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
