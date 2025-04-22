import React from "react";
import { CgUserList } from "react-icons/cg";
import { GrCodeSandbox } from "react-icons/gr";

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
  return <span className="text-sm text-gray-700">{children}</span>;
}

function ButtonGroup() {
  return (
    <nav className="w-full flex justify-between items-center z-50 absolute top-4 px-8">
      {/* Texto de la izquierda */}
      <div className="flex items-center">
        <h1 className="text-white">Titulo</h1>
      </div>

      {/* Menú central */}
      <div className="flex items-center justify-between bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 z-50">
        <IconButton className="text-red-500 hover:text-red-600 hover:scale-110 focus:ring-red-500">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Principal</NameSection>
          </div>
        </IconButton>

        <IconButton className="text-red-500 hover:text-red-600 hover:scale-110 focus:ring-red-500">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Sobre Mi</NameSection>
          </div>
        </IconButton>
        
        <IconButton className="text-red-500 hover:text-red-600 hover:scale-110 focus:ring-red-500">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Projectos</NameSection>
          </div>
        </IconButton>

        <IconButton className="text-red-500 hover:text-red-600 hover:scale-110 focus:ring-red-500">
          <div className="flex items-center space-x-2">
            <CgUserList />
            <NameSection>Contactame</NameSection>
          </div>
        </IconButton>
      </div>

      {/* Texto de la derecha */}
      <div className="flex items-center">
        <h1 className="text-white">Titulo</h1>
      </div>
    </nav>
  );
}

export { IconButton, NameSection, ButtonGroup };
