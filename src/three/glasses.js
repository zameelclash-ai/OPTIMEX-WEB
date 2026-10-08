// Procedural, physically-lit eyewear. Every frame is built from real optical
// proportions (lens width, bridge gap, temple length) so shapes read as
// genuine Wayfarer / Aviator / Round / Cat-Eye / Rectangle frames.
import * as THREE from '../vendor/three.module.min.js';

const TAU = Math.PI * 2;

/* ---------- 2D outline helpers (lens-local, outer edge = +x) ---------- */

function superellipse(a, b, nTop, nBottom, N = 160) {
  const pts = [];
  for (let i = 0; i < N; i++) {
    const t = (i / N) * TAU;
    const c = Math.cos(t);
    const s = Math.sin(t);
    const n = s >= 0 ? nTop : nBottom;
    pts.push([
      a * Math.sign(c) * Math.pow(Math.abs(c), 2 / n),
      b * Math.sign(s) * Math.pow(Math.abs(s), 2 / n),
    ]);
  }
  return pts;
}

function resample(pts, N = 180) {
  const L = [0];
  for (let i = 1; i <= pts.length; i++) {
    const p = pts[i % pts.length];
    const q = pts[i - 1];
    L.push(L[i - 1] + Math.hypot(p[0] - q[0], p[1] - q[1]));
  }
  const total = L[L.length - 1];
  const out = [];
  let j = 0;
  for (let k = 0; k < N; k++) {
    const d = (k / N) * total;
    while (L[j + 1] < d) j++;
    const f = (d - L[j]) / (L[j + 1] - L[j] || 1);
    const p = pts[j % pts.length];
    const q = pts[(j + 1) % pts.length];
    out.push([p[0] + (q[0] - p[0]) * f, p[1] + (q[1] - p[1]) * f]);
  }
  return out;
}

function offsetOutline(pts, dist) {
  const n = pts.length;
  return pts.map((p, i) => {
    const a = pts[(i - 1 + n) % n];
    const b = pts[(i + 1) % n];
    let tx = b[0] - a[0];
    let ty = b[1] - a[1];
    const l = Math.hypot(tx, ty) || 1;
    tx /= l;
    ty /= l;
    const d = typeof dist === 'function' ? dist(p, i) : dist;
    return [p[0] + ty * d, p[1] - tx * d]; // outward for CCW outlines
  });
}

const smooth = (pts, passes = 2) => {
  let cur = pts;
  for (let k = 0; k < passes; k++) {
    cur = cur.map((p, i) => {
      const a = cur[(i - 1 + cur.length) % cur.length];
      const b = cur[(i + 1) % cur.length];
      return [(a[0] + 2 * p[0] + b[0]) / 4, (a[1] + 2 * p[1] + b[1]) / 4];
    });
  }
  return cur;
};

/* ---------- Style catalogue ---------- */

