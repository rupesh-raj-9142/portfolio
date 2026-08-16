import { PERSONAL, NAV_ITEMS } from "@/data/portfolio-data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                {PERSONAL.initials}
              </span>
              <span className="text-lg font-bold text-gray-900">{PERSONAL.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-gray-500">{PERSONAL.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="flex items-center gap-1 text-xs text-gray-400">
            © 2026 {PERSONAL.name}. Built with
            <Heart size={12} className="text-red-400" fill="currentColor" />
            and React.
          </p>
          <p className="text-xs text-gray-400">
            Designed & Developed by {PERSONAL.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
