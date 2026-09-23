"use client";

export function PremiumWebHero() {
  

  return (
    <>
      <section className="landing-hero web-landing" aria-labelledby="page-title">
        <div className="eyebrow reveal">
          <span className="dot"></span>Sites · Applications web · SaaS
        </div>
        <h1 id="page-title" className="reveal">
          Votre projet.<br />À portée de <span className="serif">clic.</span>
        </h1>
        <p className="lead reveal">
          Un site qui vous ressemble. Une application qui vous simplifie la vie. Je crée votre solution web sur mesure.
        </p>
        <button className="button open-brief reveal">
          Recevoir ma maquette gratuite <span>↗&#xFE0E;&#xFE0E;</span>
        </button>
        <div className="hero-assurances reveal">
          <span>Design sur mesure</span>
          <span>Ordinateur, tablette et mobile</span>
          <span>Code source livré</span>
        </div>
        
        <div className="stage reveal" aria-label="Illustrations d’interfaces : tableau de bord, application mobile et livraison" role="img">
          <span className="float-label">Pensé pour vous. Et vos utilisateurs.</span>
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
