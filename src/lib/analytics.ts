function getSessionId(): string {
  if (typeof window === "undefined") return "server-side";
  let sessionId = localStorage.getItem("site_session_id");
  if (!sessionId) {
    sessionId = "sess_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("site_session_id", sessionId);
  }
  return sessionId;
}

export function trackClick(elementName: string) {
  if (typeof window === "undefined") return;

  fetch("/api/track-click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      element_name: elementName,
      session_id: getSessionId(),
      page_url: window.location.href,
    }),
  }).catch((err) => console.error("Failed to track click", err));
}

export function trackChat(messages: any[]) {
  if (typeof window === "undefined" || messages.length === 0) return;

  fetch("/api/track-chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: getSessionId(),
      messages,
    }),
  }).catch((err) => console.error("Failed to track chat", err));
}
