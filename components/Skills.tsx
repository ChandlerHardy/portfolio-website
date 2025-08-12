"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { useEffect, useState } from "react";

export default function Skills() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 95 },
        { name: "UI/UX Design", level: 90 },
        { name: "Prototyping", level: 85 },
        { name: "Design Systems", level: 90 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  const tools = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Adobe Creative Suite",
    "Node.js", "PostgreSQL", "MongoDB", "Firebase", "Vercel", "AWS", "Git", "Docker"
  ];

  // Animate progress bars when in view
  useEffect(() => {
    if (skillsInView) {
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [skillsInView]);

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Technologies I work with
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From design to development, here are the tools and technologies I use 
            to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2, 
                ease: "easeOut" 
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                        ease: "easeOut" 
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {animatedValues[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={animatedValues[skill.name] || 0} 
                        className="h-2 transition-all duration-1000 ease-out" 
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-xl mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1 + (index * 0.05),
                  ease: "easeOut" 
                }}
              >
                <Badge variant="outline" className="px-3 py-1">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}