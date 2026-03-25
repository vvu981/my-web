import type { Language } from './portfolio';

import expEs from '../content/experience/exp-es.json';
import expEn from '../content/experience/exp-en.json';
import { experienceItemsSchema } from '../content/schemas';

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ExperiencePageCopy = {
  navLabel: string;
  title: string;
  subtitle: string;
  emptyState: string;
  sortLabel: string;
  sortNewest: string;
  sortOldest: string;
};

export type ExperienceDictionary = {
  page: ExperiencePageCopy;
  items: ExperienceItem[];
};

const expEsValidated = experienceItemsSchema.parse(expEs) as ExperienceItem[];
const expEnValidated = experienceItemsSchema.parse(expEn) as ExperienceItem[];

export const experienceDictionaries: Record<Language, ExperienceDictionary> = {
  es: {
    page: {
      navLabel: 'Experiencia',
      title: 'Experiencia profesional',
      subtitle:
        'Trayectoria en docencia académica y desarrollo full-stack en entorno profesional.',
      emptyState: 'Aún no hay experiencias publicadas en esta versión.',
      sortLabel: 'Ordenar por',
      sortNewest: 'Más reciente',
      sortOldest: 'Más antigua',
    },
    items: expEsValidated,
  },
  en: {
    page: {
      navLabel: 'Experience',
      title: 'Professional experience',
      subtitle: 'Career path across academy teaching and professional full-stack development.',
      emptyState: 'There are no published experiences in this version yet.',
      sortLabel: 'Sort by',
      sortNewest: 'Most recent',
      sortOldest: 'Oldest',
    },
    items: expEnValidated,
  },
};
