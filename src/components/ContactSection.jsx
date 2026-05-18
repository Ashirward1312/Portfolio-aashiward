import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../Pages/Reveal";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function ContactSection() {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="relative bg-black min-h-screen py-20 sm:py-28 px-6 sm:px-8 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto">
        <RevealOnScroll className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold px-3 py-1.5 rounded-md bg-cyan-400/5 border border-cyan-400/20 mb-4 inline-block heading-font animate-pulse">
            {">"} INITIALIZE CONNECTION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight heading-font text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Touch</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-neutral-400 text-xs sm:text-sm uppercase tracking-[0.2em] leading-relaxed paragraph-font">
            Let's build robust web architectures together. Reach out for projects or collabs.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          
          <RevealOnScroll className="space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/5 relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-all duration-500" />
              
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2 heading-font">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                MindBridge Raipur HQ
              </h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed paragraph-font">
                We operate as an agile, high-performance distributed remote engineering team, centered out of Chhattisgarh, India. Feel free to shoot an email or drop a message on social channels.
              </p>

              <div className="space-y-4 text-sm text-neutral-300 paragraph-font">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Raipur, Chhattisgarh, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="hover:text-cyan-400 transition-colors">contact@mindbridge.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-panel hover:border-cyan-400/40 p-4 rounded-2xl flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-all group"
              >
                <GithubIcon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                <span className="text-xs font-semibold uppercase tracking-wider heading-font">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-panel hover:border-purple-500/40 p-4 rounded-2xl flex items-center justify-center gap-2 text-neutral-400 hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                <span className="text-xs font-semibold uppercase tracking-wider heading-font">LinkedIn</span>
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <form onSubmit={handleFormSubmit} className="glass-panel border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all duration-500" />
              
              <h3 className="text-xl font-bold font-display text-white mb-6 heading-font">
                Send A Message
              </h3>

              <AnimatePresence>
                {contactSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-cyan-400/10 border border-cyan-400/30 rounded-2xl p-6 text-center text-cyan-300 mb-6 drop-shadow-md"
                  >
                    <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-bounce" />
                    <p className="font-bold uppercase tracking-wider text-xs mb-1 heading-font">Transmission Successful!</p>
                    <p className="text-xs text-neutral-400 leading-relaxed paragraph-font">
                      Your message has bypassed local firewalls and landed directly in our console logs. We will reach back shortly!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-5 paragraph-font">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2 heading-font">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ashirwad Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2 heading-font">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="ashirwad@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2 heading-font">Message Contents</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your digital product goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-lg shadow-cyan-400/10 flex items-center justify-center gap-2 cursor-pointer heading-font"
                >
                  <span>Transmit Signal</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
