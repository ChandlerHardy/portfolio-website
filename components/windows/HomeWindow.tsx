"use client";

import { projects } from "../../src/data/projects";

interface HomeWindowProps {
  onOpenProject: (slug: string) => void;
  onOpenWindow: (id: string) => void;
}

const FEATURED_SLUGS = ["chronicle", "crooked-finger", "elucidate-chess"];

export default function HomeWindow({ onOpenProject, onOpenWindow }: HomeWindowProps) {
  const featured = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)!);

  return (
    <div style={{ fontFamily: "'Trebuchet MS', Tahoma, sans-serif", color: "#000" }}>
      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #003c97 0%, #0054e3 40%, #3b8cf6 100%)",
          padding: "32px 28px",
          color: "white",
        }}
      >
        <h1 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: "bold" }}>
          chandlerOS
        </h1>
        <p style={{ margin: "0 0 16px", fontSize: 14, opacity: 0.9, lineHeight: 1.5 }}>
          I build things from blank terminals. Full-stack apps, self-hosted
          infrastructure, autonomous build pipelines — shipped and deployed.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenWindow("projects")}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 3,
              padding: "6px 16px",
              color: "white",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Browse Projects
          </button>
          <button
            onClick={() => onOpenWindow("about")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              padding: "6px 16px",
              color: "rgba(255,255,255,0.9)",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            About Me
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <div style={{ padding: "20px 24px" }}>
        <h2 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: "bold", color: "#003c97" }}>
          Featured Projects
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {featured.map((project) => (
            <button
              key={project.slug}
              onClick={() => onOpenProject(project.slug)}
              style={{
                display: "flex",
                gap: 14,
                padding: 14,
                background: "#f5f3ea",
                border: "1px solid #d6d2c2",
                borderRadius: 4,
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#eae7da")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f3ea")}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 4,
                  background: project.backgroundColor || "#003c97",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {project.title[0]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: "bold", fontSize: 13 }}>{project.title}</span>
                  {project.tags.includes("In Progress") && (
                    <span
                      style={{
                        fontSize: 9,
                        background: "#fff3cd",
                        color: "#856404",
                        padding: "1px 6px",
                        borderRadius: 3,
                        fontWeight: "bold",
                      }}
                    >
                      IN PROGRESS
                    </span>
                  )}
                  {project.liveUrl && (
                    <span
                      style={{
                        fontSize: 9,
                        background: "#d4edda",
                        color: "#155724",
                        padding: "1px 6px",
                        borderRadius: 3,
                        fontWeight: "bold",
                      }}
                    >
                      LIVE
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: 11, color: "#555", lineHeight: 1.5 }}>
                  {project.shortDescription}
                </p>
                <div style={{ display: "flex", gap: 4, marginTop: 6, flexWrap: "wrap" }}>
                  {project.tags
                    .filter((t) => t !== "In Progress")
                    .slice(0, 4)
                    .map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 9,
                          background: "#e8e4d9",
                          color: "#666",
                          padding: "1px 5px",
                          borderRadius: 2,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{ marginTop: 20, padding: "14px 16px", background: "#f5f3ea", border: "1px solid #d6d2c2", borderRadius: 4 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 12, fontWeight: "bold", color: "#666" }}>
            Quick Links
          </h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="https://github.com/ChandlerHardy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11, color: "#003c97", textDecoration: "underline", cursor: "pointer" }}
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chandler-hardy-80808112b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11, color: "#003c97", textDecoration: "underline", cursor: "pointer" }}
            >
              💼 LinkedIn
            </a>
            <button
              onClick={() => onOpenWindow("contact")}
              style={{ fontSize: 11, color: "#003c97", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", padding: 0 }}
            >
              ✉️ Contact
            </button>
            <button
              onClick={() => onOpenWindow("terminal")}
              style={{ fontSize: 11, color: "#003c97", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", padding: 0 }}
            >
              💻 Terminal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
