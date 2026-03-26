"use client";

export default function ResumeWindow() {
  const handleDownload = () => {
    window.open("/Chandler_Hardy_Resume2025.pdf", "_blank");
  };

  return (
    <div style={{ fontFamily: "'Trebuchet MS', Tahoma, sans-serif", color: "#000", padding: 20 }}>
      {/* Download bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <button
          onClick={handleDownload}
          style={{
            background: "linear-gradient(180deg, #fff 0%, #ece9d8 100%)",
            border: "1px solid #aca899",
            borderRadius: 3,
            padding: "5px 14px",
            cursor: "pointer",
            fontSize: 11,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          💾 Download PDF
        </button>
      </div>

      {/* Resume content */}
      <h1 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: "bold" }}>Chandler Hardy</h1>
      <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: "bold", color: "#003c97" }}>
        Full Stack Software Engineer
      </p>
      <p style={{ margin: "0 0 12px", fontSize: 10, color: "#666" }}>
        Alabama, USA &bull; hardych04@gmail.com &bull; github.com/ChandlerHardy &bull; chandlerhardy.com
      </p>

      <hr style={{ border: "none", borderTop: "1px solid #d6d2c2", margin: "12px 0" }} />

      <h2 style={{ margin: "0 0 6px", fontSize: 14, fontWeight: "bold", color: "#003c97" }}>Summary</h2>
      <p style={{ margin: "0 0 12px", fontSize: 11, lineHeight: 1.6 }}>
        Full-stack software engineer building data platforms at national scale (40% US market share)
        while independently shipping deployed applications with AI integration. Strongest with
        TypeScript, Python, React/Next.js, and FastAPI.
      </p>

      <hr style={{ border: "none", borderTop: "1px solid #d6d2c2", margin: "12px 0" }} />

      <h2 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: "bold", color: "#003c97" }}>Experience</h2>

      <h3 style={{ margin: "0 0 2px", fontSize: 12, fontWeight: "bold" }}>Software Engineer</h3>
      <p style={{ margin: "0 0 8px", fontSize: 11, color: "#555" }}>
        Performance Livestock Analytics &bull; Feb 2024 – Present
      </p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 18, fontSize: 11, lineHeight: 1.7 }}>
        <li>Ship full-stack features on a platform used by 4,000+ producers managing 40% of US cattle — 50+ MRs merged across PHP/Vue.js frontend and Go/MongoDB backend</li>
        <li>Led a team of three (self + two interns) to build the yard sheet dashboard system from scratch in Vue.js — none of us had prior Vue experience. Interactive Highcharts visualizations with responsive views that replaced static table reporting</li>
        <li>Delivered customizable navigation bar for 4,000+ users, reducing clicks to key workflows</li>
        <li>Designed mass animal ID creation with CSV import, duplicate detection, and EID/VID validation</li>
        <li>Reworked protocol management from legacy nested schema to flat, extensible structure — removed 10 deprecated files, caught XSS vulnerabilities via adversarial code review</li>
      </ul>

      <h3 style={{ margin: "0 0 2px", fontSize: 12, fontWeight: "bold" }}>Personal Projects</h3>
      <p style={{ margin: "0 0 8px", fontSize: 11, color: "#555" }}>
        Concurrent with full-time role &bull; 2025 – Present
      </p>
      <ul style={{ margin: "0 0 14px", paddingLeft: 18, fontSize: 11, lineHeight: 1.7 }}>
        <li><strong>Chronicle</strong> — Open-source AI session recorder with persistent memory across Claude Code, Gemini CLI, and Qwen. MCP server with 21 tools, 140 tests, AI summarization</li>
        <li><strong>Crooked Finger</strong> — Deployed AI craft pattern translator (web + native iOS) with multi-model routing (Gemini, OpenRouter). SwiftUI iOS app shares GraphQL API with Next.js web app. Self-managed on Oracle Cloud</li>
      </ul>

      <hr style={{ border: "none", borderTop: "1px solid #d6d2c2", margin: "12px 0" }} />

      <h2 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: "bold", color: "#003c97" }}>Technical Skills</h2>
      <div style={{ fontSize: 11, lineHeight: 1.8 }}>
        <p style={{ margin: "0 0 4px" }}><strong>Languages:</strong> TypeScript, JavaScript, Python, PHP, Golang, Swift</p>
        <p style={{ margin: "0 0 4px" }}><strong>Frontend:</strong> React, Next.js 15, Vue.js, Tailwind CSS, Apollo GraphQL</p>
        <p style={{ margin: "0 0 4px" }}><strong>Backend:</strong> FastAPI, Node.js, GraphQL (Strawberry), Go (gorilla/mux)</p>
        <p style={{ margin: "0 0 4px" }}><strong>Database:</strong> PostgreSQL, MongoDB, MySQL, SQLite</p>
        <p style={{ margin: "0 0 4px" }}><strong>AI/ML:</strong> Claude Code, OpenAI, Gemini, MCP, Agentic Workflows, RAG</p>
        <p style={{ margin: 0 }}><strong>Infra:</strong> Docker, Oracle Cloud, Vercel, nginx, Tailscale, n8n, CI/CD</p>
      </div>
    </div>
  );
}
