"use client";

import { motion } from "motion/react";

export default function FloatingShapes() {
  const shapes = [
    { id: 1, type: 'circle', size: 60, left: '10%', top: '20%', duration: 8 },
    { id: 2, type: 'square', size: 40, left: '80%', top: '15%', duration: 12 },
    { id: 3, type: 'triangle', size: 50, left: '15%', top: '60%', duration: 10 },
    { id: 4, type: 'circle', size: 30, left: '85%', top: '70%', duration: 9 },
    { id: 5, type: 'square', size: 35, left: '5%', top: '80%', duration: 11 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === 'circle' 
              ? 'rounded-full bg-gradient-to-br from-primary/5 to-accent/10' 
              : shape.type === 'square'
              ? 'bg-gradient-to-br from-accent/5 to-primary/10'
              : 'bg-gradient-to-br from-primary/8 to-accent/5'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}