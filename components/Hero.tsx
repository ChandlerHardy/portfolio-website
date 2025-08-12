import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import TypewriterText from "./TypewriterText";
import EnhancedButton from "./EnhancedButton";
import MagneticHover from "./MagneticHover";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(3,2,19,0.05) 0%, transparent 50%, rgba(233,235,239,0.1) 100%)",
            "linear-gradient(135deg, rgba(233,235,239,0.1) 0%, transparent 50%, rgba(3,2,19,0.05) 100%)",
            "linear-gradient(225deg, rgba(3,2,19,0.05) 0%, transparent 50%, rgba(233,235,239,0.1) 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary mb-6">
                  Creative Designer &{" "}
                  <span className="text-muted-foreground">
                    <TypewriterText 
                      text="Developer" 
                      delay={1500}
                      speed={100}
                    />
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                I craft digital experiences that bridge the gap between beautiful design 
                and functional code. Currently building amazing products at a tech startup 
                in San Francisco.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <EnhancedButton 
                  size="lg" 
                  className="group"
                  onClick={() => scrollToSection('#work')}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </EnhancedButton>
                
                <EnhancedButton variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </EnhancedButton>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <MagneticHover intensity={0.05}>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent overflow-hidden relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Alex Chen - Creative Designer & Developer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Enhanced decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/50 rounded-full blur-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                
                {/* New glowing ring */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(3,2,19,0.1)",
                      "0 0 40px rgba(3,2,19,0.2)",
                      "0 0 20px rgba(3,2,19,0.1)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </MagneticHover>
          </div>
        </div>
      </div>
    </section>
  );
}