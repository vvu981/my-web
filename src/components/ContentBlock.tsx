import React from 'react';

type ContentBlockProps = {
  title?: string;
  html: string;
  className?: string;
};

export function ContentBlock({ title, html, className }: Readonly<ContentBlockProps>) {
  return (
    <div className={className}>
      {title && <h2 className="about-title">{title}</h2>}
      <div className="about-body" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default ContentBlock;
