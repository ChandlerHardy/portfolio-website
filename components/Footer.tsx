"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6 lg:px-8 xl:px-6 2xl:px-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2025 Chandler Hardy</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ChandlerHardy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/chandler-hardy-80808112b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
