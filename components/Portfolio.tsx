"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";

const SECTIONS = ["about", "experience", "projects", "skills"] as const;
type Section = (typeof SECTIONS)[number];

const NAV_LABELS: Record<Section, string> = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
};

const PROJECTS = [
  {
    id: "performance-beef",
    name: "Performance Beef (Performance Livestock Analytics)",
    role: "Software Engineer",
    dates: "Feb 2024 – Present",
    description:
      "Full-stack feature work on a livestock data platform used by 4,000+ producers managing 40% of US cattle. Built the yard sheet dashboard system from scratch — replacing static tables with interactive Highcharts visualizations. Also delivered a kill sheet tracking system, mass animal ID creation with CSV import, protocol management refactor that consolidated many API handlers down to 3, and a customizable nav bar.",
    stats: ["51 MRs merged", "4,000+ users", "40% US cattle market"],
    tech: ["Go", "PHP", "MongoDB", "jQuery", "Highcharts"],
    href: null,
    featured: true,
  },
  {
    id: "crooked-finger",
    name: "Crooked Finger",
    role: "Side Project",
    dates: "2025",
    description:
      "AI crochet pattern translator that converts between pattern formats and generates custom patterns from scratch. Routes requests across multiple LLM providers (Gemini, OpenRouter) to optimize for cost and quality. Self-managed deployment: Docker on Oracle Cloud, nginx reverse proxy, Let's Encrypt SSL.",
    stats: ["Deployed", "Multi-LLM routing"],
    tech: ["Next.js", "FastAPI", "GraphQL", "PostgreSQL", "OCI"],
    href: "https://crookedfinger.chandlerhardy.com",
    featured: true,
  },
  {
    id: "elucidate-chess",
    name: "Elucidate Chess",
    role: "Side Project",
    dates: "2025 – Present",
    description:
      "Chess training tool that turns Stockfish engine analysis into plain-language explanations. The engine says +2.3 — Elucidate explains why that matters and what you should learn from the position. Full-stack Turborepo monorepo deployed on self-managed OCI infrastructure.",
    stats: ["In Progress"],
    tech: ["Next.js", "FastAPI", "GraphQL", "PostgreSQL", "Stockfish"],
    href: null,
    featured: true,
  },
  {
    id: "ralph",
    name: "Ralph — Autonomous Build Pipeline",
    role: "Personal Tool",
    dates: "2025",
    description:
      "A build system that takes a product spec, decomposes it into testable user stories, and autonomously implements each one. Used it to ship GreenLine — a complete 28-story lawn care platform — without manual intervention. Orchestrated via Tailscale, n8n, and Discord notifications.",
    stats: ["28 stories shipped", "0 manual interventions"],
    tech: ["Bash", "n8n", "Claude Code", "Tailscale", "OCI"],
    href: null,
    featured: false,
  },
];

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "Python", "PHP", "Go", "Swift"],
  Frontend: [
    "React",
    "Next.js 15",
    "Tailwind CSS",
    "Vue.js",
    "HTMX",
    "Apollo GraphQL",
  ],
  Backend: ["FastAPI", "Node.js", "GraphQL", "REST APIs", "gorilla/mux"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  "AI / ML": [
    "Claude API",
    "OpenAI API",
    "Google Gemini",
    "OpenRouter",
    "MCP",
    "RAG",
  ],
  Infrastructure: [
    "Docker",
    "OCI",
    "Vercel",
    "nginx",
    "Tailscale",
    "n8n",
    "CI/CD",
  ],
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem("ch-theme") as
        | "dark"
        | "light"
        | null;
      if (stored) setTheme(stored);
    } catch (_) {}
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ch-theme", next);
    } catch (_) {}
  }, [theme]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Update cursor glow position via CSS variable to avoid inline style updates
  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.setProperty(
        "background",
        `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(129,140,248,0.07), transparent 80%)`
      );
    }
  }, [cursorPos]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionEls = SECTIONS.map((id) => document.getElementById(id));

    sectionEls.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(SECTIONS[i]);
        },
        { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-bg font-sans text-text-primary">
      {/* Cursor glow — desktop only */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="lg:flex lg:gap-16">
          {/* ── LEFT PANEL ── */}
          <header className="py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-none lg:flex-col lg:justify-between lg:py-20">
            <div className="space-y-8">
              {/* Name + title */}
              <div>
                <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary">
                  Chandler Hardy
                </h1>
                <p className="mt-1 text-sm font-medium text-text-primary">
                  Full-Stack Software Engineer
                </p>
                <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-muted">
                  Building things that work at scale. Self-taught. Alabama.
                </p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1" aria-label="Page navigation">
                {SECTIONS.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollTo(section)}
                    className={`nav-item w-full text-left ${
                      activeSection === section ? "active" : ""
                    }`}
                  >
                    {NAV_LABELS[section]}
                  </button>
                ))}
              </nav>
            </div>

            {/* Socials + theme */}
            <div className="mt-8 flex items-center gap-4 lg:mt-0">
              <a
                href="https://github.com/ChandlerHardy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-200 hover:text-text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/chandler-hardy-80808112b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-200 hover:text-text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hardych04@gmail.com"
                className="text-muted transition-colors duration-200 hover:text-text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>

              <div className="ml-auto">
                <button
                  onClick={toggleTheme}
                  className="text-muted transition-colors duration-200 hover:text-text-primary"
                  aria-label="Toggle theme"
                >
                  {isMounted && theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* ── RIGHT PANEL ── */}
          <main className="pb-32 pt-4 lg:flex-1 lg:py-20">
            {/* ── ABOUT ── */}
            <section id="about" className="mb-24 scroll-mt-20">
              <p className="section-label">01 — About</p>
              <div className="space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  I&apos;m a self-taught full-stack engineer shipping production
                  software since February 2024. My day job is at{" "}
                  <span className="font-medium text-text-primary">
                    Performance Livestock Analytics
                  </span>
                  , where I&apos;ve merged 51 PRs on a platform used by 4,000+
                  cattle producers managing 40% of the US market. The stack is
                  PHP/jQuery on the frontend and Go/MongoDB on the backend — I
                  learned both on the job.
                </p>
                <p>
                  Outside of work, I build AI-integrated products and deploy
                  them on self-managed Oracle Cloud infrastructure. I built{" "}
                  <a
                    href="https://crookedfinger.chandlerhardy.com"
                    className="font-medium text-text-primary transition-colors duration-150 hover:text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Crooked Finger
                  </a>{" "}
                  (a deployed AI crochet assistant), I&apos;m building Elucidate
                  Chess (Stockfish analysis in plain English), and I designed
                  Ralph — an autonomous build pipeline that shipped a complete
                  28-story app without manual intervention.
                </p>
                <p>
                  I&apos;m looking for a remote role where I can build products
                  that matter. Strong preference for teams that ship.
                  TypeScript, Python, Go, React, FastAPI — pick one, I&apos;m
                  comfortable. Ask me about the other ones too.
                </p>
              </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section id="experience" className="mb-24 scroll-mt-20">
              <p className="section-label">02 — Experience</p>

              <div className="space-y-2">
                <div className="experience-card group -mx-5 cursor-default">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-mono text-xs text-muted">
                        Feb 2024 – Present
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold text-text-primary">
                        Software Engineer
                      </h3>
                      <p className="text-sm text-accent">
                        Performance Livestock Analytics
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["51 MRs merged", "4,000+ users", "40% US cattle market"].map(
                      (stat) => (
                        <span key={stat} className="stat-chip">
                          {stat}
                        </span>
                      )
                    )}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>
                        Built yard sheet dashboard from scratch — replaced
                        static table-only reporting with interactive Highcharts
                        visualizations, responsive across mobile and tablet
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>
                        Refactored protocol management from legacy nested schema
                        to flat extensible structure — removed 10 deprecated
                        files, consolidated many API handlers down to 3, maintained
                        iOS backward compatibility
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>
                        Delivered mass animal ID creation system with CSV
                        import, duplicate detection, and EID/VID validation
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>
                        Built kill sheet tracking end-to-end: new Go API schema,
                        MongoDB storage, PHP form UI, and packer export logic
                      </span>
                    </li>
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["Go", "PHP", "MongoDB", "jQuery", "Highcharts"].map(
                      (t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" className="mb-24 scroll-mt-20">
              <p className="section-label">03 — Projects</p>

              <div className="space-y-2">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="project-card group -mx-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="project-title">{project.name}</h3>
                          {project.href && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-muted transition-colors duration-150 hover:text-accent"
                              aria-label={`Visit ${project.name}`}
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <p className="mt-0.5 font-mono text-xs text-muted">
                          {project.dates}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.stats.map((stat) => (
                        <span key={stat} className="stat-chip">
                          {stat}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── SKILLS ── */}
            <section id="skills" className="mb-24 scroll-mt-20">
              <p className="section-label">04 — Skills</p>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(SKILLS).map(([group, skills]) => (
                  <div key={group}>
                    <p className="skill-group-title">{group}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="scroll-mt-20">
              <p className="section-label">05 — Contact</p>
              <h2 className="font-display text-2xl font-bold text-text-primary">
                Let&apos;s work together.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                I&apos;m actively looking for remote roles. If you&apos;re
                building something real and need someone who ships — reach out.
                Response time is fast.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:hardych04@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text))",
                  }}
                >
                  <Mail className="h-4 w-4" />
                  hardych04@gmail.com
                </a>
                <a
                  href="https://github.com/ChandlerHardy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text))",
                  }}
                >
                  <Github className="h-4 w-4" />
                  github.com/ChandlerHardy
                </a>
                <a
                  href="https://linkedin.com/in/chandler-hardy-80808112b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  style={{
                    borderColor: "rgb(var(--color-border))",
                    color: "rgb(var(--color-text))",
                  }}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

              <p className="mt-16 font-mono text-xs text-muted">
                Built with Next.js 15. Deployed on Vercel. Designed by hand.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
