import React from 'react';
import { MapPin, MessageCircle, Phone, Instagram, Calendar, Clock, ExternalLink } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';
import { STORE_LOCATIONS } from '../data/products';

export const Footer = ({ setActiveCategory }) => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();

  return (
    <footer className="bg-slate-50 text-slate-900 text-xs border-t border-slate-200">
      
      {/* Poster 22% Offer Banner */}
      <div className="border-b border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500 font-mono">
                OUR BIGGEST DISCOUNT EVER
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                follow us now <span className="text-[#FF1B2D]">GET UP TO 22% OFF</span>
              </h3>
              <p className="text-xs text-slate-300 max-w-md font-normal">
                Follow our official Instagram account and visit our optical showrooms in Alathur or Vadakkencherry to claim your 22% discount.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-all"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>Follow on Instagram</span>
              </a>

              <button
                onClick={() => setIsMapModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-red-600 text-white hover:bg-red-700 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Showroom (Maps)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links (ZERO White Text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <OptimexLogo size="md" glow={false} />

            <p className="text-xs text-slate-800 leading-relaxed font-normal">
              Your trusted neighborhood opticians in Vadakkencherry and Alathur, Kerala. Computerized refraction, branded eyewear, and rapid lens fitting.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-200 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-red-600" />
              </a>

              <a
                href="https://wa.me/919447997327"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-200 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-red-600" />
              </a>
            </div>
          </div>

          {/* Vadakkencherry Branch */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Vadakkencherry Showroom</span>
            </h4>
            <p className="text-xs text-slate-700 font-normal">
              Near Bus Stand, Main Road, Vadakkencherry, Palakkad, Kerala 678683
            </p>
            <div className="text-[11px] text-red-600 font-bold flex items-center gap-1">
              <Clock className="w-3 h-3 text-red-600" />
              <span>Open · Closes 7:00 PM</span>
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href={STORE_LOCATIONS[0].mapUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-red-500 hover:bg-black text-[11px] font-bold flex items-center gap-1"
              >
                <span className="text-red-500">Google Maps</span>
                <ExternalLink className="w-3 h-3 text-red-500" />
              </a>
              <a
                href={`tel:${STORE_LOCATIONS[0].phone}`}
                className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-900 hover:bg-slate-300 text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-slate-900" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Alathur Branch */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Alathur Showroom</span>
            </h4>
            <p className="text-xs text-slate-700 font-normal">
              Court Road, Main Town, Alathur, Palakkad, Kerala 678541
            </p>
            <div className="text-[11px] text-red-600 font-bold flex items-center gap-1">
              <Clock className="w-3 h-3 text-red-600" />
              <span>Open · Closes 8:00 PM</span>
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href={STORE_LOCATIONS[1].mapUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-red-500 hover:bg-black text-[11px] font-bold flex items-center gap-1"
              >
                <span className="text-red-500">Google Maps</span>
                <ExternalLink className="w-3 h-3 text-red-500" />
              </a>
              <a
                href={`tel:${STORE_LOCATIONS[1].phone}`}
                className="px-3 py-1.5 rounded-lg bg-slate-200 text-slate-900 hover:bg-slate-300 text-[11px] font-bold flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-slate-900" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs font-normal text-slate-800">
              <li>
                <button onClick={() => setIsExamModalOpen(true)} className="hover:text-red-600 transition-colors text-red-600 font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-600" /> Book Eye Exam
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
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-700">
          <div>
            © 2026 Optimex Opticals. Registered Optical Dispensary & Clinic • Alathur & Vadakkencherry, Kerala.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-red-600">Palakkad District, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
