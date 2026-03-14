import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { title, artist } = await req.json();

    if (!title || !artist) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Song Suggestion <onboarding@resend.dev>",
      to: ["maximilien.godeau.off@gmail.com"],
      subject: `[Suggestion Chanson] ${title} - ${artist}`,
      html: `
        <h2>Nouvelle suggestion de chanson</h2>
        <p><strong>Titre :</strong> ${title}</p>
        <p><strong>Artiste :</strong> ${artist}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
