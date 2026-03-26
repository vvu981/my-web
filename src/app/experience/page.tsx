'use client';

import { useMemo, useState } from 'react';
import { availableLanguages, portfolioDictionaries } from '../../i18n/portfolio';
import { experienceDictionaries } from '../../i18n/experience';
import { SiteHeader } from '../../components/header/SiteHeader';
import { useCurrentLanguage } from '../../hooks/useCurrentLanguage';
import '../page.css';
import './experience.css';

type SortOrder = 'newest' | 'oldest';

export default function ExperiencePage() {
  const { language, setLanguage } = useCurrentLanguage();
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const t = portfolioDictionaries[language];
  const exp = experienceDictionaries[language];
  const sortedItems = useMemo(() => {
    const items = [...exp.items];
    items.sort((a, b) => {
      const left = sortOrder === 'newest' ? b.endDate : a.endDate;
      const right = sortOrder === 'newest' ? a.endDate : b.endDate;
      return left.localeCompare(right);
    });
    return items;
  }, [exp.items, sortOrder]);

  return (
    <div className="dot-bg experience-page" style={{ minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: 'var(--text)' }}>
      <SiteHeader
        copy={t}
        language={language}
        availableLanguages={availableLanguages}
        onLanguageChange={setLanguage}
        activeSection="experience"
      />

      <header className="hero-header">
        <div className="shell experience-hero">
          <h1 className="experience-title fadeUp d2">{exp.page.title}</h1>
          <p className="experience-subtitle fadeUp d3">{exp.page.subtitle}</p>
          <div className="experience-top-meta fadeUp d4">
            <div className="experience-sort-control">
              <label className="experience-sort-label" htmlFor="experience-sort">
                {exp.page.sortLabel}
              </label>
              <select
                id="experience-sort"
                className="experience-sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              >
                <option value="newest">{exp.page.sortNewest}</option>
                <option value="oldest">{exp.page.sortOldest}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="shell experience-main">

        <section className="experience-list" aria-label={""}>
          {exp.items.length === 0 ? (
            <article className="experience-empty card">
              <p>{exp.page.emptyState}</p>
            </article>
          ) : (
            sortedItems.map((item) => (
              <article key={item.id} className="experience-item card">
                <div className="experience-headline">
                  <p className="experience-period">{item.period}</p>
                  <h2 className="experience-role">{item.role}</h2>
                  <p className="experience-company">{item.company}</p>
                  {item.location ? <p className="experience-location">{item.location}</p> : null}
                </div>

                <p className="experience-summary">{item.summary}</p>

                <ul className="experience-highlights">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={`${item.company}-highlight-${highlightIndex}`}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-stack">
                  {item.stack.map((tech) => (
                    <span key={`${item.company}-${tech}`} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
