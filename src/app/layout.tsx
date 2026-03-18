import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandler Hardy — Full-Stack Engineer",
  description:
    "Full-stack software engineer building data platforms at national scale. Self-taught. Based in Alabama.",
  openGraph: {
    title: "Chandler Hardy — Full-Stack Engineer",
    description:
      "Building at scale. 51 MRs shipped. Self-taught. Remote.",
    url: "https://chandlerhardy.com",
    siteName: "Chandler Hardy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('ch-theme') || 'dark';
                document.documentElement.classList.toggle('dark', t !== 'light');
              } catch(e) {}
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
