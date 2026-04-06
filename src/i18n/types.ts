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

export type ValuePropWithoutIcon = Omit<ValueProp, 'icon'>;

export type PortfolioOverrides = Omit<Partial<PortfolioDictionary>, 'hero' | 'valueProps'> & {
  hero?: Partial<PortfolioDictionary['hero']>;
  valueProps?: ValuePropWithoutIcon[];
};
