import React from 'react';
import { Reveal, CountUp } from './Reveal';

const BRANDS = ['Ray-Ban', 'Oakley', 'Vogue Eyewear', 'Fastrack', 'Bausch + Lomb', 'Acuvue', 'Optimex Signature', 'Optimex Classics'];

export const Marquee = () => {
  const row = (
    <div className="marquee__item">
      {BRANDS.map((b) => (
        <React.Fragment key={b}>
          <span>{b}</span>
          <i />
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-label="Brands we carry">
      <div className="marquee__track">{row}{row}</div>
    </div>
  );
};

export const Stats = () => (
  <div className="wrap">
    <div className="stats">
      <Reveal className="stat"><b><CountUp to={20} />
        <sup>min</sup></b><span>Rapid in-clinic fitting</span></Reveal>
      <Reveal className="stat" delay={100}><b><span>₹</span><CountUp to={999} /></b><span>Lenses &amp; frames from</span></Reveal>
      <Reveal className="stat" delay={200}><b><CountUp to={2} /></b><span>Kerala showrooms</span></Reveal>
      <Reveal className="stat" delay={300}><b><CountUp to={100} /><sup>%</sup></b><span>UV400 protection</span></Reveal>
    </div>
  </div>
);
