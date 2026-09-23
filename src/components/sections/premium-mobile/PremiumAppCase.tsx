export function PremiumAppCase() {
  return (
    <div className="shell">
      <section className="case-section" id="realisation">
        <div className="case-head">
          <div>
            <div className="eyebrow" style={{ color: "#ff702d" }}>
              02 / Du concret, déjà entre les mains
            </div>
            <h2>Even Clock<span style={{ color: "#ff702d" }}>.</span></h2>
          </div>
          <p>
            Une application de suivi du poids, avec une interface dédiée aux
            mesures, aux tendances et à leur visualisation. Un projet développé
            de A à Z.
          </p>
        </div>
        <div className="case-visual">
          <div className="case-copy">
            <span className="page-number" style={{ color: "#4ac7c3" }}>
              UNE RÉALISATION MOBILE
            </span>
            <h3>Rendre les données<br />plus lisibles.</h3>
            <p>
              Du suivi quotidien aux graphiques, chaque écran aide l’utilisateur
              à retrouver les informations qui comptent.
            </p>
            <div className="integration-badges">
              <span style={{ borderColor: "#3b6d68", color: "#b6d5cb" }}>
                Design d’interface
              </span>
              <span style={{ borderColor: "#3b6d68", color: "#b6d5cb" }}>
                iOS & Android
              </span>
            </div>
          </div>
          <div>
            <div
              className="case-chart"
              aria-label="Illustration du suivi des mesures"
            >
              <small>ÉVOLUTION / MESURES</small>
              <b>Votre progression.</b>
              <svg
                viewBox="0 0 340 95"
                role="img"
                aria-label="Courbe illustrative de mesures"
              >
                <path
                  d="M10 15L80 35L150 44L230 65L325 81"
                  fill="none"
                  stroke="#4ac7c3"
                  strokeWidth="2"
                />
                <g fill="#4ac7c3">
                  <circle cx="10" cy="15" r="4" />
                  <circle cx="80" cy="35" r="4" />
                  <circle cx="150" cy="44" r="4" />
                  <circle cx="230" cy="65" r="4" />
                  <circle cx="325" cy="81" r="4" />
                </g>
              </svg>
            </div>
            <div className="case-label">
              Les captures réelles de l’application sont présentées en haut de
              page.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
