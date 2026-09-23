"use client";

import { useRef } from "react";

export function PremiumReviews() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (railRef.current) {
      const scrollAmount = window.innerWidth < 600 ? window.innerWidth * 0.85 : 355 + 20; // card width + gap
      railRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (railRef.current) {
      const scrollAmount = window.innerWidth < 600 ? window.innerWidth * 0.85 : 355 + 20;
      railRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="reviews-section" id="avis" aria-labelledby="reviews-title">
      <div className="shell reviews-heading">
        <div>
          <div className="eyebrow">05 / La confiance, en mots</div>
          <h2 id="reviews-title">
            Ce que disent<br />
            <span className="serif">mes clients.</span>
          </h2>
          <p>Des retours concrets de ceux qui m'ont fait confiance.</p>
        </div>
        <div className="review-controls">
          <button type="button" onClick={scrollLeft} aria-label="Avis précédents" aria-controls="review-rail">
            ←
          </button>
          <button type="button" onClick={scrollRight} aria-label="Avis suivants" aria-controls="review-rail">
            →
          </button>
        </div>
      </div>
      
      <div className="review-rail" id="review-rail" tabIndex={0} role="region" aria-label="Les 11 avis clients, défilement horizontal" ref={railRef}>
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Merci à Maximilien pour l'accompagnement, il a été très réactif, à l'écoute.</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">H</span>Humbert
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>RAS</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">S</span>Satoschi
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Très pro</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">MC</span>Marcus Cadasse
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Service professionnel à l'écoute, top et livré dans les délais. Je recommande.</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">A</span>apetitsprix
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Très bon développement d'une application complexe</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">TL</span>Thomas Le Berre
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Excellent prestataire je recommande à 100%</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">M</span>Mathieu
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Très bon travail</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">TL</span>Thomas Le Berre
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Je recommande Maximilien qui est très à l'écoute, très patient et surtout très professionnel. Une bonne manière de penser et de fonctionner pour une satisfaction client assurée. Vraiment agréablement surpris. Merci encore.</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">R</span>René
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Maximilien a su être à l'écoute de mes besoins pour mon application. Nous avons fait plusieurs appels durant le mois, afin qu'il s'assure lui-même du bon avancement de l'application et il a su accompagner pas à pas. Je vous recommande fortement Maximilien pour votre futur projet !</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">R</span>Romain
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Maximilien a bien répondu à mes attentes, il prend les choses à cœur, et est très agréable !</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">R</span>reyvax
          </figcaption>
        </figure>
        
        <figure className="review-card">
          <div className="review-quote" aria-hidden="true">“</div>
          <blockquote>Très bon contact, je recommande :) a exactement sorti ce que je voulais ! Merci Maximilien</blockquote>
          <figcaption>
            <span className="review-avatar" aria-hidden="true">RL</span>Rudy Lemoine
          </figcaption>
        </figure>
      </div>
      
      <div className="shell review-bottom">
        <span>Vos projets. Leurs expériences.</span>
        <span className="review-counter">11 retours clients</span>
      </div>
    </section>
  );
}
