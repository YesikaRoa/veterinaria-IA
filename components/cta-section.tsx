import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-green-600 rounded-3xl py-12 px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 italic">
            ¿Listo para brindarle lo mejor?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Agenda una cita ahora y asegura el bienestar futuro de tu mejor amigo. Estamos listos para recibirlos.
          </p>
          <Button
            asChild
            className="bg-white hover:bg-gray-100 text-green-600 rounded-full px-8"
          >
            <a href="https://wa.me/584127690828" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Agenda una cita ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
