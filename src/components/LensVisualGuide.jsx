import React, { useState } from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { LENS_COMPARISONS } from '../data/products';
import { useStore } from '../context/CartContext';

// Live, illustrated "what you see" scenes — no stock photos needed.
const SCENES = {
  'anti-glare': {
    with: {
      bg: `radial-gradient(circle at 28% 52%, #fff7dc 0 1.6%, rgba(255,240,200,.35) 3%, transparent 6%), radial-gradient(circle at 72% 52%, #fff7dc 0 1.6%, rgba(255,240,200,.35) 3%, transparent 6%), linear-gradient(#060a16 0%, #0b1430 56%, #1b2137 57%, #090c17 100%)`,
      fx: 'none',
    },
    without: {
      bg: `linear-gradient(#060a16 0%, #0b1430 56%, #1b2137 57%, #090c17 100%)`,
      fx: `radial-gradient(circle at 28% 52%, rgba(255,246,210,.98) 0 4%, rgba(255,224,150,.5) 13%, rgba(255,214,120,.18) 30%, transparent 52%), radial-gradient(circle at 72% 52%, rgba(255,246,210,.98) 0 4%, rgba(255,224,150,.5) 13%, rgba(255,214,120,.18) 30%, transparent 52%), repeating-linear-gradient(90deg, transparent 0 17px, rgba(255,232,170,.12) 18px 19px), linear-gradient(0deg, transparent 40%, rgba(255,230,160,.22) 52%, transparent 62%)`,
      fxf: 'blur(5px)',
    },
    wLabel: 'Crisp headlights', oLabel: 'Starburst glare',
  },
  'blue-cut': {
    with: { bg: `radial-gradient(ellipse at 50% 40%, #f6ecd8 0, #e6d8bc 52%, #cbb895 100%)`, fx: `linear-gradient(180deg, transparent 55%, rgba(120,90,40,.18))` },
    without: {
      bg: `radial-gradient(ellipse at 50% 40%, #ffffff 0, #a9ccff 34%, #3d7bff 100%)`,
      fx: `repeating-linear-gradient(0deg, rgba(255,255,255,.16) 0 2px, transparent 2px 6px), radial-gradient(circle at 50% 40%, rgba(255,255,255,.9), transparent 45%)`,
    },
    wLabel: 'Calm warm tone', oLabel: 'Harsh blue light',
  },
  'uv-protection': {
    with: {
      bg: `radial-gradient(circle at 74% 24%, #fff0bd 0 4%, rgba(255,212,120,.5) 9%, transparent 22%), linear-gradient(#4f8cc4 0%, #8fbbdb 54%, #c2ae78 55%, #7d6e48 100%)`,
      fx: `linear-gradient(0deg, rgba(20,16,8,.3), rgba(20,16,8,.3))`,
    },
    without: {
      bg: `linear-gradient(#cfe4f4 0%, #f1f6f8 54%, #f4ecd2 55%, #fff 100%)`,
      fx: `radial-gradient(circle at 74% 24%, #fff 0 9%, rgba(255,255,255,.9) 24%, rgba(255,255,255,.5) 52%, transparent 82%)`,
    },
    wLabel: 'Balanced, protected', oLabel: 'Squinting glare',
  },
  photogray: {
    with: {
      bg: `radial-gradient(circle at 74% 24%, #fff0bd 0 4%, rgba(255,212,120,.5) 9%, transparent 22%), linear-gradient(#5b95cb 0%, #9cc4e0 54%, #c6b27c 55%, #85764f 100%)`,
      fx: `linear-gradient(0deg, rgba(34,36,40,.62), rgba(34,36,40,.62))`,
    },
    without: {
      bg: `linear-gradient(#cfe4f4 0%, #f1f6f8 54%, #f4ecd2 55%, #fff 100%)`,
      fx: `radial-gradient(circle at 74% 24%, #fff 0 9%, rgba(255,255,255,.9) 24%, rgba(255,255,255,.5) 52%, transparent 82%)`,
    },
    wLabel: 'Auto-darkened', oLabel: 'Needs sunglasses',
  },
};

const ICONS = ['eye', 'monitor', 'sun', 'sparkles'];

