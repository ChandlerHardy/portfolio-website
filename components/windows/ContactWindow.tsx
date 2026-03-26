"use client";

const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "hardych04@gmail.com",
    href: "mailto:hardych04@gmail.com",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/ChandlerHardy",
    href: "https://github.com/ChandlerHardy",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Chandler Hardy",
    href: "https://www.linkedin.com/in/chandler-hardy-80808112b/",
  },
];

export default function ContactWindow() {
  return (
    <div style={{ fontFamily: "'MS Sans Serif', Tahoma, sans-serif" }}>
      <div
        style={{
          padding: "8px 12px",
          background: "#c0c0c0",
          borderBottom: "1px solid #808080",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        📇 Contact Information
      </div>

      <div style={{ padding: 12 }}>
        {contacts.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 8px",
              marginBottom: 4,
              textDecoration: "none",
              color: "#000",
              fontSize: 12,
              border: "1px solid transparent",
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
            <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{c.icon}</span>
            <div>
              <div style={{ fontWeight: "bold", fontSize: 11 }}>{c.label}</div>
              <div style={{ fontSize: 11, color: "inherit" }}>{c.value}</div>
            </div>
          </a>
        ))}

        <div style={{ marginTop: 16, padding: "8px 12px", background: "#ffffcc", border: "1px solid #808080", fontSize: 11, lineHeight: 1.5 }}>
          📍 <strong>Location:</strong> Birmingham, AL<br />
          🕐 <strong>Status:</strong> Looking for remote full-stack roles
        </div>
      </div>
    </div>
  );
}
