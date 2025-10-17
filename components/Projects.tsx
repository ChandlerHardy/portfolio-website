import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import EnhancedButton from "./EnhancedButton";
import MagneticHover from "./MagneticHover";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, isInView: projectsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="work" className="py-20 px-6 lg:px-8 xl:px-6 2xl:px-4" ref={sectionRef}>
      <div className="max-w-10xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Recent projects that I&apos;m proud of
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, here are some projects that showcase my 
            skills in design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 xl:gap-10" ref={projectsRef}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: projectsInView ? index * 0.2 : 0, 
                ease: "easeOut" 
              }}
            >
              <MagneticHover intensity={0.03}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  <div
                    className="aspect-video overflow-hidden rounded-t-lg relative bg-muted/10"
                    style={project.backgroundColor ? { backgroundColor: project.backgroundColor } : {}}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={project.imageScale ? { transform: `scale(${project.imageScale})` } : {}}
                      onMouseEnter={(e) => {
                        const scale = project.imageScale || 1;
                        e.currentTarget.style.transform = `scale(${scale * 1.05})`;
                      }}
                      onMouseLeave={(e) => {
                        const scale = project.imageScale || 1;
                        e.currentTarget.style.transform = `scale(${scale})`;
                      }}
                    />
                    {/* Overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={projectsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{
                            duration: 0.3,
                            delay: projectsInView ? (index * 0.2) + (tagIndex * 0.05) + 0.3 : 0,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="text-xs group-hover:border-primary/50 transition-colors">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex-grow"></div>

                    <div className="flex gap-3">
                      <EnhancedButton
                        size="sm"
                        className="flex-1"
                        onClick={() => router.push(`/projects/${project.slug}`)}
                      >
                        Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </EnhancedButton>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </EnhancedButton>
                      <EnhancedButton
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </EnhancedButton>
                    </div>
                  </CardContent>
                </Card>
              </MagneticHover>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <EnhancedButton variant="outline" size="lg">
            View All Projects
          </EnhancedButton>
        </motion.div>
      </div>
    </section>
  );
}