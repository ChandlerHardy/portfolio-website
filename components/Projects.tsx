import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import EnhancedButton from "./EnhancedButton";
import MagneticHover from "./MagneticHover";

export default function Projects() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, isInView: projectsInView } = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by AI that can engage in natural conversations and provide helpful responses.",
      image: "/ai-chatbot-screenshot.png",
      tags: ["React", "AI", "Next.js", "TypeScript"],
      liveUrl: "https://ai-chatbot-pearl-psi.vercel.app/",
      githubUrl: "https://github.com/ChandlerHardy/ai-chatbot"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity and design system for a sustainable fashion startup, including logo, guidelines, and digital assets.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
      tags: ["Figma", "Brand Design", "UI/UX", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness app with workout tracking, progress analytics, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Charts", "Mobile"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Recent projects that I'm proud of
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, here are some projects that showcase my 
            skills in design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" ref={projectsRef}>
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
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
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

                    <div className="flex gap-3">
                      <EnhancedButton 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
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