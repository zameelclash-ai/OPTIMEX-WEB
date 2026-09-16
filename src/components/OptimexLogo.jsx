import React from 'react';

export const OptimexLogo = ({ size = 'md', className = '', variant = 'full' }) => {
  const sizeConfig = {
    sm: {
      imgHeight: 'h-9',
      textSize: 'text-xl',
      badgeSize: 'text-[8px] px-2 py-0.5',
      glassesWidth: 'w-14'
    },
    md: {
      imgHeight: 'h-11 sm:h-12',
      textSize: 'text-2xl sm:text-3xl',
      badgeSize: 'text-[9px] sm:text-[10px] px-2.5 py-0.5',
      glassesWidth: 'w-18'
    },
    lg: {
      imgHeight: 'h-16 sm:h-20',
      textSize: 'text-4xl sm:text-5xl',
      badgeSize: 'text-xs px-3 py-1',
      glassesWidth: 'w-24'
    }
  };

  const current = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official High-Res Logo Badge */}
      <div className="bg-white px-3 py-1 rounded-xl shadow-sm border border-slate-200/50 flex items-center hover:shadow-md transition-shadow">
        <img 
          src="/images/optimex-official-logo.png" 
          alt="Optimex Opticals & Computerised Eye Clinic" 
          className={`${current.imgHeight} w-auto object-contain`}
        />
      </div>
    </div>
  );
};
