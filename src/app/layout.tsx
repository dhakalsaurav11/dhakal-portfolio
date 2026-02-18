import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // The "Consultant" font
import { GeistMono } from "geist/font/mono"; // The "Engineer" font
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dhakal Consulting",
  description: "High-performance digital infrastructure for growth-focused businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        // GeistSans.variable and GeistMono.variable allow you to use them in Tailwind config if needed,
        // but .className applies them globally right here.
        className={`${GeistSans.className} ${GeistMono.variable} bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        <Navbar />
        
        {/* Full width container to allow background sections to span edge-to-edge */}
        <main className="min-h-screen w-full pt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}