import { supabase } from "@/lib/supabase";
import { 
  MessageSquare, MousePointer, Clock, User, MessageCircle, 
  ChevronDown, Activity, Users, Target, CheckCircle2, AlertTriangle, FileText, Briefcase
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let stats: Record<string, number> = {};
  let leads: any[] = [];
  let sessions: { id: string; events: any[]; latest: string; messages: any[] }[] = [];
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

      if (eventsError && eventsError.code !== '42703') { 
        console.error("events error", eventsError);
      }

      // 3. Fetch all chats to join with sessions
      const { data: chatsData, error: chatsError } = await supabase
        .from("chatbot_conversations")
        .select("*");
        
      if (chatsError) {
        console.error("chats error", chatsError);
      }
      
      const chatsMap = new Map<string, any[]>();
      (chatsData || []).forEach((chat) => {
        chatsMap.set(chat.session_id, chat.messages || []);
      });

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
        return { 
          id, 
          events: evs, 
          latest,
          messages: chatsMap.get(id) || []
        };
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
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">CRM & Tracking</h1>
          <p className="text-slate-500 mt-1">Suivez l'activité de vos visiteurs et gérez vos leads.</p>
        </div>
        
        {errorMsg && (
          <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 flex gap-3 items-start shadow-sm">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold mb-1">Attention : {errorMsg}</p>
              <p className="text-sm text-red-700/80">Si l'erreur indique que la colonne `session_id` n'existe pas, veuillez exécuter la commande SQL fournie par l'assistant dans l'interface Supabase.</p>
            </div>
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Total Visites</h3>
              <p className="text-3xl font-bold text-slate-900">{step1Count}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Leads Complétés</h3>
              <p className="text-3xl font-bold text-slate-900">{completedCount}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <Target size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Taux de Conversion</h3>
              <p className="text-3xl font-bold text-slate-900">{conversionRate}%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Timeline of Sessions */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[800px]">
            <div className="p-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Activité des Visiteurs</h2>
                <p className="text-sm text-slate-500 mt-1">Historique des sessions et conversations</p>
              </div>
              <Activity className="text-slate-400" size={20} />
            </div>
            
            <div className="overflow-y-auto p-4 space-y-4 flex-1 bg-slate-50/50">
              {sessions.length > 0 ? sessions.slice(0, 30).map((session, i) => (
                <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <summary className="p-4 cursor-pointer select-none hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {session.id === "Anonyme" ? "Ancienne Session" : `Visiteur ${session.id.substring(0, 8)}...`}
                        </h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock size={12} />
                          {new Date(session.latest).toLocaleString("fr-FR", { dateStyle: 'medium', timeStyle: 'short' })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      {session.messages && session.messages.length > 0 && (
                        <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                          <MessageCircle size={14} />
                          {session.messages.length} msg(s)
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                        <MousePointer size={14} />
                        {session.events.length} evt(s)
                      </span>
                      <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform ml-2" />
                    </div>
                  </summary>
                  
                  <div className="p-0 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {/* Events Timeline */}
                    <div className={`p-5 flex-1 ${session.messages && session.messages.length > 0 ? 'md:w-1/2' : 'w-full'}`}>
                      <h4 className="text-sm font-semibold text-slate-900 mb-5 flex items-center gap-2">
                        <Activity size={16} className="text-blue-500" />
                        Parcours
                      </h4>
                      <ol className="relative border-l border-slate-300 ml-3 space-y-6">
                        {session.events.map((ev: any, j: number) => (
                          <li key={j} className="ml-5">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-[6.5px] border-2 border-slate-50"></div>
                            <div className="bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm">
                              <p className="text-sm font-medium text-slate-800 break-words">{ev.action || ev.step}</p>
                              <time className="text-xs text-slate-400 mt-1.5 flex items-center gap-1 font-mono">
                                <Clock size={12} />
                                {new Date(ev.created_at).toLocaleTimeString("fr-FR")}
                              </time>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Messages Chat Log */}
                    {session.messages && session.messages.length > 0 && (
                      <div className="p-5 flex-1 md:w-1/2 bg-white">
                        <h4 className="text-sm font-semibold text-slate-900 mb-5 flex items-center gap-2">
                          <MessageSquare size={16} className="text-emerald-500" />
                          Conversation
                        </h4>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                          {session.messages.filter((m: any) => m.role !== 'system').map((msg: any, mIdx: number) => (
                            <div key={mIdx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                              <div className={`max-w-[90%] p-3 text-sm shadow-sm ${
                                msg.role === 'user' 
                                  ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm' 
                                  : 'bg-slate-100 text-slate-800 rounded-2xl rounded-bl-sm border border-slate-200'
                              }`}>
                                {msg.content}
                              </div>
                              <span className="text-[10px] text-slate-400 mt-1 px-1">
                                {msg.role === 'user' ? 'Visiteur' : 'Assistant'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              )) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Activity size={48} className="mb-4 opacity-20" />
                  <p>Aucune session enregistrée.</p>
                </div>
              )}
            </div>
          </div>

          {/* Latest Leads Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[800px]">
            <div className="p-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Derniers Prospects</h2>
                <p className="text-sm text-slate-500 mt-1">Leads qualifiés depuis le formulaire</p>
              </div>
              <FileText className="text-slate-400" size={20} />
            </div>
            
            <div className="overflow-x-auto flex-1 p-4 bg-slate-50/50">
              {leads.length > 0 ? (
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div key={lead.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                            <Briefcase size={18} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{lead.email}</div>
                            {lead.phone && <div className="text-xs text-slate-500 mt-0.5">{lead.phone}</div>}
                          </div>
                        </div>
                        <div className="text-xs text-slate-400 font-mono bg-slate-100 px-2 py-1 rounded">
                          {new Date(lead.created_at).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md text-xs font-medium">
                          {lead.need}
                        </span>
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-xs font-medium">
                          {lead.sector}
                        </span>
                        <span className="px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-100 rounded-md text-xs font-medium flex items-center gap-1">
                          <Clock size={12} />
                          {lead.timeline}
                        </span>
                      </div>
                      
                      {lead.description && (
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                          <span className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Projet :</span>
                          <p className="text-sm text-slate-700 whitespace-pre-wrap">{lead.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <FileText size={48} className="mb-4 opacity-20" />
                  <p>Aucun prospect enregistré pour le moment.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
