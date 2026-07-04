type ContactChannel = {
  whatsappNumber: string | null;
  displayLabel: string;
  defaultMessage: string;
  affiliateMessage: string;
};

const affiliateMessage =
  "DESEO CONOCER MÁS INFORMACIÓN DE CÓMO AFILIARME, quiero por favor que me contactes por este medio.";

export const contactConfig = {
  colombia: {
    whatsappNumber: null,
    displayLabel: "WhatsApp Colombia",
    defaultMessage:
      "Hola, quiero recibir asesoría personalizada de Saama Daily en Colombia.",
    affiliateMessage
  },
  usa: {
    whatsappNumber: null,
    displayLabel: "WhatsApp United States",
    defaultMessage:
      "Hello, I would like personalized guidance from Saama Daily in the United States.",
    affiliateMessage
  }
} satisfies Record<"colombia" | "usa", ContactChannel>;
