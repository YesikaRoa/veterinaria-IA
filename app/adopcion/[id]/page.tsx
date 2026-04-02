import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPetById, pets } from "@/lib/pets-data"
import { ArrowLeft, Syringe, Scissors, Home, Smile, MessageCircle, ArrowRight, BookOpen } from "lucide-react"

export function generateStaticParams() {
  return pets.map((pet) => ({
    id: pet.id,
  }))
}

interface PetDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function PetDetailPage({ params }: PetDetailPageProps) {
  const resolvedParams = await params
  const pet = getPetById(resolvedParams.id)

  if (!pet) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Link */}
          <Link
            href="/adopcion"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la galería
          </Link>

          {/* Pet Info Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Health Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Smile className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Estado de Salud</p>
                  <p className="font-semibold text-green-600">Excelente</p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                  {pet.type === "canino" ? "Canino" : "Felino"}
                </Badge>
                <Badge className="bg-green-600 hover:bg-green-600 text-white">
                  En Adopción
                </Badge>
              </div>

              {/* Name & Breed */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {pet.name}
                </h1>
                <p className="text-gray-600 text-lg">
                  {pet.breed} • {pet.age}
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Syringe className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500 uppercase">Vacunas</span>
                  </div>
                  <p className="font-semibold text-gray-900">{pet.vaccines}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Scissors className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500 uppercase">Castrado</span>
                  </div>
                  <p className="font-semibold text-gray-900">{pet.neutered ? "Sí" : "No"}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Home className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500 uppercase">Microchip</span>
                  </div>
                  <p className="font-semibold text-gray-900">{pet.microchip ? "Registrado" : "No"}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Smile className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-500 uppercase">Carácter</span>
                  </div>
                  <p className="font-semibold text-gray-900">{pet.character}</p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Su historia</h3>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {pet.story.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Adopt Button */}
              <Button
                asChild
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg"
              >
                <a href="https://wa.me/5212345678901" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Adoptar ahora
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <p className="text-xs text-gray-500">
                * Al hacer clic serás redirigido a una conversación de WhatsApp con nuestro equipo de adopciones.
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Momentos de {pet.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pet.gallery.map((image, index) => (
                <div key={index} className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${pet.name} - Foto ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
