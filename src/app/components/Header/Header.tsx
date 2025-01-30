import Image from "next/image"

interface HeaderProps {
  patch: string
}

export const Header = ({ patch }: HeaderProps) => {
  return (
    <header className="sticky top-0 text-[#ffffffc2] bg-[#1b1e1d] z-50">
      <div className="flex items-center justify-between w-[900px] max-w-[95%] m-auto py-3 max-sm:flex-col max-sm:gap-4">
        {/* Header Left */}
        <div className="flex items-center space-x-4">
          {/* Cuadro para foto */}
          <div className="w-[38px] h-[38px] rounded-full bg-white overflow-hidden">
            <Image src={`${patch}/me.jpg`} alt="Roger" width={100} height={100} />
          </div>

          {/* Nombre y profesión */}
          <div className="flex flex-col leading-[1.2]">
            <h3 className="text-base font-[600]">Roger Florez</h3>
            <h3 className="text-[15px] pb-[3px]">Frontend Developer</h3>
          </div>
        </div>

        {/* Header Right */}
        <div className="">
          <nav>
            <ul className="flex space-x-4">
              {[
                ['Inicio', '#start'],
                ['Proyectos', '#proyects'],
                ['Sobre mí', '#about-me'],
                ['Skillset', '#skillset'],
              ].map(([label, path], index) => (
                <li key={index}>
                  <a className="hover:text-[#fff]" href={path}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}