export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground/50 tracking-wider">
          &copy; {new Date().getFullYear()} Chandler Hardy
        </span>
        <span className="font-mono text-xs text-muted-foreground/40 tracking-wider">
          Built with Next.js + Tailwind
        </span>
      </div>
    </footer>
  );
}
