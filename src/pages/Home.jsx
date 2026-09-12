import { Link } from "react-router-dom";
import { ArrowRight, Mail, Server, Bot, Rocket } from "lucide-react";
import { GithubIcon } from "../components/icons";

const STATS = [
  {
    label: "Professional Roles",
    value: "3",
    subtext: "Software engineering roles",
  },
  {
    label: "Systems",
    value: "BACKEND",
    subtext: "APIs / Databases / Async Tasks",
  },
  {
    label: "Core Stack",
    value: "PYTHON",
    subtext: "Django / DRF / FastAPI",
  },
  {
    label: "Focus",
    value: "AI + PROD",
    subtext: "AI systems & deployment",
  },
];

const TERMINAL_LINES = [
  { prompt: true, text: "whoami" },
  { text: "fardeen@dhk ~ backend & ai engineer" },
  { prompt: true, text: "cat stack.json | jq .primary" },
  { text: '"Python, Django, DRF, FastAPI, PostgreSQL"' },
  { prompt: true, text: "./deploy.sh --env production" },
  { text: "Build complete. 0 errors. Ready.", ok: true },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden px-4 md:px-8 py-14 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-2 border border-line rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />

              <span className="font-mono text-xs text-secondary tracking-wide uppercase font-semibold">
                Open to backend & AI engineering roles
              </span>
            </div>

            <h1 className="font-sans text-display-mobile md:text-display text-text tracking-tight leading-tight">
              Building reliable{" "}
              <span className="text-primary">backend systems</span> and
              practical AI-powered applications.
            </h1>

            <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              I'm{" "}
              <span className="text-text font-medium">
                Fardeen Ameen Pranto
              </span>
              , a software engineer focused on{" "}
              <span className="text-text font-medium">
                Python, Django, and FastAPI
              </span>
              . I build REST APIs, IoT backends, and AI-driven applications —
              end to end, from database design to production deployment.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-primary text-on-primary text-sm font-semibold shadow-lg hover:brightness-110 hover:shadow-glow transition-all"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://github.com/xjackhammered"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-surface-2 border border-line text-text hover:border-primary/40 text-sm font-medium transition-all"
              >
                <GithubIcon size={16} className="text-primary" />
                GitHub
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-muted hover:text-text text-sm font-medium transition-colors"
              >
                <Mail size={18} className="text-amber" />
                Get in touch
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 text-muted font-mono text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Dhaka, Bangladesh (Remote-friendly)
              </span>

              <span className="text-line-strong">/</span>

              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Computer Science and Engineering graduate
              </span>
            </div>
          </div>

          {/* Right: Terminal cockpit */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-line bg-surface shadow-panel overflow-hidden">
              <div className="h-9 bg-surface-2 border-b border-line flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose/70" />
                  <span className="w-2 h-2 rounded-full bg-amber/70" />
                  <span className="w-2 h-2 rounded-full bg-secondary/70" />
                </div>

                <span className="font-mono text-xs text-subtle">
                  session — fardeen@dhk
                </span>
              </div>

              <div className="p-4 font-mono text-[13px] leading-relaxed">
                {TERMINAL_LINES.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.prompt
                        ? "text-text mt-2 first:mt-0"
                        : line.ok
                        ? "text-secondary"
                        : "text-muted"
                    }
                  >
                    {line.prompt && (
                      <span className="text-primary">$ </span>
                    )}

                    {line.text}
                  </div>
                ))}

                <div className="mt-2 flex items-center gap-1">
                  <span className="text-primary">$</span>

                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full px-4 md:px-8 pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-line bg-surface p-5 flex flex-col gap-1 hover:border-primary/30 transition-colors"
            >
              {/* Main value */}
              <span className="text-xl md:text-2xl font-bold text-text tabular-nums">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-xs uppercase tracking-wider text-subtle font-medium">
                {stat.label}
              </span>

              {/* Subtext */}
              {stat.subtext && (
                <span className="text-xs text-muted mt-1 leading-relaxed">
                  {stat.subtext}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="w-full px-4 md:px-8 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              What I Do
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold text-text tracking-tight">
              Backend engineering, applied AI, and shipped products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend & APIs */}
            <div className="rounded-lg border border-line bg-surface p-6 hover:border-primary/40 transition-colors">
              <Server size={24} className="text-primary" />

              <h3 className="text-lg font-semibold text-text mt-3">
                Backend & APIs
              </h3>

              <p className="text-sm text-muted mt-2 leading-relaxed">
                Django, Django REST Framework, and FastAPI services with
                authentication, background jobs, and production deployments
                on Linux.
              </p>
            </div>

            {/* Applied AI */}
            <div className="rounded-lg border border-line bg-surface p-6 hover:border-primary/40 transition-colors">
              <Bot size={24} className="text-secondary" />

              <h3 className="text-lg font-semibold text-text mt-3">
                Applied AI
              </h3>

              <p className="text-sm text-muted mt-2 leading-relaxed">
                RAG pipelines, LLM-backed chatbots, and ML model integration
                into real backend services and workflows.
              </p>
            </div>

            {/* Full-Stack Delivery */}
            <div className="rounded-lg border border-line bg-surface p-6 hover:border-primary/40 transition-colors">
              <Rocket size={24} className="text-amber" />

              <h3 className="text-lg font-semibold text-text mt-3">
                Full-Stack Delivery
              </h3>

              <p className="text-sm text-muted mt-2 leading-relaxed">
                From database schema and API design to a deployed React
                frontend — IoT platforms, e-commerce, and diagnostic systems
                shipped end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}