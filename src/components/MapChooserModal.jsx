import React from 'react';
import { X, MapPin, ExternalLink, MessageCircle, Phone, Clock, Star } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';

export const MapChooserModal = () => {
  const { isMapModalOpen, setIsMapModalOpen } = useStore();

  if (!isMapModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface text-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black/60 p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-optimex-blue/20 text-optimex-blue flex items-center justify-center">
              <MapPin className="w-5 h-5 text-optimex-red" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                FIND OUR KERALA SHOWROOMS
              </span>
              <h2 className="text-xl font-bold text-white">
                Choose Store for Google Maps Directions
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsMapModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Store Options */}
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-xs text-slate-300 font-light">
            Select your nearest Optimex Optical branch to launch GPS route navigation on Google Maps or contact directly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {STORE_LOCATIONS.map((store) => (
              <div 
                key={store.id}
                className="bg-black/40 border border-white/10 hover:border-optimex-blue/50 rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/10 text-white">
                      {store.town}
                    </span>
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      {store.rating} ({store.reviewsCount})
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white">{store.name}</h3>
                  <p className="text-xs text-slate-400">{store.address}</p>

                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{store.statusText}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-optimex-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-glow-blue"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${store.whatsappNumber}?text=Hello%20${encodeURIComponent(store.name)}%2C%20I%20want%20directions%20to%20your%20shop`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${store.phone}`}
                      className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/40 border-t border-white/10 text-center text-xs text-slate-400">
          Showrooms located at Vadakkencherry (Near Bus Stand) and Alathur (Court Road).
        </div>

      </div>
    </div>
  );
};
