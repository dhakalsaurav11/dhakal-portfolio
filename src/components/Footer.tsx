import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#EAEAEA] bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-3 max-w-sm">
            <div className="text-sm font-semibold text-[#111111]">Saurav Dhakal</div>
            <p className="text-sm text-[#787774] leading-relaxed">
              Systems engineer building high-performance digital infrastructure
              for businesses that prioritize measurable growth.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-3">
              <h4 className="text-xs font-medium text-[#787774] uppercase tracking-[0.08em]">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-[#2F3437] hover:text-[#111111] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-[#2F3437] hover:text-[#111111] transition-colors duration-200">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#2F3437] hover:text-[#111111] transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-medium text-[#787774] uppercase tracking-[0.08em]">Elsewhere</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/dhakalsaurav11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F3437] hover:text-[#111111] transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/dhakalsaurav11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F3437] hover:text-[#111111] transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#787774]">
            &copy; {new Date().getFullYear()} Dhakal Consulting
          </p>
          <div className="flex items-center gap-2 text-xs text-[#346538] bg-[#EDF3EC] px-3 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
            Accepting new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
