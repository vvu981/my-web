import type { Language } from './portfolio';

export type AboutMePageCopy = {
	title: string;
	subtitle: string;
};

export type AboutMeDictionary = {
	page: AboutMePageCopy;
};

export const aboutMeDictionaries: Record<Language, AboutMeDictionary> = {
	es: {
		page: {
			title: 'Sobre mi',
			subtitle:
				'Trayectoria, formación y los pilares que definen mi perfil profesional.',
		},
	},
	en: {
		page: {
			title: 'About me',
			subtitle:
				'Background, education, and the core pillars of my professional profile.',
		},
	},
};
