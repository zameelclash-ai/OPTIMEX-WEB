import React from 'react';
import { ArrowRight, Sparkles, Calendar, ShieldCheck, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OptimexLogo } from './OptimexLogo';

export const Hero = () => {
  const { setIsExamModalOpen, setIsFaceGuideOpen, formatPrice } = useCart();

  return (
    <div className="relative overflow-hidden bg-optimex-dark text-white min-h-[85vh] flex items-center">
      {/* Higgsfield style ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-optimex-red/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-optimex-blue/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Poster Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                OUR BIGGEST DISCOUNT EVER
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-bold text-slate-300">
                USE CODE <strong className="text-white font-mono">OPTIMEX20</strong>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.05]">
                precision optics. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  timeless style.
                </span>
              </h1>
              
              {/* Promo Banner directly from the user's poster */}
              <div className="pt-2">
                <span className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  GET UP TO <span className="text-[#FF1B2D] drop-shadow-[0_0_20px_rgba(255,27,45,0.6)]">20% OFF</span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience certified computerized eye exams, Japanese featherlight beta-titanium frames, and 450nm digital blue-cut lenses at our official Kerala showrooms.
            </p>

            {/* Poster Location Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-slate-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg">
              <span className="text-optimex-blue font-extrabold tracking-wide">VISIT NOW</span>
              <span className="text-slate-300">|</span>
              <span className="tracking-wider uppercase text-slate-800">ALATHUR, VADAKKENCHERRY</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-optimex-red hover:bg-optimex-redHover text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-red transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Eye Exam in Kerala</span>
              </button>

              <a
                href="#collection-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs tracking-wider uppercase backdrop-blur-md transition-all duration-200"
              >
                <span>Browse Eyewear</span>
                <ArrowRight className="w-4 h-4 text-optimex-blue" />
              </a>

              <a
                href="https://wa.me/919447012345?text=Hi%20Optimex%20Optical%2C%20I%20saw%20your%20website%20and%20want%20to%20know%20more"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Kerala Store Live Status Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-3.5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                  <span>Vadakkencherry</span>
                  <span className="text-amber-400 text-[11px]">3.3 ★</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Open · Closes 7 pm</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-2xl p-3.5 backdrop-blur-sm">
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

          {/* Right Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Dark Futuristic Frame Display Container */}
              <div className="relative rounded-3xl overflow-hidden bg-optimex-surface border border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                
                {/* Brand Logo Watermark Header */}
                <div className="flex items-center justify-between mb-4">
                  <OptimexLogo size="sm" glow={true} />
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-optimex-red/20 border border-optimex-red/40 text-optimex-red uppercase">
                    20% OFF CODE ACTIVE
                  </span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 mb-5 group border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80"
                    alt="AeroTitanium Alpha 01 - Optimex Opticals"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live in Kerala Showrooms
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">11g Titanium</span>
                  </div>
                </div>

                {/* Specs Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-white">AeroTitanium Alpha 01</h3>
                      <p className="text-xs text-slate-400">Zero-Screw Barrel Hinge • Japanese Beta-Titanium</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-mono font-bold text-white">{formatPrice(3499)}</span>
                      <span className="block text-xs text-slate-500 line-through">{formatPrice(4999)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-optimex-blue" />
                      <span>Free Single-Vision Lenses</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/40 rounded-xl p-2.5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-optimex-blue" />
                      <span>20-Min Fast Fitting</span>
                    </div>
                  </div>

                  <a
                    href="#collection-section"
                    className="block w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/10 transition-colors mt-2"
                  >
                    Configure Custom Lenses
                  </a>
                </div>
              </div>

              {/* Floating Doctor Stamp */}
              <div className="absolute -bottom-5 -left-5 bg-optimex-surface border border-white/15 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-optimex-blue/20 flex items-center justify-center text-optimex-blue font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Certified Optometry</div>
                  <div className="text-[11px] text-slate-400">Alathur & Vadakkencherry</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
