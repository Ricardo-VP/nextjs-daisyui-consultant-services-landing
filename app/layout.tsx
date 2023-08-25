import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer, NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Servicios de Consultoría en Tecnología',
  description: 'Servicios de Consultoría en Tecnología para tu negocio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav>
          <NavBar />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
