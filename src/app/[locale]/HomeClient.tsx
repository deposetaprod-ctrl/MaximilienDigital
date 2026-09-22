"use client";

import { useState, useRef } from "react";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { FounderSection } from "@/components/sections/FounderSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { FaqSection } from "@/components/sections/FaqSection";

import { AiPoweredSection } from "@/components/sections/AiPoweredSection";

export default function Home() {
  const restOfSiteRef = useRef<HTMLDivElement>(null);

  function scrollToRestOfSite() {
    restOfSiteRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <main>
        <HeroDynamicForm onScrollDown={scrollToRestOfSite} />
        
        <AiPoweredSection onCtaClick={scrollToTop} />
        <FounderSection />
        
        <div ref={restOfSiteRef}>
          <TeamCarousel />
          <ServicesSection />
          <MethodologySection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection onCtaClick={scrollToRestOfSite} />
        </div>
      </main>
      <Footer />
    </>
  );
}
