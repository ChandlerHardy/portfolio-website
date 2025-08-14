import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export default function About() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const highlights = [
    "User Experience Design",
    "Frontend Development",
    "Brand Identity",
    "Product Strategy"
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Passionate about creating meaningful digital experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience in design and development, I specialize in 
            creating user-centered solutions that not only look great but also drive 
            business results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-2xl mb-6">My Approach</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I believe great design starts with understanding the user&apos;s needs and 
                business objectives. My process combines strategic thinking with creative 
                execution to deliver solutions that exceed expectations.
              </p>
              <p className="text-muted-foreground">
                Whether it&apos;s designing a mobile app, building a web platform, or creating 
                a brand identity, I approach each project with curiosity, empathy, and 
                attention to detail.
              </p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <Badge variant="outline">
                    {highlight}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            ref={statsRef}
            initial={{ opacity: 0, x: 50 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl md:text-3xl text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}