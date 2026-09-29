import React, { useState } from 'react';
import {
  Calendar,
  Menu,
  X,
  MapPin,
  Layers
} from 'lucide-react';
import { useStore } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Navbar = ({ activeCategory, setActiveCategory }) => {
  const { 
    setIsExamModalOpen, 
    setIsMapModalOpen,
    setIsImageEditModalOpen 
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Collections' },
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
      {/* Header - Pure Black & Red Text ONLY - NO White Text */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div 
              className="cursor-pointer py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <OptimexLogo size="md" glow={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick(cat.id)}
                  className={`px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'text-red-600 bg-red-50 font-black'
                      : 'text-slate-900 hover:text-red-600 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}

              <a
                href="#lens-guide"
                className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-red-600 hover:bg-slate-100 rounded-xl transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <Layers className="w-3 h-3 text-slate-900" />
                <span>Lens Guide</span>
              </a>

              <a
                href="#store-locator"
                className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-red-600 hover:bg-slate-100 rounded-xl transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <MapPin className="w-3 h-3 text-red-600" />
                <span>Showrooms</span>
              </a>
            </nav>

            {/* Right CTAs (NO White Text - Compact & Single-line) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="flex items-center gap-1 bg-white hover:bg-slate-100 text-slate-900 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-slate-300 shadow-sm transition-all whitespace-nowrap"
              >
                <MapPin className="w-3 h-3 text-red-600 shrink-0" />
                <span className="whitespace-nowrap">Visit Now</span>
              </button>

              <button 
                onClick={() => setIsExamModalOpen(true)}
                className="flex items-center gap-1.5 bg-red-600 text-white hover:bg-red-700 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-md transition-all whitespace-nowrap"
              >
                <Calendar className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">Book Exam</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick(cat.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                  activeCategory === cat.id ? 'bg-red-50 text-red-600 font-black' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}

            <a
              href="#lens-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-900 hover:bg-slate-100"
            >
              Optical Lens Guide
            </a>

            <a
              href="#store-locator"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-red-600 hover:bg-slate-100"
            >
              Kerala Showrooms (Vadakkencherry & Alathur)
            </a>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => { setIsMapModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-3 bg-slate-100 rounded-xl text-slate-900 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-300"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Visit Now (Maps)</span>
              </button>

              <button
                onClick={() => { setIsExamModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-3 bg-red-600 rounded-xl text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Exam</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
