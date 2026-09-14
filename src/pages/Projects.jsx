import { ExternalLink } from "lucide-react";

const STATUS_STYLES = {
  COMPLETED: "text-secondary",
  "IN DEVELOPMENT": "text-amber",
};

const PROJECTS = [
  {
    id: "ledger",
    title: "Ledger & Co",
    tag: "01 / E-Commerce Platform",
    desc: "Full-stack e-commerce platform featuring product management, administrative controls, user authentication, shopping workflows, and integrated Stripe and bKash payment processing. Deployed and live.",
    stack: ["Django", "DRF", "React", "Stripe", "bKash", "Redis"],
    status: "COMPLETED",
    liveUrl: "https://ecommerce.fardeen-pranto.online/",
    repos: [
      {
        label: "Backend Repo",
        url: "https://github.com/xjackhammered/Ecommerce-Backend",
      },
      {
        label: "Storefront Repo",
        url: "https://github.com/xjackhammered/ecommerce-storefront",
      },
    ],
    featured: true,
  },
  {
    id: "diabetes",
    title: "Diabetes Detection Tool",
    tag: "02 / ML / Healthcare",
    desc: "Machine learning tool for diabetes risk prediction, with a backend API serving the model and simple HTML for user input and results visualization.",
    stack: ["Python", "scikit-learn", "FastAPI", "React"],
    status: "COMPLETED",
    liveUrl: "https://diabetes.fardeen-pranto.online",
    repos: [ 
      {
        label: "Code repo",
        url: "https://github.com/xjackhammered/deployed-diabetes-detection"
      }, 
    ],
    featured: true,
  },
  {
    id: "twitter-lite",
    title: "Twitter Lite",
    tag: "03 / Social Platform",
    desc: "Full-stack social media platform demonstrating production-oriented backend engineering, authentication, relational data modeling, REST API design, background processing, and deployment.",
    stack: ["Django", "DRF", "React", "PostgreSQL", "JWT", "Celery"],
    status: "IN DEVELOPMENT",
    repository: "Private",
  },
  {
    id: "rag-chatbot",
    title: "RAG AI Chatbot",
    tag: "04 / Applied AI",
    desc: "Retrieval-Augmented Generation chatbot combining document retrieval with language model responses, designed around practical backend integration and deployment.",
    stack: ["Python", "FastAPI", "RAG", "Vector Search"],
    status: "IN DEVELOPMENT",
    repository: "Private",
  },
  {
    id: "quran-api",
    title: "Quran API",
    tag: "05 / Backend Platform",
    desc: "Backend platform for Quran-related services featuring authentication, audio processing, API integrations, user profiles, communities, leaderboards, and subscription functionality.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    status: "COMPLETED",
    repository: "Available on request",
  },
  {
    id: "media-shelf",
    title: "Digital Media Shelf",
    tag: "06 / Full-Stack App",
    desc: "Full-stack media management application with a Django backend and React frontend for organizing and managing digital media through a REST-based architecture.",
    stack: ["Django", "React", "REST API"],
    status: "COMPLETED",
    repository: "Available on request",
  },
  {
    id: "blockchain-ehr",
    title: "Blockchain EHR",
    tag: "07 / Healthcare / Blockchain",
    desc: "Blockchain-based electronic health record system designed around decentralized healthcare data management, role-based access control, and controlled access to patient information.",
    stack: ["Python", "Hyperledger", "IPFS", "RBAC"],
    status: "COMPLETED",
    repository: "Available on request",
  },
];

function StackTags({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-2 py-0.5 rounded bg-canvas border border-line text-xs text-muted"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="flex flex-col gap-2 pt-4">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded bg-primary text-on-primary text-sm font-semibold py-2.5 hover:brightness-110 hover:shadow-glow-sm transition-all"
        >
          View Live Deployment
          <ExternalLink size={16} />
        </a>
      )}
      {project.repos ? (
        <div className="flex flex-col sm:flex-row gap-2">
          {project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center rounded border border-line text-text text-sm font-medium py-2 hover:border-primary/40 hover:text-primary transition-colors"
            >
              {repo.label}
            </a>
          ))}
        </div>
      ) : (
        <span className="text-xs text-subtle font-mono">
          Repository: {project.repository}
        </span>
      )}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6 lg:p-8 mb-6 hover:border-primary/30 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="px-2.5 py-1 rounded bg-surface-2 border border-line text-primary text-xs font-semibold">
          {project.tag}
        </span>
        <span
          className={`flex items-center gap-1.5 text-xs font-medium ${STATUS_STYLES[project.status]}`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "COMPLETED" ? "bg-secondary" : "bg-amber"
            }`}
          />
          {project.status}
        </span>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-text mb-2">
        {project.title}
      </h2>
      <p className="text-muted leading-relaxed mb-4 max-w-3xl">
        {project.desc}
      </p>
      <StackTags stack={project.stack} />
      <div className="max-w-md">
        <ProjectActions project={project} />
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="w-full px-4 md:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Selected Systems
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-text tracking-tight">
            Projects
          </h1>
          <p className="text-muted max-w-2xl">
            A mix of backend platforms, AI-powered applications, and
            full-stack products — built end-to-end from database design to
            deployment.
          </p>
        </div>

        {/* Featured projects */}
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}

        {/* Remaining projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rest.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-line bg-surface p-6 flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-primary">
                  {project.tag}
                </span>
                <span
                  className={`flex items-center gap-1.5 text-[11px] font-medium ${STATUS_STYLES[project.status]}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "COMPLETED"
                        ? "bg-secondary"
                        : "bg-amber"
                    }`}
                  />
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>
              <StackTags stack={project.stack} />
              <ProjectActions project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}