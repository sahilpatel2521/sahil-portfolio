import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { education } from "@/data/experience";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 06. ACADEMIC CREDENTIALS"
          title="Education"
          subtitle="Formal foundation in Information Technology, computer networking, systems design, and software architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-elevated border border-border-subtle p-6 sm:p-7 shadow-elevation flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-silver-dark font-mono text-xs">
                    <GraduationCap className="h-4 w-4 text-signal-red" />
                    <span>CREDENTIAL #{idx + 1}</span>
                  </div>
                  <span className="font-mono text-xs text-silver-dark flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-silver-dark" />
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-primary">
                  {item.degree}
                </h3>

                <p className="font-mono text-xs text-silver mt-1">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="font-mono text-[11px] text-silver-dark mt-0.5 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </p>
                )}

                <p className="mt-4 text-xs sm:text-sm text-muted font-body leading-relaxed pt-3 border-t border-border-subtle">
                  <span className="text-silver-muted font-semibold block font-mono text-[10px] uppercase mb-1">
                    CURRICULAR EMPHASIS:
                  </span>
                  {item.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] text-silver-dark">
                <span>VERIFIED DEGREE</span>
                <span className="text-emerald-400">COMPLETED</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
