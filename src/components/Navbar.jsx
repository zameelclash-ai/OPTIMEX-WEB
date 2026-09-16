import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Calendar, 
  Menu, 
  X, 
  Sparkles,
  Globe,
  MapPin,
  MessageCircle,
  Layers
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Navbar = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
  const { 
    totalItemCount, 
    setIsCartOpen, 
    wishlist, 
    setIsExamModalOpen, 
    setIsFaceGuideOpen,
    currency,
    setCurrency,
    currencies
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Eyewear' },
    { id: 'eyeglasses', label: 'Eyeglasses' },
    { id: 'sunglasses', label: 'Sunglasses' },
    { id: 'contact-lenses', label: 'Contact Lenses' }
  ];

  const handleNavClick = (catId) => {
    setActiveCategory(catId);
    setMobileMenuOpen(false);
    const element = document.getElementById('collection-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with Kerala Store Hours & Code */}
      <div className="bg-optimex-darker text-slate-300 text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 text-optimex-red font-extrabold uppercase">
              <span className="w-2 h-2 rounded-full bg-optimex-red animate-pulse" />
              UP TO 20% OFF
            </span>
            <span className="text-white/20">•</span>
            <span className="hidden md:inline text-slate-300">Code: <strong className="text-white font-mono">OPTIMEX20</strong></span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-slate-300 font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-optimex-blue" />
              Stores Open: Vadakkencherry (Closes 7pm) & Alathur (Closes 8pm)
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20want%20to%20know%20about%20your%20eyewear%20offers"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>

            {/* Currency switcher */}
            <div className="flex items-center gap-1 text-xs text-slate-300 hover:text-white cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-optimex-blue" />
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                aria-label="Select Currency"
                className="bg-transparent border-none text-xs text-slate-200 focus:ring-0 focus:outline-none cursor-pointer"
              >
                {Object.entries(currencies).map(([code, item]) => (
                  <option key={code} value={code} className="bg-neutral-900 text-white">
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => setIsExamModalOpen(true)}
              className="text-optimex-red hover:text-white flex items-center gap-1 font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <Calendar className="w-3 h-3" /> Book Clinic Exam
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className="sticky top-0 z-40 glass-nav-dark border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo with exact styling from picture */}
            <div 
              className="cursor-pointer py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <OptimexLogo size="md" glow={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#showcase-bento"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-optimex-blue" />
                <span>Tech Showcase</span>
              </a>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick(cat.id)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}

              <button
                onClick={() => setIsFaceGuideOpen(true)}
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Face Shape Advisor</span>
              </button>

              <a
                href="#store-locator"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-optimex-red hover:text-white hover:bg-optimex-red/10 rounded-xl transition-all flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Kerala Stores</span>
              </a>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search Toggle / Input */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-md w-44 sm:w-60 animate-in fade-in duration-200">
                    <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search titanium, polarized..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs text-white placeholder:text-slate-400 focus:outline-none bg-transparent"
                      autoFocus
                    />
                    <button 
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="text-slate-400 hover:text-white ml-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    title="Search frames"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Wishlist Button */}
              <a 
                href="#collection-section" 
                onClick={() => {
                  if (wishlist.length > 0) setActiveCategory('all');
                }}
                className="p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors relative"
                title="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-optimex-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </a>

              {/* Cart Drawer Trigger */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-optimex-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-glow-blue group"
                aria-label="View Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Bag</span>
                <span className="bg-white text-slate-900 font-extrabold text-[11px] px-1.5 py-0.2 rounded-full ml-0.5">
                  {totalItemCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-optimex-surface border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search styles, shapes, titanium..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-optimex-blue"
              />
            </div>

            <a
              href="#showcase-bento"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5"
            >
              Tech Showcase & Lab
            </a>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick(cat.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  activeCategory === cat.id ? 'bg-white/10 text-white font-bold' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}

            <button
              onClick={() => { setIsFaceGuideOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-white/5 flex items-center justify-between"
            >
              <span>Face Shape Advisor</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <a
              href="#store-locator"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-optimex-red hover:bg-white/5"
            >
              Kerala Stores (Vadakkencherry & Alathur)
            </a>

            <button
              onClick={() => { setIsExamModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full text-center mt-3 bg-optimex-red hover:bg-optimex-redHover text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-red"
            >
              <Calendar className="w-4 h-4" /> Book Optometrist Exam
            </button>
          </div>
        )}
      </header>
    </>
  );
};
