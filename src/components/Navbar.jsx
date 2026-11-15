import React, { useEffect, useState } from 'react';
import { useStore } from '../context/CartContext';
import { IconMenu, IconClose, IconPhone, IconPin, IconArrow } from './Icons';
import { SHOP_PHONE_DISPLAY, SHOP_PHONE_TEL, scrollToId } from '../lib/site';

const LINKS = [
  { label: 'About', target: 'about' },
  { label: 'Eyeglasses', category: 'eyeglasses' },
  { label: 'Sunglasses', category: 'sunglasses' },
  { label: 'Lens guide', target: 'lens-guide' },
  { label: 'Stores', target: 'store-locator' },
];

export const Navbar = ({ setActiveCategory }) => {
  const { setIsExamModalOpen } = useStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (link) => {
    setOpen(false);
    if (link.category) {
      setActiveCategory(link.category);
      setTimeout(() => scrollToId('collection-section'), 0);
    } else {
      setTimeout(() => scrollToId(link.target), 0);
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span><IconPin size={13} /> Alathur · Vadakkencherry</span>
          <span className="topbar__wide">Computerised eye clinic · 10+ years</span>
          <a className="topbar__wide" href={`tel:${SHOP_PHONE_TEL}`}>
            <IconPhone size={13} /> {SHOP_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="header">
        <div className="wrap">
          <div className="header__row">
            <a
              href="#top"
              className="header__logo"
              onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img src="/images/optimex-official-logo.png" alt="Optimex Opticals — Computerised Eye Clinic" />
            </a>

            <nav className="nav" aria-label="Main">
              {LINKS.map((l) => (
                <button key={l.label} onClick={() => go(l)}>{l.label}</button>
              ))}
            </nav>

            <div className="header__actions">
              <button className="btn btn--red btn--sm header__book" onClick={() => setIsExamModalOpen(true)}>
                Book eye test
              </button>
              <button
                className="header__menu"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? 'Close' : 'Menu'} {open ? <IconClose size={20} /> : <IconMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="drawer">
            <div className="wrap">
              {LINKS.map((l) => (
                <button key={l.label} className="drawer__item" onClick={() => go(l)}>
                  {l.label} <IconArrow size={18} />
                </button>
              ))}
              <div className="drawer__meta">
                <a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE_DISPLAY}</a>
                <span>Alathur · Vadakkencherry</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