export const STYLES = {
  wayfarer: {
    half: 2.6, tall: 2.05,
    outline() {
      const a = 2.7, b = 1.85;
      return superellipse(a, b, 5.2, 3.2).map(([x, y]) => {
        const up = 0.1 * (x / a) * b; // subtle outer-corner lift
        const f = Math.max(0, -y / b);
        return [x * (1 - 0.13 * f) + 0.04 * a * f, y + up];
      });
    },
    brow: 1.05, rim: 0.3, depth: 0.6, bridgeTop: 0.52, bridgeH: 0.85, templeY: 0.55,
  },
  aviator: {
    half: 2.9, tall: 2.45,
    outline() {
      const a = 2.9, b = 2.45;
      return superellipse(a, b, 2.35, 2.0).map(([x, y]) => {
        const t = y / b;
        const w = 1 + 0.16 * t; // wide shoulder, narrow chin
        const slide = t < 0 ? -0.3 * Math.pow(-t, 1.6) : 0; // chin drifts toward nose
        return [x * w + slide, y];
      });
    },
    rim: 0.09, depth: 0.2, templeY: 0.7,
  },
  round: {
    half: 2.45, tall: 2.4,
    outline: () => superellipse(2.45, 2.4, 2, 2),
    brow: 0.1, rim: 0.36, depth: 0.55, bridgeTop: 0.2, bridgeH: 0.7, templeY: 0.35,
  },
  cateye: {
    half: 2.7, tall: 2.0,
    outline() {
      const a = 2.8, b = 1.8;
      return superellipse(a, b, 3.1, 2.7).map(([x, y]) => {
        const k = Math.max(0, (x / a - 0.3) / 0.7);
        return [x, y + 1.0 * Math.pow(k, 1.7)];
      });
    },
    brow: 0.45, rim: 0.36, depth: 0.58, bridgeTop: 0.55, bridgeH: 0.8, templeY: 0.75,
  },
  rectangle: {
    half: 2.8, tall: 2.05,
    outline: () => superellipse(2.8, 2.05, 4.8, 3.8),
    brow: 0.35, rim: 0.36, depth: 0.55, bridgeTop: 0.5, bridgeH: 0.8, templeY: 0.5,
  },
  square: {
    half: 2.55, tall: 2.35,
    outline: () => superellipse(2.55, 2.35, 3.8, 3.2),
    brow: 0.4, rim: 0.42, depth: 0.6, bridgeTop: 0.5, bridgeH: 0.85, templeY: 0.55,
  },
  y2k: {
    half: 2.35, tall: 1.5,
    outline: () => superellipse(2.35, 1.5, 3.0, 2.6),
    rim: 0.075, depth: 0.2, templeY: 0.35,
  },
};

/* ---------- Procedural textures ---------- */

const texCache = new Map();

function tortoiseTexture(base = '#7a4414') {
  const key = 'tort' + base;
  if (texCache.has(key)) return texCache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 512, 512);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const blob = (color, count, rMin, rMax, alpha) => {
    for (let i = 0; i < count; i++) {
      const x = rnd() * 512, y = rnd() * 512, r = rMin + rnd() * (rMax - rMin);
      const grad = g.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, color.replace('A', alpha));
      grad.addColorStop(1, color.replace('A', 0));
      g.fillStyle = grad;
      g.beginPath();
      g.ellipse(x, y, r, r * (0.55 + rnd() * 0.6), rnd() * Math.PI, 0, TAU);
      g.fill();
    }
  };
  blob('rgba(222,150,40,A)', 34, 40, 110, 0.75);
  blob('rgba(255,205,110,A)', 14, 20, 60, 0.55);
  blob('rgba(32,12,4,A)', 40, 30, 95, 0.85);
  blob('rgba(12,5,2,A)', 18, 18, 55, 0.9);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  texCache.set(key, t);
  return t;
}

function lensGradientTexture(top, bottom) {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, top);
  grad.addColorStop(1, bottom);
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function maskTexture(pts, box) {
  const W = 512;
  const H = Math.max(64, Math.round((W * (box.maxY - box.minY)) / (box.maxX - box.minX)));
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#fff';
  g.beginPath();
  pts.forEach(([x, y], i) => {
    const px = ((x - box.minX) / (box.maxX - box.minX)) * W;
    const py = (1 - (y - box.minY) / (box.maxY - box.minY)) * H;
    i ? g.lineTo(px, py) : g.moveTo(px, py);
  });
  g.closePath();
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  return t;
}

/* ---------- Materials ---------- */

