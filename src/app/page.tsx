import Image from "next/image";

const projects = [
  {
    name: 'ShopXeng',
    description: 'Tienda en línea de relojes realizada con Laravel, CSS y JavaScript.',
    link: 'https://www.shopxeng.com/',
    code: 'https://github.com/RogerOFG/Ecommerce-con-Laravel',
    image: 'img/projects/shopxeng.png',
    skills: ['Laravel', 'CSS', 'JS'],
  },
  {
    name: 'WellSpace',
    description: 'Es un diseño de un sitio tipo test psicológico diseñado con HTML, CSS y JavaScript.',
    link: 'https://rogerofg.github.io/WellSpace/',
    code: 'https://github.com/RogerOFG/WellSpace',
    image: 'img/projects/WellSpace.png',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'MyXENT',
    description: 'Es un blog diseñado con HTML, CSS y JavaScript.',
    link: 'https://rogerofg.github.io/MYXENG/',
    code: 'https://github.com/RogerOFG/MYXENG',
    image: 'img/projects/MyXENT.png',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'IED San Gabriel',
    description:
      'Espacio virtual para la IED San Gabriel. Diseñada con HTML, PHP, JavaScript, CSS, Bootstrap e integración de una base de datos con MySQL.',
    link: 'https://sangabrielied.edu.co/',
    code: 'NaN',
    image: 'img/projects/ied.png',
    skills: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    name: 'Codisaga Radio',
    description:
      '"Codisaga Radio" busca fomentar la comunicación y la creatividad en los estudiantes. Diseñada con HTML, JavaScript, CSS, Bootstrap.',
    link: 'https://rogerofg.github.io/CodisagaRadio/',
    code: 'https://github.com/RogerOFG/CodisagaRadio',
    image: 'img/projects/CODISAGA-RADIO.png',
    skills: ['HTML', 'CSS', 'JS', 'Bootstrap'],
  },
];

const skillses = [
  {
    title: 'Frontend',
    nameS: ['HTML', 'CSS', 'JS', 'TailwindCSS', 'Bootstrap', 'Sass'],
    patchS: ['img/img-skills/HTML.png', 'img/img-skills/CSS.png', 'img/img-skills/JS.webp', 'img/img-skills/TailwindCSS.png', 'img/img-skills/Bootstrap.png', 'img/img-skills/Sass.png']
  },
  {
    title: 'Backend',
    nameS: ['PHP', 'Laravel', 'MySQL'],
    patchS: ['img/img-skills/PHP.png', 'img/img-skills/Laravel.png', 'img/img-skills/MySQL.png']
  },
  {
    title: 'Aprendiendo',
    nameS: ['React', 'NextJS', 'Astro'],
    patchS: ['img/img-skills/React.png', 'img/img-skills/NextJS.png', 'img/img-skills/Astro.png']
  },
  {
    title: 'Herramientas',
    nameS: ['VSCode', 'Figma', 'AdobeXD', 'XAMPP'],
    patchS: ['img/img-skills/VSCode.png', 'img/img-skills/Figma.webp', 'img/img-skills/AdobeXD.png', 'img/img-skills/XAMPP.svg']
  }
];

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
          <div className="py-16 max-sm:py-[105px]" id="proyects">
            <h3 className="text-sky-200">Proyectos</h3>
            <h2 className="text-2xl">Mis proyectos destacados</h2>

            <div className="flex flex-col gap-14 max-[834px]:gap-8">
              {projects.map((project, index) => (
                <div
                  className={`flex gap-10 py-4 ${index % 2 === 0 ? 'min-[835px]:flex-row' : 'min-[835px]:flex-row-reverse'} rounded-xl max-[834px]:flex-col max-[834px]:border max-[834px]:border-[#3a3a3a] max-[834px]:py-0 max-[834px]:pb-4 max-[834px]:gap-3 max-[834px]:bg-[#1b1e1d] max-[450px]:w-full`}
                  key={index}
                >
                  {/* Imagen o espacio reservado */}
                  <div className="w-[45%] min-w-[380px] h-auto bg-gray-500 rounded-xl overflow-hidden max-[834px]:m-auto max-[834px]:min-w-full max-[834px]:rounded-br-none max-[834px]:rounded-bl-none">
                    <Image className="w-full h-full hover:scale-110 duration-300 ease-in-out" src={project.image} width={400} height={400} alt={project.name} />
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="flex flex-col justify-center w-[55%] max-[834px]:m-auto max-[834px]:w-full max-[834px]:px-4">
                    <h4 className="text-base text-sky-200 max-[834px]:text-sm">FRONTEND</h4>
                    <h3 className="text-2xl max-[834px]:text-2xl">{project.name}</h3>
                    <h3 className="leading-6 text-[17px] max-[834px]:text-base max-[834px]:leading-5">{project.description}</h3>

                    {/* Botones */}
                    <div className="flex space-x-2 mt-8">
                      {project.code !== 'NaN' && (
                        <a
                          className="flex gap-2 py-1 px-4 rounded-xl bg-[#282828] border-[2px] border-[#282828] hover:bg-transparent"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <i className="bi bi-github"></i>
                          Código
                        </a>
                      )}

                      <a
                        className="flex gap-2 py-1 px-4 rounded-xl bg-[#282828] border-[2px] border-[#282828] hover:bg-transparent"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Visitar
                        <i className="bi bi-arrow-right-short"></i>
                      </a>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-8 w-max mt-4 bg-[#1e1d1f] py-2 px-4 rounded-full max-[834px]:gap-5 max-[834px]:bg-[#141416] max-[380px]:gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span className="text-sm font-medium" key={`${skill}-${skillIndex}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Separador */}
          <hr className="border-gray-800" />

          {/* Sobre mí */}
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

          {/* Separador */}
          <hr className="border-gray-800" />

          {/* Skills */}
          <div className="py-16 max-sm:py-[105px]" id="skillset">
            <h3 className="text-sky-200">Skills</h3>
            <h2 className="text-2xl">Mis habilidades</h2>

            <div className="grid grid-cols-2 gap-8 my-10 max-[810px]:grid-cols-1">
              {skillses.map((skill, index) => (
                <div className="w-full min-h-[200px] p-6 rounded-lg bg-[#1b1e1d]" key={index}>
                  <h3 className="text-2xl text-sky-200 text-center font-medium">{skill.title}</h3>
                  <div className="flex justify-center items-center flex-wrap gap-3 mt-4">
                    {skill.nameS.map((name, nameIndex) => (
                      <div className="flex justify-center items-center flex-col p-2 rounded-xl bg-[#141416] border border-[#3a3a3a]" key={`${name}-${nameIndex}`}>
                        <div className="flex justify-center items-center flex-col flex-wrap w-[80px] h-[50px]">
                          <Image 
                            src={skill.patchS[nameIndex]} 
                            alt={name} 
                            width={40}
                            height={30}
                            layout="intrinsic"
                            // className="border border-gray-50"
                          />
                        </div>

                        <div className="font-medium">
                          {name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
