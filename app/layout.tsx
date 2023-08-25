import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer, NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ricardo Vaca - Software Consultant',
  description: 'Software consultant services for your business',
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
