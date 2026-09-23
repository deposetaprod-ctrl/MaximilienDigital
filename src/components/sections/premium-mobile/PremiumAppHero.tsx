export function PremiumAppHero() {
  return (
    <>
      <section className="landing-hero mobile-landing" aria-labelledby="page-title">
        <div className="eyebrow">
          <span className="dot"></span>Applications iOS & Android sur mesure
        </div>
        <h1 id="page-title">
          Votre idée.<br />Dans leurs <span className="serif">mains.</span>
        </h1>
        <p className="lead">
          Une application que l’on aime ouvrir.<br />Je vous accompagne du premier écran à la publication sur l’App Store et Google Play.
        </p>
        <button className="button open-brief" style={{ position: "relative", zIndex: 10 }}>
          Recevoir ma maquette gratuite <span>↗&#xFE0E;&#xFE0E;</span>
        </button>
        <div className="hero-assurances">
          <span>iOS & Android</span>
          <span>Accompagnement à la publication</span>
          <span>Code source livré</span>
        </div>
        <div className="mobile-stage">
          <img
            className="app-render first"
            src="/286shots_so.png"
            alt="Even Clock : écran de suivi du poids"
            data-move="-1.6"
          />
          <img
            className="app-render second"
            src="/641shots_so.png"
            alt="Even Clock : écran des graphiques"
            data-move="1.6"
          />
          <div className="floating-chip" data-move="-2.5">
            <small>DESIGN + DÉVELOPPEMENT</small>Du beau. Et du fonctionnel.
          </div>
          <div className="floating-chip right" data-move="2.5">
            <small>LANCEMENT SUR LES STORES</small>Votre application en ligne
          </div>
        </div>
        <div className="small-caption">
          Illustrations d'interfaces · Votre projet aura son propre design
        </div>
      </section>
      <div className="shell intro-bar">
        <span>Un produit pensé pour votre public.</span>
        <strong>Du premier croquis à la mise en ligne ↗&#xFE0E;</strong>
      </div>
    </>
  );
}
