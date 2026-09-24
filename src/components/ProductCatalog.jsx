import React, { useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { MessageCircle, MapPin } from 'lucide-react';
import { useStore } from '../context/CartContext';

const CATEGORY_LABELS = {
  all: 'All Collections',
  eyeglasses: 'Eyeglasses',
  sunglasses: 'Sunglasses',
  'contact-lenses': 'Contact Lenses'
};

export const ProductCatalog = ({ activeCategory, setActiveCategory }) => {
  const { setIsMapModalOpen } = useStore();

  const filteredProducts = useMemo(() => {
    if (!activeCategory || activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="collection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20">
      
      {/* Section Header (ZERO White Text - Black & Red ONLY) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-red-600 font-mono block mb-1">
            FEATURED IN KERALA SHOWROOMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-900">
            Eyewear & Sunglasses Collection
          </h2>
        </div>

        {/* Active Category Badge */}
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-md">
            {CATEGORY_LABELS[activeCategory] || 'All Collections'}
          </span>

          <button
            onClick={() => setIsMapModalOpen(true)}
            className="text-xs text-slate-900 hover:text-red-600 flex items-center gap-1.5 font-bold bg-slate-100 px-3 py-2 rounded-xl border border-slate-200"
          >
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Showrooms</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-300 rounded-3xl">
          <p className="text-sm font-bold text-slate-900">No items listed online in this category yet.</p>
          <p className="text-xs text-slate-600 mt-1">Message us on WhatsApp or visit a showroom — we carry more than what's shown here.</p>
        </div>
      )}

      {/* Inquire Banner (ZERO White Text) */}
      <div className="mt-12 bg-slate-900 text-red-500 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-red-500">Looking for a specific model or power?</h4>
          <p className="text-xs text-slate-300 font-normal">
            Send us a photo of the frame or prescription slip on WhatsApp. Our opticians will check stock across both stores.
          </p>
        </div>

        <a
          href="https://wa.me/919447997327?text=Hello%20Optimex%20Optical%2C%20I%20am%20looking%20for%20a%20specific%20eyewear%20model"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

    </section>
  );
};
