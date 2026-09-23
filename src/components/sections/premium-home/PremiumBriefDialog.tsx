"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2, UploadCloud } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PremiumBriefDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

type FlowType = "" | "document" | "guided";

export function PremiumBriefDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const [flow, setFlow] = useState<FlowType>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const [data, setData] = useState({
    fileUrl: "",
    note: "",
    idea: "",
    features: "",
    name: "",
    email: "",
    phone: "",
  });

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    setStep(0);
    setFlow("");
    setIsSuccess(false);
    setData({ fileUrl: "", note: "", idea: "", features: "", name: "", email: "", phone: "" });
  };

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.open-brief');
      if (target) {
        e.preventDefault();
        dialogRef.current?.showModal();
        document.body.style.overflow = "hidden";
        
        const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
        setSessionId(id);
        
        fetch("/api/track-funnel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ step: "page_view", sessionId: id, action: "Ouverture Brief Dialog" }),
        }).catch(console.error);
      }
    };
    
    document.addEventListener('click', handleOpen);
    
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener('close', closeDialog);
    }
    
    return () => {
      document.removeEventListener('click', handleOpen);
      if (dialog) dialog.removeEventListener('close', closeDialog);
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
          need: flow === "document" ? "Upload de CDC" : "Projet guidé (Idée)",
          sector: "N/A",
          description: flow === "document" 
            ? `Note: ${data.note || "Aucune"}` 
            : `Idée: ${data.idea}\nFonctionnalités: ${data.features}`,
          dataLink: data.fileUrl,
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

  const totalSteps = flow === "document" ? 3 : 4;
  const progressPercent = Math.max(5, (step / totalSteps) * 100);

  const canGoNext = () => {
    if (step === 0) return flow !== "";
    if (flow === "document") {
      if (step === 1) return data.fileUrl !== "";
      if (step === 2) return data.name && data.email;
    } else {
      if (step === 1) return data.idea.trim() !== "";
      if (step === 2) return data.features.trim() !== "";
      if (step === 3) return data.name && data.email;
    }
    return false;
  };

  const handleNext = () => {
    if (step === totalSteps - 1) {
      handleSubmit();
    } else {
      setStep(s => s + 1);
    }
  };

  return (
    <dialog ref={dialogRef} id="brief" aria-labelledby="brief-title" onCancel={closeDialog}>
      <button className="close" type="button" aria-label="Fermer" onClick={closeDialog}>×</button>
      
      {!isSuccess ? (
        <>
          <div className="eyebrow">Votre projet commence ici</div>
          <h2 className="dialog-title" id="brief-title" tabIndex={-1}>Parlons de votre idée.</h2>
          <p className="brief-demo">Aperçu interactif · Aucun envoi automatique.</p>
          
          <div className="brief-progress" aria-hidden="true">
            <i id="brief-progress-fill" style={{ width: `${progressPercent}%`, transition: "width 0.3s ease" }}></i>
          </div>
          
          <p id="brief-step" aria-live="polite">Étape {step + 1} sur {totalSteps}</p>

          <form id="premium-brief-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }} noValidate>
            
            {/* STEP 0 : Choix du parcours */}
            {step === 0 && (
              <fieldset data-panel="choice">
                <legend>Comment souhaitez-vous me présenter votre projet ?</legend>
                <div className="brief-choices">
                  <button type="button" className={`brief-choice ${flow === "document" ? "selected" : ""}`} onClick={() => { setFlow("document"); setStep(1); }}>
                    <span className="choice-icon" aria-hidden="true">▤</span>
                    <strong>J’ai un cahier des charges</strong>
                    <span>Importez votre document et ajoutez une précision si besoin.</span>
                    <b aria-hidden="true">↗&#xFE0E;&#xFE0E;</b>
                  </button>
                  <button type="button" className={`brief-choice ${flow === "guided" ? "selected" : ""}`} onClick={() => { setFlow("guided"); setStep(1); }}>
                    <span className="choice-icon" aria-hidden="true">✳&#xFE0E;&#xFE0E;</span>
                    <strong>J’ai une idée, guidez-moi</strong>
                    <span>Quelques questions simples pour expliquer votre projet.</span>
                    <b aria-hidden="true">↗&#xFE0E;&#xFE0E;</b>
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
                  <strong>{isSubmitting ? "Upload en cours..." : (data.fileUrl ? "Fichier ajouté !" : "Choisir mon cahier des charges")}</strong>
                  <small>PDF, Word ou texte · 10 Mo maximum</small>
                  <input type="file" id="brief-file" accept=".pdf,.doc,.docx,.txt" required disabled={isSubmitting || !!data.fileUrl} onChange={handleFileUpload} />
                </label>
                <p id="brief-file-status" role="status">Le document est envoyé en toute sécurité sur nos serveurs.</p>
                <label htmlFor="brief-note">Une précision à ajouter ? <span>(facultatif)</span></label>
                <textarea id="brief-note" rows={3} placeholder="Vos priorités, une référence, un point important…" value={data.note} onChange={(e) => updateField("note", e.target.value)}></textarea>
              </fieldset>
            )}

            {/* STEP 1 (Guided) : Idée */}
            {step === 1 && flow === "guided" && (
              <fieldset data-panel="idea">
                <legend>Que souhaitez-vous créer ou simplifier ?</legend>
                <label htmlFor="brief-idea">Racontez-moi votre idée</label>
                <textarea id="brief-idea" rows={5} required maxLength={5000} placeholder="J’aimerais une application pour permettre à mes clients de réserver leurs séances…" value={data.idea} onChange={(e) => updateField("idea", e.target.value)}></textarea>
                <p style={{ marginTop: "10px", fontSize: "14px", color: "var(--color-dim)" }}>Pas besoin de termes techniques. Expliquez simplement à quoi votre outil doit servir.</p>
              </fieldset>
            )}

            {/* STEP 2 (Guided) : Features */}
            {step === 2 && flow === "guided" && (
              <fieldset data-panel="features">
                <legend>Qu’est-ce qui compte le plus ?</legend>
                <label htmlFor="brief-features">Les fonctionnalités essentielles</label>
                <textarea id="brief-features" rows={4} required maxLength={5000} placeholder="Par exemple : réservation, paiement en ligne, espace client…" value={data.features} onChange={(e) => updateField("features", e.target.value)}></textarea>
                <p style={{ marginTop: "10px", fontSize: "14px", color: "var(--color-dim)" }}>Si vous hésitez, indiquez simplement « À définir ensemble ».</p>
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

            {/* Actions */}
            {step > 0 && (
              <div className="brief-actions" style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
                <button className="brief-back" type="button" onClick={() => setStep(s => s - 1)}>← Retour</button>
                <button className="button brief-next" type="button" onClick={handleNext} disabled={!canGoNext() || isSubmitting} style={{ opacity: (!canGoNext() || isSubmitting) ? 0.5 : 1 }}>
                  {isSubmitting ? "Envoi..." : (step === totalSteps - 1 ? "Envoyer ma demande" : "Continuer")} <span>→</span>
                </button>
              </div>
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
          <button className="button" onClick={onClose} style={{ width: "auto" }}>Fermer</button>
        </div>
      )}
    </dialog>
  );
}
