import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Heart, Sparkles, Check, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Footer = ({ setActiveCategory }) => {
  const { setIsExamModalOpen, setIsFaceGuideOpen, showToast } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    showToast('Subscribed! Welcome to Optimex VIP Club.');
  };

  return (
    <footer className="bg-optimex-darker text-slate-400 text-xs border-t border-white/10">
      
      {/* Poster Special Promo Banner in Footer */}
      <div className="border-b border-white/10 py-12 bg-gradient-to-b from-optimex-dark to-optimex-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-optimex-surface p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-liquid">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                OUR BIGGEST DISCOUNT EVER
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                GET UP TO <span className="text-[#FF1B2D]">20% OFF</span> ALL FRAMES
              </h3>
              <p className="text-xs text-slate-400 max-w-md">
                Visit our Kerala showrooms in Alathur & Vadakkencherry or use promo code <strong className="text-white font-mono">OPTIMEX20</strong> online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all"
              >
                Book Kerala Clinic Exam
              </button>
              <a
                href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20want%20to%20claim%20the%2020%25%20discount"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Claim</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <OptimexLogo size="md" glow={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Certified optical dispensary and computerized refraction clinics in Vadakkencherry & Alathur, Kerala. Japanese beta-titanium frames and digital blue-defense lenses.
            </p>

            <div className="space-y-2 pt-2 text-[11px] text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-optimex-red shrink-0 mt-0.5" />
                <span><strong>Vadakkencherry Showroom:</strong> Near Bus Stand, Main Road (Closes 7 pm)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-optimex-blue shrink-0 mt-0.5" />
                <span><strong>Alathur Showroom:</strong> Court Road, Main Town (Closes 8 pm)</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveCategory('eyeglasses')} className="hover:text-white transition-colors">
                  Optical Eyeglasses
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('sunglasses')} className="hover:text-white transition-colors">
                  Polarized Sunwear
                </button>
              </li>
              <li>
                <button onClick={() => setActiveCategory('contact-lenses')} className="hover:text-white transition-colors">
                  Contact Lenses & Solution
                </button>
              </li>
              <li>
                <button onClick={() => setIsFaceGuideOpen(true)} className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3" /> Face Shape Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Clinic & Doctors */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">
              Clinical Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setIsExamModalOpen(true)} className="hover:text-white transition-colors">
                  Computerized Eye Testing
                </button>
              </li>
              <li>Progressive Lens Mapping</li>
              <li>Same-Day Spectacle Delivery</li>
              <li>Free Frame Adjustments</li>
              <li>Free Ultrasonic Cleaning</li>
            </ul>
          </div>

          {/* Protection & Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">
              Stores & Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#store-locator" className="hover:text-white transition-colors">
                  Vadakkencherry (3.3 ★)
                </a>
              </li>
              <li>
                <a href="#store-locator" className="hover:text-white transition-colors">
                  Alathur (4.3 ★)
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919447012345" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-optimex-blue" />
                <span>1-Year Complete Warranty</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Optimex Opticals. Certified Optical Dispensary & Clinic • Alathur & Vadakkencherry, Kerala.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
