import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vivek Pathak - Software Engineer Portfolio",
  description: "Portfolio of Vivek Pathak, Computer Science Engineer specializing in full-stack development, AI integration, and modern web technologies.",
  keywords: ["Vivek Pathak", "Software Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Vivek Pathak" }],
  openGraph: {
    title: "Vivek Pathak - Software Engineer Portfolio",
    description: "Portfolio showcasing projects, experience, and skills in software development",
    type: "website",
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
      </body>
    </html>
  );
}
