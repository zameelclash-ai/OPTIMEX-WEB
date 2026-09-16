import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CURRENCIES = {
  INR: { symbol: "₹", rate: 1, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
  AED: { symbol: "AED ", rate: 0.044, label: "AED (د.إ)" },
  GBP: { symbol: "£", rate: 0.0095, label: "GBP (£)" }
};

export const CartProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('optimex_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('optimex_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [lensCustomizerProduct, setLensCustomizerProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isFaceGuideOpen, setIsFaceGuideOpen] = useState(false);
  const [selectedBranchForExam, setSelectedBranchForExam] = useState('vadakkencherry');

  // Currency: Default to INR for Kerala stores
  const [currency, setCurrency] = useState('INR');

  // Promo Code
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // e.g. 0.20 for 20%
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    try {
      localStorage.setItem('optimex_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('optimex_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Format price helper (input is base INR amount)
  const formatPrice = (amountInINR) => {
    const curr = CURRENCIES[currency] || CURRENCIES.INR;
    if (currency === 'INR') {
      return `₹${Math.round(amountInINR).toLocaleString('en-IN')}`;
    }
    const converted = (amountInINR * curr.rate).toFixed(1);
    return `${curr.symbol}${converted}`;
  };

  const addToCart = (product, options = {}) => {
    const {
      color = product.colors?.[0]?.name || "Default",
      lensPackage = null,
      prescription = null,
      quantity = 1
    } = options;

    const cartItemId = `${product.id}-${color}-${lensPackage?.id || 'standard'}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            color,
            lensPackage,
            prescription,
            quantity,
            unitPrice: product.price + (lensPackage?.price || 0)
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to your bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedDiscount(0);
    setPromoCode('');
    setPromoSuccess('');
    setPromoError('');
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved to your wishlist`);
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const applyCoupon = (code) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'OPTIMEX20') {
      setAppliedDiscount(0.20);
      setPromoSuccess('Code OPTIMEX20 applied: 20% OFF!');
      setPromoError('');
      showToast('20% Discount applied!');
    } else if (cleaned === 'KERALA15') {
      setAppliedDiscount(0.15);
      setPromoSuccess('Code KERALA15 applied: 15% OFF!');
      setPromoError('');
      showToast('15% Discount applied!');
    } else {
      setPromoError('Invalid coupon. Try OPTIMEX20 or KERALA15');
      setPromoSuccess('');
    }
  };

  // Calculations in INR
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const discountAmount = subtotal * appliedDiscount;
  const freeShippingThreshold = 1999;
  const shippingFee = subtotal === 0 ? 0 : subtotal >= freeShippingThreshold ? 0 : 99;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        isWishlisted,
        isCartOpen,
        setIsCartOpen,
        isExamModalOpen,
        setIsExamModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        lensCustomizerProduct,
        setLensCustomizerProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isFaceGuideOpen,
        setIsFaceGuideOpen,
        selectedBranchForExam,
        setSelectedBranchForExam,
        currency,
        setCurrency,
        currencies: CURRENCIES,
        formatPrice,
        promoCode,
        setPromoCode,
        applyCoupon,
        appliedDiscount,
        promoError,
        promoSuccess,
        subtotal,
        discountAmount,
        shippingFee,
        total,
        totalItemCount,
        freeShippingThreshold,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
