// src/Components/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  User,
  Briefcase,
  FileText,
  AlertCircle,
  Loader2,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// STYLED COMPONENTS - COMPACT SIZE
// ═══════════════════════════════════════════════════════════════

const ChamferCard = ({ className = "", children }) => (
  <div
    className={`relative border border-cyan-400/30 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-black/90 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-sm transition-all duration-500 overflow-hidden group/card hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] ${className}`}
    style={{
      clipPath: "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
    }}
  >
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50 transition-all duration-500 group-hover/card:h-10 group-hover/card:w-10 group-hover/card:border-cyan-300" />
      <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-purple-400/50 transition-all duration-500 group-hover/card:h-10 group-hover/card:w-10 group-hover/card:border-purple-300" />
      <div className="absolute left-0 bottom-0 h-8 w-8 border-l-2 border-b-2 border-blue-400/50 transition-all duration-500 group-hover/card:h-10 group-hover/card:w-10 group-hover/card:border-blue-300" />
      <div className="absolute right-0 bottom-0 h-8 w-8 border-r-2 border-b-2 border-cyan-400/50 transition-all duration-500 group-hover/card:h-10 group-hover/card:w-10 group-hover/card:border-cyan-300" />
    </div>
    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-scan"></div>
    </div>
    {children}
  </div>
);

const InputField = ({ icon: Icon, label, type = "text", name, value, onChange, required = false, placeholder, rows }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-cyan-400">
      <Icon size={12} />
      {label}
      {required && <span className="text-red-400">*</span>}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2.5 bg-slate-900/60 border border-cyan-400/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400/60 focus:bg-slate-900/80 transition-all duration-300 resize-none"
        style={{
          clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 bg-slate-900/60 border border-cyan-400/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400/60 focus:bg-slate-900/80 transition-all duration-300"
        style={{
          clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
        }}
      />
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, value, href }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="group relative border border-cyan-400/20 bg-gradient-to-br from-slate-900/60 to-black/60 p-4 hover:border-cyan-400/50 hover:bg-slate-800/80 transition-all duration-300"
    style={{
      clipPath: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10 flex items-start gap-3">
      <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
        <Icon size={18} className="text-cyan-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1.5">
          {title}
        </h4>
        {href ? (
          <a 
            href={href}
            className="text-sm font-bold text-white hover:text-cyan-300 transition-colors break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-bold text-white break-all">
            {value}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // WhatsApp redirect with form data
    const msg = `Hi Ashirwad!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/917987109120?text=${encodeURIComponent(msg)}`, '_blank');
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "Ashirwads9111@gmail.com",
      href: "mailto:Ashirwads9111@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 79871 09120",
      href: "tel:+917987109120"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Raipur, Chhattisgarh",
      href: null
    }
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

      <div className="relative max-w-6xl mx-auto px-6 w-full space-y-12">
        
        {/* ═══════════════ HEADER ═══════════════ */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 px-5 py-2 text-[0.65rem] font-black uppercase tracking-[0.3em] text-cyan-300"
          >
            <Sparkles size={14} className="animate-pulse" />
            LET'S CONNECT
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
                Get In
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mt-2 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                Touch
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
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </motion.p>
        </div>

        {/* ═══════════════ MAIN CONTENT GRID ═══════════════ */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* LEFT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <ChamferCard>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Send size={18} className="text-cyan-400" />
                  <h3 className="text-lg font-black uppercase tracking-wider text-white">
                    Send Message
                  </h3>
                  <div className="flex-1 h-[1.5px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <InputField
                    icon={User}
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />

                  <InputField
                    icon={Mail}
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />

                  <InputField
                    icon={Briefcase}
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                  />

                  <InputField
                    icon={FileText}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                  />

                  {/* Status Messages */}
                  {formStatus.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-400/30 text-red-300 text-xs"
                      style={{
                        clipPath: "polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))"
                      }}
                    >
                      <AlertCircle size={16} />
                      <span className="font-bold">Please fill all fields correctly.</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="group relative w-full inline-flex items-center justify-center gap-2 border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-purple-500/5 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200 hover:bg-cyan-400/20 hover:border-cyan-300 hover:text-white transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      clipPath: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    
                    {formStatus.loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin relative z-10" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} className="relative z-10" />
                        <span className="relative z-10">Send via WhatsApp</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-slate-500 mt-3">
                    Message will open in WhatsApp for instant communication
                  </p>
                </form>
              </div>
            </ChamferCard>
          </motion.div>

          {/* RIGHT: CONTACT INFO & SOCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-cyan-400" />
                <h3 className="text-base font-black uppercase tracking-wider text-white">
                  Contact Info
                </h3>
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
              </div>

              {contactInfo.map((info, index) => (
                <InfoCard key={index} {...info} />
              ))}
            </div>

            {/* Quick Response Badge */}
            <ChamferCard>
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
                    <Zap size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-1.5">
                      Fast Response
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed">
                      I typically respond within <span className="text-white font-bold">24 hours</span> on business days.
                    </p>
                  </div>
                </div>
              </div>
            </ChamferCard>
          </motion.div>
        </div>

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
              <span className="text-cyan-400">AVAILABLE FOR PROJECTS</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <MessageCircle size={12} className="text-purple-400" />
              <span className="text-purple-400">OPEN TO OPPORTUNITIES</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactPage;