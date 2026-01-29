import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Instagram, Code, Layout, Sparkles, ChevronRight } from 'lucide-react';
import GradientButton from './GradientButton';

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<'typing' | 'morphing' | 'settled'>('typing');
  const [typedCode, setTypedCode] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullCode = `const Developer = {
  name: "Harish Ahamed",
  role: "Full-Stack Engineer",
  focus: "Building Web Experiences",
  status: "Available for Projects"
};

function renderPortfolio() {
  return <Portfolio user={Developer} />;
}`;

  // Realistic Typing Effect
  useEffect(() => {
    if (phase !== 'typing') return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Delay before morphing
        setTimeout(() => setPhase('morphing'), 1000);
      }
    }, 30); // Fast but readable typing

    return () => clearInterval(typingInterval);
  }, [phase]);

  // Cursor Blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Transition to Settled
  useEffect(() => {
    if (phase === 'morphing') {
      const timer = setTimeout(() => {
        setPhase('settled');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const syntaxHighlight = (code: string) => {
    return code.split('\n').map((line, i) => {
      // Very basic syntax highlighting simulation
      const highlighted = line
        .replace(/(const|let|var|function|return)/g, '<span class="text-purple-400">$1</span>')
        .replace(/(".*?")/g, '<span class="text-indigo-300">$1</span>')
        .replace(/({|}|\[|\]|\(|\))/g, '<span class="text-slate-400">$1</span>')
        .replace(/(\w+)(:)/g, '<span class="text-pink-400">$1</span>$2');

      return (
        <div key={i} className="flex gap-4">
          <span className="text-slate-600 text-xs w-4 text-right select-none">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      );
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-6">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className={`absolute top-20 -left-16 w-80 h-80 bg-indigo-600/20 blur-[120px] rounded-full transition-all duration-1000 ${phase === 'settled' ? 'opacity-100' : 'opacity-40'}`}></div>
        <div className={`absolute bottom-20 -right-16 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full transition-all duration-1000 ${phase === 'settled' ? 'opacity-100' : 'opacity-40'}`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Phase 1 & 2: The Editor / Morphing View */}
          {(phase === 'typing' || phase === 'morphing') && (
            <div
              className={`w-full max-w-2xl transition-all duration-1000 ease-in-out ${phase === 'morphing' ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'
                }`}
            >
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 text-left font-mono text-sm md:text-base leading-relaxed">
                <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="ml-2 text-slate-500 text-xs uppercase tracking-widest flex items-center gap-1">
                    <Code className="w-3 h-3" /> portfolio.tsx
                  </span>
                </div>
                <div className="space-y-1">
                  {syntaxHighlight(typedCode)}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} inline-block w-2 h-5 bg-indigo-500 ml-1 align-middle transition-opacity duration-100`}></span>
                </div>
              </div>
            </div>
          )}

          {/* Phase 3: The Finished UI */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${phase === 'settled'
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
              }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8 animate-float">
                <Sparkles className="w-4 h-4" />
                <span>Crafting Digital Excellence</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                <span className="text-white">Harish Ahamed</span>
                <span className="block mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
                  Full-Stack Developer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Designing and architecting modern, high-performance web experiences with
                <span className="text-white"> precision</span> and <span className="text-indigo-400">creativity</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <GradientButton text="Explore My Work" href="#projects" />
                <a
                  href="#contact"
                  className="group flex items-center gap-2 bg-slate-900/50 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition-all border border-slate-800 hover:border-indigo-500/50 backdrop-blur-sm"
                >
                  Get in Touch
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Minimal Tech Stack Preview */}
              <div className="flex gap-10 items-center justify-center pt-8 border-t border-slate-900">
                <div className="flex gap-6">
                  <a href="https://github.com/HARISH-AHAMED" target="_blank" rel="noopener noreferrer" className="relative group p-2.5 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:scale-110 transition-all">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                    <Github className="w-6 h-6 relative z-10 shadow-lg social-icon-gradient" />
                  </a>
                  <a href="https://www.linkedin.com/in/harish-ahamed-8ba9642b1/" target="_blank" rel="noopener noreferrer" className="relative group p-2.5 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:scale-110 transition-all">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                    <Linkedin className="w-6 h-6 relative z-10 shadow-lg social-icon-gradient" />
                  </a>
                  <a href="https://www.instagram.com/haxrish_17" target="_blank" rel="noopener noreferrer" className="relative group p-2.5 bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:scale-110 transition-all">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                    <Instagram className="w-6 h-6 relative z-10 shadow-lg social-icon-gradient" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
