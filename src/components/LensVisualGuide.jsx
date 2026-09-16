import React, { useState } from 'react';
import { Eye, ShieldCheck, Sun, Monitor, CheckCircle2, Sparkles, ArrowRight, MessageCircle, SlidersHorizontal, Check } from 'lucide-react';
import { LENS_COMPARISONS } from '../data/products';
import { useStore } from '../context/CartContext';

export const LensVisualGuide = () => {
  const { setIsExamModalOpen } = useStore();
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('split'); // 'split' or 'compare'
  const [isProtectedView, setIsProtectedView] = useState(true);

  const current = LENS_COMPARISONS[activeTab] || LENS_COMPARISONS[0];

  const handleWhatsAppLensInquiry = () => {
    const msg = `Hello Optimex Optical, I saw the "${current.title}" (${current.subtitle}) on your website. Could you tell me the pricing and availability for my prescription at your showroom?`;
    window.open(`https://wa.me/919447012345?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="lens-guide" className="py-20 bg-optimex-dark relative overflow-hidden border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-optimex-blue/10 border border-optimex-blue/30 text-optimex-blue text-[10px] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>PRACTICAL EYECARE & LENS GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white">
            Which Optical Lenses Do Your Eyes Need?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Real optical lens coating comparisons available with 20-minute rapid in-clinic fitting at our Vadakkencherry & Alathur showrooms.
          </p>
        </div>

        {/* Lens Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {LENS_COMPARISONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setIsProtectedView(true);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-optimex-blue text-white border-optimex-blue shadow-glow-blue scale-105'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {idx === 0 && <Eye className="w-3.5 h-3.5" />}
              {idx === 1 && <Monitor className="w-3.5 h-3.5" />}
              {idx === 2 && <Sun className="w-3.5 h-3.5" />}
              {idx === 3 && <Sparkles className="w-3.5 h-3.5" />}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Main Comparison Showcase Card */}
        <div className="bg-optimex-surface border border-white/10 rounded-3xl p-6 sm:p-10 shadow-liquid">
          
          {/* Top Bar: Recommended Audience & Interactive Toggle Switch */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                Recommended For
              </span>
              <span className="text-white font-medium text-xs sm:text-sm">
                {current.idealFor || "Daily eye strain protection"}
              </span>
            </div>

            {/* Quick Interactive Simulation Toggle */}
            <div className="flex items-center gap-2 bg-black/60 p-1 rounded-xl border border-white/10 self-stretch sm:self-auto justify-center">
              <button
                type="button"
                onClick={() => setIsProtectedView(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isProtectedView
                    ? 'bg-emerald-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Check className="w-3 h-3" />
                <span>With Coating</span>
              </button>
              <button
                type="button"
                onClick={() => setIsProtectedView(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  !isProtectedView
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>✕ Plain Uncoated</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & Comparison Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red block mb-1">
                  OPTICAL BENEFIT & FUNCTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-optimex-blue mt-1">
                  {current.subtitle}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                  {current.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* With feature benefit */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isProtectedView
                    ? 'bg-emerald-500/15 border-emerald-500/40 shadow-sm'
                    : 'bg-emerald-500/5 border-emerald-500/15 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>WITH {current.title.toUpperCase()}</span>
                  </div>
                  <p className="text-slate-200 pl-6 leading-relaxed font-light">
                    {current.withFeature}
                  </p>
                </div>

                {/* Without feature drawback */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  !isProtectedView
                    ? 'bg-rose-500/15 border-rose-500/40 shadow-sm'
                    : 'bg-rose-500/5 border-rose-500/15 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                    <span className="w-4 h-4 rounded-full border border-rose-400 flex items-center justify-center text-[10px] shrink-0 font-bold">✕</span>
                    <span>WITHOUT COATING (PLAIN UNCOATED GLASS)</span>
                  </div>
                  <p className="text-slate-300 pl-6 leading-relaxed font-light">
                    {current.withoutFeature}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppLensInquiry}
                  className="flex-1 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExamModalOpen(true)}
                  className="flex-1 px-5 py-3 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Eye Checkup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center sm:text-left flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Same-day 20-minute lens fitting available at Vadakkencherry & Alathur</span>
              </div>
            </div>

            {/* Right Column: Real Optical Images (Side by Side / Simulation) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* With Coating Photo */}
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 bg-black ${
                isProtectedView ? 'border-emerald-500 shadow-glow-blue scale-[1.02]' : 'border-white/10 opacity-60'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWith}
                    alt={`${current.title} with protection`}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>With Coating</span>
                  </span>
                  <span className="text-emerald-300 font-semibold text-[11px] bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    100% Clarity
                  </span>
                </div>
              </div>

              {/* Without Coating Photo */}
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 bg-black ${
                !isProtectedView ? 'border-rose-500 shadow-glow-red scale-[1.02]' : 'border-white/10 opacity-60'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWithout}
                    alt={`${current.title} without coating`}
                    className="w-full h-full object-cover object-center filter contrast-90 transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-rose-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <span>✕ Plain Lenses</span>
                  </span>
                  <span className="text-rose-300 font-semibold text-[11px] bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    Glare & Strain
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
