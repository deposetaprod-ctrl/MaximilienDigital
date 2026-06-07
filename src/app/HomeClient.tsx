"use client";

import { useState, useRef } from "react";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";

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
        
        <div ref={restOfSiteRef}>
          <TeamCarousel />
          <ServicesSection />
          <TestimonialsSection />
          <FinalCtaSection onCtaClick={scrollToRestOfSite} />
        </div>
      </main>
      <Footer />
    </>
  );
}
