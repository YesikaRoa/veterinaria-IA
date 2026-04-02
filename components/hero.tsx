import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ambulance } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50/50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Cuidamos a tu{" "}
              <span className="italic text-green-600">mejor amigo</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Brindamos atención veterinaria de alta calidad con un enfoque compasivo y natural. Porque cada mascota merece un santuario de salud.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
              >
                <Link href="/adopcion">Ver adopciones</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 border-gray-300 hover:bg-gray-50"
              >
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=500&fit=crop"
                alt="Perros felices"
                width={600}
                height={500}
                className="rounded-3xl object-cover w-full"
                priority
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Ambulance className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Urgencias 24/7</p>
                  <p className="text-xs text-gray-500">
                    Estamos aquí cuando más nos necesitas, con especialistas siempre de guardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
