import Link from "next/link";

export function PremiumExpertise() {
  return (
    <section className="services" id="expertises" aria-labelledby="services-title">
      <div className="services-sticky">
        <div className="shell" style={{ width: "100%" }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">02 / Sur mesure. Vraiment.</div>
              <h2 id="services-title">Votre ambition.<br />Le bon format.</h2>
            </div>
            <span className="scroll-hint">Trois façons de faire avancer votre projet &nbsp; →</span>
          </div>
        </div>
        <div className="track">
          <article className="service purple">
            <div className="service-top">
              <small>01 — Sites & applications web</small><span>↗&#xFE0E;&#xFE0E;</span>
            </div>
            <div className="mini-web" aria-hidden="true">
              <small>MAISON & MATIÈRE &nbsp; · &nbsp; COLLECTION</small>
              <h4>Le beau.<br />À l’essentiel.</h4>
              <div className="bar"></div>
              <div className="art"></div>
            </div>
            <div className="service-copy">
              <h3>Faites vivre<br />votre activité.</h3>
              <p>Site vitrine, plateforme, SaaS ou espace client : le web au service de votre projet.</p>
              <Link className="service-link" href="/application-web-sur-mesure">
                Découvrir les solutions web <span>↗&#xFE0E;&#xFE0E;</span>
              </Link>
            </div>
          </article>
          <article className="service lime">
            <div className="service-top">
              <small>02 — Applications mobiles</small><span>↗&#xFE0E;&#xFE0E;</span>
            </div>
            <div className="stack-app" aria-hidden="true">
              <strong>Bonjour, vous.</strong>
              <p>Une belle journée pour avancer.</p>
              <div>◈ &nbsp; Votre projet prend vie</div>
              <div>✓&#xFE0E; &nbsp; Tout est synchronisé</div>
            </div>
            <div className="service-copy">
              <h3>Votre idée,<br />dans leurs mains.</h3>
              <p>Une application iOS et Android, de la première maquette à la publication sur les stores.</p>
              <Link className="service-link" href="/application-mobile">
                Découvrir les apps mobiles <span>↗&#xFE0E;&#xFE0E;</span>
              </Link>
            </div>
          </article>
          <article className="service white">
            <div className="service-top">
              <small>03 — Outils métier & automatisations</small><span>↗&#xFE0E;&#xFE0E;</span>
            </div>
            <div className="workflow" aria-hidden="true">
              <div>▤ &nbsp; Nouveau document</div>
              <div>✳&#xFE0E; &nbsp; Traitement automatique</div>
            </div>
            <div className="service-copy">
              <h3>Moins de tâches.<br />Plus de temps.</h3>
              <p>Gestion interne, agents IA et connexions API : un outil adapté à votre façon de travailler.</p>
              <Link className="service-link" href="/application-web-sur-mesure#outils-metier">
                Explorer les outils métier <span>↗&#xFE0E;&#xFE0E;</span>
              </Link>
            </div>
          </article>
        </div>
        <div className="progress" aria-hidden="true"><i></i></div>
      </div>
    </section>
  );
}
