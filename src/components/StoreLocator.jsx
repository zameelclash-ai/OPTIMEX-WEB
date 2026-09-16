import React from 'react';
import { MapPin, Phone, Clock, Calendar, Check, ExternalLink, MessageCircle, Star } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/products';
import { useStore } from '../context/CartContext';

export const StoreLocator = () => {
  const { setIsExamModalOpen, setSelectedBranchForExam, openMapForBranch } = useStore();

  const handleBookExam = (branchId) => {
    setSelectedBranchForExam(branchId);
    setIsExamModalOpen(true);
  };

  return (
    <section id="store-locator" className="bg-optimex-dark text-white py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>KERALA SHOWROOMS & EYE CLINICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white">
            Visit Our Showrooms in Kerala
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Walk into our stores in Vadakkencherry or Alathur for computerized refraction eye tests, Ray-Ban & branded eyewear, and 20-minute rapid spectacle delivery.
          </p>
        </div>

        {/* 2 Store Showroom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STORE_LOCATIONS.map((store) => (
            <div 
              key={store.id}
              className="bg-optimex-surface border border-white/10 hover:border-optimex-blue/40 rounded-3xl overflow-hidden shadow-liquid flex flex-col justify-between transition-all"
            >
              {/* Real Optical Shop Display Image */}
              <div className="relative h-64 overflow-hidden border-b border-white/10 bg-black">
                <img
                  src={store.image}
                  alt={`${store.name} Showroom`}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Google Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{store.rating} ({store.reviewsCount} Google Reviews)</span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-optimex-blue text-white shadow-sm">
                    {store.town} Showroom
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1.5">
                    {store.name}
                  </h3>
                </div>
              </div>

              {/* Details & Info */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  
                  {/* Status & Hours */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-bold">{store.statusText}</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-optimex-red shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-white">{store.address}</p>
                      <p className="text-slate-400 text-xs">{store.district}, {store.state}</p>
                    </div>
                  </div>

                  {/* Optometrist In Charge */}
                  <div className="text-xs text-slate-300 bg-black/40 p-3 rounded-xl border border-white/5">
                    <strong className="text-white block mb-0.5">Clinical In-Charge:</strong>
                    <span>{store.optometrist}</span>
                  </div>

                  {/* Showroom Features */}
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Services & Equipment Available:
                    </span>
                    <ul className="grid grid-cols-2 gap-2 text-xs">
                      {store.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-slate-300">
                          <Check className="w-3.5 h-3.5 text-optimex-blue shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Buttons: Maps, WhatsApp, Call, Book */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={store.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <MapPin className="w-4 h-4 text-optimex-red" />
                      <span>Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`https://wa.me/${store.whatsappNumber}?text=Hello%20${encodeURIComponent(store.name)}%2C%20I%20want%20to%20inquire%20about%20spectacles`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${store.phone}`}
                      className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleBookExam(store.id)}
                    className="w-full py-3 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Computerized Eye Exam at {store.town}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
