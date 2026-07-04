export type ProductColombia = {
  id: string;
  slug: string;
  name: string;
  country: "CO";
  commercialCategory: "Cafés" | "Bebidas funcionales" | "Suplementos" | "Cuidado personal";
  regulatoryCategory: "Alimentos" | "Suplementos dietarios" | "Cosméticos";
  code: string;
  shortDescription: string;
  fullDescription: string;
  customerPrice: number;
  affiliatePrice: number;
  savings: number;
  currency: "COP";
  taxIncluded: true;
  image: string;
  sanitaryRegistration: string | null;
  sanitaryNotification: string | null;
  dietarySupplementNotice: string | null;
  availability: "Consultar disponibilidad";
  ingredients: string | null;
  presentation: string | null;
  usage: string | null;
  relatedProducts: string[];
  relatedKit: string | null;
  educationArticle: null;
  scientificLibraryStatus: "pending";
  priceAccessNote: string;
  lastPriceUpdate: string | null;
  sourceDocument: "CATALOGO GANO EXCEL.docx";
};

const supplementNotice =
  "Los suplementos dietarios no son medicamentos y no sustituyen una alimentación equilibrada.";

const priceAccessNote =
  "El precio afiliado está disponible para personas afiliadas a Gano Excel. Consulta las condiciones de afiliación antes de comprar.";

const defaults = {
  country: "CO",
  currency: "COP",
  taxIncluded: true,
  availability: "Consultar disponibilidad",
  ingredients: null,
  presentation: null,
  usage: null,
  relatedProducts: [] as string[],
  relatedKit: null,
  educationArticle: null,
  scientificLibraryStatus: "pending",
  priceAccessNote,
  lastPriceUpdate: null,
  sourceDocument: "CATALOGO GANO EXCEL.docx"
} as const;

function product(
  data: Omit<
    ProductColombia,
    | keyof typeof defaults
    | "savings"
  >
): ProductColombia {
  return {
    ...defaults,
    ...data,
    savings: data.customerPrice - data.affiliatePrice
  };
}

