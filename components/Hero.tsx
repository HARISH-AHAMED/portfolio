
import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import GradientButton from './GradientButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 -left-16 w-80 h-80 bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 -right-16 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            I'm <span className="text-white">Harish Ahamed</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Building Web Experiences.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            A Frontend & Full Stack Developer specializing in crafting modern, high-performance web applications with a focus on seamless user interfaces.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <GradientButton
              text="View Projects"
              href="#projects"
            />
            <a
              href="#contact"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex gap-4">
              <a href="https://github.com/HARISH-AHAMED" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/harish-ahamed-8ba9642b1/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/haxrish_17" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="animate-float">
            <div className="relative w-[480px] h-[480px] bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full border border-slate-800 flex items-center justify-center">
              <div className="w-[380px] h-[380px] rounded-full border border-slate-800/50 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                  alt="Developer Setup"
                  className="w-full h-full object-cover grayscale brightness-50 opacity-60"
                />
              </div>
              {/* Floating Tech Chips */}
              <div className="absolute -top-4 right-10 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-indigo-400 font-bold">React</span>
              </div>
              <div className="absolute top-1/2 -left-8 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-purple-400 font-bold">Tailwind</span>
              </div>
              <div className="absolute bottom-10 right-0 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="text-pink-400 font-bold">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
