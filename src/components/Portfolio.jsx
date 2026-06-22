// src/Components/PortfolioSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal, 
  Layout, 
  Globe, 
  Rocket,
  Briefcase,
  Code2,
  Building2,
  Sparkles,
  ExternalLink
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// PROJECTS DATA
// ═══════════════════════════════════════════════════════════════

const PROJECTS = [
  {
    id: 1,
    name: "Indie Naari",
    host: "indienaari.com",
    desc: "Full-stack e-commerce platform with product catalog management, shopping cart, order processing, and secure payments.",
    url: "https://indienaari.com",
    icon: Globe,
    tone: "cyan",
    stack: ["React.js", "Django", "Tailwind CSS"]
  },
  {
    id: 2,
    name: "DDC Consultancy",
    host: "ddcconsultancy.in",
    desc: "HR operations management — employee records, leave tracking, approvals, and payroll integration.",
    url: "https://ddcconsultancy.in/",
    icon: Layout,
    tone: "cyan",
    stack: ["React.js", "Django", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Risevo Platform",
    host: "risevo.in",
    desc: "Developer-client connection platform with profile management and project collaboration tools.",
    url: "https://www.risevo.in",
    icon: Code2,
    tone: "blue",
    stack: ["React.js", "Django REST", "AWS S3"]
  },
  {
    id: 4,
    name: "Prajapati Enterprises",
    host: "prajapatienterprises.in",
    desc: "Premium business website with service showcase and conversion-optimized user journeys.",
    url: "https://prajapatienterprises.in/",
    icon: Globe,
    tone: "purple",
    stack: ["React.js", "Vite", "Tailwind CSS"]
  },
  {
    id: 5,
    name: "SP Advertising",
    host: "spadvertising.in",
    desc: "Digital marketing agency platform showcasing services, portfolio, and client testimonials.",
    url: "https://spadvertising.in/",
    icon: Rocket,
    tone: "purple",
    stack: ["React.js", "Django", "AWS S3"]
  },
  {
    id: 6,
    name: "Aarogya Hospital",
    host: "aarogyahospitalraipur.com",
    desc: "Complete healthcare solution with appointment booking, patient management, and medical services showcase.",
    url: "https://aarogyahospitalraipur.com/",
    icon: Building2,
    tone: "cyan",
    stack: ["React.js", "Django", "PostgreSQL"]
  },
  {
    id: 7,
    name: "SSGT Group",
    host: "ssgtgroup.com",
    desc: "Corporate website for construction and real estate with project galleries and inquiry management.",
    url: "https://ssgtgroup.com/",
    icon: Layout,
    tone: "blue",
    stack: ["React.js", "Vite", "Tailwind CSS"]
  },
  {
    id: 8,
    name: "Ventoria Global",
    host: "ventoriaglobal.com",
    desc: "International business solutions platform with service catalog and global presence showcase.",
    url: "https://ventoriaglobal.com/",
    icon: Globe,
    tone: "cyan",
    stack: ["React.js", "Node.js", "MongoDB"]
  },
  {
    id: 9,
    name: "Mahesh Ventures",
    host: "maheshventures.in",
    desc: "Real estate and investment platform with property listings and financial services integration.",
    url: "https://maheshventures.in/",
    icon: Briefcase,
    tone: "blue",
    stack: ["React.js", "Django REST", "PostgreSQL"]
  },
  {
    id: 10,
    name: "Land Bazar",
    host: "landbazar.in",
    desc: "Property marketplace connecting buyers and sellers with advanced search and listing features.",
    url: "https://landbazar.in/",
    icon: Terminal,
    tone: "purple",
    stack: ["React.js", "Django", "AWS S3"]
  },
  {
    id: 11,
    name: "Ryaan Signage",
    host: "ryaangroup.in",
    desc: "Corporate website for signage solutions featuring neon displays and architectural branding.",
    url: "https://ryaangroup.in/",
    icon: Terminal,
    tone: "cyan",
    stack: ["React.js", "Vite", "Tailwind CSS"]
  },
  {
    id: 12,
    name: "Laafi Foods",
    host: "laafifoods.com",
    desc: "E-commerce platform for food products with seamless ordering and delivery management.",
    url: "https://www.laafifoods.com/",
    icon: Layout,
    tone: "purple",
     stack: [
    "Shopify",
    "Liquid",
    "JavaScript",
    "HTML5",
    "CSS3",
    "E-commerce"
  ]
  },
  {
    id: 13,
    name: "Sambhav Sansthan",
    host: "sambhavsansthan.org",
    desc: "NGO website showcasing social initiatives, events, and community development programs.",
    url: "https://sambhavsansthan.org/",
    icon: Globe,
    tone: "blue",
    stack: ["React.js", "Web", "Tailwind CSS"]
  }
];

const COLORS = {
  cyan: "#22d3ee",
  blue: "#60a5fa",
  purple: "#a855f7",
};

// ═══════════════════════════════════════════════════════════════
// PROJECT CARD COMPONENT
// ═══════════════════════════════════════════════════════════════

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const accent = COLORS[project.tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 rounded-lg" 
        style={{ backgroundColor: accent }}
      />
      
      {/* Card Container */}
      <div className="relative border-2 border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-opacity-30 rounded-lg overflow-hidden"
        style={{ borderTopColor: `${accent}40` }}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 bg-white/5">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/40">
            {project.host}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col h-full min-h-[280px]">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center border-2 border-white/10 bg-white/5 rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{ color: accent, borderColor: `${accent}30` }}
          >
            <Icon size={20} />
          </div>
          
          <h3 className="mb-2 font-black text-base uppercase tracking-wide text-white transition-all duration-300"
            style={{ textShadow: `0 0 10px ${accent}30` }}
          >
            {project.name}
          </h3>
          
          <p className="mb-4 text-[10px] leading-relaxed text-white/50 tracking-wide flex-grow">
            {project.desc}
          </p>

          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 text-[8px] border border-white/10 bg-white/5 uppercase tracking-wider text-white/60 rounded hover:bg-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-auto">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 border-2 px-4 py-2 transition-all duration-300 hover:scale-105 rounded"
              style={{ borderColor: accent, color: accent }}
            >
              <div 
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 rounded" 
                style={{ backgroundColor: `${accent}15` }}
              />
              <span className="relative font-mono text-[9px] font-black uppercase tracking-widest group-hover/btn:text-white transition-colors">
                View Live
              </span>
              <ExternalLink size={12} className="relative group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function PortfolioSection() {
  return (
    <section className="relative bg-[#050508] py-16 px-6 font-mono overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 
              "linear-gradient(transparent 95%, rgba(168, 85, 247, 0.15) 95%), linear-gradient(90deg, transparent 95%, rgba(34, 211, 238, 0.15) 95%)",
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-b from-purple-500/8 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-cyan-400/30 bg-cyan-400/5 px-4 py-2 mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300"
          >
            <Sparkles size={12} />
            CLIENT SUCCESS ARCHIVE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tighter text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Featured
            </span>
            <span className="block mt-1">Projects</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 mx-auto max-w-xl text-[11px] uppercase tracking-[0.2em] text-white/50 leading-relaxed"
          >
            Selected projects delivered with precision // High-performance builds for ambitious teams
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.25em] text-white/30"
        >
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span className="flex items-center gap-1.5">
              <Terminal size={10} />
              LOC: RAIPUR_HQ
            </span>
            <span className="text-white/10">|</span>
            <span>PROJECTS: {PROJECTS.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}