export type ProductCategory = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tone: "olive" | "gold" | "coffee";
};

export const productCategories: ProductCategory[] = [
  {
    title: "Cafés",
    description:
      "Disfruta tu pausa diaria con cafés enriquecidos, pensados para acompañarte en la mañana, el trabajo o tus momentos de energía.",
    href: "/productos?country=co&category=Caf%C3%A9s",
    image: "/images/saama-daily/categorias/cafes.jpg",
    imageAlt: "Producto de café funcional Gano Excel",
    tone: "olive"
  },
  {
    title: "Bebidas funcionales",
    description:
      "Opciones prácticas y deliciosas para integrar bienestar funcional en diferentes momentos del día, de forma sencilla y agradable.",
    href: "/productos?country=co&category=Bebidas%20funcionales",
    image: "/images/saama-daily/categorias/bebidas-funcionales.jpg",
    imageAlt: "Bebida funcional Gano Excel",
    tone: "gold"
  },
  {
    title: "Suplementos",
    description:
      "Cápsulas y alimentos funcionales que complementan tus hábitos diarios y apoyan una rutina de bienestar más consciente.",
    href: "/productos?country=co&category=Suplementos",
    image: "/images/saama-daily/categorias/suplementos.jpg",
    imageAlt: "Suplemento funcional Gano Excel",
    tone: "olive"
  },
  {
    title: "Cuidado personal",
    description:
      "Productos de higiene y autocuidado para acompañar tu rutina diaria con una sensación de limpieza, frescura y bienestar.",
    href: "/productos?country=co&category=Cuidado%20personal",
    image: "/images/saama-daily/categorias/cuidado-personal.jpg",
    imageAlt: "Producto de cuidado personal Gano Excel",
    tone: "coffee"
  }
];
