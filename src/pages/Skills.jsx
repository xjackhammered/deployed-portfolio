import { Code2, Server, Database, TerminalSquare } from "lucide-react";

const GROUP_ICONS = {
  code: Code2,
  dns: Server,
  storage: Database,
  terminal: TerminalSquare,
};

const LEVEL_STYLES = {
  Expert: "bg-primary/10 text-primary border-primary/30",
  Advanced: "bg-secondary/10 text-secondary border-secondary/30",
  Proficient: "bg-surface-2 text-muted border-line",
};

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "code",
    items: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "C#", level: "Proficient" },
      { name: "Bash / Shell", level: "Advanced" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "dns",
    items: [
      { name: "Django", level: "Expert" },
      { name: "Django REST Framework", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "REST API Design", level: "Expert" },
      { name: "ASP.NET Core", level: "Proficient" },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: "storage",
    items: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Linux / Unix", level: "Expert" },
      { name: "Nginx", level: "Proficient" },
    ],
  },
  {
    title: "Tools & Frontend",
    icon: "terminal",
    items: [
      { name: "React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "Celery", level: "Advanced" },
      { name: "Git / GitHub", level: "Expert" },
      { name: "CI / CD", level: "Proficient" },
      { name: "AWS", level: "Proficient" },
    ],
  },
];

const AI_ML = [
  "Retrieval-Augmented Generation (RAG)",
  "LLM API integration",
  "XGBoost / model selection",
  "MQTT (IoT messaging)",
  "Blockchain (Hyperledger, IPFS)",
];

function SkillPill({ name, level }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-line/60 last:border-b-0">
      <span className="text-sm text-text">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="w-full px-4 md:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Technical Capabilities
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-text tracking-tight">
            Stack & Skills
          </h1>
          <p className="text-muted max-w-2xl">
            The languages, frameworks, and infrastructure tools I use to
            design, build, and ship backend systems and AI-powered
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {SKILL_GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.icon];
            return (
              <div
                key={group.title}
                className="rounded-lg border border-line bg-surface flex flex-col hover:border-primary/30 transition-colors"
              >
                <div className="h-11 border-b border-line bg-surface-2 flex items-center justify-between px-4 rounded-t-lg">
                  <span className="text-sm font-semibold text-text">
                    {group.title}
                  </span>
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="p-4">
                  {group.items.map((item) => (
                    <SkillPill key={item.name} {...item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg border border-line bg-surface">
          <div className="h-11 border-b border-line bg-surface-2 flex items-center px-4 rounded-t-lg">
            <span className="text-sm font-semibold text-text">
              AI / ML & Additional Modules
            </span>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {AI_ML.map((mod) => (
              <span
                key={mod}
                className="px-3 py-1.5 rounded border border-line bg-canvas text-xs text-muted hover:text-primary hover:border-primary/40 transition-colors"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
