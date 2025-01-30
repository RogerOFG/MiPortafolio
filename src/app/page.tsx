import { AboutMe, Projects, Skills } from './components'

// Agregar el "/" para probar localmente, quitar el "/" antes de subirlo al repositorio
const patch = 'img'; 

export default function Home() {
  return (
    <div>
      {/* Inicio */}
      <div className="flex flex-col items-center justify-center min-h-[400px] py-2">
        <div className="w-[404px] leading-[1.2] pb-10 max-[450px]:w-[90%]">
          <h1 className="text-[40px] font-semibold max-[450px]:text-[35px]">Hola, <span className="text-sky-200">soy Roger</span></h1>
          <p>Desarrolador Frontend</p>
        </div>
      
        <div className="w-[404px] max-[450px]:w-[90%]">
          <h2 className="text-lg max-[450px]:leading-6 max-[450px]:text-base">
            <span className="text-sky-200">Ingeniero de sistemas y Desarrollador Web. </span>
            Me especializo en la creación de sitios web, utilizando tecnologías modernas como Astro, Laravel, TailwindCSS, entre otras.
          </h2>
        </div>
      
        {/* Botones redes */}
        <div className="flex gap-8 mt-8 text-[#1b1e1d] font-[500] text-center max-[450px]:gap-4 max-[450px]:grid max-[450px]:grid-cols-2">
          <a 
            className="py-1 px-4 rounded-full text-white bg-[#1b1e1d] border border-whie hover:bg-white hover:border-[#1b1e1d] hover:text-[#1b1e1d] duration-100 ease-in max-[450px]:col-span-2"
            href="CV/HOJA-DE-VIDA.pdf"
            download="HojaDeVida-RogerFlorez.pdf"
          >
            <i className="bi bi-file-earmark-arrow-down-fill"></i> Descargar CV
          </a>
          <a 
            rel="noopener" 
            className="py-1 px-4 rounded-full bg-white border border-[#1b1e1d] hover:bg-[#1b1e1d] hover:border-white hover:text-white duration-100 ease-in max-[450px]:col-span-1" 
            href="https://github.com/RogerOFG" 
            target="_blank"
          >
            <i className="bi bi-github pr-1"></i> GitHub
          </a>
          <a 
            rel="noopener" 
            className="py-1 px-4 rounded-full bg-white border border-[#1b1e1d] hover:bg-[#1b1e1d] hover:border-white hover:text-white duration-100 ease-in max-[450px]:col-span-1" 
            href="https://www.linkedin.com/in/roger-omar-florez-garcia-70aab3230/" 
            target="_blank"
          >
            <i className="bi bi-linkedin pr-1"></i> Linkeding
          </a>
        </div>
      </div>

      {/* Contenido */}
      <div className="bg-[#141416]">
        <div className="w-[900px] max-w-[95%] m-auto max-[834px]:max-w-[380px] max-[450px]:max-w-[90%]">
          {/* Proyectos */}
          <Projects patch={patch} />

          {/* Separador */}
          <hr className="border-gray-800" />

          {/* Sobre mí */}
          <AboutMe />

          {/* Separador */}
          <hr className="border-gray-800" />

          {/* Skills */}
          <Skills patch={patch} />
        </div>
      </div>
    </div>
  );
}
