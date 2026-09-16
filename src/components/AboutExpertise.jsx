import React from 'react';
import { CheckCircle2, Award, Glasses, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const AboutExpertise = () => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();

  const promises = [
    {
      title: "Competitive Pricing",
      desc: "Transparent rates on high-index lenses, branded frames & polarized sunwear."
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

  return (
    <section id="about-us" className="py-20 bg-optimex-dark relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3 Vertical Stylized Eyewear Cards (Inspired by Allen & Habour) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="space-y-3 transform translate-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[9/16] bg-black border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80"
                  alt="Titanium Eyewear"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center block">
                Optical Specs
              </span>
            </div>

            <div className="space-y-3 transform -translate-y-2">
              <div className="rounded-2xl overflow-hidden aspect-[9/16] bg-black border border-optimex-blue/40 shadow-glow-blue">
                <img
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
                  alt="Sunwear Collection"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-optimex-blue text-center block">
                Ray-Ban Solar
              </span>
            </div>

            <div className="space-y-3 transform translate-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[9/16] bg-black border border-white/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1509695503492-413833d296ae?auto=format&fit=crop&w=600&q=80"
                  alt="Designer Cat-Eye"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center block">
                Vogue Lumina
              </span>
            </div>
          </div>

          {/* Right: Vision & Expertise Copy with 4 Icon Promises */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red block mb-1">
                OUR VISION, YOUR CLARITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-black text-white leading-tight">
                Your Vision, Our Expertise
              </h2>
              <h4 className="text-sm font-semibold text-optimex-blue mt-1">
                Optimex Eye Stores & Computerised Eye Clinics
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              At Optimex Opticals, we are committed to delivering optical precision, enduring comfort, and personal style. Located in Vadakkencherry and Alathur, our clinics feature modern computerized auto-refractor testing, high-definition digital lens edging, and a curated selection of global and homegrown brands.
            </p>

            {/* 4 Promises Grid (matching Allen & Habour) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {promises.map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug pl-6 font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Clinic Eye Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMapModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Find Showrooms</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
