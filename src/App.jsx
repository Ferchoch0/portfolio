import { useState } from 'react'
import './App.css';
import { ButtonGroup } from './component/NavButton';
import { Hero } from './component/HeroSection';
import { AboutMe } from './component/AboutMeSection';
import { Projects } from './component/ProjectsSesion';
import CustomCursor from './component/CustomCursor';

function App() {
  return (
    <main className='cursor-none h-full w-full'>
      <CustomCursor />
      <ButtonGroup />
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
      </div>
      <div>
        <AboutMe />
        <Projects />
      </div>
        
    </main>
  );
}

export default App;