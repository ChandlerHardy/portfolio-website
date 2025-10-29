## 🚨 CRITICAL: SEARCH CHRONICLE FIRST (MANDATORY)

**BEFORE IMPLEMENTING ANYTHING, YOU MUST SEARCH CHRONICLE:**

```python
mcp__chronicle__search_sessions(query="relevant keywords", limit=10)
# Or with bash: chronicle search "relevant keywords"
```

**WHY THIS IS MANDATORY:**
- Searching: **1 second**
- Reinventing: **10-20 minutes**
- **ROI: 2,700x** (proven from past wasted effort)

**This is not optional. This is not a suggestion. Search first, ALWAYS.**

---

## Chronicle Development Memory

**This project uses Chronicle to track development sessions and maintain institutional knowledge.**

### Core Directives (MANDATORY)

**YOU MUST FOLLOW THESE DIRECTIVES FOR EVERY INTERACTION:**

1. **🔍 SEARCH FIRST (MANDATORY)** - Before implementing ANYTHING:
   ```python
   mcp__chronicle__search_sessions(query="relevant keywords", limit=10)
   ```
   **This is REQUIRED, not optional.** Past sessions contain solutions to current problems.

2. **📊 CHECK SESSION STATUS (REQUIRED)** - Remind user if not tracking:
   - Current session NOT tracked unless started with `chronicle start claude`
   - **YOU MUST suggest exit and restart if meaningful work is happening**

3. **⚡ USE MCP OVER CLI (MANDATORY)** - Always prefer MCP tools:
   - `mcp__chronicle__*` returns structured JSON (10x faster)
   - Bash commands are for users, not programmatic access
   - **Using CLI instead of MCP is considered incorrect**

4. **🗺️ CHECK ROADMAP BEFORE PLANNING (REQUIRED)** - Avoid duplicate work:
   ```python
   mcp__chronicle__get_roadmap(days=7)
   mcp__chronicle__get_next_steps(completed=False)
   ```
   **Failure to check roadmap can result in duplicating already-planned work**

5. **🏷️ SUGGEST SESSION ORGANIZATION (REQUIRED)** - After significant work:
   - YOU MUST propose descriptive title
   - YOU MUST suggest relevant tags (technologies, features, bugs)
   - YOU MUST link to related sessions

### Chronicle MCP Tools Reference

```python
# Search and sessions
mcp__chronicle__search_sessions(query="feature name", limit=10)
mcp__chronicle__get_sessions(limit=10, days=7)
mcp__chronicle__get_session_summary(session_id=5)

# Project management
mcp__chronicle__get_roadmap(days=7)
mcp__chronicle__get_next_steps(completed=False, limit=20)
mcp__chronicle__get_milestones(status="in_progress")
mcp__chronicle__complete_next_step(step_id=3)
mcp__chronicle__update_milestone_status(milestone_id=2, new_status="completed")

# Timeline and commits
mcp__chronicle__get_timeline(days=1)
mcp__chronicle__get_commits(limit=20, days=7)
```

### Bash Commands (Fallback)

If MCP is not available:

```bash
chronicle search "query"
chronicle sessions
chronicle session <id>
chronicle roadmap
chronicle next-steps
chronicle timeline today
```

**This is mandatory. Every single time. No exceptions.**

# Portfolio Website Project Overview

## Project Description
This is Chandler Hardy's personal portfolio website built with Next.js 15, React 19, and TypeScript. The site showcases projects, skills, and provides contact information in a modern, interactive design.

## Tech Stack
- **Framework**: Next.js 15.4.6 with Turbopack
- **Frontend**: React 19.1.0, TypeScript 5
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Animations**: Motion (Framer Motion) for smooth interactions
- **Theme**: Dark/light mode support with next-themes
- **Icons**: Lucide React icons

## Project Structure
```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main application component
│   ├── components/
│   │   └── Sidebar.tsx        # Sidebar component
│   └── theme/
│       ├── ThemeProvider.tsx  # Theme context provider
│       └── theme.ts           # Theme configuration
├── components/                # Main component directory
│   ├── ui/                    # shadcn/ui components
│   ├── figma/                 # Figma-related components
│   ├── hooks/                 # Custom React hooks
│   ├── Hero.tsx              # Landing hero section
│   ├── About.tsx             # About section
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Skills section
│   ├── Contact.tsx           # Contact form/info
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── ThemeToggle.tsx       # Dark/light mode toggle
│   ├── FloatingParticles.tsx # Background particles
│   ├── FloatingShapes.tsx    # Background shapes
│   ├── ScrollProgress.tsx    # Scroll indicator
│   ├── MagneticHover.tsx     # Magnetic hover effects
│   ├── EnhancedButton.tsx    # Enhanced button component
│   └── TypewriterText.tsx    # Typewriter animation
└── public/                   # Static assets
```

## Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Wide Monitor Optimization**: Enhanced layouts using max-w-10xl with improved spacing
- **Interactive Animations**: Smooth transitions and hover effects
- **Theme Support**: Dark/light mode toggle with system preference detection and no flash
- **Performance**: Next.js 15 with Turbopack for fast development
- **Modern UI**: Clean, professional design with particle effects
- **Accessibility**: Built with Radix UI for accessibility compliance
- **Consistent Layouts**: Uniform card heights and proper grid alignment

## Featured Projects
1. **Crypto Portfolio Analyzer** - Full-stack cryptocurrency portfolio tracking and analysis application
   - URL: https://cryptassist.chandlerhardy.com
   - GitHub: https://github.com/ChandlerHardy/crypto-assistant
   - Tech: Next.js, FastAPI, PostgreSQL, AI (Llama 3.1), Oracle Cloud Infrastructure
   - Features: Real-time portfolio management, AI investment advice, glassmorphism UI

2. **AI Chatbot** - AI-powered chatbot with natural conversations and maps assistant
   - URL: https://chatbot.chandlerhardy.com
   - GitHub: https://github.com/ChandlerHardy/ai-chatbot
   - Tech: React, AI, Next.js, TypeScript
   - Features: Natural conversations, route planning, points of interest

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment
The site is deployed on Vercel with automatic deployments from the main branch.

## Component Architecture
- **Page Layout**: Single-page application with smooth scrolling sections
- **Component System**: Modular components with consistent styling
- **Animation System**: Coordinated animations using Motion library
- **Theme System**: Comprehensive dark/light mode implementation
- **Responsive Design**: Mobile-first with breakpoint-specific styling

## Recent Updates
- **Added Crypto Portfolio Analyzer** - Featured as primary project with custom domain
- **Fixed theme flash issue** - Added blocking script to prevent light theme flash on load
- **Improved wide monitor support** - Enhanced layout with max-w-10xl and better spacing
- **Updated project URLs** - AI chatbot now at chatbot.chandlerhardy.com
- **Enhanced responsive design** - Better grid layouts and spacing across all screen sizes
- **Fixed image display** - Using object-contain to prevent vertical cropping
- **Improved card layouts** - Consistent heights with flexbox structure

## Notes for Future Development
- Project uses Next.js App Router (src/app structure)
- All components are functional components with TypeScript
- Styling follows Tailwind CSS conventions
- Animations are performance-optimized with Motion library
- Theme switching persists user preference in localStorage