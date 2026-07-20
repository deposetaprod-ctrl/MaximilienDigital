import { NextResponse } from "next/server";
import { Resend } from "resend";

// Reuse the Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { clientName, clientEmail, clientPhone, projectTitle, projectDesc, budget, delay, features } = data;

    if (!clientEmail) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing.");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const featuresList = features && features.length > 0 
      ? features.map((f: string) => `<li>${f}</li>`).join("")
      : "<li>Aucune fonctionnalité spécifiée</li>";

    // Send email to the admin
    await resend.emails.send({
      from: "Contact App <onboarding@resend.dev>", // Replace with verified domain in production if possible
      to: "maximilien.godeau@gmail.com", // Destination email
      subject: `🔥 Nouvelle demande de Devis : ${projectTitle || "Projet"}`,
      html: `
        <h2>Nouvelle proposition de projet / Devis</h2>
        <p><strong>Nom du client :</strong> ${clientName || "Non renseigné"}</p>
        <p><strong>Titre du projet :</strong> ${projectTitle || "Non renseigné"}</p>
        <p><strong>Budget proposé :</strong> ${budget ? `${budget} €` : "Non renseigné"}</p>
        <p><strong>Délai souhaité :</strong> ${delay || "Non renseigné"}</p>
        <br/>
        <h3>📝 Description du besoin :</h3>
        <p>${projectDesc ? projectDesc.replace(/\n/g, '<br/>') : "Non renseignée"}</p>
        <br/>
        <h3>✨ Fonctionnalités demandées :</h3>
        <ul>
          ${featuresList}
        </ul>
        <br/>
        <h3>📞 Coordonnées du prospect :</h3>
        <p><strong>Email :</strong> ${clientEmail}</p>
        <p><strong>Téléphone :</strong> ${clientPhone || "Non renseigné"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to submit devis lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
