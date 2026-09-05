"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/projects", label: "Work" },
    { href: "/courses", label: "Education" },
  ];

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FBFBFA]/90 backdrop-blur-sm border-b border-[#E0E0E0]"
    >
      <nav
        className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 bg-[#111111] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#333333]">
            <span className="text-white text-xs font-bold font-mono leading-none">SD</span>
          </div>
          <span className="text-sm font-semibold text-[#111111] tracking-[-0.02em]">
            Dhakal
            <span className="hidden sm:inline text-[#787774] font-normal ml-1.5">Consulting</span>
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-[-0.01em] transition-colors duration-200 ${
                  pathname === href
                    ? "text-[#111111] font-semibold"
                    : "text-[#787774] font-medium hover:text-[#111111]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-sm font-semibold bg-[#111111] text-white px-6 py-2.5 border border-[#111111] hover:bg-transparent hover:text-[#111111] transition-colors duration-200 active:scale-[0.98]"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
