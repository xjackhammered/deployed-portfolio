const ROLES = [
  {
    period: "Apr 2026 — Jul 2026",
    role: "Software Developer",
    company: "DMA Technologies Ltd.",
    location: "Bangladesh",
    tag: "IoT Backend",
    current: true,
    bullets: [
      "Developed backend services using Django and Django REST Framework for IoT-based monitoring systems.",
      "Implemented real-time device communication using MQTT and integrated IoT sensor data with backend services.",
      "Built background processing workflows using Celery and Redis for asynchronous backend operations.",
      "Worked with Linux-based production environments, backend infrastructure, and deployment workflows.",
      "Developed and integrated an AI-powered chatbot as part of the company's software systems.",
    ],
    stack: ["Django", "DRF", "MQTT", "Celery", "Redis", "Linux"],
  },
  {
    period: "Jan 2026 — Mar 2026",
    role: "AI Backend Developer",
    company: "Beuptech Agency (Betopia Group)",
    location: "Bangladesh",
    tag: "AI Backend",
    bullets: [
      "Developed AI-enabled backend systems using Django and FastAPI for production-oriented applications.",
      "Integrated AI and machine learning models into backend services and application workflows.",
      "Built and worked with Retrieval-Augmented Generation (RAG) systems and API-based AI services.",
      "Worked with authentication, databases, REST APIs, and backend integrations across multiple projects.",
    ],
    stack: ["Python", "Django", "FastAPI", "AI / ML", "RAG"],
  },
  {
    period: "Apr 2025 — Aug 2025",
    role: "Software Development Intern",
    company: "DataSoft Systems Ltd.",
    location: "Bangladesh",
    tag: "Internship",
    bullets: [
      "Worked as part of the Django development team on backend software development and maintenance.",
      "Contributed to backend development for the Remit365 platform while working within an established software development team.",
      "Gained practical experience with professional software development workflows, version control, and collaborative backend development.",
    ],
    stack: ["Django", "Python", "Backend", "Git"],
  },
];

export default function Experience() {
  return (
    <div className="w-full px-4 md:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Track Record
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-text tracking-tight">
            Experience
          </h1>
          <p className="text-muted max-w-2xl">
            Software engineering roles across companies in Bangladesh,
            spanning backend systems and applied AI.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7.5rem] md:left-48 top-2 bottom-2 w-px bg-line hidden md:block" />
          <div className="flex flex-col gap-8">
            {ROLES.map((job) => (
              <div
                key={job.company}
                className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start"
              >
                <div className="md:w-48 shrink-0 flex flex-col md:items-end md:text-right pt-1 md:pr-6">
                  <span className="text-sm font-semibold text-text">
                    {job.period}
                  </span>
                  <span className="font-mono text-xs text-subtle">
                    {job.location}
                  </span>
                </div>

                <div className="hidden md:block absolute left-48 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-canvas border-2 border-primary" />

                <div className="flex-1 w-full rounded-lg border border-line bg-surface p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-text">
                        {job.role}
                      </h3>
                      <div className="text-secondary text-sm font-medium">
                        {job.company}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-2 border border-line text-xs text-muted self-start">
                      {job.tag}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 text-sm text-muted leading-relaxed">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary shrink-0">+</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-line/60">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-canvas border border-line text-xs text-subtle font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
