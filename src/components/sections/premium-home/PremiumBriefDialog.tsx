"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2, UploadCloud, Smartphone, Laptop, Settings, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { generateNda } from "@/lib/generateNda";

interface PremiumBriefDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

type FlowType = "" | "document" | "guided" | "maquette";

export function PremiumBriefDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [flow, setFlow] = useState<FlowType>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const [data, setData] = useState({
    fileUrl: "",
    note: "",
    projectType: "",
    sector: "",
    details: "",
    name: "",
    email: "",
    phone: "",
    projectLink: "",
  });

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    setStep(0);
    setFlow("");
    setIsSuccess(false);
    setData({ fileUrl: "", note: "", projectType: "", sector: "", details: "", name: "", email: "", phone: "", projectLink: "" });
  };

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.open-brief, .premium-open-brief, .nav-cta');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
        document.body.style.overflow = "hidden";
        
        const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
        setSessionId(id);
        
        if (typeof window !== "undefined" && (window as any).clarity) {
          (window as any).clarity("event", "Ouverture Brief Dialog");
        }
        
        fetch("/api/track-funnel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ step: "page_view", sessionId: id, action: "Ouverture Brief Dialog" }),
        }).catch(console.error);
      }
    };
    
    document.addEventListener('click', handleOpen);
    
    return () => {
      document.removeEventListener('click', handleOpen);
    };
  }, []);

  const updateField = (field: keyof typeof data, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 10 * 1024 * 1024) {
      alert("Le fichier est trop volumineux (Max 10Mo).");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage.from("project_files").upload(fileName, file);
      
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage.from("project_files").getPublicUrl(fileName);
      updateField("fileUrl", publicUrl);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Erreur lors de l'upload. Vérifiez que le bucket Supabase 'project_files' existe et est public.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed", sessionId, action: "Formulaire soumis via Dialog" }),
      });

      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: flow === "document" ? "Upload de CDC" : (flow === "maquette" ? "Création depuis maquette" : `Projet: ${data.projectType}`),
          sector: flow === "document" || flow === "maquette" ? "N/A" : data.sector,
          description: flow === "document" || flow === "maquette" 
            ? `Note: ${data.note || "Aucune"}` 
            : `Détails: ${data.details || "Aucun"}`,
          dataLink: data.fileUrl || data.projectLink || "Aucun",
          email: data.email,
          phone: data.phone,
          name: data.name
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

  const totalSteps = flow === "document" ? 3 : (flow === "maquette" ? 3 : 4);
  const progressPercent = Math.max(5, (step / totalSteps) * 100);

  const canGoNext = () => {
    if (step === 0) return flow !== "";
    if (flow === "document") {
      if (step === 1) return data.fileUrl !== "";
      if (step === 2) return data.name && data.email;
    } else if (flow === "maquette") {
      if (step === 1) return data.fileUrl !== "" || data.projectLink !== "";
      if (step === 2) return data.email !== "";
    } else {
      if (step === 1) return data.projectType !== "";
      if (step === 2) return data.sector !== "";
      if (step === 3) return data.name && data.email;
    }
    return false;
  };

  const [isSimulating, setIsSimulating] = useState(false);

  const handleNext = () => {
    if (flow === "maquette" && step === 1) {
      setIsSimulating(true);
      setTimeout(() => {
        setIsSimulating(false);
        setStep(s => s + 1);
      }, 2500);
      return;
    }

    if (step === totalSteps - 1) {
      handleSubmit();
    } else {
      setStep(s => s + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={closeDialog}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()} id="brief" aria-labelledby="brief-title">
        <button className="close" type="button" aria-label="Fermer" onClick={closeDialog}>×</button>
      
      {!isSuccess ? (
        <>
          <div className="eyebrow">Votre projet commence ici</div>

          
          <div className="brief-progress" aria-hidden="true" style={{ marginTop: "10px" }}>
            <i id="brief-progress-fill" style={{ width: `${progressPercent}%`, transition: "width 0.3s ease" }}></i>
          </div>
          
          <form id="premium-brief-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }} noValidate>
            
            {isSimulating ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <div className="spinner" style={{ margin: "0 auto 20px", width: "40px", height: "40px", border: "3px solid rgba(255,191,63,0.3)", borderTopColor: "#ffbf3f", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Analyse de la maquette...</h3>
                <p style={{ color: "var(--color-dim)" }}>Préparation de votre application en cours</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            ) : (
              <>
                {/* STEP 0 : Choix du parcours */}
                {step === 0 && (
                  <fieldset data-panel="choice">
                    <legend>Comment souhaitez-vous présenter votre projet ?</legend>
                    <div className="brief-choices" style={{ gridTemplateColumns: "1fr" }}>
                      <button type="button" className={`brief-choice ${flow === "document" ? "selected" : ""}`} onClick={() => { setFlow("document"); setStep(1); }} style={{ padding: "16px 20px", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                        <span className="choice-icon" aria-hidden="true" style={{ fontSize: "24px", margin: 0, flexShrink: 0 }}>▤</span>
                        <div style={{ flex: 1, textAlign: "left", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <strong style={{ fontSize: "15px", margin: 0, paddingRight: 0 }}>J’ai un cahier des charges</strong>
                          <span style={{ fontSize: "12px", lineHeight: "1.4", margin: 0 }}>Importez votre document et ajoutez une précision si besoin.</span>
                        </div>
                        <b aria-hidden="true" style={{ fontSize: "18px", margin: 0, position: "static" }}>↗&#xFE0E;&#xFE0E;</b>
                      </button>
                      
                      <button type="button" className={`brief-choice ${flow === "guided" ? "selected" : ""}`} onClick={() => { setFlow("guided"); setStep(1); }} style={{ padding: "16px 20px", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                        <span className="choice-icon" aria-hidden="true" style={{ fontSize: "24px", margin: 0, flexShrink: 0 }}>✳&#xFE0E;&#xFE0E;</span>
                        <div style={{ flex: 1, textAlign: "left", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <strong style={{ fontSize: "15px", margin: 0, paddingRight: 0 }}>J’ai une idée, guidez-moi</strong>
                          <span style={{ fontSize: "12px", lineHeight: "1.4", margin: 0 }}>Quelques questions simples pour expliquer votre projet.</span>
                        </div>
                        <b aria-hidden="true" style={{ fontSize: "18px", margin: 0, position: "static" }}>↗&#xFE0E;&#xFE0E;</b>
                      </button>

                      <button type="button" className={`brief-choice ${flow === "maquette" ? "selected" : ""}`} onClick={() => { setFlow("maquette"); setStep(1); }} style={{ padding: "16px 20px", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                        <span className="choice-icon" aria-hidden="true" style={{ fontSize: "24px", margin: 0, flexShrink: 0 }}>❏</span>
                        <div style={{ flex: 1, textAlign: "left", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <strong style={{ fontSize: "15px", margin: 0, paddingRight: 0 }}>J’ai déjà une maquette</strong>
                          <span style={{ fontSize: "12px", lineHeight: "1.4", margin: 0 }}>Importez votre design pour générer l'application.</span>
                        </div>
                        <b aria-hidden="true" style={{ fontSize: "18px", margin: 0, position: "static" }}>↗&#xFE0E;&#xFE0E;</b>
                      </button>
                    </div>
                  </fieldset>
                )}

            {/* STEP 1 (Document) : Upload */}
            {step === 1 && flow === "document" && (
              <fieldset data-panel="document">
                <legend>Votre projet, noir sur blanc.</legend>
                <label className="upload-zone" htmlFor="brief-file" style={{ borderColor: data.fileUrl ? "var(--lime)" : "", backgroundColor: data.fileUrl ? "rgba(189,255,0,0.05)" : "" }}>
                  <span aria-hidden="true" style={{ color: data.fileUrl ? "var(--lime)" : "" }}>{data.fileUrl ? "✓\uFE0E" : "↑"}</span>
                  <strong>{isSubmitting ? "Upload en cours..." : (data.fileUrl ? "Fichier ajouté !" : "Importer mon cahier des charges")}</strong>
                  <small>PDF, Word ou texte · 10 Mo maximum</small>
                  <input type="file" id="brief-file" accept=".pdf,.doc,.docx,.txt" required disabled={isSubmitting || !!data.fileUrl} onChange={handleFileUpload} />
                </label>
                <div style={{ marginTop: "15px", marginBottom: "25px", textAlign: "center" }}>
                  <button type="button" onClick={() => generateNda(data.projectType || "Votre Projet")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", borderRadius: "10px", border: "1px solid #59402f", backgroundColor: "#211a16", color: "#ffbf3f", cursor: "pointer", fontSize: "13px", margin: "0 auto", transition: "all 0.2s" }} onMouseOver={(e) => e.currentTarget.style.borderColor = "#ff702d"} onMouseOut={(e) => e.currentTarget.style.borderColor = "#59402f"}>
                    <Download size={16} /> Télécharger le modèle d'accord de confidentialité (NDA)
                  </button>
                </div>
                <label htmlFor="brief-note">Une précision à ajouter ? <span>(facultatif)</span></label>
                <textarea id="brief-note" rows={3} placeholder="Vos priorités, une référence, un point important…" value={data.note} onChange={(e) => updateField("note", e.target.value)}></textarea>
              </fieldset>
            )}

            {/* STEP 1 (Maquette) : Upload ou Lien */}
            {step === 1 && flow === "maquette" && (
              <fieldset data-panel="maquette">
                <legend>Partagez votre maquette</legend>
                
                <div style={{ marginBottom: "25px" }}>
                  <label htmlFor="brief-link">Lien vers votre maquette <span>(Figma, v0, Bolt, Lovable...)</span></label>
                  <input id="brief-link" type="url" placeholder="https://..." value={data.projectLink} onChange={(e) => updateField("projectLink", e.target.value)} disabled={!!data.fileUrl} style={{ opacity: data.fileUrl ? 0.5 : 1 }} />
                </div>

                <div style={{ textAlign: "center", marginBottom: "20px", color: "var(--color-dim)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Ou</div>

                <label className="upload-zone" htmlFor="brief-maquette" style={{ borderColor: data.fileUrl ? "var(--lime)" : "", backgroundColor: data.fileUrl ? "rgba(189,255,0,0.05)" : "", opacity: data.projectLink ? 0.5 : 1 }}>
                  <span aria-hidden="true" style={{ color: data.fileUrl ? "var(--lime)" : "" }}>{data.fileUrl ? "✓\uFE0E" : "↑"}</span>
                  <strong>{isSubmitting ? "Upload en cours..." : (data.fileUrl ? "Fichier ajouté !" : "Importer un fichier (.zip)")}</strong>
                  <small>Fichier .zip, image ou PDF · 10 Mo max</small>
                  <input type="file" id="brief-maquette" accept=".zip,image/*,.pdf" disabled={isSubmitting || !!data.fileUrl || !!data.projectLink} onChange={handleFileUpload} />
                </label>
              </fieldset>
            )}

            {/* STEP 1 (Guided) : Type de solution */}
            {step === 1 && flow === "guided" && (
              <fieldset data-panel="idea">
                <legend>Quel type de solution envisagez-vous ?</legend>
                <div className="brief-choices" style={{ gridTemplateColumns: "1fr", gap: "10px" }}>
                  {[
                    { id: "Web & SaaS", title: "Plateforme Web & SaaS", icon: <Laptop size={24} color="var(--lime)" />, desc: "Logiciel en ligne, marketplace, portail" },
                    { id: "Mobile & PWA", title: "Application Mobile & PWA", icon: <Smartphone size={24} color="var(--lime)" />, desc: "Pour iOS, Android ou le web mobile" },
                    { id: "Site Vitrine", title: "Site vitrine / Landing page", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>, desc: "Présence en ligne, portfolio, page d'atterrissage" },
                    { id: "Outil Métier", title: "Outil métier / Automatisation", icon: <Settings size={24} color="var(--lime)" />, desc: "CRM sur mesure, gestion interne, flux" }
                  ].map(opt => (
                    <button 
                      key={opt.id} 
                      type="button" 
                      className={`brief-choice ${data.projectType === opt.id ? "selected" : ""}`} 
                      onClick={() => updateField("projectType", opt.id)}
                      style={{ padding: "16px", flexDirection: "row", alignItems: "center", gap: "20px" }}
                    >
                      <span className="choice-icon" aria-hidden="true" style={{ fontSize: 0, color: "var(--lime)" }}>{opt.icon}</span>
                      <div style={{ flex: 1, textAlign: "left" }}>
                        <strong style={{ display: "block", marginBottom: "4px" }}>{opt.title}</strong>
                        <span style={{ fontSize: "12px", color: "var(--color-dim)" }}>{opt.desc}</span>
                      </div>
                      <div style={{ opacity: data.projectType === opt.id ? 1 : 0, transition: "opacity 0.2s" }}>
                        <CheckCircle2 size={22} color="var(--lime)" />
                      </div>
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* STEP 2 (Guided) : Secteur et précisions */}
            {step === 2 && flow === "guided" && (
              <fieldset data-panel="features">
                <legend>Votre domaine d'activité</legend>
                <div className="brief-choices" style={{ gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "25px" }}>
                  {[
                    "Comptabilité / Expertise",
                    "Immobilier / PropTech",
                    "Santé / MedTech",
                    "E-commerce / Retail",
                    "Finance / FinTech",
                    "Éducation / EdTech",
                    "Artisanat / Services",
                    "Autre secteur"
                  ].map(sec => (
                    <button
                      key={sec}
                      type="button"
                      className={`brief-choice ${data.sector === sec ? "selected" : ""}`}
                      onClick={() => updateField("sector", sec)}
                      style={{ padding: "12px 14px", minHeight: "0", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "10px" }}
                    >
                      <strong style={{ fontSize: "13px", margin: 0, fontWeight: data.sector === sec ? 600 : 400 }}>{sec}</strong>
                      <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: data.sector === sec ? "5px solid var(--lime)" : "1px solid var(--border)", transition: "all 0.2s", background: data.sector === sec ? "var(--bg-input)" : "transparent" }} />
                    </button>
                  ))}
                </div>

                <label htmlFor="brief-details">Quelques précisions ? <span>(facultatif)</span></label>
                <textarea id="brief-details" rows={4} maxLength={5000} placeholder="Vos objectifs, un concurrent que vous aimez, une contrainte spécifique…" value={data.details} onChange={(e) => updateField("details", e.target.value)}></textarea>
              </fieldset>
            )}

            {/* LAST STEP : Contact */}
            {((step === 2 && flow === "document") || (step === 3 && flow === "guided")) && (
              <fieldset data-panel="contact">
                <legend>Où puis-je vous répondre ?</legend>
                <div className="brief-fields">
                  <div>
                    <label htmlFor="brief-name">Votre prénom</label>
                    <input id="brief-name" required maxLength={100} placeholder="Votre prénom" value={data.name} onChange={(e) => updateField("name", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="brief-email">Votre email</label>
                    <input id="brief-email" type="email" required placeholder="vous@exemple.fr" value={data.email} onChange={(e) => updateField("email", e.target.value)} />
                  </div>
                </div>
                <label htmlFor="brief-phone" style={{ marginTop: "15px", display: "block" }}>Votre téléphone <span>(facultatif)</span></label>
                <input id="brief-phone" type="tel" placeholder="06…" value={data.phone} onChange={(e) => updateField("phone", e.target.value)} />
                <p style={{ marginTop: "15px", fontSize: "14px", color: "var(--color-dim)" }}>Ces coordonnées servent à échanger avec vous au sujet de votre projet.</p>
              </fieldset>
            )}

            {/* LAST STEP (Maquette) : Contact */}
            {(step === 2 && flow === "maquette") && (
              <fieldset data-panel="contact-maquette">
                <legend>Où envoyer votre application ?</legend>
                <div className="brief-fields" style={{ display: 'block' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="brief-email-maquette">Votre email</label>
                    <input id="brief-email-maquette" type="email" required placeholder="vous@exemple.fr" value={data.email} onChange={(e) => updateField("email", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="brief-phone-maquette">Votre téléphone <span>(facultatif mais recommandé)</span></label>
                    <input id="brief-phone-maquette" type="tel" placeholder="06…" value={data.phone} onChange={(e) => updateField("phone", e.target.value)} />
                  </div>
                </div>
                <p style={{ marginTop: "15px", fontSize: "14px", color: "var(--color-dim)" }}>
                  Nous vous enverrons le lien de l'application dès qu'elle sera prête.
                </p>
              </fieldset>
            )}

            {/* Actions */}
            {step > 0 && (
              <div className="brief-actions" style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
                <button className="brief-back" type="button" onClick={() => setStep(s => s - 1)}>← Retour</button>
                <button className="button brief-next" type="button" onClick={handleNext} disabled={!canGoNext() || isSubmitting} style={{ opacity: (!canGoNext() || isSubmitting) ? 0.5 : 1 }}>
                  {isSubmitting ? "Envoi..." : (step === 1 && flow === "maquette" ? "Créer l'application" : (step === totalSteps - 1 ? "Envoyer ma demande" : "Continuer"))} <span>→</span>
                </button>
              </div>
            )}
              </>
            )}
            
          </form>

          <div className="brief-direct" style={{ marginTop: "30px", textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
            <span style={{ display: "block", color: "var(--color-dim)", marginBottom: "5px" }}>Vous préférez en discuter ?</span>
            <a href="mailto:maximilien.godeau.off@gmail.com?subject=Parlons%20de%20mon%20projet" style={{ color: "var(--lime)", fontWeight: "bold" }}>Contactez-moi directement par email ↗&#xFE0E;</a>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(189,255,0,0.1)", marginBottom: "20px" }}>
            <CheckCircle2 size={32} color="var(--lime)" />
          </div>
          <h2 className="dialog-title">Demande envoyée !</h2>
          <p style={{ color: "var(--color-dim)", marginTop: "10px", marginBottom: "30px" }}>
            Merci pour votre confiance. Je reviens vers vous très rapidement avec votre maquette.
          </p>
          <button className="button" onClick={closeDialog} style={{ width: "auto" }}>Fermer</button>
        </div>
      )}
      </div>
    </div>
  );
}
