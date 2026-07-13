export type ProductColombia = {
  id: string;
  slug: string;
  name: string;
  country: "CO";
  commercialCategory: "Cafés" | "Bebidas funcionales" | "Suplementos" | "Cuidado personal";
  regulatoryCategory: "Alimento" | "Suplemento dietario" | "Cosmético";
  code: string;
  shortDescription: string;
  fullDescription: string;
  customerPrice: number;
  affiliatePrice: number;
  savings: number;
  discount: string;
  currency: "COP";
  taxIncluded: true;
  image: string;
  images: string[];
  sanitaryRegistration: string | null;
  sanitaryNotification: string | null;
  dietarySupplementNotice: string | null;
  legalNotes: string[];
  availability: "Consultar disponibilidad";
  ingredients: string | null;
  presentation: string;
  usage: string;
  relatedProducts: string[];
  relatedKit: string | null;
  educationArticle: null;
  scientificLibraryStatus: "pending";
  priceAccessNote: string;
  lastPriceUpdate: string | null;
  sourceDocument: string;
};

const supplementNotice =
  "Los suplementos dietarios no son medicamentos y no sustituyen una alimentación equilibrada.";

const priceAccessNote =
  "El precio afiliado está disponible para personas afiliadas a Gano Excel. Consulta las condiciones de afiliación antes de comprar.";

const imageBasePath = "/images/products/colombia/catalogo-2026";

const defaults = {
  country: "CO",
  currency: "COP",
  taxIncluded: true,
  availability: "Consultar disponibilidad",
  ingredients: null,
  relatedProducts: [] as string[],
  relatedKit: null,
  educationArticle: null,
  scientificLibraryStatus: "pending",
  priceAccessNote,
  lastPriceUpdate: null,
  sourceDocument: "CATALOGO GANO EXCEL.docx"
} as const;

function product(
  data: Omit<ProductColombia, keyof typeof defaults | "savings" | "image">
): ProductColombia {
  return {
    ...defaults,
    ...data,
    image: data.images[0],
    savings: data.customerPrice - data.affiliatePrice
  };
}

