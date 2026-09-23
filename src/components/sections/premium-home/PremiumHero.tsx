export function PremiumHero({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow">
          <span className="dot"></span>Développeur indépendant · Créateur de produits
        </div>
        <h1 id="hero-title">
          Votre idée.<br />
          <span className="serif">En grand.</span>
        </h1>
        <p className="hero-intro">
          Sites web, applications, outils métier.<br />Je transforme vos idées en produits qui vivent.
        </p>
        <button className="button premium-open-brief" onClick={onCtaClick}>
          Recevoir ma maquette gratuite <span className="arrow">↗&#xFE0E;&#xFE0E;</span>
        </button>
        <p className="fine">Gratuite. Sans engagement. Pour visualiser votre projet.</p>
        
        <div className="stage" aria-label="Illustrations d’interfaces : tableau de bord, application mobile et livraison" role="img">
          <span className="float-label">Pensé pour vous. Et vos utilisateurs.</span>
          <div className="mock desktop" data-move="-0.12">
            <div className="browser">
              <i></i><i></i><i></i><small>votre-projet.app</small>
            </div>
            <div className="dash">
              <aside className="sidebar">
                <div className="sidebrand">studio<span style={{color: "#ff702d"}}>.</span></div>
                <p className="active">◈ &nbsp; Vue d’ensemble</p>
                <p>▤ &nbsp; Mes projets</p>
                <p>◉ &nbsp; Mes clients</p>
                <p>▥ &nbsp; Documents</p>
                <p>⚙ &nbsp; Paramètres</p>
              </aside>
              <div className="dash-main">
                <div className="dash-top">
                  <b>Tout est à sa place.</b><span>+ Nouveau projet</span>
                </div>
                <p>Votre activité, en un coup d’œil.</p>
                <div className="metrics">
                  <div className="metric"><small>Projets en cours</small><b>12</b><em>+3 ce mois</em></div>
                  <div className="metric"><small>Tâches terminées</small><b>84</b><em>↗&#xFE0E; 24 %</em></div>
                  <div className="metric"><small>Temps gagné</small><b>18 h</b></div>
                </div>
                <small style={{fontSize: "9px"}}>Votre activité</small>
                <div className="chart">
                  <i style={{height: "22%"}}></i><i style={{height: "37%"}}></i><i style={{height: "30%"}}></i>
                  <i style={{height: "48%"}}></i><i style={{height: "41%"}}></i><i style={{height: "58%"}}></i>
                  <i style={{height: "50%"}}></i><i style={{height: "67%"}}></i><i style={{height: "72%"}}></i>
                  <i style={{height: "66%"}}></i><i style={{height: "83%"}}></i><i style={{height: "95%"}}></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mock phone" data-move="0.2">
            <div className="phone-inside">
              <div className="notch"></div>
              <div className="phone-label"><b>mood.</b><span>☰</span></div>
              <h3>Un peu plus<br />de vous.</h3>
              <div className="orb"></div>
              <div className="phone-bottom"><span>Votre espace personnel</span><b>↗&#xFE0E;&#xFE0E;</b></div>
            </div>
          </div>
          
          <div className="mock note" data-move="-0.24">
            <small>De l’idée au lancement</small>
            <strong>C’est en ligne.</strong>
            <div className="note-line"><span className="tick">✓&#xFE0E;&#xFE0E;</span> Votre produit. Vos règles.</div>
          </div>
        </div>
        
        <div className="stage-foot">
          <span>Design + Développement + Accompagnement</span><span>Explorer la suite ↓</span>
        </div>
      </section>

      <div className="marquee" aria-label="Sites web, applications mobiles, SaaS, outils métier et automatisation">
        <div className="marquee-track" aria-hidden="true">
          <span>SITES WEB <i>✳&#xFE0E;&#xFE0E;</i> APPLICATIONS MOBILES <i>✳&#xFE0E;&#xFE0E;</i> SAAS <i>✳&#xFE0E;&#xFE0E;</i> OUTILS MÉTIER <i>✳&#xFE0E;&#xFE0E;</i> AUTOMATISATION <i>✳&#xFE0E;&#xFE0E;</i></span>
          <span>SITES WEB <i>✳&#xFE0E;&#xFE0E;</i> APPLICATIONS MOBILES <i>✳&#xFE0E;&#xFE0E;</i> SAAS <i>✳&#xFE0E;&#xFE0E;</i> OUTILS MÉTIER <i>✳&#xFE0E;&#xFE0E;</i> AUTOMATISATION <i>✳&#xFE0E;&#xFE0E;</i></span>
        </div>
      </div>

      <div className="shell">
        <section className="intro reveal">
          <div className="eyebrow" style={{alignSelf: "start"}}>01 / Du concret, simplement</div>
          <div>
            <h2>Moins de complexité.<br />Plus de <span>possibilités.</span></h2>
            <p>Vous avez une idée, un besoin, un processus à simplifier. Je conçois le bon outil, avec vous. Du premier écran à la mise en ligne.</p>
            <a className="text-link" href="#expertises">Trouver votre solution <span>↘</span></a>
          </div>
        </section>
      </div>
    </>
  );
}
