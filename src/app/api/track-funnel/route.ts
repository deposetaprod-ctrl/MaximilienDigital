import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { step } = await request.json();

    if (!step) {
      return NextResponse.json({ error: "Step is required" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.warn("Supabase is not configured. Skipping analytics tracking.");
      return NextResponse.json({ success: true, message: "Skipped tracking (no supabase credentials)" });
    }

    // Insert the drop-off step into the funnel_events table
    const { error } = await supabase
      .from("funnel_events")
      .insert([{ step }]);

    if (error) {
      console.error("Supabase insert error:", error);
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to track funnel step:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
