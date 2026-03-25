"use client";

import Link from 'next/link';
import Image from 'next/image';
import faviconCircle from '../app/favicon_circle.ico';
// using favicon image instead of SVG icon
import type { Language, PortfolioDictionary } from '../i18n/portfolio';

type HeaderCopy = Pick<
  PortfolioDictionary,
  'brandName' | 'nav' | 'contact' | 'languageSwitcherLabel' | 'languages'
>;

type SiteHeaderProps = {
  copy: HeaderCopy;
  language: Language;
  availableLanguages: Language[];
  onLanguageChange: (language: Language) => void;
  activeSection: 'home' | 'experience' | 'about';
};

export function SiteHeader({
  copy,
  language,
  availableLanguages,
  onLanguageChange,
  activeSection,
}: Readonly<SiteHeaderProps>) {
  const handleLanguageChange = (langOption: Language) => {
    onLanguageChange(langOption);
  };

  const aboutHref = '/about-me';

  return (
    <nav className="shell top-nav">
      <Link href="/" className="brand-link">
        <Image
          src={faviconCircle}
          alt="home"
          className="brand-icon"
          width={35}
          height={35}
          priority
        />
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: '-.5px' }}>
          {copy.brandName}
        </span>
      </Link>
      <div className="nav-links">
        
        <a href={aboutHref} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>{copy.nav.aboutMe}</a>
        <Link href="/experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>{copy.nav.experience}</Link>

        <details className="contact-menu">
          <summary className="nav-link contact-trigger">{copy.nav.contact}</summary>
          <div className="contact-dropdown">
            <div className="contact-item">
              <span className="contact-label">{copy.nav.emailLabel}</span>
              <span className="contact-value">{copy.contact.email}</span>
            </div>
          </div>
        </details>

        <div className="lang-switcher" aria-label={copy.languageSwitcherLabel}>
          {availableLanguages.map((langOption) => (
            <button
              key={langOption}
              type="button"
              className={`lang-btn ${language === langOption ? 'active' : ''}`}
              onClick={() => handleLanguageChange(langOption)}
              aria-pressed={language === langOption}
              aria-label={copy.languages[langOption]}
            >
              {langOption.toUpperCase()}
            </button>
          ))}
        </div>

        
      </div>
    </nav>
  );
}