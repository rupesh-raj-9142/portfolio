import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { EDUCATION } from "@/data/portfolio-data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education" alternate>
      <SectionTitle eyebrow="Education" title="Education" />

      <div className="max-w-2xl">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
              <GraduationCap size={24} className="text-blue-600" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm font-medium text-gray-500">{EDUCATION.university}</p>
              <p className="mt-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-600">
                {EDUCATION.year}
              </p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Relevant Subjects
                </p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
