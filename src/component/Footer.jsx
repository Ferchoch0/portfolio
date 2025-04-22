import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#230e37] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Fernando Delvalle</h2>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Ferchoch0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-50"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/fernando-d-delvalle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-50"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/ferned__?igsh=MWk1bXBwdGxubHl5cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-50"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Fernando Delvalle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
