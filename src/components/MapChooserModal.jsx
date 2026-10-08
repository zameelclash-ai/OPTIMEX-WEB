import React from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';
import { useScrollLock, useEscape } from './Reveal';
import { STORE_LOCATIONS } from '../data/products';

export const MapChooserModal = () => {
  const { isMapModalOpen, setIsMapModalOpen } = useStore();
  const close = () => setIsMapModalOpen(false);
  useScrollLock(isMapModalOpen);
  useEscape(isMapModalOpen, close);
  if (!isMapModalOpen) return null;

  return (
    <div className="modal" onClick={close} role="dialog" aria-modal="true" aria-label="Choose a showroom">
      <div className="modal__panel sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={close} aria-label="Close"><Icon name="x" size={18} /></button>
        <div className="sheet__head">
          <span className="eyebrow">Find our Kerala showrooms</span>
          <h2>Choose Store for Google Maps Directions</h2>
        </div>
        <div className="sheet__body">
          <p style={{ color: 'var(--ink-2)', fontWeight: 300 }}>Select your nearest Optimex Optical branch to launch GPS route navigation on Google Maps or contact directly:</p>
          {STORE_LOCATIONS.map((s) => (
            <div className="mapopt" key={s.id}>
              <div>
                <h3>{s.name}</h3>
                <p style={{ marginTop: 8 }}>{s.address}</p>
                <p style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 10, color: 'var(--ink-2)' }}>
                  <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={14} /> {s.statusText}</span>
                  <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--gold)', fontWeight: 600 }}><Icon name="star" size={14} fill="currentColor" stroke={0} /> {s.rating} ({s.reviewsCount} reviews)</span>
                </p>
              </div>
              <div className="row">
                <a className="btn btn--ink btn--sm" href={s.mapUrl} target="_blank" rel="noreferrer" onClick={close}><Icon name="pin" size={14} /> Open in Maps <Icon name="external" size={13} /></a>
                <a className="btn btn--wa btn--sm" href={`https://wa.me/${s.whatsappNumber}`} target="_blank" rel="noreferrer"><Icon name="chat" size={14} /> WhatsApp</a>
                <a className="btn btn--ghost btn--sm" href={`tel:${s.phone}`}><Icon name="phone" size={14} /> Call</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
