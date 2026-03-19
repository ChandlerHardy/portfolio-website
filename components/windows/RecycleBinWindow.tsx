"use client";

const deletedFiles = [
  { name: "generic-portfolio-template.zip", size: "2.4 MB", date: "03/18/2026" },
  { name: "floating-particles.js", size: "847 bytes", date: "03/18/2026" },
  { name: "magnetic-hover-effect.tsx", size: "1.2 KB", date: "03/18/2026" },
];

export default function RecycleBinWindow() {
  return (
    <div style={{ fontFamily: "'MS Sans Serif', Tahoma, sans-serif", fontSize: 11 }}>
      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "24px 1fr 80px 100px",
          gap: 4,
          padding: "4px 8px",
          background: "#c0c0c0",
          borderBottom: "1px solid #808080",
          fontWeight: "bold",
        }}
      >
        <span></span>
        <span>Name</span>
        <span>Size</span>
        <span>Date Deleted</span>
      </div>

      {/* Files */}
      {deletedFiles.map((file, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "24px 1fr 80px 100px",
            gap: 4,
            padding: "3px 8px",
            alignItems: "center",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#000080";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#000";
          }}
        >
          <span style={{ fontSize: 14 }}>📄</span>
          <span style={{ textDecoration: "line-through", opacity: 0.7 }}>
            {file.name}
          </span>
          <span style={{ color: "inherit", opacity: 0.6 }}>{file.size}</span>
          <span style={{ color: "inherit", opacity: 0.6 }}>{file.date}</span>
        </div>
      ))}
    </div>
  );
}
