"use client";

import { useState } from "react";
import { PremiumHero } from "@/components/sections/premium-home/PremiumHero";
import dynamic from "next/dynamic";

const PremiumVideo = dynamic(() => import("@/components/sections/premium-home/PremiumVideo").then((mod) => mod.PremiumVideo), { ssr: true });
const PremiumExpertise = dynamic(() => import("@/components/sections/premium-home/PremiumExpertise").then((mod) => mod.PremiumExpertise), { ssr: true });
const PremiumMethod = dynamic(() => import("@/components/sections/premium-home/PremiumMethod").then((mod) => mod.PremiumMethod), { ssr: true });
const PremiumReviews = dynamic(() => import("@/components/sections/premium-home/PremiumReviews").then((mod) => mod.PremiumReviews), { ssr: true });
const PremiumFaq = dynamic(() => import("@/components/sections/premium-home/PremiumFaq").then((mod) => mod.PremiumFaq), { ssr: true });

import { Footer } from "@/components/sections/Footer";
import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";

export default function Home() {
  // Activer les animations du nouveau design
  usePremiumAnimations();



  return (
    <>
      <main>
        {/* Nouveau Hero avec animation JS */}
        <PremiumHero />
        
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

    </>
  );
}
