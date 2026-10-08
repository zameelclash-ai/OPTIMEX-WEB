import React, { useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { useStore } from '../context/CartContext';

const TABS = [
  { id: 'all', label: 'All Collections' },
  { id: 'eyeglasses', label: 'Eyeglasses' },
  { id: 'sunglasses', label: 'Sunglasses' },
  { id: 'contact-lenses', label: 'Contact Lenses' },
];

export const ProductCatalog = ({ activeCategory, setActiveCategory }) => {
  const { setIsMapModalOpen } = useStore();
  const items = useMemo(
    () => (!activeCategory || activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  return (
    <section id="collection-section" className="section">
      <div className="wrap">
        <div className="section__head section__head--split">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Featured in Kerala showrooms</p>
            <h2 className="h2">Eyewear &amp; Sunglasses<br /><em>Collection</em></h2>
          </Reveal>
        </div>

        <div className="catalog__bar">
          <div className="tabs" role="tablist">
            {TABS.map((t) => (
              <button key={t.id} role="tab" aria-selected={activeCategory === t.id} className={`tab ${activeCategory === t.id ? 'is-on' : ''}`} onClick={() => setActiveCategory(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <span className="catalog__count">{items.length} {items.length === 1 ? 'piece' : 'pieces'}</span>
            <button className="link-arrow" onClick={() => setIsMapModalOpen(true)}><Icon name="pin" size={15} /> Showrooms <Icon name="arrow-up-right" size={15} /></button>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid4" key={activeCategory}>
            {items.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 90}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        ) : (
          <div className="empty">
            <b>No items listed online in this category yet.</b>
            Message us on WhatsApp or visit a showroom — we carry more than what's shown here.
          </div>
        )}

        <Reveal className="askband">
          <div>
            <h4>Looking for a specific model or power?</h4>
            <p>Send us a photo of the frame or prescription slip on WhatsApp. Our opticians will check stock across both stores.</p>
          </div>
          <a className="btn btn--light" href="https://wa.me/919447997327?text=Hello%20Optimex%20Optical%2C%20I%20am%20looking%20for%20a%20specific%20eyewear%20model" target="_blank" rel="noreferrer">
            <Icon name="chat" size={16} /> Ask on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
};
