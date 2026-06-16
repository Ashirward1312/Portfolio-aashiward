// src/Components/ExperiencePage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Award,
  Code2,
  Rocket,
  Users,
  Server,
  Globe,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Building2,
  Zap
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// STYLED COMPONENTS - OPTIMIZED SIZE
// ═══════════════════════════════════════════════════════════════

const ChamferCard = ({ className = "", children, isActive = false }) => (
  <div
    className={`relative border transition-all duration-500 overflow-hidden group/card ${isActive
        ? "border-cyan-300/50 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-[0_0_35px_rgba(34,211,238,0.2)]"
        : "border-cyan-400/20 bg-gradient-to-b from-slate-950/70 to-black/70 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-300/40"
      } ${className}`}
    style={{
      clipPath: "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
    }}
  >
    <div className="pointer-events-none absolute inset-0">
      <div className={`absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 transition-all duration-500 ${isActive ? 'border-cyan-400/70' : 'border-cyan-400/30 group-hover/card:border-cyan-400/50'}`} />
      <div className={`absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 transition-all duration-500 ${isActive ? 'border-purple-400/70' : 'border-purple-400/30 group-hover/card:border-purple-400/50'}`} />
      <div className={`absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 transition-all duration-500 ${isActive ? 'border-blue-400/70' : 'border-blue-400/30 group-hover/card:border-blue-400/50'}`} />
      <div className={`absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 transition-all duration-500 ${isActive ? 'border-cyan-400/70' : 'border-cyan-400/30 group-hover/card:border-cyan-400/50'}`} />
    </div>
    {isActive && (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scan"></div>
      </div>
    )}
    {children}
  </div>
);

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE DATA - UPDATED & CORRECTED
// ═══════════════════════════════════════════════════════════════

const experiences = [
  {
    id: "sp-advertising",
    role: "Full Stack Web Developer",
    company: "SP Advertising",
    type: "Full-time",
    period: "Oct 2025 – Present",
    status: "Current",
    location: "Raipur",
    description: "Leading web development initiatives for advertising agency, building custom solutions and managing end-to-end project delivery.",
    highlights: [
      "Developing and deploying client websites with modern tech stack",
      "Building responsive web applications with React.js and Django",
      "Managing hosting, DNS, SSL configuration across multiple platforms",
      "Implementing SEO best practices and analytics integration",
      "Collaborating with design and marketing teams for optimal results"
    ],
    technologies: ["React.js", "Django", "Node.js", "AWS S3", "SEO", "DNS", "SSL"],
    icon: Globe,
    color: "cyan"
  },
  {
    id: "freelance",
    role: "Freelance Software Developer",
    company: "Self-Employed",
    type: "Remote",
    period: "2025 – Present",
    status: "Current",
    location: "Remote",
    description: "Delivering end-to-end web solutions for clients across multiple industries with focus on modern technologies and scalable architecture.",
    highlights: [
      "Delivered 10+ production websites for clients across branding, news, logistics, and professional services",
      "Built custom backends, REST APIs, and admin dashboards using Python, Django, and React.js",
      "Deployed on Hostinger, BigRock, and AWS S3 with complete CI/CD setup",
      "Managed full project lifecycle — client requirements, system design, development, SEO, and post-launch support"
    ],
    technologies: ["Python", "Django", "React.js", "REST APIs", "AWS S3", "Hostinger", "BigRock", "SEO"],
    icon: Rocket,
    color: "purple"
  },

  {
    id: "yashvitech-intern",
    role: "Full-Stack Developer Intern",
    company: "Yashvitech IT Solutions Pvt. Ltd.",
    type: "Internship",
    period: "Sep 2024 – Sep 2025",
    status: "Completed",
    location: "Raipur",
    description: "Started professional journey as intern, rapidly learning and contributing to production projects with modern tech stack.",
    highlights: [
      "Learned and implemented full-stack development with React.js and Django",
      "Contributed to multiple client projects under senior developer guidance",
      "Gained hands-on experience with version control using Git and GitHub",
      "Participated in agile development workflows and daily standups",
      "Successfully completed assigned tasks and demonstrated rapid growth"
    ],
    technologies: ["React.js", "Django", "PostgreSQL", "Git", "GitHub", "REST APIs"],
    icon: Code2,
    color: "blue"
  }
];

// ═══════════════════════════════════════════════════════════════
// STATS COMPONENT - COMPACT SIZE
// ═══════════════════════════════════════════════════════════════

