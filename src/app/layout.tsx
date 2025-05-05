import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Jhenbert | Freelance Web/Web3 Developer",
  description:
    "Freelance full-stack developer with 3+ years of experience building scalable, SEO-optimized web apps for startups and SaaS. Expert in Next.js, NestJS, TypeScript, Prisma, and Redis. I help early-stage companies launch fast, modern, and high-performing digital products.",
  keywords:
    "affordable full-stack web developer in Davao, freelance web developer Davao for startups, Davao-based full-stack developer for SaaS, hire remote web developer from Davao, SEO web development Davao, Next.js web developer in Davao, TypeScript developer Davao portfolio, SaaS web developer in Davao, NestJS developer for hire Davao, affordable web development services Davao, Davao web developer for scalable apps, remote freelance web developer Philippines, full-stack developer Davao with portfolio, startup web app developer in Davao, Prisma and Redis expert Davao, custom web development Davao Philippines",
  openGraph: {
    title: "Jhenbert | Freelance Web/Web3 Developer",
    description:
      "Freelance full-stack developer with 3+ years of experience building scalable, SEO-optimized web apps for startups and SaaS. Expert in Next.js, NestJS, TypeScript, Prisma, and Redis. I help early-stage companies launch fast, modern, and high-performing digital products.",
    type: "website",
    url: "https://jhenbert.pro",
    siteName: "Jhenbert | Freelance Web/Web3 Developer",
    images: [
      {
        url: "https://jhenbert.pro/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Jhenbert | Freelance Web/Web3 Developer",
      },
    ],
  },
  twitter: {
    title: "Jhenbert | Freelance Web/Web3 Developer",
    description:
      "Freelance full-stack developer with 3+ years of experience building scalable, SEO-optimized web apps for startups and SaaS. Expert in Next.js, NestJS, TypeScript, Prisma, and Redis. I help early-stage companies launch fast, modern, and high-performing digital products.",
    card: "summary_large_image",
    images: [
      {
        url: "https://jhenbert.pro/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Jhenbert | Freelance Web/Web3 Developer",
      },
    ],
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
