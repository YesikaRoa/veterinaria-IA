import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PetCard } from "@/components/pet-card"
import { pets } from "@/lib/pets-data"

export function AdoptionSection() {
  // Show first 3 pets
  const featuredPets = pets.slice(0, 3)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Buscan un hogar
            </h2>
            <p className="text-gray-600">
              Conoce a tus futuros mejores amigos esperando por ti.
            </p>
          </div>
          <Link
            href="/adopcion"
            className="flex items-center gap-2 text-green-600 font-medium hover:underline mt-4 md:mt-0"
          >
            Ver todos los animales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Pet Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  )
}