const Pane = ({ scene, mode, label, on }) => {
  const s = scene[mode];
  return (
    <div className={`scene ${on ? 'is-on' : ''} ${mode === 'with' ? 'is-with' : ''}`} style={{ '--bg': s.bg, '--fx': s.fx, '--fxf': s.fxf || 'none' }}>
      <div className="scene__bg" />
      <div className="scene__fx" />
      <div className="scene__lens" />
      <div className="scene__tag">
        <span className="k">{mode === 'with' ? 'With coating' : 'Plain uncoated'}</span>
        <span>{label}</span>
      </div>
    </div>
  );
};


export const LensVisualGuide = () => {
  const { setIsExamModalOpen } = useStore();
  const [tab, setTab] = useState(0);
  const [protectedView, setProtected] = useState(true);
  const cur = LENS_COMPARISONS[tab] || LENS_COMPARISONS[0];
  const scene = SCENES[cur.id] || SCENES['anti-glare'];

  const inquire = () => {
    const msg = `Hello Optimex Optical, I saw the "${cur.title}" (${cur.subtitle}) on your website. Could you tell me the pricing and availability for my prescription at your showroom?`;
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="lens-guide" className="section section--sand">
      <div className="wrap">
        <div className="section__head section__head--center">
          <Reveal><p className="eyebrow">Practical eyecare &amp; lens guide</p></Reveal>
          <Reveal delay={90}><h2 className="h2">Which Lenses Do<br /><em>Your Eyes Need?</em></h2></Reveal>
          <Reveal delay={160}><p className="lede">Real optical lens coating comparisons available with 20-minute rapid fitting at Vadakkencherry &amp; Alathur showrooms.</p></Reveal>
        </div>

        <Reveal className="tabs" style={{ justifyContent: 'center', marginBottom: 'clamp(36px, 5vw, 64px)' }}>
          {LENS_COMPARISONS.map((l, i) => (
            <button key={l.id} className={`tab ${tab === i ? 'is-on' : ''}`} onClick={() => { setTab(i); setProtected(true); }} style={{ display: 'inline-flex', gap: 10, alignItems: 'center' }}>
              <Icon name={ICONS[i]} size={15} /> {l.title}
            </button>
          ))}
        </Reveal>

        <div className="lens">
          <div className="lens__copy" key={cur.id}>
            <Reveal className="rec"><small>Recommended for</small><span>{cur.idealFor}</span></Reveal>
            <Reveal delay={60}>
              <span className="eyebrow">Optical benefit &amp; function</span>
              <h3 style={{ marginTop: 14 }}>{cur.title}</h3>
              <p className="sub">{cur.subtitle}</p>
              <p className="tag-line">{cur.tagline}</p>
            </Reveal>

            <div className="switch" role="group" aria-label="Compare">
              <button className={protectedView ? 'is-on' : ''} onClick={() => setProtected(true)}><Icon name="check" size={14} /> With coating</button>
              <button className={!protectedView ? 'is-on' : ''} onClick={() => setProtected(false)}>✕ Plain uncoated</button>
            </div>

            <div className="compare">
              <div className={`compare__row ${protectedView ? 'is-on' : ''}`}>
                <h5 style={{ color: 'var(--gold)' }}><Icon name="check" size={15} /> With {cur.title}</h5>
                <p>{cur.withFeature}</p>
              </div>
              <div className={`compare__row ${!protectedView ? 'is-on' : ''}`}>
                <h5>✕ Without coating (plain uncoated glass)</h5>
                <p>{cur.withoutFeature}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button className="btn btn--ghost" onClick={inquire}><Icon name="chat" size={16} /> Inquire on WhatsApp</button>
              <button className="btn btn--ink" onClick={() => setIsExamModalOpen(true)}>Book Eye Checkup <Icon name="arrow-right" size={16} /></button>
            </div>
            <p style={{ fontSize: '.8rem', color: 'var(--ink-2)', display: 'flex', gap: 10, alignItems: 'center' }}>
              <i className="dot" /> Same-day 20-minute lens fitting available at Vadakkencherry &amp; Alathur
            </p>
          </div>

          <Reveal className="scenes" delay={120}>
            <Pane scene={scene} mode="with" label={scene.wLabel} on={protectedView} />
            <Pane scene={scene} mode="without" label={scene.oLabel} on={!protectedView} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
