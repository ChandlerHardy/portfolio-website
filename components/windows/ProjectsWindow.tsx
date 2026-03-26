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
    <div style={{ padding: 8 }}>
      {projects.map((project, i) => (
        <div
          key={project.slug}
          style={{
            display: "flex",
            gap: 12,
            padding: 10,
            marginBottom: i < projects.length - 1 ? 2 : 0,
            cursor: "pointer",
            borderBottom: i < projects.length - 1 ? "1px solid #e0e0e0" : undefined,
          }}
          onDoubleClick={() => onOpenProject(project.slug)}
          onClick={() => {
            if ("ontouchstart" in window) {
              onOpenProject(project.slug);
            }
          }}
        >
          {/* Project icon with colored bg */}
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
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            {PROJECT_EMOJIS[project.slug] || "📁"}
          </div>

          {/* Details */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "#000",
                marginBottom: 3,
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#444",
                lineHeight: 1.4,
                marginBottom: 6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.shortDescription}
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#e8e8e8",
                    border: "1px solid #c0c0c0",
                    padding: "1px 5px",
                    fontSize: 9,
                    color: "#555",
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span style={{ fontSize: 9, color: "#888" }}>
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Status indicators */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
              fontSize: 9,
              color: "#888",
            }}
          >
            {project.liveUrl && (
              <span
                style={{
                  background: "#c8ffc8",
                  border: "1px solid #00a000",
                  padding: "1px 6px",
                  color: "#006000",
                  fontSize: 9,
                }}
              >
                ● Live
              </span>
            )}
            <span style={{ color: "#aaa" }}>
              {project.tags.length} tech
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
