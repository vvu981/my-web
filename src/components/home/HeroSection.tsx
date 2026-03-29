import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { PortfolioDictionary } from '../../i18n/portfolio';
import { ArchDiagram } from './ArchDiagram';

type HeroSectionProps = {
  hero: PortfolioDictionary['hero'];
  diagram: PortfolioDictionary['diagram'];
  links: {
    contact: string;
    github: string;
    linkedin: string;
  };
  onContactClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function HeroSection({ hero, diagram, links, onContactClick }: Readonly<HeroSectionProps>) {
  return (
    <header className="hero-header">
      <div className="shell hero-grid">
        <div>
          <p className="section-label fadeUp d1">{hero.role}</p>

          <h1
            className="fadeUp d2"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4.1vw, 52px)',
              lineHeight: 1.16,
              letterSpacing: '-0.8px',
              marginBottom: 24,
            }}
          >
            {hero.headingParts.map((part) =>
              part.highlight ? (
                <span key={`heading-${part.highlight}`} className="grad">
                  {part.highlight}
                </span>
              ) : (
                <span key={`heading-${part.text}`}>{part.text}</span>
              ),
            )}
          </h1>

          <p
            className="fadeUp d3"
            style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: 36, maxWidth: '68ch' }}
          >
            {hero.description}
          </p>

          <div className="fadeUp d4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href={links.contact} className="btn-primary">
              {hero.cta}
            </Link>
            <a href={links.github} className="btn-ghost">
              <FaGithub size={17} /> {hero.github}
            </a>
            <a href={links.linkedin} className="btn-ghost">
              <FaLinkedin size={17} /> {hero.linkedin}
            </a>
          </div>
        </div>

        <div className="fadeUp d5 float hero-diagram">
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ marginLeft: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', opacity: 0.5 }}>
              {diagram.windowTitle}
            </span>
          </div>
          <ArchDiagram copy={diagram} />
        </div>
      </div>
    </header>
  );
}
