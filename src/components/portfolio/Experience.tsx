import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { EXPERIENCE } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        eyebrow="Journey"
        title="Development Journey"
        subtitle="My learning path as a student developer — building skills through real projects."
      />

      <div className="relative ml-4 border-l-2 border-blue-100 pl-8">
        {EXPERIENCE.map((item, i) => (
          <div key={item.title} className="relative pb-12 last:pb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-50" />
            </span>

            {/* Period */}
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-blue-600">
              {item.period}
            </p>

            {/* Title */}
            <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>

            {/* Description */}
            <p className="max-w-xl text-sm leading-relaxed text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
