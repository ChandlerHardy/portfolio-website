import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "chandlerOS — Chandler Hardy",
  description:
    "Full-stack developer portfolio. 51 merged MRs, 4,000+ users, 40% of the US cattle market. Built with Next.js.",
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
    <html lang="en" className={vt323.variable}>
      <body>{children}</body>
    </html>
  );
}
