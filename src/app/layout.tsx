import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../../components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandler Hardy - Portfolio",
  description: "Full-stack engineer building web apps with TypeScript, React, Go, and Python. 4,000+ users, 51 merged MRs, open to remote roles.",
  openGraph: {
    title: "Chandler Hardy - Portfolio",
    description: "Full-stack engineer building web apps with TypeScript, React, Go, and Python. 4,000+ users, 51 merged MRs, open to remote roles.",
    url: "https://chandlerhardy.com",
    siteName: "Chandler Hardy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandler Hardy - Portfolio",
    description: "Full-stack engineer building web apps with TypeScript, React, Go, and Python.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof Storage !== "undefined") {
                  const theme = localStorage.getItem('portfolio-theme') || 'dark';
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
      <body className="antialiased font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
