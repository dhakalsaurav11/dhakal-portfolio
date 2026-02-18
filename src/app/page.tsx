'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Layers, Zap, Code2, Cpu, Globe } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function ConsultingHome() {
  const [counts, setCounts] = useState({ sites: 0, visitors: 0, automation: 0 });

  // Counter Logic
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const interval = 16;
    const steps = duration / interval;

    const timer = setInterval(() => {
      start++;
      const progress = start / steps;
      const ease = 1 - Math.pow(1 - progress, 3); 
      
      setCounts({
        sites: Math.min(Math.floor(ease * 6), 6),
        visitors: Math.min(Math.floor(ease * 1000), 1000),
        automation: Math.min(Math.floor(ease * 30), 30),
      });

      if (start >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"/>
            Available for Q2 Projects
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
            Stop Building Websites. <br />
            <span className="text-slate-400">Start Engineering Growth.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg text-slate-600 max-w-lg leading-relaxed border-l-2 border-slate-200 pl-6">
            I don’t just write code. I build <strong>high-performance digital infrastructure</strong> designed to capture leads, automate workflows, and scale your revenue.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-2">
            <a href="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:w-full sm:hover:w-auto">
              <span className="mr-2">Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/projects" className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              View Case Studies
            </a>
          </motion.div>
        </motion.div>

        {/* Dashboard Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-3xl transform rotate-3 scale-95 opacity-60 -z-10" />
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Performance Metrics</h3>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-slate-400 mb-1"><Layers className="w-5 h-5"/></div>
                <div className="text-4xl font-bold text-slate-900">{counts.sites}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Enterprise Deploys</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-slate-400 mb-1"><BarChart3 className="w-5 h-5"/></div>
                <div className="text-4xl font-bold text-slate-900">{counts.visitors.toLocaleString()}+</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Monthly Traffic</div>
              </div>
            </div>
            <div className="p-5 bg-slate-900 rounded-xl text-white flex items-center justify-between shadow-lg">
              <div>
                <div className="text-sm text-slate-400">Workflow Efficiency</div>
                <div className="text-3xl font-bold text-emerald-400">+{counts.automation}%</div>
              </div>
              <Zap className="w-8 h-8 text-emerald-400 opacity-80" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- TRUSTED INDUSTRIES --- */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500 whitespace-nowrap">Trusted by industry leaders in:</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-bold text-slate-400 tracking-tight">FINTECH</span>
            <span className="text-lg font-bold text-slate-400 tracking-tight">HEALTHCARE</span>
            <span className="text-lg font-bold text-slate-400 tracking-tight">E-COMMERCE</span>
            <span className="text-lg font-bold text-slate-400 tracking-tight">SAAS</span>
          </div>
        </div>
      </section>

      {/* --- TECH STACK SECTION (New Addition) --- */}
      <section className="border-b border-slate-200 bg-slate-50/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Label */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600" />
                Technology Stack
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Platform-agnostic engineering. I use the right tool for the scale of the problem.
              </p>
            </div>

            {/* The Logos / Grid */}
            <div className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-6 items-center md:justify-end opacity-80">
              {/* Platforms */}
              <div className="flex items-center gap-6 pr-6 md:border-r border-slate-300">
                <span className="text-lg font-bold text-slate-700 font-serif">WordPress</span>
                <span className="text-lg font-extrabold text-slate-800 tracking-tighter">wix</span>
                <span className="text-lg font-medium text-slate-800 italic font-mono">squarespace</span>
                <span className="text-lg font-bold text-emerald-700">shopify</span>
              </div>
              
              {/* Engineering */}
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                   <Globe className="w-4 h-4 text-blue-500" /> React
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                   <Cpu className="w-4 h-4 text-amber-500" /> Node.js
                </span>
                <span className="text-sm font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">TS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- THE METHODOLOGY --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Engineering Methodology</h2>
          <p className="text-slate-600 max-w-2xl text-lg">Most agencies deliver a template. I deliver a system. Here is how we bridge the gap between design and ROI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Diagnosis & Strategy",
              desc: "We don't guess. We audit your current bottlenecks, analyze competitor gaps, and architect a sitemap focused on conversion.",
            },
            {
              step: "02",
              title: "High-Fidelity Build",
              desc: "Development using Next.js and modern frameworks. No bloat. Just pixel-perfect code optimized for Core Web Vitals.",
            },
            {
              step: "03",
              title: "Scale & Automate",
              desc: "Implementation of CRM hooks, automated email flows, and analytics dashboards so you can measure every dollar.",
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors mb-6">{item.step}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SELECTED WORK --- */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Selected Case Studies
              </h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Real businesses. Real systems. Measurable impact.
              </p>
            </div>
            <a 
              href="/projects" 
              className="text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors"
            >
              View All Projects →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3] hover:shadow-2xl hover:shadow-blue-900/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Author Platform • Next.js</div>
                <h3 className="text-2xl font-bold mb-3 text-white">John J. Berger</h3>
                <p className="text-slate-300 text-sm opacity-100 transition-opacity duration-300 leading-relaxed">
                  Designed and engineered a high-credibility author platform with optimized performance, clear information hierarchy, and strong conversion flow.
                </p>
              </div>
            </div>

             <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 aspect-[4/3] hover:shadow-2xl hover:shadow-blue-900/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">Professional Brand • SEO Optimization</div>
                <h3 className="text-2xl font-bold mb-3 text-white">David K. Dunaway</h3>
                <p className="text-slate-300 text-sm opacity-100 transition-opacity duration-300 leading-relaxed">
                  Rebuilt digital presence with improved navigation, stronger content clarity, and enhanced search visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-slate-900">Ready to build an asset, not just a website?</h2>
        <p className="text-lg text-slate-600">I take on a limited number of consulting projects per quarter to ensure deep focus and results.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25">
            Start Your Project
          </a>
          <a href="mailto:dhakalsaurav11@gmail.com" className="px-8 py-4 rounded-md font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition">
            dhakalsaurav11@gmail.com
          </a>
        </div>
      </section>

    </div>
  );
}