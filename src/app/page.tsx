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
import { ScrollNotificationPopup } from "@/components/ScrollNotificationPopup";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const { heroRef, hasScrolledPast } = useScrollPastHero();

  const openModal = () => setModalOpen(true);

  return (
    <>
      <ThemeToggle />
      <main>
        <HeroSection heroRef={heroRef} onCtaClick={openModal} />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FinalCtaSection onCtaClick={openModal} />
      </main>
      <Footer />
      <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
      <ScrollNotificationPopup visible={hasScrolledPast} onCtaClick={openModal} />
    </>
  );
}
