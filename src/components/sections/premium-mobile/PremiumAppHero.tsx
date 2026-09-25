import Image from "next/image";

export function PremiumAppHero() {
  return (
    <>
      <section className="landing-hero mobile-landing" aria-labelledby="page-title">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}>
          <div 
            onClick={() => typeof document !== 'undefined' && document.dispatchEvent(new CustomEvent('open-chatbot'))}
            style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
          >
            <Image 
              src="/cellequejeprefere_rounded.png" 
              alt="Maximilien, Développeur Freelance" 
              width={90}
              height={90}
              priority
              style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px', background: 'rgba(255, 255, 255, 0.03)', display: 'block' }} 
            />
            <span style={{ position: 'absolute', bottom: '4px', right: '4px', width: '18px', height: '18px', backgroundColor: '#ff702d', border: '3px solid #1a1412', borderRadius: '50%', boxShadow: '0 0 10px rgba(255, 112, 45, 0.5)' }}></span>
          </div>
        </div>
        <h1 id="page-title">
          Votre Application Mobile.<br />
          <span className="serif" style={{ color: '#ffbf3f' }}>Abordable et sur mesure.</span>
        </h1>
        
        <p className="lead" style={{ marginBottom: '35px', color: '#a3988e' }}>
          De votre idée au <strong>succès de votre projet</strong>, en passant par les stores.
        </p>


        <div className="stats-list reveal" style={{ position: 'relative', zIndex: 10, transitionDelay: '0.1s' }}>
          <div className="stats-list-item">
            <span style={{ color: '#ffbf3f' }}>✓&#xFE0E;</span> <b>En 30 jours</b> pour une première version
          </div>
          <div className="stats-list-item">
            <span style={{ color: '#ff702d' }}>★</span> <b>30+</b> projets livrés · <a href="https://comeup.com/fr/profil/maximilien-d" target="_blank" rel="noopener noreferrer" style={{ color: '#ffbf3f', textDecoration: 'underline', textUnderlineOffset: '2px', transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Top Service sur ComeUp</a>
          </div>
          <div className="stats-list-item">
            <span style={{ color: '#ffffff' }}>€</span> <b>À partir de 200 €</b> selon le projet
          </div>
        </div>
        <button className="button open-brief glow-effect" style={{ position: "relative", zIndex: 10 }}>
          Recevoir ma maquette gratuite <span>↗&#xFE0E;&#xFE0E;</span>
        </button>
        <button className="open-existing-mockup" type="button" style={{ display: "block", margin: "16px auto 0", background: "transparent", border: "none", color: "#bbaa99", textDecoration: "underline", fontSize: "13px", cursor: "pointer", transition: "color 0.2s", position: "relative", zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.color = "#ffbf3f"} onMouseOut={(e) => e.currentTarget.style.color = "#bbaa99"}>
          J&apos;ai déjà une maquette
        </button>
        <div className="mobile-stage">
          <Image
            className="app-render first"
            src="/286shots_so.png"
            alt="Even Clock : écran de suivi du poids"
            width={300}
            height={600}
            priority
            data-move="-1.6"
          />
          <Image
            className="app-render second"
            src="/641shots_so.png"
            alt="Even Clock : écran des graphiques"
            width={300}
            height={600}
            priority
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
          Illustrations d&apos;interfaces · Votre projet aura son propre design
        </div>
      </section>
      <div className="shell intro-bar">
        <span>Un produit pensé pour votre public.</span>
        <strong>Du premier croquis à la mise en ligne ↗&#xFE0E;</strong>
      </div>
    </>
  );
}
