import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let stats: Record<string, number> = {};
  let leads: any[] = [];
  let sessions: { id: string; events: any[]; latest: string }[] = [];
  let errorMsg = null;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      // 1. Fetch completed leads count & latest leads
      const { data: leadsData, count: leadsCount, error: leadsError } = await supabase
        .from("funnel_leads")
        .select("*", { count: 'exact' })
        .order("created_at", { ascending: false })
        .limit(20);

      if (leadsError) throw leadsError;

      stats["completed"] = leadsCount || 0;
      leads = leadsData || [];

      // 2. Fetch all events to build the chronological session view
      const { data: eventsData, error: eventsError } = await supabase
        .from("funnel_events")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1000);

      if (eventsError && eventsError.code !== '42703') { // Ignore missing column error for now if they haven't run SQL
        console.error("events error", eventsError);
      }

      const rawEvents = eventsData || [];
      const sessionMap = new Map<string, any[]>();
      
      // Calculate basic stats for steps (from raw events)
      rawEvents.forEach((ev) => {
        if (!stats[ev.step]) stats[ev.step] = 0;
        stats[ev.step]++;
        
        // Group by session
        const sid = ev.session_id || "Anonyme";
        if (!sessionMap.has(sid)) {
          sessionMap.set(sid, []);
        }
        sessionMap.get(sid)!.push(ev);
      });

      // Convert map to array and sort events chronologically
      sessions = Array.from(sessionMap.entries()).map(([id, evs]) => {
        // sort events for this session ascending (chronological)
        evs.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        // session latest activity time is the last event
        const latest = evs[evs.length - 1].created_at;
        return { id, events: evs, latest };
      });
      
      // Sort sessions by newest first
      sessions.sort((a, b) => new Date(b.latest).getTime() - new Date(a.latest).getTime());

    } else {
      errorMsg = "Variables d'environnement Supabase manquantes (NEXT_PUBLIC_SUPABASE_URL).";
    }
  } catch (err: any) {
    console.error("Failed to fetch Supabase stats", err);
    errorMsg = err?.message || "Impossible de se connecter à la base de données Supabase.";
  }

  const step1Count = stats["step_1"] || stats["page_view"] || 0;
  const completedCount = stats["completed"] || 0;
  const conversionRate = step1Count > 0 ? Math.round((completedCount / step1Count) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord : Suivi des Sessions</h1>
        
        {errorMsg && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-8 border border-red-200">
            <p className="font-bold mb-2">Attention : {errorMsg}</p>
            <p className="text-sm">Si l'erreur indique que la colonne `session_id` n'existe pas, veuillez exécuter la commande SQL fournie par l'assistant dans l'interface Supabase.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Visites (Ouvertures)</h3>
            <p className="text-4xl font-bold text-blue-600">{step1Count}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Leads Complétés</h3>
            <p className="text-4xl font-bold text-green-600">{completedCount}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Taux de Conversion</h3>
            <p className="text-4xl font-bold text-purple-600">{conversionRate}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline of Sessions */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[800px]">
            <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-900">Activité des Visiteurs</h2>
              <p className="text-xs text-gray-500 mt-1">Cliquez sur une session pour voir l'historique</p>
            </div>
            <div className="overflow-y-auto p-4 space-y-3 flex-1">
              {sessions.length > 0 ? sessions.slice(0, 30).map((session, i) => (
                <details key={i} className="group bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                  <summary className="p-3 cursor-pointer select-none hover:bg-gray-100 transition-colors flex flex-col">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-semibold text-sm text-gray-800">
                        {session.id === "Anonyme" ? "Ancienne Session" : `Visiteur ${session.id.substring(0, 5)}...`}
                      </span>
                      <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-100">
                        {session.events.length} evt(s)
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1">
                      {new Date(session.latest).toLocaleString("fr-FR")}
                    </span>
                  </summary>
                  <div className="p-3 bg-white border-t border-gray-100">
                    <ol className="relative border-l border-gray-200 ml-2 space-y-4">
                      {session.events.map((ev: any, j: number) => (
                        <li key={j} className="ml-4">
                          <div className="absolute w-2 h-2 bg-blue-500 rounded-full mt-1.5 -left-[5px] border border-white"></div>
                          <p className="text-xs font-semibold text-gray-800">{ev.action || ev.step}</p>
                          <time className="text-[10px] text-gray-400 leading-none">{new Date(ev.created_at).toLocaleTimeString("fr-FR")}</time>
                        </li>
                      ))}
                    </ol>
                  </div>
                </details>
              )) : (
                <div className="p-4 text-center text-sm text-gray-500">Aucune session enregistrée.</div>
              )}
            </div>
          </div>

          {/* Latest Leads Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Derniers prospects qualifiés</h2>
            </div>
            <div className="overflow-x-auto">
              {leads.length > 0 ? (
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Détails du Projet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50 align-top">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-gray-900">{lead.email}</div>
                          {lead.phone && <div className="text-xs text-gray-500 mt-0.5">{lead.phone}</div>}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 min-w-[300px]">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded text-xs font-medium">{lead.need}</span>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 border border-gray-200 rounded text-xs font-medium">{lead.sector}</span>
                            <span className="px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-100 rounded text-xs font-medium">Délai : {lead.timeline}</span>
                          </div>
                          {lead.description ? (
                            <div className="mt-3 p-3 bg-white border border-gray-200 rounded-md shadow-sm">
                              <span className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Résumé du projet :</span>
                              <p className="text-sm text-gray-800 whitespace-pre-wrap">{lead.description}</p>
                            </div>
                          ) : (
                            <div className="mt-2 text-xs text-gray-400 italic">Aucune description fournie.</div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Aucun prospect enregistré pour le moment.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
