"use client";

import { useState, useRef } from "react";
import { useScrollPastHero } from "@/hooks/useScrollPastHero";
import { HeroDynamicForm } from "@/components/sections/HeroDynamicForm";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { BioSection } from "@/components/sections/BioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { ContactFormModal } from "@/components/ContactFormModal";
import { ProjectFunnelModal } from "@/components/ProjectFunnelModal";
import { ScrollNotificationPopup } from "@/components/ScrollNotificationPopup";
import { QuickContactModal } from "@/components/QuickContactModal";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export default function Home() {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [contactInitialDescription, setContactInitialDescription] = useState<string | null>(null);
  const { heroRef, hasScrolledPast } = useScrollPastHero();

  const restOfSiteRef = useRef<HTMLDivElement>(null);

  function scrollToRestOfSite() {
    restOfSiteRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleRequestContact(projectSummary: string, _developer: string) {
    setContactInitialDescription(projectSummary);
    setContactOpen(true);
  }

  return (
    <>
      <main>
        <HeroDynamicForm onScrollDown={scrollToRestOfSite} />
        
        <div ref={restOfSiteRef}>
          <TeamCarousel />
          <HeroSection 
            heroRef={heroRef} 
            onCtaClick={() => setFunnelOpen(true)} 
          />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <BioSection />
          <FinalCtaSection onCtaClick={() => setQuickContactOpen(true)} />
        </div>
      </main>
      <Footer />
      <ProjectFunnelModal
        open={funnelOpen}
        onOpenChange={setFunnelOpen}
      />
      <QuickContactModal open={quickContactOpen} onOpenChange={setQuickContactOpen} />
      <ContactFormModal
        open={contactOpen}
        onOpenChange={(open) => {
          setContactOpen(open);
          if (!open) setContactInitialDescription(null);
        }}
        initialDescription={contactInitialDescription ?? undefined}
      />
      <ScrollNotificationPopup visible={hasScrolledPast} onCtaClick={() => setContactOpen(true)} />
    </>
  );
}
