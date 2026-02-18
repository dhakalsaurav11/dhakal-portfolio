"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/projects", label: "Case Studies" },
  ];

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/60"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="group flex items-center gap-3">
          {/* The Logo Icon */}
          <div className="p-1.5 bg-slate-900 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
            <img src="/icon.svg" alt="SD Logo" className="w-5 h-5 text-white invert" />
          </div>

          {/* The Text */}
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 tracking-tight">
            <span>Dhakal</span>
            <span className="hidden sm:inline-block text-slate-400 font-normal"> Consulting</span>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-sm font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform active:scale-95"
          >
            Book Strategy Call
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}