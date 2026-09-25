"use client";
import React, { useState } from "react";
import { UploadCloud, CheckCircle2, Loader2, Smartphone, ShieldCheck, CreditCard, Bell, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MaquetteAppClient() {
  const [step, setStep] = useState(0); // 0: upload, 1: analyzing, 2: result, 3: success
  const [fileUrl, setFileUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [analyzeStep, setAnalyzeStep] = useState(0);

  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startAnalysis = () => {
    setStep(1);
    
    setTimeout(() => setAnalyzeStep(1), 1500);
    setTimeout(() => setAnalyzeStep(2), 3500);
    setTimeout(() => setAnalyzeStep(3), 5500);
    setTimeout(() => setStep(2), 7500);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    
    if (f.size > 15 * 1024 * 1024) {
      alert("Le fichier est trop volumineux (Max 15Mo).");
      return;
    }
    
    setIsUploading(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      const fileExt = f.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage.from("project_files").upload(fileName, f);
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage.from("project_files").getPublicUrl(fileName);
      setFileUrl(publicUrl);
      setIsUploading(false);
      startAnalysis();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Erreur lors de l'upload. Veuillez réessayer.");
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create session ID
      const sessionId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15);

      await fetch("/api/track-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "completed", sessionId, action: "Landing Maquette vers App soumise" }),
      });

      const res = await fetch("/api/submit-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: "Générateur depuis maquette (Ads)",
          sector: "N/A",
          description: "A soumis une maquette pour obtenir une estimation MVP",
          dataLink: fileUrl || "Aucun fichier",
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
        setStep(3);
      } else {
        alert("Une erreur est survenue.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const AnalysisStep = ({ title, isActive, isDone }: { title: string, isActive: boolean, isDone: boolean }) => (
    <div className={`analysis-step ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}>
      {isDone ? <CheckCircle2 size={24} color="#84cc16" /> : (isActive ? <Loader2 className="animate-spin" size={24} color="#ffbf3f" /> : <div style={{width: 24, height: 24, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)'}} />)}
      <span>{title}</span>
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        header.top, .mobile-bottom-nav, #mobile-nav, nav.nav, footer { display: none !important; }
        body { padding-top: 0 !important; padding-bottom: 0 !important; background-color: #0d0a08; color: #f1eee8; }
        
        .maquette-container { max-width: 650px; margin: 0 auto; min-height: 100vh; display: flex; flex-direction: column; padding: 60px 20px 40px; }
        .maquette-main { flex: 1; display: flex; flex-direction: column; justify-content: center; }
        
        .m-title { font-size: clamp(32px, 5vw, 56px); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 16px; text-align: center; font-weight: 700; }
        .m-subtitle { font-size: clamp(16px, 2vw, 20px); color: #a3988e; text-align: center; margin-bottom: 50px; max-width: 500px; margin-inline: auto; line-height: 1.5; }
        
        .upload-area { border: 2px dashed #46362c; border-radius: 24px; padding: 60px 20px; cursor: pointer; transition: all 0.3s; position: relative; background: rgba(255, 255, 255, 0.02); text-align: center; }
        .upload-area:hover { border-color: #ffbf3f; background: rgba(255, 191, 63, 0.05); transform: translateY(-2px); }
        .upload-area input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        
        .analysis-step { font-size: 18px; color: #a3988e; margin: 20px 0; display: flex; align-items: center; gap: 16px; padding: 10px 20px; border-radius: 12px; transition: all 0.3s; }
        .analysis-step.active { color: white; font-weight: 500; background: rgba(255, 191, 63, 0.1); }
        .analysis-step.done { color: #f1eee8; opacity: 0.7; }
        
        .result-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 30px; margin-top: 20px; }
        
        .result-feature { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; color: #d6cfc5; font-size: 16px; background: rgba(255,255,255,0.02); padding: 12px 16px; border-radius: 12px; }
        .result-feature svg { color: #ffbf3f; }
        
        .input-field { width: 100%; padding: 18px 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; color: white; margin-bottom: 16px; outline: none; font-size: 16px; transition: border-color 0.2s; }
        .input-field:focus { border-color: #ffbf3f; background: rgba(255,255,255,0.06); }
        
        .cta-btn { background: #ffbf3f; color: #1a1412; font-weight: 600; font-size: 18px; padding: 20px 32px; border-radius: 30px; border: none; cursor: pointer; width: 100%; transition: all 0.2s; box-shadow: 0 4px 20px rgba(255, 191, 63, 0.25); display: flex; justify-content: center; align-items: center; gap: 10px; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 25px rgba(255, 191, 63, 0.35); }
        .cta-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
        
        .m-footer { text-align: center; color: #59402f; font-size: 13px; margin-top: 60px; padding-bottom: 20px; }
      `}} />
      
      <div className="maquette-container">
        <div className="maquette-main">
          
          {step === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="m-title">Transformez votre maquette en application.</h1>
              <p className="m-subtitle">Importez votre maquette et obtenez gratuitement une première estimation de votre projet.</p>
              
              <div className="upload-area">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(255,191,63,0.1)', marginBottom: 20 }}>
                  {isUploading ? <Loader2 className="animate-spin" size={32} color="#ffbf3f" /> : <UploadCloud size={32} color="#ffbf3f" />}
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>{isUploading ? "Upload en cours..." : "Glissez votre maquette ici"}</h3>
                <p style={{ color: '#a3988e', fontSize: 14 }}>PNG / JPG / PDF / Figma (.zip)</p>
                <input type="file" accept="image/*,.pdf,.zip" onChange={handleFileUpload} disabled={isUploading} title="Importer un fichier" />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ maxWidth: 450, margin: '0 auto', width: '100%' }}>
              <h2 style={{ textAlign: 'center', fontSize: 24, marginBottom: 40 }}>Analyse de votre projet...</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <AnalysisStep title="Analyse de vos écrans..." isActive={analyzeStep === 0} isDone={analyzeStep > 0} />
                <AnalysisStep title="Identification des fonctionnalités..." isActive={analyzeStep === 1} isDone={analyzeStep > 1} />
                <AnalysisStep title="Estimation de la complexité technique..." isActive={analyzeStep === 2} isDone={analyzeStep > 2} />
                <AnalysisStep title="Préparation de votre estimation..." isActive={analyzeStep === 3} isDone={analyzeStep > 3} />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 16px', borderRadius: '30px', backgroundColor: 'rgba(132, 204, 22, 0.1)', color: '#84cc16', fontWeight: 600, fontSize: 14, marginBottom: 20 }}>
                  ✓ Analyse terminée
                </div>
                <h2 style={{ fontSize: 32, marginBottom: 10 }}>Votre projet est prêt à être étudié</h2>
                <p style={{ color: '#a3988e' }}>Nous avons identifié les éléments clés de votre maquette pour une première version (MVP).</p>
              </div>

              <div className="result-card">
                <h3 style={{ fontSize: 18, marginBottom: 20, color: '#f1eee8' }}>Fonctionnalités détectées</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 30 }}>
                  <div className="result-feature"><User size={20} /> Connexion & Profil</div>
                  <div className="result-feature"><CreditCard size={20} /> Paiement</div>
                  <div className="result-feature"><Bell size={20} /> Notifications</div>
                  <div className="result-feature"><ShieldCheck size={20} /> Sécurité des données</div>
                </div>

                <div style={{ padding: '20px', background: 'rgba(255,191,63,0.05)', borderRadius: 16, marginBottom: 30, border: '1px solid rgba(255,191,63,0.1)' }}>
                  <div style={{ fontSize: 14, color: '#ffbf3f', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Niveau de complexité estimé</div>
                  <div style={{ fontSize: 24, fontWeight: 700 }}>Intermédiaire</div>
                </div>

                <h3 style={{ fontSize: 18, marginBottom: 20, color: '#f1eee8' }}>Où envoyer votre estimation ?</h3>
                <form onSubmit={handleSubmit}>
                  <input className="input-field" type="text" placeholder="Votre prénom" required value={data.name} onChange={e => setData({...data, name: e.target.value})} />
                  <input className="input-field" type="email" placeholder="Votre email" required value={data.email} onChange={e => setData({...data, email: e.target.value})} />
                  <input className="input-field" type="tel" placeholder="Votre téléphone (pour en discuter)" required value={data.phone} onChange={e => setData({...data, phone: e.target.value})} />
                  
                  <button type="submit" className="cta-btn" disabled={isSubmitting || !data.name || !data.email || !data.phone} style={{ marginTop: 10 }}>
                    {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : "Recevoir mon estimation"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(132, 204, 22, 0.1)', marginBottom: 30 }}>
                <CheckCircle2 size={40} color="#84cc16" />
              </div>
              <h2 style={{ fontSize: 36, marginBottom: 20 }}>Demande envoyée !</h2>
              <p style={{ fontSize: 18, color: '#a3988e', maxWidth: 400, margin: '0 auto', lineHeight: 1.6 }}>
                J'ai bien reçu votre maquette. Je l'étudie en détail et je vous rappelle très vite pour vous donner une estimation concrète.
              </p>
            </motion.div>
          )}

        </div>
        
        <div className="m-footer">
          Développé par Maximilien — Développeur freelance applications web & mobile
        </div>
      </div>
    </>
  );
}
