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
          background: "#c0c0c0",
          border: "2px solid",
          borderColor: "#ffffff #808080 #808080 #ffffff",
          boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
          width: 420,
          maxWidth: "90vw",
          fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 24,
            background: "linear-gradient(90deg, #000080, #1084d0)",
            display: "flex",
            alignItems: "center",
            padding: "0 6px",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 14 }}>💻</span>
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 11,
              flex: 1,
            }}
          >
            Welcome to chandlerOS
          </span>
          <button
            onClick={onClose}
            style={{
              width: 16,
              height: 14,
              background: "#c0c0c0",
              border: "1px solid",
              borderColor: "#ffffff #808080 #808080 #ffffff",
              cursor: "pointer",
              fontSize: 9,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "16px 20px", fontSize: 12, lineHeight: 1.7 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: 36, flexShrink: 0 }}>👋</span>
            <div>
              <p style={{ margin: "0 0 10px", fontWeight: "bold", fontSize: 13 }}>
                Hey, I&apos;m Chandler Hardy.
              </p>
              <p style={{ margin: "0 0 10px", color: "#333" }}>
                Full-stack developer at <strong>Performance Beef</strong> —
                4,000+ users, 40% of the US cattle market, 51 merged MRs.
              </p>
              <p style={{ margin: "0 0 10px", color: "#333" }}>
                Double-click the desktop icons to explore my projects, skills,
                and background. Or use the <strong>Start</strong> menu.
              </p>
              <p style={{ margin: 0, color: "#666", fontSize: 11 }}>
                💡 Tip: Windows are draggable! Try moving them around.
              </p>
            </div>
          </div>

          {/* OK Button */}
          <div style={{ textAlign: "right", marginTop: 16 }}>
            <button
              onClick={onClose}
              style={{
                background: "#c0c0c0",
                border: "2px solid",
                borderColor: "#ffffff #808080 #808080 #ffffff",
                padding: "4px 32px",
                cursor: "pointer",
                fontSize: 11,
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
