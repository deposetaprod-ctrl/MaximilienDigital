export function PremiumMethod() {
  return (
    <>
      <section className="capabilities shell" id="fonctionnalites">
        <div className="cap-head reveal">
          <div className="eyebrow">Les bons détails font la différence</div>
          <h2>Tout ce dont votre<br />projet a <span className="serif">besoin.</span></h2>
          <p>Des fonctionnalités choisies pour votre usage.<br />Et connectées pour fonctionner ensemble.</p>
        </div>
        <div className="cap-grid">
          <article className="cap-item reveal">
            <span className="cap-num">01</span>
            <h3>Paiements & abonnements</h3>
            <p>Encaissements, offres récurrentes et suivi des paiements avec Stripe ou d’autres solutions de paiement.</p>
          </article>
          <article className="cap-item reveal">
            <span className="cap-num">02</span>
            <h3>Agents IA</h3>
            <p>Assistance, analyse de documents et automatisation des tâches.</p>
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
          <div className="portrait-box reveal">
            <img src="/maximilien-portrait.png" alt="Maximilien, développeur et entrepreneur" loading="lazy" />
            <div className="portrait-caption">
              <div>
                <b>Maximilien</b>
                <small>Développeur web fullstack & entrepreneur</small>
              </div>
              <span>↗&#xFE0E;&#xFE0E;</span>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">03 / La personne derrière le produit</div>
            <h2>Un développeur.<br />Et un vrai<br /><span className="serif">partenaire.</span></h2>
            <p>En tant que développeur web fullstack, je m’intéresse autant à votre projet qu’à son code. On échange directement, on fait les bons choix techniques, et on avance ensemble.</p>
            <p>Mon objectif : un produit utile, simple à utiliser et prêt pour la suite.</p>
            <div className="tags">
              <span>Un développeur direct</span>
              <span>Une vision entrepreneuriale</span>
            </div>
          </div>
        </section>
      </div>
      
      <section className="method" id="methode">
        <div className="shell">
          <div className="eyebrow">04 / Une idée claire de la suite</div>
          <h2 className="reveal">De « et si… » à <span style={{color: "var(--lime)"}}>« c’est prêt. »</span></h2>
          <div className="steps">
            <article className="step reveal">
              <small>01 / ON ÉCHANGE</small>
              <h3>Votre idée, au clair.</h3>
              <p>On définit l’essentiel : vos utilisateurs, leurs besoins et vos priorités.</p>
            </article>
            <article className="step reveal">
              <small>02 / ON DESSINE</small>
              <h3>Vous vous projetez.</h3>
              <p>Vous validez les écrans avant le développement. La direction est claire.</p>
            </article>
            <article className="step reveal">
              <small>03 / JE DÉVELOPPE</small>
              <h3>Ça prend vie.</h3>
              <p>Votre produit avance, avec des échanges réguliers et des retours concrets.</p>
            </article>
            <article className="step reveal">
              <small>04 / ON LANCE</small>
              <h3>À vous de jouer.</h3>
              <p>Votre produit est livré avec son code source et vos accès administrateur.</p>
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
