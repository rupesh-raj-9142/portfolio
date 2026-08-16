import { Github, Linkedin, Mail, ArrowRight, Download, Code2, Database, Cpu, Globe } from "lucide-react";
import { PERSONAL } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/50 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-50/60 blur-[100px]"
      />

      <div className="section-container relative py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
              style={{ animationDelay: "0s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Open to Internship Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm{" "}
              <span className="text-blue-600">{PERSONAL.name}.</span>
            </h1>

            {/* Subheading */}
            <h2
              className="animate-fade-up text-xl font-semibold text-blue-600 sm:text-2xl"
              style={{ animationDelay: "0.2s" }}
            >
              {PERSONAL.title}
            </h2>

            {/* Description */}
            <p
              className="animate-fade-up max-w-lg text-lg leading-relaxed text-gray-500"
              style={{ animationDelay: "0.3s" }}
            >
              {PERSONAL.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-up flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:scale-[0.97]"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={PERSONAL.resumeUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-[0.97]"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="animate-fade-up flex items-center gap-4 pt-2"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Connect
              </span>
              <div className="h-px w-8 bg-gray-200" />
              <div className="flex gap-2">
                {[
                  { icon: Github, href: PERSONAL.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className="animate-fade-up relative flex items-center justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Floating tech icons */}
            <div className="absolute -left-4 top-8 animate-float z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg" style={{ animationDelay: "0s" }}>
              <Code2 size={20} className="text-blue-600" />
            </div>
            <div className="absolute -right-2 top-16 animate-float z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg" style={{ animationDelay: "1.5s" }}>
              <Database size={18} className="text-blue-500" />
            </div>
            <div className="absolute bottom-12 -left-2 animate-float z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg" style={{ animationDelay: "3s" }}>
              <Cpu size={18} className="text-blue-500" />
            </div>
            <div className="absolute -right-4 bottom-20 animate-float z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg" style={{ animationDelay: "2s" }}>
              <Globe size={20} className="text-blue-600" />
            </div>

            {/* Profile Image Container */}
            <div className="relative w-full max-w-[420px]">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 rotate-3 scale-[1.02]" />
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-xl">
                <img
                  src={PERSONAL.profileImage}
                  alt={`${PERSONAL.name} — ${PERSONAL.title}`}
                  loading="eager"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
