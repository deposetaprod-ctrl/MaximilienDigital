export function PremiumVideo() {
  return (
    <section className="shell reveal video-section" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
      <div>
        <div className="eyebrow" style={{ color: "#ff702d" }}>◉ &nbsp; En vidéo</div>
        <h2 style={{ fontWeight: 500, fontSize: "clamp(34px, 3.8vw, 56px)", letterSpacing: "-2px", lineHeight: 1.06, margin: "24px 0" }}>Découvrez mes réalisations</h2>
        <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#b9a998" }}>Aperçu en vidéo de quelques applications mobiles et web sur-mesure développées pour mes clients.</p>
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
        <iframe 
          style={{ width: "100%", height: "100%", border: "none" }}
          src="https://www.youtube.com/embed/35EHSl2AT2M?autoplay=0&rel=0" 
          title="Présentation Maximilien Digital" 
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
