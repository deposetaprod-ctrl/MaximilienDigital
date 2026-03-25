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
import { QuickContactModal } from "@/components/QuickContactModal";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export default function Home() {
  const [estimationOpen, setEstimationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [contactInitialDescription, setContactInitialDescription] = useState<string | null>(null);
  const { heroRef, hasScrolledPast } = useScrollPastHero();

  function handleRequestContact(projectSummary: string, _developer: string) {
    setContactInitialDescription(projectSummary);
    setContactOpen(true);
  }

  return (
    <>
      <main>
        <HeroSection 
          heroRef={heroRef} 
          onCtaClick={() => setEstimationOpen(true)} 
        />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FinalCtaSection onCtaClick={() => setQuickContactOpen(true)} />
      </main>
      <Footer />
      <EstimationModal
        open={estimationOpen}
        onOpenChange={setEstimationOpen}
        onRequestContact={handleRequestContact}
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
