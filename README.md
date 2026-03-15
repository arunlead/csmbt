# CSMT Website — Next.js + TypeScript + Tailwind

## Quick Start
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🎬 Replace Background Video
Drop your hacker/cybersecurity video into:
```
/public/hero-video.mp4
```
Recommended: a dark hacker/code/network animation video (MP4, looping)
Free options: search "hacker background loop" on Pixabay or Pexels (free)

## 🖼️ Replace Hacker Image (right side of hero)
Drop your image into:
```
/public/hacker.png
```
Recommended: a dark silhouette / anonymous mask / hacker figure PNG with transparent background.
The image auto-fades at the bottom and gets a green glow filter.

## 📁 Project Structure
```
csmt/
├── app/
│   ├── globals.css     ← all styles, animations, neon effects
│   ├── layout.tsx      ← root layout
│   └── page.tsx        ← main page (assembles all sections)
├── components/
│   ├── Navbar.tsx      ← fixed nav (transparent → solid on scroll)
│   ├── Hero.tsx        ← full-screen hero (canvas + video + effects)
│   ├── About.tsx       ← about + stats
│   ├── Services.tsx    ← cybersecurity + media tec services
│   ├── Achievements.tsx← timeline of achievements
│   ├── Team.tsx        ← infinite scrolling team filmstrip
│   ├── JoinUs.tsx      ← join section
│   ├── Legal.tsx       ← legal disclaimer + copyright
│   ├── Footer.tsx      ← footer
│   ├── MatrixRain.tsx  ← standalone matrix canvas (used site-wide)
│   └── Cursor.tsx      ← custom neon cursor
└── public/
    ├── hero-video.mp4  ← (ADD YOUR VIDEO HERE)
    └── hacker.png      ← (ADD YOUR IMAGE HERE)
```
