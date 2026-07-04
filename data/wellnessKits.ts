export type WellnessKit = {
  title: string;
  subtitle: string;
  items: string[];
};

export const wellnessKits: WellnessKit[] = [
  {
    title: "Kit energía diaria",
    subtitle:
      "Para acompañar mañanas activas, jornadas de trabajo y rutinas con más intención.",
    items: ["Cafés funcionales", "Guía de uso", "Soporte por país"]
  },
  {
    title: "Kit rutina antioxidante",
    subtitle:
      "Una selección pensada para quienes quieren integrar productos funcionales a una rutina consciente.",
    items: ["Bebidas funcionales", "Orientación de consumo", "Recompra organizada"]
  },
  {
    title: "Kit bienestar digestivo",
    subtitle:
      "Productos y bebidas funcionales para acompañar hábitos diarios de equilibrio y bienestar.",
    items: ["Bebidas suaves", "Acompañamiento personalizado", "Guía de rutina"]
  },
  {
    title: "Kit inicio inteligente",
    subtitle:
      "Para personas que quieren empezar con productos Gano Excel de forma clara y organizada.",
    items: ["Selección inicial", "Explicación sencilla", "Soporte antes de comprar"]
  },
  {
    title: "Kit café funcional",
    subtitle:
      "Para quienes disfrutan el café y quieren incorporarlo dentro de una rutina funcional.",
    items: ["Cafés seleccionados", "Recomendación de uso", "Compra segura"]
  }
];
