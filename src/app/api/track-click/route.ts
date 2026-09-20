import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { element_name, session_id, page_url } = await request.json();

    if (!element_name) {
      return NextResponse.json({ error: "element_name is required" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ success: true, message: "Skipped tracking (no supabase credentials)" });
    }

    const { error } = await supabase
      .from("site_clicks")
      .insert([{ element_name, session_id: session_id || "anonymous", page_url: page_url || "" }]);

    if (error) {
      console.error("Supabase insert click error:", error);
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to track click:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
