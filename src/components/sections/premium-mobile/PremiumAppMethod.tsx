export function PremiumAppMethod() {
  return (
    <>
      <section className="capabilities shell" id="fonctionnalites">
        <div className="cap-head reveal">
          <div className="eyebrow">Les bons détails font la différence</div>
          <h2>
            Tout ce dont votre<br />projet a <span className="serif">besoin.</span>
          </h2>
          <p>
            Des fonctionnalités choisies pour votre usage.<br />Et connectées
            pour fonctionner ensemble.
          </p>
        </div>
        <div className="cap-grid">
          <article className="cap-item reveal">
            <span className="cap-num">01</span>
            <h3>Paiements & abonnements</h3>
            <p>
              Encaissements, offres récurrentes et suivi des paiements avec
              Stripe ou d’autres solutions de paiement.
            </p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">02</span>
            <h3>Agents IA</h3>
            <p>
              Assistance, analyse de documents et automatisation des tâches.
            </p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">03</span>
            <h3>Emails, SMS & notifications</h3>
            <p>Confirmation, rappel et suivi, au bon moment.</p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">04</span>
            <h3>Connexions API</h3>
            <p>Vos outils et vos données communiquent entre eux.</p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">05</span>
            <h3>Comptes & espaces clients</h3>
            <p>Des accès adaptés à chaque utilisateur et à chaque équipe.</p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">06</span>
            <h3>Protection des données</h3>
            <p>Sécurité, gestion des accès et prise en compte du RGPD.</p>
          </article>
        </div>
      </section>

      <div className="shell">
        <section className="about" id="apropos">
          <div className="portrait-box reveal" style={{ borderRadius: '24px' }}>
            <img
              src="/maximilien-portrait.png"
              alt="Maximilien, développeur web freelance et entrepreneur"
              loading="lazy"
              style={{ borderRadius: '24px' }}
            />
            <div className="portrait-caption">
              <div>
                <b>Maximilien</b><small>Développeur web fullstack & freelance</small>
              </div>
              <span>↗&#xFE0E;&#xFE0E;</span>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">03 / La personne derrière le produit</div>
            <h2>
              Un développeur Web.<br />Et un vrai<br /><span className="serif">partenaire.</span>
            </h2>
            <p>
              En tant que <strong>développeur web fullstack</strong> et <strong>freelance</strong>, je m’intéresse autant à votre projet qu’à son code. On échange directement, on fait les bons choix techniques, et on avance ensemble.
            </p>
            <p>
              Mon objectif : un produit utile, simple à utiliser et prêt pour la
              suite.
            </p>
            <div className="tags">
              <span>Freelance · disponible</span>
              <span>Développeur fullstack</span>
              <span>Une vision entrepreneuriale</span>
            </div>
            <a 
              href="https://comeup.com/fr/service/382688/developper-votre-application-mobile-ou-web-sur-mesure" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "30px",
                background: "rgba(255, 191, 63, 0.1)",
                border: "1px solid rgba(255, 191, 63, 0.2)",
                color: "#ffbf3f",
                textDecoration: "none",
                marginTop: "25px",
                fontSize: "13px",
                fontWeight: "600",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 191, 63, 0.2)";
                e.currentTarget.style.borderColor = "rgba(255, 191, 63, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 191, 63, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 191, 63, 0.2)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffbf3f" stroke="#ffbf3f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Top Service sur ComeUp — Voir d'autres avis
            </a>
          </div>
        </section>
      </div>

      <section className="method" id="methode">
        <div className="shell">
          <div className="eyebrow">04 / Une idée claire de la suite</div>
          <h2 className="reveal">
            De votre idée<br />à leur <span style={{ color: "var(--lime)" }}>écran.</span>
          </h2>
          <div className="steps">
            <article className="step reveal">
              <small>01 / MAQUETTE</small>
              <h3>Vous vous projetez.</h3>
              <p>On définit vos besoins et on valide ensemble les écrans avant tout développement.</p>
            </article>
            <article className="step reveal">
              <small>02 / MINIMUM VIABLE PRODUCT (MVP)</small>
              <h3>L'essentiel d'abord.</h3>
              <p>On développe rapidement une première version fonctionnelle pour tester votre idée sur le marché.</p>
            </article>
            <article className="step reveal">
              <small>03 / PRODUIT</small>
              <h3>Ça prend vie.</h3>
              <p>L'application s'enrichit de nouvelles fonctionnalités selon les retours de vos utilisateurs.</p>
            </article>
            <article className="step reveal">
              <small>04 / LANCEMENT</small>
              <h3>À vous de jouer.</h3>
              <p>Votre produit est publié sur les stores (iOS/Android) et livré avec son code source. Vous en êtes 100% propriétaire.</p>
            </article>
            <article className="step reveal">
              <small>05 / AMÉLIORATION CONTINUE</small>
              <h3>Évolution sur mesure.</h3>
              <p>On ajuste et on fait évoluer l'application ensemble pour toujours mieux répondre à vos besoins.</p>
            </article>
            <article className="step reveal">
              <small>06 / ACQUISITION & DATA</small>
              <h3>Attirer et comprendre.</h3>
              <p>Stratégie d'acquisition (ASO/SEO), campagnes ciblées et analyse du comportement des utilisateurs.</p>
            </article>
          </div>
          <div className="ownership">
            <span>Votre application vous appartient. Vous gardez la main.</span>
            <b>100 % votre projet. ↗&#xFE0E;</b>
          </div>
        </div>
      </section>
    </>
  );
}
