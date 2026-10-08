import React, { useState } from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';
import { useScrollLock, useEscape } from './Reveal';

const Inner = ({ product, onClose }) => {
  const { setIsMapModalOpen, setIsExamModalOpen } = useStore();
  const [color, setColor] = useState(product.colors?.[0]?.name || '');
  const [img, setImg] = useState(0);

  const ask = () => {
    const msg = `Hello Optimex Optical, I am interested in trying the ${product.brand} - ${product.name} (${color}) in your showroom. Could you please confirm if this is in stock?`;
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal__panel pm" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><Icon name="x" size={18} /></button>

        <div className="pm__vis">
          <div className="pstage" style={{ borderRadius: 20 }}>
            <img key={img} src={product.images[img] || product.images[0]} alt={product.name} style={{ transform: 'scale(1.22)' }} />
          </div>
          {product.images.length > 1 && (
            <div className="thumbs">
              {product.images.map((src, i) => (
                <button key={src} className={img === i ? 'is-on' : ''} onClick={() => setImg(i)} aria-label={`View ${i + 1}`}><img src={src} alt="" /></button>
              ))}
            </div>
          )}
          {product.dimensions && (
            <div className="dims">
              <h6><Icon name="ruler" size={14} /> Optical frame dimensions</h6>
              <div><small>Lens width</small><b className="mono">{product.dimensions.lensWidth} mm</b></div>
              <div><small>Bridge</small><b className="mono">{product.dimensions.bridgeWidth} mm</b></div>
              <div><small>Temple</small><b className="mono">{product.dimensions.templeLength} mm</b></div>
            </div>
          )}
        </div>

        <div className="pm__info">
          <div style={{ display: 'grid', gap: 24 }}>
            <div>
              <span className="eyebrow">{product.brand}</span>
              <h2>{product.name}</h2>
              <div className="price">
                <b className="mono">{product.priceText}</b>
                <span className="chip">Includes Free Testing &amp; Fitting</span>
              </div>
            </div>
            <p style={{ color: 'var(--ink-2)', fontWeight: 300, lineHeight: 1.8 }}>{product.description}</p>

            {product.colors?.length > 0 && (
              <div>
                <span className="label">Color options · <b>{color}</b></span>
                <div className="swatches">
                  {product.colors.map((c) => (
                    <button key={c.name} className={`swatch ${color === c.name ? 'is-on' : ''}`} onClick={() => setColor(c.name)}>
                      <i style={{ background: c.hex }} /> {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <span className="label">Showroom guarantees</span>
              <ul className="checks">
                {product.features?.map((f) => (
                  <li key={f}><Icon name="check" size={16} /> {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pm__actions">
            <button className="btn btn--wa btn--block" onClick={ask}><Icon name="chat" size={16} /> Ask Availability on WhatsApp</button>
            <div className="row">
              <button className="btn btn--ghost" onClick={() => { onClose(); setIsMapModalOpen(true); }}><Icon name="pin" size={15} /> Visit Showroom</button>
              <button className="btn btn--ink" onClick={() => { onClose(); setIsExamModalOpen(true); }}><Icon name="calendar" size={15} /> Book Eye Exam</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductModal = () => {
  const { quickViewProduct, setQuickViewProduct } = useStore();
  const close = () => setQuickViewProduct(null);
  useScrollLock(!!quickViewProduct);
  useEscape(!!quickViewProduct, close);
  if (!quickViewProduct) return null;
  return <Inner key={quickViewProduct.id} product={quickViewProduct} onClose={close} />;
};
