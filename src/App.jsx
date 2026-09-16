import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExpertise } from './components/AboutExpertise';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { LensVisualGuide } from './components/LensVisualGuide';
import { StoreLocator } from './components/StoreLocator';
import { ReviewsSection } from './components/ReviewsSection';
import { CareGuide } from './components/CareGuide';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Modals
import { ProductModal } from './components/ProductModal';
import { BookExamModal } from './components/BookExamModal';
import { MapChooserModal } from './components/MapChooserModal';
import { Check } from 'lucide-react';

const ToastNotification = () => {
  const { toastMessage } = useStore();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-black/90 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="w-6 h-6 rounded-full bg-optimex-blue text-white flex items-center justify-center font-bold text-xs">
        <Check className="w-3.5 h-3.5" />
      </div>
      <span className="text-xs font-semibold">{toastMessage}</span>
    </div>
  );
};

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen flex flex-col bg-optimex-dark text-slate-100 selection:bg-optimex-red/20 selection:text-white">
      {/* Navigation */}
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Main Sections - Arranged matching Allen & Habour structure */}
      <main className="flex-1">
        <Hero />
        <AboutExpertise />
        <CategoryGrid onSelectCategory={setActiveCategory} />
        <ProductCatalog 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <LensVisualGuide />
        <StoreLocator />
        <ReviewsSection />
        <CareGuide />
      </main>

      {/* Footer */}
      <Footer setActiveCategory={setActiveCategory} />

      {/* Floating Action Buttons (WhatsApp & Phone Call) */}
      <FloatingButtons />

      {/* Modals */}
      <ProductModal />
      <BookExamModal />
      <MapChooserModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}
