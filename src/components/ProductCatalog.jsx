import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, X, Check, Sparkles } from 'lucide-react';

export const ProductCatalog = ({ activeCategory, setActiveCategory, searchQuery }) => {
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedShape, setSelectedShape] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedFrameType, setSelectedFrameType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const categories = [
    { id: 'all', label: 'All Eyewear' },
    { id: 'eyeglasses', label: 'Optical Frames' },
    { id: 'sunglasses', label: 'Sunwear & Polarized' },
    { id: 'contact-lenses', label: 'Contact Lenses' }
  ];

  const shapes = ['round', 'rectangle', 'cat-eye', 'aviator', 'square', 'geometric'];
  const materials = ['titanium', 'acetate', 'metal', 'hydrogel'];
  const genders = [
    { id: 'all', label: 'All' },
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'unisex', label: 'Unisex' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) return false;
      if (selectedGender !== 'all' && item.gender !== selectedGender && item.gender !== 'unisex') return false;
      if (selectedShape !== 'all' && item.shape !== selectedShape) return false;
      if (selectedMaterial !== 'all' && item.material !== selectedMaterial) return false;
      if (selectedFrameType !== 'all' && item.frameType !== selectedFrameType) return false;
      
      if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesShape = item.shape.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesShape) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [activeCategory, selectedGender, selectedShape, selectedMaterial, selectedFrameType, searchQuery, sortBy]);

  const activeFiltersCount = 
    (selectedGender !== 'all' ? 1 : 0) +
    (selectedShape !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0) +
    (selectedFrameType !== 'all' ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedGender('all');
    setSelectedShape('all');
    setSelectedMaterial('all');
    setSelectedFrameType('all');
    setSortBy('featured');
  };

  return (
    <section id="collection-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-optimex-red mb-1">
            Handcrafted Optical Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white">
            Curated Eyewear Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Japanese titanium, Italian bio-acetate, and polarized optics. Free high-definition prescription lenses included with every optical frame.
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

      {/* Control Bar: Quick filters & sorting */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-optimex-surface p-4 rounded-2xl border border-white/10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">Gender:</span>
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFiltersMobile(!showFiltersMobile)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2 bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-optimex-blue" />
            <span>Filters ({activeFiltersCount})</span>
          </button>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort collection"
              className="bg-black/60 border border-white/10 text-xs text-slate-200 rounded-xl px-3 py-2 font-medium focus:ring-1 focus:ring-optimex-blue cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Grid & Filters Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className={`lg:col-span-3 space-y-6 ${showFiltersMobile ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-optimex-surface p-5 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white">
                <SlidersHorizontal className="w-3.5 h-3.5 text-optimex-blue" />
                <span>Refine Specs</span>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-optimex-red hover:underline font-bold"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Shape */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Frame Silhouette
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedShape('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs capitalize flex items-center justify-between ${
                    selectedShape === 'all' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <span>All Silhouettes</span>
                  {selectedShape === 'all' && <Check className="w-3.5 h-3.5 text-optimex-blue" />}
                </button>
                {shapes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedShape(s)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs capitalize flex items-center justify-between ${
                      selectedShape === s ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    <span>{s}</span>
                    {selectedShape === s && <Check className="w-3.5 h-3.5 text-optimex-blue" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Frame Material
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedMaterial('all')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs capitalize flex items-center justify-between ${
                    selectedMaterial === 'all' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <span>All Materials</span>
                  {selectedMaterial === 'all' && <Check className="w-3.5 h-3.5 text-optimex-blue" />}
                </button>
                {materials.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMaterial(m)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs capitalize flex items-center justify-between ${
                      selectedMaterial === m ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    <span>{m === 'titanium' ? 'Beta Titanium' : m}</span>
                    {selectedMaterial === m && <Check className="w-3.5 h-3.5 text-optimex-blue" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Clinic Promise Badge */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
              <Sparkles className="w-4 h-4 text-optimex-red mx-auto mb-1.5" />
              <div className="text-xs font-bold text-white">Free Single Vision Lenses</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                Every frame purchased at our Vadakkencherry or Alathur store comes with complimentary anti-glare lenses.
              </p>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="lg:col-span-9">
          
          {/* Active Filter Tags */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs text-slate-400">Active filters:</span>
              {selectedGender !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 text-xs px-2.5 py-1 rounded-full text-white font-medium capitalize">
                  {selectedGender}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedGender('all')} />
                </span>
              )}
              {selectedShape !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 text-xs px-2.5 py-1 rounded-full text-white font-medium capitalize">
                  {selectedShape}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedShape('all')} />
                </span>
              )}
              {selectedMaterial !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 text-xs px-2.5 py-1 rounded-full text-white font-medium capitalize">
                  {selectedMaterial}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedMaterial('all')} />
                </span>
              )}
            </div>
          )}

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-optimex-surface rounded-2xl border border-white/10 p-12 text-center space-y-4">
              <h3 className="font-bold text-lg text-white">
                No frames match these criteria
              </h3>
              <p className="text-xs text-slate-400">
                Try resetting your filters to view all styles in stock.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-5 py-2.5 rounded-xl bg-optimex-red text-white text-xs font-bold shadow-glow-red"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
