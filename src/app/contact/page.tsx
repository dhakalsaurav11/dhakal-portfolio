"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = "dhakalsaurav11@unm.edu";
  const router = useRouter();


  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto py-12 space-y-6"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      <p className="text-neutral-400">
        Whether you're hiring, collaborating, or just curious — feel free to reach out!
      </p>

      <div className="bg-neutral-800 rounded-md p-6 space-y-4 border border-neutral-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white">{email}</span>
          <button
            onClick={handleCopy}
            className="text-sm text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <form
        action="https://formspree.io/f/myid" // ← NEED TO ADD ID
        method="POST"
        onSubmit={(e) => {
            const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement)?.value;
            if (honeypot) {
              e.preventDefault();
              return;
            }
            e.preventDefault();
            setSubmitted(true);
          
            setTimeout(() => {
              router.push("/thank-you");
            }, 1000);
          }}
          
        className="space-y-4"
        >
        {/* Honeypot Field */}
        <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
        />

        <div>
          <label className="block mb-1 text-sm text-neutral-300">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-neutral-300">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-neutral-300">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-600 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm px-4 py-2 rounded"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-400 text-sm pt-2">Thanks! Your message was sent.</p>
        )}
      </form>

      <div className="space-x-4 text-sm pt-4">
        <a href="https://github.com/dhakalsaurav11" target="_blank" className="text-blue-400 hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/dhakalsaurav11" target="_blank" className="text-blue-400 hover:underline">
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}
