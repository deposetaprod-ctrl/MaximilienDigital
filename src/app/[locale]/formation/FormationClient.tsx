"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { GraduationCap, Zap } from "lucide-react";

export default function FormationClient() {
  return (
    <>
      <main>
        <section className="hero" style={{ minHeight: "auto", paddingBottom: "60px" }}>
          <div className="eyebrow">
            <span className="dot"></span>HTML to App · Formation & Accompagnement
          </div>
          
          <h1>
            Transformez votre maquette<br />
            <span className="serif">en vraie application.</span>
          </h1>

          <p className="hero-intro" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
            Vous avez généré une maquette HTML avec une IA ou dessiné vos écrans sur Figma ? Concrétisons votre projet.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "50px" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "24px", maxWidth: "320px", textAlign: "left" }}>
              <div style={{ marginBottom: "12px" }}><GraduationCap size={28} color="var(--foreground)" strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "var(--foreground)" }}>Je vous forme</h3>
              <p style={{ fontSize: "14px", color: "var(--color-dim)", margin: 0, lineHeight: 1.5 }}>
                Je vous guide pas à pas pour développer, coder et publier votre propre application avec les bons outils (Next.js, Supabase, React Native).
              </p>
            </div>
            
            <div style={{ background: "rgba(189, 255, 0, 0.05)", border: "1px solid rgba(189, 255, 0, 0.2)", borderRadius: "20px", padding: "24px", maxWidth: "320px", textAlign: "left", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: "var(--lime)", filter: "blur(50px)", opacity: 0.2, borderRadius: "50%" }}></div>
              <div style={{ marginBottom: "12px", position: "relative", zIndex: 1 }}><Zap size={28} color="var(--lime)" fill="var(--lime)" strokeWidth={1.5} /></div>
              <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "var(--lime)", position: "relative", zIndex: 1 }}>Je la code pour vous</h3>
              <p style={{ fontSize: "14px", color: "var(--color-dim)", margin: 0, lineHeight: 1.5, position: "relative", zIndex: 1 }}>
                Vous préférez déléguer ? Je prends votre maquette et je la transforme en un véritable produit fonctionnel et prêt à être lancé.
              </p>
            </div>
          </div>
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
