import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee, Stats } from './components/Intro';
import { AboutExpertise } from './components/AboutExpertise';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { LensVisualGuide } from './components/LensVisualGuide';
import { StoreLocator } from './components/StoreLocator';
import { ReviewsSection } from './components/ReviewsSection';
import { CareGuide } from './components/CareGuide';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { ScrollEffects } from './components/Reveal';
import { Icon } from './components/Icons';
import { ProductModal } from './components/ProductModal';
import { BookExamModal } from './components/BookExamModal';
import { MapChooserModal } from './components/MapChooserModal';

const Toast = () => {
  const { toastMessage } = useStore();
  if (!toastMessage) return null;
  return (
    <div className="toast" role="status">
      <i><Icon name="check" size={13} stroke={2.4} /></i>
      {toastMessage}
    </div>
  );
};

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  return (
    <>
      <ScrollEffects />
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <AboutExpertise />
        <CategoryGrid onSelectCategory={setActiveCategory} />
        <ProductCatalog activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <LensVisualGuide />
        <StoreLocator />
        <ReviewsSection />
        <CareGuide />
      </main>
      <Footer />
      <FloatingButtons />
      <ProductModal />
      <BookExamModal />
      <MapChooserModal />
      <Toast />
    </>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}
