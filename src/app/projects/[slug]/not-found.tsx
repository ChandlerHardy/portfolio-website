import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        background: "#008080",
        minHeight: "100vh",
        fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#c0c0c0",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          width: 380,
          boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
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
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 12,
              flex: 1,
            }}
          >
            Project Not Found
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px", display: "flex", gap: 16 }}>
          <span style={{ fontSize: 32 }}>⚠️</span>
          <div>
            <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>
              404 — Project not found
            </p>
            <p style={{ margin: 0, lineHeight: 1.5, color: "#333" }}>
              The project you are looking for does not exist or has been moved.
            </p>
          </div>
        </div>

        {/* Button bar */}
        <div
          style={{
            padding: "8px 24px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/"
            style={{
              background: "#c0c0c0",
              border: "2px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              padding: "4px 32px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: "bold",
              textDecoration: "none",
              color: "#000",
            }}
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
}
