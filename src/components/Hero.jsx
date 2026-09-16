import React from 'react';
import { ArrowRight, Calendar, MapPin, MessageCircle, Instagram, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Hero = () => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();

  return (
    <div className="relative overflow-hidden bg-optimex-dark text-white min-h-[85vh] flex items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-optimex-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-optimex-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Poster Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                OUR BIGGEST DISCOUNT EVER
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-bold text-slate-300">
                INSTAGRAM EXCLUSIVE PROMOTION
              </span>
            </div>

            {/* Poster Offer Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-tight">
                follow us now <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl text-white">
                  GET UP TO <span className="text-[#FF1B2D] drop-shadow-[0_0_20px_rgba(255,27,45,0.6)]">20% OFF</span>
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-lg mx-auto lg:mx-0 pt-1">
                Follow our official Instagram page & visit our optical showrooms in Alathur or Vadakkencherry to claim your 20% discount on frames and branded sunglasses.
              </p>
            </div>

            {/* "VISIT NOW" CLICKABLE BUTTON DIRECTLY TO MAPS */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsMapModalOpen(true)}
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 px-6 py-3.5 rounded-full font-bold text-xs shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-optimex-blue font-extrabold tracking-wider">VISIT NOW</span>
                <span className="text-slate-300">|</span>
                <span className="tracking-wider uppercase text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                  ALATHUR, VADAKKENCHERRY
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-optimex-blue group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Action Buttons: Instagram, Book Eye Exam, WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>

              <button
                onClick={() => setIsExamModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-optimex-red hover:bg-optimex-redHover text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-red transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Eye Exam</span>
              </button>

              <a
                href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20follow%20you%20on%20Instagram%20and%20want%20to%20claim%20the%2020%25%20discount%20offer"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-emerald-400 hover:text-white hover:bg-emerald-600/20 text-xs font-bold border border-emerald-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Store Status Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div 
                onClick={() => setIsMapModalOpen(true)}
                className="bg-white/5 border border-white/5 hover:border-white/20 rounded-2xl p-3.5 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                  <span>Vadakkencherry</span>
                  <span className="text-amber-400 text-[11px]">3.3 ★</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Open · Closes 7 pm</span>
                </div>
              </div>

              <div 
                onClick={() => setIsMapModalOpen(true)}
                className="bg-white/5 border border-white/5 hover:border-white/20 rounded-2xl p-3.5 cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                  <span>Alathur</span>
                  <span className="text-amber-400 text-[11px]">4.3 ★</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Open · Closes 8 pm</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Card - Real Optical Eyewear Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden bg-optimex-surface border border-white/10 p-6 shadow-liquid">
                {/* Brand Header */}
                <div className="flex items-center justify-between mb-4">
                  <OptimexLogo size="sm" glow={true} />
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-optimex-red/20 border border-optimex-red/40 text-optimex-red uppercase">
                    SHOWROOM EXCLUSIVE
                  </span>
                </div>

                {/* Real Optical Model Eyewear Photo */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-4 border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
                    alt="Authentic Designer Eyewear Collection - Optimex Opticals"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      In-Stock at Alathur & Vadakkencherry
                    </span>
                    <span className="font-bold text-optimex-red">20% OFF</span>
                  </div>
                </div>

                {/* Eyewear Features */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-base text-white">Branded Eyewear & Sunglasses</h3>
                      <p className="text-xs text-slate-400 font-light">Ray-Ban • Oakley • Vogue • Optimex Titanium</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-optimex-blue" />
                      <span>Free Computerized Eye Test</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-optimex-blue" />
                      <span>20-Min Fast Fitting</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMapModalOpen(true)}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors mt-2 flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                    <span>Get Directions to Nearest Showroom</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
