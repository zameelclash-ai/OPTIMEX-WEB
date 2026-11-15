import React from 'react';
import { useStore } from '../context/CartContext';

export const ProductCard = ({ product, index = 0 }) => {
  const { setQuickViewProduct } = useStore();

  return (
    <button className="card" onClick={() => setQuickViewProduct(product)} data-reveal style={{ '--i': index % 4 }}>
      <div className="card__img">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
      </div>
      <div className="card__brand">{product.brand}</div>
      <div className="card__name">{product.name}</div>
      {product.priceText && <div className="card__price">{product.priceText}</div>}
    </button>
  );
};
