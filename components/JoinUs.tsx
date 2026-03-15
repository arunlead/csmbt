"use client";
import { useEffect, useRef } from "react";

export default function JoinUs() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal,.reveal-left,.reveal-right")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 120));
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="join" ref={ref} className="relative py-32 px-6 hex-bg">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">05 //</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide uppercase text-[var(--text)]">
            Join <span className="neon-text">Us</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal-left">
            <div className="font-display text-[clamp(60px,12vw,140px)] leading-none tracking-wider mb-8"
              style={{
                background: "linear-gradient(135deg, #7b8ff0, #00e5ff, #a8ff6e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              JOIN
              <br />US
            </div>
            <p className="font-body text-[var(--text)] opacity-80 mb-6 leading-relaxed">
              Really excited to get in touch with us?
            </p>
            <a href="mailto:5zaanu@gmail.com"
              className="font-mono text-[var(--cyan)] hover:neon-cyan transition-all tracking-wide text-sm">
              5zaanu@gmail.com
            </a>

            {/* Social */}
            <div className="mt-10">
              <p className="font-mono text-xs text-[var(--muted)] tracking-widest mb-5">// FOLLOW US ON</p>
              <div className="flex gap-4">
                {[
                  { name: "LinkedIn", color: "#0077b5", letter: "in" },
                  { name: "MS Teams", color: "#5059c9", letter: "T" },
                  { name: "Instagram", color: "#e1306c", letter: "ig" },
                ].map(s => (
                  <a key={s.name} href="#"
                    className="w-12 h-12 border flex items-center justify-center font-mono text-sm transition-all duration-300 hover:scale-110"
                    style={{ borderColor: s.color + "60", color: s.color }}
                    title={s.name}>
                    {s.letter}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — action buttons */}
          <div className="reveal-right space-y-4">
            <p className="font-body text-[var(--muted)] mb-8 leading-relaxed">
              Joining the group should be based on your genuine interest. By providing your details,
              you confirm that you are the person applying.
            </p>
            {[
              { label: "JOIN US", desc: "Apply to become a member of CSMT", color: "btn-cyber" },
              { label: "MEMBER PROFILE & DOWNLOADS", desc: "Access your member resources", color: "btn-cyber-outline" },
              { label: "JOIN ROOM", desc: "Enter the CSMT collaboration space", color: "btn-cyber-outline" },
            ].map(b => (
              <div key={b.label} className="card-cyber p-5 flex items-center gap-4 group hover:cursor-pointer">
                <div className="flex-1">
                  <div className="font-mono text-xs text-[var(--muted)] mb-1 tracking-widest">{b.desc}</div>
                </div>
                <a href="#" className={`${b.color} text-xs flex-shrink-0`}>{b.label}</a>
              </div>
            ))}

            {/* Status */}
            <div className="card-cyber p-5 mt-6">
              <div className="font-mono text-xs text-[var(--muted)] tracking-widest mb-3">// REGISTRATION STATUS</div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-[var(--muted)]">Total members</div>
                  <div className="text-[var(--green)] text-lg font-display mt-1">39</div>
                </div>
                <div>
                  <div className="text-[var(--muted)]">Available slots</div>
                  <div className="text-[var(--red)] text-lg font-display mt-1">0</div>
                </div>
              </div>
              <div className="mt-3 text-[10px] text-[var(--muted)] tracking-widest">
                RESERVED FOR — UPCOMING ADMIT SLOT: --
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
