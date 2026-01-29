
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-indigo-500 font-semibold tracking-wider mb-2 uppercase">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my recent works across different technologies and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden transition-all hover:border-slate-700"
            >
              {/* Slow Diagonal Shine/Sweep - Always Visible */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full animate-card-shine"></div>
              </div>

              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold mb-3 text-white">{project.title}</h4>
                <p className="text-slate-400 mb-8 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-wave text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/80 text-white px-6 py-3 rounded-xl text-sm font-bold border border-slate-700 transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/HARISH-AHAMED"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1"
          >
            View all projects on GitHub
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
