// src/Components/ServicesPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Database,
  Cloud,
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Zap,
  Shield,
  Search
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// STYLED COMPONENTS - OPTIMIZED SIZE
// ═══════════════════════════════════════════════════════════════

const ChamferCard = ({ className = "", children, isOpen = false }) => (
  <div
    className={`relative border transition-all duration-500 overflow-hidden group/card ${
      isOpen 
        ? "border-cyan-300/50 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.2)]" 
        : "border-cyan-400/20 bg-gradient-to-b from-slate-950/70 to-black/70 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-300/40"
    } ${className}`}
    style={{
      clipPath: "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
    }}
  >
    <div className="pointer-events-none absolute inset-0">
      <div className={`absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 transition-all duration-500 ${isOpen ? 'border-cyan-400/70' : 'border-cyan-400/30 group-hover/card:border-cyan-400/50'}`} />
      <div className={`absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 transition-all duration-500 ${isOpen ? 'border-purple-400/70' : 'border-purple-400/30 group-hover/card:border-purple-400/50'}`} />
      <div className={`absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 transition-all duration-500 ${isOpen ? 'border-blue-400/70' : 'border-blue-400/30 group-hover/card:border-blue-400/50'}`} />
      <div className={`absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 transition-all duration-500 ${isOpen ? 'border-cyan-400/70' : 'border-cyan-400/30 group-hover/card:border-cyan-400/50'}`} />
    </div>
    {isOpen && (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scan"></div>
      </div>
    )}
    {children}
  </div>
);

