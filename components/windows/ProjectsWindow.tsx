"use client";

import { projects } from "@/data/projects";

interface ProjectsWindowProps {
  onOpenProject: (slug: string) => void;
}

const PROJECT_EMOJIS: Record<string, string> = {
  "crooked-finger": "🧶",
  "elucidate-chess": "♟️",
  greenline: "🌿",
  ralph: "🤖",
};

const PROJECT_COLORS: Record<string, string> = {
  "crooked-finger": "#A47764",
  "elucidate-chess": "#2D4A3E",
  greenline: "#2A5C3F",
  ralph: "#1A1A2E",
};

export default function ProjectsWindow({ onOpenProject }: ProjectsWindowProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: 8,
        padding: 16,
      }}
    >
      {projects.map((project) => (
        <div
          key={project.slug}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            padding: 12,
            cursor: "pointer",
            borderRadius: 2,
          }}
          onDoubleClick={() => onOpenProject(project.slug)}
          onClick={() => {
            if ("ontouchstart" in window) {
              onOpenProject(project.slug);
            }
          }}
          title={project.shortDescription}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: PROJECT_COLORS[project.slug] || "#808080",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            {PROJECT_EMOJIS[project.slug] || "📁"}
          </div>
          <span
            style={{
              fontSize: 10,
              textAlign: "center",
              lineHeight: 1.3,
              wordBreak: "break-word",
              color: "#000",
            }}
          >
            {project.title}
          </span>
        </div>
      ))}
    </div>
  );
}
