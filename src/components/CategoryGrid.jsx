import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CategoryGrid = ({ onSelectCategory }) => {
  const categories = [
    {
      id: "eyeglasses",
      tag: "COLLECTION 01",
      title: "Eye Glasses Collection",
      subtitle: "Computer & Single Vision",
      image: "/images/optical/moscot-tortoise.jpg"
    },
    {
      id: "sunglasses",
      tag: "COLLECTION 02",
      title: "Polarized Sunglasses",
      subtitle: "Polarized & 100% UV Protection",
      image: "/images/optical/yellow-tint-sunglasses.jpg"
    },
    {
      id: "contact-lenses",
      tag: "COLLECTION 03",
      title: "Contact Lenses Care",
      subtitle: "Daily & Monthly Moisture",
      image: "/images/optical/contact-lenses.jpg"
    },
    {
      id: "all",
      tag: "COLLECTION 04",
      title: "Designer Optical Frames",
      subtitle: "Ray-Ban, Oakley, Vogue",
      image: "/images/optical/bold-black-acetate.jpg"
    },
    {
      id: "eyeglasses",
      tag: "COLLECTION 05",
      title: "Men's Spectacles",
      subtitle: "Bold Acetate & Titanium",
      image: "/images/optical/akila-ceres-black.jpg"
    },
    {
      id: "eyeglasses",
      tag: "COLLECTION 06",
      title: "Women's Eyewear",
      subtitle: "Cat-Eye & Elegant Curves",
      image: "/images/optical/miumiu-oval-tortoise.jpg"
    },
    {
      id: "eyeglasses",
      tag: "COLLECTION 07",
      title: "Flexible Kids Glasses",
      subtitle: "Unbreakable Light Weight",
      image: "/images/optical/kids-glasses.jpg"
    },
    {
      id: "eyeglasses",
      tag: "COLLECTION 08",
      title: "Multifocal Lenses",
      subtitle: "Seamless Distance & Reading",
      image: "/images/optical/round-brown-acetate.jpg"
    }
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) onSelectCategory(catId);
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (ZERO White Text) */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-red-600 font-mono block">
            FEATURED CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-900">
            Eyewear & Clinic Collections
          </h2>
        </div>

        {/* 8 Squircle Cards Grid (ZERO White Text - Black & Red Only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.id)}
              className="group squircle-card cursor-pointer flex flex-col justify-between bg-white border border-slate-200"
            >
              {/* Inset Photo Window */}
              <div className="squircle-image-slot aspect-[16/11] w-full flex items-center justify-center bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 rounded-[1.6rem]"
                />
              </div>

              {/* Lower Text Content Area (ZERO White Text) */}
              <div className="pt-4 pb-2 px-2 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono block mb-1">
                    {cat.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-700 font-normal mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-red-600 font-bold">Explore styles</span>
                  <div className="w-7 h-7 rounded-full bg-slate-900 group-hover:bg-red-600 text-red-500 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 shadow">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
