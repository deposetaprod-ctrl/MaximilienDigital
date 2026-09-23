export function PremiumAppBenefits() {
  return (
    <section className="mobile-benefits" id="experience">
      <div className="mobile-benefits-sticky">
        <div className="shell" style={{ width: "100%" }}>
          <div className="eyebrow">01 / Plus proche de vos utilisateurs</div>
          <h2>
            Bien plus qu’une<br />icône sur un
            <span className="serif"> écran.</span>
          </h2>
        </div>
        <div className="benefit-track">
          <article className="benefit-card">
            <span className="page-number">01 / UNE EXPÉRIENCE QUI DONNE ENVIE</span>
            <div className="benefit-icon" aria-hidden="true">↗</div>
            <div>
              <h3>Simple à ouvrir.<br />Facile à adopter.</h3>
              <p>
                Des écrans clairs, des interactions soignées et un parcours
                pensé pour ce que vos utilisateurs viennent faire.
              </p>
            </div>
          </article>
          <article className="benefit-card">
            <span className="page-number">02 / LE BON MESSAGE, AU BON MOMENT</span>
            <div className="benefit-icon" aria-hidden="true">◉</div>
            <div>
              <h3>Gardez<br />le contact.</h3>
              <p>
                Notifications push, rappels et messagerie : créez des échanges
                utiles, avec le contrôle laissé à l’utilisateur.
              </p>
            </div>
          </article>
          <article className="benefit-card">
            <span className="page-number">03 / PENSÉE POUR LE TÉLÉPHONE</span>
            <div className="benefit-icon" aria-hidden="true">⊕</div>
            <div>
              <h3>Connectée<br />au réel.</h3>
              <p>
                Appareil photo, géolocalisation, scan ou mode hors ligne : les
                fonctions pertinentes pour votre projet, selon sa faisabilité.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
