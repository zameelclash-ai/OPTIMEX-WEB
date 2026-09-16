import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoShowcase } from './components/BentoShowcase';
import { FeatureStrip } from './components/FeatureStrip';
import { ProductCatalog } from './components/ProductCatalog';
import { CareGuide } from './components/CareGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { StoreLocator } from './components/StoreLocator';
import { Footer } from './components/Footer';

// Modals
import { ProductModal } from './components/ProductModal';
import { LensCustomizerModal } from './components/LensCustomizerModal';
import { BookExamModal } from './components/BookExamModal';
import { StyleFinder } from './components/StyleFinder';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Check } from 'lucide-react';

const ToastNotification = () => {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/90 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="w-6 h-6 rounded-full bg-optimex-blue text-white flex items-center justify-center font-bold text-xs">
        <Check className="w-3.5 h-3.5" />
      </div>
      <span className="text-xs font-semibold">{toastMessage}</span>
    </div>
  );
};

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-optimex-dark text-slate-100 selection:bg-optimex-red/20 selection:text-white">
      {/* Navigation */}
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <BentoShowcase />
        <ProductCatalog 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
        />
        <StoreLocator />
        <ReviewsSection />
        <CareGuide />
      </main>

      {/* Footer */}
      <Footer setActiveCategory={setActiveCategory} />

      {/* Interactive Overlays & Modals */}
      <ProductModal />
      <LensCustomizerModal />
      <BookExamModal />
      <StyleFinder onSelectCategory={setActiveCategory} />
      <CartDrawer />
      <CheckoutModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
