"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function FormationClient() {
  return (
    <>
      <main>
        <section className="hero" style={{ minHeight: "auto", paddingBottom: "60px" }}>
          <div className="eyebrow">
            <span className="dot"></span>Formation
          </div>
          
          <h1>
            Si vous voulez apprendre,<br />
            <span className="serif">réalisez vous-même</span> votre projet d'application.
          </h1>

          <p className="hero-intro">
            Je t'apprends tout pour développer ta propre application. 
            Les outils à installer, les bonnes pratiques, comment développer 
            des applications qui rapportent et des applications qui convertissent. 
            Des applications avec un beau design.
          </p>
        </section>

        <div className="shell">
          <section className="contact" style={{ borderRadius: "30px", margin: "0 auto 100px", maxWidth: "900px", border: "1px solid #4b3528" }}>
            <div className="eyebrow">Prêt à vous lancer ?</div>
            
            <p style={{ marginTop: "30px", marginBottom: "0", fontSize: "16px" }}>Me contacter :</p>
            <h2 style={{ fontSize: "clamp(45px, 7vw, 90px)", marginTop: "10px", marginBottom: "40px", color: "var(--lime)", fontWeight: 500, letterSpacing: "-2px" }}>
              07 66 07 47 46
            </h2>

            <a href="tel:+33766074746" className="button">
              M'appeler maintenant <span className="arrow">↗&#xFE0E;</span>
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
