import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Modals state
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [selectedBranchForExam, setSelectedBranchForExam] = useState('vadakkencherry');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const openMapForBranch = (branchId) => {
    const query = branchId === 'alathur' 
      ? "Optimex optical Alathur Kerala" 
      : "Optimex optical Vadakkencherry Kerala";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const openWhatsAppForBranch = (branchId, customText = '') => {
    const phone = branchId === 'alathur' ? "919447067890" : "919447012345";
    const branchName = branchId === 'alathur' ? "Alathur" : "Vadakkencherry";
    const text = customText || `Hello Optimex Optical ${branchName}, I saw your website and want to know about your eyewear collection.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <StoreContext.Provider
      value={{
        isExamModalOpen,
        setIsExamModalOpen,
        selectedBranchForExam,
        setSelectedBranchForExam,
        quickViewProduct,
        setQuickViewProduct,
        isMapModalOpen,
        setIsMapModalOpen,
        openMapForBranch,
        openWhatsAppForBranch,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

// Backwards compatibility alias
export const useCart = useStore;
export const CartProvider = StoreProvider;
