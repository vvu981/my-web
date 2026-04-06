import type { ReactNode } from 'react';

export type ValuePropItem = {
  tag: string;
  title: string;
  desc: string;
  iconNode: ReactNode;
};

type ValuePropsSectionProps = {
  title: string;
  valueProps: ValuePropItem[];
};

export function ValuePropsSection({ title, valueProps }: Readonly<ValuePropsSectionProps>) {
  return (
    <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '20px solid var(--border)', padding: '40px 0' }}>
      <div className="shell">
        <p className="section-label">{title}</p>
        <div className="value-grid">
          {valueProps.map((item) => (
            <div key={item.title} className="card" style={{ padding: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 13,
                    background: 'rgba(63,255,210,0.07)',
                    border: '1px solid rgba(63,255,210,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    color: 'var(--accent)',
                  }}
                >
                  {item.iconNode}
                </div>
                <span className="tag">{item.tag}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19, marginTop: 14, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, letterSpacing: '0.01em' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
