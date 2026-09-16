import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { 
    formatPrice, 
    toggleWishlist, 
    isWishlisted, 
    setQuickViewProduct, 
    setLensCustomizerProduct,
    addToCart 
  } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isFavorited = isWishlisted(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (product.category === 'contact-lenses') {
      addToCart(product, { color: selectedColor, quantity: 1 });
    } else {
      setLensCustomizerProduct(product);
    }
  };

  return (
    <div 
      className="group relative bg-optimex-surface rounded-2xl border border-white/10 hover:border-optimex-blue/50 hover:shadow-liquid transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Top Badges & Wishlist */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 items-start">
          {product.isBestseller && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-optimex-red text-white shadow-sm">
              Popular in Kerala
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-optimex-blue text-white shadow-sm">
              New In
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`p-2 rounded-full pointer-events-auto transition-all ${
            isFavorited 
              ? 'bg-rose-500/20 text-rose-500 border border-rose-500/40' 
              : 'bg-black/60 text-slate-400 hover:text-rose-400 hover:bg-black/80 border border-white/10'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-rose-500' : ''}`} />
        </button>
      </div>

      {/* Product Image Area */}
      <div 
        className="relative aspect-[4/3] bg-black/40 overflow-hidden cursor-pointer flex items-center justify-center p-6 border-b border-white/5"
        onClick={() => setQuickViewProduct(product)}
        onMouseEnter={() => {
          if (product.images.length > 1) setCurrentImageIndex(1);
        }}
        onMouseLeave={() => {
          setCurrentImageIndex(0);
        }}
      >
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold tracking-wide shadow-lg hover:bg-slate-200 flex items-center gap-1.5 transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5 text-optimex-blue" />
            <span>Specifications</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Brand & Shape */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-1">
            <span className="text-optimex-blue font-bold">{product.brand}</span>
            <span className="capitalize">{product.shape} • {product.material}</span>
          </div>

          {/* Product Name */}
          <h3 
            className="font-sans text-base font-bold text-white group-hover:text-optimex-red transition-colors line-clamp-1 cursor-pointer"
            onClick={() => setQuickViewProduct(product)}
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-3">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedColor(c.name)}
                  title={c.name}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColor === c.name 
                      ? 'ring-2 ring-optimex-blue scale-110 border-white' 
                      : 'border-white/20 hover:scale-105 opacity-80'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              <span className="text-[10px] text-slate-400 ml-1.5">{selectedColor}</span>
            </div>
          )}
        </div>

        {/* Pricing & Action */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="font-bold text-base text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="text-[10px] text-emerald-400 font-medium">
              Free Lenses Included
            </div>
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-optimex-red text-white text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{product.category === 'contact-lenses' ? 'Add' : 'Lenses'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
