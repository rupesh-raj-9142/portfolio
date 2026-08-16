import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { CASE_STUDY } from "@/data/portfolio-data";

export default function CaseStudy() {
  return (
    <SectionWrapper id="case-study" alternate>
      <SectionTitle
        eyebrow="Case Study"
        title={CASE_STUDY.title}
        subtitle="A deep dive into how this project was conceived, built, and what I learned from it."
      />

      <div className="space-y-8">
        {CASE_STUDY.sections.map((section) => (
          <div
            key={section.number}
            className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-sm md:p-8"
          >
            <div className="flex items-start gap-4 md:gap-6">
              {/* Number */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-mono text-sm font-bold text-blue-600">
                {section.number}
              </span>

              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{section.heading}</h3>

                {"body" in section && section.body && (
                  <p className="text-sm leading-relaxed text-gray-500">{section.body}</p>
                )}

                {"items" in section && section.items && (
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
