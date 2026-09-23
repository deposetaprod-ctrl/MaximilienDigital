"use client";

import { usePremiumAnimations } from "@/hooks/usePremiumAnimations";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { PremiumAppHero } from "@/components/sections/premium-mobile/PremiumAppHero";
import { PremiumAppBenefits } from "@/components/sections/premium-mobile/PremiumAppBenefits";
import { PremiumAppCase } from "@/components/sections/premium-mobile/PremiumAppCase";
import { PremiumAppMethod } from "@/components/sections/premium-mobile/PremiumAppMethod";
import { PremiumAppFaq } from "@/components/sections/premium-mobile/PremiumAppFaq";
import { PremiumReviews } from "@/components/sections/premium-home/PremiumReviews";

export default function MobileAppClient() {
  usePremiumAnimations();

  return (
    <div data-project-type="Application mobile iOS / Android">
      <Navigation />
      <main>
        <PremiumAppHero />
        <PremiumAppBenefits />
        <PremiumAppCase />
        <PremiumAppMethod />
        <PremiumReviews />
        <PremiumAppFaq />
        
        <div className="shell">
          <div className="crosslink">
            <p>Un service accessible par un simple lien serait plus adapté ?</p>
            <a href="/application-web-sur-mesure">Explorer les solutions web ↗</a>
          </div>
        </div>
        
        <section className="contact" id="contact">
          <div className="eyebrow">Une idée suffit pour commencer</div>
          <h2>Bientôt dans<br /><span className="serif">leurs mains.</span></h2>
          <p>Donnons une première forme à votre application.</p>
          <button className="button open-brief">
            Recevoir ma maquette gratuite <span>↗</span>
          </button>
          <p className="contact-note">Un premier aperçu gratuit, sans engagement.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
