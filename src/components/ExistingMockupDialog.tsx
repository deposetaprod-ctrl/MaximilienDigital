"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

export function ExistingMockupDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const [data, setData] = useState({
    details: "",
    techStack: "",
    name: "",
    email: "",
    phone: "",
  });

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    setIsSuccess(false);
    setData({ details: "", techStack: "", name: "", email: "", phone: "" });
  };

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.open-existing-mockup');
      if (target) {
        e.preventDefault();
        dialogRef.current?.showModal();
        document.body.style.overflow = "hidden";
        
        const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);
        setSessionId(id);
        
        fetch("/api/track-funnel", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ step: "page_view", sessionId: id, action: "Ouverture Modale Maquette Existante" }),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed", sessionId, action: "Formulaire Maquette Existante soumis" }),
      });

      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: "Projet avec maquette existante",
          sector: `Format/Tech: ${data.techStack}`,
          description: `Description: ${data.details}`,
          dataLink: "N/A",
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

  const canSubmit = data.details && data.techStack && data.name && data.email;

  return (
    <dialog ref={dialogRef} id="brief" aria-labelledby="existing-mockup-title" onCancel={closeDialog}>
      <button className="close" type="button" aria-label="Fermer" onClick={closeDialog}>×</button>
      
      {!isSuccess ? (
        <>
          <div className="eyebrow">Vous avez déjà fait le plus dur</div>
          <h2 className="dialog-title" id="existing-mockup-title" tabIndex={-1}>Envoyez-moi votre maquette.</h2>
          <p style={{ marginBottom: "25px", fontSize: "14px", color: "var(--color-dim)" }}>
            Décrivez-moi brièvement le projet, je vous recontacterai par email ou téléphone pour récupérer les fichiers (Figma, code, etc.) et en discuter.
          </p>

          <form id="existing-mockup-form" onSubmit={handleSubmit} noValidate>
            <fieldset style={{ margin: 0, padding: 0, border: 0 }}>
              
              <label htmlFor="mockup-details" style={{ display: "block", marginBottom: "8px" }}>C'est quoi le projet ?</label>
              <textarea 
                id="mockup-details" 
                rows={3} 
                required
                placeholder="Exemple : Une application de mise en relation..." 
                value={data.details} 
                onChange={(e) => updateField("details", e.target.value)}
                style={{ marginBottom: "20px" }}
              ></textarea>

              <label htmlFor="mockup-tech" style={{ display: "block", marginBottom: "8px" }}>Quel est le format actuel de votre maquette ?</label>
              <input 
                id="mockup-tech" 
                required
                placeholder="Ex : Figma, HTML, Adobe XD..." 
                value={data.techStack} 
                onChange={(e) => updateField("techStack", e.target.value)}
                style={{ marginBottom: "20px" }}
              />

              <div className="brief-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "20px" }}>
                <div>
                  <label htmlFor="mockup-name" style={{ display: "block", marginBottom: "8px" }}>Votre prénom</label>
                  <input id="mockup-name" required placeholder="Votre prénom" value={data.name} onChange={(e) => updateField("name", e.target.value)} />
                </div>
                <div>
                  <label htmlFor="mockup-email" style={{ display: "block", marginBottom: "8px" }}>Votre email</label>
                  <input id="mockup-email" type="email" required placeholder="vous@exemple.fr" value={data.email} onChange={(e) => updateField("email", e.target.value)} />
                </div>
              </div>

              <label htmlFor="mockup-phone" style={{ display: "block", marginBottom: "8px" }}>Votre téléphone <span>(facultatif)</span></label>
              <input id="mockup-phone" type="tel" placeholder="06…" value={data.phone} onChange={(e) => updateField("phone", e.target.value)} />

            </fieldset>

            <div className="brief-actions" style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
              <button 
                className="button" 
                type="submit" 
                disabled={!canSubmit || isSubmitting} 
                style={{ opacity: (!canSubmit || isSubmitting) ? 0.5 : 1, width: "100%", justifyContent: "center" }}
              >
                {isSubmitting ? "Envoi..." : "Envoyer ma demande"} <span>→</span>
              </button>
            </div>
          </form>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(189,255,0,0.1)", marginBottom: "20px" }}>
            <CheckCircle2 size={32} color="var(--lime)" />
          </div>
          <h2 className="dialog-title">Demande envoyée !</h2>
          <p style={{ color: "var(--color-dim)", marginTop: "10px", marginBottom: "30px" }}>
            Merci ! Je vous recontacte très vite pour récupérer votre maquette et en discuter.
          </p>
          <button className="button" onClick={closeDialog} style={{ width: "auto", margin: "0 auto" }}>Fermer</button>
        </div>
      )}
    </dialog>
  );
}
