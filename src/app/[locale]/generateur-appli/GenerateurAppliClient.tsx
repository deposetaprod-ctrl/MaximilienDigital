"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Wand2, MessageCircle, GraduationCap, Star, ArrowUp, User, Sparkles } from "lucide-react";
import Image from "next/image";

export function GenerateurAppliClient() {
  const [step, setStep] = useState(0);
  const [summary, setSummary] = useState("");
  const [submittedSummary, setSubmittedSummary] = useState("");
  const [flowAction, setFlowAction] = useState<"maquette" | "freelance" | "apprendre" | "">("");
  const [freelanceTrust, setFreelanceTrust] = useState<"oui" | "non" | "peut-etre" | "">("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
    setSessionId(id);
    
    fetch("/api/track-funnel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step: "page_view", sessionId: id, action: "Vue Page Générateur Appli (Chat UI)" }),
    }).catch(console.error);
  }, []);

  useEffect(() => {
    if (step > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  const handleFirstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!summary.trim()) return;
    setSubmittedSummary(summary);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          description: `Résumé: ${submittedSummary}\n\nDétails sup: ${details}`,
          dataLink: "N/A",
          email: email || "anonyme@feedback.com",
          phone: phone,
          name: "Lead (Page Générateur Chat UI)"
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
        setStep(4);
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
        /* Hide bottom nav specifically for this page as requested */
        .mobile-bottom-nav { display: none !important; }
        footer { display: none !important; }
        
        /* Layout adjustments for chat UI */
        body { background-color: #0d0a08; color: #f1eee8; }
        .chat-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 100px 20px 140px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .chat-message {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
          animation: fade-in 0.4s ease-out;
        }
        .chat-message.user {
          flex-direction: row-reverse;
        }
        
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .avatar.ai {
          background: rgba(255, 191, 63, 0.1);
          border: 1px solid rgba(255, 191, 63, 0.2);
          color: #ffbf3f;
        }
        .avatar.user {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .message-content {
          max-width: 85%;
          padding: 16px 20px;
          border-radius: 16px;
          font-size: 15px;
          line-height: 1.6;
        }
        .chat-message.ai .message-content {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .chat-message.user .message-content {
          background: rgba(255, 191, 63, 0.1);
          border: 1px solid rgba(255, 191, 63, 0.15);
        }
        
        .chat-input-wrapper {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(to top, #0d0a08 70%, transparent);
          display: flex;
          justify-content: center;
          z-index: 40;
        }
        
        .chat-input-box {
          width: 100%;
          max-width: 760px;
          background: #1c1714;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 8px 8px 8px 20px;
          display: flex;
          align-items: flex-end;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: border-color 0.2s;
        }
        .chat-input-box:focus-within {
          border-color: rgba(255, 191, 63, 0.4);
        }
        
        .chat-input-box textarea {
          width: 100%;
          background: transparent;
          border: none;
          color: #fff;
          resize: none;
          padding: 12px 0;
          font-size: 15px;
          line-height: 1.5;
          outline: none;
          min-height: 48px;
          max-height: 150px;
        }
        
        .send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffbf3f;
          color: #1a1412;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          margin-left: 10px;
          margin-bottom: 4px;
          flex-shrink: 0;
          transition: transform 0.2s, opacity 0.2s;
        }
        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .send-btn:not(:disabled):hover {
          transform: scale(1.05);
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 10vh;
        }
        
        .options-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
          width: 100%;
        }
        
        .option-card {
          padding: 20px;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }
        .option-card:hover {
          background: rgba(255, 191, 63, 0.05);
          border-color: rgba(255, 191, 63, 0.2);
          transform: translateY(-2px);
        }
        
        .form-panel {
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 24px;
          margin-top: 20px;
        }
        
        .input-field {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-size: 14px;
          outline: none;
          margin-top: 8px;
          margin-bottom: 20px;
        }
        .input-field:focus {
          border-color: rgba(255, 191, 63, 0.4);
        }
      `}} />

      {/* Custom Top Header for Generator */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(13,10,8,0.8)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", zIndex: 40 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.location.reload(); }} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src="/icon.png" alt="Maximilien" width={32} height={32} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", objectFit: "cover", background: "#fff" }} />
          <span style={{ fontWeight: 600, color: "#fff", fontSize: "16px", letterSpacing: "-0.5px" }}>maximilien<span style={{ color: "#a3988e" }}>.digital</span></span>
        </a>
        <button type="button" onClick={() => setIsAboutOpen(true)} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "6px 14px", color: "#fff", fontSize: "13px", cursor: "pointer", transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"} onMouseOut={(e) => e.currentTarget.style.background = "transparent"}>
          À propos
        </button>
      </header>

      {/* About Modal */}
      {isAboutOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(5px)" }} onClick={() => setIsAboutOpen(false)}>
          <div style={{ background: "#1c1714", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "32px", maxWidth: "400px", width: "100%", position: "relative" }} onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setIsAboutOpen(false)} style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(255,255,255,0.1)", border: "none", width: "32px", height: "32px", borderRadius: "50%", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>✕</button>
            <div style={{ textAlign: "center" }}>
              <img src="/cellequejeprefere_rounded.png" alt="Maximilien" width={80} height={80} style={{ width: "80px", height: "80px", borderRadius: "50%", border: "2px solid rgba(255,191,63,0.3)", marginBottom: "16px", objectFit: "cover" }} />
              <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px", letterSpacing: "-0.5px" }}>Maximilien</h2>
              <p style={{ color: "#a3988e", fontSize: "15px", lineHeight: 1.5, marginBottom: "24px" }}>Développeur web et mobile freelance, expert en création de MVP et d'applications sur mesure.</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left", background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "16px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={18} color="var(--lime)" />
                  <span style={{ fontSize: "14px" }}><b>30+</b> projets livrés</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Star size={18} color="#ffbf3f" fill="#ffbf3f" />
                  <span style={{ fontSize: "14px" }}>Top Service <b>ComeUp</b> (Avis vérifiés)</span>
                </div>
              </div>
              
              <a href="https://comeup.com/fr/profil/maximilien-d" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#ffbf3f", color: "#1a1412", padding: "12px 24px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "14px", width: "100%" }}>
                Voir mon profil ComeUp
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="chat-container">
        {/* Empty State / Welcome */}
        {step === 0 && (
          <div className="empty-state">
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,191,63,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <Sparkles size={32} color="#ffbf3f" />
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 600, letterSpacing: "-1px", marginBottom: "16px" }}>
              Générateur d'Application
            </h1>
            <p style={{ color: "#a3988e", fontSize: "16px", maxWidth: "500px", lineHeight: 1.6 }}>
              Décrivez brièvement votre projet en évitant d'y mettre des informations confidentielles.
            </p>
          </div>
        )}

        {/* Chat History */}
        {step > 0 && (
          <div className="chat-history">
            <div className="chat-message user">
              <div className="avatar user"><User size={20} /></div>
              <div className="message-content">{submittedSummary}</div>
            </div>

            <div className="chat-message ai">
              <div className="avatar ai"><Sparkles size={18} /></div>
              <div className="message-content" style={{ width: "100%", maxWidth: "100%" }}>
                {step === 1 && (
                  <>
                    <p>Merci pour ces détails. C'est un beau projet ! Pour avancer efficacement, quelle approche préférez-vous ?</p>
                    <div className="options-grid">
                      <button className="option-card" onClick={() => { setFlowAction("maquette"); setStep(2); }}>
                        <div style={{ background: "rgba(189,255,0,0.1)", padding: "12px", borderRadius: "12px" }}>
                          <Wand2 size={24} color="var(--lime)" />
                        </div>
                        <div>
                          <strong style={{ fontSize: "16px", display: "block", marginBottom: "4px" }}>Développer l'application</strong>
                          <span style={{ color: "#a3988e", fontSize: "14px" }}>Recevoir une estimation et une stratégie</span>
                        </div>
                      </button>
                      
                      <button className="option-card" onClick={() => { setFlowAction("freelance"); setStep(2); }}>
                        <div style={{ background: "rgba(255,191,63,0.1)", padding: "12px", borderRadius: "12px" }}>
                          <MessageCircle size={24} color="#ffbf3f" />
                        </div>
                        <div>
                          <strong style={{ fontSize: "16px", display: "block", marginBottom: "4px" }}>Discuter avec un expert</strong>
                          <span style={{ color: "#a3988e", fontSize: "14px" }}>Pour m'accompagner sur la technique</span>
                        </div>
                      </button>

                      <button className="option-card" onClick={() => { setFlowAction("apprendre"); setStep(2); }}>
                        <div style={{ background: "rgba(168,85,247,0.1)", padding: "12px", borderRadius: "12px" }}>
                          <GraduationCap size={24} color="#a855f7" />
                        </div>
                        <div>
                          <strong style={{ fontSize: "16px", display: "block", marginBottom: "4px" }}>Faire l'application moi-même</strong>
                          <span style={{ color: "#a3988e", fontSize: "14px" }}>Je veux qu'on m'apprenne à la créer</span>
                        </div>
                      </button>
                    </div>
                  </>
                )}

                {step >= 2 && flowAction && (
                  <p>
                    Vous avez choisi : <b>
                      {flowAction === "maquette" ? "Développer l'application" : 
                       flowAction === "freelance" ? "Discuter avec un expert" : "Faire l'application moi-même"}
                    </b>
                  </p>
                )}
              </div>
            </div>

            {/* STEP 2 - Details */}
            {step === 2 && flowAction === "freelance" && (
              <div className="chat-message ai">
                <div className="avatar ai"><img src="/cellequejeprefere_rounded.png" alt="Maximilien" width={36} height={36} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} /></div>
                <div className="message-content">
                  <p style={{ marginBottom: "20px" }}>Je suis Maximilien, développeur freelance avec <b>plus de 30 projets livrés</b> et de nombreux avis vérifiés. Acceptez-vous de me faire confiance pour votre projet ?</p>
                  
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button onClick={() => { setFreelanceTrust("oui"); setStep(3); }} style={{ padding: "12px 24px", background: "var(--purple)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 500, cursor: "pointer" }}>Oui, discutons-en</button>
                    <button onClick={() => { setFreelanceTrust("peut-etre"); setStep(3); }} style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "none", borderRadius: "12px", fontWeight: 500, cursor: "pointer" }}>Peut-être</button>
                    <button onClick={() => { setFreelanceTrust("non"); setStep(3); }} style={{ padding: "12px 24px", background: "rgba(255,255,255,0.05)", color: "#a3988e", border: "none", borderRadius: "12px", fontWeight: 500, cursor: "pointer" }}>Non</button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && flowAction !== "freelance" && (
              <div className="chat-message ai">
                <div className="avatar ai"><Sparkles size={18} /></div>
                <div className="message-content" style={{ width: "100%", maxWidth: "500px" }}>
                  <p>Parfait ! Où dois-je envoyer {flowAction === "maquette" ? "la stratégie et l'estimation" : "les informations"} ?</p>
                  <form onSubmit={handleSubmit} className="form-panel">
                    {flowAction === "maquette" && (
                      <>
                        <label style={{ fontSize: "14px", fontWeight: 500 }}>Détails supplémentaires <span style={{ color: "#a3988e" }}>(facultatif)</span></label>
                        <textarea className="input-field" rows={2} placeholder="Fonctionnalités essentielles, authentification..." value={details} onChange={(e) => setDetails(e.target.value)} />
                      </>
                    )}
                    <label style={{ fontSize: "14px", fontWeight: 500 }}>Adresse e-mail</label>
                    <input type="email" required className="input-field" placeholder="ton@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                    <button type="submit" disabled={isSubmitting || !email} style={{ width: "100%", padding: "16px", background: "#ffbf3f", color: "#1a1412", border: "none", borderRadius: "12px", fontWeight: 600, cursor: "pointer", opacity: isSubmitting || !email ? 0.5 : 1 }}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* STEP 3 - Freelance Trust Details */}
            {step === 3 && flowAction === "freelance" && (
              <div className="chat-message ai">
                <div className="avatar ai"><img src="/cellequejeprefere_rounded.png" alt="Maximilien" width={36} height={36} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} /></div>
                <div className="message-content" style={{ width: "100%", maxWidth: "500px" }}>
                  <p>
                    {freelanceTrust === "oui" ? "Super ! Laissez-moi vos coordonnées pour qu'on en discute de vive voix." : 
                     freelanceTrust === "non" ? "Je comprends. Pouvez-vous me dire ce qui vous freine ?" : 
                     "Quelles sont vos craintes ? Je suis là pour y répondre."}
                  </p>
                  <form onSubmit={handleSubmit} className="form-panel">
                    {freelanceTrust === "oui" ? (
                      <>
                        <label style={{ fontSize: "14px", fontWeight: 500 }}>Téléphone <span style={{ color: "#a3988e" }}>(recommandé)</span></label>
                        <input type="tel" className="input-field" placeholder="06..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                        
                        <label style={{ fontSize: "14px", fontWeight: 500 }}>E-mail</label>
                        <input type="email" required className="input-field" placeholder="ton@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </>
                    ) : (
                      <>
                        <label style={{ fontSize: "14px", fontWeight: 500 }}>Vos remarques</label>
                        <textarea className="input-field" required rows={3} placeholder="Dites-moi tout..." value={details} onChange={(e) => setDetails(e.target.value)} />
                      </>
                    )}
                    
                    <button type="submit" disabled={isSubmitting || (freelanceTrust === "oui" && !email) || (freelanceTrust !== "oui" && !details)} style={{ width: "100%", padding: "16px", background: "#ffbf3f", color: "#1a1412", border: "none", borderRadius: "12px", fontWeight: 600, cursor: "pointer", opacity: isSubmitting ? 0.5 : 1 }}>
                      {isSubmitting ? "Envoi en cours..." : "Valider"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* STEP 4 - Success */}
            {step === 4 && (
              <div className="chat-message ai" style={{ flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div className="avatar ai"><CheckCircle2 size={18} /></div>
                  <div className="message-content">
                    <p><strong>C'est bien reçu !</strong> 🎉<br />Je vous recontacte très rapidement.</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.reload()} 
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "12px 20px", borderRadius: "12px", cursor: "pointer", fontSize: "14px", fontWeight: 500, alignSelf: "center", marginTop: "10px", transition: "background 0.2s" }}
                  onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                  onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                >
                  Faire une nouvelle demande
                </button>
              </div>
            )}
            
            <div ref={bottomRef} style={{ height: "40px" }} />
          </div>
        )}
      </div>

      {/* Input Box (ChatGPT style) - Only show when waiting for initial prompt */}
      {step === 0 && (
        <div className="chat-input-wrapper">
          <form className="chat-input-box" onSubmit={handleFirstSubmit} style={{ position: "relative" }}>
            
            {/* Onboarding Tooltips - Sequenced */}
            {summary.length === 0 ? (
              /* Tooltip 1: Describe project */
              <div style={{ position: "absolute", top: "-55px", left: "20px", background: "rgba(255, 191, 63, 0.15)", border: "1px solid rgba(255, 191, 63, 0.4)", padding: "8px 12px", borderRadius: "12px", color: "#ffbf3f", fontSize: "12px", display: "flex", alignItems: "center", gap: "8px", animation: "fade-in 0.5s ease-out", pointerEvents: "none" }}>
                <div style={{ background: "#ffbf3f", color: "#1a1412", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "11px" }}>1</div>
                <span>Décris ton projet (sans infos confidentielles)</span>
                {/* Arrow pointing down */}
                <div style={{ position: "absolute", bottom: "-6px", left: "24px", width: "10px", height: "10px", background: "rgba(13, 10, 8, 1)", borderBottom: "1px solid rgba(255, 191, 63, 0.4)", borderRight: "1px solid rgba(255, 191, 63, 0.4)", transform: "rotate(45deg)", zIndex: -1 }}></div>
              </div>
            ) : (
              /* Tooltip 2: Send button (appears when user starts typing) */
              <div style={{ position: "absolute", top: "-55px", right: "10px", background: "rgba(255, 191, 63, 0.15)", border: "1px solid rgba(255, 191, 63, 0.4)", padding: "8px 12px", borderRadius: "12px", color: "#ffbf3f", fontSize: "12px", display: "flex", alignItems: "center", gap: "8px", animation: "fade-in 0.5s ease-out", pointerEvents: "none" }}>
                <div style={{ background: "#ffbf3f", color: "#1a1412", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "11px" }}>2</div>
                <span>Lancer la génération</span>
                {/* Arrow pointing down-right towards the button */}
                <div style={{ position: "absolute", bottom: "-6px", right: "20px", width: "10px", height: "10px", background: "rgba(13, 10, 8, 1)", borderBottom: "1px solid rgba(255, 191, 63, 0.4)", borderRight: "1px solid rgba(255, 191, 63, 0.4)", transform: "rotate(45deg)", zIndex: -1 }}></div>
              </div>
            )}

            <textarea 
              placeholder="Ex: Une application de rencontre"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (summary.trim()) handleFirstSubmit(e as any);
                }
              }}
              rows={1}
            />
            <button type="submit" className="send-btn" disabled={!summary.trim()}>
              <ArrowUp size={20} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
