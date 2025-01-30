export const AboutMe = () => {
  return (
    <div className="py-16 max-sm:py-[105px]" id="about-me">
      <h3 className="text-sky-200">Sobre mí</h3>
      <h2 className="text-2xl">Roger Florez</h2>

      <div className="flex justify-between items-start gap-[80px] mt-8 max-[900px]:flex-col max-[900px]:gap-[40px] max-[900px]:justify-center max-[450px]:gap-10 max-[450px]:mt-4">
        <div className="w-2/4 max-[900px]:w-full">
          <p className="pb-4 leading-6 text-lg">Ingeniero de Sistemas enfocado en el desarrollo web, buscando adquirir experiencia en el campo empresarial.</p>
          <p className="pb-4 leading-6 text-lg">Me considero una persona con gran capacidad para seguir instrucciones, con buena gestión del tiempo y excelentes habilidades de organización, disposición para el trabajo en equipo, paciente, abierto a nuevos aprendizajes y buena capacidad de concentración.</p>
          <p className="pb-4 leading-6 text-lg">¡Aquí podras encontrar algunos de mis proyectos con los que he estado trabajando y practicando!</p>
          <p className="leading-6 text-lg">Actualmente tengo 23 años y vivo en Barranquilla/Colombia.</p>
        </div>

        <div className="max-w-[412px] w-full p-5 rounded-lg bg-[#1b1e1d] max-[900px]:m-auto max-[900px]:max-w-full">
          <h3 className="pb-4 text-xl font-medium">Ingeniero de Sistemas</h3>
          <p className="pb-5">Titulo de Ingeniero de Sistemas de la Corporación Universitaria Americana.</p>
          <p className="text-sm">- Graduado el de 20 de Septiembre 2024</p>
        </div>
      </div>
    </div>
  )
}