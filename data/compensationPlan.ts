export type IncomeForm = {
  id: string;
  order: number;
  title: string;
  slug: string;
  category: "Ingresos inmediatos" | "Incentivos para Diamantes Emergentes" | "Beneficios de liderazgo a largo plazo";
  frequency: string;
  summary: string;
  description: string;
  image: string | null;
  sourceDocument: string;
};

export const compensationPlanSource =
  "Plan de Compensación_Gano Excel S.A_CO.pdf";

export const incomeForms: IncomeForm[] = [
  {
    id: "ganancia-directa",
    order: 1,
    title: "Ganancia Directa / Venta al por Menor",
    slug: "ganancia-directa-venta-al-por-menor",
    category: "Ingresos inmediatos",
    frequency: "Diario/Semanal",
    summary:
      "Margen entre el precio cliente y el precio de Vendedor Independiente en ventas directas.",
    description:
      "El documento explica que la venta de productos comercializados por Gano Excel es importante para construir y mantener el negocio. La ganancia directa corresponde al margen entre el precio que obtiene el Vendedor Independiente y el precio final pagado por el cliente, antes de impuestos.",
    image: "/images/compensation-plan/forma-01.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "gen5",
    order: 2,
    title: "GEN5",
    slug: "gen5",
    category: "Ingresos inmediatos",
    frequency: "Pago semanal",
    summary:
      "Compensación por compras de paquetes ESP realizadas por personas vinculadas al árbol de patrocinio.",
    description:
      "Según el plan, los ESP Calificados pueden obtener compensaciones por compras de paquetes Executive Success Package realizadas por personas vinculadas de forma personal y por generaciones dentro de su árbol de patrocinio, bajo requisitos de calificación y volumen mensual.",
    image: "/images/compensation-plan/forma-02.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "mvp-bono-superestrella",
    order: 3,
    title: "MVP - Bono Superestrella",
    slug: "mvp-bono-superestrella",
    category: "Ingresos inmediatos",
    frequency: "Pago semanal",
    summary:
      "Bono relacionado con afiliaciones personales calificadas que ayudan a construir bases sólidas.",
    description:
      "El plan presenta este bono como una forma de apoyar el desarrollo del equipo. Aplica cuando se ayuda a Vendedores Independientes afiliados personalmente a alcanzar y mantener condiciones de calificación, de acuerdo con las reglas del documento.",
    image: "/images/compensation-plan/forma-03.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "rebaja-de-volumen-personal",
    order: 4,
    title: "Rebaja de Volumen Personal",
    slug: "rebaja-de-volumen-personal",
    category: "Ingresos inmediatos",
    frequency: "Pago semanal",
    summary:
      "Incentivo asociado al volumen personal adicional sobre compras personales ESP.",
    description:
      "El documento relaciona esta forma con mantener producto disponible y realizar volumen adicional. La rebaja de volumen personal se usa dentro de las condiciones del plan para complementar el esfuerzo de negocio, según calificaciones y reglas de volumen.",
    image: "/images/compensation-plan/forma-04.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "compensaciones-de-equipo-binario",
    order: 5,
    title: "Compensaciones de Equipo Binario",
    slug: "compensaciones-de-equipo-binario",
    category: "Ingresos inmediatos",
    frequency: "Pago semanal",
    summary:
      "Compensación basada en el desarrollo de dos ramas dentro del árbol binario.",
    description:
      "El plan describe un equipo de dos ramas, izquierda y derecha, en el que el volumen de ambas piernas se considera para calcular compensaciones. Para obtenerlas se requieren condiciones de Binario Calificado, volumen mínimo y reglas de pierna de pago.",
    image: "/images/compensation-plan/forma-05.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "diamante-diferencial",
    order: 6,
    title: "Diamante Diferencial",
    slug: "diamante-diferencial",
    category: "Incentivos para Diamantes Emergentes",
    frequency: "Pago mensual",
    summary:
      "Bono diferencial para rangos Diamante y superiores sobre ventas de paquetes ESP en el árbol de patrocinio.",
    description:
      "El documento indica que, comenzando por el rango Diamante, puede existir un bono diferencial hasta ciertos montos por cada ESP vendido en el árbol de patrocinio. El porcentaje o distribución depende del rango Diamante alcanzado y de las reglas del plan.",
    image: "/images/compensation-plan/forma-06.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "gen5-compresion",
    order: 7,
    title: "GEN5 Compresión",
    slug: "gen5-compresion",
    category: "Incentivos para Diamantes Emergentes",
    frequency: "Pago mensual",
    summary:
      "Pago residual variable para líderes activos y calificados desde nivel Diamante o superior.",
    description:
      "El plan presenta GEN5 Compresión como un pago residual variable asociado a ventas ESP debajo de afiliados personales que no han llegado al rango Platino. Opera con criterios de rango, líneas de patrocinio y compresión según el nivel de calificación ESP.",
    image: "/images/compensation-plan/forma-07.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "bono-de-liderazgo",
    order: 8,
    title: "Bono de Liderazgo",
    slug: "bono-de-liderazgo",
    category: "Incentivos para Diamantes Emergentes",
    frequency: "Pago semanal",
    summary:
      "Incentivo para líderes Diamante y superiores basado en generaciones calificadas del árbol de patrocinio.",
    description:
      "El documento explica que este bono premia el apoyo a afiliados personales y a organizaciones para crear flujos de ganancias residuales. El alcance de generaciones y el porcentaje dependen del rango de liderazgo y de las reglas de equiparación.",
    image: "/images/compensation-plan/forma-08.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "bono-fondo-global",
    order: 9,
    title: "Bono Fondo Global",
    slug: "bono-fondo-global",
    category: "Beneficios de liderazgo a largo plazo",
    frequency: "Pago semanal",
    summary:
      "Participación en un fondo global para rangos Diamante Ejecutivo y superiores, según condiciones del plan.",
    description:
      "El plan señala que, al avanzar a Diamante Ejecutivo, se puede acceder a participaciones del Fondo Global. El documento menciona un fondo reservado sobre volumen comisionable total y una distribución entre participantes calificados por país y rango.",
    image: "/images/compensation-plan/forma-09.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "multiples-centros-de-negocios",
    order: 10,
    title: "Múltiples Centros de Negocios",
    slug: "multiples-centros-de-negocios",
    category: "Beneficios de liderazgo a largo plazo",
    frequency: "Beneficios semanales",
    summary:
      "Posibilidad de abrir centros adicionales de negocio desde rangos Diamante superiores.",
    description:
      "El documento indica que desde Diamante Premier y niveles posteriores pueden abrirse centros de negocios adicionales, manteniendo requisitos de rango y volumen. Estos centros pueden participar tanto en árbol binario como en árbol de patrocinio, según las reglas del plan.",
    image: "/images/compensation-plan/forma-10.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "x2-incentivo-de-automovil",
    order: 11,
    title: "X2 Incentivo de automóvil",
    slug: "x2-incentivo-de-automovil",
    category: "Beneficios de liderazgo a largo plazo",
    frequency: "Beneficio mensual/anual",
    summary:
      "Incentivo para rangos Diamante Premier y superiores, sujeto a ciclos de calificación.",
    description:
      "El plan describe un incentivo de automóvil para quienes califican dentro de rangos superiores durante ciclos semanales consecutivos. El beneficio depende del rango, centros de negocio y mantenimiento de calificación según condiciones del documento.",
    image: "/images/compensation-plan/forma-11.webp",
    sourceDocument: compensationPlanSource
  },
  {
    id: "incentivo-educativo",
    order: 12,
    title: "Incentivo educativo",
    slug: "incentivo-educativo",
    category: "Beneficios de liderazgo a largo plazo",
    frequency: "Beneficio mensual/anual",
    summary:
      "Crédito educativo para rangos Premier a Diamante Corona, sujeto a calificación.",
    description:
      "El documento presenta un crédito mensual para gastos de educación propios o de familiares inmediatos, acumulable bajo condiciones específicas de rango y calificación. Aplica términos y condiciones.",
    image: "/images/compensation-plan/forma-12.webp",
    sourceDocument: compensationPlanSource
  }
];
