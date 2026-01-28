
import React from 'react';
import { AuroraBackground } from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const App: React.FC = () => {
  return (
    <AuroraBackground>
      <CustomCursor />
      <div id="scroll-container" className="relative w-full overflow-y-auto h-screen z-10 selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default App;
