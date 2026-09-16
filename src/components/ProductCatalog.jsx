import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const ProductCatalog = ({ activeCategory, setActiveCategory }) => {
  const { setIsMapModalOpen } = useStore();
  const [selectedGender, setSelectedGender] = useState('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'eyeglasses', label: 'Eyeglasses' },
    { id: 'sunglasses', label: 'Sunglasses' },
    { id: 'contact-lenses', label: 'Contact Lenses' }
  ];

  const genders = [
    { id: 'all', label: 'All' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'unisex', label: 'Unisex' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (selectedGender !== 'all' && item.gender !== selectedGender && item.gender !== 'unisex') return false;
      return true;
    });
  }, [activeCategory, selectedGender]);

  return (
    <section id="collection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red mb-1">
            FEATURED IN OUR SHOWROOMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white">
            Eyewear & Sunglasses Collection
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl font-light">
            Explore popular optical frames and branded sunglasses available at our Vadakkencherry and Alathur stores.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-optimex-blue text-white shadow-glow-blue'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gender Quick Filters */}
      <div className="flex items-center justify-between gap-4 mb-8 bg-optimex-surface p-4 rounded-2xl border border-white/10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Filter By:</span>
          {genders.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGender(g.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedGender === g.id
                  ? 'bg-white text-slate-900 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMapModalOpen(true)}
          className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 font-semibold"
        >
          <MapPin className="w-3.5 h-3.5 text-optimex-red" />
          <span>Locate Stores</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Inquire for Specific Brand Banner */}
      <div className="mt-12 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-white">Looking for a specific model or power?</h4>
          <p className="text-xs text-slate-400 font-light">
            Send us a photo of the frame or prescription slip on WhatsApp. Our opticians will check stock across both stores.
          </p>
        </div>

        <a
          href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20am%20looking%20for%20a%20specific%20eyewear%20model"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>

    </section>
  );
};
