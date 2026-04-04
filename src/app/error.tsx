"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0000AA",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        color: "white",
        padding: 40,
      }}
    >
      <div style={{ maxWidth: 650, fontSize: 14, lineHeight: 1.8 }}>
        <div
          style={{
            background: "#aaa",
            color: "#0000AA",
            display: "inline-block",
            padding: "2px 8px",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          chandlerOS
        </div>

        <p>A fatal exception 0xERR0R has occurred at 0028:C0DEFA1L</p>
        <p>in PORTFOLIO.EXE</p>

        <br />

        <p>The current application has performed an illegal operation</p>
        <p>and will be shut down.</p>

        <br />

        <p>UNEXPECTED_RUNTIME_EXCEPTION</p>
        <p>{error.digest ? `Error reference: ${error.digest}` : "STACK_TRACE_UNAVAILABLE"}</p>

        <br />

        <p>If this problem persists, contact hardych04@gmail.com</p>
        <p>or visit github.com/ChandlerHardy for a patch.</p>

        <br />

        <button
          onClick={reset}
          style={{
            background: "#aaa",
            color: "#0000AA",
            border: "none",
            padding: "4px 16px",
            fontFamily: "'Courier New', monospace",
            fontSize: 14,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Press to reboot
        </button>
      </div>
    </div>
  );
}
