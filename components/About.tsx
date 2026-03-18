"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const stats = [
  { number: "51", label: "MRs Merged" },
  { number: "4,000+", label: "Users" },
  { number: "2 YOE", label: "Professional Experience" },
  { number: "40%", label: "US Cattle Market" },
];

export default function About() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-[#4ADE80] mb-2 tracking-wider">// about</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground">Who I Am</h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left: Prose */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a self-taught full-stack engineer who learned by building. No bootcamp, no CS degree — just
              a relentless drive to ship real software and figure out what it takes to make things work at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since February 2024 I&apos;ve been a Software Engineer at Performance Livestock Analytics, working
              on a data platform used by 4,000+ cattle producers across the US. I ship full-stack features
              end-to-end — PHP/jQuery on the frontend, Go and MongoDB on the backend — and have 51 merged
              merge requests across that codebase.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              On the side I&apos;m building products I care about: Crooked Finger (a deployed AI craft assistant),
              Elucidate Chess (an AI-powered chess trainer), and Ralph (the autonomous build pipeline I use to
              ship all of the above). I&apos;m looking for a remote role where I can keep building things that matter.
            </p>
          </motion.div>

          {/* Right: Stat cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            ref={statsRef}
            initial={{ opacity: 0, x: 40 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="border border-border rounded-lg p-6 bg-background/50 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              >
                <span className="font-mono text-4xl font-bold text-[#4ADE80] leading-none mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
