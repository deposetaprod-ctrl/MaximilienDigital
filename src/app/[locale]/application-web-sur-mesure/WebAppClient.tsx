"use client";

import { useState } from "react";
import { PremiumWebHero } from "@/components/sections/premium-webapp/PremiumWebHero";
import { PremiumWebFormats } from "@/components/sections/premium-webapp/PremiumWebFormats";
import { PremiumWebEditorial } from "@/components/sections/premium-webapp/PremiumWebEditorial";
import { PremiumMethod } from "@/components/sections/premium-home/PremiumMethod";
import { PremiumReviews } from "@/components/sections/premium-home/PremiumReviews";
import { PremiumFaq } from "@/components/sections/premium-home/PremiumFaq";
import { PremiumBriefDialog } from "@/components/sections/premium-home/PremiumBriefDialog";
import { Footer } from "@/components/sections/Footer";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";

export default function WebAppClient() {
  // Activer les animations du nouveau design
  usePremiumAnimations();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <main>
        <PremiumWebHero />
        <PremiumWebFormats />
        <PremiumWebEditorial />
        <PremiumMethod />
        <PremiumReviews />
        <PremiumFaq />
      </main>
      
      {/* Footer standard qui s'intègre bien au design */}
      <Footer />

      {/* Pop-up de contact globale */}
      {isDialogOpen && (
        <PremiumBriefDialog onClose={() => setIsDialogOpen(false)} />
      )}
    </>
  );
}
