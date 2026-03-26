# Portfolio Website

## Project Description
Chandler Hardy's personal portfolio website. Dark editorial design ("Monograph" aesthetic) built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 15 with Turbopack
- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Motion (Framer Motion)
- **Typography**: Syne (display), Outfit (body), JetBrains Mono (mono)
- **Deployment**: Vercel

## Project Structure
```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts
│   │   ├── page.tsx              # Main single-page app
│   │   ├── globals.css           # Design system (dark-only)
│   │   └── projects/[slug]/     # Project detail pages
│   └── data/
│       └── projects.ts          # Project data
├── components/
│   ├── Hero.tsx                 # Full-viewport hero
│   ├── Header.tsx               # Minimal fixed nav
│   ├── Projects.tsx             # Numbered project list
│   ├── About.tsx                # Bio + real stats
│   ├── Skills.tsx               # Tech stack grid
│   ├── Contact.tsx              # Contact links
│   ├── Footer.tsx               # Minimal footer
│   ├── hooks/useInView.tsx      # Intersection Observer hook
│   └── ui/                     # shadcn/ui components (legacy, mostly unused)
└── public/                     # Static assets
```

## Design System
- **Dark mode only** — no theme toggle, committed aesthetic
- **Colors**: Near-black background, warm gold accent (#c8a97e), zinc gray hierarchy
- **Layout**: Numbered sections (01/Work, 02/About, etc.), editorial composition
- **Spacing**: Generous — `py-24 md:py-32`, `px-6 md:px-12 lg:px-20`

## Development Commands
- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run lint` — ESLint

## Featured Projects
1. **Crooked Finger** — AI-powered crochet pattern translator (deployed)
2. **Elucidate Chess** — Chess training with Stockfish + AI explanations
3. **GreenLine** — Full-stack lawn care platform (built autonomously by Ralph)
4. **Ralph** — Autonomous build pipeline

## Key Context
- Projects data lives in `src/data/projects.ts`
- Performance Beef (day job): 51 MRs, 4,000+ users, 40% US cattle market
- Deployed on Vercel from main branch