function frameMaterial(frame) {
  if (frame.type === 'metal') {
    return new THREE.MeshPhysicalMaterial({
      color: frame.color, metalness: 1, roughness: frame.rough ?? 0.17,
      envMapIntensity: 1.5, clearcoat: 0.3, clearcoatRoughness: 0.2,
    });
  }
  const m = new THREE.MeshPhysicalMaterial({
    color: frame.tortoise ? '#ffffff' : frame.color,
    roughness: frame.rough ?? 0.2,
    metalness: 0,
    clearcoat: frame.matte ? 0 : 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: frame.matte ? 0.7 : 1.15,
    sheen: 0.2,
  });
  if (frame.tortoise) {
    m.map = tortoiseTexture(frame.tortoiseBase);
    m.map = m.map.clone();
    m.map.repeat.set(0.16, 0.16);
    m.map.needsUpdate = true;
  }
  if (frame.translucent) {
    m.transmission = 0.55;
    m.thickness = 0.8;
    m.ior = 1.5;
    m.attenuationColor = new THREE.Color(frame.color);
    m.attenuationDistance = 0.9;
  }
  return m;
}

function lensMaterial(lens, mask) {
  const base = {
    alphaMap: mask, transparent: true, depthWrite: false,
    side: THREE.DoubleSide,
  };
  if (lens.kind === 'mirror') {
    return new THREE.MeshPhysicalMaterial({
      ...base, color: lens.color, metalness: 0.95, roughness: 0.06,
      envMapIntensity: 1.7, opacity: 0.96, clearcoat: 1, clearcoatRoughness: 0.03,
    });
  }
  if (lens.kind === 'tint') {
    return new THREE.MeshPhysicalMaterial({
      ...base, map: lensGradientTexture(lens.color, lens.color2 || lens.color),
      color: '#ffffff', metalness: 0.15, roughness: 0.035,
      envMapIntensity: 1.6, opacity: lens.opacity ?? 0.9, clearcoat: 1, clearcoatRoughness: 0.02,
    });
  }
  // clear / blue-cut: near-invisible glass with an anti-reflective sheen
  return new THREE.MeshPhysicalMaterial({
    ...base, color: lens.color || '#e6f0f5', metalness: 0, roughness: 0,
    envMapIntensity: 2.4, opacity: lens.opacity ?? 0.2, clearcoat: 1, clearcoatRoughness: 0,
    iridescence: lens.kind === 'blue' ? 1 : 0.55, iridescenceIOR: 1.35,
    iridescenceThicknessRange: [120, 420],
  });
}

/* ---------- Geometry builders ---------- */

function pointsToShape(pts) {
  const s = new THREE.Shape();
  pts.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  return s;
}

function tubeAlong(points3, radius, mat, seg = 64, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points3.map((p) => new THREE.Vector3(...p)), closed, 'centripetal');
  return new THREE.Mesh(new THREE.TubeGeometry(curve, seg, radius, 10, closed), mat);
}

function extentAtY(pts, y, tol = 0.18) {
  let minX = Infinity, maxX = -Infinity;
  for (const [px, py] of pts) {
    if (Math.abs(py - y) < tol) {
      minX = Math.min(minX, px);
      maxX = Math.max(maxX, px);
    }
  }
  if (minX === Infinity) {
    // fall back to nearest point
    let best = pts[0];
    for (const p of pts) if (Math.abs(p[1] - y) < Math.abs(best[1] - y)) best = p;
    return [best[0], best[0]];
  }
  return [minX, maxX];
}

function acetateTemple(len, hHinge, hMid, hTip, thick, mat) {
  const N = 48;
  const bendStart = len * 0.74;
  const spine = [];
  for (let i = 0; i <= N; i++) {
    const u = (i / N) * len;
    const k = Math.max(0, (u - bendStart) / (len - bendStart));
    spine.push([u, -1.75 * Math.pow(k, 1.7) - 0.0]);
  }
  const hAt = (u) => {
    const f = u / len;
    return f < 0.7 ? hHinge + (hMid - hHinge) * (f / 0.7) : hMid + (hTip - hMid) * ((f - 0.7) / 0.3);
  };
  const top = [], bot = [];
  spine.forEach(([u, y], i) => {
    const nx = spine[Math.min(N, i + 1)], pv = spine[Math.max(0, i - 1)];
    let tx = nx[0] - pv[0], ty = nx[1] - pv[1];
    const l = Math.hypot(tx, ty) || 1;
    tx /= l; ty /= l;
    const h = hAt(u) / 2;
    top.push([u - ty * h, y + tx * h]);
    bot.push([u + ty * h, y - tx * h]);
  });
  const shape = pointsToShape([...top, ...bot.reverse()].map(([x, y]) => [x, y]));
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: thick, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 4, curveSegments: 4,
  });
  geo.translate(0, 0, -thick / 2);
  geo.rotateY(Math.PI / 2); // shape-x -> world -z, extrusion -> world x
  return new THREE.Mesh(geo, mat);
}

