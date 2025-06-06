import { useState } from 'react'
import './App.css';
import './component/Nebulosa.css';

import { ButtonGroup } from './component/NavButton';
import { Hero, MouseScroll } from './component/HeroSection';
import { AboutMe } from './component/AboutMeSection';
import { Projects } from './component/ProjectsSesion';
import CustomCursor from './component/CustomCursor';
import Footer from "./component/Footer";
import SkillSection from './component/SkillsSection';

function App() {
  return (
    <main className='cursor-none h-full w-full bg-black'>
     
      <CustomCursor />
      <ButtonGroup />
      <div className='flex flex-col h-[650px] 2xl:h-[950px] gap-20'>
        <Hero />
      </div>
      <div className="relative z-[10]">
        <MouseScroll />
      </div>
      <div>
        <AboutMe/>
        <SkillSection />
        <Projects />
        <div className="mesh-overlay"></div>
      </div>
    
      <Footer />      
    </main>
  );
}

export default App;