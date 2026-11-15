import React from 'react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';
import { IconClose, IconExternal } from './Icons';

export const MapChooserModal = () => {
  const { isMapModalOpen, setIsMapModalOpen } = useStore();
  if (!isMapModalOpen) return null;
  const close = () => setIsMapModalOpen(false);

  return (
    <div className="modal" onClick={close} role="dialog" aria-modal="true" aria-label="Choose a store">
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={close} aria-label="Close"><IconClose size={18} /></button>
        <div className="modal__head">
          <span className="eyebrow eyebrow--red">Directions</span>
          <h3>Which store?</h3>
        </div>
        <div className="modal__body">
          <div className="map-list">
            {STORE_LOCATIONS.map((s) => (
              <div className="map-item" key={s.id}>
                <div>
                  <h4>{s.town}</h4>
                  <p>{s.address}</p>
                </div>
                <a className="btn btn--ink btn--sm" href={s.mapUrl} target="_blank" rel="noreferrer">
                  Open map <IconExternal size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
