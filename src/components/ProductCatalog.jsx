import React, { useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { IconWhatsApp } from './Icons';
import { waLink } from '../lib/site';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'eyeglasses', label: 'Eyeglasses' },
  { id: 'sunglasses', label: 'Sunglasses' },
  { id: 'contact-lenses', label: 'Contact lenses' },
];

export const ProductCatalog = ({ activeCategory, setActiveCategory }) => {
  const products = useMemo(
    () => (!activeCategory || activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section className="section section--alt" id="collection-section">
      <div className="wrap">
        <div className="section__head" data-reveal>
          <div>
            <span className="eyebrow">In the store now</span>
            <h2 className="h-section">A few frames <em>we like.</em></h2>
          </div>
          <p className="lead">
            This is a small selection. Both stores carry many more frames than we can show
            here — come in and try them on.
          </p>
        </div>

        <div className="filters" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeCategory === f.id}
              className={`filter${activeCategory === f.id ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="products">
            {products.map((p, i) => <ProductCard key={`${activeCategory}-${p.id}`} product={p} index={i} />)}
          </div>
        ) : (
          <p className="muted">Nothing listed online in this category yet — ask us on WhatsApp.</p>
        )}

        <div className="ask" data-reveal>
          <div>
            <h3>Looking for a particular frame or power?</h3>
            <p>Send us a photo of the frame or your prescription and we'll check stock at both stores.</p>
          </div>
          <a
            className="btn btn--wa"
            href={waLink('Hello Optimex Opticals, I am looking for a specific frame / lens.')}
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsApp size={18} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
