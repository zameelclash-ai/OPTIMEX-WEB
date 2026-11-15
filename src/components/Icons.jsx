import React from 'react';

// Small hand-drawn line icon set (1.6px stroke) used across the site.
const Svg = ({ children, size = 18, className = '', ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...rest}
  >
    {children}
  </svg>
);

export const IconArrow = (p) => (
  <Svg {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></Svg>
);
export const IconPhone = (p) => (
  <Svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></Svg>
);
export const IconWhatsApp = (p) => (
  <Svg {...p}>
    <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
    <path d="M9 8.6c0 3.3 2.9 6.4 6.3 6.4l1.2-1.4-2-1-1 .9c-1.2-.5-2.3-1.6-2.8-2.8l.9-1-1-2z" />
  </Svg>
);
export const IconPin = (p) => (
  <Svg {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></Svg>
);
export const IconClock = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>
);
export const IconMenu = (p) => (
  <Svg {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h10" /></Svg>
);
export const IconClose = (p) => (
  <Svg {...p}><path d="M6 6l12 12" /><path d="M18 6L6 18" /></Svg>
);
export const IconCheck = (p) => (
  <Svg {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></Svg>
);
export const IconInstagram = (p) => (
  <Svg {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></Svg>
);
export const IconExternal = (p) => (
  <Svg {...p}><path d="M14 4h6v6" /><path d="M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></Svg>
);
export const IconGlasses = (p) => (
  <Svg {...p}>
    <circle cx="6.5" cy="14" r="3.5" /><circle cx="17.5" cy="14" r="3.5" />
    <path d="M10 14c.6-.8 3.4-.8 4 0" /><path d="M3 14l1.5-6.5L7 6.5" /><path d="M21 14l-1.5-6.5L17 6.5" />
  </Svg>
);