export const productsColombia: ProductColombia[] = [
  product({
    id: "co-ganocafe-classic",
    slug: "ganocafe-classic",
    name: "Ganocafé Classic",
    commercialCategory: "Cafés",
    regulatoryCategory: "Suplemento dietario",
    code: "505",
    presentation:
      "Peso neto: 90 g (3 g x 30 sachets). Mezcla en polvo para preparar bebida instantánea con café y extracto de Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 90 g (3 g x 30 sachets). Mezcla en polvo para preparar bebida instantánea con café y extracto de Ganoderma lucidum.",
    fullDescription:
      "Ganocafé Classic combina el carácter del café gourmet con el valor funcional del Ganoderma lucidum, creando una bebida ideal para quienes desean iniciar el día con energía, enfoque y una rutina más consciente.\n\nSu sabor robusto y su aroma característico lo convierten en una opción práctica para quienes aman el café clásico, pero buscan algo más que una bebida tradicional. Cada taza puede convertirse en una pausa funcional para activar la mente, acompañar la productividad y sumar a los hábitos diarios de bienestar.\n\nEl Ganoderma lucidum aporta un diferencial natural por su contenido de compuestos bioactivos, tradicionalmente asociados con equilibrio, bienestar general y apoyo antioxidante.",
    usage:
      "Adultos: consumir según las indicaciones del empaque. Disolver un sobre/sachet en una taza de agua caliente y consumir según preferencia, como parte de una rutina diaria equilibrada. No exceder la porción recomendada.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    discount: "25%",
    images: [
      `${imageBasePath}/ganocafe-classic-1.jpg`,
      `${imageBasePath}/ganocafe-classic-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2013-0002865",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-ganocafe-3-en-1",
    slug: "ganocafe-3-en-1",
    name: "Ganocafé 3 en 1",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimento",
    code: "501",
    presentation:
      "Peso neto: 420 g (21 g x 20 sachets). Mezcla instantánea en polvo con café, crema no láctea, azúcar, Ganoderma lucidum y betaglucanos.",
    shortDescription:
      "Peso neto: 420 g (21 g x 20 sachets). Mezcla instantánea en polvo con café, crema no láctea, azúcar, Ganoderma lucidum y betaglucanos.",
    fullDescription:
      "Ganocafé 3 en 1 es una bebida práctica, cremosa y suave, pensada para quienes disfrutan una taza de café lista para preparar, con un sabor más dulce y una textura más agradable que el café tradicional.\n\nCombina café de calidad con Ganoderma lucidum y betaglucanos, componentes funcionales que le dan un valor adicional al momento de tomar café. Es ideal para acompañar la mañana, el trabajo o una pausa durante el día.\n\nA diferencia del café clásico, esta versión ya viene mezclada con crema no láctea y azúcar, lo que permite disfrutar una taza suave, equilibrada y lista para consumir sin agregar otros ingredientes.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir según preferencia. Puede tomarse en la mañana o durante una pausa del día como parte de una rutina equilibrada.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    discount: "25%",
    images: [
      `${imageBasePath}/ganocafe-3-en-1-1.jpg`,
      `${imageBasePath}/ganocafe-3-en-1-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA RSA-0011698-2021",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-ganorico-latte-rico",
    slug: "ganorico-latte-rico",
    name: "Ganorico Latte Rico",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimento",
    code: "509",
    presentation:
      "Peso neto: 300 g (15 g x 20 sachets). Bebida tipo latte en polvo con café gourmet, crema no láctea y betaglucanos de Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 300 g (15 g x 20 sachets). Bebida tipo latte en polvo con café gourmet, crema no láctea y betaglucanos de Ganoderma lucidum.",
    fullDescription:
      "Ganorico Latte Rico es una bebida cremosa, suave y reconfortante, ideal para quienes disfrutan el café con una textura más delicada y un sabor menos intenso que el café negro tradicional.\n\nSu fórmula combina el aroma del café gourmet con la cremosidad de una preparación tipo latte y el valor funcional de los betaglucanos de Ganoderma lucidum, creando una experiencia cálida, agradable y fácil de integrar a la rutina diaria.\n\nEs una excelente opción para quienes desean una pausa especial durante el día, con una bebida que se siente suave, envolvente y satisfactoria.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir preferiblemente en la mañana o durante una pausa del día.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    discount: "23,6%",
    images: [
      `${imageBasePath}/ganorico-latte-rico-1.jpg`,
      `${imageBasePath}/ganorico-latte-rico-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° NSA-0010760-2021",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-ganorico-mocha-rico",
    slug: "ganorico-mocha-rico",
    name: "Ganorico Mocha Rico",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimento",
    code: "503",
    presentation:
      "Peso neto: 360 g (18 g x 20 sachets). Bebida tipo mocha en polvo con café premezclado, cacao y betaglucanos de Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 360 g (18 g x 20 sachets). Bebida tipo mocha en polvo con café premezclado, cacao y betaglucanos de Ganoderma lucidum.",
    fullDescription:
      "Ganorico Mocha Rico combina el sabor del café con la suavidad y dulzura del cacao, creando una bebida cremosa, cálida y envolvente para quienes disfrutan una preparación tipo mocha.\n\nEs una opción ideal para personas que quieren una bebida funcional con carácter de café, pero con una experiencia más suave, chocolatosa y reconfortante.\n\nA diferencia del café clásico, ofrece una experiencia más indulgente: combina energía, aroma, cacao y cremosidad en una sola taza.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir según preferencia. Ideal para quienes desean una bebida funcional con café y cacao.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    discount: "23,6%",
    images: [
      `${imageBasePath}/ganorico-mocha-rico-1.jpg`,
      `${imageBasePath}/ganorico-mocha-rico-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° NSA-0010760-2021",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-luvoco",
    slug: "luvoco",
    name: "Luvoco",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimento",
    code: "817 / 818 / 819",
    presentation:
      "Peso neto: 120 g (8 g x 15 cápsulas). Café molido y tostado en cápsulas, enriquecido con betaglucanos de Ganoderma lucidum. Disponible en perfiles Suave, Medio y Fuerte.",
    shortDescription:
      "Peso neto: 120 g (8 g x 15 cápsulas). Café molido y tostado en cápsulas, enriquecido con betaglucanos de Ganoderma lucidum. Disponible en perfiles Suave, Medio y Fuerte.",
    fullDescription:
      "Luvoco es una opción práctica para quienes desean disfrutar un café de alta calidad en formato de cápsula, con la comodidad de una preparación rápida y el valor funcional de los betaglucanos de Ganoderma lucidum.\n\nSu propuesta combina el aroma y sabor del café tostado con una experiencia moderna, limpia y sencilla, ideal para quienes usan máquina de cápsulas y quieren mantener una rutina de café más funcional durante el día.\n\nSus diferentes intensidades permiten elegir el perfil que mejor se adapte al gusto de cada persona: una taza más suave, equilibrada o intensa.",
    usage:
      "Usar una cápsula en máquina compatible y preparar según la intensidad deseada. Ideal para consumir en la mañana o durante una pausa del día.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    discount: "25%",
    images: [
      `${imageBasePath}/luvoco-1.jpg`,
      `${imageBasePath}/luvoco-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA: NSA-0012966-2022",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-gano-schokolade",
    slug: "gano-schokolade",
    name: "Gano Schokolade",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Suplemento dietario",
    code: "502",
    presentation:
      "Peso neto: 600 g (30 g x 20 sachets). Bebida de chocolate con cacao, crema no láctea, leche descremada en polvo, azúcar refinada y extracto de Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 600 g (30 g x 20 sachets). Bebida de chocolate con cacao, crema no láctea, leche descremada en polvo, azúcar refinada y extracto de Ganoderma lucidum.",
    fullDescription:
      "Gano Schokolade es una bebida cremosa, cálida y reconfortante, ideal para quienes disfrutan el sabor del chocolate y desean convertir ese momento en una pausa funcional dentro de su rutina diaria.\n\nSu mezcla combina el aroma del cacao con la suavidad de una bebida tipo chocolate caliente y el valor funcional del Ganoderma lucidum, un hongo reconocido por sus compuestos bioactivos y su relación con el bienestar general.\n\nA diferencia de una bebida de chocolate tradicional, integra un ingrediente funcional que aporta un diferencial de bienestar, manteniendo una experiencia deliciosa, suave y placentera.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir según preferencia. Ideal para una pausa cálida durante el día.",
    customerPrice: 166500,
    affiliatePrice: 124900,
    discount: "25%",
    images: [
      `${imageBasePath}/gano-schokolade-1.jpg`,
      `${imageBasePath}/gano-schokolade-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2013-0002936",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-ganorico-shoko-rico",
    slug: "ganorico-shoko-rico",
    name: "Ganorico Shoko Rico",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Alimento",
    code: "512",
    presentation:
      "Peso neto: 460 g (23 g x 20 sachets). Bebida de chocolate en polvo con cacao y Ganoderma lucidum, pensada para preparar una bebida cálida, cremosa y agradable.",
    shortDescription:
      "Peso neto: 460 g (23 g x 20 sachets). Bebida de chocolate en polvo con cacao y Ganoderma lucidum, pensada para preparar una bebida cálida, cremosa y agradable.",
    fullDescription:
      "Ganorico Shoko Rico es una bebida funcional de chocolate creada para quienes disfrutan el sabor intenso y reconfortante del cacao, pero desean una opción diferente a una bebida de chocolate tradicional.\n\nSu fórmula incorpora Ganoderma lucidum, ingrediente funcional reconocido por sus compuestos bioactivos y su relación con el bienestar general, convirtiendo cada taza en una pausa más consciente y especial dentro de la rutina diaria.\n\nEs ideal para quienes no consumen café, prefieren bebidas dulces y cremosas o buscan una alternativa agradable para acompañar la mañana, la tarde, el trabajo o un momento de descanso.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir según preferencia. Ideal para una pausa cálida con sabor a chocolate.",
    customerPrice: 166500,
    affiliatePrice: 124900,
    discount: "25%",
    images: [
      `${imageBasePath}/ganorico-shoko-rico-1.jpg`,
      `${imageBasePath}/ganorico-shoko-rico-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N°NSA-0010766-2021",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-oleaf-gano-rooibos-drink",
    slug: "oleaf-gano-rooibos-drink",
    name: "Oleaf Gano Rooibos Drink",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Suplemento dietario",
    code: "504",
    presentation:
      "Peso neto: 40 g (2 g x 20 sachets). Infusión de rooibos de origen sudafricano combinada con Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 40 g (2 g x 20 sachets). Infusión de rooibos de origen sudafricano combinada con Ganoderma lucidum.",
    fullDescription:
      "Oleaf Gano Rooibos Drink es una infusión suave, aromática y naturalmente reconfortante, ideal para quienes desean una bebida funcional diferente al café y al chocolate.\n\nSu base de rooibos ofrece una experiencia cálida, ligera y ligeramente dulce, perfecta para acompañar momentos de pausa, descanso y equilibrio durante el día. A diferencia del café, es una opción más tranquila y fácil de integrar en la rutina.\n\nSu combinación con Ganoderma lucidum aporta un valor funcional adicional para quienes desean cuidar su bienestar diario desde hábitos sencillos y constantes.",
    usage:
      "Disolver un sobre/sachet en una taza de agua caliente, mezclar bien y consumir según preferencia. Ideal para una pausa tranquila durante el día o la noche.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    discount: "23,6%",
    images: [
      `${imageBasePath}/oleaf-gano-rooibos-drink-1.jpg`,
      `${imageBasePath}/oleaf-gano-rooibos-drink-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2017-0004109",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-reskine-collagen-drink",
    slug: "reskine-collagen-drink",
    name: "Reskine Collagen Drink",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Alimento",
    code: "530",
    presentation:
      "Peso neto: 250 mL (25 mL x 10 sachets). Bebida funcional con colágeno de pescado, betaglucanos de Ganoderma lucidum,quínoa líquida, jugo de manzana, frutos rojos, goji, aloe vera y espinaca en polvo.",
    shortDescription:
      "Peso neto: 250 mL (25 mL x 10 sachets). Bebida funcional con colágeno de pescado, betaglucanos de Ganoderma lucidum,quínoa líquida, jugo de manzana, frutos rojos, goji, aloe vera y espinaca en polvo.",
    fullDescription:
      "Reskine Collagen Drink es una bebida funcional pensada para complementar la rutina diaria de bienestar desde adentro, con un enfoque en autocuidado, nutrición y belleza funcional.\n\nSu fórmula combina el aporte funcional del colágeno de pescado con betaglucanos de Ganoderma lucidum, quínoa líquida, jugo de manzana y una mezcla de ingredientes como frutos rojos, goji, aloe vera y espinaca en polvo.\n\nCada sachet ofrece una experiencia frutal y práctica para quienes buscan integrar ingredientes de bienestar a su rutina diaria.",
    usage:
      "Consumir según las indicaciones del empaque, preferiblemente en un horario fijo del día. Acompañar con buena hidratación, alimentación equilibrada, descanso y hábitos saludables. En caso de embarazo, lactancia, enfermedades de base, uso de medicamentos o alergia al pescado, consultar con un profesional de la salud.",
    customerPrice: 276900,
    affiliatePrice: 216900,
    discount: "21,7%",
    images: [
      `${imageBasePath}/reskine-collagen-drink-1.jpg`,
      `${imageBasePath}/reskine-collagen-drink-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° RSA-0025739-2023",
    sanitaryNotification: null,
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-gano-creal-spirulina",
    slug: "gano-creal-spirulina",
    name: "Gano C'Real Spirulina",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplemento dietario",
    code: "507",
    presentation:
      "Peso neto: 450 g (30 g x 15 sachets). Cereal instantáneo en polvo elaborado con espirulina y extracto de Ganoderma lucidum.",
    shortDescription:
      "Peso neto: 450 g (30 g x 15 sachets). Cereal instantáneo en polvo elaborado con espirulina y extracto de Ganoderma lucidum.",
    fullDescription:
      "Gano C'Real Spirulina es una alternativa funcional para quienes desean iniciar el día con una preparación práctica, nutritiva y diferente al café tradicional.\n\nSu ingrediente principal es la espirulina, una microalga reconocida por su concentración natural de nutrientes, proteínas vegetales y pigmentos antioxidantes, asociada con vitalidad y bienestar general.\n\nAdemás, incorpora Ganoderma lucidum, hongo funcional reconocido por sus compuestos bioactivos relacionados con bienestar, equilibrio y apoyo antioxidante dentro de hábitos saludables.",
    usage:
      "Disolver un sobre/sachet en agua caliente o tibia, mezclar bien y consumir preferiblemente en la mañana o como parte de una pausa nutritiva durante el día.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    discount: "23,6%",
    images: [`${imageBasePath}/gano-creal-spirulina-1.jpg`],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2014-0003291",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-ganoderma-capsulas",
    slug: "ganoderma-capsulas",
    name: "Ganoderma Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplemento dietario",
    code: "801",
    presentation:
      "Frasco x 90 cápsulas. Cada cápsula contiene 275 mg de Ganoderma lucidum.",
    shortDescription:
      "Frasco x 90 cápsulas. Cada cápsula contiene 275 mg de Ganoderma lucidum.",
    fullDescription:
      "Ganoderma Cápsulas es una presentación práctica para incorporar Ganoderma lucidum a la rutina diaria sin necesidad de preparar bebidas.\n\nEl Ganoderma lucidum, también conocido como reishi o lingzhi, es un hongo usado tradicionalmente en países asiáticos como parte de prácticas orientadas al bienestar y la longevidad.\n\nSe reconoce por su contenido de compuestos bioactivos como polisacáridos, betaglucanos y triterpenoides, asociados con bienestar general y apoyo antioxidante dentro de hábitos saludables.",
    usage:
      "Tomar según las indicaciones del empaque, acompañado de agua y como parte de una rutina diaria de bienestar. No exceder la porción recomendada. En caso de embarazo, lactancia, enfermedades de base o uso de medicamentos, consultar con un profesional de la salud.",
    customerPrice: 332500,
    affiliatePrice: 272500,
    discount: "18%",
    images: [
      `${imageBasePath}/ganoderma-capsulas-1.jpg`,
      `${imageBasePath}/ganoderma-capsulas-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2014-0003428",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-excellium-capsulas",
    slug: "excellium-capsulas",
    name: "Excellium Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplemento dietario",
    code: "803",
    presentation:
      "Frasco x 90 cápsulas. Cápsulas elaboradas con extracto obtenido del Ganoderma lucidum joven.",
    shortDescription:
      "Frasco x 90 cápsulas. Cápsulas elaboradas con extracto obtenido del Ganoderma lucidum joven.",
    fullDescription:
      "Excellium Cápsulas es una opción funcional pensada para complementar la rutina diaria de bienestar de una forma práctica, directa y constante.\n\nSu fórmula se basa en extracto obtenido del Ganoderma lucidum joven, una etapa del hongo valorada por sus compuestos bioactivos, entre ellos polisacáridos, betaglucanos y triterpenoides.\n\nEs ideal para quienes desean incorporar el valor del Ganoderma joven sin sabores, preparaciones o bebidas.",
    usage:
      "Consumir según las indicaciones del empaque, acompañado de agua y como parte de una rutina diaria de bienestar. No exceder la porción recomendada. En caso de embarazo, lactancia, enfermedades de base o uso de medicamentos, consultar previamente con un profesional de la salud.",
    customerPrice: 332500,
    affiliatePrice: 272500,
    discount: "18%",
    images: [
      `${imageBasePath}/excellium-capsulas-1.jpg`,
      `${imageBasePath}/excellium-capsulas-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2014-0003368",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-cordygold-capsulas",
    slug: "cordygold-capsulas",
    name: "CordyGold Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplemento dietario",
    code: "805",
    presentation:
      "Frasco x 60 cápsulas. Cada cápsula contiene 500 mg de extracto de Cordyceps sinensis.",
    shortDescription:
      "Frasco x 60 cápsulas. Cada cápsula contiene 500 mg de extracto de Cordyceps sinensis.",
    fullDescription:
      "CordyGold Cápsulas es un suplemento dietario elaborado con extracto de Cordyceps sinensis, pensado para acompañar la energía, la vitalidad y el bienestar diario dentro de una rutina constante y equilibrada.\n\nEl Cordyceps sinensis es un hongo tradicionalmente valorado por su relación con la energía, la resistencia física y el bienestar general.\n\nA diferencia de otros productos de la línea enfocados en Ganoderma lucidum, CordyGold se centra en el aporte funcional del Cordyceps, siendo una alternativa práctica para personas activas o con jornadas exigentes.",
    usage:
      "Consumir según las indicaciones del empaque, acompañado de agua y como parte de una rutina diaria de bienestar. No exceder la porción recomendada. En caso de embarazo, lactancia, enfermedades de base o uso de medicamentos, consultar con un profesional de la salud.",
    customerPrice: 424500,
    affiliatePrice: 336900,
    discount: "20,6%",
    images: [
      `${imageBasePath}/cordygold-capsulas-1.jpg`,
      `${imageBasePath}/cordygold-capsulas-2.jpg`
    ],
    sanitaryRegistration: "Registro Sanitario INVIMA N° SD2017-0004056",
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice,
    legalNotes: [supplementNotice]
  }),
  product({
    id: "co-gano-fresh-toothpaste",
    slug: "gano-fresh-toothpaste",
    name: "Gano Fresh Toothpaste",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "302",
    presentation:
      "Tubo x 150 g. Pasta dental formulada con extracto de Ganoderma lucidum, sorbitol, agua y menta.",
    shortDescription:
      "Tubo x 150 g. Pasta dental formulada con extracto de Ganoderma lucidum, sorbitol, agua y menta.",
    fullDescription:
      "Gano Fresh Toothpaste es una pasta dental formulada para acompañar la limpieza bucal cotidiana y proporcionar una sensación de frescura durante el cepillado.\n\nSu composición incorpora sorbitol, agua y menta, junto con extracto de Ganoderma lucidum. El sabor y aroma refrescantes contribuyen a una sensación de boca limpia y aliento agradable.\n\nEs una opción práctica para integrar el concepto de bienestar funcional a la rutina diaria de higiene bucal.",
    usage:
      "Aplicar una pequeña cantidad sobre el cepillo dental y cepillar dientes y encías después de las comidas o según la rutina habitual de higiene bucal. Enjuagar con agua. No ingerir. Mantener fuera del alcance de niños pequeños sin supervisión.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    discount: "23%",
    images: [
      `${imageBasePath}/gano-fresh-toothpaste-1.jpg`,
      `${imageBasePath}/gano-fresh-toothpaste-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA N° NSOC58855-14CO",
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-gano-soap",
    slug: "gano-soap",
    name: "Gano Soap",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "301",
    presentation:
      "Caja x 2 jabones. Cada jabón contiene 100 g, para un contenido total de 200 g por caja.",
    shortDescription:
      "Caja x 2 jabones. Cada jabón contiene 100 g, para un contenido total de 200 g por caja.",
    fullDescription:
      "Gano Soap es un jabón en barra enriquecido con Ganoderma lucidum y leche de cabra, diseñado para acompañar la limpieza y el cuidado diario de la piel.\n\nSu fórmula ofrece una experiencia suave y agradable durante el baño, ayudando a dejar una sensación de piel limpia, fresca y cuidada.\n\nA diferencia de un jabón convencional, incorpora el valor diferencial del Ganoderma lucidum junto con la suavidad tradicionalmente asociada a la leche de cabra.",
    usage:
      "Aplicar sobre la piel húmeda durante el baño, masajear suavemente hasta generar espuma y enjuagar con abundante agua. Evitar el contacto con los ojos. No ingerir. Suspender su uso si se presenta irritación o molestia persistente.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    discount: "23%",
    images: [
      `${imageBasePath}/gano-soap-1.jpg`,
      `${imageBasePath}/gano-soap-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA: NSOC99970-20CO",
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-gano-transparent-soap",
    slug: "gano-transparent-soap",
    name: "Gano Transparent Soap",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "303",
    presentation: "Caja x 1 jabón transparente. Peso neto: 100 g.",
    shortDescription: "Caja x 1 jabón transparente. Peso neto: 100 g.",
    fullDescription:
      "Gano Transparent Soap es un jabón transparente formulado con extracto de Ganoderma lucidum, aloe vera y extracto de papaya, diseñado para acompañar la limpieza diaria de la piel con una sensación fresca, suave y agradable.\n\nSu textura transparente y fragancia ligera lo convierten en una opción ideal para quienes desean una experiencia de baño más delicada y refrescante.\n\nPuede usarse en rostro y cuerpo, evitando el contacto directo con los ojos. Es una alternativa práctica para integrar el bienestar funcional a la rutina diaria de cuidado personal.",
    usage:
      "Aplicar sobre la piel húmeda del rostro o cuerpo, masajear suavemente hasta generar espuma y enjuagar con abundante agua. Evitar el contacto directo con los ojos. Suspender su uso si se presenta irritación o molestia persistente.",
    customerPrice: 101500,
    affiliatePrice: 78500,
    discount: "22,7%",
    images: [
      `${imageBasePath}/gano-transparent-soap-1.jpg`,
      `${imageBasePath}/gano-transparent-soap-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA N° NSOC09915-21CO",
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-piel8brillo-shampoo",
    slug: "piel8brillo-shampoo",
    name: "Piel8Brillo Shampoo",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "305",
    presentation:
      "Frasco x 300 mL. Shampoo formulado con extracto de Ganoderma lucidum, aloe vera e ingredientes seleccionados para acompañar la limpieza y el cuidado diario del cabello.",
    shortDescription:
      "Frasco x 300 mL. Shampoo formulado con extracto de Ganoderma lucidum, aloe vera e ingredientes seleccionados para acompañar la limpieza y el cuidado diario del cabello.",
    fullDescription:
      "Piel8Brillo Shampoo es un shampoo formulado con extracto de Ganoderma lucidum e ingredientes de origen natural, diseñado para ofrecer una limpieza profunda pero suave como parte de la rutina habitual de cuidado capilar.\n\nSu fórmula ayuda a limpiar el cabello y el cuero cabelludo sin dejar una sensación pesada, aportando una experiencia de frescura, suavidad y cuidado desde la raíz hasta las puntas.\n\nEs una buena opción para quienes buscan una rutina capilar que acompañe la limpieza diaria, la vitalidad, la sensación de cabello más suave y una apariencia más cuidada.",
    usage:
      "Aplicar sobre el cabello mojado, masajear suavemente el cuero cabelludo hasta generar espuma y distribuir de raíz a puntas. Enjuagar con abundante agua. Evitar el contacto con los ojos. Suspender su uso si se presenta irritación o molestia persistente.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    discount: "23%",
    images: [
      `${imageBasePath}/piel8brillo-shampoo-1.jpg`,
      `${imageBasePath}/piel8brillo-shampoo-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA N° NSOC07407-21CO",
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-piel8brillo-acondicionador",
    slug: "piel8brillo-acondicionador",
    name: "Piel8Brillo Acondicionador",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "306",
    presentation:
      "Frasco x 300 mL. Acondicionador capilar formulado con extracto de Ganoderma lucidum e ingredientes de origen natural.",
    shortDescription:
      "Frasco x 300 mL. Acondicionador capilar formulado con extracto de Ganoderma lucidum e ingredientes de origen natural.",
    fullDescription:
      "Piel8Brillo Acondicionador está diseñado para complementar el uso del shampoo y mejorar la experiencia de cuidado diario del cabello.\n\nSu fórmula ligera se distribuye fácilmente sobre el cabello, ayudando a dejarlo con una sensación más suave, manejable y agradable al tacto, sin aportar una sensación pesada.\n\nEs ideal para facilitar el peinado, mejorar la apariencia del cabello y mantener una rutina capilar más completa y consciente.",
    usage:
      "Después de lavar el cabello con shampoo, aplicar sobre el cabello húmedo, principalmente de medios a puntas. Dejar actuar unos minutos y enjuagar con abundante agua. Evitar el contacto con los ojos. Suspender su uso si se presenta irritación o molestia persistente.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    discount: "23%",
    images: [
      `${imageBasePath}/piel8brillo-acondicionador-1.jpg`,
      `${imageBasePath}/piel8brillo-acondicionador-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA N° NSOC07389-21CO",
    dietarySupplementNotice: null,
    legalNotes: []
  }),
  product({
    id: "co-piel8brillo-exfoliante-corporal",
    slug: "piel8brillo-exfoliante-corporal",
    name: "Piel8Brillo Exfoliante Corporal",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosmético",
    code: "307",
    presentation:
      "Frasco x 300 mL. Exfoliante corporal formulado con extracto de Ganoderma lucidum, agua, sílice hidratada y partículas exfoliantes suaves.",
    shortDescription:
      "Frasco x 300 mL. Exfoliante corporal formulado con extracto de Ganoderma lucidum, agua, sílice hidratada y partículas exfoliantes suaves.",
    fullDescription:
      "Piel8Brillo Exfoliante Corporal es un exfoliante formulado para acompañar la limpieza corporal y mejorar la sensación de suavidad en la piel.\n\nSu fórmula incluye agua, sílice hidratada y extracto de Ganoderma lucidum, ofreciendo una experiencia de exfoliación cómoda y agradable durante la ducha.\n\nA diferencia de un jabón corporal común, complementa la rutina de baño con una acción exfoliante suave, ideal para quienes desean una piel con apariencia más cuidada y una sensación de limpieza más profunda.",
    usage:
      "Aplicar sobre la piel húmeda durante la ducha, especialmente en brazos, piernas, codos y rodillas. Masajear suavemente con movimientos circulares y enjuagar con abundante agua. Usar de 2 a 3 veces por semana, según tolerancia. Evitar piel irritada, lesionada o recién depilada.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    discount: "23%",
    images: [
      `${imageBasePath}/piel8brillo-exfoliante-corporal-1.jpg`,
      `${imageBasePath}/piel8brillo-exfoliante-corporal-2.jpg`
    ],
    sanitaryRegistration: null,
    sanitaryNotification: "Notificación Sanitaria INVIMA N° NSOC96487-19CO",
    dietarySupplementNotice: null,
    legalNotes: []
  })
];

export const productCategoriesColombia = [
  "Todos",
  "Cafés",
  "Bebidas funcionales",
  "Suplementos",
  "Cuidado personal"
] as const;
