"use client";

import { useState } from "react";

export function PremiumVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "35EHSl2AT2M";

  return (
    <section className="shell reveal video-section" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
      <div>
        <div className="eyebrow" style={{ color: "#ff702d" }}>◉ &nbsp; En vidéo</div>
        <h2 style={{ fontWeight: 500, fontSize: "clamp(34px, 3.8vw, 56px)", letterSpacing: "-2px", lineHeight: 1.06, margin: "24px 0" }}>Découvrez mes réalisations</h2>
        <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#b9a998" }}>Aperçu en vidéo de quelques applications mobiles et web sur-mesure développées pour mes clients.</p>
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", cursor: isPlaying ? "default" : "pointer", background: "#000" }} onClick={() => !isPlaying && setIsPlaying(true)}>
        {isPlaying ? (
          <iframe 
            style={{ width: "100%", height: "100%", border: "none" }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Présentation Maximilien Digital" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <>
            {/* YouTube thumbnail as lightweight facade — saves ~800KB of JS on initial load */}
            <img 
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt="Vidéo de présentation Maximilien Digital"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Play button overlay */}
            <div style={{ 
              position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(0,0,0,0.35)", transition: "background 0.2s"
            }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "rgba(255, 191, 63, 0.95)", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 30px rgba(255, 191, 63, 0.4)",
                transition: "transform 0.2s"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a1412">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
