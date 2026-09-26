"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Wand2, MessageCircle, GraduationCap, Star, ArrowLeft } from "lucide-react";
import Image from "next/image";

export function GenerateurAppliClient() {
  const [step, setStep] = useState(0);
  const [summary, setSummary] = useState("");
  const [flowAction, setFlowAction] = useState<"maquette" | "freelance" | "apprendre" | "">("");
  const [freelanceTrust, setFreelanceTrust] = useState<"oui" | "non" | "peut-etre" | "">("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
    setSessionId(id);
    
    fetch("/api/track-funnel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "page_view", sessionId: id, action: "Vue Page Générateur Appli" }),
    }).catch(console.error);
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed", sessionId, action: `Générateur Appli Soumis: ${flowAction}` }),
      });

      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: `Action: ${flowAction} | Trust: ${freelanceTrust}`,
          sector: "N/A",
          description: `Résumé: ${summary}\n\nDétails sup: ${details}`,
          dataLink: "N/A",
          email: email || "anonyme@feedback.com",
          phone: phone,
          name: "Lead (Page Générateur)"
        }),
      });

      if (res.ok) {
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-11307841019/iCzOCKjzlvscEPvr_48q',
            'value': 1.0,
            'currency': 'EUR'
          });
        }
        setIsSuccess(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        header.top, .mobile-bottom-nav, #mobile-nav, nav.nav, footer { display: none !important; }
        body { padding-top: 0 !important; padding-bottom: 0 !important; background-color: #0d0a08; color: #f1eee8; }
        
        .gen-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: radial-gradient(circle at center, #1a1412 0%, #0d0a08 100%);
        }
        .gen-card {
          width: 100%;
          max-width: 540px;
          background: rgba(20, 15, 12, 0.95);
          border: 1px solid rgba(255, 191, 63, 0.15);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 30px 90px rgba(0,0,0,0.5);
          position: relative;
        }
        .gen-back-home {
          position: absolute;
          top: 24px;
          left: 24px;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .gen-back-home:hover {
          color: #fff;
        }
        
        @media (max-width: 600px) {
          .gen-card { padding: 40px 24px 24px; }
          .gen-back-home { top: 16px; left: 16px; }
        }
      `}} />

      <div className="gen-container">
        <div className="gen-card">
          <a href="/" className="gen-back-home">
            <ArrowLeft size={16} /> Accueil
          </a>

          {!isSuccess ? (
            <form onSubmit={(e) => { e.preventDefault(); if (step === 2 && flowAction !== "freelance") handleSubmit(); else if (step === 3 && flowAction === "freelance") handleSubmit(); else setStep(s => s + 1); }} noValidate style={{ marginTop: "20px" }}>
              
              {/* STEP 0 */}
              {step === 0 && (
                <fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                  <legend style={{ fontSize: "28px", fontWeight: 600, marginBottom: "12px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
                    Présente-moi ton projet brièvement
                  </legend>
                  <p style={{ fontSize: "14px", color: "var(--color-dim)", marginBottom: "25px", lineHeight: 1.5 }}>
                    Sans divulguer d'informations confidentielles.
                  </p>
                  <textarea 
                    rows={4} 
                    maxLength={200} 
                    placeholder="Ex: Une application de mise en relation pour les artisans du bâtiment..." 
                    value={summary} 
                    onChange={(e) => setSummary(e.target.value)}
                    style={{ width: "100%", padding: "16px", borderRadius: "12px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none", fontSize: "14px", outline: "none" }}
                    autoFocus
                  />
                  <div style={{ textAlign: "right", fontSize: "12px", color: "var(--color-dim)", marginTop: "8px" }}>
                    {summary.length} / 200
                  </div>
                  
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
                    <button type="submit" className="button" disabled={!summary.trim()} style={{ opacity: !summary.trim() ? 0.5 : 1, width: "100%", padding: "18px" }}>
                      Suivant <span>→</span>
                    </button>
                  </div>
                </fieldset>
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                  <legend style={{ fontSize: "28px", fontWeight: 600, marginBottom: "25px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
                    Que souhaites-tu faire ensuite ?
                  </legend>
                  
                  <div className="brief-choices" style={{ gridTemplateColumns: "1fr", gap: "12px" }}>
                    <button type="button" className={`brief-choice ${flowAction === "maquette" ? "selected" : ""}`} onClick={() => { setFlowAction("maquette"); setStep(2); }} style={{ padding: "18px 20px", flexDirection: "row", alignItems: "center", gap: "16px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <Wand2 size={24} color="var(--lime)" />
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <strong style={{ fontSize: "15px", margin: 0 }}>Développer l'application</strong>
                        <span style={{ fontSize: "12px", display: "block", marginTop: "4px" }}>À partir de cette description</span>
                      </div>
                    </button>
                    
                    <button type="button" className={`brief-choice ${flowAction === "freelance" ? "selected" : ""}`} onClick={() => { setFlowAction("freelance"); setStep(2); }} style={{ padding: "18px 20px", flexDirection: "row", alignItems: "center", gap: "16px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <MessageCircle size={24} color="var(--lime)" />
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <strong style={{ fontSize: "15px", margin: 0 }}>Discuter avec un freelance de confiance</strong>
                        <span style={{ fontSize: "12px", display: "block", marginTop: "4px" }}>Pour m'accompagner sur le développement</span>
                      </div>
                    </button>

                    <button type="button" className={`brief-choice ${flowAction === "apprendre" ? "selected" : ""}`} onClick={() => { setFlowAction("apprendre"); setStep(2); }} style={{ padding: "18px 20px", flexDirection: "row", alignItems: "center", gap: "16px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <GraduationCap size={24} color="var(--lime)" />
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <strong style={{ fontSize: "15px", margin: 0 }}>Faire l'application moi-même</strong>
                        <span style={{ fontSize: "12px", display: "block", marginTop: "4px" }}>Je veux qu'on m'apprenne à la créer</span>
                      </div>
                    </button>
                  </div>
                  
                  <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "20px" }}>
                    <button type="button" onClick={() => setStep(0)} style={{ background: "transparent", border: "none", color: "var(--color-dim)", fontSize: "14px", textDecoration: "underline", cursor: "pointer" }}>← Retour</button>
                  </div>
                </fieldset>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                  {flowAction === "maquette" && (
                    <legend style={{ fontSize: "26px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>On y est presque !</legend>
                  )}
                  {flowAction === "apprendre" && (
                    <legend style={{ fontSize: "26px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>Prêt à te lancer ?</legend>
                  )}

                  {flowAction === "freelance" && (
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                      <div style={{ display: "inline-block", position: "relative", marginBottom: "16px" }}>
                        <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", background: "linear-gradient(135deg, var(--lime), var(--purple))", opacity: 0.4, filter: "blur(10px)" }}></div>
                        <Image src="/cellequejeprefere_rounded.png" alt="Maximilien" width={90} height={90} style={{ borderRadius: "50%", position: "relative", zIndex: 1, border: "2px solid rgba(255, 255, 255, 0.15)" }} />
                      </div>
                      <h3 style={{ fontSize: "24px", fontWeight: 600, margin: "0 0 24px 0", letterSpacing: "-0.5px" }}>Maximilien</h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "20px 24px", margin: "0 auto 32px", fontSize: "14px", width: "100%", maxWidth: "340px", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <div style={{ width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(189,255,0,0.12)", borderRadius: "50%" }}><CheckCircle2 size={14} color="var(--lime)" /></div>
                          <span><b>Plus de 30 projets</b> livrés</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <div style={{ width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,191,63,0.12)", borderRadius: "50%" }}><Star size={12} color="#ffbf3f" fill="#ffbf3f" /></div>
                          <span>Avis vérifiés · <a href="https://comeup.com/fr/profil/maximilien-d" target="_blank" rel="noopener noreferrer" style={{ color: "#ffbf3f", textDecoration: "underline", textUnderlineOffset: "3px" }}>Top Service ComeUp</a></span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <div style={{ width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", borderRadius: "50%" }}><span style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>€</span></div>
                          <span>Budget <b>à partir de 200 €</b></span>
                        </div>
                      </div>

                      <h4 style={{ fontSize: "20px", fontWeight: 500, margin: "0 0 20px 0", letterSpacing: "-0.5px" }}>Acceptez-vous de me faire confiance ?</h4>
                      
                      <div style={{ display: "flex", flexDirection: "row", gap: "12px", justifyContent: "center" }}>
                        <button type="button" onClick={() => { setFreelanceTrust("oui"); setStep(3); }} style={{ flex: 1, padding: "16px 12px", background: "var(--purple)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 600, fontSize: "15px", cursor: "pointer", boxShadow: "0 8px 20px rgba(255,112,45,0.3)", transition: "transform 0.2s" }}>
                          Oui
                        </button>
                        <button type="button" onClick={() => { setFreelanceTrust("peut-etre"); setStep(3); }} style={{ flex: 1, padding: "16px 12px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", fontWeight: 500, fontSize: "15px", cursor: "pointer", transition: "background 0.2s" }}>
                          Peut-être
                        </button>
                        <button type="button" onClick={() => { setFreelanceTrust("non"); setStep(3); }} style={{ flex: 1, padding: "16px 12px", background: "rgba(255,255,255,0.03)", color: "var(--color-dim)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", fontWeight: 500, fontSize: "15px", cursor: "pointer", transition: "background 0.2s" }}>
                          Non
                        </button>
                      </div>
                    </div>
                  )}

                  {flowAction !== "freelance" && (
                    <>
                      {flowAction === "maquette" && (
                        <div style={{ marginBottom: "20px" }}>
                          <label style={{ display: "block", fontSize: "14px", marginBottom: "8px" }}>Souhaites-tu ajouter des informations ? <span style={{ color: "var(--color-dim)" }}>(facultatif)</span></label>
                          <textarea 
                            rows={2} 
                            placeholder="Charte graphique, concurrent direct..." 
                            value={details} 
                            onChange={(e) => setDetails(e.target.value)}
                            style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none", fontSize: "14px", outline: "none" }}
                          />
                        </div>
                      )}

                      <div style={{ marginBottom: "25px" }}>
                        <label style={{ display: "block", fontSize: "14px", marginBottom: "8px" }}>Où envoyer les informations ?</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="ton@email.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none" }}
                        />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "32px", gap: "16px" }}>
                        <button type="submit" className="button" disabled={isSubmitting || !email.trim()} style={{ opacity: (isSubmitting || !email.trim()) ? 0.5 : 1, width: "100%", padding: "18px" }}>
                          {isSubmitting ? "Envoi..." : (flowAction === "maquette" ? "Envoyer ma demande" : "Envoyer")}
                        </button>
                        <button type="button" onClick={() => setStep(1)} style={{ background: "transparent", border: "none", color: "var(--color-dim)", fontSize: "14px", textDecoration: "underline", cursor: "pointer", padding: "8px" }}>
                          ← Retour
                        </button>
                      </div>
                    </>
                  )}

                  {flowAction === "freelance" && (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      <button type="button" onClick={() => setStep(1)} style={{ background: "transparent", border: "none", color: "var(--color-dim)", fontSize: "14px", textDecoration: "underline", cursor: "pointer", padding: "8px" }}>
                        ← Retour
                      </button>
                    </div>
                  )}
                </fieldset>
              )}

              {/* STEP 3 */}
              {step === 3 && flowAction === "freelance" && (
                <fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
                  {freelanceTrust === "oui" && (
                    <>
                      <legend style={{ fontSize: "26px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>Transmettez-lui vos informations</legend>
                      <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "14px", marginBottom: "8px" }}>Numéro de téléphone <span style={{ color: "var(--color-dim)" }}>(recommandé)</span></label>
                        <input 
                          type="tel" 
                          placeholder="06..." 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none" }}
                        />
                      </div>
                      <div style={{ marginBottom: "25px" }}>
                        <label style={{ display: "block", fontSize: "14px", marginBottom: "8px" }}>Adresse email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="ton@email.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "14px", outline: "none" }}
                        />
                      </div>
                    </>
                  )}

                  {freelanceTrust === "non" && (
                    <>
                      <legend style={{ fontSize: "26px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>Pour quelle raison ?</legend>
                      <div style={{ marginBottom: "25px" }}>
                        <textarea 
                          rows={4} 
                          placeholder="Dites-nous ce qui vous freine..." 
                          value={details} 
                          onChange={(e) => setDetails(e.target.value)}
                          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none", fontSize: "14px", outline: "none" }}
                          autoFocus
                        />
                      </div>
                    </>
                  )}

                  {freelanceTrust === "peut-etre" && (
                    <>
                      <legend style={{ fontSize: "26px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>Quelles sont vos craintes ?</legend>
                      <div style={{ marginBottom: "25px" }}>
                        <textarea 
                          rows={4} 
                          placeholder="Partagez vos doutes..." 
                          value={details} 
                          onChange={(e) => setDetails(e.target.value)}
                          style={{ width: "100%", padding: "14px", borderRadius: "10px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", resize: "none", fontSize: "14px", outline: "none" }}
                          autoFocus
                        />
                      </div>
                    </>
                  )}

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", gap: "16px" }}>
                    <button 
                      type="submit" 
                      className="button" 
                      disabled={isSubmitting || (freelanceTrust === "oui" && !email.trim()) || (freelanceTrust !== "oui" && !details.trim())} 
                      style={{ opacity: (isSubmitting || (freelanceTrust === "oui" && !email.trim()) || (freelanceTrust !== "oui" && !details.trim())) ? 0.5 : 1, width: "100%", padding: "18px" }}
                    >
                      {isSubmitting ? "Envoi..." : (freelanceTrust === "oui" ? "Prendre contact" : "Envoyer mon avis")}
                    </button>
                    <button type="button" onClick={() => setStep(2)} style={{ background: "transparent", border: "none", color: "var(--color-dim)", fontSize: "14px", textDecoration: "underline", cursor: "pointer", padding: "8px" }}>
                      ← Retour
                    </button>
                  </div>
                </fieldset>
              )}
              
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "rgba(189,255,0,0.1)", marginBottom: "20px" }}>
                <CheckCircle2 size={36} color="var(--lime)" />
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px", marginBottom: "12px" }}>C'est noté !</h2>
              <p style={{ color: "var(--color-dim)", fontSize: "15px", lineHeight: 1.6, marginBottom: "0" }}>
                {flowAction === "maquette" ? "C'est bien reçu ! Je te recontacte très vite pour en discuter." : "Je te recontacte très rapidement !"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
