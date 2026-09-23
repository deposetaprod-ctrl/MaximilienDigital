"use client";

export function PremiumWebEditorial() {
  const onCtaClick = () => {
    const dialog = document.getElementById("brief") as HTMLDialogElement;
    if (dialog) dialog.showModal();
  };

  return (
    <div className="shell">
      <section className="editorial" id="outils-metier">
        <div className="reveal">
          <div className="eyebrow">02 / Vos outils travaillent ensemble</div>
          <h2>Gardez votre temps.<br />Automatisez<br /><span className="serif">le reste.</span></h2>
          <p>Un document arrive. Il est analysé, classé, puis transmis au bon endroit. Vos équipes avancent, vos données suivent.</p>
          <p>Je conçois vos outils métier, agents IA et connexions API autour de vos vrais processus.</p>
          <div className="integration-badges">
            <span>ERP & CRM</span>
            <span>Documents</span>
            <span>API</span>
            <span>Agents IA</span>
          </div>
          <button className="button open-brief" style={{ marginTop: "28px" }} onClick={onCtaClick}>
            Parlons de votre outil <span>↗&#xFE0E;&#xFE0E;</span>
          </button>
        </div>
        <div className="automation-art reveal" aria-label="Exemple de processus automatisé">
          <div className="automation-node">
            <span>▤</span>Un document est reçu
          </div>
          <div className="automation-line"></div>
          <div className="automation-node">
            <span>✳&#xFE0E;&#xFE0E;</span>L’agent analyse et classe
          </div>
          <div className="automation-line"></div>
          <div className="automation-node">
            <span>✓&#xFE0E;&#xFE0E;</span>Votre logiciel est à jour
          </div>
        </div>
      </section>
    </div>
  );
}
