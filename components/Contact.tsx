"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export default function Contact() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 xl:px-6 2xl:px-4" ref={sectionRef}>
      <div className="max-w-8xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono text-[#4ADE80] mb-2">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Open to remote full-stack roles. Reach out directly.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="mailto:hardych04@gmail.com"
            className="text-2xl font-mono text-[#4ADE80] hover:underline block"
          >
            hardych04@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ChandlerHardy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/chandler-hardy-80808112b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
