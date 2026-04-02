"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/adopcion", label: "Adopción" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
 <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-green-700/80 via-green-600/70 to-green-500/60 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-25 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo_zoom_circular.png"
              alt="Logo"
              className="h-30 w-30 object-contain rounded-full bg-white p-2"
              style={{ maxHeight: 90, maxWidth: 90 }}
            />
            <h1 className="text-2xl font-bold text-white">Kindred Pet Care</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-green-200 ${
                 pathname === item.href
  ? "text-white font-semibold underline underline-offset-4"
  : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    pathname === item.href
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
