import React, { useEffect, useState } from 'react';
import { useStore } from '../context/CartContext';
import { IconClose, IconCheck, IconWhatsApp } from './Icons';
import { waLink } from '../lib/site';

export const ProductModal = () => {
  const { quickViewProduct: product, setQuickViewProduct, setIsExamModalOpen } = useStore();
  const [color, setColor] = useState('');
  const [img, setImg] = useState(0);

  useEffect(() => {
    if (product) {
      setColor(product.colors?.[0]?.name || '');
      setImg(0);
    }
  }, [product]);

  if (!product) return null;

  const close = () => setQuickViewProduct(null);
  const msg = `Hello Optimex Opticals, is the ${product.brand} ${product.name}${color ? ` (${color})` : ''} available in store?`;

  return (
    <div className="modal" onClick={close} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal__box modal__box--wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={close} aria-label="Close"><IconClose size={18} /></button>
        <div className="pm">
          <div>
            <div className="pm__img"><img src={product.images[img]} alt={product.name} /></div>
            {product.images.length > 1 && (
              <div className="pm__thumbs">
                {product.images.map((src, i) => (
                  <button key={src + i} className={i === img ? 'is-active' : ''} onClick={() => setImg(i)} aria-label={`Photo ${i + 1}`}>
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pm__info">
            <div>
              <span className="eyebrow">{product.brand}</span>
              <h3>{product.name}</h3>
              {product.priceText && <p style={{ marginTop: 6, fontWeight: 600 }}>{product.priceText}</p>}
            </div>
            <p>{product.description}</p>

            {product.colors?.length > 0 && (
              <div className="pm__colors">
                {product.colors.map((c) => (
                  <button key={c.name} className={color === c.name ? 'is-active' : ''} onClick={() => setColor(c.name)}>
                    <i style={{ background: c.hex }} /> {c.name}
                  </button>
                ))}
              </div>
            )}

            {product.features?.length > 0 && (
              <ul className="pm__feat">
                {product.features.map((f) => <li key={f}><IconCheck size={15} /> {f}</li>)}
              </ul>
            )}

            <div className="pm__actions">
              <a className="btn btn--wa" href={waLink(msg)} target="_blank" rel="noreferrer">
                <IconWhatsApp size={18} /> Check availability
              </a>
              <button className="btn btn--line" onClick={() => { close(); setIsExamModalOpen(true); }}>
                Book eye test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
