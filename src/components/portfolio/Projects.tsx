import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { PROJECTS } from "@/data/portfolio-data";
import { ArrowUpRight, Github, ExternalLink, Star } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Projects I've built while learning, experimenting and solving real-world problems."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${
              project.featured
                ? "border-blue-200 shadow-lg md:col-span-2 md:grid md:grid-cols-2"
                : "border-gray-100 shadow-sm"
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                <Star size={12} fill="currentColor" />
                Featured
              </div>
            )}

            {/* Image */}
            <div
              className={`relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50 ${
                project.featured ? "h-full min-h-[240px]" : "h-52"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback for missing images
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="flex h-full w-full flex-col items-center justify-center gap-3 p-8">
                      <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                      </div>
                      <span class="text-sm font-medium text-gray-400">${project.title}</span>
                    </div>`;
                  }
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6">
              {/* Category */}
              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {project.category}
              </span>

              {/* Title */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                />
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>

              {/* Features (if any) */}
              {project.features.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-500"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-gray-100 bg-white px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.liveDemo !== "#" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
                {project.caseStudy && (
                  <a
                    href="#case-study"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-50"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All */}
      <div className="mt-12 text-center">
        <a
          href={PROJECTS[0]?.github ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          View All Projects
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </SectionWrapper>
  );
}
