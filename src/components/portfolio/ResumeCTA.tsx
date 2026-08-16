import { PERSONAL } from "@/data/portfolio-data";
import { Download, Mail, ArrowRight } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-center shadow-2xl shadow-blue-600/20 md:p-16">
          {/* Decorative circles */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let's build something meaningful.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              I'm currently looking for internship opportunities where I can learn from
              experienced developers, contribute to real products and grow as a software
              developer.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PERSONAL.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 active:scale-[0.97]"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
              >
                Contact Me
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
