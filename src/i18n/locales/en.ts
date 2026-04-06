import type { PortfolioOverrides } from '../types';

export const enOverrides: PortfolioOverrides = {
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
      'I do not only build features: I design the layers that let products grow without technical debt. Specialized in Java, Next.js, Node.js, scalable APIs and business-oriented architectures.',
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
      desc: 'I understand the business goals behind the code. I propose the architecture that best serves the product.',
    },
  ],
  footerQuote: 'Code is the medium, value is the goal.',
};
