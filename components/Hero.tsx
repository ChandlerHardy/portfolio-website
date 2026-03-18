"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Top label */}
        <p className="font-mono text-sm text-[#4ADE80] mb-4 tracking-wider">
          // full-stack engineer
        </p>

        {/* Name */}
        <h1 className="font-sans font-bold text-5xl md:text-7xl text-foreground leading-tight mb-6">
          Chandler Hardy
        </h1>

        {/* Tagline with cursor blink */}
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
          Building data platforms at national scale. 51 merged MRs. 4,000+ users. Self-taught.
          <span className="cursor-blink" aria-hidden="true" />
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#4ADE80] text-[#4ADE80] font-medium rounded-md hover:bg-[#4ADE80]/10 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
