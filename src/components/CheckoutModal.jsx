import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Lock, Printer, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    total,
    formatPrice,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Palakkad',
    postalCode: '678683',
    state: 'Kerala',
    pickupStore: 'vadakkencherry', // 'vadakkencherry' or 'alathur' or 'home-delivery'
    paymentMethod: 'upi', // 'upi', 'card', 'cod'
  });

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderId = `OPT-KL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(orderId);
    setOrderCompleted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseAndReset = () => {
    clearCart();
    setOrderCompleted(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface text-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black/60 p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-optimex-blue" />
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
              Optimex Secure Checkout
            </h2>
          </div>
          <button
            onClick={orderCompleted ? handleCloseAndReset : () => setIsCheckoutOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderCompleted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                Order Received
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Thank You, {formData.fullName || 'Valued Customer'}!
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto font-light">
                Your order has been routed to our Kerala optical lab. A confirmation has been initiated for <span className="font-semibold text-white">{formData.phone}</span>.
              </p>
            </div>

            <div className="bg-black/40 rounded-2xl p-5 border border-white/10 text-left space-y-2.5 text-xs">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Order Reference</span>
                <span className="font-mono font-bold text-optimex-red">{orderNumber}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Total Amount</span>
                <span className="font-mono font-bold text-white">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fulfillment Method</span>
                <span className="font-bold text-optimex-blue capitalize">
                  {formData.pickupStore === 'vadakkencherry' ? 'Store Pickup: Vadakkencherry' :
                   formData.pickupStore === 'alathur' ? 'Store Pickup: Alathur' :
                   `Home Delivery to ${formData.city}`}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/919447012345?text=Hi%2C%20I%20placed%20order%20${orderNumber}%20for%20${encodeURIComponent(formData.fullName)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>
              <button
                onClick={handleCloseAndReset}
                className="flex-1 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Delivery or Store Pickup */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                1. Delivery Preference
              </span>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'vadakkencherry', label: 'Pickup: Vadakkencherry' },
                  { id: 'alathur', label: 'Pickup: Alathur' },
                  { id: 'home-delivery', label: 'Express Home Delivery' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleInputChange('pickupStore', item.id)}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      formData.pickupStore === item.id 
                        ? 'border-optimex-blue bg-optimex-blue/20 text-white font-bold' 
                        : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Nair"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">WhatsApp Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue"
                  />
                </div>
              </div>

              {formData.pickupStore === 'home-delivery' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 block mb-1">Delivery Address</label>
                    <input
                      type="text"
                      required
                      placeholder="House / Flat Name, Street"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Town / City"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white"
                    />
                    <input
                      type="text"
                      required
                      placeholder="PIN Code"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Payment */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                2. Payment Method
              </span>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'Google Pay / UPI' },
                  { id: 'card', label: 'Card / Net Banking' },
                  { id: 'cod', label: 'Pay at Showroom' }
                ].map((m) => (
                  <div
                    key={m.id}
                    onClick={() => handleInputChange('paymentMethod', m.id)}
                    className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                      formData.paymentMethod === m.id 
                        ? 'border-optimex-blue bg-optimex-blue/20 text-white font-bold' 
                        : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="p-4 bg-black/40 rounded-2xl border border-white/10 flex justify-between items-center text-xs">
              <div>
                <span className="text-slate-400 block">Total Due:</span>
                <span className="text-lg font-mono font-bold text-optimex-red">{formatPrice(total)}</span>
              </div>
              <span className="text-[11px] text-slate-500">{cart.length} item(s)</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Confirm Eyewear Order</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
