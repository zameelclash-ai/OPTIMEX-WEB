import React from 'react';
import { STORE_LOCATIONS } from '../data/products';
import { useStore } from '../context/CartContext';
import { IconPin, IconClock, IconPhone, IconCheck, IconWhatsApp, IconExternal } from './Icons';

export const StoreLocator = () => {
  const { setIsExamModalOpen, setSelectedBranchForExam } = useStore();

  const book = (id) => {
    setSelectedBranchForExam(id);
    setIsExamModalOpen(true);
  };

  return (
    <section className="section section--alt" id="store-locator">
      <div className="wrap">
        <div className="section__head">
          <div>
            <span className="eyebrow">Visit us</span>
            <h2 className="h-section">Two stores in <em>Palakkad.</em></h2>
          </div>
          <p className="lead">
            Same team, same standards, same prices at both. Come to whichever is closer.
          </p>
        </div>

        <div className="stores">
          {STORE_LOCATIONS.map((s) => (
            <article className="store" key={s.id}>
              <div className="store__img">
                <img src={s.image} alt={`${s.name} store`} loading="lazy" />
              </div>
              <div className="store__body">
                <div>
                  <div className="store__town">{s.district}</div>
                  <h3>{s.town}</h3>
                </div>

                <div className="store__rows">
                  <div><IconPin size={17} /><span>{s.address}</span></div>
                  <div><IconClock size={17} /><span>{s.hours}</span></div>
                  <div>
                    <IconPhone size={17} />
                    <a href={`tel:${s.phone.replace(/\s/g, '')}`}>{s.phone}</a>
                  </div>
                </div>

                <ul className="store__list">
                  {s.highlights.map((h) => (
                    <li key={h}><IconCheck size={15} /> {h}</li>
                  ))}
                </ul>

                <div className="store__actions">
                  <button className="btn btn--red btn--sm" onClick={() => book(s.id)}>Book eye test</button>
                  <a className="btn btn--line btn--sm" href={s.mapUrl} target="_blank" rel="noreferrer">
                    Directions <IconExternal size={15} />
                  </a>
                  <a
                    className="btn btn--line btn--sm"
                    href={`https://wa.me/${s.whatsappNumber}?text=${encodeURIComponent(`Hello Optimex Opticals ${s.town}, I have a question.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconWhatsApp size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-note">
          <span>Been to one of our stores? A short Google review really helps a local shop.</span>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {STORE_LOCATIONS.map((s) => (
              <a key={s.id} className="link" href={s.mapUrl} target="_blank" rel="noreferrer">
                Review {s.town} <IconExternal size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
