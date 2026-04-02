"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  const openCurrentLocation = () => {
    const locationUrl = "https://www.google.com/maps/search/?api=1&query=Av.+de+la+Arboleda+452%2C+Col.+San+%C3%81ngel%2C+Ciudad+de+M%C3%A9xico"

    if (!navigator.geolocation) {
      alert("Geolocalización no soportada. Se abrirá la ubicación del negocio.")
      window.open(locationUrl, "_blank", "noopener,noreferrer")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        window.open(url, "_blank", "noopener,noreferrer")
      },
      () => {
        alert("No se pudo obtener la ubicación. Se abrirá la ubicación del negocio.")
        window.open(locationUrl, "_blank", "noopener,noreferrer")
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Card */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                  <Image
                    src="/animalitos.webp"
                    alt="Kindred Pet Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Visítanos con tu mejor amigo
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nuestras instalaciones están diseñadas para ser un santuario de calma. Contamos con áreas separadas para gatos y perros para reducir el estrés de tu mascota desde que cruza la puerta.
                </p>

                {/* Happy Clients */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=50&h=50&fit=crop"
                      alt="Cliente feliz"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=50&h=50&fit=crop"
                      alt="Cliente feliz"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=50&h=50&fit=crop"
                      alt="Cliente feliz"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-semibold text-green-600">
                      +2k
                    </div>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Pacientes felices este año
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