export const productsColombia: ProductColombia[] = [
  product({
    id: "co-ganocafe-classic",
    slug: "ganocafe-classic",
    name: "Ganocafé Classic",
    commercialCategory: "Cafés",
    regulatoryCategory: "Suplementos dietarios",
    code: "505",
    shortDescription:
      "Mezcla de café gourmet enriquecida con extracto de Ganoderma lucidum.",
    fullDescription:
      "Mezcla de café gourmet enriquecida con extracto de Ganoderma lucidum. Conserva el aroma tentador y el sabor robusto propios de un café premium, en una preparación práctica para distintos momentos del día. Cada taza ofrece una experiencia reconfortante que combina el carácter del café con la presencia de Ganoderma lucidum, como parte de una rutina personal de bienestar.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    image: "/images/products/colombia/ganocafe-classic.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-ganocafe-3-en-1",
    slug: "ganocafe-3-en-1",
    name: "Ganocafé 3 en 1",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimentos",
    code: "501",
    shortDescription:
      "Mezcla en polvo de Ganoderma lucidum, betaglucano y café de calidad.",
    fullDescription:
      "El Ganocafé 3 en 1, es una mezcla perfecta y nutritiva en polvo de Ganoderma lucidum, betaglucano y café de calidad, posee un sabor suave y aroma extraordinario, con el fin de brindarte una experiencia única a la hora de degustarlo. Nuestro Gano Café 3 en 1 es mucho más que una simple taza de café. Es una experiencia deliciosa en cada sorbo. Con una mezcla perfecta de café instantáneo, crema no láctea y azúcar, cada taza ofrece un sabor único que te acompañará en tus momentos especiales del día.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    image: "/images/products/colombia/ganocafe-3-en-1.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-ganorico-latte-rico",
    slug: "ganorico-latte-rico",
    name: "Ganorico Latte Rico",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimentos",
    code: "509",
    shortDescription:
      "Bebida que combina café gourmet, betaglucanos de Ganoderma lucidum y crema no láctea.",
    fullDescription:
      "Bebida que combina café gourmet, betaglucanos de Ganoderma lucidum y crema no láctea. Su mezcla conserva el aroma característico del café y ofrece un perfil suave, cremoso y agradable para quienes disfrutan las preparaciones tipo latte. Cada taza está pensada para brindar una experiencia reconfortante y satisfactoria, convirtiendo el momento de tomar café en una pausa especial dentro del día.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    image: "/images/products/colombia/ganorico-latte-rico.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-ganorico-mocha-rico",
    slug: "ganorico-mocha-rico",
    name: "Ganorico Mocha Rico",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimentos",
    code: "503",
    shortDescription:
      "Mezcla de café premezclado, cacao y betaglucanos de Ganoderma lucidum.",
    fullDescription:
      "Mezcla de café premezclado, cacao y betaglucanos de Ganoderma lucidum. La fórmula reúne el sabor intenso del café con la dulzura y el aroma del cacao, creando una bebida cremosa de estilo mocha. La incorporación de Ganoderma lucidum complementa esta combinación y ofrece una alternativa diferente para quienes desean disfrutar café y chocolate en una misma preparación.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    image: "/images/products/colombia/ganorico-mocha-rico.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-luvoco",
    slug: "luvoco",
    name: "Luvoco",
    commercialCategory: "Cafés",
    regulatoryCategory: "Alimentos",
    code: "817 / 818 / 819",
    shortDescription:
      "Café molido y tostado en cápsulas, enriquecido con betaglucanos de Ganoderma lucidum.",
    fullDescription:
      "Café molido y tostado de alta calidad presentado en cápsulas y enriquecido con betaglucanos de Ganoderma lucidum. La propuesta combina el sabor y el aroma del café con un ingrediente funcional para acompañar la rutina diaria. Está disponible en perfiles Suave, Medio y Fuerte, lo que permite seleccionar la intensidad de acuerdo con la preferencia de cada persona y disfrutar una preparación práctica en máquina de cápsulas.",
    customerPrice: 147900,
    affiliatePrice: 110900,
    image: "/images/products/colombia/luvoco.webp",
    sanitaryRegistration: "NSA-0012966-2022",
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-gano-schokolade",
    slug: "gano-schokolade",
    name: "Gano Schokolade",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Suplementos dietarios",
    code: "502",
    shortDescription:
      "Bebida de chocolate con cacao, crema no láctea, leche descremada en polvo y extracto de Ganoderma lucidum.",
    fullDescription:
      "Bebida de chocolate que combina cacao, azúcar refinada, crema no láctea, leche descremada en polvo y extracto de Ganoderma lucidum. Su textura cremosa y su aroma están pensados para ofrecer una experiencia placentera. La mezcla reúne el sabor del cacao con el toque característico del Ganoderma lucidum, dando como resultado una bebida apropiada para momentos de descanso, disfrute o para compartir.",
    customerPrice: 166500,
    affiliatePrice: 124900,
    image: "/images/products/colombia/gano-schokolade.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-ganorico-shoko-rico",
    slug: "ganorico-shoko-rico",
    name: "Ganorico Shoko Rico",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Alimentos",
    code: "512",
    shortDescription:
      "Bebida de chocolate con Ganoderma lucidum, pensada para quienes disfrutan el cacao.",
    fullDescription:
      "Bebida de chocolate desarrollada para quienes disfrutan el sabor y el aroma del cacao. Su formulación incorpora Ganoderma lucidum, ingrediente que complementa la mezcla y le aporta un carácter distintivo. El resultado es una bebida cálida, envolvente y agradable, apropiada para compartir o disfrutar durante una pausa, con una experiencia intensa de chocolate en cada taza.",
    customerPrice: 166500,
    affiliatePrice: 124900,
    image: "/images/products/colombia/ganorico-shoko-rico.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-oleaf-gano-rooibos-drink",
    slug: "oleaf-gano-rooibos-drink",
    name: "Oleaf Gano Rooibos Drink",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Suplementos dietarios",
    code: "504",
    shortDescription:
      "Infusión de rooibos de origen sudafricano con Ganoderma lucidum.",
    fullDescription:
      "Infusión que combina rooibos de origen sudafricano con Ganoderma lucidum. Presenta un sabor suave, ligeramente dulce y aromático, adecuado para quienes prefieren una bebida caliente diferente al café. Puede disfrutarse como una pausa tranquila durante el día y constituye una opción agradable para acompañar momentos de relajación y equilibrio personal.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    image: "/images/products/colombia/oleaf-gano-rooibos-drink.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-reskine-collagen-drink",
    slug: "reskine-collagen-drink",
    name: "Reskine Collagen Drink",
    commercialCategory: "Bebidas funcionales",
    regulatoryCategory: "Alimentos",
    code: "530",
    shortDescription:
      "Bebida con betaglucanos de Ganoderma lucidum, colágeno de pescado y concentrado de jugo de manzana.",
    fullDescription:
      "Bebida que integra betaglucanos de Ganoderma lucidum, colágeno de pescado, quínoa líquida y concentrado de jugo de manzana en una fórmula pensada para complementar una rutina cotidiana de bienestar. Su composición incluye sabores naturales de fresa, frambuesa y arándanos, además de extracto de goji, jugo de aloe vera y espinaca en polvo. Esta combinación aporta una experiencia frutal agradable y reúne diversos ingredientes nutricionales en una sola bebida.",
    customerPrice: 276900,
    affiliatePrice: 216900,
    image: "/images/products/colombia/reskine-collagen-drink.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-gano-creal-spirulina",
    slug: "gano-creal-spirulina",
    name: "Gano C’Real Spirulina",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplementos dietarios",
    code: "507",
    shortDescription:
      "Cereal instantáneo elaborado con espirulina y extracto de Ganoderma lucidum.",
    fullDescription:
      "Cereal instantáneo elaborado con espirulina y extracto de Ganoderma lucidum. Su mezcla incluye cereales, azúcar y crema no láctea, y está diseñada como una alternativa práctica para el desayuno o para otros momentos del día. Su combinación ofrece una preparación de sabor agradable y reúne ingredientes funcionales en una opción fácil de consumir, especialmente para quienes buscan variar su rutina de desayuno.",
    customerPrice: 156900,
    affiliatePrice: 119900,
    image: "/images/products/colombia/gano-creal-spirulina.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-ganoderma-capsulas",
    slug: "ganoderma-capsulas",
    name: "Ganoderma Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplementos dietarios",
    code: "801",
    shortDescription:
      "Cápsulas de Ganoderma lucidum para incorporar este ingrediente a la rutina diaria.",
    fullDescription:
      "Cápsulas de Ganoderma lucidum presentadas como una alternativa práctica para incorporar este ingrediente a la rutina diaria y complementar hábitos personales de bienestar. Cada cápsula contiene 275 mg de Ganoderma lucidum, en una presentación sencilla de llevar y consumir según las indicaciones del producto.",
    customerPrice: 332500,
    affiliatePrice: 272500,
    image: "/images/products/colombia/ganoderma-capsulas.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-excellium-capsulas",
    slug: "excellium-capsulas",
    name: "Excellium Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplementos dietarios",
    code: "803",
    shortDescription:
      "Cápsulas enriquecidas con extracto obtenido del Ganoderma lucidum joven.",
    fullDescription:
      "Cápsulas enriquecidas con extracto obtenido del Ganoderma lucidum joven. La fórmula fue desarrollada para complementar los hábitos diarios y facilitar la incorporación de este ingrediente a una rutina de bienestar. Sus componentes han sido seleccionados para actuar de manera conjunta y ofrecer una presentación práctica para el consumo cotidiano.",
    customerPrice: 332500,
    affiliatePrice: 272500,
    image: "/images/products/colombia/excellium-capsulas.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-cordygold-capsulas",
    slug: "cordygold-capsulas",
    name: "Cordygold Cápsulas",
    commercialCategory: "Suplementos",
    regulatoryCategory: "Suplementos dietarios",
    code: "805",
    shortDescription:
      "Suplemento dietario en cápsulas elaborado con extracto de Cordyceps sinensis.",
    fullDescription:
      "Suplemento dietario en cápsulas elaborado con extracto de Cordyceps sinensis y una selección de ingredientes orientados a complementar una rutina de bienestar. Cada cápsula contiene 500 mg de extracto de Cordyceps sinensis. Su presentación facilita el consumo diario y brinda una forma práctica de incorporar este hongo a los hábitos personales.",
    customerPrice: 424500,
    affiliatePrice: 336900,
    image: "/images/products/colombia/cordygold-capsulas.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: supplementNotice
  }),
  product({
    id: "co-gano-fresh-toothpaste",
    slug: "gano-fresh-toothpaste",
    name: "Gano Fresh Toothpaste",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "302",
    shortDescription:
      "Pasta dental formulada con extracto de Ganoderma lucidum para la limpieza bucal cotidiana.",
    fullDescription:
      "Pasta dental formulada con extracto de Ganoderma lucidum para apoyar la limpieza bucal cotidiana y proporcionar una sensación de frescura duradera. Su composición incorpora sorbitol, agua y menta, junto con el extracto de Ganoderma lucidum. El sabor y el aroma refrescantes acompañan el cepillado y contribuyen a mantener una sonrisa limpia y un aliento agradable.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    image: "/images/products/colombia/gano-fresh-toothpaste.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-gano-soap",
    slug: "gano-soap",
    name: "Gano Soap",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "301",
    shortDescription:
      "Jabón enriquecido con Ganoderma lucidum y leche de cabra para la limpieza diaria.",
    fullDescription:
      "Jabón enriquecido con Ganoderma lucidum y leche de cabra. Su formulación está orientada a la limpieza y al cuidado diario de la piel, con una presentación adecuada para el uso de toda la familia.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    image: "/images/products/colombia/gano-soap.webp",
    sanitaryRegistration: null,
    sanitaryNotification: "NSOC99970-20CO",
    dietarySupplementNotice: null
  }),
  product({
    id: "co-gano-transparent-soap",
    slug: "gano-transparent-soap",
    name: "Gano Transparent Soap",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "303",
    shortDescription:
      "Barra de jabón transparente con extracto de Ganoderma lucidum e ingredientes suaves.",
    fullDescription:
      "Barra de jabón transparente que combina extracto de Ganoderma lucidum con ingredientes suaves para ofrecer una limpieza efectiva y delicada de la piel. Su fragancia ligera aporta una experiencia agradable durante el baño. Está pensado para complementar la rutina de cuidado personal y dejar una sensación de piel limpia y confortable.",
    customerPrice: 101500,
    affiliatePrice: 78500,
    image: "/images/products/colombia/gano-transparent-soap.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-piel8brillo-shampoo",
    slug: "piel8brillo-shampoo",
    name: "Piel8Brillo Shampoo",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "305",
    shortDescription:
      "Shampoo con extracto de Ganoderma lucidum e ingredientes de origen natural.",
    fullDescription:
      "Shampoo formulado con extracto de Ganoderma lucidum e ingredientes de origen natural seleccionados bajo estándares de calidad. Ofrece una limpieza profunda pero suave como parte de la rutina habitual de cuidado capilar. Su fórmula está orientada a nutrir y fortalecer el cabello desde la raíz hasta las puntas, ayudando a dejarlo con una sensación de limpieza, vitalidad y cuidado.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    image: "/images/products/colombia/piel8brillo-shampoo.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-piel8brillo-acondicionador",
    slug: "piel8brillo-acondicionador",
    name: "Piel8Brillo Acondicionador",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "306",
    shortDescription:
      "Acondicionador capilar con extracto de Ganoderma lucidum e ingredientes de origen natural.",
    fullDescription:
      "Acondicionador capilar formulado con extracto de Ganoderma lucidum y una combinación equilibrada de ingredientes de origen natural. Está diseñado para complementar la rutina de lavado y ayudar a dejar el cabello suave, manejable y con brillo. Su fórmula ligera se distribuye con facilidad y favorece un cabello agradable al tacto y más sencillo de peinar, sin aportar una sensación pesada.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    image: "/images/products/colombia/piel8brillo-acondicionador.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  }),
  product({
    id: "co-piel8brillo-exfoliante-corporal",
    slug: "piel8brillo-exfoliante-corporal",
    name: "Piel8Brillo Exfoliante Corporal",
    commercialCategory: "Cuidado personal",
    regulatoryCategory: "Cosméticos",
    code: "307",
    shortDescription:
      "Exfoliante corporal con extracto de Ganoderma lucidum y partículas exfoliantes suaves.",
    fullDescription:
      "Exfoliante corporal formulado con extracto de Ganoderma lucidum y una mezcla de ingredientes naturales y partículas exfoliantes suaves, pensado para complementar la limpieza de la piel. Su composición incluye agua y sílice hidratada, junto con el extracto de Ganoderma lucidum, para proporcionar una experiencia de exfoliación cómoda y una agradable sensación de limpieza durante la ducha.",
    customerPrice: 96000,
    affiliatePrice: 73900,
    image: "/images/products/colombia/piel8brillo-exfoliante-corporal.webp",
    sanitaryRegistration: null,
    sanitaryNotification: null,
    dietarySupplementNotice: null
  })
];

export const productCategoriesColombia = [
  "Todos",
  "Cafés",
  "Bebidas funcionales",
  "Suplementos",
  "Cuidado personal"
] as const;
