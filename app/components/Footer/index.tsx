import Image from 'next/image'
import linkedinLogo from '../../../public/linkedin_logo.png'

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content">
      <div>
        <span className="footer-title text-secondary">Servicios</span>
        <p>Desarrollo de Software</p>
        <p>Diseño de interfaces de usuario</p>
        <p>Integraciones con servicios en la nube</p>
      </div>
      <div>
        <span className="footer-title text-secondary">Redes Sociales</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/ricardo-vp/" target="_blank">
            <Image
              src={linkedinLogo}
              alt="LinkedIn logo"
              width={26}
              height={26}
              style={{
                display: 'inline-flex',
                cursor: 'pointer',
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
