
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      alert('Thank you! Your message has been sent (simulation).');
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-indigo-500 font-semibold tracking-wider mb-2 uppercase">Get in touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-indigo-500">amazing</span> together.</h3>
            <p className="text-slate-400 text-lg mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email me at</p>
                  <p className="text-white font-medium">harishahamedk17@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Call me</p>
                  <p className="text-white font-medium">+91 63831 23981</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-white font-medium">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/HARISH-AHAMED" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/harish-ahamed-8ba9642b1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/haxrish_17" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="group bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Slow Diagonal Shine/Sweep - Always Visible */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full animate-card-shine"></div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="harishahamedk17@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
