export function PremiumAppFaq() {
  return (
    <div className="shell">
      <section className="faq">
        <div>
          <div className="eyebrow">Les réponses, simplement</div>
          <h2>Bonnes questions.</h2>
        </div>
        <div>
          <details>
            <summary>
              Dois-je forcément commencer par une application web ?
            </summary>
            <p>
              Non. Une application mobile peut être développée directement.
              Une première version web est une option si elle répond mieux à
              votre budget, à vos usages ou à votre besoin de tester le
              marché.
            </p>
          </details>
          <details>
            <summary>
              Vous vous occupez de la publication sur les stores ?
            </summary>
            <p>
              Je vous accompagne pour préparer les versions, les fiches et les
              soumissions. Vous restez propriétaire de vos comptes
              développeur. Apple et Google prennent la décision finale de
              validation.
            </p>
          </details>
          <details>
            <summary>
              Mon application pourra-t-elle recevoir des paiements ?
            </summary>
            <p>
              Oui, selon les biens ou services vendus. La solution de paiement
              est choisie en fonction de votre modèle et des règles
              applicables sur chaque store.
            </p>
          </details>
          <details>
            <summary>Quel budget et quels frais prévoir ?</summary>
            <p>
              Le devis dépend du nombre d’écrans, des fonctions et des
              intégrations. Les comptes développeur, l’hébergement et les
              services externes éventuels sont précisés lors du cadrage.
            </p>
          </details>
          <details>
            <summary>
              Peut-on faire évoluer l’application après le lancement ?
            </summary>
            <p>
              Oui. On peut commencer par les fonctionnalités essentielles puis
              ajouter des évolutions. Chaque nouvelle demande fait l’objet
              d’un périmètre et d’un budget définis ensemble.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
