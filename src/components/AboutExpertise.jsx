import React from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { useStore } from '../context/CartContext';

const PROMISES = [
  { title: 'Competitive Pricing', desc: 'Transparent rates starting ₹999 on high-index lenses, branded frames & sunwear.' },
  { title: 'Personalized Eye Exams', desc: 'Comprehensive computerised refraction testing by certified optometrists.' },
  { title: '20-Min Rapid Fitting', desc: 'Same-day in-clinic lens edging and precise pupil distance fitting.' },
  { title: 'Tailored Lens Advice', desc: 'Anti-glare, blue-cut, progressive, and photogray guidance for your lifestyle.' },
];

const SHOWCASE = [
  { id: '01', title: 'Optimex Heritage', sub: 'Moscot Keyhole Acetate', tag: 'Vadakkencherry Clinic', img: 'showcase-moscot', speed: 0.03 },
  { id: '02', title: 'Retro Y2K Shades', sub: 'Amber HD Optics', tag: 'Alathur Clinic', img: 'showcase-amber', speed: 0.06 },
  { id: '03', title: 'Crystal Ruby Red', sub: 'Bold Executive Acetate', tag: 'Available in Showroom', img: 'showcase-ruby', speed: 0.04 },
];

export const AboutExpertise = () => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();

  return (
    <section id="about-us" className="section">
      <div className="wrap about">
        <div className="showcase">
          {SHOWCASE.map((c, i) => (
            <div key={c.id} className="showcase__col" data-speed={c.speed}>
              <Reveal delay={i * 140}>
                <figure className="group">
                  <div className="pstage pstage--tall">
                    <img src={`/images/products/${c.img}-a.png`} alt={`${c.title} — ${c.sub}`} loading="lazy" />
                    <span className="tag">{c.tag}</span>
                  </div>
                  <figcaption>
                    <small>Showcase {c.id}</small>
                    <b>{c.title}</b>
                    <span>{c.sub}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="about__copy">
          <Reveal><p className="eyebrow">Our clinical vision, your eye clarity</p></Reveal>
          <Reveal delay={80}>
            <h2 className="h2">Your Vision,<br /><em>Our Expertise</em></h2>
          </Reveal>
          <Reveal delay={140}><p style={{ fontFamily: 'var(--serif)', fontSize: '1.45rem', fontStyle: 'italic', lineHeight: 1.3 }}>Optimex Eye Stores &amp; Computerised Eye Clinics</p></Reveal>
          <Reveal delay={200}>
            <p>
              At Optimex Opticals, we are committed to delivering optical precision, enduring comfort, and personal style. Located in Vadakkencherry and Alathur, our clinics feature modern computerized auto-refractor testing, high-definition digital lens edging, and a curated selection of global and homegrown brands starting at ₹999.
            </p>
          </Reveal>

          <div className="promises">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} className="promise" delay={i * 90}>
                <i>0{i + 1}</i>
                <b>{p.title}</b>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button className="btn btn--ink" onClick={() => setIsExamModalOpen(true)}>Book a Clinic Eye Test <Icon name="arrow-right" size={16} /></button>
            <button className="btn btn--ghost" onClick={() => setIsMapModalOpen(true)}>Find Showrooms</button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
