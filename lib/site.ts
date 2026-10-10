// Site-wide constants. NEXT_PUBLIC_* values are inlined at build time, so
// changing them on Vercel needs a redeploy.

export const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://xingyucabin.com";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60123456789";

export const MAILBOX =
  process.env.NEXT_PUBLIC_MAILBOX || "contact@xingyucabin.com";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const PRICE_PER_NIGHT = 400;

export const ADDRESS = "Jalan Kundasang Kauluan, 89308 Ranau, Sabah";

// Google's "Share > Embed a map" URL needs no API key.
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9457466263034!2d116.57719167567859!3d6.002188329000352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b99d2c4ba616b%3A0xdc9e6b9b90f2ce56!2z5pif6Kqe5bCP5bGL!5e0!3m2!1sen!2smy!4v1769944439278!5m2!1sen!2smy";

export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`星語小屋, ${ADDRESS}`)}`;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Formats Malaysian numbers as "+60 12-345 6789"; others as "+<digits>". */
export function formatPhone(digits: string) {
  if (digits.startsWith("60")) {
    const rest = digits.slice(2);
    if (rest.length === 9)
      return `+60 ${rest.slice(0, 2)}-${rest.slice(2, 5)} ${rest.slice(5)}`;
    if (rest.length === 10)
      return `+60 ${rest.slice(0, 2)}-${rest.slice(2, 6)} ${rest.slice(6)}`;
  }
  return `+${digits}`;
}

export const SECTIONS = ["home", "gallery", "pricing", "contact"] as const;

export const PAGES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.5 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.5 },
] as const;
