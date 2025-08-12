"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "" 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          // Hide cursor after text is complete
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-primary ml-1"
        animate={{ opacity: showCursor ? [1, 0] : 0 }}
        transition={{ duration: 0.8, repeat: showCursor ? Infinity : 0 }}
      />
    </span>
  );
}