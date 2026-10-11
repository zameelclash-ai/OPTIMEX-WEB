import React from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

const TIPS = [
  { icon: 'heart', title: 'The 20-20-20 Screen Rule', desc: 'Every 20 minutes looking at digital displays, gaze at an object 20 feet away for at least 20 seconds to relax ciliary eye muscles.' },
  { icon: 'sparkles', title: 'Microfiber Cleaning Only', desc: 'Rinse lenses with water before wiping with an optical microfiber cloth. Never use shirt fabric or rough paper tissues that cause micro-scratches.' },
  { icon: 'eye', title: 'Annual Eye Check-ups', desc: 'Vision powers drift gradually. Annual computerized checkups at Vadakkencherry or Alathur detect early astigmatism and retina strain.' },
  { icon: 'shield', title: 'Lifetime Frame Adjustments', desc: 'Walk into either of our Kerala clinics anytime for free ultrasonic sanitization, screw tightening, and silicone nose-pad adjustments.' },
];

export const CareGuide = () => (
  <section className="section section--dark" style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
    <div className="wrap">
      <div className="section__head">
        <Reveal delay={90}><h2 className="h2" style={{ color: '#f6f0e1' }}>Preserving Your Vision<br /><em>&amp; Lens Investment</em></h2></Reveal>
        <Reveal delay={160}><p className="lede" style={{ color: 'rgba(239,233,219,.68)' }}>Practices recommended by our optometrists to prevent screen fatigue and prolong frame durability.</p></Reveal>
      </div>
      <div className="care">
        {TIPS.map((t, i) => (
          <Reveal key={t.title} className="care__item" delay={i * 110}>
            <Icon name={t.icon} size={26} stroke={1.3} />
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
