"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    alert("¡Gracias por suscribirte!")
    setEmail("")
  }

  return (
    <section className="py-16 lg:py-20 bg-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Únete a nuestra comunidad
          </h2>
          <p className="text-gray-600 mb-8">
            Recibe consejos de expertos sobre salud animal y sé el primero en conocer nuevos amigos para adoptar.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-white border-gray-200 flex-1"
              required
            />
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
            >
              Suscribirse
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
