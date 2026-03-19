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
    slug: "crooked-finger",
    title: "Crooked Finger",
    shortDescription: "AI-powered crochet pattern translator that converts between pattern formats and generates custom patterns — routes requests across multiple LLM providers to optimize for cost and quality.",
    description: "Crooked Finger is a deployed full-stack application that helps crochet and knitting enthusiasts translate complex pattern notation, manage their projects, and get AI-powered assistance. End-to-end self-managed deployment on Oracle Cloud with Docker, nginx, and Let's Encrypt SSL.",
    image: "/projects/crooked-finger/hero.png",
    tags: ["Next.js", "FastAPI", "GraphQL", "PostgreSQL", "Docker", "OCI"],
    liveUrl: "https://crookedfinger.chandlerhardy.com",
    githubUrl: "https://github.com/ChandlerHardy/crooked-finger",
    backgroundColor: "#A47764",

    overview: "Crooked Finger bridges the gap between traditional craft patterns and modern technology. It converts between crochet pattern formats, generates custom patterns on demand, and routes AI requests across Gemini and OpenRouter to balance quality and cost. Fully self-hosted on Oracle Cloud with automated SSL and a GraphQL API.",

    features: [
      "AI-powered pattern translation — converts abbreviations to plain-language instructions",
      "Custom pattern generation from natural language descriptions",
      "Multi-model AI routing between Gemini and OpenRouter for cost/quality optimization",
      "Conversation history with cross-platform sync",
      "Comprehensive pattern library for organizing templates and active projects",
      "Project management with image uploads and notes",
      "User authentication with JWT and Argon2 password hashing",
      "Multimodal AI support — upload images for pattern help"
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
        category: "Deployment",
        items: ["Oracle Cloud Infrastructure", "Docker Compose", "Nginx reverse proxy", "Let's Encrypt SSL"]
      }
    ],

    challenges: [
      {
        title: "Multi-Model AI Routing",
        description: "Implemented intelligent routing between multiple AI providers — Gemini for quality, OpenRouter for cost efficiency — with configurable fallback order and real-time usage tracking to minimize API costs without degrading response quality."
      },
      {
        title: "Self-Managed Infrastructure",
        description: "Handled end-to-end deployment on Oracle Cloud: provisioned the server, configured Docker Compose for the FastAPI backend, set up nginx as a reverse proxy, and automated SSL certificate renewal with Let's Encrypt."
      },
      {
        title: "Pattern Complexity",
        description: "Designed AI prompts specifically for craft pattern understanding, enabling accurate translation of complex crochet and knitting notation across multiple international format conventions."
      }
    ],

    outcomes: [
      "Deployed and live at crookedfinger.chandlerhardy.com with real users",
      "Achieved full-stack end-to-end ownership: frontend, backend, infrastructure, and AI integration",
      "Successfully integrated multiple AI providers with smart routing to optimize cost and quality",
      "Built robust authentication system with JWT and secure password hashing",
      "Implemented comprehensive project and pattern management system"
    ]
  },

  {
    slug: "elucidate-chess",
    title: "Elucidate Chess",
    shortDescription: "Chess training tool that turns Stockfish engine analysis into plain-language explanations of why moves are good or bad — solving the gap between 'the engine says +2.3' and 'here's what you should learn from this position'.",
    description: "Elucidate Chess is a full-stack chess trainer that connects Stockfish engine output to natural language coaching. Built as a Turborepo monorepo on self-managed OCI infrastructure with Docker, nginx, and automated SSL.",
    image: "/projects/elucidate-chess/hero.png",
    tags: ["Next.js", "FastAPI", "GraphQL", "PostgreSQL", "Stockfish", "Docker"],
    githubUrl: "https://github.com/ChandlerHardy/elucidate-chess",
    backgroundColor: "#2D4A3E",

    overview: "Most chess engines tell you what the best move is — not why. Elucidate Chess takes Stockfish's numerical evaluations and translates them into plain-language explanations, helping players understand the strategic and tactical concepts behind each position rather than just memorizing engine lines.",

    features: [
      "Stockfish integration for deep position analysis",
      "AI-powered plain-language explanations of engine recommendations",
      "Position analysis with concept tagging (tactics, strategy, endgame)",
      "Game review mode — analyze full games move by move",
      "Interactive board for exploring lines and variations",
      "User accounts with game history and progress tracking",
      "GraphQL API for flexible data querying"
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
        category: "Chess Engine",
        items: ["Stockfish", "python-chess", "UCI protocol integration"]
      },
      {
        category: "AI Integration",
        items: ["LLM-powered move explanation", "Concept extraction from engine analysis"]
      },
      {
        category: "Infrastructure",
        items: ["Oracle Cloud Infrastructure", "Turborepo monorepo", "Docker Compose", "Nginx + Let's Encrypt"]
      }
    ],

    challenges: [
      {
        title: "Bridging Engine Output and Human Understanding",
        description: "Stockfish outputs centipawn scores and best moves — not explanations. Built a pipeline that takes the engine's top lines, identifies the key tactical or strategic themes, and generates coaching-quality explanations using an LLM."
      },
      {
        title: "Turborepo Monorepo Architecture",
        description: "Structured the project as a Turborepo monorepo with shared packages for types, utilities, and UI components, enabling code reuse between the Next.js frontend and FastAPI backend while keeping deployments independent."
      },
      {
        title: "Performance at Analysis Depth",
        description: "Balancing Stockfish analysis depth against response time — deep analysis is more accurate but slower. Implemented async queuing so users get immediate feedback while deeper analysis runs in the background."
      }
    ],

    outcomes: [
      "Built full-stack application addressing a real gap in chess training tooling",
      "Demonstrated ability to integrate a complex native engine (Stockfish) into a modern web stack",
      "Established Turborepo monorepo pattern for future full-stack projects",
      "Self-managed production infrastructure on Oracle Cloud from scratch"
    ]
  },

  {
    slug: "greenline",
    title: "GreenLine",
    shortDescription: "Complete full-stack lawn care platform built autonomously using the Ralph pipeline — 28 user stories shipped without manual intervention.",
    description: "GreenLine is a full-stack lawn care business platform built end-to-end by the Ralph autonomous build system. It demonstrates what's possible when a well-designed AI pipeline handles the full development lifecycle.",
    image: "/projects/greenline/hero.png",
    tags: ["Next.js", "FastAPI", "GraphQL", "PostgreSQL", "Docker", "Autonomous Build"],
    githubUrl: "https://github.com/ChandlerHardy/greenline",
    backgroundColor: "#2A5C3F",

    overview: "GreenLine is a complete lawn care business platform — customer management, job scheduling, invoicing, and route optimization — built entirely by Ralph, an autonomous AI build pipeline. The project served as the proof-of-concept that validated Ralph's ability to ship a full product from spec to deployed application without manual coding.",

    features: [
      "Customer management with service history and contact tracking",
      "Job scheduling with calendar views and technician assignment",
      "Invoicing and payment tracking",
      "Route optimization for service crews",
      "Client portal for viewing upcoming appointments and invoices",
      "Admin dashboard with business analytics",
      "User authentication and role-based access control",
      "Mobile-responsive design for field use"
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
        category: "Build System",
        items: ["Ralph autonomous pipeline", "Claude Code", "n8n orchestration", "Bash"]
      },
      {
        category: "Infrastructure",
        items: ["Oracle Cloud Infrastructure", "Docker Compose", "Nginx reverse proxy"]
      }
    ],

    challenges: [
      {
        title: "Autonomous Story Decomposition",
        description: "Ralph had to decompose a high-level product spec into 28 individually testable user stories, implement each one, verify acceptance criteria, and move to the next — all without human intervention or manual code review."
      },
      {
        title: "Cross-Machine Orchestration",
        description: "The build pipeline ran across multiple machines connected via Tailscale mesh network, with n8n monitoring workflows, Discord notifications, and remote SSH execution coordinated from an OCI server."
      },
      {
        title: "Maintaining Coherence Across 28 Stories",
        description: "Ensuring that code written for story 28 remained consistent with architectural decisions made in story 1 — without a human reviewing every PR — required careful state management in the pipeline."
      }
    ],

    outcomes: [
      "Shipped a complete, functional lawn care platform across 28 user stories with zero manual coding",
      "Validated the Ralph autonomous build pipeline as capable of end-to-end product development",
      "Demonstrated that a well-structured spec + autonomous pipeline can replace weeks of manual development",
      "Produced production-quality code that follows consistent patterns throughout the codebase"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
