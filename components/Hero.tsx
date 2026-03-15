"use client";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════
   CANVAS — Matrix rain + particle network
═══════════════════════════════════════════ */
function HackerCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    let W = 0, H = 0, raf = 0;
    const FONT = 14;
    const CHARS = "アイウエオカキクケコ01110100ABCDEF#@%><{}[]\\|/";
    let cols: number[] = [];

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const init = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
      cols = Array(Math.floor(W / FONT)).fill(0).map(() => Math.random() * -H);
      pts  = Array.from({ length: 60 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5,
        r: Math.random() * 1.5 + .5,
      }));
    };
    init();
    window.addEventListener("resize", init);

    let tick = 0;
    const draw = () => {
      tick++;
      ctx.fillStyle = "rgba(0,0,0,0.055)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${FONT}px 'Share Tech Mono',monospace`;

      for (let i = 0; i < cols.length; i++) {
        const y = cols[i];
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        if (y < 80) ctx.fillStyle = `rgba(255,255,255,${Math.random() * .5 + .3})`;
        else ctx.fillStyle = `rgba(0,255,65,${Math.random() * .4 + .1})`;
        ctx.fillText(ch, i * FONT, y);
        if (y > H && Math.random() > .975) cols[i] = 0;
        else cols[i] += .65;
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,229,255,0.5)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,229,255,${(1 - d / 150) * .1})`;
            ctx.lineWidth = .5; ctx.stroke();
          }
        }
      }

      if (tick % 2 === 0) {
        const sy = ((tick * 1.5) % (H + 200)) - 100;
        const g = ctx.createLinearGradient(0, sy - 80, 0, sy + 80);
        g.addColorStop(0, "rgba(0,255,65,0)");
        g.addColorStop(.5, "rgba(0,255,65,0.035)");
        g.addColorStop(1, "rgba(0,255,65,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, sy - 80, W, 160);
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: .22 }} />;
}

/* ═══════════════════════════════════════════
   TERMINAL TYPEWRITER
═══════════════════════════════════════════ */
const T_LINES = [
  { p: "root@csmt:~$", c: " ./boot_secure_env.sh",         col: "#00ff41" },
  { p: "[SYS]",        c: " Encryption modules ... OK",     col: "#00e5ff" },
  { p: "[SYS]",        c: " Firewall rules applied ... OK", col: "#00e5ff" },
  { p: "[NET]",        c: " VPN tunnel established ... OK", col: "#ffdd00" },
  { p: "[CSMT]",       c: " ACCESS GRANTED — Welcome ▌",   col: "#00ff41" },
];

function Terminal() {
  const [rows, setRows] = useState<{ p: string; c: string; col: string; done: boolean }[]>([]);
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    if (li >= T_LINES.length) return;
    const full = T_LINES[li];
    if (ci < full.c.length) {
      const t = setTimeout(() => {
        setRows(prev => {
          const n = [...prev];
          if (!n[li]) n[li] = { p: full.p, c: "", col: full.col, done: false };
          n[li] = { ...n[li], c: full.c.slice(0, ci + 1) };
          return n;
        });
        setCi(c => c + 1);
      }, 30);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setRows(prev => { const n = [...prev]; if (n[li]) n[li].done = true; return n; });
        setLi(l => l + 1); setCi(0);
      }, 280);
      return () => clearTimeout(t);
    }
  }, [li, ci]);

  return (
    <div className="w-full max-w-[500px] mx-auto lg:mx-0 bg-black/75 backdrop-blur-md border border-[#00ff41]/20 overflow-hidden"
      style={{ boxShadow: "0 0 40px rgba(0,255,65,.12), inset 0 0 40px rgba(0,0,0,.5)" }}>
      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#050f05] border-b border-[#00ff41]/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[10px] text-[#2a4a2a] ml-3 tracking-widest">CSMT_TERMINAL — bash — 80×24</span>
        <span className="ml-auto flex gap-1">
          {[0, .25, .5].map(d => (
            <span key={d} className="w-1 h-1 rounded-full bg-[#00ff41]/40 animate-pulse"
              style={{ animationDelay: `${d}s` }} />
          ))}
        </span>
      </div>
      <div className="px-4 py-4 min-h-[138px] font-mono text-[11px] leading-[1.8]">
        {rows.map((r, i) => (
          <div key={i} className="flex gap-2 flex-wrap">
            <span style={{ color: r.col }}>{r.p}</span>
            <span className="text-[#a0d0a0]">{r.c}
              {!r.done && <span className="animate-pulse text-[#00ff41]">▌</span>}
            </span>
          </div>
        ))}
        {li >= T_LINES.length && (
          <div className="flex gap-2">
            <span className="text-[#00ff41]">root@csmt:~$</span>
            <span className="animate-pulse text-[#00ff41]">▌</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   FLOATING STATUS BADGE
═══════════════════════════════════════════ */
function Badge({ icon, text, delay = 0 }: { icon: string; text: string; delay?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div className={`flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-[#00ff41]/20 px-3 py-1.5 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <span className="text-[#00ff41] text-xs">{icon}</span>
      <span className="font-mono text-[10px] text-[#3a6a3a] tracking-widest uppercase">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════ */
export default function Hero() {
  const [ready, setReady] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 200); return () => clearTimeout(t); }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateY(0px)" : "translateY(32px)",
    transition: `opacity .9s ease ${delay}ms, transform .9s ease ${delay}ms`,
  });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-black">

      {/* 1 — ANIMATED CANVAS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HackerCanvas />
      </div>

      {/* 2 — YOUR VIDEO — full screen looping */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
        style={{ opacity: 0.62 }}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 3 — CINEMATIC OVERLAY LAYERS */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.42)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 65% 70% at 38% 50%, rgba(0,12,3,0.22) 0%, rgba(0,0,0,0.58) 100%)" }} />
        <div className="absolute top-0 inset-x-0 h-40"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-60"
          style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 left-0 w-[55%]"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 right-0 w-32"
          style={{ background: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,16,3,0.14)" }} />
      </div>

      {/* 4 — HEX GRID */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-25 hex-bg" />

      {/* 5 — NEON BORDER LINES */}
      <div className="absolute top-0 inset-x-0 h-[2px] z-[4] pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent 0%,#00ff41 25%,#00e5ff 75%,transparent 100%)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px z-[4] pointer-events-none opacity-25"
        style={{ background: "linear-gradient(90deg,transparent,#00ff41,transparent)" }} />

      {/* 6 — CORNER BRACKETS */}
      {([
        ["top-[82px] left-4 sm:left-6",  "border-t-2 border-l-2"],
        ["top-[82px] right-4 sm:right-6", "border-t-2 border-r-2"],
        ["bottom-10  left-4 sm:left-6",   "border-b-2 border-l-2"],
        ["bottom-10  right-4 sm:right-6", "border-b-2 border-r-2"],
      ] as [string, string][]).map(([pos, cls], i) => (
        <div key={i} className={`absolute ${pos} w-7 h-7 sm:w-9 sm:h-9 z-[5] ${cls} border-[#00ff41]/35 pointer-events-none`} />
      ))}

      {/* 7 — SIDE VERTICAL LINES (desktop) */}
      <div className="hidden xl:block absolute left-10 top-28 bottom-14 w-px z-[4] pointer-events-none opacity-15"
        style={{ background: "linear-gradient(to bottom,transparent,#00ff41 30%,#00ff41 70%,transparent)" }} />
      <div className="hidden xl:block absolute right-10 top-28 bottom-14 w-px z-[4] pointer-events-none opacity-15"
        style={{ background: "linear-gradient(to bottom,transparent,#00ff41 30%,#00ff41 70%,transparent)" }} />

      {/* 8 — HACKER / MASCOT IMAGE right side (put your image at /public/hacker.png) */}
      <div className="hidden xl:flex absolute right-0 bottom-0 w-[38vw] max-w-[560px] z-[4] pointer-events-none select-none items-end justify-end">
        {!imgErr ? (
          <img
            src="/hacker.png"
            alt="CSMT Hacker Mascot"
            onError={() => setImgErr(true)}
            className="w-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 0 50px rgba(0,255,65,.3)) drop-shadow(0 0 100px rgba(0,229,255,.1)) brightness(.85) contrast(1.1)",
              maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,.6) 15%, rgba(0,0,0,1) 50%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,.6) 15%, rgba(0,0,0,1) 50%)",
            }}
          />
        ) : (
          /* Fallback — glowing hacker silhouette SVG */
          <svg viewBox="0 0 320 520" className="w-[320px] opacity-[.07]" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#00ff41" strokeWidth="1">
            <circle cx="160" cy="100" r="60" />
            <ellipse cx="160" cy="100" rx="30" ry="42" opacity=".4" />
            <line x1="130" y1="92" x2="112" y2="92" />
            <line x1="190" y1="92" x2="208" y2="92" />
            <path d="M142 126 Q160 138 178 126" />
            <path d="M100 168 Q160 155 220 168 L240 380 L80 380 Z" opacity=".5" />
            <line x1="160" y1="155" x2="160" y2="380" opacity=".2" />
            <line x1="80" y1="380" x2="60" y2="480" opacity=".4" />
            <line x1="240" y1="380" x2="260" y2="480" opacity=".4" />
          </svg>
        )}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 40% at 60% 90%, rgba(0,255,65,.07) 0%, transparent 70%)" }} />
      </div>

      {/* 9 — MAIN CONTENT */}
      <div className="relative z-[6] flex flex-col justify-center min-h-screen
        px-5 sm:px-10 lg:px-16 xl:px-20
        max-w-[1400px] mx-auto w-full
        pt-28 sm:pt-32 pb-20">

        {/* Status badges row */}
        <div style={fadeUp(0)} className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          <Badge icon="◈" text="Group Brand"       delay={300} />
          <Badge icon="◎" text="Est. 12 Jan 2022"  delay={450} />
          <Badge icon="●" text="39 Members Active" delay={600} />
          <Badge icon="⬡" text="Global Reach"      delay={750} />
        </div>

        {/* TITLE BLOCK */}
        <div className="mb-6 max-w-[90%] xl:max-w-[58%]">

          {/* section label */}
          <div style={fadeUp(200)} className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#00ff41] opacity-50" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#2a4a2a] tracking-[.4em] uppercase">
              Cybersecurity &amp; Media Technology
            </span>
          </div>

          {/* CYBER — gradient fill with glitch */}
          <h1 style={fadeUp(350)} className="font-display uppercase leading-[.86] mb-0.5 select-none">
            <span
              className="glitch inline-block"
              data-text="CYBER"
              style={{
                fontSize: "clamp(54px,11.5vw,152px)",
                background: "linear-gradient(160deg,#ffffff 0%,#c8f0c8 40%,#00ff41 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 35px rgba(0,255,65,.4))",
                letterSpacing: ".04em",
              }}
            >CYBER</span>
          </h1>

          {/* SECURITY — transparent outline */}
          <h1 style={fadeUp(500)} className="font-display uppercase leading-[.86] mb-3 select-none">
            <span style={{
              fontSize: "clamp(54px,11.5vw,152px)",
              color: "transparent",
              WebkitTextStroke: "clamp(1px,.12vw,2px) rgba(0,255,65,.5)",
              letterSpacing: ".04em",
              display: "inline-block",
              textShadow: "0 0 80px rgba(0,255,65,.12)",
            }}>SECURITY</span>
          </h1>

          {/* & MEDIA TEC */}
          <h2 style={fadeUp(640)} className="font-display uppercase leading-none select-none">
            <span style={{
              fontSize: "clamp(20px,4vw,54px)",
              color: "transparent",
              WebkitTextStroke: "clamp(1px,.07vw,1.5px) rgba(0,229,255,.65)",
              letterSpacing: ".16em",
              display: "inline-block",
              textShadow: "0 0 40px rgba(0,229,255,.18)",
            }}>&amp;&nbsp;MEDIA&nbsp;TEC</span>
          </h2>
        </div>

        {/* Divider */}
        <div style={fadeUp(700)} className="flex items-center gap-4 mb-6 max-w-xs">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right,#00ff41,transparent)" }} />
          <span className="font-mono text-[10px] text-[#00ff41]/40 tracking-[.5em]">CSMT</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left,#00ff41,transparent)" }} />
        </div>

        {/* Tagline */}
        <p
  style={{
    ...fadeUp(760),
    color: "transparent",
    WebkitTextStroke: ".5px rgba(200,240,200,.55)",
    textShadow: "0 0 20px rgba(0,255,65,.12)",
  }}
  className="font-body text-base sm:text-lg md:text-xl mb-1 tracking-[.12em] max-w-lg"
