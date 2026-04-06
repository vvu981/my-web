import type { PortfolioOverrides } from '../types';

export const esOverrides: PortfolioOverrides = {
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
      desc: 'Entiendo los objetivos detrás del código. Propongo la arquitectura que mejor sirve al producto.',
    },
  ],
  footerQuote: 'El código es el medio, el valor es el fin.',
};
