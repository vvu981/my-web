"use client";

import { SiteHeader } from '../../components/header/SiteHeader';
import ContentBlock from '../../components/ContentBlock';

import { aboutMeDictionaries } from '../../i18n/about-me';
import { availableLanguages, portfolioDictionaries, type Language } from '../../i18n/portfolio';
import { useCurrentLanguage } from '../../hooks/useCurrentLanguage';

type ParsedSection = { title?: string; html: string };

type AboutMePageClientProps = {
  parsedSectionsByLanguage: Record<Language, ParsedSection[]>;
};

export default function AboutMePageClient({ parsedSectionsByLanguage }: Readonly<AboutMePageClientProps>) {
  const { language, setLanguage } = useCurrentLanguage();
  const t         = portfolioDictionaries[language];
  const aboutCopy = aboutMeDictionaries[language];
  const sections  = parsedSectionsByLanguage[language] ?? [];

  return (
    <div className="dot-bg about-page" style={{ minHeight: '100vh', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>


      <SiteHeader
        copy={t}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={setLanguage}
        activeSection="about"
      />

      <header className="hero-header">
        <div className="shell experience-hero">
          <h1 className="experience-title fadeUp d2">{aboutCopy.page.title}</h1>
          <p className="experience-subtitle fadeUp d3">{aboutCopy.page.subtitle}</p>
        </div>
      </header>

      <main className="about-shell">
        <div className="shell about-container">
          {sections.map((section, index) => (
            <div key={`${language}-${index}`} className="card about-card" style={{ padding: 28, marginBottom: 20 }}>
              <ContentBlock title={section.title} html={section.html} />
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}