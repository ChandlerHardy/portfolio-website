"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50 dark:bg-background/80 dark:backdrop-blur-md">
      <div className="max-w-10xl mx-auto px-6 lg:px-8 xl:px-6 2xl:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center justify-center">
            <button 
              onClick={scrollToTop}
              className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center justify-center"
            >
              <div className="h-24 w-24 flex items-center justify-center">
                <img 
                  src="/CHi_logo.png" 
                  alt="Chandler Hardy Logo" 
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-md hover:bg-accent"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('#contact')}>
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/70 hover:text-foreground block px-3 py-2 rounded-md hover:bg-accent transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}