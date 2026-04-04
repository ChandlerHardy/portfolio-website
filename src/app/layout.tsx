import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chandlerOS — Chandler Hardy",
  description:
    "Full-stack developer portfolio. 50+ merged MRs, 4,000+ users, 40% of the US cattle market. Built with Next.js.",
  manifest: "/manifest.json",
  openGraph: {
    title: "chandlerOS — Chandler Hardy",
    description:
      "Full-stack developer portfolio. Currently at Performance Beef.",
    url: "https://chandlerhardy.com",
    siteName: "chandlerOS",
    images: [
      {
        url: "https://chandlerhardy.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "chandlerOS — Chandler Hardy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "chandlerOS — Chandler Hardy",
    description:
      "Full-stack developer portfolio. Currently at Performance Beef.",
    creator: "@chandlerhardy",
    images: ["https://chandlerhardy.com/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
