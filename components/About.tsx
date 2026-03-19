"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { value: "51", label: "Merged MRs at PB", note: "Production code" },
    { value: "4,000+", label: "Active Users", note: "Performance Beef" },
    { value: "40%", label: "US Cattle Market", note: "Platform reach" },
    { value: "4", label: "Shipped Projects", note: "Idea to deploy" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label mb-8 block">02 / About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-8">
              Self-taught developer
              <br />
              <span className="text-muted-foreground">who ships real products.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Two years of professional experience, all of it building production
                systems people depend on. At Performance Beef, I work across a PHP +
                Go + MongoDB stack serving 40% of the US cattle market.
              </p>
              <p>
                Outside work, I build full-stack apps from scratch — Next.js frontends,
                FastAPI backends, PostgreSQL, Docker, self-managed infrastructure on
                Oracle Cloud. I wrote an autonomous build pipeline that shipped a
                28-story application without manual intervention.
              </p>
              <p>
                Some college CS coursework (C++, web dev), but mostly learned by
                building things and breaking them. I care about clean architecture,
                reliable systems, and writing code that other people can maintain.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border border-border rounded-sm p-6 bg-card/50"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground mb-1">{stat.label}</div>
                <div className="font-mono text-xs text-muted-foreground">
                  {stat.note}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
