import { HERO_STATS } from "@/data/portfolio-data";
import { GraduationCap, CalendarDays, FolderKanban, Sparkles } from "lucide-react";

const STAT_ICONS = [GraduationCap, CalendarDays, FolderKanban, Sparkles];

export default function HeroStats() {
  return (
    <section className="relative z-10 border-y border-gray-100 bg-gray-50/50 py-6">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {HERO_STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i]!;
            return (
              <div
                key={stat.value}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-blue-100 hover:shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