>
  Play with systems. Control it, design it.
</p>

        <p style={fadeUp(840)} className="font-mono text-[11px] text-[#2a4a2a] tracking-[.35em] uppercase mb-10">
          Private sector organisation &nbsp;·&nbsp; Owned by individuals
        </p>

        {/* Terminal */}
        <div style={fadeUp(960)} className="mb-10">
          <Terminal />
        </div>

        {/* CTA buttons */}
        <div style={fadeUp(1100)} className="flex flex-wrap gap-3">
          <a href="#join"
            className="group relative overflow-hidden font-display text-xs sm:text-sm tracking-[.25em] uppercase px-7 sm:px-10 py-3.5 border-2 border-[#00ff41] text-[#00ff41] hover:text-black transition-colors duration-300 cursor-none"
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100%-10px) 100%,0% 100%)" }}>
            <span className="absolute inset-0 bg-[#00ff41] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10">⚡ JOIN US</span>
          </a>
          <a href="#about"
            className="group relative overflow-hidden font-display text-xs sm:text-sm tracking-[.25em] uppercase px-7 sm:px-10 py-3.5 border border-[#00e5ff]/55 text-[#00e5ff] hover:text-black transition-colors duration-300 cursor-none"
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100%-10px) 100%,0% 100%)" }}>
            <span className="absolute inset-0 bg-[#00e5ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            <span className="relative z-10">EXPLORE</span>
          </a>
          <a href="#services"
            className="font-display text-xs sm:text-sm tracking-[.25em] uppercase px-7 sm:px-10 py-3.5 border border-white/10 text-[#2a4a2a] hover:text-[#00ff41] hover:border-[#00ff41]/30 transition-all duration-300 cursor-none"
            style={{ clipPath: "polygon(10px 0%,100% 0%,calc(100%-10px) 100%,0% 100%)" }}>
            SERVICES
          </a>
        </div>
      </div>

      {/* 10 — BOTTOM META BAR */}
      <div className="absolute bottom-3 inset-x-0 z-[6] flex items-end justify-between px-5 sm:px-10 lg:px-16 pointer-events-none">
        <div className="hidden sm:block font-mono text-[9px] text-[#1a3a1a] tracking-widest leading-5">
          <div>LAT 13.0827°N &nbsp;·&nbsp; LON 80.2707°E</div>
          <div style={{ color: "rgba(0,255,65,.2)" }}>CHENNAI · INDIA</div>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[9px] text-[#1a3a1a] tracking-[.5em]">SCROLL</span>
          <div className="w-px h-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full"
              style={{ background: "linear-gradient(to bottom,transparent,#00ff41,transparent)", animation: "scrollDrop 1.8s ease-in-out infinite" }} />
          </div>
        </div>

        <div className="hidden sm:block font-mono text-[9px] text-[#1a3a1a] tracking-widest leading-5 text-right">
          <div>VER 2.4.1 &nbsp;·&nbsp; BUILD STABLE</div>
          <div style={{ color: "rgba(0,255,65,.2)" }}>© CSMT 2025–2030</div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
