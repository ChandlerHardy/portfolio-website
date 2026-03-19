"use client";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Grain texture overlay */}
      <div className="grain" />

      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
