'use client'

export const ContactUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <section className="mx-auto max-w-screen-md">
        <div>
          <h1 className="text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]">
            Contáctanos
          </h1>
          <div className="pt-5 mx-32 text-center text-gray-400">
            <p>
              Llena el siguiente formulario y nos pondremos en contacto contigo
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-5 items-center text-center"
          onSubmit={(e: any) => {
            e.preventDefault()
            e.target.reset()
            // TODO: Send email
          }}
        >
          <div className="flex flex-row gap-5 justify-center">
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="name">
                <span className="label-text">¿Cuál es tu nombre?</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Escriba aquí"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="email">
                <span className="label-text">
                  ¿Cuál es tu correo electrónico?
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Escriba aquí"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center mx-12 mt-2.5">
            <div className="form-control w-full max-w-full">
              <label className="label" htmlFor="description">
                <span className="label-text">¿En qué te podemos ayudar?</span>
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered"
                placeholder="Escriba aquí"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-secondary mt-5 w-full max-w-xs"
          >
            Contactar
          </button>
        </form>
      </section>
    </div>
  )
}
