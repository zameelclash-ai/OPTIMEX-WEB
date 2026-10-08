import React from 'react';

// Small hand-tuned icon set (24px grid, 1.6 stroke). No icon-library dependency.
const PATHS = {
  'arrow-right': 'M4 12h16M14 6l6 6-6 6',
  'arrow-up-right': 'M7 17L17 7M8 7h9v9',
  calendar: 'M7 3v3M17 3v3M4 9h16M5.5 5h13A1.5 1.5 0 0120 6.5v12a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5v-12A1.5 1.5 0 015.5 5z',
  pin: 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1113 0c0 5.4-6.5 11-6.5 11zM12 7.7a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6z',
  chat: 'M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.9-1L4 20zM9 9.5c.3 2.6 2.4 4.7 5 5l1.2-1.2-1.8-1-.9.7a3.6 3.6 0 01-1.6-1.6l.7-.9-1-1.8L9 9.5z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  x: 'M6 6l12 12M18 6L6 18',
  star: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8L12 3.5z',
  instagram: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.3 6.7h.01',
  menu: 'M4 8h16M4 16h16',
  ruler: 'M3 16L16 3l5 5L8 21l-5-5zM7 12l2 2M10 9l2 2M13 6l2 2',
  external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5',
  thumb: 'M7 11v9H4v-9h3zM7 11l4-7c1.5 0 2.5 1 2.2 2.6L12.8 9H19a2 2 0 012 2.3l-1.2 6.5a2 2 0 01-2 1.7H7',
  eye: 'M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
  monitor: 'M3 5h18v11H3zM8 20h8M12 16v4',
  sun: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  sparkles: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z',
  heart: 'M12 20s-7.5-4.6-9-9.5A5 5 0 0112 6a5 5 0 019 4.5c-1.5 4.9-9 9.5-9 9.5zM7 12h3l1.5-3 2 5 1.2-2H17',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM12 8v5M12 16h.01',
};

export const Icon = ({ name, size = 18, stroke = 1.6, fill = 'none', className = '', ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={fill}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d={PATHS[name] || ''} />
  </svg>
);
