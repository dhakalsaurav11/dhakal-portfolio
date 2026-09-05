'use client';

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const metrics = [
  { value: "6", label: "Platforms shipped" },
  { value: "1,000+", label: "Monthly visitors served" },
  { value: "30%", label: "Workflow efficiency gained" },
];

const methodology = [
  {
    step: "01",
    title: "Diagnosis",
    description:
      "Audit existing bottlenecks, analyze competitor gaps, and architect a sitemap focused on conversion paths.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Development with modern frameworks. Pixel-perfect code optimized for Core Web Vitals and search visibility.",
  },
  {
    step: "03",
    title: "Scale",
    description:
      "CRM integrations, automated workflows, and analytics dashboards so every decision is backed by data.",
  },
];

const caseStudies = [
  {
    label: "Author platform",
    title: "John J. Berger",
    description:
      "Consolidated decades of climate research into a searchable, media-rich authority platform for journalists and publishers.",
  },
  {
    label: "Brand headquarters",
    title: "David K. Dunaway",
    description:
      "Unified fragmented revenue streams into a single high-authority digital headquarters with direct-to-consumer sales.",
  },
];

export default function HomePage() {
  const [counts, setCounts] = useState({ sites: 0, visitors: 0, automation: 0 });

  useEffect(() => {
    let frame = 0;
    const duration = 1500;
    const interval = 16;
    const steps = duration / interval;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        sites: Math.min(Math.floor(ease * 6), 6),
        visitors: Math.min(Math.floor(ease * 1000), 1000),
        automation: Math.min(Math.floor(ease * 30), 30),
      });

      if (frame >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#FBFBFA]">

      {/* Hero */}
      <section className="relative pt-24 pb-28 px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[#E0E0E0] text-[#787774] text-xs font-medium tracking-[0.04em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-6xl tracking-tighter leading-[1.08] font-semibold text-[#111111]">
              Engineering digital
              <br className="hidden md:block" />
              {" "}<span className="text-[#787774]">infrastructure</span> that
              <br className="hidden md:block" />
              {" "}compounds growth
            </h1>

            <p className="text-lg text-[#787774] max-w-lg leading-relaxed tracking-[-0.01em]">
              I build high-performance platforms designed to capture leads,
              automate workflows, and scale revenue for growth-focused businesses.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[#111111] text-white text-sm font-semibold px-8 border border-[#111111] hover:bg-transparent hover:text-[#111111] transition-colors duration-200 active:scale-[0.98]"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center border border-[#E0E0E0] bg-white text-[#2F3437] text-sm font-medium px-8 hover:border-[#111111] transition-colors duration-200"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <img
              src="/hero-bg.png"
              alt="Architect workspace with wireframe blueprint, mechanical pencil, and espresso on a light ash desk"
              width={640}
              height={360}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="border-y border-[#E0E0E0]">
        <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-[#111111] tracking-tight tabular-nums">
                  {i === 0 && counts.sites}
                  {i === 1 && `${counts.visitors.toLocaleString()}+`}
                  {i === 2 && `${counts.automation}%`}
                </div>
                <div className="text-xs text-[#787774] mt-1.5 uppercase tracking-[0.06em] font-medium">
                  {m.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="border-b border-[#E0E0E0] bg-white">
        <div className="max-w-5xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#787774] uppercase tracking-[0.06em] font-medium whitespace-nowrap">
            Technology stack
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#787774]">
            <span className="font-medium text-[#2F3437]">Next.js</span>
            <span className="text-[#E0E0E0]">/</span>
            <span className="font-medium text-[#2F3437]">React</span>
            <span className="text-[#E0E0E0]">/</span>
            <span className="font-medium text-[#2F3437]">TypeScript</span>
            <span className="text-[#E0E0E0]">/</span>
            <span className="font-medium text-[#2F3437]">Node.js</span>
            <span className="text-[#E0E0E0]">/</span>
            <span className="font-medium text-[#2F3437]">WordPress</span>
            <span className="text-[#E0E0E0]">/</span>
            <span className="font-medium text-[#2F3437]">Shopify</span>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl text-[#111111] tracking-tighter font-semibold mb-4">
                How I work
              </h2>
              <p className="text-[#787774] text-lg max-w-xl tracking-[-0.01em]">
                A focused process that bridges marketing objectives and
                engineering reality.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-px bg-[#E0E0E0] overflow-hidden border border-[#E0E0E0]">
            {methodology.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white p-8 md:p-10 h-full flex flex-col">
                  <span className="text-xs font-mono text-[#787774] tracking-[0.06em] uppercase">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-[#111111] tracking-[-0.02em] mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#787774] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-28 px-8 bg-white border-y border-[#E0E0E0]">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl text-[#111111] tracking-tighter font-semibold mb-3">
                  Selected work
                </h2>
                <p className="text-[#787774] text-lg max-w-md tracking-[-0.01em]">
                  Real platforms built for real businesses with measurable outcomes.
                </p>
              </div>
              <Link
                href="/projects"
                className="text-sm font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#787774] hover:border-[#787774] transition-colors duration-200"
              >
                View all work
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-px bg-[#E0E0E0] overflow-hidden border border-[#E0E0E0]">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-[#FBFBFA] p-8 md:p-10 h-full flex flex-col group cursor-default">
                  <span className="text-xs font-mono text-[#787774] tracking-[0.06em] uppercase mb-6">
                    {study.label}
                  </span>
                  <h3 className="text-xl font-semibold text-[#111111] tracking-[-0.02em] mb-3 group-hover:text-[#555555] transition-colors duration-200">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[#787774] leading-relaxed flex-grow">
                    {study.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[#111111] tracking-tighter font-semibold mb-4">
              Ready to build an asset, not just a website?
            </h2>
            <p className="text-[#787774] text-lg mb-10 max-w-md mx-auto tracking-[-0.01em]">
              I take on a limited number of consulting projects per quarter to
              ensure deep focus and results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center bg-[#111111] text-white px-8 text-sm font-semibold border border-[#111111] hover:bg-transparent hover:text-[#111111] transition-colors duration-200 active:scale-[0.98]"
              >
                Start a Project
              </Link>
              <a
                href="mailto:dhakalsaurav11@gmail.com"
                className="inline-flex h-12 items-center justify-center border border-[#E0E0E0] bg-white text-[#2F3437] px-8 text-sm font-medium hover:border-[#111111] transition-colors duration-200"
              >
                dhakalsaurav11@gmail.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
