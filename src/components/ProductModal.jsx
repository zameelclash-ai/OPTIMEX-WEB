import React, { useState } from 'react';
import { X, Check, Ruler, MessageCircle, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const ProductModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    setIsMapModalOpen, 
    setIsExamModalOpen 
  } = useStore();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [activeImage, setActiveImage] = useState(0);

  const handleWhatsAppInquiry = () => {
    const msg = `Hello Optimex Optical, I am interested in trying the ${product.brand} - ${product.name} (${selectedColor}) in your showroom. Could you please confirm if this is in stock?`;
    window.open(`https://wa.me/919447012345?text=${encodeURIComponent(msg)}`, '_blank');
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
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80";
              }}
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
                  <img 
                    src={img} 
                    alt="Angle view" 
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Optical Dimensions Breakdown */}
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

        {/* Product Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-optimex-red">
                {product.brand}
              </span>

              <h2 className="text-2xl font-bold text-white mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-lg font-mono font-bold text-white">{product.priceText}</span>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                  Includes Free Testing & Fitting
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Color Options: <span className="text-white">{selectedColor}</span>
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
            )}

            {/* Features */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Showroom Guarantees
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

          {/* Showroom Actions */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Availability on WhatsApp</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  setIsMapModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                <span>Visit Showroom</span>
              </button>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  setIsExamModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-glow-red"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Eye Exam</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
