import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhenbert | Freelance Full-Stack Developer",
  description:
    "Freelance full-stack developer with 2 years of experience working on personal projects. Proficient in Svelte/SvelteKit, TypeScript, Prisma, and MySQL/PostgreSQL. Skilled in building and managing scalable web applications across the development stack.",
  keywords:
    "affordable web developer in the Davao, web developer in Davao, freelance web developer Davao portfolio, full-stack developer Davao portfolio, Davao-based web developer, hire web developer in Davao, web developer Davao, remote web developer Davao, affordable web development Davao",
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
        {children}

        <Toaster />
      </body>
    </html>
  );
}
