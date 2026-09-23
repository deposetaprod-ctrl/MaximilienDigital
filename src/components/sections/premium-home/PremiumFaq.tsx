export function PremiumFaq() {
  return (
    <div className="shell">
      <section className="faq">
        <div>
          <div className="eyebrow">06 / Sans zone floue</div>
          <h2>Bonnes questions.</h2>
        </div>
        <div>
          <details>
            <summary>Je n’ai qu’une idée. On peut commencer ?</summary>
            <p>Oui. Expliquez-moi ce que vous souhaitez créer ou simplifier. Nous définirons ensemble une première version utile et réaliste.</p>
          </details>
          <details>
            <summary>Combien coûte mon projet ?</summary>
            <p>Le budget dépend des fonctionnalités et du périmètre. Après un premier échange, je vous propose un devis adapté à votre projet.</p>
          </details>
          <details>
            <summary>Est-ce que le code m’appartient ?</summary>
            <p>Oui. À la livraison, vous recevez le code source, les accès administrateur et un document de cession des droits.</p>
          </details>
          <details>
            <summary>Et après la mise en ligne ?</summary>
            <p>Votre produit peut évoluer. Les frais d’hébergement et des éventuels services externes dépendent de la solution retenue ; nous les clarifions ensemble.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
