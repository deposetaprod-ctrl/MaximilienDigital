"use client";

import { useState } from "react";
import { PremiumWebHero } from "@/components/sections/premium-webapp/PremiumWebHero";
import { PremiumWebFormats } from "@/components/sections/premium-webapp/PremiumWebFormats";
import { PremiumWebEditorial } from "@/components/sections/premium-webapp/PremiumWebEditorial";
import { PremiumMethod } from "@/components/sections/premium-home/PremiumMethod";
import { PremiumReviews } from "@/components/sections/premium-home/PremiumReviews";
import { PremiumFaq } from "@/components/sections/premium-home/PremiumFaq";
import { PremiumVideo } from "@/components/sections/premium-home/PremiumVideo";

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
        <PremiumVideo />
        <PremiumWebFormats />
        <PremiumWebEditorial />
        <PremiumMethod />
        <PremiumReviews />
        <PremiumFaq />
        
        {/* CTA Final */}
        <section className="contact" id="contact">
          <div className="eyebrow">Une idée suffit pour commencer</div>
          <h2>Parlons de<br /><span className="serif">votre projet.</span></h2>
          <p>Donnons une première forme à votre idée.</p>
          <button className="button open-brief glow-effect">
            Recevoir ma maquette gratuite <span>↗&#xFE0E;&#xFE0E;</span>
          </button>
          <p className="contact-note">Un premier aperçu gratuit, sans engagement.</p>
        </section>
      </main>
      
      {/* Footer standard qui s'intègre bien au design */}
      <Footer />


    </>
  );
}
