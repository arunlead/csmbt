"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Team",         href: "#team" },
  { label: "Join Us",      href: "#join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.85)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,255,65,0.1)" : "none",
          paddingTop: "14px",
          paddingBottom: "14px",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between gap-4">

          {/* ── LOGO ── */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0 group">
            {/* animated dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-40" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff41]"
                style={{ boxShadow: "0 0 8px #00ff41" }} />
            </span>
            <span className="font-display text-base sm:text-lg tracking-[.3em] text-[#00ff41]"
              style={{ textShadow: "0 0 20px rgba(0,255,65,.5)" }}>
              CSMT
            </span>
            <span className="hidden lg:block font-mono text-[10px] text-[#2a4a2a] tracking-widest border-l border-[#00ff41]/20 pl-3">
              CYBERSECURITY &amp; MEDIA TEC
            </span>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {LINKS.map(l => (
              <a key={l.label} href={l.href}
                className="nav-item font-mono text-[11px] sm:text-[12px]">
                {l.label}
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <a href="#join"
            className="hidden md:flex items-center gap-2 group relative overflow-hidden border border-[#00ff41]/60 text-[#00ff41] font-mono text-[11px] px-5 py-2 tracking-[.2em] uppercase transition-colors duration-300 hover:text-black flex-shrink-0"
            style={{ clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
            <span className="absolute inset-0 bg-[#00ff41] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10">JOIN NOW</span>
          </a>

          {/* ── HAMBURGER ── */}
          <button
            className="md:hidden p-2 flex flex-col gap-[5px] flex-shrink-0"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu">
            {[0, 1, 2].map(i => (
              <span key={i} className="block h-px bg-[#00ff41] transition-all duration-300"
                style={{
                  width: i === 1 ? (open ? "0" : "16px") : "22px",
                  opacity: i === 1 && open ? 0 : 1,
                  transform:
                    open && i === 0 ? "rotate(45deg) translate(4px,4px)" :
                    open && i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "none",
                }} />
            ))}
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400 pointer-events-none"
        style={{ opacity: open ? 1 : 0 }}>
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
          onClick={() => setOpen(false)} />
        {/* panel */}
        <div
          className="absolute top-0 right-0 h-full w-72 bg-[#030d03] border-l border-[#00ff41]/15 pointer-events-auto flex flex-col pt-20 pb-8 px-8 transition-transform duration-400"
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}>
          {/* close */}
          <button className="absolute top-5 right-6 text-[#3a5a3a] hover:text-[#00ff41] font-mono text-xs tracking-widest"
            onClick={() => setOpen(false)}>
            [CLOSE]
          </button>
          {/* links */}
          <nav className="flex flex-col gap-5 mb-10">
            {LINKS.map((l, i) => (
              <a key={l.label} href={l.href}
                className="flex items-center gap-3 font-mono text-sm text-[#3a5a3a] hover:text-[#00ff41] transition-colors tracking-widest uppercase"
                style={{ transitionDelay: `${i * 40}ms` }}
                onClick={() => setOpen(false)}>
                <span className="text-[#00ff41]/30 text-xs">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#join" onClick={() => setOpen(false)}
            className="text-center border border-[#00ff41]/50 text-[#00ff41] font-mono text-xs py-3 tracking-[.25em] uppercase hover:bg-[#00ff41] hover:text-black transition-all duration-300">
            JOIN NOW
          </a>
          <div className="mt-auto font-mono text-[9px] text-[#1a3a1a] tracking-widest leading-6">
            <div>CSMT // CYBERSECURITY &amp; MEDIA TEC</div>
            <div>EST. 12/01/2022 · 39 MEMBERS</div>
          </div>
        </div>
      </div>
    </>
  );
}
