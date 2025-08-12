"use client";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../components/ThemeProvider";
import FloatingParticles from "../../components/FloatingParticles";
import ScrollProgress from "../../components/ScrollProgress";
import FloatingShapes from "../../components/FloatingShapes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background relative">
        {/* Background effects */}
        <FloatingParticles />
        <FloatingShapes />
        
        {/* Scroll progress indicator */}
        <ScrollProgress />
        
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}