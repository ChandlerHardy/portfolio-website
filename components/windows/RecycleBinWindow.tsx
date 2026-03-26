"use client";

const deletedFiles = [
  { name: "generic-portfolio-template.zip", size: "2.4 MB", date: "03/18/2026", icon: "📄" },
  { name: "floating-particles.js", size: "847 bytes", date: "03/18/2026", icon: "📄" },
  { name: "magnetic-hover-effect.tsx", size: "1.2 KB", date: "03/18/2026", icon: "📄" },
  { name: "definitely-not-a-rickroll.mp4", size: "3.7 MB", date: "03/20/2026", icon: "🎬" },
];

export default function RecycleBinWindow() {
  const handleDoubleClick = (name: string) => {
    if (name === "definitely-not-a-rickroll.mp4") {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  };

  return (
    <div style={{ fontFamily: "'Trebuchet MS', Tahoma, sans-serif", fontSize: 11 }}>
      {/* Column headers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "24px 1fr 80px 100px",
          gap: 4,
          padding: "4px 8px",
          background: "#ece9d8",
          borderBottom: "1px solid #aca899",
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
            cursor: file.name === "definitely-not-a-rickroll.mp4" ? "pointer" : "default",
          }}
          onDoubleClick={() => handleDoubleClick(file.name)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#316ac5";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#000";
          }}
        >
          <span style={{ fontSize: 14 }}>{file.icon}</span>
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
