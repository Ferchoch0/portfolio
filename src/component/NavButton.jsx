import React from "react";
import { CgUserList } from "react-icons/cg";

function IconButton({ className, children }) {
  return (
    <button
      className={`rounded-full p-2 focus:outline-none focus:ring-2 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

function NameSection({ children }) {
  return <span className="text-sm text-white">{children}</span>;
}

function ButtonGroup() {
  return (
    <nav className="fixed w-full flex justify-between items-center z-50 absolute top-4 px-8">
      {/* Texto de la izquierda */}
      <div className="flex items-center justify-center p-4">
        <h1 className="text-white text-4xl font-bold flex items-center space-x-2">
          <img src="/logo.png" className="w-[35px] h-[35px] text-[#b97aff]" />
          <span className="text-[#b97aff] text-2xl">&#123;</span>
          <span className="text-2xl">FD</span>
          <span className="text-[#b97aff] text-2xl">&#125;</span>
        </h1>
      </div>

      {/* Menú central */}
      <div className="flex items-center justify-between bg-black/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-black/40 z-50">
        <IconButton className="text-white hover:text-[#b97aff] hover:scale-110">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Principal</NameSection>
          </div>
        </IconButton>

        <IconButton className="text-white hover:text-[#b97aff] hover:scale-110">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Sobre Mi</NameSection>
          </div>
        </IconButton>
        
        <IconButton className="text-white hover:text-[#b97aff] hover:scale-110">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Projectos</NameSection>
          </div>
        </IconButton>

        <IconButton className="text-white hover:text-[#b97aff] hover:scale-110">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Contactame</NameSection>
          </div>
        </IconButton>
      </div>

      {/* Texto de la derecha */}
      <div className="flex items-center justify-center p-4 invisible">
        <h1 className="text-white text-4xl font-bold flex items-center space-x-2">
          <img src="/logo.png" className="w-[35px] h-[35px] text-[#b97aff]" />
          <span className="text-[#b97aff] text-2xl">&#123;</span>
          <span className="text-2xl">FD</span>
          <span className="text-[#b97aff] text-2xl">&#125;</span>
        </h1>
      </div>

    </nav>
  );
}

export { IconButton, NameSection, ButtonGroup };
