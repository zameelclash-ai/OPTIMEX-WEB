import React, { useEffect, useState } from 'react';
import { initMotion } from './lib/motion';
import { Marquee } from './components/Marquee';
import { StoreProvider, useStore } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProductCatalog } from './components/ProductCatalog';
import { LensVisualGuide } from './components/LensVisualGuide';
import { VisitSteps } from './components/VisitSteps';
import { StoreLocator } from './components/StoreLocator';
import { CareGuide } from './components/CareGuide';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { ProductModal } from './components/ProductModal';
import { BookExamModal } from './components/BookExamModal';
import { MapChooserModal } from './components/MapChooserModal';

const Toast = () => {
  const { toastMessage } = useStore();
  return toastMessage ? <div className="toast" role="status">{toastMessage}</div> : null;
};

const Page = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => initMotion(), []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <Navbar setActiveCategory={setActiveCategory} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services setActiveCategory={setActiveCategory} />
        <ProductCatalog activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <LensVisualGuide />
        <VisitSteps />
        <StoreLocator />
        <CareGuide />
      </main>
      <Footer setActiveCategory={setActiveCategory} />
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
      <Page />
    </StoreProvider>
  );
}
