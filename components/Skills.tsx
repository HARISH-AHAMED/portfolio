
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wider mb-2 uppercase">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden transition-all hover:border-slate-700">
              {/* Slow Diagonal Shine/Sweep - Always Visible */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full animate-card-shine"></div>
              </div>
              <h4 className="text-xl font-bold mb-8 text-white border-l-4 border-indigo-600 pl-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-slate-800/50 hover:bg-indigo-600/10 hover:border-indigo-500/30 transition-all rounded-xl border border-slate-700 text-slate-300 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning indicator */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-600/5 border border-indigo-600/20 text-center">
          <p className="text-slate-400 text-sm">
            <span className="text-indigo-400 font-bold mr-2">Currently learning:</span>
            Next.js, Node.js, and Advanced TypeScript to further enhance my full-stack capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
