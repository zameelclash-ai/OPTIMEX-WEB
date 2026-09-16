import React, { useState } from 'react';
import { X, Check, Heart, Ruler, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    setLensCustomizerProduct, 
    addToCart, 
    toggleWishlist, 
    isWishlisted, 
    formatPrice 
  } = useCart();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [activeImage, setActiveImage] = useState(0);

  const favorited = isWishlisted(product.id);

  const handleProceedToLenses = () => {
    setQuickViewProduct(null);
    setLensCustomizerProduct(product);
  };

  const handleDirectAdd = () => {
    addToCart(product, { color: selectedColor, quantity: 1 });
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visuals Side */}
        <div className="md:w-1/2 bg-black/40 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center p-4">
            <img
              src={product.images[activeImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 justify-center">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-14 rounded-xl overflow-hidden border bg-black/40 transition-all ${
                    activeImage === i ? 'border-optimex-blue shadow-glow-blue' : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Angle view" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}

          {/* Dimensions Breakdown */}
          {product.dimensions && (
            <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <Ruler className="w-3.5 h-3.5 text-optimex-blue" />
                <span>Optical Frame Dimensions</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                  <span className="block text-slate-500 text-[10px]">Lens Width</span>
                  <span className="font-bold text-white font-mono">{product.dimensions.lensWidth} mm</span>
                </div>
                <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                  <span className="block text-slate-500 text-[10px]">Bridge</span>
                  <span className="font-bold text-white font-mono">{product.dimensions.bridgeWidth} mm</span>
                </div>
                <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                  <span className="block text-slate-500 text-[10px]">Temple</span>
                  <span className="font-bold text-white font-mono">{product.dimensions.templeLength} mm</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-optimex-red">
                  {product.brand}
                </span>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="text-xs flex items-center gap-1 text-slate-400 hover:text-rose-400 font-medium"
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{favorited ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2 font-mono">
                <span className="text-2xl font-bold text-white">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">{formatPrice(product.originalPrice)}</span>
                )}
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full ml-1">
                  Free Anti-Glare Lenses Included
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Color Finish: <span className="text-white">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      selectedColor === c.name 
                        ? 'border-optimex-blue bg-optimex-blue/20 text-white font-bold' 
                        : 'border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0" 
                      style={{ backgroundColor: c.hex }} 
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Optical Craftsmanship Highlights
              </div>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {product.features?.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-optimex-blue shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            {product.category === 'contact-lenses' ? (
              <button
                onClick={handleDirectAdd}
                className="w-full py-3.5 rounded-xl bg-optimex-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue transition-all flex items-center justify-center gap-2"
              >
                <span>Add Box to Bag</span>
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleProceedToLenses}
                  className="w-full py-3.5 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Lenses & Prescription</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDirectAdd}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                >
                  Buy Frame Only (With Non-Prescription Demo Lenses)
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
