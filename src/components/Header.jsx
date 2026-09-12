import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Stack" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-canvas/80 backdrop-blur-xl border-b border-line">
      <div className="h-16 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded bg-surface-2 border border-line flex items-center justify-center shrink-0 text-primary font-mono font-bold text-sm">
            FP
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <NavLink
              to="/"
              className="font-semibold tracking-tight text-text truncate hover:text-primary transition-colors"
            >
              fardeen.dev
            </NavLink>
            <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-2 border border-line text-secondary text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Open to work
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-line p-1 rounded-lg">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-surface-2 text-primary"
                    : "text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-1 text-muted">
            <a
              className="p-1.5 hover:text-primary transition-colors flex items-center"
              href="https://github.com/xjackhammered"
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              className="p-1.5 hover:text-primary transition-colors flex items-center"
              href="https://bd.linkedin.com/in/fardeen-pranto-a34214246"
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
          <div className="h-4 w-px bg-line hidden sm:block" />
          <a
            href="/contact"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded bg-primary text-on-primary text-sm font-semibold hover:brightness-110 hover:shadow-glow-sm transition-all"
          >
            Let's talk
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded border border-line text-primary"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col border-t border-line bg-surface">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 border-b border-line last:border-b-0 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-surface-2"
                    : "text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
