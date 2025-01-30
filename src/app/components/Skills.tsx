import Image from "next/image";

interface SkillsProps {
  patch: string;
}

export default function Skills({ patch }: SkillsProps) {
  const skillses = [
    {
      title: 'Frontend',
      nameS: ['HTML', 'CSS', 'JS', 'TailwindCSS', 'Bootstrap', 'Sass'],
      patchS: [`${patch}/img-skills/HTML.png`, `${patch}/img-skills/CSS.png`, `${patch}/img-skills/JS.webp`, `${patch}/img-skills/TailwindCSS.png`, `${patch}/img-skills/Bootstrap.png`, `${patch}/img-skills/Sass.png`]
    },
    {
      title: 'Backend',
      nameS: ['PHP', 'Laravel', 'MySQL'],
      patchS: [`${patch}/img-skills/PHP.png`, `${patch}/img-skills/Laravel.png`, `${patch}/img-skills/MySQL.png`]
    },
    {
      title: 'Aprendiendo',
      nameS: ['React', 'NextJS', 'Astro'],
      patchS: [`${patch}/img-skills/React.png`, `${patch}/img-skills/NextJS.png`, `${patch}/img-skills/Astro.png`]
    },
    {
      title: 'Herramientas',
      nameS: ['VSCode', 'Figma', 'AdobeXD', 'XAMPP'],
      patchS: [`${patch}/img-skills/VSCode.png`, `${patch}/img-skills/Figma.webp`, `${patch}/img-skills/AdobeXD.png`, `${patch}/img-skills/XAMPP.svg`]
    }
  ];

  return (
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
  )
}