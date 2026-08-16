import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { ABOUT } from "@/data/portfolio-data";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle eyebrow="About" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Bio */}
        <div className="space-y-5">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-gray-500">
              {p}
            </p>
          ))}
        </div>

        {/* Currently Exploring */}
        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Currently Exploring
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {ABOUT.exploring.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
