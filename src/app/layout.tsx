import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandler Hardy - Portfolio",
  description: "Full Stack Developer Portfolio showcasing modern web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof Storage !== "undefined") {
                  const theme = localStorage.getItem('portfolio-theme') || 'system';
                  const root = document.documentElement;
                  
                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
