"use client";

import { useState, useEffect } from "react";
import { FileText, User, Layers, Download, Target, Cpu, ShieldCheck, CheckCircle, CreditCard, Check, Plus, Trash2, Send } from "lucide-react";

export default function DevisClient() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAdmin(window.location.search.includes('admin=true'));
    }
  }, []);

  const [clientName, setClientName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [acompte, setAcompte] = useState<number | "">(0);
  const [delay, setDelay] = useState("");
  
  // RIB info
  const [titulaire, setTitulaire] = useState("Maximilien");
  const [iban, setIban] = useState("FR76 0000 0000 0000 0000 0000 000");
  const [bic, setBic] = useState("XXXXFRPP");

  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [features, setFeatures] = useState([
    { id: "1", text: "Interface responsive (Mobile, Tablette, PC)" },
    { id: "2", text: "Design UI/UX premium & micro-animations" },
    { id: "3", text: "Architecture Serveur / Base de données" }
  ]);
  const [newFeature, setNewFeature] = useState("");

  const downloadPDF = () => {
    window.print();
  };

  const submitDevis = async () => {
    if (!clientEmail) {
      alert("Veuillez renseigner un email de contact.");
      return;
    }
    
    setIsSending(true);
    try {
      const response = await fetch('/api/submit-devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          projectTitle,
          projectDesc,
          budget: price,
          delay,
          features: features.map(f => f.text)
        })
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      alert("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSending(false);
    }
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, { id: Date.now().toString(), text: newFeature.trim() }]);
      setNewFeature("");
    }
  };

  const removeFeature = (id: string) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  // The A4 Document (shared between screen preview and print)
  const QuoteDocument = () => (
    <div id="quote-document" className="bg-white text-slate-800 shadow-xl font-sans" style={{ width: '210mm', minHeight: '297mm', padding: '20mm', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact', position: 'relative' }}>
      
      {/* Header */}
      <header className="flex justify-between items-start border-b-2 border-orange-500 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{isAdmin ? "DEVIS" : "DEMANDE DE PROJET"}</h1>
          <p className="text-orange-500 font-semibold mt-1 uppercase">VOTRE APPLICATION SUR-MESURE</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg text-slate-900">Maximilien</p>
          <p className="text-slate-500">Expert Développement & Stratégie</p>
          <p className="text-slate-500">contact@maximilien.digital</p>
          <p className="text-slate-400 text-xs mt-2">Date: {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </header>

      {/* Intro */}
      <section className="mb-8" style={{ breakInside: 'avoid' }}>
        <p className="mb-4">Bonjour <strong>{clientName || "..."}</strong>,</p>
        <p className="mb-4">
          {isAdmin 
            ? <>Suite à votre demande de devis, voici ma proposition pour le projet : <strong className="text-orange-500">{projectTitle || "..."}</strong>.</>
            : <>Voici la configuration souhaitée pour le projet : <strong className="text-orange-500">{projectTitle || "..."}</strong>.</>}
        </p>
        <p className="italic text-slate-600 border-l-4 border-slate-300 pl-4 py-1">
          Mon objectif est simple : transformer votre idée en application fonctionnelle, clé en main et exploitable, sans exploser votre budget, et en vous livrant le code source.
        </p>
      </section>

      {/* Compréhension du besoin */}
      <section className="mb-8 bg-slate-50 p-6 rounded-lg border border-slate-100" style={{ breakInside: 'avoid' }}>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-orange-500" /> 1. {isAdmin ? "Compréhension de votre besoin" : "Description du besoin"}
        </h2>
        <p className="whitespace-pre-line text-sm">{projectDesc || "En attente de description..."}</p>
      </section>

      {/* Solution */}
      <section className="mb-8" style={{ breakInside: 'avoid' }}>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-orange-500" /> 2. La Solution technique
        </h2>
        <p className="mb-4 text-sm">{isAdmin ? "Pour répondre parfaitement à cet enjeu, je vous propose le développement sur-mesure des fonctionnalités suivantes :" : "Fonctionnalités souhaitées pour ce projet :"}</p>
        
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="py-2 px-4">Périmètre d'intervention inclus</th>
                <th className="py-2 px-4 w-24 text-center">Inclus</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.id} className={`border-b border-slate-200 ${i % 2 === 0 ? 'bg-slate-50' : ''}`}>
                  <td className="py-2 px-4 font-medium text-slate-700">{f.text}</td>
                  <td className="py-2 px-4 text-center text-green-500"><Check className="w-4 h-4 mx-auto" /></td>
                </tr>
              ))}
              <tr className="border-b-0 bg-orange-50">
                <td className="py-2 px-4 text-orange-600 font-bold">Livraison code source complet + Droits</td>
                <td className="py-2 px-4 text-center text-green-500"><Check className="w-4 h-4 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Les Engagements */}
      <section className="mb-8" style={{ breakInside: 'avoid' }}>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-orange-500" /> 3. Mes Engagements
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <p><strong>Code source 100% à vous</strong><br/><span className="text-xs text-slate-500">Pas d'abonnement caché, pas de dépendance.</span></p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <p><strong>Satisfaction garantie</strong><br/><span className="text-xs text-slate-500">Validation à chaque étape clé du projet.</span></p>
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="mb-8" style={{ breakInside: 'avoid' }}>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-orange-500" /> 4. Investissement & Délais
        </h2>
        
        <div className="bg-slate-800 text-white rounded-xl p-6 flex items-center justify-between shadow-lg" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-1">Développement complet clé en main</h3>
            <p className="text-sm text-slate-300">Livraison estimée : <strong>{delay || "..."}</strong></p>
          </div>
          <div className="text-right">
            {isAdmin ? (
              <>
                <p className="text-3xl font-black">{new Intl.NumberFormat('fr-FR').format(Number(price) || 0)} €</p>
                {Number(acompte) > 0 && <p className="text-sm font-medium text-orange-400 mt-1">Acompte à la signature : {new Intl.NumberFormat('fr-FR').format(Number(acompte))} €</p>}
                <p className="text-xs text-slate-300 mt-1">Net de taxes</p>
              </>
            ) : (
              <>
                <p className="text-xl font-black">Budget proposé</p>
                <p className="text-3xl font-black text-orange-400">{new Intl.NumberFormat('fr-FR').format(Number(price) || 0)} €</p>
                <p className="text-xs text-slate-300 mt-1">A valider ensemble</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer / RIB (Only Admin) */}
      {isAdmin && (
        <section className="mt-8 pt-6 border-t border-slate-200 text-sm" style={{ breakInside: 'avoid' }}>
          <h2 className="font-bold text-slate-800 mb-4">Informations de règlement</h2>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-wrap justify-between gap-4">
            <div>
              <p className="text-slate-500 mb-1">Titulaire du compte</p>
              <p className="font-mono font-medium text-slate-800">{titulaire}</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">IBAN</p>
              <p className="font-mono font-medium text-slate-800">{iban}</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">BIC</p>
              <p className="font-mono font-medium text-slate-800">{bic}</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer Text */}
      <footer className="mt-12 text-center text-slate-500 text-sm" style={{ breakInside: 'avoid' }}>
        <p className="font-bold text-slate-700">Comment démarrer ?</p>
        <p>Validez ce {isAdmin ? "devis" : "projet"} et planifions notre appel de lancement pour la <strong>Phase 1 : Découverte & Maquettage</strong>.</p>
        <p className="mt-4 italic">Au plaisir de construire ce beau projet avec vous !</p>
      </footer>

    </div>
  );

  return (
    <>
      {/* Print-only styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body > * { display: none !important; }
          #print-zone { display: block !important; }
          #print-zone #quote-document {
            width: 100% !important;
            min-height: auto !important;
            padding: 15mm !important;
            box-shadow: none !important;
          }
        }
        @media screen {
          #print-zone { display: none; }
        }
      `}} />

      {/* Hidden print zone outside the main layout */}
      <div id="print-zone">
        <QuoteDocument />
      </div>

      {/* Main UI (screen only) */}
      <div className="pt-24 md:pt-20 pb-10 px-4 max-w-[1600px] mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-140px)]">
          
          {/* Left Panel: Form */}
          <div className="w-full md:w-1/3 bg-card border border-border rounded-xl flex flex-col h-full shadow-lg overflow-hidden">
            <div className="p-6 bg-secondary text-secondary-foreground border-b border-border sticky top-0 z-20">
              <h1 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Générateur de Devis
              </h1>
              <p className="text-sm opacity-80 mt-1">{isAdmin ? "Créez des propositions irrésistibles" : "Votre proposition sur-mesure"}</p>
            </div>

            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
              {/* Informations Client */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b border-border pb-2 flex items-center gap-2 text-foreground">
                  <User className="w-5 h-5 text-primary" /> {isAdmin ? "Client & Projet" : "Projet"}
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-1">{isAdmin ? "Nom du client" : "Votre nom"}</label>
                  <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Titre du projet</label>
                  <input type="text" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description du besoin</label>
                  <textarea rows={4} value={projectDesc} onChange={e => setProjectDesc(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"></textarea>
                </div>
              </div>

              {/* Tarification */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b border-border pb-2 flex items-center gap-2 text-foreground">
                  <CreditCard className="w-5 h-5 text-primary" /> {isAdmin ? "Tarification & Délais" : "Budget & Délais"}
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-1">{isAdmin ? "Prix proposé (€)" : "Votre budget estimé (€)"}</label>
                  <input type="number" value={price} onChange={e => setPrice(e.target.value ? Number(e.target.value) : "")} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
                
                {isAdmin && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Acompte demandé (€)</label>
                    <input type="number" value={acompte} onChange={e => setAcompte(e.target.value ? Number(e.target.value) : "")} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-1">{isAdmin ? "Délai estimé" : "Délai souhaité"}</label>
                  <input type="text" value={delay} onChange={e => setDelay(e.target.value)} placeholder={isAdmin ? "" : "Ex: 15 jours, 1 mois..."} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>

              {/* Fonctionnalités */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold border-b border-border pb-2 flex items-center gap-2 text-foreground">
                  <Layers className="w-5 h-5 text-primary" /> Fonctionnalités incluses
                </h2>
                <div className="space-y-2">
                  {features.map((f) => (
                    <div key={f.id} className="flex items-center gap-2 bg-background border border-border p-2 rounded-md">
                      <span className="text-sm flex-1">{f.text}</span>
                      <button onClick={() => removeFeature(f.id)} className="text-red-500 hover:text-red-700 transition" aria-label="Supprimer">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={e => setNewFeature(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addFeature()}
                    placeholder="Ajouter une fonctionnalité..."
                    className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                  <button onClick={addFeature} className="bg-primary text-primary-foreground px-3 py-2 rounded-md hover:brightness-110 transition" aria-label="Ajouter">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* RIB Form (Admin Only) */}
              {isAdmin && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold border-b border-border pb-2 flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" /> Informations RIB
                  </h2>
                  <div>
                    <label className="block text-sm font-medium mb-1">Titulaire</label>
                    <input type="text" value={titulaire} onChange={e => setTitulaire(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">IBAN</label>
                    <input type="text" value={iban} onChange={e => setIban(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BIC</label>
                    <input type="text" value={bic} onChange={e => setBic(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
              )}
              
              {/* Contact Info (Client Only) */}
              {!isAdmin && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold border-b border-border pb-2 flex items-center gap-2 text-foreground">
                    <User className="w-5 h-5 text-primary" /> Vos Coordonnées
                  </h2>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input type="email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="pour vous recontacter" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input type="text" value={clientPhone} onChange={e => setClientPhone(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
              )}

            </div>

            <div className="p-4 bg-secondary/50 border-t border-border flex gap-2 shrink-0">
              {isAdmin ? (
                <button onClick={downloadPDF} className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:brightness-110 transition flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Télécharger PDF
                </button>
              ) : (
                <button onClick={submitDevis} disabled={isSending || isSent} className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-md font-medium hover:bg-orange-700 disabled:bg-slate-400 transition flex items-center justify-center gap-2">
                  {isSending ? "Envoi en cours..." : isSent ? "Demande Envoyée !" : <><Send className="w-4 h-4" /> Envoyer ma demande</>}
                </button>
              )}
            </div>
          </div>

          {/* Right Panel: Preview */}
          <div className="w-full md:w-2/3 bg-black/10 dark:bg-white/5 rounded-xl border border-border overflow-y-auto p-4 md:p-8 flex items-start justify-center">
            <div className="shadow-2xl">
              <QuoteDocument />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
