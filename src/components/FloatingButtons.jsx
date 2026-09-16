import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const FloatingButtons = () => {
  const { openWhatsAppForBranch } = useStore();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp Chat</span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+919447012345"
        className="w-13 h-13 p-3.5 bg-optimex-surface hover:bg-black text-white rounded-full shadow-2xl border border-white/20 flex items-center justify-center transform hover:scale-110 transition-all duration-300 group"
        title="Call Optimex Optical"
        aria-label="Call Store"
      >
        <Phone className="w-5 h-5 text-optimex-red" />
        <span className="sr-only">Call Store</span>
      </a>
    </div>
  );
};
