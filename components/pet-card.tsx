import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import type { Pet } from "@/lib/pets-data"

interface PetCardProps {
  pet: Pet
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={pet.image}
          alt={pet.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600 text-white text-xs px-3 py-1">
          Disponible
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">{pet.name}</h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {pet.age}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {pet.shortDescription}
        </p>

        <Button
          asChild
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
        >
          <Link href={`/adopcion/${pet.id}`}>
            <Heart className="h-4 w-4 mr-2" />
            Adoptar
          </Link>
        </Button>
      </div>
    </div>
  )
}
