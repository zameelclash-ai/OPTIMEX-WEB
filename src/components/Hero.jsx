import React from 'react';
import { useStore } from '../context/CartContext';
import { IconArrow, IconWhatsApp } from './Icons';
import { waLink } from '../lib/site';

const FACTS = [
  { big: 'Computerised', small: 'eye testing in-store' },
  { big: 'From ₹999', small: 'frames, lenses & sunglasses' },
  { big: 'Same day', small: 'lens fitting in our clinic' },
  { big: 'Two stores', small: 'Alathur & Vadakkencherry' },
];

export const Hero = () => {
  const { setIsExamModalOpen } = useStore();

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <span className="eyebrow eyebrow--red">Opticians · Alathur &amp; Vadakkencherry</span>
            <h1 className="h-display hero__title">
              See clearly.<br />
              Look like <em>yourself.</em>
            </h1>
            <p className="lead">
              A proper eye test on our computerised equipment, honest advice on lenses,
              and frames for every budget — from your neighbourhood opticians in Palakkad.
            </p>
            <div className="hero__ctas">
              <button className="btn btn--red" onClick={() => setIsExamModalOpen(true)}>
                Book an eye test <IconArrow size={18} className="arr" />
              </button>
              <a className="btn btn--line" href={waLink('Hello Optimex Opticals, I would like to ask about frames and an eye test.')} target="_blank" rel="noreferrer">
                <IconWhatsApp size={18} /> Message us
              </a>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__photo">
              <img src="/images/optimex-shop-front.webp" alt="Optimex Opticals shop front" />
            </div>
            <p className="hero__note">
              <strong>Book on WhatsApp</strong>
              Pick a time and we'll keep a slot ready for you.
            </p>
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
