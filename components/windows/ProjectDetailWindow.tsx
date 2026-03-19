"use client";

import { getProjectBySlug } from "@/data/projects";

interface ProjectDetailWindowProps {
  slug: string;
  onBack: () => void;
}

export default function ProjectDetailWindow({ slug, onBack }: ProjectDetailWindowProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div>
        <p>Project not found.</p>
        <button
          onClick={onBack}
          style={{
            marginTop: 8,
            background: "#c0c0c0",
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            padding: "4px 16px",
            cursor: "pointer",
            fontSize: 11,
          }}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'MS Sans Serif', Tahoma, sans-serif", fontSize: 12 }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: "#c0c0c0",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          padding: "4px 16px",
          cursor: "pointer",
          fontSize: 11,
          marginBottom: 16,
        }}
      >
        ← Back to Projects
      </button>

      {/* Title */}
      <h2 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8, color: "#000" }}>
        {project.title}
      </h2>
      <p style={{ color: "#444", marginBottom: 16, lineHeight: 1.5 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
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

      {/* Links */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              padding: "4px 12px",
              cursor: "pointer",
              fontSize: 11,
              textDecoration: "none",
              color: "#000",
            }}
          >
            🌐 Live Site
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#c0c0c0",
            border: "2px solid",
            borderColor: "#ffffff #808080 #808080 #ffffff",
            padding: "4px 12px",
            cursor: "pointer",
            fontSize: 11,
            textDecoration: "none",
            color: "#000",
          }}
        >
          📂 Source Code
        </a>
      </div>

      {/* Overview */}
      {project.overview && (
        <Section title="Overview">
          <p style={{ lineHeight: 1.6, color: "#222" }}>{project.overview}</p>
        </Section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <Section title="Key Features">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {project.features.map((f, i) => (
              <li key={i} style={{ marginBottom: 4, lineHeight: 1.5, color: "#222" }}>
                {f}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <Section title="Tech Stack">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
            {project.techStack.map((cat, i) => (
              <div key={i}>
                <strong style={{ fontSize: 11, color: "#000080" }}>{cat.category}</strong>
                <ul style={{ margin: "4px 0 0", paddingLeft: 16 }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 11, color: "#333", marginBottom: 2 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <Section title="Challenges & Solutions">
          {project.challenges.map((c, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <strong style={{ color: "#000" }}>{c.title}</strong>
              <p style={{ margin: "4px 0 0", lineHeight: 1.5, color: "#333" }}>{c.description}</p>
            </div>
          ))}
        </Section>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <Section title="Outcomes">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {project.outcomes.map((o, i) => (
              <li key={i} style={{ marginBottom: 4, lineHeight: 1.5, color: "#222" }}>
                {o}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          background: "#c0c0c0",
          padding: "4px 8px",
          marginBottom: 8,
          borderBottom: "1px solid #808080",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
