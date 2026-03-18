"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "Python", "Go", "PHP", "Swift", "JavaScript"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js 15", "Tailwind CSS", "Vue.js"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Node.js", "GraphQL", "REST APIs"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    label: "AI/ML",
    skills: ["Claude API", "OpenAI", "Gemini", "OpenRouter", "MCP", "RAG"],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "OCI", "Vercel", "nginx", "n8n", "CI/CD"],
  },
];

export default function Skills() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30" ref={sectionRef}>
      <div className="max-w-10xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs text-[#4ADE80] uppercase tracking-wider mb-2">
            // stack
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: "easeOut",
              }}
            >
              <p className="font-mono text-xs text-[#4ADE80] uppercase tracking-wider mb-3">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 border border-border rounded font-sans text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
