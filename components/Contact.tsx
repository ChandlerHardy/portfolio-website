"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const links = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "hardych04@gmail.com",
      href: "mailto:hardych04@gmail.com",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "ChandlerHardy",
      href: "https://github.com/ChandlerHardy",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chandler-hardy-80808112b/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label mb-8 block">04 / Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Looking for remote full-stack roles. Open to interesting problems
              and teams that ship.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground/60">
              <MapPin className="w-3.5 h-3.5" />
              <span>Birmingham, AL</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-0"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 border-t border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {link.icon}
                </span>
                <span className="text-foreground group-hover:text-primary transition-colors font-body">
                  {link.label}
                </span>
                <span className="ml-auto font-mono text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                  &rarr;
                </span>
              </a>
            ))}
            <div className="border-t border-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
