"use client";
import { useEffect, useRef } from "react";

const members = [
  "Mohamed Faizaan","Arun","Haroon Rasheed","Laurence Agbessi","Robert",
  "Ritika Nagrale","Hasheer","Siddiq","Abdul Salam","Raiyan","Benny",
  "Vignesh","Mohamed Fahim","Manoj","Hameeth","Jagar","Sandhiya",
  "Arfath Khan","Irfan Basha","Jamalludeen","Akash","MohamedAslam",
  "Najeebullah","Malavika","Ayub","Mohammed Farook","Kamaleshwaran",
  "Abbas","Hemanth","Afra Thasneem","Mohammed Ibrahim","Abdul Malik",
  "Mohamed Hussain","Jothimani","Harmaen Zama","Ashraf","Mohammed Ashim",
  "Alniyaz","Najeebullah",
];

function MemberStrip({ members: ms, dir }: { members: string[]; dir: "left" | "right" }) {
  const doubled = [...ms, ...ms];
  return (
    <div className="overflow-hidden strip">
      <div className={`flex gap-3 ${dir === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ animationDuration: "40s", width: "max-content" }}>
        {doubled.map((m, i) => (
          <div key={i} className="card-cyber px-5 py-3 flex-shrink-0 flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-sm bg-[var(--green)]/10 border border-[var(--green)]/30 flex items-center justify-center
              group-hover:bg-[var(--green)]/20 transition-colors">
              <span className="font-mono text-[9px] text-[var(--green)]">
                {m.slice(0,2).toUpperCase()}
              </span>
            </div>
            <span className="font-body text-sm tracking-wide text-[var(--text)] whitespace-nowrap group-hover:text-[var(--green)] transition-colors">
              {m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const half = Math.ceil(members.length / 2);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 100));
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" ref={ref} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[var(--green)] tracking-[.4em]">04 //</span>
          <h2 className="font-display text-3xl md:text-5xl tracking-wide uppercase text-[var(--text)]">
            Our Team <span className="neon-text">Members</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--green)]/30 to-transparent" />
        </div>
        <div className="reveal flex items-center gap-6">
          <div className="card-cyber px-6 py-3 inline-flex gap-4">
            <span className="font-mono text-xs text-[var(--muted)]">TOTAL MEMBERS</span>
            <span className="font-display text-lg neon-text">39</span>
          </div>
          <div className="card-cyber px-6 py-3 inline-flex gap-4">
            <span className="font-mono text-xs text-[var(--muted)]">REGISTRATION</span>
            <span className="font-mono text-xs text-[var(--red)]">CLOSED (0 SLOTS)</span>
          </div>
        </div>
      </div>

      {/* Left/right fade overlays */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000, transparent)" }} />
        <div className="flex flex-col gap-3 py-2">
          <MemberStrip members={members.slice(0, half)} dir="left" />
          <MemberStrip members={members.slice(half)} dir="right" />
        </div>
      </div>
    </section>
  );
}