const NeonButton = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="group relative inline-flex items-center justify-center gap-2 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-purple-500/5 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300 transition-all duration-300 overflow-hidden"
    style={{
      clipPath: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    <span className="relative z-10">{children}</span>
  </button>
);

// ═══════════════════════════════════════════════════════════════
// SERVICES DATA
// ═══════════════════════════════════════════════════════════════

const services = [
  {
    id: "web",
    title: "Website Development",
    description: "High-performance websites built with modern frameworks and optimized for speed, SEO, and scalability using React.js, Django, and Node.js.",
    icon: Globe,
    technologies: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Expo and React Native with seamless user experience and native performance.",
    icon: Smartphone,
    technologies: [
      { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ]
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: "Robust backend systems and RESTful APIs with Django REST Framework, authentication, role-based access control, and database optimization.",
    icon: Database,
    technologies: [
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "Django REST", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
    ]
  },
  {
    id: "deployment",
    title: "Cloud & DevOps",
    description: "Complete deployment solutions with AWS S3, VPS setup, domain configuration, SSL, CI/CD pipelines, and hosting management.",
    icon: Cloud,
    technologies: [
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "cPanel", icon: "https://cdn.simpleicons.org/cpanel/FF6C2C" }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════
// TECHNICAL SKILLS
// ═══════════════════════════════════════════════════════════════

const technicalSkills = {
  "Programming Languages": [
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png" }
  ],
  "Frameworks & Libraries": [
    { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
    { name: "Django REST", icon: "https://cdn.simpleicons.org/django/092E20" },
    { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" }
  ],
  "Cloud & Hosting": [
    { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger/673DE6" },
    { name: "VPS", icon: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "DNS", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
    { name: "SSL", icon: "https://cdn.simpleicons.org/letsencrypt/003A70" }
  ],
  "Deployment & CI/CD": [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
    { name: "cPanel", icon: "https://cdn.simpleicons.org/cpanel/FF6C2C" },
    { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" }
  ],
  "SEO & Analytics": [
    { name: "SEO", icon: "https://cdn.simpleicons.org/google/4285F4" },
    { name: "Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/E37400" },
    { name: "Search Console", icon: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
    { name: "Google Business", icon: "https://www.vhv.rs/dpng/d/175-1753912_google-my-business-png-logo-png-google-mybusiness.png" },
    { name: "Social Media", icon: "https://cdn.simpleicons.org/meta/0081FB" }
  ],
  "Databases": [
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
  ],
  "Development Tools": [
    { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "DevTools", icon: "https://cdn.simpleicons.org/googlechrome/4285F4" },
    { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" }
  ],
  "Security & Auth": [
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/00B4E6" },
    { name: "RBAC", icon: "https://cdn.simpleicons.org/auth0/EB5424" }
  ],
  "Computer Science": [
    { name: "OOP", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "DSA", icon: "https://cdn.simpleicons.org/leetcode/FFA116" },
    { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "Agile", icon: "https://cdn.simpleicons.org/jira/0052CC" }
  ]
};

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full min-h-screen py-20 bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/8 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full space-y-16">
        
        {/* ═══════════════ HEADER ═══════════════ */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 px-5 py-2 text-[0.65rem] font-black uppercase tracking-[0.3em] text-cyan-300"
          >
            <Cpu size={14} className="animate-spin-slow" />
            SERVICES & EXPERTISE
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Development
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mt-2 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                Solutions
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mx-auto mt-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Full-stack development services powered by modern technologies and proven methodologies
          </motion.p>
        </div>

        {/* ═══════════════ SERVICES ACCORDION ═══════════════ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <ChamferCard isOpen={isOpen}>
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between px-6 py-6 md:px-8 text-left transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className={`p-3 border-2 transition-all duration-300 ${
                          isOpen 
                            ? 'border-cyan-400/60 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                            : 'border-white/10 bg-white/5 text-white/50 group-hover/card:border-cyan-400/30'
                        }`}
                        style={{
                          clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className={`text-lg md:text-xl font-black uppercase tracking-wider transition-all duration-300 ${
                          isOpen ? 'text-white' : 'text-slate-400 group-hover/card:text-slate-300'
                        }`}>
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            isOpen ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'
                          }`} />
                          <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-400/70">
                            {service.id}_SYSTEM {isOpen ? 'ACTIVE' : 'STANDBY'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-4 md:mt-0 transition-colors duration-300 ${
                        isOpen ? 'text-cyan-400' : 'text-white/20'
                      }`}
                    >
                      <ChevronDown size={24} strokeWidth={2.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-8 md:px-8">
                          <div className="h-[1.5px] w-full bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent mb-6" />
                          
                          <div className="grid lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5 space-y-6">
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <Zap size={14} className="text-cyan-400" />
                                  <p className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                                    OVERVIEW
                                  </p>
                                  <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                  {service.description}
                                </p>
                              </div>

                              <NeonButton 
                                onClick={() => {
                                  const msg = `Hi! I'm interested in your ${service.title} services.`;
                                  window.open(`https://wa.me/917470958844?text=${encodeURIComponent(msg)}`, '_blank');
                                }}
                              >
                                <MessageCircle size={14} />
                                Connect on WhatsApp
                              </NeonButton>

                              <div className="relative border-l-2 border-cyan-400/40 bg-cyan-950/20 pl-4 py-3">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/5 to-transparent" />
                                <p className="text-xs text-slate-400 leading-relaxed italic relative z-10">
                                  "Built with industry best practices, optimized for performance and scalability."
                                </p>
                              </div>
                            </div>

                            <div className="lg:col-span-7">
                              <div className="flex items-center gap-2 mb-5">
                                <Layers size={14} className="text-cyan-400" />
                                <p className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                                  TECH STACK
                                </p>
                                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                              </div>
                              
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {service.technologies.map((tech, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="group/tech relative border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-3 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                                    
                                    <img 
                                      src={tech.icon} 
                                      alt={tech.name} 
                                      className="w-12 h-12 mb-3 object-contain opacity-70 group-hover/tech:opacity-100 group-hover/tech:scale-110 transition-all duration-300 relative z-10" 
                                    />
                                    <h5 className="text-[10px] font-black uppercase tracking-wide text-white relative z-10">
                                      {tech.name}
                                    </h5>
                                    
                                    <div className="absolute top-1 right-1 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
                                      <ArrowUpRight size={10} className="text-cyan-400" />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ChamferCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══════════════ TECHNICAL SKILLS SHOWCASE ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 border-2 border-purple-400/40 bg-gradient-to-r from-purple-500/15 to-cyan-500/10 px-5 py-2 text-[0.65rem] font-black uppercase tracking-[0.3em] text-purple-300">
              <Code2 size={14} />
              TECHNICAL SKILLS
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-400">
              Complete Tech Stack
            </h3>
            <p className="text-slate-400 text-xs max-w-xl mx-auto">
              Proven expertise across languages, frameworks, databases, cloud platforms, and development tools
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(technicalSkills).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  {category.includes("Language") && <Code2 size={16} className="text-cyan-400" />}
                  {category.includes("Framework") && <Layers size={16} className="text-cyan-400" />}
                  {category.includes("Cloud") && <Cloud size={16} className="text-cyan-400" />}
                  {category.includes("Deployment") && <Zap size={16} className="text-cyan-400" />}
                  {category.includes("SEO") && <Search size={16} className="text-cyan-400" />}
                  {category.includes("Database") && <Database size={16} className="text-cyan-400" />}
                  {category.includes("Tools") && <Cpu size={16} className="text-cyan-400" />}
                  {category.includes("Security") && <Shield size={16} className="text-cyan-400" />}
                  {category.includes("Computer") && <Code2 size={16} className="text-cyan-400" />}
                  
                  <h4 className="text-base md:text-lg font-black uppercase tracking-wider text-white">
                    {category}
                  </h4>
                  <div className="flex-1 h-[1.5px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                  <span className="text-[9px] font-mono text-cyan-400/70 bg-cyan-400/10 px-2 py-0.5 rounded">
                    {skills.length}
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.02 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="group/item relative border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 p-3 flex flex-col items-center gap-2 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] cursor-pointer"
                      style={{
                        clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      
                      {skill.icon && (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain opacity-80 group-hover/item:opacity-100 transition-all duration-300 relative z-10 bg-white/5 p-1 rounded drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
                        />
                      )}
                      <span className="text-[9px] font-bold uppercase text-center text-slate-400 group-hover/item:text-cyan-300 transition-colors duration-300 leading-tight relative z-10">
                        {skill.name}
                      </span>

                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════ FOOTER STATUS ═══════════════ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <div className="inline-flex items-center gap-4 border-2 border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] px-6 py-3 text-[10px] font-black uppercase tracking-wider"
            style={{
              clipPath: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
            }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-cyan-400">SYSTEMS OPERATIONAL</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-purple-400 animate-pulse" />
              <span className="text-purple-400">READY FOR DEPLOYMENT</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPage;