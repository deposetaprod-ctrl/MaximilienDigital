"use client";

import { useState } from "react";

export function PremiumWebFormats() {
  const [activeTab, setActiveTab] = useState<"site" | "saas" | "metier">("site");

  return (
    <section className="formats" id="solutions-web">
      <div className="shell">
        <div className="eyebrow">01 / Une solution à votre mesure</div>
        <div className="formats-heading">
          <h2>Le web a plus<br />d’un <span className="serif">visage.</span></h2>
        </div>
        <div className="format-tabs" role="tablist" aria-label="Types de solutions web">
          <button 
            role="tab" 
            id="tab-site" 
            aria-controls="panel-site" 
            aria-selected={activeTab === "site"}
            onClick={() => setActiveTab("site")}
          >
            Site vitrine
          </button>
          <button 
            role="tab" 
            id="tab-saas" 
            aria-controls="panel-saas" 
            aria-selected={activeTab === "saas"} 
            tabIndex={activeTab === "saas" ? 0 : -1}
            onClick={() => setActiveTab("saas")}
          >
            Application & SaaS
          </button>
          <button 
            role="tab" 
            id="tab-metier" 
            aria-controls="panel-metier" 
            aria-selected={activeTab === "metier"} 
            tabIndex={activeTab === "metier" ? 0 : -1}
            onClick={() => setActiveTab("metier")}
          >
            Outil métier
          </button>
        </div>

        <div className="format-panel" id="panel-site" role="tabpanel" aria-labelledby="tab-site" hidden={activeTab !== "site"}>
          <div>
            <span className="page-number">01 / ÊTRE VU. ÊTRE CHOISI.</span>
            <h3>Une première impression<br />qui donne envie.</h3>
            <p>Présentez votre activité avec une identité forte et un parcours clair pour vos futurs clients.</p>
            <ul>
              <li>Design adapté à votre marque</li>
              <li>Pages lisibles sur tous les écrans</li>
              <li>Prise de contact simple</li>
            </ul>
          </div>
          <div className="format-visual" aria-hidden="true">
            <small>ATELIER / SAVOIR-FAIRE & MATIÈRE</small>
            <h4>Du caractère.<br />Et du sens.</h4>
            <div className="mini-pills">
              <span>Notre univers ↗&#xFE0E;</span>
              <span>Parlons de votre projet</span>
            </div>
          </div>
        </div>

        <div className="format-panel" id="panel-saas" role="tabpanel" aria-labelledby="tab-saas" hidden={activeTab !== "saas"}>
          <div>
            <span className="page-number">02 / DONNER VIE À UN SERVICE</span>
            <h3>Votre idée devient<br />un produit.</h3>
            <p>Une plateforme accessible par un lien, pensée pour vos utilisateurs et votre modèle économique.</p>
            <ul>
              <li>Comptes et espaces personnels</li>
              <li>Abonnements et paiements</li>
              <li>Administration et suivi d’activité</li>
            </ul>
          </div>
          <div className="format-visual" aria-hidden="true">
            <small>VOTRE PLATEFORME / VUE D’ENSEMBLE</small>
            <h4>Tout est connecté.</h4>
            <div className="data-rows">
              <div>Offre Découverte <b>Active</b></div>
              <div>Offre Équipe <b>Active</b></div>
              <div>Espace administrateur <b>↗&#xFE0E;&#xFE0E;</b></div>
            </div>
          </div>
        </div>

        <div className="format-panel" id="panel-metier" role="tabpanel" aria-labelledby="tab-metier" hidden={activeTab !== "metier"}>
          <div>
            <span className="page-number">03 / SIMPLIFIER LE QUOTIDIEN</span>
            <h3>Votre façon de travailler.<br />Votre propre outil.</h3>
            <p>Centralisez les informations et remplacez les allers-retours entre fichiers et logiciels.</p>
            <ul>
              <li>Tableaux de bord sur mesure</li>
              <li>Suivi des dossiers et des équipes</li>
              <li>Connexions avec vos outils actuels</li>
            </ul>
            <a href="#outils-metier" className="text-link">Voir les automatisations ↘</a>
          </div>
          <div className="format-visual" aria-hidden="true">
            <small>VOTRE ACTIVITÉ / DOSSIERS</small>
            <h4>Clair. Simple. Utile.</h4>
            <div className="data-rows">
              <div>Dossier client <b>Validé ✓&#xFE0E;</b></div>
              <div>Document reçu <b>Classé ✓&#xFE0E;</b></div>
              <div>Rappel envoyé <b>Terminé ✓&#xFE0E;</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
