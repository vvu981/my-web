import { type Language, type PortfolioDictionary, type PortfolioOverrides, type ValueProp } from './types';
import { shared } from './locales/shared';
import { esOverrides } from './locales/es';
import { enOverrides } from './locales/en';

export * from './types';

export const availableLanguages: Language[] = ['es', 'en'];

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

export const portfolioDictionaries: Record<Language, PortfolioDictionary> = {
  es: mergeWithShared(esOverrides),
  en: mergeWithShared(enOverrides),
};