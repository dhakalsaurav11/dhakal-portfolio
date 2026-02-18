"use client";

import { useState } from "react";
import { Copy, Check, ArrowRight, Clock, Building2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // NOTE: Swap this out for a custom domain email as soon as possible
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
    
    // 1. Capture Form Data
    const formData = new FormData(form);

    // 2. Honeypot Check (Silent Spam Prevention)
    // If a bot filled out the hidden 'company_site' field, stop immediately.
    if (formData.get("company_site")) return; 

    setIsSubmitting(true);

    try {
      // 3. Send Data to Formspree (Replace YOUR_FORM_ID below)
      const response = await fetch("https://formspree.io/f/xzdavbjv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // <--- Crucial: This stops Formspree from redirecting the user away
        }
      });

      if (response.ok) {
        // 4. Success: Show Animation & Redirect
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Wait 1.5s for user to see the green checkmark, then go to Thank You page
        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        // 5. Error: (Optional) Show an alert or error state
        setIsSubmitting(false);
        alert("There was a problem sending your message. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Error sending message. Please try again later.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEFT COLUMN: Authority & Info --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-10 sticky top-24"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let's build something <br />
              <span className="text-slate-400">that performs.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-4">
              I partner with businesses to architect, build, and scale high-performance digital platforms. 
              Fill out the form to request a strategy call.
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Availability</h3>
                <p className="text-slate-600 mt-1">Currently accepting new projects for Q2. Expect a response within 24-48 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Direct Contact</h3>
                <div className="mt-2 flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-700">{email}</span>
                  <button
                    onClick={handleCopy}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition flex items-center gap-1.5 px-2 py-1 rounded hover:bg-blue-50"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "COPIED" : "COPY"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof / Links */}
          <div className="pt-8 border-t border-slate-200 flex gap-6">
            <a href="https://linkedin.com/in/dhakalsaurav11" target="_blank" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              LinkedIn ↗
            </a>
            <a href="https://github.com/dhakalsaurav11" target="_blank" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: The Intake Form --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Project Inquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field */}
              <input type="text" name="company_site" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Company / Organization</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="company"
                    placeholder="What is your business name?"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">How can I help you?</label>
                <select 
                  name="service" 
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none"
                >
                  <option value="" disabled selected>Select a primary focus...</option>
                  <option value="new_build">New Platform Build</option>
                  <option value="redesign">Website Redesign & Migration</option>
                  <option value="automation">System Automation & Architecture</option>
                  <option value="consulting">Technical Consulting / Audit</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Project Details & Goals</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your current bottleneck and what you want to achieve..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full group relative flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Submitting...
                      </motion.span>
                    ) : submitted ? (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 flex items-center gap-2">
                        <Check className="w-5 h-5" /> Request Sent
                      </motion.span>
                    ) : (
                      <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}