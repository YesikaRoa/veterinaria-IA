import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Map Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-green-100 relative">
                  {/* Map Illustration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
                    <svg
                      className="w-full h-full opacity-30"
                      viewBox="0 0 400 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Grid pattern for map effect */}
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22c55e" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      {/* Streets */}
                      <line x1="0" y1="150" x2="400" y2="150" stroke="#22c55e" strokeWidth="3" />
                      <line x1="200" y1="0" x2="200" y2="300" stroke="#22c55e" strokeWidth="3" />
                      <line x1="50" y1="0" x2="350" y2="300" stroke="#22c55e" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  {/* Location Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                    <div className="bg-green-600 p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Location Card */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Kindred Pet Care</p>
                      <p className="text-xs text-gray-500">Estamos aquí</p>
                    </div>
                  </div>
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
