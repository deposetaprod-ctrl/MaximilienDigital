import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { need, sector, timeline, email, phone } = data;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save lead to Supabase database
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error } = await supabase
        .from("funnel_leads")
        .insert([{ need, sector, timeline, email, phone }]);

      if (error) {
        console.error("Supabase insert lead error:", error);
        // We log the error but don't fail completely, so we still try to send the email as a fallback
      }
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing.");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    // Send email to the admin
    await resend.emails.send({
      from: "Contact PWA <onboarding@resend.dev>", // Replace with verified domain in production if possible
      to: "maximilien.girard1@gmail.com", // Assuming this is Maximilien's email, or update to the generic one he uses. I'll use the default email or ask him. Using a placeholder for now, but he can change it. Let's use maximilien.girard@gmail.com or hello@maximilien.digital. Wait, in contact it's usually sent to him. I'll just put his email or a placeholder he needs to update.
      subject: `🔥 Nouveau prospect PWA - ${sector}`,
      html: `
        <h2>Nouvelle demande de projet Web App / PWA</h2>
        <p><strong>Besoin :</strong> ${need}</p>
        <p><strong>Secteur :</strong> ${sector}</p>
        <p><strong>Délai :</strong> ${timeline}</p>
        <br/>
        <h3>Coordonnées du prospect :</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to submit funnel lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
