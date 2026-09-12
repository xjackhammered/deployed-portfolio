import { useState } from "react";
import { Mail, MessageCircle, MapPin, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

const CONTACT_CHANNELS = [
  {
    id: "email",
    label: "Email",
    value: "fardeenpranto7@gmail.com",
    href: "mailto:fardeenpranto7@gmail.com",
    Icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/fardeen-pranto-a34214246",
    href: "https://bd.linkedin.com/in/fardeen-pranto-a34214246",
    Icon: LinkedinIcon,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/xjackhammered",
    href: "https://github.com/xjackhammered",
    Icon: GithubIcon,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+880 1751-810506",
    href: "https://wa.me/8801751810506",
    Icon: MessageCircle,
  },
];

const ENGAGEMENT_OPTIONS = [
  "Full-Time Opportunity",
  "Backend or AI Project Collaboration",
  "Freelance / Contract Work",
  "Just Saying Hi",
];

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    scope: ENGAGEMENT_OPTIONS[0],
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${form.scope}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— From: ${form.email || "(no email provided)"}`
    );
    window.location.href = `mailto:fardeenpranto7@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="w-full px-4 md:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: identity & channels */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">
              Get In Touch
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-text tracking-tight">
              Let's build something
            </h1>
          </div>
          <p className="text-muted leading-relaxed max-w-lg">
            Currently taking on select backend architecture projects, AI
            integrations, and full-time engineering opportunities. Reach out
            directly through any channel below, or send a message using the
            form.
          </p>

          <div className="flex flex-col gap-2.5">
            {CONTACT_CHANNELS.map(({ id, label, value, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-line bg-surface p-4 hover:border-primary/40 transition-colors"
              >
                <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="flex-1 min-w-0 flex flex-col">
                  <span className="text-xs text-subtle">{label}</span>
                  <span className="text-sm text-text font-medium truncate">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="shrink-0 text-subtle opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all"
                  size={18}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-muted">
            <MapPin size={16} className="text-primary shrink-0" />
            <span>
              <span className="text-text font-medium">
                Dhaka, Bangladesh
              </span>{" "}
              (UTC+6) &bull; Remote work available
            </span>
          </div>
        </div>

        {/* Right: message form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-line bg-surface p-6 lg:p-8 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between pb-2 border-b border-line">
              <span className="text-lg font-semibold text-text">
                Send a Message
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-2 text-secondary text-xs font-medium">
                Opens your email app
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-subtle font-medium">
                Your Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                placeholder="you@example.com"
                className="w-full h-11 px-3 rounded bg-canvas border border-line text-text text-sm placeholder:text-subtle focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-subtle font-medium">
                What's this about?
              </label>
              <select
                value={form.scope}
                onChange={(e) =>
                  setForm((f) => ({ ...f, scope: e.target.value }))
                }
                className="w-full h-11 px-3 rounded bg-canvas border border-line text-text text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {ENGAGEMENT_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-subtle font-medium">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell me a bit about your project, role, or timeline..."
                className="w-full p-3 rounded bg-canvas border border-line text-text text-sm placeholder:text-subtle focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded bg-primary text-on-primary text-sm font-semibold hover:brightness-110 hover:shadow-glow-sm transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
