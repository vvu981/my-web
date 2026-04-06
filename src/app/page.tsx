'use client';

import { useEffect, type MouseEvent } from 'react';
import { availableLanguages, portfolioDictionaries } from '../i18n/portfolio';
import { SiteHeader } from '../components/header/SiteHeader';
import { HeroSection } from '../components/home/HeroSection';
import { ValuePropsSection } from '../components/home/ValuePropsSection';
import Lightning from '../components/icons/Lightning';
import Hex from '../components/icons/Hex';
import Diamond from '../components/icons/Diamond';
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

  const iconByKey: Record<string, React.ReactNode> = {
    lightning: <Lightning />,
    hex: <Hex />,
    diamond: <Diamond />,
  };

  const valuePropsData = t.valueProps.map((vp) => ({
    tag: vp.tag,
    title: vp.title,
    desc: vp.desc,
    iconNode: iconByKey[vp.icon] || null,
  }));

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

      <ValuePropsSection title={t.sections.whyMe} valueProps={valuePropsData} />

      <TechStackSection title={t.sections.stack} stack={t.techStack} />

      <FooterSection quote={t.footerQuote} email={t.contact.email} />
    </div>
  );
}