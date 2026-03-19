import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chandler Hardy — Full-Stack Developer",
  description:
    "Full-stack developer building systems that ship. Currently at Performance Beef — 4,000+ users, 40% of the US cattle market.",
  openGraph: {
    title: "Chandler Hardy — Full-Stack Developer",
    description:
      "Full-stack developer building systems that ship. Currently at Performance Beef — 4,000+ users, 40% of the US cattle market.",
    type: "website",
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
      className={`dark ${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
