import React from "react";
import './HeroSection.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { CiDesktopMouse2 } from "react-icons/ci";
import { Code } from './Code';

function IconButton({ onClick, href, icon: Icon, label = "", className = "" }) {
  const content = (
    <div className="relative flex flex-col items-center group">
      <div
        className={`flex justify-center p-2 rounded-md drop-shadow-xl border-[1px] border-[#d896ff] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-gradient-to-br hover:from-[#b97aff] hover:to-[#7f2dff] ${className}`}
      >
        {Icon && <Icon className="w-5 h-5" />}
      </div>
      <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#eeccff] group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {label}
      </span>
    </div>
  );

  return (
    <section className="flex mt-5 justify-center items-center">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="relative">
          {content}
        </a>
      ) : (
        <button onClick={onClick} className="relative">
          {content}
        </button>
      )}
    </section>
  );
}

function MouseScroll() {
  return (
    <section className="flex bottom-8 justify-center items-center">
      <div className="flex flex-col items-center relative">
        <CiDesktopMouse2 className="text-[#eeccff] text-6xl mb-2" />
        <div className="wheel-container absolute bottom-0 flex justify-center items-center animate-scroll">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

function BlackHole() {
  return (
    <div className="absolute top-[-465px] left-0 w-full h-[calc(100vh+340px)] xl:top-[-455px] 2xl:top-[-580px] z-[1] overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        className="w-full h-full object-cover rotate-180"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Fundido suave al final del video */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black z-[2] pointer-events-none" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="snap-start relative flex min-h-screen w-full">
      <BlackHole />
      
      <div className="relative z-[10] flex flex-row justify-center items-center w-full gap-6 text-[#eeccff]">

        <div className="hidden lg: w-1/2  xl:w-1/3 2xl:w-1/3 md:flex justify-center items-center">
          <Code />
        </div>

        <div className="flex flex-col justify-center items-start text-start">
          <h4 className="text-xl md:text-sm xl:text-lg font-bold mb-4">Hola, me llamo</h4>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
            Delvalle Fernando
          </h1>
          <h2 className="text-xl md:text-2xl xl:text-3xl text-[#b97aff] tracking-widest">
            FULLSTACK DEVELOPER
          </h2>

          <div className="flex gap-4 mt-6">
            <IconButton href="https://github.com/Ferchoch0" icon={FaGithub} label="GitHub" />
            <IconButton href="https://www.linkedin.com/in/fernando-d-delvalle/" icon={FaLinkedin} label="Linkedin" />
            <IconButton href="/Curriculum-fd.pdf" icon={TbFileCv} label="Curriculum" />
            

          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero, IconButton, MouseScroll, BlackHole };
