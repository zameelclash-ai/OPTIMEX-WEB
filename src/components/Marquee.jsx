import React from 'react';

const ITEMS = [
  'Ray-Ban', 'Computerised eye test', 'Vogue', 'Progressive lenses', 'Fastrack',
  'Blue-cut', 'Oakley', 'Photochromic', 'Bausch + Lomb', 'Kids frames',
];

export const Marquee = () => (
  <div className="marquee" aria-label="Brands and services">
    <div className="marquee__track">
      {[0, 1].map((copy) => (
        <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
          {ITEMS.map((t) => (
            <span key={t}>{t}<i aria-hidden="true" /></span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
