import { PERSONAL } from "@/data/portfolio-data";
import { Github, ArrowUpRight } from "lucide-react";

export default function GitHubCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-50 blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-900">
              <Github size={28} className="text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Building, Learning & Sharing
              </h2>
              <p className="mt-2 max-w-lg text-gray-500">
                I learn by building real projects, experimenting with new technologies and
                continuously improving my development skills.
              </p>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.97]"
            >
              View GitHub
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
