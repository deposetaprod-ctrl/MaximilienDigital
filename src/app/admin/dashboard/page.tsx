import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let stats: Record<string, number> = {};
  let leads: any[] = [];
  let errorMsg = null;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      // 1. Fetch drop-off stats
      // Supabase doesn't have a simple GROUP BY COUNT via the JS client easily without RPC,
      // so we fetch the counts individually or fetch all events if there aren't millions.
      // For a dashboard, fetching grouped counts via multiple queries is fine for low traffic.
      
      const steps = ["step_1", "step_2", "step_3", "step_4"];
      for (const step of steps) {
        const { count } = await supabase
          .from("funnel_events")
          .select("*", { count: 'exact', head: true })
          .eq("step", step);
        stats[step] = count || 0;
      }

      // 2. Fetch completed leads count & latest leads
      const { data: leadsData, count: leadsCount, error: leadsError } = await supabase
        .from("funnel_leads")
        .select("*", { count: 'exact' })
        .order("created_at", { ascending: false })
        .limit(20);

      if (leadsError) throw leadsError;

      stats["completed"] = leadsCount || 0;
      leads = leadsData || [];

    } else {
      errorMsg = "Variables d'environnement Supabase manquantes (NEXT_PUBLIC_SUPABASE_URL).";
    }
  } catch (err) {
    console.error("Failed to fetch Supabase stats", err);
    errorMsg = "Impossible de se connecter à la base de données Supabase. Avez-vous créé les tables ?";
  }

  // Sort steps logically: step_1, step_2, step_3, step_4, completed
  const orderedKeys = ["step_1", "step_2", "step_3", "step_4", "completed"];

  const step1Count = stats["step_1"] || 0;
  const completedCount = stats["completed"] || 0;
  const conversionRate = step1Count > 0 ? Math.round((completedCount / step1Count) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord : Tunnel PWA (Supabase)</h1>
        
        {errorMsg && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-8">
            <p><strong>Attention :</strong> {errorMsg}</p>
            <p className="text-sm mt-2">Le suivi n'enregistre aucune donnée pour le moment. Vérifiez vos identifiants Supabase sur Vercel.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Visites (Étape 1)</h3>
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
          {/* Funnel Stats */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Détail des abandons</h2>
            </div>
            <div className="p-0">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Étape</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Vues</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orderedKeys.map(key => {
                    const count = stats[key] || 0;
                    const retention = step1Count > 0 ? Math.round((count / step1Count) * 100) : 0;
                    
                    const names: Record<string, string> = {
                      "step_1": "1. Le besoin",
                      "step_2": "2. Le secteur",
                      "step_3": "3. Le délai",
                      "step_4": "4. Coordonnées",
                      "completed": "Validé"
                    };

                    return (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{names[key] || key}</div>
                          <div className="text-xs text-gray-400 mt-1">{retention}% de complétion</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-gray-700">{count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Latest Leads Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">Derniers prospects</h2>
            </div>
            <div className="overflow-x-auto">
              {leads.length > 0 ? (
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Secteur</th>
                      <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Besoin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{lead.email}</div>
                          {lead.phone && <div className="text-sm text-gray-500">{lead.phone}</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{lead.sector}</span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {lead.need}
                          <div className="text-xs text-gray-400 mt-1">Délai : {lead.timeline}</div>
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
