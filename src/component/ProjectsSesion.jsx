import React from "react";
import { LuCodesandbox } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";

// Componente de Header (imagen, título, descripción)
function ProjectHeader({ imageSrc, title, description }) {
  return (
    <div className="text-black">
      <div className="w-full h-full">
        <div className="overflow-hidden max-h-[230px]">
            <img className="object-cover w-full h-full" src={imageSrc} alt="Project" />
        </div>
      </div>

      <div className="flex m-2 gap-2">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src="/logo.png" className="w-10 h-10" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="font-bold text-2xl">{title}</div>
          <div className="text-1xl text-gray-400">{description}</div>
        </div>
      </div>
    </div>
  );
}

function ProjectButtons({ demoLink, codeLink }) {
    const handleClick = (url) => {
      window.open(url, '_blank');
    };
  
    return (
      <div className="flex m-2 gap-2">
        <button
          onClick={() => handleClick(demoLink)}
          className="relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full
          flex justify-center gap-2 items-center shadow-xl text-lg text-black
          bg-gray-50 backdrop-blur-md lg:font-semibold border-gray-50
          hover:text-gray-50
          before:content-[''] before:absolute before:bg-[#b97aff] before:rounded-full before:z-[-1]
          before:w-0 before:h-0 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2
          hover:before:w-[200%] hover:before:h-[200%] hover:before:duration-700 before:transition-all"
        >
          Demo
          <CiLocationArrow1
            className="w-8 h-8 justify-end bg-black text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 p-2 rotate-10 
            group-hover:rotate-45
            group-hover:text-black
            group-hover:bg-gray-50 
            group-hover:border-none" 
          />
        </button>
  
        <button
          onClick={() => handleClick(codeLink)}
          className="relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full
          flex justify-center gap-2 items-center shadow-xl text-lg text-black
          bg-gray-50 backdrop-blur-md lg:font-semibold border-gray-50
          hover:text-gray-50
          before:content-[''] before:absolute before:bg-[#b97aff] before:rounded-full before:z-[-1]
          before:w-0 before:h-0 before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2
          hover:before:w-[200%] hover:before:h-[200%] hover:before:duration-700 before:transition-all"
        >
          View Code
          <CiLocationArrow1
            className="w-8 h-8 justify-end bg-black text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 p-2 rotate-10 
            group-hover:rotate-45
            group-hover:text-black
            group-hover:bg-gray-50 
            group-hover:border-none" 
          />
        </button>
      </div>
    );
}

function ProjectLanguages({ languages }) {
    return (
      <div className="grid grid-cols-5 gap-2 m-2">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-auto h-10 rounded-md p-2 bg-[#e2dbe2] opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute group-hover:relative transition-all duration-700 ease-out"
          >
            {language}
          </div>
        ))}
      </div>
    );
}

function ContainerProject({
    imageSrc,
    title,
    description,
    languages,
    demoLink,
    codeLink,
  }) {
    return (
      <div className="bg-white m-3 md:m-0 md:w-120 h-auto rounded-lg group transition-all duration-300 relative z-[10]">
        <div className="flex p-2 gap-1">
          <div>
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div>
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div>
            <span className="bg-pink-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
  
        <ProjectHeader imageSrc={imageSrc} title={title} description={description} />
        <ProjectButtons demoLink={demoLink} codeLink={codeLink} />
        <ProjectLanguages languages={languages} />
      </div>
    );
}

function Projects() {
    const projectData = [
      {
        imageSrc: "/pr-5.png",
        title: "OtterTask+",
        description: "Stock, ventas y administración",
        languages: ["PHP", "JS", "PHPMailer", "Chart.js", "CSS", "DomPDF", "MVC", "MySQL", "BD relacional"],
        demoLink: "https://task-forge-plus.fwh.is/View/login?email=delvalle.fernando.d@gmail.com&password=papelera123",
        codeLink: "https://github.com/Ferchoch0/task-forge-"
      },
      {
        imageSrc: "/pr-1.png",
        title: "TattooSIZER",
        description: "Redimensionamiento de imágenes",
        languages: ["JS", "HTML", "CSS"],
        demoLink: "http://tattosizer.netlify.app",
        codeLink: "https://github.com/Ferchoch0/tatoosizer"
      },
      {
        imageSrc: "/pr-4.png",
        title: "Ta-Te-Ti",
        description: "Diseño de un juego",
        languages: ["React", "JS", "CSS"],
        demoLink: "http://tateti.kesug.com/",
        codeLink: "https://github.com/Ferchoch0/tic-tac-toe"
      },
      {
          imageSrc: "/pr-3.png",
          title: "Sassa - Financial App",
          description: "landing pages",
          languages: ["Wordpress", "Elementor", "Mysql"],
          demoLink: "https://github.com/Ferchoch0/sassa---financial-app",
          codeLink: "https://github.com/Ferchoch0/sassa---financial-app"
      },
    ];
  
    return (
      <section id="projects" className="snap-start flex flex-col items-center justify-center w-full h-full text-white relative z-[20]"> {/* Added z-index here */}
          <div className="flex flex-col items-center justify-center w-full h-full pt-10">
              <h1 className="text-4xl font-bold">Proyectos</h1>
              <p className="text-center md:text-start md:text-lg text-gray-400">Aquí hay algunos de los proyectos en los que trabaje</p>
          </div>
          <div className="min-h-screen grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 pt-10 text-white mb-10 place-items-center">
              {projectData.map((project, index) => (
                  <ContainerProject
                  key={index}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  languages={project.languages}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  />
              ))}
          </div>
      </section>
    );
}

export { Projects, ContainerProject };
