import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PetCard } from "@/components/pet-card"
import { pets } from "@/lib/pets-data"

export default function AdopcionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Adopciones
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada uno de ellos tiene una historia y está esperando convertirse en parte de tu familia. Conócelos y encuentra a tu compañero perfecto.
            </p>
          </div>

          {/* Pet Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
