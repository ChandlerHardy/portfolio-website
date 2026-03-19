"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
      {/* Subtle gradient atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label mb-6 block">Full-Stack Developer</span>
        </motion.div>

        <motion.h1
          className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Chandler
          <br />
          Hardy
        </motion.h1>

        <motion.div
          className="max-w-xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I build systems that ship. Full-stack apps, autonomous pipelines,
            infrastructure — from idea to production.
          </p>
          <p className="text-base text-muted-foreground/70">
            Currently at{" "}
            <span className="text-primary">Performance Beef</span> — 4,000+
            users, 40% of the US cattle market. 51 merged MRs and counting.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono tracking-wide"
          >
            Get in touch &rarr;
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-12 lg:left-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
