import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { session_id, messages } = await request.json();

    if (!session_id || !messages) {
      return NextResponse.json({ error: "session_id and messages are required" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ success: true, message: "Skipped tracking (no supabase credentials)" });
    }

    // Upsert the conversation (update if session_id exists, otherwise insert)
    const { error } = await supabase
      .from("chatbot_conversations")
      .upsert({ session_id, messages, updated_at: new Date().toISOString() }, { onConflict: "session_id" });

    if (error) {
      console.error("Supabase upsert chat error:", error);
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to track chat:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
