import React from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

const CATEGORIES = [
  { id: 'eyeglasses', tag: '01', title: 'Eye Glasses Collection', subtitle: 'Computer & Single Vision', image: 'opt-03' },
  { id: 'sunglasses', tag: '02', title: 'Polarized Sunglasses', subtitle: 'Polarized & 100% UV Protection', image: 'rb-02' },
  { id: 'contact-lenses', tag: '03', title: 'Contact Lenses Care', subtitle: 'Daily & Monthly Moisture', image: 'cont-01' },
  { id: 'all', tag: '04', title: 'Designer Optical Frames', subtitle: 'Ray-Ban, Oakley, Vogue', image: 'rb-01' },
  { id: 'eyeglasses', tag: '05', title: "Men's Spectacles", subtitle: 'Bold Acetate & Titanium', image: 'oak-01' },
  { id: 'eyeglasses', tag: '06', title: "Women's Eyewear", subtitle: 'Cat-Eye & Elegant Curves', image: 'vog-01' },
  { id: 'eyeglasses', tag: '07', title: 'Flexible Kids Glasses', subtitle: 'Unbreakable Light Weight', image: 'kids' },
  { id: 'eyeglasses', tag: '08', title: 'Multifocal Lenses', subtitle: 'Seamless Distance & Reading', image: 'opt-01' },
];

export const CategoryGrid = ({ onSelectCategory }) => {
  const pick = (id) => {
    if (onSelectCategory) onSelectCategory(id);
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="section section--sand">
      <div className="wrap">
        <div className="section__head section__head--split">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>Featured categories</p>
            <h2 className="h2">Eyewear &amp; Clinic<br /><em>Collections</em></h2>
          </Reveal>
          <Reveal delay={120}><p className="lede">Eight ways into the collection — from precision single-vision lenses to bold designer acetate, all fitted in about twenty minutes.</p></Reveal>
        </div>

        <div className="cats">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.tag} delay={(i % 4) * 90}>
              <button className="cat group" onClick={() => pick(c.id)}>
                <div className="pstage">
                  <img src={`/images/products/${c.image}-a.png`} alt={c.title} loading="lazy" />
                  <img className="alt" src={`/images/products/${c.image}-b.png`} alt="" loading="lazy" />
                </div>
                <div className="cat__meta">
                  <div>
                    <small>COLLECTION {c.tag}</small>
                    <b>{c.title}</b>
                    <span>{c.subtitle}</span>
                  </div>
                  <span className="cat__arrow"><Icon name="arrow-right" size={17} /></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
