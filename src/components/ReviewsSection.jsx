import React from 'react';
import { Star, ExternalLink, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS, STORE_LOCATIONS } from '../data/products';

export const ReviewsSection = () => {
  return (
    <section id="google-reviews" className="bg-optimex-darker py-24 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
            {/* Google G Logo SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>VERIFIED GOOGLE REVIEWS & RATINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Local Customers Say on Google
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Read authentic reviews from customers who got their eye examinations and spectacles from our Vadakkencherry and Alathur stores.
          </p>
        </div>

        {/* Google Branch Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {STORE_LOCATIONS.map((store) => (
            <div 
              key={store.id}
              className="bg-optimex-surface border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-liquid"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {store.town} Showroom
                </span>
                <h4 className="font-bold text-sm text-white">{store.name}</h4>
                <div className="flex items-center gap-1.5 pt-1 text-amber-400">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < Math.floor(store.rating) ? 'fill-amber-400' : 'text-slate-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white font-mono">{store.rating}</span>
                  <span className="text-[11px] text-slate-400">({store.reviewsCount} Google Reviews)</span>
                </div>
              </div>

              <a
                href={store.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                title="View on Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-optimex-surface rounded-3xl p-6 border border-white/10 shadow-liquid flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
            >
              <div className="space-y-3">
                {/* Author & Branch */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-optimex-blue to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white flex items-center gap-1">
                        <span>{rev.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <span className="text-[10px] text-slate-400">{rev.date}</span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-400">
                    Google Review
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  "{rev.content}"
                </p>
              </div>

              {/* Branch indicator */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-optimex-blue font-semibold">{rev.branch}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({rev.helpful})</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
