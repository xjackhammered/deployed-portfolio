import { Download } from "lucide-react";

export default function About() {
  return (
    <div className="w-full px-4 md:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            About
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-text tracking-tight">
            Fardeen Ameen Pranto
          </h1>
          <p className="text-muted">
            Software Engineer — Backend Systems &amp; AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main bio */}
          <div className="lg:col-span-8 rounded-lg border border-line bg-surface overflow-hidden">
            <div className="h-10 border-b border-line bg-surface-2 flex items-center px-4">
              <span className="font-mono text-xs text-subtle">
                ~/about/profile.md
              </span>
            </div>
            <div className="p-6 lg:p-8 flex flex-col gap-6">
              <div>
                <span className="block mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  Who I am
                </span>
                <p className="text-muted leading-relaxed">
                  I'm a Software Engineer focused on building reliable
                  backend systems and APIs. My primary experience is with
                  Python, Django, Django REST Framework, FastAPI,
                  PostgreSQL, Redis, Celery, Docker, and Linux.
                </p>
              </div>
              <div>
                <span className="block mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  What I build
                </span>
                <p className="text-muted leading-relaxed">
                  I've worked on production applications involving REST
                  APIs, authentication and authorization, database-driven
                  systems, third-party API integrations, background
                  processing, and IoT platforms. I've also built
                  AI-powered applications, including RAG-based systems,
                  and enjoy turning complex requirements into practical
                  software.
                </p>
              </div>
              <div>
                <span className="block mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  What I'm working towards
                </span>
                <p className="text-muted leading-relaxed">
                  I'm continuously strengthening my backend and system
                  design fundamentals while exploring AI engineering,
                  distributed systems, and production infrastructure. I
                  enjoy building projects end-to-end — from designing the
                  API and database to deploying and maintaining the
                  application.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-lg border border-line bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-subtle border-b border-line pb-3 mb-4">
                Quick Facts
              </div>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  ["Primary Stack", "Python / Django"],
                  ["API Layer", "DRF / FastAPI"],
                  ["Database", "PostgreSQL / MySQL"],
                  ["Infrastructure", "Linux / Docker"],
                  ["Async Processing", "Redis / Celery"],
                  ["Focus", "Backend & AI"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center gap-3"
                  >
                    <span className="text-muted">{label}</span>
                    <span className="text-text font-medium text-right font-mono text-xs">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/resume.pdf"
                download="Fardeen_Ameen_Pranto_Resume.pdf"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded bg-primary text-on-primary text-sm font-semibold py-2.5 hover:brightness-110 hover:shadow-glow-sm transition-all"
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>

            <div className="rounded-lg border border-line bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-subtle border-b border-line pb-3 mb-4">
                Currently
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Working across backend and AI engineering roles in
                Bangladesh — shipping production IoT backends,
                e-commerce platforms, and AI-assisted applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
