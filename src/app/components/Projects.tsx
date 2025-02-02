import Image from "next/image";

interface ProjectsProps {
  patch: string;
}

export const Projects = ({ patch }: ProjectsProps) => {
  const projects = [
    {
      name: 'ShopXeng',
      description: 'Tienda en línea de relojes realizada con Laravel, CSS y JavaScript.',
      link: 'https://www.shopxeng.com/',
      code: 'https://github.com/RogerOFG/Ecommerce-con-Laravel',
      image: `${patch}/projects/shopxeng.png`,
      skills: ['Laravel', 'CSS', 'JS'],
    },
    {
      name: 'WellSpace',
      description: 'Es un diseño de un sitio tipo test psicológico diseñado con HTML, CSS y JavaScript.',
      link: 'https://rogerofg.github.io/WellSpace/',
      code: 'https://github.com/RogerOFG/WellSpace',
      image: `${patch}/projects/WellSpace.png`,
      skills: ['HTML', 'CSS', 'JS'],
    },
    {
      name: 'MyXENT',
      description: 'Es un blog diseñado con Next.js, HTML y CSS.',
      link: 'https://rogerofg.github.io/MYXENT/',
      code: 'https://github.com/RogerOFG/MYXENT',
      image: `${patch}/projects/MyXENT.png`,
      skills: ['NEXT.JS', 'HTML', 'CSS'],
    },
    {
      name: 'IED San Gabriel',
      description:
        'Espacio virtual para la IED San Gabriel. Diseñada con HTML, PHP, JavaScript, CSS, Bootstrap e integración de una base de datos con MySQL.',
      link: 'https://sangabrielied.edu.co/',
      code: 'NaN',
      image: `${patch}/projects/ied.png`,
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Bootstrap'],
    },
    {
      name: 'Codisaga Radio',
      description:
        '"Codisaga Radio" busca fomentar la comunicación y la creatividad en los estudiantes. Diseñada con HTML, JavaScript, CSS, Bootstrap.',
      link: 'https://rogerofg.github.io/CodisagaRadio/',
      code: 'https://github.com/RogerOFG/CodisagaRadio',
      image: `${patch}/projects/CODISAGA-RADIO.png`,
      skills: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    },
  ];

  return (
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
  );
};
