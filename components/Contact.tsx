import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export default function Contact() {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.2 });
  const { ref: cardsRef, isInView: cardsInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hardych04@gmail.com",
      href: "mailto:hardych04@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(256) 530-2883",
      href: "tel:+12565302883"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Birmingham, AL",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chandler-hardy-80808112b/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/ChandlerHardy"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 xl:px-6 2xl:px-4" ref={sectionRef}>
      <div className="max-w-8xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl mb-6">
            Let&apos;s work together on your next project
          </h2>
          <p className="text-lg text-muted-foreground">
            I&apos;m always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12" ref={cardsRef}>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-xl">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut" 
                  }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <a href={info.href} className="flex items-center space-x-3 group">
                        <div className="text-primary group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="group-hover:text-primary transition-colors">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl">Let&apos;s Connect</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these platforms. I typically respond 
              within 24 hours and would love to discuss how we can work together.
            </p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                      <div className="scale-125">{social.icon}</div>
                      <span>{social.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              <Button size="lg" className="w-full" asChild>
                <a href="mailto:hardych04@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-muted/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-2xl mb-4">Ready to start your project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and would love to hear about 
            your project. Let&apos;s schedule a call to discuss how I can help bring your 
            vision to life.
          </p>
          <Button size="lg">
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}