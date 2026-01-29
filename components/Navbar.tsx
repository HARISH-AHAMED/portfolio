
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    const handleScroll = () => {
      // Handle scrolled state for glass effect
      if (scrollContainer) {
        setScrolled(scrollContainer.scrollTop > 50);
      } else {
        setScrolled(window.scrollY > 50);
      }

      // Handle active section detection
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is roughly in the top half of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          HA<span className="animate-blink text-indigo-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent transform scale-105'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            className="relative p-[1px] inline-flex items-center justify-center overflow-hidden rounded-full group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#6366f1_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-2 text-sm font-semibold text-white backdrop-blur-3xl transition-all shadow-lg shadow-indigo-600/10">
              Hire Me
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-all duration-300 ${isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'
                  : 'text-slate-300 hover:text-white'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            className="relative p-[1px] inline-flex items-center justify-center overflow-hidden rounded-full group"
            onClick={() => setIsOpen(false)}
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#6366f1_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-5 py-3 text-sm font-semibold text-white backdrop-blur-3xl transition-all">
              Hire Me
            </span>
          </a>
        </div>
      )}
      {/* Gradient Bottom Border */}
      <div
        className={`absolute bottom-0 left-0 w-full overflow-hidden transition-all duration-700 ease-in-out ${scrolled ? 'h-[1px] opacity-100' : 'h-0 opacity-0'
          }`}
      >
        {/* Mild Gradient Border */}
        <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500/20 via-purple-500/20 to-transparent" />

        {/* Subtle Glow/Glass Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[1px]" />
      </div>
    </nav>
  );
};

export default Navbar;
