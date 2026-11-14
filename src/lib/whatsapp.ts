const WHATSAPP_PHONE_NUMBER = "919886579923";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I'm interested in interior design services from EverySpaces. Please share more details.";

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
