import React from 'react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';
import { IconArrow, IconWhatsApp } from './Icons';
import { waLink } from '../lib/site';

const FACTS = [
  { big: '10+ years', small: 'serving Alathur & Vadakkencherry' },
  { big: 'Computerised', small: 'eye testing in-store' },
  { big: 'From ₹999', small: 'frames, lenses & sunglasses' },
  { big: 'Same day', small: 'lens fitting in our clinic' },
];

export const Hero = () => {
  const { setIsExamModalOpen } = useStore();

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <span className="eyebrow eyebrow--red hero__in" style={{ '--d': 0 }}>Opticians · 10+ years</span>
            <h1 className="h-display hero__title">
              <span className="line"><span style={{ '--d': 1 }}>Eyewear,</span></span>
              <span className="line"><span style={{ '--d': 2 }}>fitted <em>with care.</em></span></span>
            </h1>
            <p className="lead hero__in" style={{ '--d': 4 }}>
              A careful eye test, honest advice on lenses and frames for every budget —
              from the opticians Alathur and Vadakkencherry have trusted for over ten years.
            </p>
            <div className="hero__ctas hero__in" style={{ '--d': 5 }}>
              <button className="btn btn--red" onClick={() => setIsExamModalOpen(true)}>
                Book an eye test <IconArrow size={18} className="arr" />
              </button>
              <a
                className="btn btn--line"
                href={waLink('Hello Optimex Opticals, I would like to ask about frames and an eye test.')}
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsApp size={18} /> WhatsApp us
              </a>
            </div>
          </div>

          <div>
            <div className="hero__sign mask-in">
              <img src="/images/optimex-sign.jpg" alt="Optimex Opticals — Computerised Eye Clinic signboard" />
            </div>
            <div className="hero__panel hero__in" style={{ '--d': 7 }}>
              {STORE_LOCATIONS.map((s) => (
                <div className="hero__panel-row" key={s.id}>
                  <div>
                    <b>{s.town}</b>
                    <span>{s.hours}</span>
                  </div>
                  <a href={s.mapUrl} target="_blank" rel="noreferrer">
                    Directions <IconArrow size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="facts">
        <div className="wrap facts__grid">
          {FACTS.map((f, i) => (
            <div className="fact" key={f.big} data-reveal style={{ '--i': i }}>
              <b>{f.big}</b>
              <span>{f.small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
