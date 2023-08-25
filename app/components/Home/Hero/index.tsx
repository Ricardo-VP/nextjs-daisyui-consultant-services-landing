'use client'

import { usePathname, useRouter } from 'next/navigation'

export const Hero = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]">
            Servicios de Consultoría en Tecnología
          </h1>
          <p className="py-6 text-gray-400">
            Expertos en consultoría tech para convertir tus visiones en éxito
            digital. Conócenos y construyamos el mañana juntos.
          </p>
          {pathname === '/' && (
            <div
              className="btn btn-secondary"
              onClick={() => router.push('/contact-us')}
            >
              Contáctanos
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
