export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-canvas">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-text font-medium text-xs">
              Available for opportunities
            </span>
          </span>
          <span className="hidden sm:inline text-line-strong">•</span>
          <span className="font-mono text-xs">Dhaka, Bangladesh (UTC+6)</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>© {new Date().getFullYear()} Fardeen Ameen Pranto</span>
          <a
            className="hover:text-primary transition-colors"
            href="https://github.com/xjackhammered"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://bd.linkedin.com/in/fardeen-pranto-a34214246"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
