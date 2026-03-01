export interface EstimationInput {
  description: string;
  typeApp: string;
  web: boolean;
  mobile: boolean;
  chat: boolean;
  backoffice: boolean;
  ia: boolean;
  grandPublic: boolean;
  pro: boolean;
}

export interface EstimationResult {
  min: number;
  max: number;
  priceLabel: string;
  timeMin: number;
  timeMax: number;
  timeLabel: string;
  detail?: string;
}

const PRICE_MAX = 20_000;
const PRICE_MIN = 3_000;
const TIME_MAX_MONTHS = 6;
const TIME_MIN_MONTHS = 1;

// Mots-clés dans la description / type d'app qui indiquent une app complexe (type Uber, rencontre, etc.)
const TYPE_APP_KEYWORDS = [
  "uber", "taxi", "vtc", "rencontre", "dating", "livraison", "delivery", "marketplace",
  "réservation", "booking", "paiement", "payment", "multi-utilisateur", "temps réel",
  "realtime", "géoloc", "géolocalisation", "map", "carte", "chat", "messagerie",
  "réseau social", "social", "partage", "commande", "e-commerce", "ecommerce",
  "admin", "backoffice", "dashboard", "statistique", "rapport", "ia", "bot",
  "intelligence artificielle", "automatisation", "notification", "push",
];

function getScoreFromDescription(description: string, typeApp: string): number {
  const text = `${description} ${typeApp}`.toLowerCase();
  if (text.length < 3) return 0;
  let score = 0;
  for (const kw of TYPE_APP_KEYWORDS) {
    if (text.includes(kw)) score += 4;
  }
  return Math.min(score, 28);
}

function formatPrice(n: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "decimal", maximumFractionDigits: 0 }).format(n) + " €";
}

function formatTime(months: number): string {
  if (months <= 1) return "1 mois";
  return `${Math.round(months)} mois`;
}

export function estimatePrice(input: EstimationInput): EstimationResult {
  const {
    description,
    typeApp,
    web,
    mobile,
    chat,
    backoffice,
    ia,
    grandPublic,
    pro,
  } = input;

  let score = 0;

  // Support (web / mobile / les deux) — web + mobile = plus cher
  if (web && mobile) score += 28;
  else if (mobile) score += 14;
  else if (web) score += 8;
  else score += 10; // rien coché → on part sur du moyen

  if (chat) score += 8;
  if (backoffice) score += 15;
  if (ia) score += 12;
  if (grandPublic) score += 8;
  if (pro) score += 8;

  score += getScoreFromDescription(description, typeApp);

  score = Math.min(score, 100);

  // Prix : entre PRICE_MIN et PRICE_MAX
  const priceRatio = score / 100;
  const min = Math.round(PRICE_MIN + priceRatio * (PRICE_MAX - PRICE_MIN) * 0.7);
  const max = Math.round(PRICE_MIN + priceRatio * (PRICE_MAX - PRICE_MIN));
  const clampedMin = Math.min(min, PRICE_MAX - 1);
  const clampedMax = Math.min(max, PRICE_MAX);

  // Délai : entre TIME_MIN_MONTHS et TIME_MAX_MONTHS
  const timeRatio = score / 100;
  const timeMinMonths = TIME_MIN_MONTHS + timeRatio * (TIME_MAX_MONTHS - TIME_MIN_MONTHS) * 0.6;
  const timeMaxMonths = TIME_MIN_MONTHS + timeRatio * (TIME_MAX_MONTHS - TIME_MIN_MONTHS);
  const tMin = Math.max(1, Math.round(timeMinMonths * 10) / 10);
  const tMax = Math.min(TIME_MAX_MONTHS, Math.round(timeMaxMonths * 10) / 10);

  const timeLabel =
    tMin >= tMax || tMax - tMin < 0.5
      ? `environ ${formatTime(tMax)}`
      : `de ${formatTime(tMin)} à ${formatTime(tMax)}`;

  return {
    min: clampedMin,
    max: clampedMax,
    priceLabel: `Entre ${formatPrice(clampedMin)} et ${formatPrice(clampedMax)}`,
    timeMin: tMin,
    timeMax: tMax,
    timeLabel,
  };
}
