import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Layers, 
  Sun, 
  Monitor, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Maximize2 
} from 'lucide-react';
import { STORE_LOCATIONS } from '../data/products';
import { useCart } from '../context/CartContext';

export const BentoShowcase = () => {
  const { setIsExamModalOpen, setIsFaceGuideOpen, formatPrice } = useCart();
  
  // Interactive Lens Simulator state
  const [lensMode, setLensMode] = useState('blue-block'); // 'clear', 'blue-block', 'photochromic', 'polarized'
  
  // Interactive Frame Angle state
  const [frameAngle, setFrameAngle] = useState('front'); // 'front', 'angle', 'profile'
  const [frameColor, setFrameColor] = useState('gold'); // 'gold', 'noir', 'silver'

  const frameVisuals = {
    gold: {
      front: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
      angle: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      profile: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    },
    noir: {
      front: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
      angle: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      profile: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    },
    silver: {
      front: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
      angle: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
      profile: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    }
  };

  return (
    <section id="showcase-bento" className="py-20 bg-optimex-dark relative overflow-hidden border-t border-white/10">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-optimex-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-optimex-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-optimex-red animate-pulse" />
            <span>ENTERPRISE OPTICAL SUITE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white leading-tight">
            Next-Gen Eyewear Technology <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Showcase & Precision Lab
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-normal max-w-xl mx-auto">
            Experience our digital lens surfacing, featherlight aerospace titanium frames, and certified Kerala optometry clinics in real-time.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Interactive Lens Coating Simulator (Large Span 7) */}
          <div className="lg:col-span-7 bg-optimex-surface border border-white/10 hover:border-optimex-blue/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-liquid">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-optimex-blue/20 text-optimex-blue flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue block">
                      OPTICAL LAB SIMULATOR
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Digital Wavefront Lens Filter
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Simulation
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Toggle between clinical lens treatments calibrated at our Vadakkencherry & Alathur finishing labs.
              </p>

              {/* Coating Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: 'clear', label: 'Clear Standard', icon: Eye },
                  { id: 'blue-block', label: 'CyberShield 450nm', icon: Monitor },
                  { id: 'photochromic', label: 'Sun Reactive', icon: Sun },
                  { id: 'polarized', label: 'HD Polarized', icon: ShieldCheck }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setLensMode(tab.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                        lensMode === tab.id
                          ? 'bg-white text-slate-950 border-white shadow-glow-blue'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Visual Window */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                {/* Background screen scene */}
                <img
                  src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1200&q=80"
                  alt="Optical Scene"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    lensMode === 'clear' ? 'brightness-100 contrast-100' :
                    lensMode === 'blue-block' ? 'brightness-95 contrast-105 hue-rotate-15' :
                    lensMode === 'photochromic' ? 'brightness-60 contrast-125' :
                    'brightness-80 contrast-130 saturate-120'
                  }`}
                />

                {/* Filter overlay tint indicator */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  lensMode === 'clear' ? 'bg-transparent' :
                  lensMode === 'blue-block' ? 'bg-amber-500/10' :
                  lensMode === 'photochromic' ? 'bg-slate-900/60' :
                  'bg-emerald-950/30'
                }`} />

                {/* Simulated Lens Reticle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-optimex-red/80 shadow-[0_0_10px_#FF1B2D]" />
                  </div>
                </div>

                {/* HUD Details */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-optimex-blue font-bold uppercase">
                      {lensMode === 'clear' ? 'Standard 1.56 Clarity' :
                       lensMode === 'blue-block' ? '450nm HEV Blue Cut (99.2% filtered)' :
                       lensMode === 'photochromic' ? 'Auto Darkening Transmittance: 14%' :
                       'Glare Elimination Ratio: 99.9%'}
                    </span>
                  </div>
                  <span className="font-mono text-slate-400">Zero Distortion</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Fitted in-house at Vadakkencherry & Alathur labs</span>
              <button 
                onClick={() => setIsExamModalOpen(true)}
                className="text-white hover:text-optimex-blue font-bold flex items-center gap-1 transition-colors"
              >
                <span>Book Precision Refraction</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Card 2: Kerala Stores Spotlight (Span 5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-optimex-surface to-optimex-card border border-white/10 hover:border-optimex-red/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-liquid">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-optimex-red/20 text-optimex-red flex items-center justify-center font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red block">
                      OFFICIAL STORES
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Kerala Showrooms
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-optimex-blue/20 text-optimex-blue text-[10px] font-bold uppercase tracking-wider">
                  Palakkad District
                </span>
              </div>

              {/* Branch 1: Vadakkencherry */}
              <div className="bg-black/40 border border-white/10 hover:border-white/20 rounded-2xl p-4 mb-3 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Optimex Optical - Vadakkencherry</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Near Bus Stand, Main Road, Vadakkencherry</p>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      3.3 ★ (7)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-white/5 text-[11px]">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open · Closes 7 pm
                  </span>
                  <span className="text-slate-600">•</span>
                  <a 
                    href="https://wa.me/919447012345?text=Hello%20Optimex%20Vadakkencherry%2C%20I%20want%20to%20inquire%20about%20spectacles" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-optimex-blue hover:text-white font-bold flex items-center gap-1 ml-auto"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Branch 2: Alathur */}
              <div className="bg-black/40 border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>Optimex Optical - Alathur</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Court Road, Main Town, Alathur</p>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      4.3 ★ (9)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-white/5 text-[11px]">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open · Closes 8 pm
                  </span>
                  <span className="text-slate-600">•</span>
                  <a 
                    href="https://wa.me/919447067890?text=Hello%20Optimex%20Alathur%2C%20I%20want%20to%20inquire%20about%20spectacles" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-optimex-blue hover:text-white font-bold flex items-center gap-1 ml-auto"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
              <a
                href="#store-locator"
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold text-center transition-colors"
              >
                View Directions & Timings
              </a>
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="flex-1 py-3 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white text-xs font-bold shadow-glow-red transition-all"
              >
                Book Clinic Slot
              </button>
            </div>
          </div>

          {/* Bento Card 3: 3D Frame Explorer (Span 6) */}
          <div className="lg:col-span-6 bg-optimex-surface border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-liquid">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    AEROSPACE ARCHITECTURE
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Titanium Alpha Spec Explorer
                  </h3>
                </div>

                {/* Color toggles */}
                <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/10">
                  {[
                    { id: 'gold', hex: '#D4AF37' },
                    { id: 'noir', hex: '#1A202C' },
                    { id: 'silver', hex: '#E2E8F0' }
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setFrameColor(c.id)}
                      className={`w-5 h-5 rounded-full border transition-all ${
                        frameColor === c.id ? 'ring-2 ring-optimex-red scale-110 border-white' : 'border-transparent opacity-60'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* 3D Frame View Box */}
              <div className="relative aspect-[16/10] bg-black/60 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-6 group">
                <img
                  src={frameVisuals[frameColor][frameAngle]}
                  alt="Titanium Frame Explorer"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Angle Controls */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {[
                    { id: 'front', label: '0° Front' },
                    { id: 'angle', label: '45° Angle' },
                    { id: 'profile', label: '90° Temple' }
                  ].map((ang) => (
                    <button
                      key={ang.id}
                      onClick={() => setFrameAngle(ang.id)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                        frameAngle === ang.id
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'bg-black/60 text-slate-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {ang.label}
                    </button>
                  ))}
                </div>

                <div className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  11 Grams • Beta Titanium
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-500">Lens Width</span>
                <span className="font-mono text-xs font-bold text-white">49 mm</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-500">Bridge Span</span>
                <span className="font-mono text-xs font-bold text-white">20 mm</span>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                <span className="block text-[10px] text-slate-500">Temple Arm</span>
                <span className="font-mono text-xs font-bold text-white">145 mm</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Face Shape AI & Virtual Advisor (Span 6) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-optimex-surface via-optimex-card to-black border border-white/10 hover:border-optimex-blue/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-liquid">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue block mb-1">
                AESTHETIC INTELLIGENCE
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Face Shape & Frame Advisor
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Match your facial contours with optically calibrated frame proportions designed to enhance cheekbones and symmetry.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { shape: 'Oval', best: 'Any Frame' },
                  { shape: 'Round', best: 'Angular & Rect' },
                  { shape: 'Square', best: 'Round & Aviator' },
                  { shape: 'Heart', best: 'Rimless & Light' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span className="text-xs font-bold text-white block">{item.shape}</span>
                    <span className="text-[10px] text-optimex-blue font-medium">{item.best}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Unsure of your shape?</span>
                <span className="text-[11px] text-slate-400">Take our 30-second interactive face quiz.</span>
              </div>
              <button
                onClick={() => setIsFaceGuideOpen(true)}
                className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-200 text-xs font-bold transition-colors shrink-0"
              >
                Launch Advisor
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
