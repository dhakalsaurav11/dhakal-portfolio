"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = "dhakalsaurav11@gmail.com";
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company_site")) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzdavbjv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        setIsSubmitting(false);
        alert("There was a problem sending your message. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      alert("Connection failed. Please try again later.");
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#FBFBFA] py-24 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-[#111111] pb-8 mb-0"
        >
          <h1 className="font-sans text-4xl md:text-5xl font-semibold tracking-tighter leading-[1.08] text-[#111111]">
            Let&apos;s build something
            <br />
            <span className="text-[#787774]">that performs.</span>
          </h1>
        </motion.div>

        {/* Grid body */}
        <div className="grid lg:grid-cols-12 gap-0">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 border-r-0 lg:border-r border-[#E0E0E0] py-10 pr-0 lg:pr-10"
          >
            <p className="text-[#787774] text-sm leading-relaxed font-sans mb-10 max-w-sm">
              I partner with businesses to architect, build, and scale
              high-performance digital platforms. Fill out the form to
              request a strategy call.
            </p>

            {/* Response time */}
            <div className="border-t border-[#E0E0E0] pt-6 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block mb-2">
                Response time
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl font-semibold text-[#111111] tracking-tight tabular-nums">
                  24-48
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774]">
                  hrs
                </span>
              </div>
            </div>

            {/* Direct email */}
            <div className="border-t border-[#E0E0E0] pt-6 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block mb-2">
                Direct email
              </span>
              <div className="flex items-center justify-between border border-[#E0E0E0] bg-white px-4 py-3">
                <span className="font-mono text-xs text-[#111111] tracking-[0.02em]">
                  {email}
                </span>
                <button
                  onClick={handleCopy}
                  className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#787774] hover:text-[#111111] transition-colors duration-150 px-2 py-1"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="border-t border-[#E0E0E0] pt-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block mb-3">
                Elsewhere
              </span>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/dhakalsaurav11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.04em] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#787774] hover:border-[#787774] transition-colors duration-150"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/dhakalsaurav11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-[0.04em] text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#787774] hover:border-[#787774] transition-colors duration-150"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 py-10 pl-0 lg:pl-10"
          >
            <div className="mb-8 border-b border-[#E0E0E0] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774]">
                Project inquiry
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                type="text"
                name="company_site"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    spellCheck={false}
                    className="w-full px-4 py-3 bg-transparent border border-[#111111] text-[#111111] text-sm tracking-[-0.01em] placeholder:text-[#787774]/50 focus:outline-none focus:border-[#E61919] transition-colors duration-150"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    spellCheck={false}
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-transparent border border-[#111111] text-[#111111] text-sm tracking-[-0.01em] placeholder:text-[#787774]/50 focus:outline-none focus:border-[#E61919] transition-colors duration-150"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Your business name"
                  autoComplete="organization"
                  className="w-full px-4 py-3 bg-transparent border border-[#111111] text-[#111111] text-sm tracking-[-0.01em] placeholder:text-[#787774]/50 focus:outline-none focus:border-[#E61919] transition-colors duration-150"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block"
                >
                  How can I help?
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-transparent border border-[#111111] text-[#111111] text-sm tracking-[-0.01em] focus:outline-none focus:border-[#E61919] transition-colors duration-150 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a focus area
                  </option>
                  <option value="new_build">New platform build</option>
                  <option value="redesign">Website redesign &amp; migration</option>
                  <option value="automation">System automation</option>
                  <option value="consulting">Technical consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#787774] block"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your current bottleneck and what you want to achieve"
                  className="w-full px-4 py-3 bg-transparent border border-[#111111] text-[#111111] text-sm tracking-[-0.01em] placeholder:text-[#787774]/50 focus:outline-none focus:border-[#E61919] transition-colors duration-150 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full flex items-center justify-center bg-[#111111] text-white px-8 py-3.5 font-mono text-xs uppercase tracking-[0.1em] hover:bg-[#E61919] transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending
                      </motion.span>
                    ) : submitted ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Request sent
                      </motion.span>
                    ) : (
                      <motion.span
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Submit Inquiry
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
