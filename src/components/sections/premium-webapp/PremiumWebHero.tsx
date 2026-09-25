"use client";

import Image from "next/image";

export function PremiumWebHero() {
  

  return (
    <>
      <section className="landing-hero web-landing" aria-labelledby="page-title">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '28px' }}>
          <div 
            className="reveal" 
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
        <h1 id="page-title" className="reveal">
          Votre Application Web & SaaS.<br />
          <span className="serif" style={{ color: '#ffbf3f' }}>Abordable et sur mesure.</span>
        </h1>
        
        <p className="lead reveal" style={{ marginBottom: '35px', color: '#a3988e' }}>
          De votre idée au <strong>succès de votre projet</strong>. Conçu pour les besoins de vos utilisateurs.
        </p>


        <div className="stats-bar reveal" style={{ position: 'relative', zIndex: 10, transitionDelay: '0.1s' }}>
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#ffbf3f' }}>max 30 j</div>
            <div className="stat-label">pour une première version</div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#ff702d' }}>30+</div>
            <div className="stat-label">
              projets livrés · <a href="https://comeup.com/fr/profil/maximilien-d" target="_blank" rel="noopener noreferrer" style={{ color: '#ffbf3f', textDecoration: 'underline', textUnderlineOffset: '2px', transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Top Service sur ComeUp</a>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-value" style={{ color: '#ffffff' }}>200–5 000 €</div>
            <div className="stat-label">selon les besoins du projet</div>
          </div>
        </div>
        <button className="button open-brief reveal glow-effect">
          Recevoir ma maquette gratuite <span>↗&#xFE0E;&#xFE0E;</span>
        </button>
        <button className="open-existing-mockup reveal" type="button" style={{ display: "block", margin: "16px auto 0", background: "transparent", border: "none", color: "#bbaa99", textDecoration: "underline", fontSize: "13px", cursor: "pointer", transition: "color 0.2s", position: "relative", zIndex: 10 }} onMouseOver={(e) => e.currentTarget.style.color = "#ffbf3f"} onMouseOut={(e) => e.currentTarget.style.color = "#bbaa99"}>
          J&apos;ai déjà une maquette
        </button>
        
        <div className="stage" aria-label="Illustrations d’interfaces : tableau de bord, application mobile et livraison" role="img">

          <div className="mock desktop" data-move="-0.12">
            <div className="browser">
              <i></i><i></i><i></i><small>votre-projet.app</small>
            </div>
            <div className="dash">
              <aside className="sidebar">
                <div className="sidebrand">studio<span style={{ color: "#ff702d" }}>.</span></div>
                <p className="active">◈ &nbsp; Vue d’ensemble</p>
                <p>▤ &nbsp; Mes projets</p>
                <p>◉ &nbsp; Mes clients</p>
                <p>▥ &nbsp; Documents</p>
                <p>⚙ &nbsp; Paramètres</p>
              </aside>
              <div className="dash-main">
                <div className="dash-top">
                  <b>Tout est à sa place.</b>
                  <span>+ Nouveau projet</span>
                </div>
                <p>Votre activité, en un coup d’œil.</p>
                <div className="metrics">
                  <div className="metric">
                    <small>Projets en cours</small>
                    <b>12</b>
                    <em>+3 ce mois</em>
                  </div>
                  <div className="metric">
                    <small>Tâches terminées</small>
                    <b>84</b>
                    <em>↗&#xFE0E; 24 %</em>
                  </div>
                  <div className="metric">
                    <small>Temps gagné</small>
                    <b>18 h</b>
                  </div>
                </div>
                <small style={{ fontSize: "9px" }}>Votre activité</small>
                <div className="chart">
                  <i style={{ height: "22%" }}></i>
                  <i style={{ height: "37%" }}></i>
                  <i style={{ height: "30%" }}></i>
                  <i style={{ height: "48%" }}></i>
                  <i style={{ height: "41%" }}></i>
                  <i style={{ height: "58%" }}></i>
                  <i style={{ height: "50%" }}></i>
                  <i style={{ height: "67%" }}></i>
                  <i style={{ height: "72%" }}></i>
                  <i style={{ height: "66%" }}></i>
                  <i style={{ height: "83%" }}></i>
                  <i style={{ height: "95%" }}></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mock phone" data-move="0.2">
            <div className="phone-inside">
              <div className="notch"></div>
              <div className="phone-label">
                <b>mood.</b>
                <span>☰</span>
              </div>
              <h3>Un peu plus<br />de vous.</h3>
              <div className="orb"></div>
              <div className="phone-bottom">
                <span>Votre espace personnel</span>
                <b>↗&#xFE0E;&#xFE0E;</b>
              </div>
            </div>
          </div>
          
          <div className="mock note" data-move="-0.24">
            <small>De l’idée au lancement</small>
            <strong>C’est en ligne.</strong>
            <div className="note-line">
              <span className="tick">✓&#xFE0E;&#xFE0E;</span> Votre produit. Vos règles.
            </div>
          </div>
        </div>
        <div className="small-caption reveal">Illustrations d’interfaces · Votre projet aura son propre design</div>
      </section>
      
      <div className="shell intro-bar reveal">
        <span>Un interlocuteur, de l’idée à la mise en ligne.</span>
        <strong>Freelance · Design & développement ↗&#xFE0E;</strong>
      </div>
    </>
  );
}
