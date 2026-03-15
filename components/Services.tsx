"use client";
import { useEffect, useRef } from "react";

const cybersecurity = [
  "Web Security", "Database Security", "Cybersecurity Solutions",
  "Cloud Security", "Penetration Testing", "Ethical Hacking",
  "Digital Forensics", "Network Security",
];

const mediaTec = [
  "Create Website", "Billing Software", "ERP Systems",
  "Software Solutions", "Distribution Systems", "AI Integration",
  "Media Technology", "App Development",
];

const courses = [
  { title: "Ethical Hacking", desc: "Hands-on offensive security training with real-world scenarios.", tag: "CYBERSECURITY" },
  { title: "Cybersecurity Fundamentals", desc: "Core principles, threat modelling, and security architecture.", tag: "CYBERSECURITY" },
  { title: "Digital Forensics", desc: "Investigate digital crimes and recover critical evidence.", tag: "CYBERSECURITY" },
  { title: "Web Development", desc: "Build secure, modern websites and web applications.", tag: "MEDIA TEC" },
  { title: "AI & Machine Learning", desc: "Study AI systems, tools, and safe integration practices.", tag: "TECH" },
  { title: "Software Solutions", desc: "ERP, billing systems and enterprise-grade software.", tag: "MEDIA TEC" },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal,.reveal-left,.reveal-right")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-32 px-6 hex-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">02 //</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide uppercase text-[var(--text)]">
            What We <span className="neon-text">Do</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>
        <p className="reveal font-body text-[var(--muted)] mb-16 tracking-wide">
          Cybersecurity and Media Technology — two powerful branches, one unified mission.
        </p>

        {/* Two branches */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Cybersecurity */}
          <div className="reveal card-cyber p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-[var(--green)]" />
              <h3 className="font-display text-2xl tracking-widest neon-text uppercase">Cybersecurity</h3>
            </div>
            <div className="relative mb-6">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--green)]/20" />
              <div className="grid grid-cols-2 gap-3">
                {cybersecurity.map(s => (
                  <div key={s} className="flex items-center gap-2 group">
                    <span className="text-[var(--green)] text-xs opacity-50 group-hover:opacity-100">›</span>
                    <span className="font-body text-sm text-[var(--text)] opacity-70 group-hover:opacity-100 group-hover:text-[var(--green)] transition-all">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-mono text-xs text-[var(--muted)] border-t border-[var(--green)]/10 pt-4">
              PENETRATION TESTING · ETHICAL HACKING · SECURE SYSTEMS
            </div>
          </div>

          {/* Media Tec */}
          <div className="reveal card-cyber p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-[var(--cyan)]" />
              <h3 className="font-display text-2xl tracking-widest neon-cyan uppercase">Media Tec</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {mediaTec.map(s => (
                <div key={s} className="flex items-center gap-2 group">
                  <span className="text-[var(--cyan)] text-xs opacity-50 group-hover:opacity-100">›</span>
                  <span className="font-body text-sm text-[var(--text)] opacity-70 group-hover:opacity-100 group-hover:text-[var(--cyan)] transition-all">
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <div className="font-mono text-xs text-[var(--muted)] border-t border-[var(--cyan)]/10 pt-4">
              WEB · SOFTWARE · ERP · DISTRIBUTION SYSTEMS
            </div>
          </div>
        </div>

        {/* Courses grid */}
        <div className="reveal flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">02.1 //</span>
          <h3 className="font-display text-2xl tracking-wide uppercase text-[var(--text)]">Courses & Workshops</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <div key={c.title} className="reveal card-cyber p-6 group" style={{ transitionDelay: `${i*80}ms` }}>
              <div className="tag mb-4 text-[10px]">{c.tag}</div>
              <h4 className="font-display text-base tracking-wider text-[var(--text)] group-hover:neon-text mb-3 uppercase transition-all">
                {c.title}
              </h4>
              <p className="font-body text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--text)] transition-colors">
                {c.desc}
              </p>
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--green)]">
                <span className="font-mono text-xs tracking-widest">LEARN MORE</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
