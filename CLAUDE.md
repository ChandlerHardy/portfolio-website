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