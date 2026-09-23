"use client";

import { useState } from "react";
import { PremiumHero } from "@/components/sections/premium-home/PremiumHero";
import { PremiumExpertise } from "@/components/sections/premium-home/PremiumExpertise";
import { PremiumMethod } from "@/components/sections/premium-home/PremiumMethod";
import { PremiumVideo } from "@/components/sections/premium-home/PremiumVideo";
import { PremiumReviews } from "@/components/sections/premium-home/PremiumReviews";
import { PremiumFaq } from "@/components/sections/premium-home/PremiumFaq";
import { PremiumBriefDialog } from "@/components/sections/premium-home/PremiumBriefDialog";
import { Footer } from "@/components/sections/Footer";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";

export default function Home() {
  // Activer les animations du nouveau design
  usePremiumAnimations();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openBriefDialog() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <main>
        {/* Nouveau Hero avec animation JS */}
        <PremiumHero onCtaClick={openBriefDialog} />
        
        {/* Nouvelle section Vidéo */}
        <PremiumVideo />
        
        {/* Nouvelles Expertises (Sites, Mobile, Outils) */}
        <PremiumExpertise />
        
        {/* Nouvelle Méthode & À Propos (Maximilien) */}
        <PremiumMethod />
        
        {/* Nouveaux Avis Clients défilants */}
        <PremiumReviews />
        
        {/* Nouvelle FAQ */}
        <div style={{ marginTop: "80px", marginBottom: "80px" }}>
          <PremiumFaq />
        </div>
        
      </main>
      <Footer />
      
      {/* Le Popup Brief (Maquette Gratuite) */}
      <PremiumBriefDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
