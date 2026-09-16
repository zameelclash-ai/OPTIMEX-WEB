import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Glasses, Stethoscope } from 'lucide-react';

export const FeatureStrip = () => {
  const features = [
    {
      icon: Glasses,
      title: "Prescription Precision",
      desc: "Digital wavefront edging calibrated within 0.01 diopters"
    },
    {
      icon: Stethoscope,
      title: "Doctor Approved",
      desc: "Licensed Doctors of Optometry on-site at all showrooms"
    },
    {
      icon: RotateCcw,
      title: "30-Day In-Home Trial",
      desc: "Test your frames in everyday life. Free exchanges & returns"
    },
    {
      icon: ShieldCheck,
      title: "1-Year Warranty",
      desc: "Full coverage on scratches, hinges, coatings & accidental drops"
    },
    {
      icon: Truck,
      title: "HSA / FSA Accepted",
      desc: "Instant itemized receipt for tax-free flex spending claims"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
