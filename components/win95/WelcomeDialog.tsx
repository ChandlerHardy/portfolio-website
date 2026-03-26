"use client";

interface WelcomeDialogProps {
  onClose: () => void;
}

export default function WelcomeDialog({ onClose }: WelcomeDialogProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
        }}
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9991,
          background: "#ece9d8",
          border: "1px solid #0054e3",
          borderRadius: "8px 8px 4px 4px",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.35)",
          width: 440,
          maxWidth: "90vw",
          fontFamily: "'Trebuchet MS', Tahoma, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 30,
            background: "linear-gradient(180deg, #0997ff 0%, #0053ee 8%, #0050ee 18%, #196aff 28%, #0041d2 48%, #0048e0 58%, #0046d4 68%, #0050e8 78%, #1562ea 88%, #3c8cf6 100%)",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
            gap: 6,
            borderRadius: "8px 8px 0 0",
          }}
        >
          <span style={{ fontSize: 16 }}>💻</span>
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 13,
              flex: 1,
              textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to chandlerOS
          </span>
          <button
            onClick={onClose}
            style={{
              width: 21,
              height: 21,
              background: "linear-gradient(180deg, #e08356 0%, #c6492c 50%, #b83018 50%, #d15735 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textShadow: "1px 1px 1px rgba(0,0,0,0.3)",
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "18px 22px", fontSize: 12, lineHeight: 1.7 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0 }}>👋</span>
            <div>
              <p style={{ margin: "0 0 10px", fontWeight: "bold", fontSize: 13 }}>
                Hey, I&apos;m Chandler Hardy.
              </p>
              <p style={{ margin: "0 0 10px", color: "#333" }}>
                Full-stack developer at <strong>Performance Beef</strong> —
                4,000+ users, 40% of the US cattle market.
              </p>
              <p style={{ margin: "0 0 10px", color: "#333" }}>
                Double-click the desktop icons to explore my projects, or use the <strong>start</strong> menu.
              </p>
              <p style={{ margin: 0, color: "#666", fontSize: 11 }}>
                Tip: Windows are draggable and resizable.
              </p>
            </div>
          </div>

          {/* OK Button */}
          <div style={{ textAlign: "right", marginTop: 16 }}>
            <button
              onClick={onClose}
              style={{
                background: "linear-gradient(180deg, #fff 0%, #ece9d8 100%)",
                border: "1px solid #aca899",
                borderRadius: 3,
                padding: "4px 32px",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
