import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "chandlerOS — Chandler Hardy",
  description:
    "Full-stack developer portfolio. 50+ merged MRs, 4,000+ users, 40% of the US cattle market. Built with Next.js.",
  openGraph: {
    title: "chandlerOS — Chandler Hardy",
    description:
      "Full-stack developer portfolio. Currently at Performance Beef.",
    type: "website",
  },
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
