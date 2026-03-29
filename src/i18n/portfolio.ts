export type Language = 'es' | 'en';

export type IconKey = 'lightning' | 'hex' | 'diamond';

export type ValueProp = {
  tag: string;
  title: string;
  desc: string;
  icon: IconKey;
};

export type PortfolioDictionary = {
  languageSwitcherLabel: string;
  languages: Record<Language, string>;
  brandName: string;
  nav: {
    projects: string;
    aboutMe: string;
    experience: string;
    contact: string;
    emailLabel: string;
  };
  contact: {
    email: string;
  };
  hero: {
    role: string;
    headingParts: Array<{ text?: string; highlight?: string }>;
    description: string;
    cta: string;
    github: string;
    linkedin: string;
  };
  diagram: {
    windowTitle: string;
    footerLabel: string;
    regions: [string, string, string, string];
    nodes: {
      browser: string;
      cdn: string;
      gateway: string;
      auth: string;
      core: string;
      workers: string;
      database: string;
      cache: string;
    };
  };
  sections: {
    whyMe: string;
    stack: string;
  };
  valueProps: ValueProp[];
  techStack: string[];
  footerQuote: string;
};

type ValuePropWithoutIcon = Omit<ValueProp, 'icon'>;

type PortfolioOverrides = Omit<Partial<PortfolioDictionary>, 'hero' | 'valueProps'> & {
  hero?: Partial<PortfolioDictionary['hero']>;
  valueProps?: ValuePropWithoutIcon[];
};

// Objeto base con datos compartidos
const shared: Partial<PortfolioDictionary> & { social: { github: string; linkedin: string } } = {
  brandName: 'Victor Vallejo',
  contact: { email: 'contact@victor-vallejo.me' },
  techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'C#', 'REST APIs', 'Prisma', 'Java', 'Git', 'GitHub'],
  // Mantenemos tus strings originales
  social: { github: 'GitHub', linkedin: 'LinkedIn' },
  // shared icon order for valueProps (icons are language-agnostic)
  valueProps: [
    { tag: '', title: '', desc: '', icon: 'lightning' },
    { tag: '', title: '', desc: '', icon: 'hex' },
    { tag: '', title: '', desc: '', icon: 'diamond' },
  ] as ValueProp[],
};

const esOverrides: PortfolioOverrides = {
  languageSwitcherLabel: 'Idioma',
  languages: { es: 'Español', en: 'Inglés' },
  nav: {
    projects: '',
    aboutMe: 'Sobre mí',
    experience: 'Experiencia',
    contact: 'Contacto',
    emailLabel: 'Correo',
  },
  hero: {
    role: 'Fullstack Developer | Software Engineer',
    headingParts: [
      { text: 'Diseño sistemas ' },
      { highlight: 'escalables' },
      { text: ' y ' },
      { highlight: 'mantenibles' },
      { text: '.' },
    ],
    description:
      'No solo construyo features: diseño las capas que permiten a los productos crecer sin deuda técnica. Especializado en Java, Node.js, APIs escalables y arquitecturas orientadas a negocio.',
    cta: 'Trabajemos juntos!',
    github: '', 
    linkedin: '',
  },
  diagram: {
    windowTitle: 'architecture.live',
    footerLabel: 'vista de arquitectura en vivo · flujo de datos en tiempo real',
    regions: ['CAPA CLIENTE', 'GATEWAY', 'CAPA DE SERVICIOS', 'CAPA DE DATOS'],
    nodes: {
      browser: 'Navegador',
      cdn: 'CDN',
      gateway: 'API Gateway',
      auth: 'Auth',
      core: 'Core API',
      workers: 'Workers',
      database: 'Database',
      cache: 'Cache',
    },
  },
  sections: { whyMe: '¿Por qué yo?', stack: 'Stack tecnológico' },
  valueProps: [
    {
      tag: 'Performance',
      title: 'Rendimiento y optimización',
      desc: 'Diseño arquitecturas que priorizan la velocidad de entrega y la eficiencia de recursos, optimizando cada capa para garantizar Core Web Vitals excelentes y una retención de usuarios superior.',
    },
    {
      tag: 'Clean Architecture',
      title: 'Código mantenible y escalable',
      desc: 'Diseño con separación de responsabilidades clara. TypeScript estricto, patrones SOLID y capas bien definidas para que el proyecto crezca sin convertirse en spaghetti.',
    },
    {
      tag: 'Business Value',
      title: 'Visión de negocio',
      desc: 'Entiendo los objetivos detrás del código. Propongo la arquitectura que mejor sirve al producto, no la que más brilla en un diagrama de LinkedIn.',
    },
  ],
  footerQuote: 'El código es el medio, el valor es el fin.',
};

