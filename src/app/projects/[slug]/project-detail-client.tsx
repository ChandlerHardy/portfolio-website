"use client";

import { useRouter } from "next/navigation";
import type { Project } from "../../../data/projects";
import "../../../../components/win95/win95.css";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <div
      style={{
        background: "#008080",
        minHeight: "100vh",
        fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
        fontSize: 12,
      }}
    >
      {/* Full-screen window */}
      <div
        style={{
          background: "#c0c0c0",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 28,
            background: "linear-gradient(90deg, #000080, #1084d0)",
            display: "flex",
            alignItems: "center",
            padding: "0 6px",
            gap: 6,
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 16 }}>📁</span>
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
            }}
          >
            {project.title} — chandlerOS
          </span>
          <button
            onClick={() => router.push("/")}
            style={{
              width: 20,
              height: 18,
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>

        {/* Toolbar */}
        <div
          style={{
            height: 28,
            background: "#c0c0c0",
            borderBottom: "1px solid #808080",
            display: "flex",
            alignItems: "center",
            padding: "0 6px",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => router.push("/")}
            style={{
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              padding: "2px 12px",
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            ← Back to Desktop
          </button>
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#c0c0c0",
                border: "2px solid",
                borderColor: "#ffffff #808080 #808080 #ffffff",
                padding: "2px 12px",
                cursor: "pointer",
                fontSize: 11,
                textDecoration: "none",
                color: "#000",
              }}
            >
              🌐 Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#c0c0c0",
                border: "2px solid",
                borderColor: "#ffffff #808080 #808080 #ffffff",
                padding: "2px 12px",
                cursor: "pointer",
                fontSize: 11,
                textDecoration: "none",
                color: "#000",
              }}
            >
              📂 Source
            </a>
          )}
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            background: "white",
            margin: 4,
            border: "1px solid",
            borderColor: "#808080 #ffffff #ffffff #808080",
            overflow: "auto",
            padding: 24,
          }}
        >
          <h1
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 8,
              color: "#000",
            }}
          >
            {project.title}
          </h1>
          <p style={{ color: "#444", marginBottom: 20, lineHeight: 1.6, maxWidth: 700 }}>
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              marginBottom: 24,
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#c0c0c0",
                  border: "1px solid #808080",
                  padding: "2px 8px",
                  fontSize: 10,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          {project.overview && (
            <DetailSection title="Overview">
              <p style={{ lineHeight: 1.7, color: "#222", maxWidth: 700 }}>
                {project.overview}
              </p>
            </DetailSection>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <DetailSection title="Key Features">
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 6,
                      lineHeight: 1.5,
                      color: "#222",
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <DetailSection title="Tech Stack">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: 16,
                }}
              >
                {project.techStack.map((cat, i) => (
                  <div key={i}>
                    <strong style={{ fontSize: 12, color: "#000080" }}>
                      {cat.category}
                    </strong>
                    <ul style={{ margin: "4px 0 0", paddingLeft: 18 }}>
                      {cat.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: 11,
                            color: "#333",
                            marginBottom: 2,
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <DetailSection title="Challenges & Solutions">
              {project.challenges.map((c, i) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <strong style={{ color: "#000" }}>{c.title}</strong>
                  <p
                    style={{
                      margin: "4px 0 0",
                      lineHeight: 1.6,
                      color: "#333",
                      maxWidth: 700,
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              ))}
            </DetailSection>
          )}

          {/* Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <DetailSection title="Outcomes">
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                {project.outcomes.map((o, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 6,
                      lineHeight: 1.5,
                      color: "#222",
                    }}
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}
        </div>

        {/* Status bar */}
        <div
          style={{
            height: 24,
            borderTop: "1px solid #ffffff",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            fontSize: 10,
            flexShrink: 0,
          }}
        >
          {project.title} — {project.tags.length} technologies
        </div>
      </div>
    </div>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          background: "#c0c0c0",
          padding: "6px 10px",
          marginBottom: 10,
          borderBottom: "1px solid #808080",
          fontWeight: "bold",
          fontSize: 13,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
