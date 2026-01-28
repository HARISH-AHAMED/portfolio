
import React from 'react';
import { User, Target, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="relative group perspective-1000">
              {/* Glassmorphism Frame */}
              <div className="relative p-3 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border-[0.5px] border-white/5 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 animate-float overflow-hidden">
                {/* Slow Diagonal Shine/Sweep - Always Visible */}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full animate-card-shine"></div>
                </div>

                <img
                  src="images/profile.jpg"
                  alt="Harish Ahamed"
                  className="relative rounded-[1.8rem] w-full aspect-square object-cover object-top shadow-inner border border-white/5"
                />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 -z-10"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-indigo-500 font-semibold tracking-wider mb-2 uppercase text-sm">About Me</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Driving Innovation through <span className="text-indigo-400">Clean Code</span>
                </h3>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed">
                I'm a passionate web developer with a keen eye for detail and a love for creating seamless digital experiences. With a foundation in modern frontend technologies, I specialize in building responsive, accessible, and high-performance applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GlassCard className="!p-4 !rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold text-white">Performance</span>
                  </div>
                  <p className="text-slate-500 text-sm">Optimized loading times and smooth 60fps animations.</p>
                </GlassCard>
                <GlassCard className="!p-4 !rounded-xl" delay={100}>
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold text-white">Pixel Perfect</span>
                  </div>
                  <p className="text-slate-500 text-sm">Translating complex designs into reality with accuracy.</p>
                </GlassCard>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <p className="text-slate-300 italic">
                  "I don't just write code; I craft digital journeys that users remember."
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Projects Completed</p>
                  </div>
                  <div className="w-px h-10 bg-slate-800"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">2+</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
