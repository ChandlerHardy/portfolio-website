export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-8 xl:px-6 2xl:px-4 bg-muted/30">
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Chandler Hardy. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Claude Code, Next.js, React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}