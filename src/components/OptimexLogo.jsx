import React from 'react';

export const OptimexLogo = ({ size = 'md', className = '', glow = false }) => {
  const sizeClasses = {
    sm: {
      text: 'text-xl',
      badge: 'text-[9px] px-2 py-0.5 tracking-wider',
      gap: '-mt-1'
    },
    md: {
      text: 'text-2xl sm:text-3xl',
      badge: 'text-[10px] sm:text-[11px] px-2.5 py-0.5 tracking-widest',
      gap: '-mt-1.5'
    },
    lg: {
      text: 'text-4xl sm:text-5xl',
      badge: 'text-xs sm:text-sm px-3.5 py-1 tracking-widest',
      gap: '-mt-2'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* "Optimex" in bold vibrant red */}
      <span 
        className={`font-sans font-black tracking-tight leading-none text-[#FF1B2D] transition-all duration-300 ${currentSize.text} ${
          glow ? 'drop-shadow-[0_0_15px_rgba(255,27,45,0.45)]' : ''
        }`}
        style={{ letterSpacing: '-0.02em' }}
      >
        Optimex
      </span>

      {/* "OPTICALS" in electric blue pill badge positioned under 'mex' */}
      <div className={`self-end flex items-center justify-center ${currentSize.gap}`}>
        <span 
          className={`bg-gradient-to-r from-[#0055FF] to-[#0070F3] text-white font-extrabold uppercase rounded-full shadow-md leading-tight ${currentSize.badge} ${
            glow ? 'shadow-[0_0_15px_rgba(0,112,243,0.5)]' : ''
          }`}
          style={{ letterSpacing: '0.14em' }}
        >
          OPTICALS
        </span>
      </div>
    </div>
  );
};
