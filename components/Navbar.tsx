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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ══════════════ NAV BAR ══════════════ */}
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.90)" : "rgba(0,0,0,0.55)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(0,255,65,0.12)" : "none",
        }}
      >
        <div
          className="max-w-[1400px] mx-auto flex items-center justify-between"
          style={{ padding: "14px 20px" }}
        >
          {/* ── LOGO ── */}
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-40" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff41]"
                style={{ boxShadow: "0 0 8px #00ff41" }} />
            </span>
            <span
              className="font-display tracking-[.3em] text-[#00ff41]"
              style={{ fontSize: "17px", textShadow: "0 0 18px rgba(0,255,65,.55)" }}
            >
              CSMT
            </span>
            <span className="hidden lg:block font-mono text-[10px] text-[#2a4a2a] tracking-widest border-l border-[#00ff41]/20 pl-3">
              CYBERSECURITY &amp; MEDIA TEC
            </span>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} className="nav-item font-mono text-[12px]">
                {l.label}
              </a>
            ))}
          </div>

          {/* ── DESKTOP CTA ── */}
          <a
            href="#join"
            className="hidden md:flex relative overflow-hidden border border-[#00ff41]/60 text-[#00ff41] font-mono text-[11px] px-5 py-2 tracking-[.2em] uppercase transition-colors duration-300 hover:text-black group flex-shrink-0"
            style={{ clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}
          >
            <span className="absolute inset-0 bg-[#00ff41] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10">JOIN NOW</span>
          </a>

          {/* ── HAMBURGER BUTTON — clearly visible ── */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex-shrink-0 flex flex-col justify-center items-center gap-[6px]"
            style={{
              width: "44px",
              height: "44px",
              background: open ? "rgba(0,255,65,0.15)" : "rgba(0,255,65,0.08)",
              border: "1px solid rgba(0,255,65,0.35)",
              borderRadius: "3px",
              padding: "10px",
            }}
          >
            <span
              className="block w-full transition-all duration-300 origin-center"
              style={{
                height: "1.5px",
                background: "#00ff41",
                boxShadow: "0 0 6px #00ff41",
                transform: open ? "rotate(45deg) translate(0px, 7.5px)" : "none",
              }}
            />
            <span
              className="block w-full transition-all duration-300"
              style={{
                height: "1.5px",
                background: "#00ff41",
                boxShadow: "0 0 6px #00ff41",
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block w-full transition-all duration-300 origin-center"
              style={{
                height: "1.5px",
                background: "#00ff41",
                boxShadow: "0 0 6px #00ff41",
                transform: open ? "rotate(-45deg) translate(0px, -7.5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ══════════════ MOBILE FULLSCREEN MENU ══════════════
          — drops DOWN from top (no horizontal slide = no drag) */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(16px)" }}
        >
          {/* Close tap area (whole background) */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          {/* Menu panel — centered vertically */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 gap-2">

            {/* Logo inside menu */}
            <div className="flex items-center gap-2 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff41]" />
              </span>
              <span className="font-display tracking-[.4em] text-[#00ff41] text-sm"
                style={{ textShadow: "0 0 16px rgba(0,255,65,.6)" }}>
                CSMT
              </span>
            </div>

            {/* Nav links */}
            {LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="w-full max-w-xs flex items-center justify-between border-b border-[#00ff41]/10 py-4 group"
                style={{
                  animation: `fadeSlideIn .35s ease ${i * 55}ms both`,
                }}
              >
                <span className="font-mono text-xs text-[#1a3a1a] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl tracking-widest text-[#c8f0c8] group-hover:text-[#00ff41] transition-colors uppercase">
                  {l.label}
                </span>
                <span className="font-mono text-xs text-[#00ff41]/30 group-hover:text-[#00ff41] transition-colors">→</span>
              </a>
            ))}

            {/* Join CTA */}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-8 w-full max-w-xs text-center border border-[#00ff41]/60 text-[#00ff41] font-display text-sm py-4 tracking-[.3em] uppercase hover:bg-[#00ff41] hover:text-black transition-all duration-300"
              style={{ animation: "fadeSlideIn .35s ease 360ms both" }}
            >
              ⚡ JOIN NOW
            </a>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 font-mono text-[10px] text-[#2a4a2a] tracking-[.4em] uppercase hover:text-[#00ff41] transition-colors"
            >
              [ CLOSE MENU ]
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
