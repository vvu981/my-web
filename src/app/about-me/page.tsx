import React from 'react';
import AboutMePageClient from './AboutMePageClient';
import { availableLanguages, type Language } from '../../i18n/portfolio';
import { aboutMeDictionaries } from '../../i18n/about-me';
import aboutMeEs from '../../content/about-me/about-me-es.json';
import aboutMeEn from '../../content/about-me/about-me-en.json';
import { aboutMeSectionsSchema } from '../../content/schemas';
import '../page.css';
import '../experience/experience.css';
import './about-me.css';

type Parsed = { title?: string; html: string };

function sanitizeHtmlFragment(html: string): string {
  return html
    .replaceAll(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replaceAll(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replaceAll(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replaceAll(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replaceAll(/href\s*=\s*"\s*javascript:[^"]*"/gi, 'href="#"')
    .replaceAll(/href\s*=\s*'\s*javascript:[^']*'/gi, "href='#'");
}

function convertBodyToHtml(mdBody: string): Parsed {
  let processed = mdBody
    .replaceAll(/^###\s+(.*)$/gm, '<h3>$1</h3>')
    .replaceAll(/^##\s+(.*)$/gm, '<h2>$1</h2>');

  processed = processed
    .replaceAll(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replaceAll(/\*(.*?)\*/g, '<em>$1</em>')
    .replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  const paras = processed.split(/\n{2,}/).map(p => p.trim()).filter(Boolean).map(p => {
    // If already a heading or list or block tag, keep
    if (/^<(h2|h3|ul|ol|pre|blockquote)/.test(p)) return p;
    // lists
    if (/^(?:[-*+]\s)/.test(p)) {
      const items = p.split(/\n/).map(l => l.replace(/^[-*+]\s+/, ''));
      return '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>';
    }
    // otherwise paragraph
    const withBreaks = p.replaceAll('\n', '<br/>');
    return `<p>${withBreaks}</p>`;
  });

  const sanitized = sanitizeHtmlFragment(paras.join('\n'));

  return { html: sanitized };
}

export default function Page() {
  const parsedSectionsByLanguage = {} as Record<Language, Parsed[]>;

  const dataByLang: Record<Language, { Title: string; Content: string }[]> = {
    es: aboutMeSectionsSchema.parse(aboutMeEs),
    en: aboutMeSectionsSchema.parse(aboutMeEn),
  };

  for (const lang of availableLanguages) {
    const items = dataByLang[lang] ?? [];
    if (items.length === 0) {
      const fallbackTitle = aboutMeDictionaries[lang]?.page.title ?? 'About me';
      const fallbackBody = lang === 'es' ? `Añade src/content/about-me/${lang}.json con tu contenido.` : `Add src/content/about-me/${lang}.json with your content.`;
      parsedSectionsByLanguage[lang] = [{ title: fallbackTitle, html: convertBodyToHtml(fallbackBody).html }];
      continue;
    }

    parsedSectionsByLanguage[lang] = items.map(it => ({ title: it.Title, html: convertBodyToHtml(it.Content).html }));
  }

  return <AboutMePageClient parsedSectionsByLanguage={parsedSectionsByLanguage} />;
}
