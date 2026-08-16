import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { CERTIFICATIONS } from "@/data/portfolio-data";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle eyebrow="Certifications" title="Certifications" />

      {CERTIFICATIONS.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-blue-100 hover:shadow-sm"
            >
              <Award size={18} className="shrink-0 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-8 text-center">
          <Award size={32} className="mx-auto mb-3 text-gray-300" />
          <p className="text-sm text-gray-400">
            Certifications will be added here as I complete them.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
