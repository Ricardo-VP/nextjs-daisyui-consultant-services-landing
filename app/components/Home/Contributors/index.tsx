import Image from 'next/image'

import warbyParkerLogo from '../../../../public/warbyparker_logo.png'
import ioetLogo from '../../../../public/ioet_logo.png'
import puceseLogo from '../../../../public/pucese_logo.png'
import trd from '../../../../public/trd_logo.png'

export const Contributors = () => {
  return (
    <section className="py-20 px-20 text-center">
      <div className="text-center">
        <h1 className="text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]">
          Nuestros colabarodores
        </h1>
      </div>
      <div className="pt-5 mx-32 text-center text-gray-400">
        <p>
          Nos enorgullece haber colaborado con diversas empresas que confiaron
          en nuestra experiencia y conocimientos. Explora algunas de las
          organizaciones con las que hemos tenido el privilegio de trabajar.
        </p>
      </div>
      <div className="pt-10 text-center">
        <Image
          src={warbyParkerLogo}
          alt="Warby Parker logo"
          width={250}
          height={250}
          style={{
            display: 'inline-flex',
          }}
          className="mx-5"
        />
        <Image
          src={ioetLogo}
          alt="ioet logo"
          width={175}
          height={175}
          style={{
            display: 'inline-flex',
          }}
          className="mx-5"
        />
        <Image
          src={puceseLogo}
          alt="PUCE Esmeraldas logo"
          width={275}
          height={275}
          style={{
            display: 'inline-flex',
          }}
          className="mx-5"
        />
        <Image
          src={trd}
          alt="TRD logo"
          width={165}
          height={165}
          style={{
            display: 'inline-flex',
          }}
          className="mx-5"
        />
      </div>
    </section>
  )
}
