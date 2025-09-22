import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export default function About() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const { ref: statsRef, isInView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "2+", label: "Years Professional Experience" },
    { number: "5,000+", label: "Happy Subscribers" },
    { number: "100%", label: "Commitment to Quality" }
  ];

  const highlights = [
    "Responsive Web Design",
    "Modern Full Stack Development",
    "Clean Code Practices",
    "Collaborative Problem Solving"
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30" ref={sectionRef}>
      <div className="max-w-10xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Turning ideas into impactful digital experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in creating user-focused, visually engaging, and impactful digital solutions. 
            My approach combines technical expertise with a passion for crafting seamless, memorable 
            experiences that deliver real results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-2xl mb-6">My Philosophy</h3>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I believe that great digital products start with a deep understanding of both 
                user needs and business goals. By combining creativity with technical expertise, 
                I aim to deliver solutions that are both functional and inspiring.
              </p>
              <p className="text-muted-foreground">
                Whether it&apos;s developing a responsive website, crafting a seamless user interface, 
                or collaborating on a complex project, I approach every challenge with curiosity, 
                adaptability, and a commitment to excellence.
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
            className="grid grid-cols-2 gap-4 xl:gap-6"
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