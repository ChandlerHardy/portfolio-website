"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  "crooked-finger": { label: "Live", color: "bg-green-500/20 text-green-400 border border-green-500/30" },
  "elucidate-chess": { label: "In Progress", color: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" },
  "greenline": { label: "Complete", color: "bg-blue-500/20 text-blue-400 border border-blue-500/30" },
  "ralph": { label: "Tool", color: "bg-gray-500/20 text-gray-400 border border-gray-500/30" },
};

export default function Projects() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-2">// work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          ref={gridRef}
        >
          {projects.map((project, index) => {
            const status = STATUS_MAP[project.slug];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: gridInView ? index * 0.1 : 0,
                  ease: "easeOut",
                }}
                className="group rounded-xl border border-border bg-[#111] dark:bg-[#111] light:bg-[#F5F5F5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col p-6"
                style={{}}
              >
                {/* Top row: title + status badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                  {status && (
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${status.color}`}>
                      {status.label}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md border border-border bg-muted/30 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
