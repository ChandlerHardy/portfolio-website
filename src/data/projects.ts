export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  backgroundColor?: string;
  imageScale?: number;
  detailPageImageScale?: number;

  // Detailed page data
  overview?: string;
  features?: string[];
  techStack?: {
    category: string;
    items: string[];
  }[];
  screenshots?: {
    url: string;
    caption: string;
    platform?: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    slug: "chronicle",
    title: "Chronicle - AI Session Recorder",
    shortDescription: "Local-first development session recorder with AI-powered search, summarization, and organization. Features 100% local storage, MCP integration, and Claude Skills for intelligent project tracking, milestone management, and persistent memory across all AI sessions.",
    description: "Chronicle gives your AI assistants a memory. Record complete development sessions, link commits to conversations, and enable AI tools to query your entire development history.",
    image: "/chronicle_tagline.png",
    tags: ["Python", "AI", "MCP", "SQLite", "CLI"],
    githubUrl: "https://github.com/ChandlerHardy/chronicle",
    backgroundColor: "#1E1E2E",

    overview: "Chronicle is a local-first development memory system that captures everything you do with AI coding assistants. It records complete session transcripts, links them to git commits, and provides AI-powered search so your tools can remember past decisions and implementations across all your projects.",

    features: [
      "Full session recording for Claude Code, Gemini CLI, and Qwen CLI",
      "AI-powered search across all development sessions",
      "MCP server integration - AI assistants can query your Chronicle database directly",
      "Multi-project organization with automatic repository detection",
      "Intelligent session summarization with Gemini and Ollama support",
      "Git commit linking to automatically connect code changes to AI conversations",
      "100% local storage with SQLite - complete privacy and offline capability",
      "Project tracking with milestones and next steps managed through the database"
    ],

    techStack: [
      {
        category: "Core",
        items: ["Python 3.11+", "SQLite", "Click CLI"]
      },
      {
        category: "AI Integration",
        items: ["Google Gemini API", "OpenRouter", "Ollama", "Claude Code Integration"]
      },
      {
        category: "Protocols",
        items: ["Model Context Protocol (MCP)", "FastMCP Framework"]
      },
      {
        category: "Git Integration",
        items: ["GitPython", "Automated commit tracking"]
      },
      {
        category: "Data Processing",
        items: ["SQLAlchemy ORM", "Rich Terminal Formatting"]
      }
    ],

    screenshots: [
      {
        url: "/chronicle_paragraph.png",
        caption: "Chronicle tagline and core value proposition",
        platform: "web"
      },
      {
        url: "/chronicle_quit.png",
        caption: "Chronicle session completion screen",
        platform: "web"
      }
    ],

    challenges: [
      {
        title: "Cross-Platform Session Recording",
        description: "Implemented universal session recording using Unix `script` command to capture full terminal transcripts across different AI tools while maintaining compatibility with macOS, Linux, and FreeBSD systems."
      },
      {
        title: "MCP Server Architecture",
        description: "Built comprehensive MCP server with 21 tools enabling AI assistants to perform full CRUD operations on sessions, milestones, and next steps, creating a two-way conversation between humans and AI tools."
      },
      {
        title: "Performance with Large Datasets",
        description: "Designed lazy summarization and intelligent caching system to handle thousands of sessions and commits while maintaining instant search performance across massive development histories."
      }
    ],

    outcomes: [
      "Successfully deployed with 25 passing tests covering all core functionality",
      "Implemented complete local-first architecture with zero cloud dependencies",
      "Created database-backed project management system that eliminates manual documentation",
      "Achieved cross-platform compatibility with multiple AI coding assistants",
      "Built comprehensive MCP integration making Chronicle queryable by any MCP-compatible AI tool"
    ]
  },

  {
    slug: "crooked-finger",
    title: "Crooked Finger",
    shortDescription: "A crochet and knitting pattern assistant with AI-powered pattern translation and project management. Features multi-model AI integration with smart routing, conversation history, and a comprehensive pattern library for organizing and tracking crafting projects.",
    description: "Crooked Finger is a full-stack web and iOS application designed to help crochet and knitting enthusiasts translate complex pattern notation, manage their projects, and get AI-powered assistance with their crafting questions.",
    image: "/CFC-white-hand-nobg-cropped.png",
    tags: ["Next.js", "FastAPI", "GraphQL", "AI", "PostgreSQL"],
    liveUrl: "https://crookedfinger.chandlerhardy.com",
    githubUrl: "https://github.com/ChandlerHardy/crooked-finger",
    backgroundColor: "#A47764",
    imageScale: 0.9,

    overview: "Crooked Finger bridges the gap between traditional craft patterns and modern technology. Whether you're working on a complex crochet project or need help understanding knitting abbreviations, this app provides intelligent assistance powered by multiple AI models including Gemini and OpenRouter's free models.",

    features: [
      "Multi-model AI integration with smart routing between Gemini and OpenRouter models",
      "Pattern translation - convert abbreviations to readable instructions",
      "Conversation history with cross-platform sync",
      "Comprehensive pattern library for organizing templates and active projects",
      "Project management with image uploads and notes",
      "User authentication with JWT and Argon2 password hashing",
      "iOS app with feature parity to web application",
      "Multimodal AI support - upload images for pattern help",
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 15", "TypeScript", "Tailwind CSS", "Apollo GraphQL Client"]
      },
      {
        category: "Backend",
        items: ["FastAPI", "Strawberry GraphQL", "PostgreSQL", "Docker"]
      },
      {
        category: "AI Integration",
        items: ["Google Gemini API", "OpenRouter API", "Multi-model smart routing"]
      },
      {
        category: "Mobile",
        items: ["SwiftUI", "iOS Native", "Custom GraphQL Client"]
      },
      {
        category: "Deployment",
        items: ["Vercel (Frontend)", "Oracle Cloud Infrastructure (Backend)", "Nginx + Let's Encrypt SSL"]
      }
    ],

    screenshots: [
      {
        url: "/projects/crooked-finger/web-chat.png",
        caption: "AI-powered chat interface with pattern translation",
        platform: "web"
      },
      {
        url: "/projects/crooked-finger/web-library.png",
        caption: "Pattern library for organizing projects",
        platform: "web"
      },
      {
        url: "/projects/crooked-finger/ios-chat.png",
        caption: "iOS chat interface with model selection",
        platform: "ios"
      },
      {
        url: "/projects/crooked-finger/ios-projects.png",
        caption: "iOS project management view",
        platform: "ios"
      }
    ],

    challenges: [
      {
        title: "Multi-Model AI Routing",
        description: "Implemented intelligent routing between multiple AI providers (Gemini for quality, OpenRouter for unlimited free usage) with configurable fallback order and real-time usage tracking."
      },
      {
        title: "Cross-Platform Synchronization",
        description: "Built a GraphQL backend that seamlessly syncs conversations, projects, and patterns between web and iOS applications with real-time updates."
      },
      {
        title: "Pattern Complexity",
        description: "Designed AI prompts specifically for craft pattern understanding, enabling accurate translation of complex crochet and knitting notation."
      }
    ],

    outcomes: [
      "Deployed full-stack application with web and iOS clients",
      "Achieved feature parity between web and mobile platforms",
      "Successfully integrated multiple AI providers with smart routing",
      "Built robust authentication system with JWT and secure password hashing",
      "Implemented comprehensive project and pattern management system"
    ]
  },

  {
    slug: "crypto-portfolio-analyzer",
    title: "Crypto Portfolio Analyzer",
    shortDescription: "A full-stack cryptocurrency portfolio tracking and analysis application with real-time portfolio management, AI-powered investment advice using GitHub's Llama 3.1 model, user authentication, and a customizable dashboard with glassmorphism UI effects.",
    description: "CryptAssist is a comprehensive cryptocurrency portfolio management platform that combines real-time tracking with AI-powered investment insights to help users make informed decisions about their crypto investments.",
    image: "/cryptassist-transparent-bg-white.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "AI", "Crypto"],
    liveUrl: "https://cryptassist.chandlerhardy.com",
    githubUrl: "https://github.com/ChandlerHardy/crypto-assistant",
    backgroundColor: "linear-gradient(135deg, #1f2937 0%, #1e3a8a 100%)",
    imageScale: 0.9,
    detailPageImageScale: 1.0,

    overview: "CryptAssist provides cryptocurrency investors with powerful tools to track their portfolios in real-time, analyze performance, and receive AI-powered investment advice. The application features a beautiful glassmorphism UI and integrates with multiple cryptocurrency APIs for accurate, up-to-date pricing.",

    features: [
      "Real-time cryptocurrency portfolio tracking",
      "AI-powered investment advice using Llama 3.1",
      "Interactive dashboard with glassmorphism design",
      "User authentication and secure data storage",
      "Multi-currency support",
      "Historical performance analytics",
      "Price alerts and notifications"
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
      },
      {
        category: "Backend",
        items: ["FastAPI", "PostgreSQL", "Redis", "Docker"]
      },
      {
        category: "AI",
        items: ["Llama 3.1 (via GitHub Models)"]
      },
      {
        category: "Infrastructure",
        items: ["Oracle Cloud Infrastructure", "Nginx", "Let's Encrypt SSL"]
      }
    ]
  },

  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    shortDescription: "Mobile-first fitness app with workout tracking, progress analytics, and social features for motivation.",
    description: "A comprehensive fitness tracking application designed for mobile users to log workouts, track progress, and stay motivated through social features.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Charts", "Mobile"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
