import React, { useState } from 'react';
import { 
  Calendar, 
  Menu, 
  X, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Layers, 
  Glasses, 
  ExternalLink 
} from 'lucide-react';
import { useStore } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Navbar = ({ activeCategory, setActiveCategory }) => {
  const { 
    setIsExamModalOpen, 
    setIsMapModalOpen 
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
      {/* Top Banner with Instagram Offer & Store Hours */}
      <div className="bg-optimex-darker text-slate-300 text-xs py-2 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 text-optimex-red font-extrabold uppercase">
              <span className="w-2 h-2 rounded-full bg-optimex-red animate-pulse" />
              UP TO 20% OFF
            </span>
            <span className="text-white/20">•</span>
            <span className="text-slate-300">Follow on Instagram & Visit Shop</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              Vadakkencherry (Closes 7pm) & Alathur (Closes 8pm)
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-bold text-xs transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow Us</span>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20saw%20your%20website%20and%20want%20to%20inquire%20about%20spectacles"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book Exam CTA */}
            <button 
              onClick={() => setIsExamModalOpen(true)}
              className="text-white hover:text-optimex-red flex items-center gap-1 font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <Calendar className="w-3 h-3 text-optimex-red" />
              <span>Book Exam</span>
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

            {/* Brand Logo */}
            <div 
              className="cursor-pointer py-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <OptimexLogo size="md" glow={true} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#lens-guide"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-optimex-blue" />
                <span>Lens Guide</span>
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

              <a
                href="#store-locator"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                <span>Kerala Showrooms</span>
              </a>

              <a
                href="#google-reviews"
                className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                Google Reviews
              </a>
            </nav>

            {/* Right CTAs (VISIT NOW + Book Eye Exam) */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/15 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                <span>Visit Now</span>
              </button>

              <button 
                onClick={() => setIsExamModalOpen(true)}
                className="flex items-center gap-2 bg-optimex-red hover:bg-optimex-redHover text-white px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-glow-red transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Eye Exam</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-optimex-surface border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <a
              href="#lens-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5"
            >
              Optical Lens Guide
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

            <a
              href="#store-locator"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-optimex-red hover:bg-white/5"
            >
              Kerala Showrooms (Vadakkencherry & Alathur)
            </a>

            <a
              href="#google-reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-white/5"
            >
              Google Reviews & Ratings
            </a>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => { setIsMapModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-3 bg-white/10 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                <span>Visit Now (Maps)</span>
              </button>

              <button
                onClick={() => { setIsExamModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-3 bg-optimex-red rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-glow-red"
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
