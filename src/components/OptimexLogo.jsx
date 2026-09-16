import React from 'react';

export const OptimexLogo = ({ size = 'md', className = '', glow = false }) => {
  const sizeConfig = {
    sm: {
      imgHeight: 'h-8 sm:h-9',
    },
    md: {
      imgHeight: 'h-10 sm:h-12',
    },
    lg: {
      imgHeight: 'h-14 sm:h-16',
    }
  };

  const current = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`inline-flex items-center select-none ${glow ? 'drop-shadow-[0_2px_14px_rgba(255,27,45,0.3)]' : ''} ${className}`}>
      {/* Official Transparent Logo - Only the logo typography and icon show */}
      <img 
        src="/images/optimex-official-logo.png" 
        alt="Optimex Opticals & Computerised Eye Clinic" 
        className={`${current.imgHeight} w-auto object-contain transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
};
