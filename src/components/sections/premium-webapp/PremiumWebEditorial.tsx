"use client";

export function PremiumWebEditorial() {
  

  return (
    <div className="shell">
      <section className="editorial" id="mvp-strategie">
        <div className="reveal">
          <div className="eyebrow">02 / Une première version qui va à l'essentiel</div>
          <h2>Lancez l'essentiel.<br />Faites grandir<br /><span className="serif">le reste.</span></h2>
          <p>Avant d’ajouter toutes les fonctionnalités imaginées, nous définissons ce qui permet à votre projet de fonctionner et d’être utile dès le départ.</p>
          <p>Je développe cette première version — votre <strong>MVP</strong> — pour que vous puissiez la tester, recueillir des retours et décider de la suite sur des bases concrètes. Vous évitez ainsi d’investir trop tôt dans des fonctions dont vos utilisateurs n’ont peut-être pas besoin.</p>
          
          <button className="button open-brief" style={{ marginTop: "28px" }}>
            Parlons de votre première version <span>↗&#xFE0E;&#xFE0E;</span>
          </button>
        </div>
        <div className="automation-art reveal" aria-label="Stratégie MVP en 3 étapes">
          <div className="automation-node">
            <span>01</span>Définir l'essentiel
          </div>
          <div className="automation-line"></div>
          <div className="automation-node">
            <span>02</span>Lancer une version utilisable
          </div>
          <div className="automation-line"></div>
          <div className="automation-node">
            <span>03</span>Améliorer selon les retours
          </div>
        </div>
      </section>
    </div>
  );
}
