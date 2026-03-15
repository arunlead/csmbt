"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--green)]/10 bg-black">
      {/* Marquee top */}
      <div className="overflow-hidden border-b border-[var(--green)]/10 py-2">
        <div className="flex gap-8 animate-scroll-left" style={{ animationDuration: "25s", width: "max-content" }}>
          {Array(12).fill("CSMT · CYBERSECURITY · MEDIA TEC · ETHICAL HACKING · INNOVATION ·").map((t,i)=>(
            <span key={i} className="font-mono text-xs text-[var(--muted)] tracking-widest whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="status-dot" />
              <span className="font-display text-xl tracking-[.3em] neon-text">CSMT</span>
            </div>
            <p className="font-body text-sm text-[var(--muted)] leading-relaxed mb-4 max-w-xs">
              Cybersecurity and Media Technology — Private sector organisation owned by individuals.
              Est. 12/01/2022.
            </p>
            <p className="font-mono text-xs text-[var(--muted)]">
              © 2025 – 2030 Cybersecurity and Media tec (CSMT). All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-[var(--green)] tracking-widest mb-4">// NAVIGATE</div>
            <div className="space-y-2">
              {["Home","About","Services","Achievements","Team","Join Us"].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(" ","-")}`}
                  className="block font-body text-sm text-[var(--muted)] hover:text-[var(--green)] transition-colors tracking-wide">
                  &gt; {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-xs text-[var(--green)] tracking-widest mb-4">// CONTACT</div>
            <div className="space-y-3">
              <a href="mailto:5zaanu@gmail.com"
                className="block font-mono text-xs text-[var(--muted)] hover:text-[var(--cyan)] transition-colors">
                5zaanu@gmail.com
              </a>
              <div className="font-mono text-xs text-[var(--muted)]">Support: Website Tech & Copyright</div>
              <a href="#" className="block font-mono text-xs text-[var(--muted)] hover:text-[var(--green)] transition-colors">
                View Privacy Policy ↓
              </a>
            </div>
            <div className="mt-6 font-mono text-[10px] text-[var(--muted)] leading-5">
              CSMT Design integrated platforms:<br />
              <span className="text-[#00c4ff]">Canva</span> ·{" "}
              <span className="text-[#ff5f57]">Figma</span> ·{" "}
              <span className="text-[#ff8c00]">Workflow</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a href="#" className="font-mono text-xs text-[var(--muted)] hover:text-[var(--green)] transition-colors tracking-widest uppercase">Terms & Support</a>
            <a href="#" className="font-mono text-xs text-[var(--muted)] hover:text-[var(--green)] transition-colors tracking-widest uppercase">Privacy Policy</a>
          </div>
          <div className="font-mono text-xs text-[var(--muted)]">
            Designed with <span className="text-[var(--green)]">♦</span> by CSMT
          </div>
        </div>
      </div>
    </footer>
  );
}
