import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Chatbot } from '@/components/chatbot'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kindred Pet Care | Veterinaria',
  description: 'Brindamos atención veterinaria de alta calidad con un enfoque compasivo. Servicios de consulta, vacunación, cirugía y adopción de mascotas.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo_zoom_circular.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_zoom_circular.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_zoom_circular.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
