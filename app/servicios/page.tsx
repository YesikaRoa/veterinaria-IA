import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ServicesDetailSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-50/50 to-white py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Excelencia Veterinaria
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight italic">
                  Cuidado Integral para Cada Etapa
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  Entendemos que tu mascota es familia. Por eso ofrecemos servicios médicos de vanguardia con la calidez y el respeto que merecen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
                  >
                    <Link href="#servicios">Ver todos los servicios</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-6 border-gray-300 hover:bg-gray-50"
                  >
                    <Link href="/contacto">Nuestro Equipo</Link>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=500&fit=crop"
                    alt="Veterinario con mascota"
                    width={600}
                    height={500}
                    className="rounded-3xl object-cover w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="servicios">
          <ServicesDetailSection />
        </div>
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
