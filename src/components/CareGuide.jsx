import React from 'react';
import { Eye, ShieldAlert, Sparkles, HeartPulse } from 'lucide-react';

export const CareGuide = () => {
  const tips = [
    {
      icon: HeartPulse,
      title: "The 20-20-20 Screen Rule",
      desc: "Every 20 minutes looking at digital displays, gaze at an object 20 feet away for at least 20 seconds to relax ciliary eye muscles."
    },
    {
      icon: Sparkles,
      title: "Microfiber Cleaning Only",
      desc: "Rinse lenses with water before wiping with an optical microfiber cloth. Never use shirt fabric or rough paper tissues that cause micro-scratches."
    },
    {
      icon: Eye,
      title: "Annual Eye Check-ups",
      desc: "Vision powers drift gradually. Annual computerized checkups at Vadakkencherry or Alathur detect early astigmatism and retina strain."
    },
    {
      icon: ShieldAlert,
      title: "Lifetime Frame Adjustments",
      desc: "Walk into either of our Kerala clinics anytime for free ultrasonic sanitization, screw tightening, and silicone nose-pad adjustments."
    }
  ];

  return (
    <section className="bg-optimex-dark py-20 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-optimex-surface to-optimex-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-liquid">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
              OPTOMETRIST EYE HEALTH ADVICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Preserving Your Vision & Lens Investment
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Practices recommended by our optometrists to prevent screen fatigue and prolong frame durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-optimex-blue/15 text-optimex-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">{tip.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{tip.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
