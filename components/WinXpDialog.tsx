import { ReactNode } from "react";

export const tealBg = {
  background: "#008080",
  minHeight: "100vh",
  fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
  fontSize: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const windowFrame = {
  background: "#c0c0c0",
  border: "2px solid",
  borderColor: "#ffffff #808080 #808080 #ffffff",
  width: 380,
  boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
} as const;

export const titleBar = {
  height: 28,
  background: "linear-gradient(90deg, #000080, #1084d0)",
  display: "flex",
  alignItems: "center",
  padding: "0 6px",
  gap: 6,
} as const;

export const titleText = {
  color: "white",
  fontWeight: "bold",
  fontSize: 12,
  flex: 1,
} as const;

const contentArea = {
  padding: "20px 24px",
  display: "flex",
  gap: 16,
} as const;

export const winXpButtonStyle = {
  background: "#c0c0c0",
  border: "2px solid",
  borderColor: "#ffffff #808080 #808080 #ffffff",
  padding: "4px 32px",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: "bold",
  textDecoration: "none",
  color: "#000",
} as const;

export default function WinXpDialog({
  title,
  icon,
  message,
  detail,
  children,
}: {
  title: string;
  icon: string;
  message: string;
  detail: string;
  children: ReactNode;
}) {
  return (
    <div style={tealBg}>
      <div style={windowFrame}>
        <div style={titleBar}>
          <span style={titleText}>{title}</span>
        </div>
        <div style={contentArea}>
          <span style={{ fontSize: 32 }}>{icon}</span>
          <div>
            <p style={{ margin: "0 0 8px", fontWeight: "bold" }}>{message}</p>
            <p style={{ margin: 0, lineHeight: 1.5, color: "#333" }}>
              {detail}
            </p>
          </div>
        </div>
        <div
          style={{
            padding: "8px 24px 16px",
            display: "flex",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
