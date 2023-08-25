import Image from 'next/image'
import ricardoProfile from '../../public/ricardo_profile.jpeg'

export default function AboutUsPage() {
  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <section className="mx-auto max-w-screen-xl">
        <div>
          <h1 className="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]">
            Acerca de nosotros
          </h1>
        </div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="my-3 text-center text-[clamp(1.5rem,4vw,3.15rem)] font-black leading-[1.1] text-secondary">
                Conócenos
              </h2>
              <p>
                Estamos dedicados a marcar la diferencia en el mundo de la
                consultoría tecnológica. Nuestro equipo apasionado de expertos
                en tecnología se esfuerza por proporcionar soluciones
                innovadoras y orientadas al futuro para nuestros clientes.
                Creemos en la colaboración, la excelencia y la búsqueda
                constante de conocimiento. Conócenos mejor y descubre cómo
                podemos ser tu socio confiable en la búsqueda de soluciones
                tecnológicas efectivas.
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full h-full"
                src="https://www.businessalligators.com/wp-content/uploads/2019/08/IT-team-building.jpg"
                alt="A group of People"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="my-3 text-center text-[clamp(1.5rem,4vw,3.15rem)] font-black leading-[1.1] text-secondary">
                Nuestra Historia
              </h2>
              <p>
                A lo largo de los años, hemos enfrentado desafíos, celebrado
                éxitos y, lo más importante, hemos crecido junto a nuestros
                clientes. Nuestra historia es un testimonio de perseverancia,
                innovación y la pasión constante por aprender y mejorar. Cada
                hito en nuestro camino nos ha llevado a ser la empresa de
                consultoría tecnológica en la que confían numerosas empresas en
                la actualidad.
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">

                  <Image 
                    src={ricardoProfile}
                    alt="Ricardo VP"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-300 mt-4">
                    Ricardo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
