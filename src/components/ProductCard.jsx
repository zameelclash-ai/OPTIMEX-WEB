import React from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { setQuickViewProduct } = useStore();

  const inquire = (e) => {
    e.stopPropagation();
    const msg = `Hello Optimex Optical, I saw the ${product.name} on your website. Is this model available in your Vadakkencherry or Alathur showroom?`;
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <article className="pcard group" onClick={() => setQuickViewProduct(product)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setQuickViewProduct(product)} role="button" aria-label={`View ${product.name}`}>
      <div className="pstage">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        {product.images[1] && <img className="alt" src={product.images[1]} alt="" loading="lazy" />}
        <span className="tag">{product.brand}</span>
        <span className="pcard__view">View details</span>
      </div>
      <div className="pcard__body">
        <div>
          <span className="pcard__brand">{product.brand} · {product.category.replace('-', ' ')}</span>
          <h3>{product.name}</h3>
        </div>
        <div className="pcard__row">
          <span className="avail"><i className="dot" /> Available in Showroom</span>
          <button type="button" className="pill-btn" onClick={inquire}><Icon name="chat" size={13} /> WhatsApp</button>
        </div>
      </div>
    </article>
  );
};
