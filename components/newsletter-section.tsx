"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // REEMPLAZA ESTOS VALORES CON LOS TUYOS DE EMAILJS
    const SERVICE_ID = "service_2jsgxmb"
    const TEMPLATE_ID = "template_nh9jh67"
    const PUBLIC_KEY = "7Sv0ctCgjuz0NoPk3"

    const templateParams = {
      user_email: email,
      name: "Amigo de las mascotas", 
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      
      toast({
        title: "¡Bienvenido a la comunidad!",
        description: "Revisa tu correo, te hemos enviado una sorpresa.",
      })
      setEmail("")
    } catch (error) {
      console.error("Error al enviar:", error)
      toast({
        variant: "destructive",
        title: "Oops",
        description: "No pudimos suscribirte en este momento.",
      })
    } finally {
      setIsLoading(false)
    }
  } // Aquí cierra handleSubmit correctamente

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Únete a nuestra comunidad</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Recibe consejos de expertos sobre salud animal y sé el primero en conocer nuevos amigos para adoptar.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full bg-white"
            required
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
          >
            {isLoading ? "Uniendo..." : "Suscribirse"}
          </Button>
        </form>
      </div>
    </section>
  )
}