/* ---------- Public: build one pair of glasses ---------- */

export function buildGlasses(cfg) {
  const def = STYLES[cfg.style];
  const metal = cfg.frame.type === 'metal';
  const scale = cfg.scale ?? 1;
  const root = new THREE.Group();
  const disposables = [];
  const track = (o) => (disposables.push(o), o);

  const lensPts = smooth(resample(def.outline(), 200), 1);
  const xs = lensPts.map((p) => p[0]);
  const ys = lensPts.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const rim = cfg.frame.rim ?? def.rim;
  const gap = metal ? 2.35 : 1.15 + 2 * rim;
  const cx = -minX + gap / 2; // lens centre offset from the face midline
  const depth = def.depth;

  const fMat = track(frameMaterial(cfg.frame));
  const silver = track(new THREE.MeshPhysicalMaterial({ color: '#e7e7ea', metalness: 1, roughness: 0.18, envMapIntensity: 1.5 }));

  const sides = [1, -1].map((sgn) => {
    const g = new THREE.Group();
    g.position.x = sgn * cx;
    g.scale.x = sgn; // mirror the left lens — three flips winding automatically
    root.add(g);
    return g;
  });

  /* Frame ring */
  let outerPts = lensPts;
  if (metal) {
    const ring = tubeAlong(lensPts.map(([x, y]) => [x, y, 0]), cfg.frame.wire ?? 0.07, fMat, 220, true);
    sides.forEach((g) => g.add(ring.clone()));
    track(ring.geometry);
  } else {
    outerPts = smooth(
      offsetOutline(lensPts, ([, y]) => rim * (1 + (def.brow ?? 0.3) * Math.max(0, y / maxY))),
      3,
    );
    const shape = pointsToShape(outerPts);
    shape.holes.push(new THREE.Path(lensPts.slice().reverse().map(([x, y]) => new THREE.Vector2(x, y))));
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.1, bevelOffset: 0, bevelSegments: 7, curveSegments: 1, steps: 1,
    });
    geo.translate(0, 0, -depth / 2);
    track(geo);
    const frame = new THREE.Mesh(geo, fMat);
    sides.forEach((g) => g.add(frame.clone()));
  }

  /* Lenses (curved, masked to the true outline) */
  const lensOutline = offsetOutline(lensPts, 0.1);
  const box = {
    minX: Math.min(...lensOutline.map((p) => p[0])), maxX: Math.max(...lensOutline.map((p) => p[0])),
    minY: Math.min(...lensOutline.map((p) => p[1])), maxY: Math.max(...lensOutline.map((p) => p[1])),
  };
  const lw = box.maxX - box.minX, lh = box.maxY - box.minY;
  const lensGeo = track(new THREE.PlaneGeometry(lw, lh, 40, 40));
  const pos = lensGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    pos.setZ(i, 0.05 - (x * x) / 34 - (y * y) / 60);
  }
  lensGeo.computeVertexNormals();
  const mask = track(maskTexture(lensOutline, box));
  const lMat = track(lensMaterial(cfg.lens, mask));
  sides.forEach((g) => {
    const m = new THREE.Mesh(lensGeo, lMat);
    m.position.set((box.minX + box.maxX) / 2, (box.minY + box.maxY) / 2, 0);
    m.renderOrder = 2;
    g.add(m);
  });

  /* Bridge */
  const innerAt = (y) => cx + extentAtY(outerPts, y)[0];
  if (!metal) {
    const yt = (def.bridgeTop ?? 0.5) * maxY * 0.9;
    const yb = yt - (def.bridgeH ?? 0.8);
    const xi = innerAt(yt) + 0.25;
    const xb = innerAt(yb) + 0.25;
    const s = new THREE.Shape();
    s.moveTo(-xi, yt);
    s.quadraticCurveTo(0, yt + 0.28, xi, yt);
    s.lineTo(xb, yb);
    s.quadraticCurveTo(0, yb + 0.62, -xb, yb);
    s.closePath();
    const bd = depth * 0.82;
    const geo = track(new THREE.ExtrudeGeometry(s, { depth: bd, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 4, curveSegments: 16 }));
    geo.translate(0, 0, -bd / 2);
    root.add(new THREE.Mesh(geo, fMat));
  } else {
    const yTop = maxY * 0.8;
    const xTop = innerAt(yTop);
    root.add(tubeAlong([[-xTop, yTop, 0], [-xTop * 0.5, yTop + 0.16, 0.02], [0, yTop + 0.2, 0.03], [xTop * 0.5, yTop + 0.16, 0.02], [xTop, yTop, 0]], 0.07, fMat, 32));
    const yN = maxY * 0.28;
    const xN = innerAt(yN);
    root.add(tubeAlong([[-xN, yN, 0], [-xN * 0.45, yN + 0.42, 0.05], [0, yN + 0.5, 0.08], [xN * 0.45, yN + 0.42, 0.05], [xN, yN, 0]], 0.065, fMat, 32));
    // brow-bar drop
    [-1, 1].forEach((sg) => {
      const xa = innerAt(yTop - 0.2);
      root.add(tubeAlong([[sg * xa, yTop, 0], [sg * xa * 0.995, (yTop + yN) / 2 + 0.3, 0.04], [sg * innerAt(yN), yN, 0]], 0.05, fMat, 16));
    });
    // silicone nose pads
    const padMat = track(new THREE.MeshPhysicalMaterial({ color: '#e8eef0', roughness: 0.25, transmission: 0.4, thickness: 0.2, clearcoat: 1 }));
    [-1, 1].forEach((sg) => {
      const px = sg * (innerAt(-maxY * 0.15) + 0.1);
      const padGeo = track(new THREE.SphereGeometry(0.34, 20, 16));
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.scale.set(0.42, 1.05, 0.28);
      pad.position.set(px, -maxY * 0.18, -0.38);
      pad.rotation.z = sg * -0.22;
      root.add(pad);
      root.add(tubeAlong([[sg * innerAt(maxY * 0.02), maxY * 0.02, 0], [px * 1.0, -maxY * 0.05, -0.2], [px, -maxY * 0.18, -0.38]], 0.032, fMat, 12));
    });
  }

  /* Rivets (Wayfarer / acetate signature) */
  if (cfg.rivets) {
    sides.forEach((g) => {
      [0.62, 0.8].forEach((f, i) => {
        const idx = Math.round(outerPts.length * (0.07 + i * 0.045));
        const p = outerPts[idx];
        const r = new THREE.Mesh(track(new THREE.SphereGeometry(0.12, 18, 14)), silver);
        const q = [p[0] * 0.94, p[1] * 0.94];
        r.position.set(q[0], q[1], depth / 2 + 0.07);
        r.scale.z = 0.42;
        g.add(r);
      });
    });
  }

  /* Temples */
  const templeLen = cfg.templeLen ?? 14;
  [1, -1].forEach((sg) => {
    const ty = (def.templeY ?? 0.5) * maxY * 0.6;
    const hinge = cx + extentAtY(outerPts, ty)[1] + (metal ? 0.02 : -0.02);
    const g = new THREE.Group();
    g.position.set(sg * hinge, ty, -depth / 2 + 0.05);
    if (metal) {
      const wire = tubeAlong([[0, 0, 0], [0, 0, -templeLen * 0.62], [0, -0.05, -templeLen * 0.8], [0, -0.55, -templeLen * 0.93], [0, -1.75, -templeLen + 0.45]], 0.055, fMat, 48);
      g.add(wire);
      const sleeveMat = track(new THREE.MeshPhysicalMaterial({ color: cfg.frame.sleeve || '#2b2418', roughness: 0.3, clearcoat: 0.7 }));
      const sleeve = tubeAlong([[0, -0.4, -templeLen * 0.9], [0, -0.9, -templeLen * 0.96], [0, -1.75, -templeLen + 0.45]], 0.088, sleeveMat, 24);
      g.add(sleeve);
      const hingeBlock = new THREE.Mesh(track(new THREE.BoxGeometry(0.2, 0.2, 0.55)), fMat);
      hingeBlock.position.z = -0.1;
      g.add(hingeBlock);
    } else {
      const hh = Math.min(0.82, (def.templeY ? 0.62 : 0.6) * (cfg.templeScale ?? 1));
      const t = acetateTemple(templeLen, hh, 0.4, 0.34, 0.3, fMat);
      track(t.geometry);
      g.add(t);
      const pin = new THREE.Mesh(track(new THREE.CylinderGeometry(0.05, 0.05, 0.4, 10)), silver);
      pin.position.set(0, 0, -0.18);
      g.add(pin);
    }
    g.rotation.y = sg * (cfg.templeSplay ?? 0.045);
    root.add(g);
  });

  root.scale.setScalar(scale);
  root.userData.dispose = () => {
    disposables.forEach((d) => d.dispose && d.dispose());
    if (fMat.map) fMat.map.dispose();
  };
  // The camera looks along -z; centre the pair so it pivots around its middle.
  const holder = new THREE.Group();
  root.position.z = (templeLen * 0.5) * scale;
  holder.add(root);
  holder.userData.dispose = root.userData.dispose;
  return holder;
}

