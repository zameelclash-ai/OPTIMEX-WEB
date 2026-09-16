import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    total,
    freeShippingThreshold,
    formatPrice,
    promoCode,
    setPromoCode,
    applyCoupon,
    appliedDiscount,
    promoError,
    promoSuccess,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    applyCoupon(inputCode);
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-optimex-surface text-white shadow-2xl flex flex-col border-l border-white/10">
          
          {/* Header */}
          <div className="p-6 bg-black/40 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-optimex-blue" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider">Your Eyewear Bag</h2>
              <span className="text-xs font-mono font-bold bg-white/10 text-white px-2 py-0.5 rounded-full">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-black/30 px-6 py-3 border-b border-white/5">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              {freeShippingRemaining > 0 ? (
                <span className="text-slate-300">
                  Add <strong className="text-white font-mono">{formatPrice(freeShippingRemaining)}</strong> for <strong className="text-emerald-400">Free Kerala Delivery</strong>
                </span>
              ) : (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Free Courier Shipping Unlocked!
                </span>
              )}
              <span className="text-slate-400 text-[11px] font-mono">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-optimex-blue to-optimex-red transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-white/5 text-slate-500 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white">Your bag is empty</h3>
                <p className="text-xs text-slate-400 max-w-xs font-light">
                  Explore our Japanese titanium frames or prescription blue-block lenses.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-full bg-optimex-blue hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartItemId} className="pt-4 first:pt-0 flex gap-4">
                  <div className="w-20 h-20 bg-black/40 rounded-xl overflow-hidden border border-white/10 shrink-0 p-1 flex items-center justify-center">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-white truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-slate-400 hover:text-rose-500 ml-2"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400">
                      Color: <span className="font-medium text-slate-200">{item.color}</span>
                    </div>

                    {item.lensPackage && (
                      <div className="text-[10px] text-optimex-blue font-semibold bg-optimex-blue/10 px-2 py-0.5 rounded inline-block border border-optimex-blue/20">
                        Lenses: {item.lensPackage.name}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-white/15 rounded-lg bg-black/40">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-bold text-xs text-white font-mono">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Checkout Section */}
          {cart.length > 0 && (
            <div className="p-6 bg-black/40 border-t border-white/10 space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Promo Code (OPTIMEX20)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-8 pr-3 py-2 text-xs text-white font-mono uppercase focus:ring-1 focus:ring-optimex-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoSuccess && <p className="text-[11px] text-emerald-400 font-semibold">{promoSuccess}</p>}
                {promoError && <p className="text-[11px] text-rose-400 font-semibold">{promoError}</p>}
              </form>

              {/* Price Calculation Summary */}
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex justify-between">
                  <span className="font-sans">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span className="font-sans">Special 20% Poster Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="font-sans">Delivery</span>
                  <span>
                    {shippingFee === 0 ? <span className="text-emerald-400 font-bold">Free</span> : formatPrice(shippingFee)}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span className="font-sans">Total Due</span>
                  <span className="text-base text-optimex-red">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encrypted Payment • In-Store Pickup Available at Alathur / Vadakkencherry</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
