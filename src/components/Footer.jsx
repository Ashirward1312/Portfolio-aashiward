// src/Components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin,
  Code2,
  Heart,
  ExternalLink,
  Zap,
  Terminal
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: User,
      label: "GitHub",
      href: "https://github.com/Ashirward1312",
      color: "hover:text-white"
    },
    {
      icon: Briefcase,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashirwad-sharma-6382753a1",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Ashirwads9111@gmail.com",
      href: "mailto:Ashirwads9111@gmail.com"
    },
    {
      icon: Phone,
      label: "+91 79871 09120",
      href: "tel:+917987109120"
    },
    {
      icon: MapPin,
      label: "Raipur, Chhattisgarh",
      href: null
    }
  ];

  return (
    <footer className="relative w-full bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Section - Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
                <Terminal size={24} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-wider text-white">
                  Ashirwad Sharma
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Building modern, scalable web applications with cutting-edge technologies. Specialized in React.js, Django, and cloud deployment solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-3 bg-slate-900/60 border border-cyan-400/20 ${social.color} transition-all duration-300`}
                  style={{
                    clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon size={18} className="relative z-10 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-cyan-400" />
              <h4 className="text-sm font-black uppercase tracking-wider text-white">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-cyan-400" />
              <h4 className="text-sm font-black uppercase tracking-wider text-white">
                Contact
              </h4>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <info.icon size={14} className="text-cyan-400/70 mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors duration-300 break-all"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 break-all">
                      {info.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
            <div className="flex items-center gap-2 text-cyan-400/50">
              <div className="w-2 h-2 rounded-full bg-cyan-400/50 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-cyan-400/50 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-cyan-400/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-cyan-400/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 px-6 py-3"
            style={{
              clipPath: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400/70">
                Status: Online
              </span>
            </div>
            <span className="text-cyan-400/30">|</span>
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-purple-400/70" />
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-400/70">
                Available for Projects
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </footer>
  );
};

export default Footer;