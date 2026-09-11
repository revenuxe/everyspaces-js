export const GOOGLE_ADS_ID = "AW-18430311742";

type Action = "lead" | "phone" | "whatsapp" | "email";
const labels: Record<Action, string | undefined> = {
  lead: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL,
  phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL,
  whatsapp: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL,
  email: process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL,
};

type TagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function trackAdsAction(action: Action, formName?: string) {
  if (typeof window === "undefined" || /^\/(admin|studio)(\/|$)/.test(window.location.pathname)) return;
  // Tracking must never interrupt a saved lead or a contact action.
  try {
    const host = window as TagWindow;
    host.dataLayer ??= [];
    // Google tag's queue uses Arguments objects, matching Google's bootstrap snippet.
    // eslint-disable-next-line prefer-rest-params
    host.gtag ??= function () { host.dataLayer!.push(arguments); };
    const params = {
      send_to: GOOGLE_ADS_ID,
      page_path: window.location.pathname,
      ...(formName ? { form_name: formName } : {}),
    };
    host.gtag("event", action === "lead" ? "generate_lead" : `${action}_click`, params);
    const label = labels[action]?.trim();
    if (label) {
      host.gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${label}`,
        transaction_id: window.crypto.randomUUID(),
        transport_type: "beacon",
      });
    }
  } catch {
    // Ad blockers or unavailable browser APIs must not affect the website.
  }
}
