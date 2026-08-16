import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { ACHIEVEMENTS, ACHIEVEMENT_CATEGORIES } from "@/data/portfolio-data";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" alternate>
      <SectionTitle
        eyebrow="Activities"
        title="Achievements & Activities"
      />

      {ACHIEVEMENTS.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-blue-100 hover:shadow-sm"
            >
              <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {a.category}
              </span>
              <h3 className="mb-1 text-sm font-bold text-gray-900">{a.title}</h3>
              <p className="text-xs text-gray-500">{a.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white/50 p-8">
          <div className="flex items-start gap-4">
            <Trophy size={28} className="shrink-0 text-gray-300" />
            <div>
              <p className="mb-4 text-sm text-gray-400">
                Achievements and activities will be showcased here. Currently exploring opportunities in:
              </p>
              <div className="flex flex-wrap gap-2">
                {ACHIEVEMENT_CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
