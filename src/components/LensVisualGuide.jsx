import React, { useState } from 'react';
import { Eye, ShieldCheck, Sun, Monitor, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { LENS_COMPARISONS } from '../data/products';
import { useStore } from '../context/CartContext';

export const LensVisualGuide = () => {
  const { setIsExamModalOpen } = useStore();
  const [activeTab, setActiveTab] = useState(0);

  const current = LENS_COMPARISONS[activeTab];

  return (
    <section id="lens-guide" className="py-20 bg-optimex-dark relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue">
            PRACTICAL EYECARE GUIDE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Which Lenses Do Your Eyes Need?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Simple visual comparison of everyday optical lens coatings available at our Vadakkencherry & Alathur clinics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {LENS_COMPARISONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-optimex-blue text-white border-optimex-blue shadow-glow-blue'
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red block mb-1">
                  OPTICAL BENEFIT
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-1">
                  {current.subtitle}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                  {current.tagline}
                </p>
              </div>

              <div className="space-y-3 text-xs">
                {/* With feature */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WITH {current.title.toUpperCase()}</span>
                  </div>
                  <p className="text-slate-300 pl-6 leading-relaxed font-light">
                    {current.withFeature}
                  </p>
                </div>

                {/* Without feature */}
                <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-[11px]">
                    <span className="w-4 h-4 rounded-full border border-rose-400 flex items-center justify-center text-[10px]">✕</span>
                    <span>WITHOUT COATING (PLAIN LENSES)</span>
                  </div>
                  <p className="text-slate-300 pl-6 leading-relaxed font-light">
                    {current.withoutFeature}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsExamModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center gap-2"
                >
                  <span>Book Free Lens Consultation in Kerala</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Comparison Imagery */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* With coating image */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-black/60 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWith}
                    alt={`${current.title} enabled`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    ✓ With Protection
                  </span>
                  <span className="text-white font-medium text-[11px]">Crystal Clear</span>
                </div>
              </div>

              {/* Without coating image */}
              <div className="relative rounded-2xl overflow-hidden border border-rose-500/30 bg-black/60 group opacity-85 hover:opacity-100 transition-opacity">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={current.imageWithout}
                    alt={`${current.title} without`}
                    className="w-full h-full object-cover filter blur-[0.5px] transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-rose-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    ✕ Plain Lenses
                  </span>
                  <span className="text-slate-300 font-medium text-[11px]">Glare & Fatigue</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
