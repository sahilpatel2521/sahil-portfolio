import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { EngineeringImpact } from "@/components/sections/EngineeringImpact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AppGallery } from "@/components/apps/AppGallery";
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

      {/* 01. QUANTIFIABLE RESULTS */}
      <EngineeringImpact />

      {/* 02. FEATURED CASE STUDIES */}
      <FeaturedProjects />

      {/* 03. RELEASED APPLICATIONS GALLERY */}
      <AppGallery />

      {/* 04. TECHNICAL APPROACH */}
      <TechnicalApproach />

      {/* 05. OPEN-SOURCE CONTRIBUTIONS */}
      <OpenSourceSection />

      {/* 06. EXPERIENCE TIMELINE */}
      <ExperienceSection />

      {/* 07. EDUCATION */}
      <EducationSection />

      {/* 08. CONTACT PREVIEW */}
      <ContactPreview />
    </div>
  );
}
