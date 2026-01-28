
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Harish Ahamed
          </a>
          <p className="text-slate-500 text-sm mt-2">
            Building digital experiences with passion.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {currentYear} Harish Ahamed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
