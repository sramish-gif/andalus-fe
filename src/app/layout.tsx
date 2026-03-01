import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { GridBackground } from "@/components/ui/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Andalus | Investing in the Future of Healthcare",
  description: "A healthcare investment fund focused on transforming care delivery and improving patient outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreCaslonText.variable} font-sans antialiased bg-background text-foreground`}
      >
        <GridBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
