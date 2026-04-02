"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-green-600 text-sm font-medium uppercase tracking-wide mb-2">
            Estamos para ayudarte
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight italic">
              Cuidamos lo que{" "}
              <span className="text-green-600">más quieres.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Ya sea una emergencia, una consulta de rutina o simplemente quieres saber más sobre nuestros planes de salud.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Nombre Completo
                  </label>
                  <Input
                    placeholder="Ej. Ana Martínez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-lg border-gray-200"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <Input
                    type="email"
                    placeholder="ana@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg border-gray-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <Textarea
                  placeholder="¿En qué podemos ayudar a tu mascota?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border-gray-200 min-h-[120px]"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
                >
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-green-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white p-2 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Respuesta Inmediata
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Agenda citas o resuelve dudas rápidas por chat.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-gray-300 bg-white hover:bg-gray-50"
              >
                <a href="https://wa.me/5212345678901" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Escribir por WhatsApp
                </a>
              </Button>
            </div>

            {/* Hours & Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Horarios de Atención</h5>
                  <p className="text-sm text-gray-600">Lunes a Sábado</p>
                  <p className="text-sm font-medium text-gray-900">8:00 - 20:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Dirección</h5>
                  <p className="text-sm text-gray-600">
                    Av. de la Arboleda 452, Col. San Ángel,<br />
                    Ciudad de México.
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
