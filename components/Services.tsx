
import React from 'react';
import { SERVICES } from '../constants';
import GlassCard from './GlassCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wider mb-2 uppercase">My Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How I Can Help You</h3>
          <p className="text-slate-400">
            I offer a wide range of web development services to help you build and scale your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <GlassCard
              key={service.id}
              delay={index * 100}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
