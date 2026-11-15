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
            <span className="eyebrow eyebrow--red">Opticians · 10+ years</span>
            <h1 className="h-display hero__title">
              Eyewear,<br />
              fitted <em>with care.</em>
            </h1>
            <p className="lead">
              A careful eye test, honest advice on lenses and frames for every budget —
              from the opticians Alathur and Vadakkencherry have trusted for over ten years.
            </p>
            <div className="hero__ctas">
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
            <div className="hero__sign">
              <img src="/images/optimex-sign.jpg" alt="Optimex Opticals — Computerised Eye Clinic signboard" />
            </div>
            <div className="hero__panel">
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
          {FACTS.map((f) => (
            <div className="fact" key={f.big}>
              <b>{f.big}</b>
              <span>{f.small}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
