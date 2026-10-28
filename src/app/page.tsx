import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { EngineeringImpact } from "@/components/sections/EngineeringImpact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechnicalApproach } from "@/components/sections/TechnicalApproach";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-20">
      {/* CINEMATIC HERO SEQUENCE */}
      <HeroSection />

      {/* 01. ENGINEERING IMPACT */}
      <EngineeringImpact />

      {/* 02. FEATURED CASE STUDIES */}
      <FeaturedProjects />

      {/* 03. TECHNICAL APPROACH */}
      <TechnicalApproach />

      {/* 04. OPEN-SOURCE CONTRIBUTIONS */}
      <OpenSourceSection />

      {/* 05. EXPERIENCE TIMELINE */}
      <ExperienceSection />

      {/* 06. EDUCATION */}
      <EducationSection />

      {/* 07. CONTACT PREVIEW */}
      <ContactPreview />
    </div>
  );
}
