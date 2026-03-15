import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "monospace"],
        body: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      colors: {
        bg: "#000000",
        panel: "#0a0f0a",
        green: "#00ff41",
        cyan: "#00e5ff",
        red: "#ff003c",
        dim: "#1a2a1a",
        text: "#c8f0c8",
        muted: "#4a6a4a",
      },
      animation: {
        "matrix-fall": "matrixFall 20s linear infinite",
        "glitch": "glitch 3s infinite",
        "glitch2": "glitch2 3s infinite",
        "scan": "scan 4s linear infinite",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
        "flicker": "flicker 0.15s infinite",
        "type": "typing 3s steps(30) forwards",
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 35s linear infinite",
        "border-trace": "borderTrace 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        matrixFall: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%,100%": { clipPath: "inset(0 0 100% 0)", transform: "translate(0)" },
          "20%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(-4px, 2px)" },
          "40%": { clipPath: "inset(50% 0 30% 0)", transform: "translate(4px, -2px)" },
          "60%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(-2px, 4px)" },
          "80%": { clipPath: "inset(10% 0 80% 0)", transform: "translate(2px, -4px)" },
        },
        glitch2: {
          "0%,100%": { clipPath: "inset(100% 0 0 0)", transform: "translate(0)" },
          "20%": { clipPath: "inset(30% 0 50% 0)", transform: "translate(4px, -2px)" },
          "40%": { clipPath: "inset(60% 0 20% 0)", transform: "translate(-4px, 2px)" },
          "60%": { clipPath: "inset(15% 0 75% 0)", transform: "translate(2px, -4px)" },
          "80%": { clipPath: "inset(80% 0 5% 0)", transform: "translate(-2px, 4px)" },
        },
        scan: {
          "0%": { top: "-10px" },
          "100%": { top: "100%" },
        },
        pulseGreen: {
          "0%,100%": { boxShadow: "0 0 8px #00ff41, 0 0 20px #00ff4140" },
          "50%": { boxShadow: "0 0 20px #00ff41, 0 0 60px #00ff4180, 0 0 100px #00ff4130" },
        },
        flicker: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        borderTrace: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
