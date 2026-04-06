import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#3a6ea5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "'Trebuchet MS', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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
          <span style={{ fontSize: 16 }}>📁</span>
          <span
            style={{
              color: "white",
              fontSize: 13,
              fontWeight: "bold",
              flex: 1,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
            }}
          >
            chandlerOS — Project Not Found
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
        <div
          style={{
            padding: "20px 24px",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 32, flexShrink: 0 }}>📂</span>
          <div>
            <p
              style={{ margin: "0 0 12px", fontWeight: "bold", fontSize: 12 }}
            >
              Project Not Found
            </p>
            <p style={{ margin: "0 0 8px" }}>
              The requested project does not exist in the portfolio.
            </p>
            <p style={{ margin: 0, color: "#555" }}>
              It may have been removed, renamed, or the URL was entered
              incorrectly. Return to the desktop to browse available projects.
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
              background: "linear-gradient(180deg, #fff 0%, #ece9d8 100%)",
              border: "1px solid #aca899",
              borderRadius: 3,
              fontSize: 11,
              cursor: "pointer",
              textDecoration: "none",
              color: "#000",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontWeight: "bold",
            }}
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  );
}
