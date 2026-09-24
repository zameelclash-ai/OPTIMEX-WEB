import React, { useState } from 'react';
import { Eye, Monitor, Sun, Sparkles, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { LENS_COMPARISONS } from '../data/products';
import { useStore } from '../context/CartContext';

export const LensVisualGuide = () => {
  const { setIsExamModalOpen } = useStore();
  const [activeTab, setActiveTab] = useState(0);
  const [isProtectedView, setIsProtectedView] = useState(true);

  const current = LENS_COMPARISONS[activeTab] || LENS_COMPARISONS[0];

  const handleWhatsAppLensInquiry = () => {
    const msg = `Hello Optimex Optical, I saw the "${current.title}" (${current.subtitle}) on your website. Could you tell me the pricing and availability for my prescription at your showroom?`;
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="lens-guide" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (ZERO White Text) */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-red-600 font-mono block">
            PRACTICAL EYECARE & LENS GUIDE
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-900">
            Which Lenses Do Your Eyes Need?
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 font-normal">
            Real optical lens coating comparisons available with 20-minute rapid fitting at Vadakkencherry & Alathur showrooms.
          </p>
        </div>

        {/* Lens Category Tabs (ZERO White Text) */}
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
                  ? 'bg-red-600 text-white font-black border-red-600 shadow-md scale-105'
                  : 'bg-white border-slate-200 text-slate-900 hover:text-red-600 hover:bg-slate-100'
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

        {/* Main Comparison Showcase Card (ZERO White Text) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          {/* Top Bar: Recommended Audience & Interactive Toggle Switch */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                Recommended For
              </span>
              <span className="text-slate-900 font-bold text-xs sm:text-sm">
                {current.idealFor || "Daily eye strain protection"}
              </span>
            </div>

            {/* Quick Interactive Simulation Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 self-stretch sm:self-auto justify-center">
              <button
                type="button"
                onClick={() => setIsProtectedView(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isProtectedView
                    ? 'bg-red-600 text-white font-black shadow'
                    : 'text-slate-900 hover:text-red-600'
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
                    ? 'bg-slate-900 text-red-500 font-black shadow'
                    : 'text-slate-900 hover:text-red-600'
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
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block mb-1">
                  OPTICAL BENEFIT & FUNCTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-slate-800 mt-1">
                  {current.subtitle}
                </p>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed font-normal">
                  {current.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* With feature benefit */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isProtectedView
                    ? 'bg-red-50 border-red-300 text-slate-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-[11px] mb-1">
                    <Check className="w-4 h-4 shrink-0 text-red-600" />
                    <span>WITH {current.title.toUpperCase()}</span>
                  </div>
                  <p className="pl-6 leading-relaxed font-normal text-slate-900">
                    {current.withFeature}
                  </p>
                </div>

                {/* Without feature drawback */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  !isProtectedView
                    ? 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-700 opacity-70'
                }`}>
                  <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[11px] mb-1">
                    <span className="w-4 h-4 rounded-full border border-slate-900 flex items-center justify-center text-[10px] shrink-0 font-bold text-slate-900">✕</span>
                    <span>WITHOUT COATING (PLAIN UNCOATED GLASS)</span>
                  </div>
                  <p className="pl-6 leading-relaxed font-normal text-slate-900">
                    {current.withoutFeature}
                  </p>
                </div>
              </div>

              {/* Action Buttons (ZERO White Text) */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppLensInquiry}
                  className="flex-1 px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-red-500 font-black text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-red-500" />
                  <span className="text-red-500">Inquire on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExamModalOpen(true)}
                  className="flex-1 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Eye Checkup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-slate-800 text-center sm:text-left flex items-center gap-2 pt-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>Same-day 20-minute lens fitting available at Vadakkencherry & Alathur</span>
              </div>
            </div>

            {/* Right Column: Real Optical Images */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* With Coating Photo */}
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 bg-slate-900 ${
                isProtectedView ? 'border-red-600 shadow-xl scale-[1.02]' : 'border-slate-300 opacity-70'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWith}
                    alt={`${current.title} with protection`}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/optical/antiglare-lens.jpg";
                    }}
                  />
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-red-600 text-white font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>With Coating</span>
                  </span>
                  <span className="text-red-500 font-bold text-[11px] bg-slate-900 px-2 py-0.5 rounded-md border border-slate-700">
                    100% Clarity
                  </span>
                </div>
              </div>

              {/* Without Coating Photo */}
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 bg-slate-900 ${
                !isProtectedView ? 'border-slate-900 shadow-xl scale-[1.02]' : 'border-slate-300 opacity-70'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWithout}
                    alt={`${current.title} without coating`}
                    className="w-full h-full object-cover object-center filter contrast-90 transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/optical/classic-eyeglasses.jpg";
                    }}
                  />
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-slate-900 text-red-500 border border-slate-700 font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <span>✕ Plain Lenses</span>
                  </span>
                  <span className="text-slate-900 font-bold text-[11px] bg-slate-100 px-2 py-0.5 rounded-md border border-slate-300">
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
