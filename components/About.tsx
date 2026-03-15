"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">01 //</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide uppercase text-[var(--text)]">
            About <span className="neon-text">CSMT</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal-left space-y-6">
            <div className="tag mb-4">Formerly BSC Hacking and Media Tec</div>
            <p className="font-body text-base leading-relaxed text-[var(--text)] opacity-80">
              <span className="neon-text font-bold">Cybersecurity and Media tec (CSMT)</span>, established on{" "}
              <span className="text-[var(--cyan)]">12/01/2022</span>, is an international group committed to
              individuals passionate about cybersecurity, media technology, and innovative digital solutions.
            </p>
            <p className="font-body text-base leading-relaxed text-[var(--text)] opacity-70">
              Our initiatives include website creation, software and penetration testing, and specialized workshops.
              We offer institute-based courses covering cybersecurity, ethical hacking, digital forensics, and
              professional etiquette.
            </p>
            <p className="font-body text-base leading-relaxed text-[var(--text)] opacity-70">
              The core mission of CSMT is to drive technological innovation, enhance digital literacy, and advance
              secure computing practices. With the rapid evolution of Artificial Intelligence, we place a strong
              emphasis on studying AI systems, their tools, and independent applications.
            </p>
            <a href="#" className="btn-cyber inline-block mt-4">KNOW MORE ABOUT THE GROUP</a>
          </div>

          {/* Right — stats panel */}
          <div className="reveal-right space-y-4">
            {[
              { label: "TOTAL MEMBERS", value: "39+", icon: "◈" },
              { label: "ESTABLISHED", value: "2022", icon: "◎" },
              { label: "WORKSHOPS CONDUCTED", value: "10+", icon: "◐" },
              { label: "COUNTRIES REACHED", value: "Global", icon: "◉" },
            ].map(s => (
              <div key={s.label} className="card-cyber p-5 flex items-center gap-6">
                <span className="font-mono text-2xl text-[var(--green)] opacity-50">{s.icon}</span>
                <div>
                  <div className="font-mono text-xs text-[var(--muted)] tracking-[.3em] mb-1">{s.label}</div>
                  <div className="font-display text-2xl neon-text tracking-wider">{s.value}</div>
                </div>
              </div>
            ))}

            {/* Mission block */}
            <div className="card-cyber p-5 mt-6 border-l-2 border-[var(--green)]">
              <div className="font-mono text-xs text-[var(--cyan)] tracking-widest mb-3">// MISSION</div>
              <p className="font-mono text-xs text-[var(--text)] opacity-70 leading-6">
                CSMT, an acronym for Cyber Security and Media Technology — a group that creates highly secured and
                feasible websites, software, IT systems and Ethical Hacking & Cyber Security practices. Here at CSMT,
                we do the best work with latest technologies, workshops and courses to multiple institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
