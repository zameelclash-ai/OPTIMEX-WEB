import React from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { STORE_LOCATIONS } from '../data/products';
import { useStore } from '../context/CartContext';

export const StoreLocator = () => {
  const { setIsExamModalOpen, setSelectedBranchForExam } = useStore();

  const book = (id) => {
    setSelectedBranchForExam(id);
    setIsExamModalOpen(true);
  };

  return (
    <section id="store-locator" className="section section--dark">
      <div className="wrap">
        <div className="section__head section__head--center">
          <Reveal><p className="eyebrow"><i className="dot dot--ok" style={{ display: 'inline-block' }} /> Kerala showrooms &amp; eye clinics</p></Reveal>
          <Reveal delay={90}><h2 className="h2" style={{ color: '#f6f0e1' }}>Visit Our Showrooms<br /><em>in Kerala</em></h2></Reveal>
          <Reveal delay={160}><p className="lede" style={{ color: 'rgba(239,233,219,.68)' }}>Walk into our stores in Vadakkencherry or Alathur for computerized refraction eye tests, Ray-Ban &amp; branded eyewear, and 20-minute rapid spectacle delivery.</p></Reveal>
        </div>

        <div className="stores">
          {STORE_LOCATIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 140}>
              <article className="store">
                <div className="store__img">
                  <img src={s.image} alt={`${s.name} showroom`} loading="lazy" />
                  <span className="store__rate"><Icon name="star" size={14} fill="currentColor" stroke={0} /> {s.rating} · {s.reviewsCount} Google Reviews</span>
                  <div className="store__title">
                    <small>{s.town} Showroom</small>
                    <h3>{s.name}</h3>
                  </div>
                </div>

                <div className="store__body">
                  <div className="fact fact--ok"><Icon name="clock" size={18} /><b style={{ color: 'inherit' }}>{s.statusText}</b></div>
                  <div className="fact"><Icon name="pin" size={18} /><div><b>{s.address}</b><small>{s.district}, {s.state}</small></div></div>
                  <div className="incharge"><small>Clinical in-charge</small>{s.optometrist}</div>

                  <div>
                    <ul className="services">
                      {s.highlights.map((h) => (
                        <li key={h}><Icon name="check" size={15} /> {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="store__actions">
                    <div className="row">
                      <a className="btn btn--light" href={s.mapUrl} target="_blank" rel="noreferrer"><Icon name="pin" size={15} /> Directions <Icon name="external" size={14} /></a>
                      <a className="btn btn--wa" href={`https://wa.me/${s.whatsappNumber}?text=Hello%20${encodeURIComponent(s.name)}%2C%20I%20want%20to%20inquire%20about%20spectacles`} target="_blank" rel="noreferrer"><Icon name="chat" size={15} /> WhatsApp</a>
                      <a className="btn btn--outline-light" href={`tel:${s.phone}`}><Icon name="phone" size={15} /> Call</a>
                    </div>
                    <button className="btn btn--gold btn--block" onClick={() => book(s.id)}><Icon name="calendar" size={16} /> Book Computerized Eye Exam at {s.town}</button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
