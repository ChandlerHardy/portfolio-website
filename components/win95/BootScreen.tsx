"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsDone(true), 2200);
    setTimeout(onComplete, 2700);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="winxp-boot"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="winxp-boot-logo">chandlerOS</div>
          <div className="winxp-boot-subtitle">Professional Edition</div>
          <div className="winxp-boot-progress">
            <div className="winxp-boot-progress-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
