import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Kindred Pet Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Comprometidos con el bienestar animal a través de medicina preventiva y atención especializada de alta calidad.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/584127690828"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/adopcion" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Blog de Salud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span>📍</span>
                <span>Dirección: Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span>📱</span>
                <span>WhatsApp: +123 456 7890</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-2">
              <Link href="https://facebook.com" className="text-sm text-green-600 hover:underline">
                Facebook
              </Link>
              <Link href="https://instagram.com" className="text-sm text-green-600 hover:underline">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">
            © 2024 Kindred Pet Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
