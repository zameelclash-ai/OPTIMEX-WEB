import React, { useEffect, useRef, useState } from 'react';
import { HERO_PRESETS } from '../three/presets';

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
}

/** Realistic, physically-lit 3D eyewear that rotates and morphs between iconic frame shapes. */
export const SunglassesMatrixCanvas = () => {
  const host = useRef(null);
  const api = useRef(null);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!hasWebGL()) return undefined;
    let dead = false;
    let inst = null;
    import('../three/studio.js')
      .then((m) => {
        if (dead || !host.current) return;
        inst = m.mountHero(host.current, { onChange: setActive });
        api.current = inst;
        setReady(true);
      })
      .catch(() => {});
    return () => {
      dead = true;
      if (inst) inst.destroy();
      api.current = null;
    };
  }, []);

  const choose = (i) => {
    if (!api.current) return;
    api.current.pauseAuto();
    api.current.goTo(i);
  };

  const current = HERO_PRESETS[active];

  return (
    <div className="hero__stage">
      <div ref={host} className={`hero3d ${ready ? 'is-ready' : ''}`}>
        <img className="hero3d__poster" src="/images/products/rb-01-a.png" alt="Gloss black Wayfarer sunglasses" />
      </div>
      <div className="hero__caption" aria-live="polite">
        <b key={current.id}>{current.label}</b>
        <span>{current.sub}</span>
      </div>
      <div className="hero__picker" role="tablist" aria-label="Frame shapes">
        {HERO_PRESETS.map((p, i) => (
          <button key={p.id} role="tab" aria-selected={active === i} className={`pick ${active === i ? 'is-on' : ''}`} onClick={() => choose(i)}>
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};
