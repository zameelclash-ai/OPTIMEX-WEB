import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const ReviewsSection = () => {
  return (
    <section className="bg-optimex-darker py-24 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue">
            VERIFIED PATIENT REVIEWS • KERALA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by Thousands Across Palakkad
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2 text-amber-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-300">
              Vadakkencherry (3.3★) & Alathur (4.3★) Google Ratings
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-optimex-surface rounded-3xl p-8 border border-white/10 shadow-liquid flex flex-col justify-between relative group hover:border-optimex-blue/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-white/5 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-[11px] text-slate-400 font-light">{t.role}</span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 text-slate-300 px-2 py-1 rounded-md border border-white/5">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
