"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const router = useRouter();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label mb-8 block">01 / Work</span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Selected projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            From autonomous build systems to ag-tech platforms — things I&apos;ve
            designed, built, and shipped.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onClick={() => router.push(`/projects/${project.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[number];
  index: number;
  onClick: () => void;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group border-t border-border py-10 md:py-14 cursor-pointer"
      onClick={onClick}
    >
      <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
        {/* Number */}
        <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1.5">
          {num}
        </span>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground/70 border border-border px-2.5 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:mt-1.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Live site"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Source code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
