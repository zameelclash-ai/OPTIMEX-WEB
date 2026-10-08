// Frame + lens recipes. Shared by the live hero scene and the offline product-render tool.

const G15 = { kind: 'tint', color: '#1f2a24', color2: '#3b4a41', opacity: 0.93 };

export const HERO_PRESETS = [
  {
    id: 'wayfarer', label: 'Wayfarer', sub: 'Gloss black acetate · crystal green',
    cfg: { style: 'wayfarer', rivets: true, frame: { type: 'acetate', color: '#0b0b0d', rough: 0.14 }, lens: G15 },
  },
  {
    id: 'aviator', label: 'Aviator', sub: '24K gold wire · G-15 gradient',
    cfg: { style: 'aviator', frame: { type: 'metal', color: '#d4a94c', rough: 0.16 }, lens: { kind: 'tint', color: '#1b231d', color2: '#566355', opacity: 0.92 } },
  },
  {
    id: 'round', label: 'Round', sub: 'Havana tortoise · amber gradient',
    cfg: { style: 'round', frame: { type: 'acetate', color: '#7a4414', tortoise: true, rough: 0.16 }, lens: { kind: 'tint', color: '#3a2412', color2: '#8a5a2c', opacity: 0.9 } },
  },
  {
    id: 'cateye', label: 'Cat-Eye', sub: 'Rose acetate · soft brown tint',
    cfg: { style: 'cateye', frame: { type: 'acetate', color: '#a8486a', rough: 0.14 }, lens: { kind: 'tint', color: '#4a3028', color2: '#8c6a5c', opacity: 0.88 } },
  },
];

const clear = { kind: 'clear', color: '#e3eef3', opacity: 0.2 };
const blueCut = { kind: 'blue', color: '#c6dcff', opacity: 0.22 };

// Offline renders -> public/images/products/<name>-<view>.png
export const PRODUCT_RENDERS = {
  'rb-01': { style: 'wayfarer', rivets: true, frame: { type: 'acetate', color: '#0b0b0d', rough: 0.14 }, lens: G15 },
  'rb-02': HERO_PRESETS[1].cfg,
  'opt-01': { style: 'round', frame: { type: 'metal', color: '#c8a05a', rough: 0.2, wire: 0.09, sleeve: '#d8c9a6' }, lens: clear },
  'vog-01': { style: 'cateye', frame: { type: 'acetate', color: '#a8486a', rough: 0.12 }, lens: clear },
  'oak-01': { style: 'rectangle', frame: { type: 'acetate', color: '#17171a', matte: true, rough: 0.55 }, lens: { kind: 'mirror', color: '#5a4a52' } },
  'opt-02': { style: 'rectangle', templeScale: 0.8, frame: { type: 'acetate', color: '#09090b', rough: 0.2, rim: 0.34 }, lens: blueCut },
  'opt-03': { style: 'square', frame: { type: 'acetate', color: '#7a4414', tortoise: true, tortoiseBase: '#8a4e16' }, lens: clear },
  'cont-01': { contact: true },
  'kids': { style: 'round', scale: 0.88, frame: { type: 'acetate', color: '#2fa8a0', rough: 0.12, rim: 0.52 }, lens: clear },
  'showcase-moscot': { style: 'round', frame: { type: 'acetate', color: '#6a3a10', tortoise: true, rough: 0.14, rim: 0.4 }, lens: clear },
  'showcase-amber': { style: 'y2k', frame: { type: 'metal', color: '#d9b25a', rough: 0.15, wire: 0.065 }, lens: { kind: 'tint', color: '#7a4a08', color2: '#e0a21e', opacity: 0.86 } },
  'showcase-ruby': { style: 'wayfarer', frame: { type: 'acetate', color: '#b0122b', rough: 0.1, translucent: true }, lens: clear },
};

export const POSES = {
  a: { yaw: -0.46, pitch: 0.1 },
  b: { yaw: 0.0, pitch: 0.03 },
  front: { yaw: 0.0, pitch: 0.04 },
};
