import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#3a6ea5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Trebuchet MS', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: 11,
      }}
    >
      <div
        style={{
          background: "#ece9d8",
          border: "1px solid #0054e3",
          borderRadius: "8px 8px 0 0",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.35)",
          width: 420,
          maxWidth: "90vw",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 30,
            background:
              "linear-gradient(180deg, #0997ff 0%, #0053ee 8%, #0050ee 18%, #196aff 28%, #0041d2 48%, #0048e0 58%, #0046d4 68%, #0050e8 78%, #1562ea 88%, #3c8cf6 100%)",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            borderRadius: "8px 8px 0 0",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 16 }}>⚠️</span>
          <span
            style={{
              color: "white",
              fontSize: 13,
              fontWeight: "bold",
              flex: 1,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
            }}
          >
            chandlerOS — Error
          </span>
          <Link
            href="/"
            style={{
              width: 21,
              height: 21,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: "bold",
              color: "#fff",
              background:
                "linear-gradient(180deg, #e08356 0%, #c6492c 50%, #b83018 50%, #d15735 100%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
              textDecoration: "none",
            }}
          >
            ×
          </Link>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ fontSize: 32, flexShrink: 0 }}>❌</span>
          <div>
            <p style={{ margin: "0 0 12px", fontWeight: "bold", fontSize: 12 }}>
              404 — File Not Found
            </p>
            <p style={{ margin: "0 0 8px" }}>
              The page you requested does not exist on this system.
            </p>
            <p style={{ margin: 0, color: "#555" }}>
              chandlerOS cannot locate the specified path. It may have been moved, deleted, or never
              existed.
            </p>
          </div>
        </div>

        {/* Button bar */}
        <div
          style={{
            padding: "12px 24px",
            display: "flex",
            justifyContent: "center",
            gap: 8,
            borderTop: "1px solid #d6d2c2",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "4px 24px",
              background: "#ece9d8",
              border: "2px solid #003c74",
              borderRadius: 3,
              fontSize: 11,
              cursor: "pointer",
              textDecoration: "none",
              color: "#000",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
}
