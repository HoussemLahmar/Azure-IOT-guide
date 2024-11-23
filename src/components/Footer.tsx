import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center">
            Made by Houssem-eddine Lahmar
            <br />
            Eleve ingenieur à l'école nationale d'ingénieurs de Tunis (ENIT)
          </p>
          
          <a
            href="https://github.com/HoussemLahmar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub Profile</span>
          </a>
          
          <div className="text-sm text-gray-400 text-center">
            <p>© {new Date().getFullYear()} Azure IoT Lab Environment</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;