/* ---------- A contact lens in a blister, for the contact-lens product ---------- */

export function buildContactLens() {
  const g = new THREE.Group();
  const shell = new THREE.MeshPhysicalMaterial({ color: '#4d84a6', roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1, transparent: true, opacity: 0.96 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 4.7, 0.6, 96), shell);
  g.add(base);
  const well = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 0.14, 96),
    new THREE.MeshPhysicalMaterial({ color: '#d9eef7', roughness: 0.04, clearcoat: 1, transparent: true, opacity: 0.9 }));
  well.position.y = 0.33;
  g.add(well);
  const R = 2.9, th = 0.5;
  const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 48, 0, TAU, 0, th),
    new THREE.MeshPhysicalMaterial({ color: '#f2fbff', roughness: 0, metalness: 0, clearcoat: 1, envMapIntensity: 3, transparent: true, opacity: 0.6, side: THREE.DoubleSide, iridescence: 0.7, iridescenceIOR: 1.3 }));
  dome.position.y = 0.4 - R * Math.cos(th) + 0.5;
  g.add(dome);
  const rimR = R * Math.sin(th);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(rimR, 0.1, 14, 128), new THREE.MeshPhysicalMaterial({ color: '#2f6f9a', roughness: 0.15, metalness: 0.1, clearcoat: 1 }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = dome.position.y + R * Math.cos(th);
  g.add(ring);
  const foil = new THREE.Mesh(new THREE.CylinderGeometry(4.45, 4.45, 0.06, 96, 1, false, 0, TAU * 0.7),
    new THREE.MeshPhysicalMaterial({ color: '#c9ccd2', metalness: 1, roughness: 0.25, envMapIntensity: 1.4 }));
  foil.position.y = 0.36;
  g.add(foil);
  g.userData.dispose = () => {};
  return g;
}
