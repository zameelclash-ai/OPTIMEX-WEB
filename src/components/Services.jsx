import React from 'react';
import { useStore } from '../context/CartContext';
import { IconArrow } from './Icons';
import { scrollToId } from '../lib/site';

export const Services = ({ setActiveCategory }) => {
  const { setIsExamModalOpen } = useStore();

  const openCategory = (cat) => {
    setActiveCategory(cat);
    scrollToId('collection-section');
  };

  const items = [
    {
      title: 'Eye testing',
      text: 'Computerised refraction followed by a careful manual check, so your new power is right the first time.',
      action: () => setIsExamModalOpen(true),
      cta: 'Book a test',
    },
    {
      title: 'Spectacles',
      text: 'Frames for men, women and children, with single-vision, bifocal and progressive lenses edged in our clinic.',
      action: () => openCategory('eyeglasses'),
      cta: 'See frames',
    },
    {
      title: 'Sunglasses',
      text: 'UV-protected and polarised sunglasses, including prescription sunglasses for riders and drivers.',
      action: () => openCategory('sunglasses'),
      cta: 'See sunglasses',
    },
    {
      title: 'Contact lenses',
      text: 'Daily and monthly lenses, trial pairs, solutions, and guidance on wearing them for the first time.',
      action: () => openCategory('contact-lenses'),
      cta: 'See lenses',
    },
  ];

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section__head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="h-section">Everything for your eyes, <em>under one roof.</em></h2>
          </div>
          <p className="lead">
            Most people come in for one thing and leave with the whole problem solved —
            test, lenses and frame, fitted and adjusted before you go home.
          </p>
        </div>

        <div className="services">
          {items.map((it, i) => (
            <button className="service" key={it.title} onClick={it.action}>
              <span className="service__no">0{i + 1}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <span className="service__go" aria-hidden="true"><IconArrow size={18} /></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
