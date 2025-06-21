import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioChat } from "@/components/PortfolioChat";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Saurav Dhakal | Portfolio",
  description: "Developer portfolio of Saurav Dhakal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${mono.variable} bg-neutral-900 text-white scroll-smooth`}>
        <ThemeProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>

          <PortfolioChat /> 
        </ThemeProvider>
      </body>
    </html>
  );
}
