import React from 'react';
import { MapPin, MessageCircle, Phone, Instagram, Calendar, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';
import { STORE_LOCATIONS } from '../data/products';

export const Footer = ({ setActiveCategory }) => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();

  return (
    <footer className="bg-optimex-darker text-slate-400 text-xs border-t border-white/10">
      
      {/* Poster 20% Offer Banner */}
      <div className="border-b border-white/10 py-12 bg-gradient-to-b from-optimex-dark to-optimex-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-optimex-surface p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-liquid">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                OUR BIGGEST DISCOUNT EVER
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                follow us now <span className="text-[#FF1B2D]">GET UP TO 20% OFF</span>
              </h3>
              <p className="text-xs text-slate-400 max-w-md font-light">
                Follow our official Instagram account and visit our optical showrooms in Alathur or Vadakkencherry to claim your discount.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>

              <button
                onClick={() => setIsMapModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MapPin className="w-4 h-4 text-optimex-red" />
                <span>Visit Showroom (Maps)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <OptimexLogo size="md" glow={true} />

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Your trusted neighborhood opticians in Vadakkencherry and Alathur, Kerala. Computerized refraction, branded eyewear, and rapid lens fitting.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919447012345"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Vadakkencherry Branch */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-optimex-red" />
              <span>Vadakkencherry Showroom</span>
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Near Bus Stand, Main Road, Vadakkencherry, Palakkad, Kerala 678683
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Open · Closes 7:00 PM</span>
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href={STORE_LOCATIONS[0].mapUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`tel:${STORE_LOCATIONS[0].phone}`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Alathur Branch */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-optimex-red" />
              <span>Alathur Showroom</span>
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Court Road, Main Town, Alathur, Palakkad, Kerala 678541
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Open · Closes 8:00 PM</span>
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href={STORE_LOCATIONS[1].mapUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`tel:${STORE_LOCATIONS[1].phone}`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={() => setIsExamModalOpen(true)} className="hover:text-white transition-colors text-optimex-blue font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Book Eye Exam
                </button>
              </li>
              <li>Computerized Vision Testing</li>
              <li>Progressive & Bifocal Consultation</li>
              <li>Free Frame Adjustments</li>
              <li>Contact Lens Fitting</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Optimex Opticals. Registered Optical Dispensary & Clinic • Alathur & Vadakkencherry, Kerala.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400">Palakkad District, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
