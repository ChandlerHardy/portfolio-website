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

        <div className="space-y-8 xl:space-y-12" ref={projectsRef}>
          {projects.slice(0, 3).map((project, index) => (
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
              <MagneticHover intensity={0.02}>
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="grid md:grid-cols-[30%_1fr] gap-0">
                    {/* Image Section */}
                    <div
                      className="relative bg-muted/10 flex items-center justify-center p-8 aspect-[4/3]"
                      style={project.backgroundColor ? (
                        project.backgroundColor.startsWith('linear-gradient')
                          ? { backgroundImage: project.backgroundColor }
                          : { backgroundColor: project.backgroundColor }
                      ) : {}}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500"
                        style={project.imageScale ? { transform: `scale(${project.imageScale})` } : {}}
                      />
                      {/* Overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
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
                            <Badge variant="outline" className="group-hover:border-primary/50 transition-colors">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <EnhancedButton
                          size="default"
                          onClick={() => router.push(`/projects/${project.slug}`)}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </EnhancedButton>
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <EnhancedButton
                            variant="outline"
                            size="default"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </EnhancedButton>
                        )}
                        <EnhancedButton
                          variant="outline"
                          size="default"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          {project.liveUrl ? "Code" : "Documentation"}
                        </EnhancedButton>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </MagneticHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}