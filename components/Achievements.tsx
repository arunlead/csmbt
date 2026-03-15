"use client";
import { useEffect, useRef } from "react";

const achievements = [
  { title: "Automated Text & Media Encryption Software", year: "2023", type: "SOFTWARE" },
  { title: "Group Internal Challenge Program (GCIP 2024)", year: "2024", type: "EVENT" },
  { title: "AI Manipulation Safety Event", year: "2024", type: "EVENT" },
  { title: "In-depth AI Study", year: "2024", type: "RESEARCH" },
  { title: "Cyber Forensic Workshop", year: "2023", type: "WORKSHOP" },
  { title: "Ethical Hacking Workshop", year: "2023", type: "WORKSHOP" },
  { title: "Study on Bug Bounty Programs", year: "2024", type: "RESEARCH" },
  { title: "Filmorago Media Project", year: "2023", type: "MEDIA" },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal,.reveal-left")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tagColor: Record<string, string> = {
    SOFTWARE: "var(--green)", EVENT: "var(--cyan)",
    RESEARCH: "#ff9900", WORKSHOP: "#bf00ff", MEDIA: "#00ffff",
  };

  return (
    <section id="achievements" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">03 //</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide uppercase text-[var(--text)]">
            Our <span className="neon-text">Achievements</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>
        <p className="reveal font-body text-[var(--muted)] mb-16 max-w-3xl leading-relaxed">
          Our group actively undertakes projects and hosts events to create real-world impact. Through these
          contributions, CSMT continues to establish itself as a platform for learning, innovation, and
          collaboration at the global level.
        </p>

        {/* Timeline style */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--green)] via-[var(--green)]/30 to-transparent" />
          <div className="space-y-4 pl-8">
            {achievements.map((a, i) => (
              <div key={a.title} className="reveal-left card-cyber p-5 flex items-center gap-6 group relative"
                style={{ transitionDelay: `${i * 70}ms` }}>
                {/* Timeline dot */}
                <div className="absolute -left-8 w-3 h-3 rounded-full border border-[var(--green)] group-hover:bg-[var(--green)] transition-colors" />

                <span className="font-mono text-xs tracking-widest" style={{ color: tagColor[a.type] || "var(--green)", minWidth: "80px" }}>
                  [{a.type}]
                </span>
                <div className="flex-1">
                  <h4 className="font-body text-base text-[var(--text)] group-hover:text-[var(--green)] transition-colors font-semibold tracking-wide">
                    {a.title}
                  </h4>
                </div>
                <span className="font-mono text-xs text-[var(--muted)]">{a.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coming soon buttons */}
        <div className="reveal flex flex-wrap gap-4 mt-16">
          {[
            { label: "OUR FULL ACHIEVEMENTS", soon: true },
            { label: "PAST & FUTURE EVENTS", soon: true },
            { label: "COLLABORATION DETAILS", soon: true },
          ].map(b => (
            <div key={b.label} className="relative">
              <button className="btn-cyber opacity-50 cursor-not-allowed" disabled>{b.label}</button>
              <span className="absolute -top-2 -right-2 font-mono text-[9px] text-[var(--red)] tracking-widest bg-black px-1">SOON</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
