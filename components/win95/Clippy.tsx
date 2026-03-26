"use client";

import { useState, useEffect, useCallback } from "react";

const CLIPPY_LINES = [
  "It looks like you're hiring a developer.\nWould you like help?",
  "I see you haven't checked out the\nTerminal yet. Try typing 'neofetch'!",
  "Did you know? This entire portfolio\nruns on Next.js and vibes.",
  "Pro tip: Try the Konami code.\n↑↑↓↓←→←→BA",
  "Have you played FlappyDev yet?\nMy high score is 42.",
  "Fun fact: The Recycle Bin has\nsome... interesting files in it.",
  "I noticed you're reading the resume.\nHire this guy, he's great.",
  "Need a full-stack dev? This one\nships 50+ MRs at his day job.",
  "I'm not the real Clippy.\nBut I'm still more helpful.",
];

export default function Clippy() {
  const [visible, setVisible] = useState(false);
  const [line, setLine] = useState(0);
  const [dismissed, setDismissed] = useState(0);

  const showClippy = useCallback(() => {
    setLine(Math.floor(Math.random() * CLIPPY_LINES.length));
    setVisible(true);
  }, []);

  useEffect(() => {
    // First appearance after 15 seconds
    const initial = setTimeout(showClippy, 15000);
    return () => clearTimeout(initial);
  }, [showClippy]);

  useEffect(() => {
    if (!visible && dismissed > 0 && dismissed < 4) {
      // Come back after increasing intervals
      const delay = 30000 + dismissed * 20000;
      const timer = setTimeout(showClippy, delay);
      return () => clearTimeout(timer);
    }
  }, [visible, dismissed, showClippy]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed((d) => d + 1);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 42,
        right: 16,
        zIndex: 9995,
        display: "flex",
        alignItems: "flex-end",
        gap: 4,
        animation: "clippy-bounce 0.4s ease-out",
      }}
    >
      {/* Speech bubble */}
      <div
        style={{
          background: "#FFFDE7",
          border: "1px solid #333",
          borderRadius: 8,
          padding: "10px 14px",
          maxWidth: 220,
          fontSize: 11,
          fontFamily: "'Trebuchet MS', Tahoma, sans-serif",
          lineHeight: 1.5,
          boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        <div style={{ whiteSpace: "pre-wrap" }}>{CLIPPY_LINES[line]}</div>
        <div style={{ display: "flex", gap: 6, marginTop: 8, justifyContent: "flex-end" }}>
          <button
            onClick={handleDismiss}
            style={{
              background: "linear-gradient(180deg, #fff 0%, #ece9d8 100%)",
              border: "1px solid #aca899",
              borderRadius: 3,
              padding: "2px 12px",
              fontSize: 10,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {dismissed >= 3 ? "Go away!" : "Thanks"}
          </button>
        </div>
        {/* Arrow pointing to clippy */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: -8,
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderLeft: "8px solid #333",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 13,
            right: -6,
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: "7px solid #FFFDE7",
          }}
        />
      </div>

      {/* Clippy character */}
      <div
        style={{
          fontSize: 48,
          lineHeight: 1,
          cursor: "pointer",
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
          userSelect: "none",
        }}
        onClick={handleDismiss}
        title="Click to dismiss"
      >
        📎
      </div>

      <style>{`
        @keyframes clippy-bounce {
          0% { transform: translateY(20px); opacity: 0; }
          60% { transform: translateY(-4px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
