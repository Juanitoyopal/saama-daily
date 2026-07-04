export type ProductCategory = {
  title: string;
  description: string;
  tone: "olive" | "gold" | "coffee";
};

export const productCategories: ProductCategory[] = [
  {
    title: "Cafés",
    description:
      "Cafés funcionales para acompañar la rutina diaria, la mañana, el trabajo o una pausa consciente.",
    tone: "olive"
  },
  {
    title: "Bebidas funcionales",
    description:
      "Bebidas prácticas para integrar bienestar funcional en distintos momentos del día.",
    tone: "gold"
  },
  {
    title: "Suplementos",
    description:
      "Cápsulas y alimentos funcionales para complementar hábitos de bienestar diario.",
    tone: "olive"
  },
  {
    title: "Cuidado personal",
    description:
      "Productos de higiene y autocuidado para complementar una rutina consciente.",
    tone: "coffee"
  }
];
