import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ThemeProvider from "@/theme/ThemeProvider";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandler Hardy - Portfolio",
  description: "Portfolio website of Chandler Hardy - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 1,
                pl: 3,
                minHeight: '100vh',
                backgroundColor: 'background.default',
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
