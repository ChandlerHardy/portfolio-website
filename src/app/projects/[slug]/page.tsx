"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjectBySlug } from "../../../data/projects";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/#work")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-12 pb-12 px-6 lg:px-8 xl:px-6 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => router.push("/#work")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button onClick={() => window.open(project.liveUrl, "_blank")}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {project.liveUrl ? "View Code" : "Documentation"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Chronicle header screenshot - only for Chronicle project */}
            {project.slug === "chronicle" && project.screenshots && project.screenshots[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 rounded-lg overflow-hidden bg-muted/20"
              >
                <Image
                  src={project.screenshots[0].url}
                  alt={project.screenshots[0].caption}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-background/80 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground">
                    {project.screenshots[0].caption}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Logo and Overview */}
      {project.overview && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[350px_1fr] gap-8 items-start">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg overflow-hidden"
                style={project.backgroundColor ? (
                  project.backgroundColor.startsWith('linear-gradient')
                    ? { backgroundImage: project.backgroundColor }
                    : { backgroundColor: project.backgroundColor }
                ) : {}}
              >
                <div className="aspect-square flex items-center justify-center p-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="max-h-full max-w-full object-contain"
                    style={project.detailPageImageScale ? { transform: `scale(${project.detailPageImageScale})` } : project.imageScale ? { transform: `scale(${project.imageScale})` } : {}}
                  />
                </div>
              </motion.div>

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-foreground">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Screenshots</h2>

              {/* Main Screenshot */}
              <div className="mb-8 rounded-lg overflow-hidden bg-muted/20">
                <Image
                  src={project.screenshots[selectedImage].url}
                  alt={project.screenshots[selectedImage].caption}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
                <div className="p-4 bg-background/80 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground">
                    {project.screenshots[selectedImage].caption}
                    {project.screenshots[selectedImage].platform && (
                      <Badge variant="outline" className="ml-2">
                        {project.screenshots[selectedImage].platform}
                      </Badge>
                    )}
                  </p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {project.screenshots.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground/50"
                      }`}
                    >
                      <Image
                        src={screenshot.url}
                        alt={screenshot.caption}
                        width={200}
                        height={150}
                        className="w-full h-auto"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.techStack.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-8">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Outcomes & Impact</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
              
              {/* Chronicle quit screen - only for Chronicle project */}
              {project.slug === "chronicle" && (
                <motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <Image
                    src="/chronicle_quit.png"
                    alt="Chronicle session completion"
                    width={400}
                    height={300}
                    className="mx-auto rounded-lg shadow-lg max-w-md"
                  />
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Session recorded. Development history preserved.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-12 px-6 lg:px-8 xl:px-6 2xl:px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Button
            size="lg"
            onClick={() => router.push("/#work")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Button>
        </div>
      </section>
    </div>
  );
}
