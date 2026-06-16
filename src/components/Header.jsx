import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#home",       label: "Home" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio",  label: "Projects" },
  { href: "#about",      label: "About" },
  { href: "#contact",    label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{ cursor: "none" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── LOGO ── */}
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              {/* Accent dot */}
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] group-hover:scale-125 transition-transform duration-300" />
              <span className="text-white text-base font-bold tracking-widest uppercase group-hover:text-cyan-300 transition-colors duration-300">
                Ashirwad <span className="text-cyan-400">Sharma</span>
              </span>
            </a>

            {/* ── DESKTOP NAV — frosted pill ── */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-3 py-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* ── CTA BUTTON ── */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hidden md:inline-flex items-center gap-2 border border-cyan-400/60 bg-cyan-400/5 hover:bg-cyan-400/15 px-5 py-2 rounded-full text-[0.7rem] font-bold tracking-[0.25em] uppercase text-cyan-300 hover:text-white hover:border-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Hire Me
            </a>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              <span className={`block h-[1.5px] w-5 bg-cyan-400 transition-all duration-300 origin-center ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-cyan-400 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-cyan-400 transition-all duration-300 origin-center ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </button>

          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/8 bg-black/95 backdrop-blur-xl px-5 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-[0.75rem] font-semibold tracking-[0.25em] uppercase text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400/50" />
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full border border-cyan-400/50 bg-cyan-400/10 hover:bg-cyan-400/20 px-5 py-3 rounded-xl text-[0.75rem] font-bold tracking-[0.25em] uppercase text-cyan-300 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;