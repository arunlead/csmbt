"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + "px";
        dot.current.style.top = my + "px";
      }
    };
    const raf = () => {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top = ry + "px";
      }
      requestAnimationFrame(raf);
    };
    document.addEventListener("mousemove", move);
    raf();
    const over = () => {
      if (ring.current) { ring.current.style.width="56px"; ring.current.style.height="56px"; }
    };
    const out = () => {
      if (ring.current) { ring.current.style.width="32px"; ring.current.style.height="32px"; }
    };
    document.querySelectorAll("a,button,.card-cyber").forEach(el => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
