import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeTransition() {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousTheme, setPreviousTheme] = useState(theme);

  useEffect(() => {
    if (theme !== previousTheme) {
      setIsTransitioning(true);
      setPreviousTheme(theme);

      // End transition after animation duration
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Match CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [theme, previousTheme]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Subtle gradient overlay to ease the transition */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: theme === 'dark' 
                ? 'radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.03) 100%)'
                : 'radial-gradient(circle at center, transparent 60%, rgba(255, 255, 255, 0.05) 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          
          {/* Gentle pulse effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.01) 50%, transparent 100%)'
                : 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.95, 1, 1.05] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}