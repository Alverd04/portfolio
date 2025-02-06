import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ProfileCard from "@/components/profile-card";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert Font | Fullstack Web Developer",
  description:
    "I’m Albert Font, an experienced fullstack web developer specializing in creating dynamic, scalable, and user-friendly websites and web applications. With expertise in React, Node.js, TypeScript, and modern web technologies, I bring your digital ideas to life with fast, responsive, and secure web solutions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased dark`}>
        <div className="flex flex-col justify-center gap-8 p-4 lg:p-12 relative xl:flex-row">
          <ProfileCard />
          <div className="relative 2xl:max-w-[1200px] w-full flex flex-col gap-4 bg-secondary rounded-3xl p-8 border border-border">
            <Navbar />
            {children}
          </div>
        </div>
        <MobileNavbar />
      </body>
    </html>
  );
}
