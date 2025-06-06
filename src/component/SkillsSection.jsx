import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaJava, FaGitAlt, FaGithub, FaBootstrap, FaWordpress, FaFigma } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiTailwindcss, SiVite, SiElementor, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineCode } from "react-icons/md";
import { TbBrandThreejs, TbBrandCSharp } from "react-icons/tb";

const iconMap = {
  React: <FaReact className="text-cyan-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  PHP: <FaPhp className="text-indigo-400" />,
  Python: <FaPython className="text-blue-300" />,
  Java: <FaJava className="text-red-500" />,
  "C++": <SiCplusplus className="text-blue-500" />,
  "C#": <TbBrandCSharp className="text-blue-500" />,
  MySQL: <SiMysql className="text-teal-400" />,
  SQL: <SiMysql className="text-teal-300" />,
  Git: <FaGitAlt className="text-orange-400" />,
  GitHub: <FaGithub className="text-white" />,
  Bootstrap: <FaBootstrap className="text-purple-500" />,
  WordPress: <FaWordpress className="text-blue-400" />,
  Figma: <FaFigma className="text-pink-400" />,
  Vite: <SiVite className="text-yellow-300" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  "Three.js": <TbBrandThreejs className="text-blue-500" />,
  Elementor: <SiElementor className="text-pink-500" />,
  Photoshop: <SiAdobephotoshop className="text-blue-400" />,
  VisualBasic: <SiCplusplus className="text-blue-500" />,
  MVC: <MdOutlineCode className="text-slate-400" />,
};

const categories = {
    Frontend: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    Backend: ["PHP", "C++", "C#", "VisualBasic", "Python", "Java", "MySQL", "SQL", "MVC"],
    Herramientas: ["Git", "GitHub", "WordPress", "Elementor", "Photoshop", "Figma", "Vite"],
    Learning: ["TailwindCSS", "Three.js"],
  };

function SkillTable({ categories }) {
  return (
    <div className="m-3 md:m-0 md:w-[50%] xl:w-auto p-4 text-white bg-[#181818] rounded-lg shadow-md">
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold text-violet-300 mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-xl text-sm hover:bg-slate-700 transition"
              >
                {iconMap[skill] || <MdOutlineCode className="text-slate-400" />}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CodeTable() {
    return (
      <div className="relative rounded-lg bg-slate-900 p-2 w-[350px] h-full">
        {/* Encabezado tipo ventana */}
        <div className="relative flex text-center">
          <div className="flex pl-3.5 pt-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
              <circle r="12" cy="12" cx="12" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
              <circle r="12" cy="12" cx="12" />
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
              <circle r="12" cy="12" cx="12" />
            </svg>
          </div>
          <span className="absolute inset-x-0 top-2 text-xs text-slate-500">Skills.jsx</span>
        </div>
  
        {/* Contenido tipo código */}
        <div className="mt-5 space-y-1.5 px-5 pb-10 font-mono text-xs font-normal tracking-wide text-violet-400">
          <p>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-400">categories</span>{" "}
            <span className="text-slate-500">= {'{'}</span>
          </p>
  
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category} className="ml-4">
              <p>
                <span className="text-blue-400">{category}</span>
                <span className="text-slate-500">: [</span>
              </p>
              <div className="ml-4">
                {skills.map((skill, idx) => (
                  <span key={skill} className="inline-block text-blue-400 relative px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
                    <span className="relative">
                      &quot;{skill}&quot;{idx !== skills.length - 1 ? "," : ""}
                    </span>
                  </span>
                ))}
              </div>
              <p><span className="text-slate-500">],</span></p>
            </div>
          ))}
  
          <p><span className="text-slate-500">{'};'}</span></p>
  
          <p className="mt-4 text-slate-500">function <span className="text-pink-400">tabla</span>() &#123;</p>
          <p className="ml-4">
            <span className="text-slate-500">return (</span>
          </p>
          <p className="ml-8">
            <span className="text-slate-500">&lt;</span>
            <span className="text-pink-400">Skills</span>
            <span className="text-slate-500"> categories=&#123;categories&#125; /&gt;</span>
          </p>
          <p className="ml-4 text-slate-500">);</p>
          <p className="text-slate-500">&#125;</p>
        </div>
      </div>
    );
  }

function SkillSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="skills" className="snap-start flex items-center flex-col justify-center gap-10 xl:gap-20 2xl:gap-30 text-white">
      <div className="flex flex-col items-center justify-center w-full h-full pt-10">
        <h1 className="text-4xl font-bold">Habilidades</h1>
      </div>

      {/* Carrusel solo en móviles */}
      <div className="flex flex-col items-center justify-center w-full md:hidden">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-4 py-2 rounded ${activeTab === 0 ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-300"}`}
          >
            Código
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`px-4 py-2 rounded ${activeTab === 1 ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-300"}`}
          >
            Skills
          </button>
        </div>
        <div className="w-full flex justify-center">
          {activeTab === 0 && <CodeTable />}
          {activeTab === 1 && <SkillTable categories={categories} />}
        </div>
      </div>

      {/* Vista lado a lado en desktop */}
      <div className="hidden md:flex items-center justify-center gap-10 w-full">
        <CodeTable />
        <SkillTable categories={categories} />
      </div>
    </section>
  );
}

export default SkillSection;
