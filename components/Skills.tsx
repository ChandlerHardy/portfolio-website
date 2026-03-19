"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const stack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Go", "GraphQL", "PHP"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Oracle Cloud", "Nginx", "Tailscale"],
  },
  {
    category: "AI & Automation",
    items: ["Claude Code", "n8n", "OpenRouter", "MCP"],
  },
  {
    category: "Tools",
    items: ["Git", "Bash", "Vercel", "Linux"],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="stack"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label mb-8 block">03 / Stack</span>
          <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-16">
            What I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="font-mono text-xs tracking-[0.15em] uppercase text-primary mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
