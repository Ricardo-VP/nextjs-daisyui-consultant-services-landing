import Image from 'next/image'

import javascriptLogo from '../../../../public/javascript_logo.png'
import typescriptLogo from '../../../../public/typescript_logo.png'
import pythonLogo from '../../../../public/python_logo.png'
import csharpLogo from '../../../../public/csharp_logo.png'

import nextjsLogo from '../../../../public/nextjs_logo.webp'
import fastapiLogo from '../../../../public/fastapi_logo.png'
import netcoreLogo from '../../../../public/netcore_logo.png'
import dockerLogo from '../../../../public/docker_logo.png'

export const Technologies = () => {
  return (
    <section className="py-20 px-20 bg-base-200">
      <div>
        <div>
          <h1 className="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]">
            Tecnologías
          </h1>
        </div>
        <div className="pt-5 mx-32 text-center text-gray-400">
          <p>
            Nuestro equipo de expertos en tecnología está listo para ayudarte a
            construir tu próximo proyecto. Conoce las tecnologías que utilizamos
            para crear soluciones digitales.
          </p>
        </div>
      </div>
      {/* Lenguajes */}
      <div className="flex">
        <div className="flex-1 pt-10">
          <h2 className="mt-2 text-center text-[clamp(1.5rem,4vw,3.15rem)] font-black leading-[1.1] text-secondary">
            Lenguajes
          </h2>
          <div className="mx-10 mt-5 text-center">
            <Image
              src={javascriptLogo}
              alt="JavaScript logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={typescriptLogo}
              alt="TypeScript logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={pythonLogo}
              alt="Python logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={csharpLogo}
              alt="C# logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
          </div>
        </div>
        <div className="flex-1 pt-10">
          <h2 className="text-center text-[clamp(1.5rem,4vw,3.15rem)] font-black leading-[1.1] text-secondary">
            Herramientas y Frameworks
          </h2>
          <div className="mx-10 mt-5 text-center">
            <Image
              src={nextjsLogo}
              alt="NextJS logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={fastapiLogo}
              alt="FastAPI logo"
              width={175}
              height={175}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={netcoreLogo}
              alt="NetCore logo"
              width={90}
              height={90}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
            <Image
              src={dockerLogo}
              alt="Docker logo"
              width={125}
              height={125}
              style={{
                display: 'inline-flex',
              }}
              className="m-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
