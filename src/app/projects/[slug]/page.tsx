"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjectBySlug } from "../../../data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-display text-4xl text-foreground mb-6">
            Not Found
          </h1>
          <button
            onClick={() => router.push("/#work")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Grain */}
      <div className="grain" />

      {/* Back nav */}
      <div className="px-6 md:px-12 lg:px-20 pt-8">
        <button
          onClick={() => router.push("/#work")}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All projects
        </button>
      </div>

      {/* Header */}
      <section className="px-6 md:px-12 lg:px-20 pt-12 pb-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] tracking-wider uppercase text-muted-foreground/70 border border-border px-2.5 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors rounded-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-display font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-colors rounded-sm"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      {project.image && (
        <motion.section
          className="px-6 md:px-12 lg:px-20 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="max-w-4xl rounded-sm overflow-hidden"
            style={
              project.backgroundColor
                ? project.backgroundColor.startsWith("linear-gradient")
                  ? { backgroundImage: project.backgroundColor }
                  : { backgroundColor: project.backgroundColor }
                : { backgroundColor: "hsl(var(--card))" }
            }
          >
            <div className="aspect-video flex items-center justify-center p-12">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="max-h-full max-w-full object-contain"
                style={
                  project.detailPageImageScale
                    ? { transform: `scale(${project.detailPageImageScale})` }
                    : project.imageScale
                      ? { transform: `scale(${project.imageScale})` }
                      : {}
                }
              />
            </div>
          </div>
        </motion.section>
      )}

      {/* Overview */}
      {project.overview && (
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-3"
                  >
                    <span className="text-primary/50 mt-1.5 text-xs">&mdash;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                Tech Stack
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.techStack.map((category, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold text-foreground mb-3">
                      {category.category}
                    </h3>
                    <ul className="space-y-1.5">
                      {category.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                Challenges
              </h2>
              <div className="space-y-10">
                {project.challenges.map((challenge, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <h2 className="font-mono text-xs tracking-[0.15em] uppercase text-primary">
                Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-3"
                  >
                    <span className="text-primary mt-0.5 text-sm">&#10003;</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-border">
        <button
          onClick={() => router.push("/#work")}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all projects
        </button>
      </section>
    </div>
  );
}
