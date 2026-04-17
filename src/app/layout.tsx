import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioChat } from "@/components/PortfolioChat";

export const metadata: Metadata = {
  title: "Dhakal Consulting",
  description: "High-performance digital infrastructure for growth-focused businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${GeistSans.className} ${GeistMono.variable} bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        <Navbar />
        
        <main className="min-h-screen w-full pt-16">
          {children}
        </main>

        <Footer />
        <PortfolioChat />
      </body>
    </html>
  );
}