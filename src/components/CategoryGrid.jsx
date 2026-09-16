import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CategoryGrid = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "eyeglasses",
      title: "Eye Glasses",
      subtitle: "Computer & Single Vision",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sunglasses",
      title: "Sunglasses",
      subtitle: "Polarized & 100% UV",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "contact-lenses",
      title: "Contact Lenses",
      subtitle: "Daily & Monthly Moisture",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "all",
      title: "Designer Frames",
      subtitle: "Ray-Ban, Oakley, Vogue",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eyeglasses",
      title: "Men's Glasses",
      subtitle: "Bold Acetate & Titanium",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eyeglasses",
      title: "Women's Glasses",
      subtitle: "Cat-Eye & Elegant Curves",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eyeglasses",
      title: "Kids Glasses",
      subtitle: "Flexible Unbreakable",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eyeglasses",
      title: "Multifocal & Progressive",
      subtitle: "Seamless Vision Without Line",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80"
    }
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) onSelectCategory(catId);
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-20 bg-optimex-darker border-t border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue">
            EXPLORE OUR CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-white">
            Optimex Eyeglass Stores & Collections
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Vast collection of prescription spectacles, sunglasses, and contact lenses to suit every style and budget.
          </p>
        </div>

        {/* 8 Card Grid matching Allen & Habour layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/10 hover:border-optimex-blue/60 cursor-pointer shadow-liquid transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-optimex-red transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-light block">
                    {cat.subtitle}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-optimex-blue text-white flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
