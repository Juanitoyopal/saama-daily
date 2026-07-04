export type LearningTopic = {
  title: string;
  description: string;
  accent: "olive" | "gold" | "coffee";
};

export const learningTopics: LearningTopic[] = [
  {
    title: "Qué es Ganoderma lucidum",
    description:
      "Una introducción clara a este hongo y a su presencia en productos de bienestar funcional.",
    accent: "olive"
  },
  {
    title: "Qué es Spirulina",
    description:
      "Conoce qué es esta microalga, su perfil nutricional general y cómo se integra en distintas rutinas.",
    accent: "gold"
  },
  {
    title: "Qué es Rooibos",
    description:
      "Descubre el origen de esta infusión y por qué es una alternativa apreciada para distintos momentos del día.",
    accent: "coffee"
  },
  {
    title: "Cómo crear una rutina saludable",
    description:
      "Pasos sencillos para organizar hábitos sostenibles de acuerdo con tu ritmo de vida.",
    accent: "olive"
  },
  {
    title: "Preguntas frecuentes",
    description:
      "Respuestas iniciales sobre productos, disponibilidad, compra por país y acompañamiento.",
    accent: "gold"
  }
];