const StatsCard = ({ icon: Icon, value, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative border border-cyan-400/20 bg-gradient-to-br from-slate-900/60 to-black/60 p-4 hover:border-cyan-400/40 hover:bg-slate-800/80 transition-all duration-300"
    style={{
      clipPath: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10 flex items-center gap-3">
      <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
        <Icon size={20} className="text-cyan-400" />
      </div>
      <div>
        <h4 className="text-2xl font-black text-white mb-0.5">{value}</h4>
        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{label}</p>
      </div>
    </div>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

const ExperiencePage = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  const stats = [
    { icon: Briefcase, value: "15+", label: "Projects Delivered" },
    { icon: Calendar, value: "1.5+", label: "Years Experience" },
    { icon: Award, value: "3", label: "Key Positions" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" }
  ];

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
            <Briefcase size={14} />
            PROFESSIONAL JOURNEY
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
                Career
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mt-2 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                Experience
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
            Building scalable solutions and leading development teams across multiple organizations
          </motion.p>
        </div>

        {/* ═══════════════ STATS GRID ═══════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} delay={index * 0.08} />
          ))}
        </div>

        {/* ═══════════════ EXPERIENCE TIMELINE ═══════════════ */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-cyan-400" />
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">
              Timeline
            </h3>
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-cyan-400/50 via-purple-400/30 to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isActive = selectedExp === index;
                const isCurrent = exp.status === "Current";

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-6 top-6 -translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${isCurrent
                          ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse'
                          : isActive
                            ? 'bg-purple-400 border-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                            : 'bg-slate-700 border-slate-600'
                        }`} />
                    </div>

                    <div className="ml-0 md:ml-16">
                      <ChamferCard isActive={isActive}>
                        <button
                          onClick={() => setSelectedExp(index)}
                          className="w-full text-left p-6 md:p-7 transition-all duration-300"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start gap-3">
                                <div
                                  className={`p-3 border-2 transition-all duration-300 ${isActive || isCurrent
                                      ? 'border-cyan-400/60 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                      : 'border-white/10 bg-white/5 text-white/50 group-hover/card:border-cyan-400/30'
                                    }`}
                                  style={{
                                    clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
                                  }}
                                >
                                  <Icon size={22} />
                                </div>

                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <h4 className={`text-lg md:text-xl font-black uppercase tracking-wider transition-colors ${isActive || isCurrent ? 'text-white' : 'text-slate-400 group-hover/card:text-slate-300'
                                      }`}>
                                      {exp.role}
                                    </h4>
                                    {isCurrent && (
                                      <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-400/40 rounded text-[8px] font-black uppercase tracking-wider text-cyan-300">
                                        Current
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                      <Building2 size={12} className="text-cyan-400/70" />
                                      <span className="font-bold">{exp.company}</span>
                                    </div>
                                    <span className="text-slate-600">•</span>
                                    <div className="flex items-center gap-1.5">
                                      <Calendar size={12} className="text-purple-400/70" />
                                      <span>{exp.period}</span>
                                    </div>
                                    <span className="text-slate-600">•</span>
                                    <div className="flex items-center gap-1.5">
                                      <MapPin size={12} className="text-blue-400/70" />
                                      <span>{exp.location}</span>
                                    </div>
                                  </div>

                                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                    {exp.description}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <motion.div
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`transition-colors ${isActive ? 'text-cyan-400' : 'text-white/20'}`}
                            >
                              <ChevronRight size={24} strokeWidth={2.5} />
                            </motion.div>
                          </div>
                        </button>

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <div className="px-6 pb-7 md:px-7">
                                <div className="h-[1.5px] w-full bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent mb-6" />

                                <div className="space-y-5">
                                  <div className="flex items-center gap-2">
                                    <Sparkles size={14} className="text-cyan-400" />
                                    <h5 className="text-xs font-black uppercase tracking-wider text-cyan-400">
                                      Key Achievements
                                    </h5>
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                                  </div>

                                  <div className="grid gap-2.5">
                                    {exp.highlights.map((highlight, i) => (
                                      <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="flex items-start gap-2.5 group/item"
                                      >
                                        <div className="mt-0.5">
                                          <CheckCircle2 size={14} className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors" />
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                          {highlight}
                                        </p>
                                      </motion.div>
                                    ))}
                                  </div>

                                  <div className="pt-3">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Server size={14} className="text-purple-400" />
                                      <h5 className="text-xs font-black uppercase tracking-wider text-purple-400">
                                        Technologies Used
                                      </h5>
                                      <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-400/30 to-transparent" />
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                      {exp.technologies.map((tech, i) => (
                                        <motion.span
                                          key={i}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: i * 0.02 }}
                                          className="px-2.5 py-1 bg-slate-900/60 border border-cyan-400/30 hover:border-cyan-400/60 rounded text-[9px] font-bold uppercase tracking-wider text-cyan-300 hover:text-cyan-200 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer"
                                        >
                                          {tech}
                                        </motion.span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </ChamferCard>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════ FOOTER CTA ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <div className="inline-flex flex-col items-center gap-3">
            <p className="text-slate-400 text-xs">
              Interested in working together?
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-purple-500/5 px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300 hover:text-white transition-all duration-300 overflow-hidden"
              style={{
                clipPath: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Zap size={14} className="animate-pulse relative z-10" />
              <span className="relative z-10">Let's Build Something Amazing</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperiencePage;