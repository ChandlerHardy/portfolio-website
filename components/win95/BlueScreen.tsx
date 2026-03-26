"use client";

import { useEffect, useState } from "react";

interface BlueScreenProps {
  onReboot: () => void;
}

export default function BlueScreen({ onReboot }: BlueScreenProps) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timer);
          setTimeout(onReboot, 500);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onReboot]);

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

        <p>A fatal exception 0xDEVHIRE has occurred at 0028:C001C0DE</p>
        <p>in PORTFOLIO.EXE</p>

        <br />

        <p>The current application has performed an illegal operation</p>
        <p>and will be shut down.</p>

        <br />

        <p>DEVELOPER_NOT_HIRED_YET</p>
        <p>RESUME_IGNORED_EXCEPTION</p>
        <p>TALENT_OVERFLOW_ERROR</p>

        <br />

        <p>If this problem persists, contact hardych04@gmail.com</p>
        <p>or visit github.com/ChandlerHardy for a patch.</p>

        <br />

        <p style={{ color: "#ccc" }}>
          System will reboot in {countdown} second{countdown !== 1 ? "s" : ""}...
        </p>

        <br />

        <p>Press any key to reboot immediately.</p>
      </div>
    </div>
  );
}
