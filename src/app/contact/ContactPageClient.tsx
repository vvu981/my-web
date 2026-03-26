"use client";

import { SiteHeader } from '../../components/header/SiteHeader';
import { ContactForm } from '../../components/contact/ContactForm';
import { useCurrentLanguage } from '../../hooks/useCurrentLanguage';
import { availableLanguages, portfolioDictionaries } from '../../i18n/portfolio';
import { contactDictionaries } from '../../i18n/contact';

export default function ContactPageClient() {
  const { language, setLanguage } = useCurrentLanguage();
  const t = portfolioDictionaries[language];
  const contactCopy = contactDictionaries[language];

  return (
    <div className="dot-bg contact-page">
      <SiteHeader
        copy={t}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={setLanguage}
        activeSection="contact"
      />

      <header className="hero-header">
        <div className="shell contact-hero-shell">
          <h1 className="experience-title fadeUp d2">{contactCopy.page.title}</h1>
          <p className="experience-subtitle fadeUp d3">{contactCopy.page.subtitle}</p>
        </div>
      </header>

      <main className="contact-main">
        <ContactForm copy={contactCopy.form} />
      </main>
    </div>
  );
}