const enOverrides: PortfolioOverrides = {
  languageSwitcherLabel: 'Language',
  languages: { es: 'Spanish', en: 'English' },
  nav: {
    projects: '',
    aboutMe: 'About me',
    experience: 'Experience',
    contact: 'Contact',
    emailLabel: 'Email',
  },
  hero: {
    role: 'Fullstack Developer | Software Engineer',
    headingParts: [
      { text: 'I design ' },
      { highlight: 'scalable' },
      { text: ' and ' },
      { highlight: 'maintainable' },
      { text: ' systems.' },
    ],
    description:
      'I do not only build features: I design the layers that let products grow without technical debt. Specialized in Next.js, Node.js, scalable APIs and business-oriented architectures.',
    cta: 'Lets work together!',
    github: '',
    linkedin: '',
  },
  diagram: {
    windowTitle: 'architecture.live',
    footerLabel: 'live architecture view · real-time data flow',
    regions: ['CLIENT LAYER', 'GATEWAY', 'SERVICE LAYER', 'DATA LAYER'],
    nodes: {
      browser: 'Browser',
      cdn: 'CDN',
      gateway: 'API Gateway',
      auth: 'Auth',
      core: 'Core API',
      workers: 'Workers',
      database: 'Database',
      cache: 'Cache',
    },
  },
  sections: { whyMe: 'Why me?', stack: 'Tech stack' },
  valueProps: [
    {
      tag: 'Performance',
      title: 'Performance and optimization',
      desc: 'Speed is a business metric. I design architectures that prioritize delivery speed and resource efficiency, optimizing every layer to guarantee excellent Core Web Vitals and superior user retention.',
    },
    {
      tag: 'Clean Architecture',
      title: 'Maintainable and scalable code',
      desc: 'I design with clear separation of concerns. Strict TypeScript, SOLID patterns and clean layers so the project can grow without turning into spaghetti code.',
    },
    {
      tag: 'Business Value',
      title: 'Business mindset',
      desc: 'I understand the business goals behind the code. I propose the architecture that best serves the product, not the one that looks flashier in a diagram.',
    },
  ],
  footerQuote: 'Code is the medium, value is the goal.',
};

export const portfolioDictionaries: Record<Language, PortfolioDictionary> = {
  es: mergeWithShared(esOverrides),
  en: mergeWithShared(enOverrides),
};

function mergeWithShared(overrides: PortfolioOverrides): PortfolioDictionary {
  const merged = { ...shared, ...overrides };
  const sharedIcons = shared.valueProps ?? [];
  const overrideValueProps = overrides.valueProps ?? [];

  const valueProps: ValueProp[] = overrideValueProps.map((vp, i) => ({
    ...vp,
    icon: sharedIcons[i]?.icon ?? 'lightning',
  }));

  const heroSource = merged.hero ?? {};
  const hero: PortfolioDictionary['hero'] = {
    role: heroSource.role ?? '',
    headingParts: heroSource.headingParts ?? [],
    description: heroSource.description ?? '',
    cta: heroSource.cta ?? '',
    github: shared.social.github,
    linkedin: shared.social.linkedin,
  };

  const fallbackNav: PortfolioDictionary['nav'] = {
    projects: '',
    aboutMe: '',
    experience: '',
    contact: '',
    emailLabel: '',
  };

  const fallbackDiagram: PortfolioDictionary['diagram'] = {
    windowTitle: '',
    footerLabel: '',
    regions: ['', '', '', ''],
    nodes: {
      browser: '',
      cdn: '',
      gateway: '',
      auth: '',
      core: '',
      workers: '',
      database: '',
      cache: '',
    },
  };

  return {
    languageSwitcherLabel: merged.languageSwitcherLabel ?? '',
    languages: merged.languages ?? { es: 'Español', en: 'English' },
    brandName: merged.brandName ?? '',
    nav: merged.nav ?? fallbackNav,
    contact: merged.contact ?? { email: '' },
    hero,
    diagram: merged.diagram ?? fallbackDiagram,
    sections: merged.sections ?? { whyMe: '', stack: '' },
    valueProps,
    techStack: merged.techStack ?? [],
    footerQuote: merged.footerQuote ?? '',
  };
}

export const availableLanguages: Language[] = ['es', 'en'];