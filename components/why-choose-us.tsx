import Image from "next/image"
import { Check, Award, Users, Heart } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Iconos de Confianza",
    description: "Certificados por las principales asociaciones veterinarias internacionales, garantizando estándares de calidad mundial."
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Especialistas apasionados con años de experiencia clínica y actualización médica constante."
  },
  {
    icon: Heart,
    title: "Amor Animal",
    description: "Cada paciente es tratado con la misma ternura y paciencia que le daríamos a nuestras propias mascotas."
  }
]

const images = [
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300&h=300&fit=crop",
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Mascota ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Por qué elegirnos para su cuidado
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 bg-green-600 w-8 h-8 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
