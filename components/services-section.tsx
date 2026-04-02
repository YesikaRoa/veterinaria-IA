import { Stethoscope, Syringe, Scissors, Sparkles } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Consultation",
    titleEs: "Consulta Veterinaria",
    description: "Revisiones preventivas para asegurar una vida larga y saludable.",
    descriptionEs: "Preventiva, diagnóstico y especializada para mantener la vitalidad de tu mascota.",
    features: ["Examen clínico completo", "Asesoría nutricional"]
  },
  {
    icon: Syringe,
    title: "Vaccination",
    titleEs: "Plan de Vacunación",
    description: "Esquemas completos para proteger a tu mascota contra enfermedades.",
    descriptionEs: "Esquemas completos para perros y gatos adaptados a su estilo de vida.",
    features: ["Recordatorios digitales", "Desparasitación interna"]
  },
  {
    icon: Scissors,
    title: "Surgery",
    titleEs: "Cirugía y Quirófano",
    description: "Cirugías programadas y de emergencia con tecnología avanzada.",
    descriptionEs: "Tecnología avanzada y cuidado postoperatorio con monitoreo constante.",
    features: ["Mínima invasión", "Anestesia inhalada segura"]
  },
  {
    icon: Sparkles,
    title: "Grooming",
    titleEs: "Estética Profesional",
    description: "Estética profesional para que luzcan y se sientan increíbles.",
    descriptionEs: "Baños, cortes de raza y cuidado de la piel con productos dermatológicos.",
    features: ["Spa relajante", "Limpieza de oídos y uñas"]
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm font-medium uppercase tracking-wide mb-2">
            Cuidado Integral
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones completas diseñadas para el bienestar físico y emocional de tus compañeros de vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-green-50/50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 border border-green-100/50"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ServicesDetailSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios Especializados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones completas diseñadas para el bienestar físico y emocional de tus compañeros de vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.titleEs}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {service.descriptionEs}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
