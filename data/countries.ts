export type Country = {
  name: string;
  code: "CO" | "US";
  path: "/colombia" | "/usa";
  currency: "COP" | "USD";
  language: "es" | "en";
  supportLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  marketDescription: string;
  highlights: string[];
  paymentInfo: string[];
  deliveryInfo: string[];
  supportInfo: string[];
  notice: string;
};

export const colombia: Country = {
    name: "Colombia",
    code: "CO",
    path: "/colombia",
    currency: "COP",
    language: "es",
    supportLabel: "Soporte Colombia",
    heroEyebrow: "Saama Daily Colombia",
    heroTitle: "Compra productos Gano Excel originales en Colombia.",
    heroDescription:
      "Encuentra productos disponibles en Colombia, precios en pesos colombianos, orientación personalizada y acompañamiento para elegir una rutina de bienestar funcional.",
    primaryCtaLabel: "Ver productos Colombia",
    primaryCtaHref: "/productos?country=co",
    secondaryCtaLabel: "Hablar con soporte",
    secondaryCtaHref: "/soporte",
    marketDescription:
      "Productos disponibles, precios en pesos colombianos, métodos de pago locales, envíos nacionales y acompañamiento personalizado.",
    highlights: [
      "Compra en pesos colombianos",
      "Productos originales",
      "Envíos nacionales",
      "Acompañamiento personalizado"
    ],
    paymentInfo: [
      "Pagos locales disponibles",
      "Confirmación de disponibilidad antes del despacho",
      "Orientación de compra por WhatsApp"
    ],
    deliveryInfo: [
      "Envíos a diferentes ciudades de Colombia",
      "Tiempos sujetos a ciudad y disponibilidad",
      "Confirmación antes de finalizar la compra"
    ],
    supportInfo: [
      "Orientación antes de comprar",
      "Recomendación según rutina",
      "Acompañamiento después de la compra"
    ],
    notice:
      "Los productos están sujetos a disponibilidad. La información publicada tiene fines comerciales y educativos, y no sustituye una valoración médica."
};

export const unitedStates: Country = {
    name: "United States",
    code: "US",
    path: "/usa",
    currency: "USD",
    language: "en",
    supportLabel: "Support United States",
    heroEyebrow: "Saama Daily United States",
    heroTitle: "Buy original Gano Excel products in the United States.",
    heroDescription:
      "Explore available products, U.S. support, prices in dollars and clear guidance to choose a functional wellness routine.",
    primaryCtaLabel: "View U.S. products",
    primaryCtaHref: "/productos?country=us",
    secondaryCtaLabel: "Contact support",
    secondaryCtaHref: "/soporte",
    marketDescription:
      "Available products, prices in dollars, U.S. delivery information and personalized support. Initial focus: Miami/Doral.",
    highlights: [
      "Prices in USD",
      "Original products",
      "U.S. availability",
      "Personalized guidance"
    ],
    paymentInfo: [
      "U.S. payment options to be confirmed",
      "Availability confirmation before purchase",
      "Assisted purchase support"
    ],
    deliveryInfo: [
      "U.S. delivery information by availability",
      "Initial focus: Miami/Doral",
      "Delivery times may vary by location"
    ],
    supportInfo: [
      "Guidance before purchase",
      "Product orientation by routine",
      "Support after purchase"
    ],
    notice:
      "Products are subject to availability. Information is commercial and educational and does not replace medical advice."
};

export const countries: Country[] = [colombia, unitedStates];
