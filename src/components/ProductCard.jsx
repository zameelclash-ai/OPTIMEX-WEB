import React, { useState } from 'react';
import { Eye, MessageCircle, MapPin } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { setQuickViewProduct, openWhatsAppForBranch } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleWhatsAppInquire = (e) => {
    e.stopPropagation();
    const msg = `Hello Optimex Optical, I saw the ${product.brand} - ${product.name} on your website. Is this model available in your Vadakkencherry or Alathur showroom?`;
    window.open(`https://wa.me/919447012345?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div 
      className="group relative bg-optimex-surface rounded-2xl border border-white/10 hover:border-optimex-blue/50 hover:shadow-liquid transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Brand & Stock Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md border border-white/10">
          {product.brand}
        </span>

        {product.isBestseller && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-optimex-red text-white">
            Popular in Kerala
          </span>
        )}
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
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Hover View Trigger */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold tracking-wide shadow-lg hover:bg-slate-200 flex items-center gap-1.5 transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5 text-optimex-blue" />
            <span>View Specifications</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-1">
            <span className="text-optimex-blue font-bold">{product.category.replace('-', ' ')}</span>
            <span className="capitalize">{product.shape} • {product.material}</span>
          </div>

          <h3 
            className="font-sans text-base font-bold text-white group-hover:text-optimex-red transition-colors line-clamp-1 cursor-pointer"
            onClick={() => setQuickViewProduct(product)}
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
            <MapPin className="w-3 h-3 shrink-0" />
            <span>Available at Alathur & Vadakkencherry</span>
          </div>
        </div>

        {/* Price & Showroom Actions */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-light">Starting from</span>
            <span className="font-bold text-sm text-white font-mono">{product.priceText}</span>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppInquire}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            title="Ask availability on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
