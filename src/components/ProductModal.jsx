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
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative glass-modal rounded-3xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visuals Side */}
        <div className="md:w-1/2 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-4">
            <img
              src={product.images[activeImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = "/images/optical/classic-eyeglasses.jpg";
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
                  className={`w-16 h-14 rounded-xl overflow-hidden border bg-white transition-all ${
                    activeImage === i ? 'border-red-600 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt="Angle view"
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.target.src = "/images/optical/classic-eyeglasses.jpg";
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Optical Dimensions Breakdown */}
          {product.dimensions && (
            <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                <Ruler className="w-3.5 h-3.5 text-red-600" />
                <span>Optical Frame Dimensions</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Lens Width</span>
                  <span className="font-bold text-slate-900 font-mono">{product.dimensions.lensWidth} mm</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Bridge</span>
                  <span className="font-bold text-slate-900 font-mono">{product.dimensions.bridgeWidth} mm</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="block text-slate-500 text-[10px]">Temple</span>
                  <span className="font-bold text-slate-900 font-mono">{product.dimensions.templeLength} mm</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Details Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                {product.brand}
              </span>

              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-lg font-mono font-bold text-slate-900">{product.priceText}</span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                  Includes Free Testing & Fitting
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Color Options: <span className="text-slate-900">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                        selectedColor === c.name
                          ? 'border-red-600 bg-red-50 text-slate-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
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
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Showroom Guarantees
              </div>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                {product.features?.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Showroom Actions */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
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
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Visit Showroom</span>
              </button>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  setIsExamModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
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
