'use client';

import { useEffect, type MouseEvent } from 'react';
import { availableLanguages, portfolioDictionaries } from '../i18n/portfolio';
import { SiteHeader } from '../components/header/SiteHeader';
import { HeroSection } from '../components/home/HeroSection';
import { ValuePropsSection } from '../components/home/ValuePropsSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { FooterSection } from '../components/home/FooterSection';
import { useCurrentLanguage } from '../hooks/useCurrentLanguage';
import externalLinks from '../content/links/external-links.json';
import { consumeContactScrollOnHomeFlag, scrollToContactSection } from '../utils/contactNavigation';
import './page.css';

export default function Page() {
  const { language, setLanguage } = useCurrentLanguage();
  const t = portfolioDictionaries[language];

  useEffect(() => {
    if (!consumeContactScrollOnHomeFlag()) {
      return;
    }

    globalThis.requestAnimationFrame(() => {
      scrollToContactSection('end');
    });
  }, []);

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToContactSection('end');
  };

  return (
    <div /*suppressHydrationWarning*/ className="dot-bg" style={{ minHeight: '100vh', fontFamily: 'var(--font-body)', color: 'var(--text)' }}>
      <SiteHeader
        copy={t}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={setLanguage}
        activeSection="home"
      />

      <HeroSection
        hero={t.hero}
        diagram={t.diagram}
        links={externalLinks}
        onContactClick={handleContactClick}
      />

      <ValuePropsSection title={t.sections.whyMe} valueProps={t.valueProps} />

      <TechStackSection title={t.sections.stack} stack={t.techStack} />

      <FooterSection quote={t.footerQuote} email={t.contact.email} />
    </div>
  );
}