# Portfolio Website — Chandler Hardy

## Project Overview

Chandler Hardy's personal portfolio site. Next.js 15 + React 19 + TypeScript, deployed on Vercel at chandlerhardy.com.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Frontend**: React 19, TypeScript 5, Tailwind CSS
- **UI**: Radix UI, shadcn/ui, Framer Motion (Motion)
- **Theme**: Dark/light mode via next-themes
- **Icons**: Lucide React

## Project Structure

```
portfolio-website/
├── src/app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Header.tsx
│   └── Footer.tsx
└── public/
```

## Dev Commands

```bash
npm run dev    # Start dev server (Turbopack)
npm run build  # Production build
npm run lint   # ESLint
```

## Deployment

Vercel — auto-deploys from main branch at chandlerhardy.com. Push to main to deploy.

## Owner Profile

See `RESUME.md` for the full resume. Key points:

- Full-stack engineer at Performance Livestock Analytics (Feb 2024–present)
  - PHP/jQuery frontend, Go/MongoDB backend
  - 51 merged MRs, 4,000+ users, 40% US cattle market
- Self-taught, 2 YOE, looking for remote roles $90–130K
- Strong in: TypeScript, Python, React/Next.js, FastAPI, Go, PostgreSQL, Docker, OCI

## Projects (Current Reality)

| Project | Status | Stack | URL |
|---------|--------|-------|-----|
| Crooked Finger | Deployed | Next.js, FastAPI, GraphQL, PostgreSQL | crookedfinger.chandlerhardy.com |
| Elucidate Chess | In Progress | Next.js, FastAPI, GraphQL, PostgreSQL, Stockfish | — |
| GreenLine | Complete | Full-stack lawn care platform | — |
| SnapCal | In Progress | iOS app + FastAPI backend | — |
| Ralph | Tool (not SaaS) | Bash, n8n, Claude Code | — |

## Current Portfolio Site Projects (may be outdated)

The site currently features:
1. Crypto Portfolio Analyzer — outdated, low priority
2. AI Chatbot — outdated, low priority

**These should be replaced** with the projects above that better represent current skills.

## Guidelines

- All components are functional with TypeScript — maintain this
- Tailwind only for styling, no inline styles
- Keep animations with Motion (Framer Motion)
- Mobile-first responsive design
- Commit changes and push to main to deploy
