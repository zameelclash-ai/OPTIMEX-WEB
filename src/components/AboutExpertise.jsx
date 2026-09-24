import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const AboutExpertise = () => {
  const { 
    setIsExamModalOpen, 
    setIsMapModalOpen, 
    getImageSrc,
    setIsImageEditModalOpen,
    setEditingImageKey 
  } = useStore();

  const handleMouseMove3D = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave3D = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const promises = [
    {
      title: "Competitive Pricing",
      desc: "Transparent rates starting ₹999 on high-index lenses, branded frames & sunwear."
    },
    {
      title: "Personalized Eye Exams",
      desc: "Comprehensive computerised refraction testing by certified optometrists."
    },
    {
      title: "20-Min Rapid Fitting",
      desc: "Same-day in-clinic lens edging and precise pupil distance fitting."
    },
    {
      title: "Tailored Lens Advice",
      desc: "Anti-glare, blue-cut, progressive, and photogray guidance for your lifestyle."
    }
  ];

  const showcaseCards = [
    {
      id: "showcase-01",
      cardTag: "SHOWCASE 01",
      title: "Optimex Heritage",
      subtitle: "Moscot Keyhole Acetate",
      tag: "Vadakkencherry Clinic",
      defaultImage: "/images/optical/moscot-tortoise.jpg"
    },
    {
      id: "showcase-02",
      cardTag: "SHOWCASE 02",
      title: "Retro Y2K Shades",
      subtitle: "Amber HD Optics",
      tag: "Alathur Clinic",
      defaultImage: "/images/optical/yellow-tint-sunglasses.jpg"
    },
    {
      id: "showcase-03",
      cardTag: "SHOWCASE 03",
      title: "Crystal Ruby Red",
      subtitle: "Bold Executive Acetate",
      tag: "Available in Showroom",
      defaultImage: "/images/optical/ruby-red-acetate.jpg"
    }
  ];

  return (
    <section id="about-us" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden border-t border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: 3 Squircle Cards (ZERO White Text) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-5 py-2">
            {showcaseCards.map((card) => {
              return (
                <div
                  key={card.id}
                  onMouseMove={handleMouseMove3D}
                  onMouseLeave={handleMouseLeave3D}
                  className="group squircle-card flex flex-col justify-between bg-white border border-slate-200"
                  style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                >
                  {/* Inset Photo Slot - Fitted full frame view with no cutoffs */}
                  <div className="squircle-image-slot aspect-[4/3] sm:aspect-[3/4] w-full flex items-center justify-center bg-white border border-slate-200 relative p-2">
                    <img
                      src={card.defaultImage}
                      alt={card.title}
                      className="w-full h-full object-contain p-2 object-center rounded-[1.4rem]"
                    />
                  </div>

                  {/* Lower Content Area (NO White Text) */}
                  <div className="pt-3 pb-1 px-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono block mb-0.5">
                        {card.cardTag}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {card.title} <span className="font-semibold text-slate-700">• {card.subtitle}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Vision & Expertise Copy (ZERO White Text) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 font-mono block mb-1">
                OUR CLINICAL VISION, YOUR EYE CLARITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 leading-tight">
                Your Vision, Our Expertise
              </h2>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                Optimex Eye Stores & Computerised Eye Clinics
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
              At Optimex Opticals, we are committed to delivering optical precision, enduring comfort, and personal style. Located in Vadakkencherry and Alathur, our clinics feature modern computerized auto-refractor testing, high-definition digital lens edging, and a curated selection of global and homegrown brands starting at ₹999.
            </p>

            {/* 4 Promises Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {promises.map((p, i) => (
                <div key={i} className="interactive-card p-4 space-y-1 bg-white border border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-slate-900">{p.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-snug pl-6 font-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Clinic Eye Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMapModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-red-500 font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span className="text-red-500">Find Showrooms</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
