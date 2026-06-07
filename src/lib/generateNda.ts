import { jsPDF } from "jspdf";

export function generateNda(projectName: string) {
  // Create a new PDF document
  const doc = new jsPDF();
  
  // Set fonts and styles
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(33, 33, 33);
  
  // Title
  doc.text("ACCORD DE CONFIDENTIALITÉ (NDA)", 105, 30, { align: "center" });
  
  // Decorative line
  doc.setLineWidth(0.5);
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 35, 190, 35);
  
  // Date
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const today = new Date().toLocaleDateString("fr-FR", { year: 'numeric', month: 'long', day: 'numeric' });
  doc.text(`Fait le : ${today}`, 20, 50);
  
  // Parties
  doc.setFont("helvetica", "bold");
  doc.text("ENTRE LES SOUSSIGNÉS :", 20, 65);
  
  doc.setFont("helvetica", "normal");
  doc.text("Maximilien Digital", 20, 75);
  doc.text("Architecte IA et Développeur d'Applications Web Métier", 20, 82);
  doc.text("Ci-après dénommé \"Le Prestataire\",", 20, 89);
  
  doc.text("ET", 20, 100);
  
  doc.text("Le Client (vous-même),", 20, 110);
  doc.text(`Porteur du projet : "${projectName || 'Projet Confidentiel'}"`, 20, 117);
  doc.text("Ci-après dénommé \"Le Client\",", 20, 124);
  
  // Body text
  doc.setFont("helvetica", "bold");
  doc.text("IL A ÉTÉ CONVENU CE QUI SUIT :", 20, 140);
  
  doc.setFont("helvetica", "normal");
  const bodyText = `
1. Objet de l'Accord
Le Prestataire s'engage à conserver une confidentialité absolue sur toutes les informations, documents, idées, concepts, données (fichiers Excel, bases de données, etc.) et secrets commerciaux qui lui seront communiqués par le Client dans le cadre de l'évaluation ou de la réalisation du projet mentionné ci-dessus.

2. Utilisation des Informations
Le Prestataire s'interdit d'utiliser les informations confidentielles à d'autres fins que l'étude de faisabilité, la conception ou le développement de l'application web métier du Client. Il s'interdit également toute divulgation, copie ou transmission à des tiers non autorisés.

3. Durée
Le présent accord prend effet à compter de ce jour et restera en vigueur pendant une durée de trois (3) ans, même en cas de non-conclusion d'un contrat de développement final.

4. Propriété
Toutes les informations et données partagées par le Client restent sa propriété stricte et exclusive. Le Prestataire ne revendique aucun droit sur celles-ci.`;

  const splitText = doc.splitTextToSize(bodyText, 170);
  doc.text(splitText, 20, 150);
  
  // Signatures
  doc.setFont("helvetica", "bold");
  doc.text("Pour Maximilien Digital", 130, 240);
  
  // Add a fake signature look using cursive font or just italic
  doc.setFont("times", "italic");
  doc.setFontSize(16);
  doc.setTextColor(23, 37, 84); // dark blue signature
  doc.text("Maximilien Godeau", 135, 255);
  
  // Generate PDF and trigger download
  const safeProjectName = projectName ? projectName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'projet';
  doc.save(`NDA_Maximilien_Digital_${safeProjectName}.pdf`);
}
