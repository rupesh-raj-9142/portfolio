import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { SKILLS } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" alternate>
      <SectionTitle
        eyebrow="Skills"
        title="Skills & Technologies"
        subtitle="Technologies I work with and continue to learn."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-blue-100 hover:shadow-md"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
