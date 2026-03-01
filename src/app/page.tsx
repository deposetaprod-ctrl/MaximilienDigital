"use client";

import { useState } from "react";
import { useScrollPastHero } from "@/hooks/useScrollPastHero";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { ContactFormModal } from "@/components/ContactFormModal";
import { EstimationModal } from "@/components/EstimationModal";
import { ScrollNotificationPopup } from "@/components/ScrollNotificationPopup";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [estimationOpen, setEstimationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactInitialDescription, setContactInitialDescription] = useState<string | null>(null);
  const { heroRef, hasScrolledPast } = useScrollPastHero();

  function handleRequestContact(projectSummary: string) {
    setContactInitialDescription(projectSummary);
    setContactOpen(true);
  }

  return (
    <>
      <ThemeToggle />
      <main>
        <HeroSection heroRef={heroRef} onCtaClick={() => setEstimationOpen(true)} />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FinalCtaSection onCtaClick={() => setContactOpen(true)} />
      </main>
      <Footer />
      <EstimationModal
        open={estimationOpen}
        onOpenChange={setEstimationOpen}
        onRequestContact={handleRequestContact}
      />
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
