import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Configuration from the EmailJS dashboard
    const SERVICE_ID = 'service_w1oef9z';
    const TEMPLATE_ID = 'template_d3u1edd';
    const PUBLIC_KEY = 'cVTj8FGGfnSS1jWQA';

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setNotification({
            show: true,
            message: 'Message sent successfully! I will get back to you soon.',
            type: 'success'
          });
          setFormState({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        }, (error) => {
          console.error('EmailJS Error:', error);
          setNotification({
            show: true,
            message: 'Failed to send message. Please try again or contact me directly.',
            type: 'error'
          });
          setIsSubmitting(false);
        });
    }
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
              <a href="mailto:harishahamedk17@gmail.com" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email me at</p>
                  <p className="text-white font-medium group-hover/item:text-indigo-400 transition-colors">harishahamedk17@gmail.com</p>
                </div>
              </a>
              <a href="tel:+916383123981" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Call me</p>
                  <p className="text-white font-medium group-hover/item:text-indigo-400 transition-colors">+91 63831 23981</p>
                </div>
              </a>
              <a href="https://wa.me/916383123981" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">WhatsApp me</p>
                  <p className="text-white font-medium group-hover/item:text-indigo-400 transition-colors">+91 63831 23981</p>
                </div>
              </a>
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
              <a href="https://github.com/HARISH-AHAMED" target="_blank" rel="noopener noreferrer" className="relative group w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden hover:scale-110 transition-all">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                <Github className="w-5 h-5 relative z-10 social-icon-gradient" />
              </a>
              <a href="https://www.linkedin.com/in/harish-ahamed-8ba9642b1/" target="_blank" rel="noopener noreferrer" className="relative group w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden hover:scale-110 transition-all">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                <Linkedin className="w-5 h-5 relative z-10 social-icon-gradient" />
              </a>
              <a href="https://www.instagram.com/haxrish_17" target="_blank" rel="noopener noreferrer" className="relative group w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden hover:scale-110 transition-all">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-wave"></div>
                <Instagram className="w-5 h-5 relative z-10 social-icon-gradient" />
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

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    placeholder="your mail"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
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

      {/* Notification Popup */}
      {notification?.show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/20 backdrop-blur-sm transition-all duration-300">
          <div className="relative max-w-sm w-full glass rounded-3xl border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 transform scale-100">
            {/* Gradient Wave Background for Popup - Subtle highlight */}
            <div className="absolute inset-0 opacity-10 animate-gradient-wave"></div>

            <div className="relative z-10 p-8 text-center">
              <button
                onClick={() => setNotification(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${notification.type === 'success' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-red-500/10 text-red-400'
                }`}>
                {notification.type === 'success' ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
              </div>

              <h4 className="text-xl font-bold mb-2 text-white">
                {notification.type === 'success' ? 'Message Sent!' : 'Delivery Failed'}
              </h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {notification.message}
              </p>

              <button
                onClick={() => setNotification(null)}
                className="w-full py-4 rounded-xl font-bold bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 transition-all hover:border-indigo-500/50 active:scale-95"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
