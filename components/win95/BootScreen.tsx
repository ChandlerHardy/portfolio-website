"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BootScreenProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  { text: "chandlerOS BIOS v1.0", delay: 0 },
  { text: "CPU: OK", delay: 300 },
  { text: "Memory: 640K", delay: 500 },
  { text: "", delay: 700 },
  { text: "Loading chandlerOS...", delay: 800, green: true },
];

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });

    setTimeout(() => setIsDone(true), 1600);
    setTimeout(onComplete, 2100);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="win95-boot"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={line.green ? { color: "#00ff00" } : undefined}>
                {line.text}
                {i === visibleLines - 1 && i === BOOT_LINES.length - 1 && (
                  <span
                    style={{
                      animation: "blink 1s step-end infinite",
                    }}
                  >
                    █
                  </span>
                )}
              </div>
            ))}
          </div>
          <style>{`@keyframes blink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
