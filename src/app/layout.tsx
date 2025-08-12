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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
