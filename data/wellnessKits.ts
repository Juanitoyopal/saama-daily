export type WellnessKit = {
  title: string;
  subtitle: string;
  items: string[];
  originalValue: string;
  kitValue: string;
  savings: string;
  image: string;
  imageAlt: string;
};

export const wellnessKits: WellnessKit[] = [
  {
    title: "Kit Café Funcional Diario",
    subtitle:
      "Una selección para quienes aman el café y desean disfrutar diferentes preparaciones funcionales con Ganoderma lucidum durante el día.",
    items: ["Ganocafé Classic", "Ganocafé 3 en 1", "Ganorico Latte Rico", "Ganorico Mocha Rico"],
    originalValue: "$609.600",
    kitValue: "$461.600",
    savings: "$148.000",
    image: "/images/saama-daily/kits/kit-cafe-funcional-diario.jpg",
    imageAlt: "Producto del Kit Café Funcional Diario"
  },
  {
    title: "Kit Desayuno y Pausa Sin Café",
    subtitle:
      "Una opción sin café para acompañar el desayuno, una pausa tranquila y un momento cálido de disfrute durante el día con Ganoderma lucidum.",
    items: ["Gano C'Real Spirulina", "Oleaf Gano Rooibos Drink", "Ganorico Shoko Rico"],
    originalValue: "$480.300",
    kitValue: "$364.700",
    savings: "$115.600",
    image: "/images/saama-daily/kits/kit-desayuno-pausa-sin-cafe.jpg",
    imageAlt: "Producto del Kit Desayuno y Pausa Sin Café"
  },
  {
    title: "Kit Cuidado Personal Saama Daily",
    subtitle:
      "Una rutina completa de cuidado personal para acompañar la higiene diaria, el cuidado bucal, la piel y el cabello con Ganoderma lucidum.",
    items: [
      "Gano Fresh Toothpaste",
      "Gano Soap",
      "Gano Transparent Soap",
      "Piel8Brillo Shampoo",
      "Piel8Brillo Acondicionador",
      "Piel8Brillo Exfoliante Corporal"
    ],
    originalValue: "$581.500",
    kitValue: "$448.000",
    savings: "$133.500",
    image: "/images/saama-daily/kits/kit-cuidado-personal-saama-daily.jpg",
    imageAlt: "Productos del Kit Cuidado Personal Saama Daily"
  }
];
