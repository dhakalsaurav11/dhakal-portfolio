import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioChat } from "@/components/PortfolioChat";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhakal Consulting",
  description: "High-performance digital infrastructure for growth-focused businesses.",
  other: {
    "theme-color": "#FBFBFA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light" }}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans bg-[#FBFBFA] text-[#2F3437] antialiased selection:bg-[#FBF3DB] selection:text-[#956400]`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen w-full pt-16">
          {children}
        </main>

        <Footer />
        <PortfolioChat />
      </body>
    </html>
  );
}
