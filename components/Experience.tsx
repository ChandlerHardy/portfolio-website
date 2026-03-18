"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const techStack = ["PHP", "jQuery", "Go", "MongoDB", "Highcharts"];

const bullets = [
  "Built a yard sheet dashboard system with Highcharts visualizations, giving producers real-time insight into animal movement and lot performance.",
  "Shipped a customizable navigation bar used by 4,000+ producers, allowing role-based menu configuration without a code change.",
  "Designed and implemented a mass animal ID creation system with CSV import, duplicate detection, and bulk-write to MongoDB.",
  "Refactored the protocol management module — removed 10 deprecated files and consolidated disparate API routes into 3 clean endpoints.",
  "Developed a kill sheet tracking system end-to-end: Go API, MongoDB storage, PHP form UI, and spreadsheet export logic.",
];

export default function Experience() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: cardRef, isInView: cardInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-[#4ADE80] mb-2 tracking-wider">// experience</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground">Where I&apos;ve Worked</h2>
        </motion.div>

        {/* Experience card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="border border-border rounded-lg bg-background/50 border-l-4 border-l-[#4ADE80] overflow-hidden">
            <div className="p-8">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-sans font-bold text-xl text-foreground">Software Engineer</h3>
                  <p className="font-mono text-sm text-[#4ADE80] mt-1">Performance Livestock Analytics</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">Feb 2024 – Present</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full-stack engineer on a cattle industry data platform serving 4,000+ producers and representing
                roughly 40% of the US cattle market. Shipped features end-to-end across a PHP/jQuery frontend
                and Go/MongoDB backend, with 51 merged MRs to date.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4ADE80]" />
                    <span className="leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="font-mono text-xs border border-border rounded px-2.5 py-1 text-muted-foreground"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05, ease: "easeOut" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
