import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  budget: string;
  description: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.description) {
      return NextResponse.json(
        { error: "Les champs nom, email et description sont requis." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "juleslordet@proton.me, Maximilien.godeau.off@gmail.com",
      replyTo: body.email,
      subject: `Nouveau message de ${body.name}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Nom</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Téléphone</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${body.phone || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Budget</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${body.budget || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Description</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${body.description}</td>
          </tr>
        </table>
        <p style="margin-top:16px;font-size:12px;color:#888;">Envoyé le ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
