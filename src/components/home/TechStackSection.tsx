type TechStackSectionProps = {
  title: string;
  stack: string[];
};

export function TechStackSection({ title, stack }: Readonly<TechStackSectionProps>) {
  return (
    <section className="shell" style={{ paddingTop: 88, paddingBottom: 88 }}>
      <p className="section-label">{title}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {stack.map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
