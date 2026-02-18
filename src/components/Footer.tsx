import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & Mission */}
        <div className="col-span-2 space-y-4">
          <div className="text-lg font-bold text-slate-900">Saurav Dhakal</div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
            Systems Engineer bridging the gap between marketing objectives and technical reality. 
            Building high-performance digital infrastructure for businesses that value growth.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/dhakalsaurav11" target="_blank" className="text-slate-400 hover:text-slate-900 transition"><Github size={20} /></a>
            <a href="https://linkedin.com/in/dhakalsaurav11" target="_blank" className="text-slate-400 hover:text-blue-700 transition"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Sitemap</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-600 transition">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Strategy Call</Link></li>
          </ul>
        </div>

        {/* Legal / Status */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Status</h4>
          <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Accepting Q2 Projects
          </div>
          <p className="text-xs text-slate-400 mt-4">
            © {new Date().getFullYear()} Dhakal Consulting<br />
          </p>
        </div>
      </div>
    </footer>
  );
} 