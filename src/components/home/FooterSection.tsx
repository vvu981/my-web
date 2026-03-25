type FooterSectionProps = {
  quote: string;
  email: string;
};

export function FooterSection({ quote, email }: Readonly<FooterSectionProps>) {
  return (
    <footer id="contacto" className="shell site-footer">
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', fontStyle: 'italic' }}>{quote}</p>
      <div className="footer-contact">
        <div className="footer-contact-item">✉ {email}</div>
      </div>
    </footer>
  );
}
