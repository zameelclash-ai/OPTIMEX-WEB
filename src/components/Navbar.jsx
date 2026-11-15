import React, { useEffect, useState } from 'react';
import { useStore } from '../context/CartContext';
import { IconMenu, IconClose, IconPhone, IconPin, IconArrow } from './Icons';
import { SHOP_PHONE_DISPLAY, SHOP_PHONE_TEL, scrollToId } from '../lib/site';

const LINKS = [
  { label: 'Eyeglasses', category: 'eyeglasses' },
  { label: 'Sunglasses', category: 'sunglasses' },
  { label: 'Contact lenses', category: 'contact-lenses' },
  { label: 'Lens guide', target: 'lens-guide' },
  { label: 'Our stores', target: 'store-locator' },
];

export const Navbar = ({ setActiveCategory }) => {
  const { setIsExamModalOpen } = useStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (link) => {
    setOpen(false);
    if (link.category) {
      setActiveCategory(link.category);
      scrollToId('collection-section');
    } else {
      scrollToId(link.target);
    }
  };

  const book = () => {
    setOpen(false);
    setIsExamModalOpen(true);
  };

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="topbar__left">
            <span><IconPin size={14} /> Alathur &amp; Vadakkencherry</span>
            <span className="topbar__hide-sm">Computerised eye clinic</span>
          </div>
          <a className="topbar__right" href={`tel:${SHOP_PHONE_TEL}`}>
            <IconPhone size={14} /> {SHOP_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap">
          <div className="header__row">
            <a
              href="#top"
              className="header__logo"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img src="/images/optimex-official-logo.png" alt="Optimex Opticals — Computerised Eye Clinic" />
            </a>

            <nav className="nav" aria-label="Main">
              {LINKS.map((l) => (
                <button key={l.label} onClick={() => go(l)}>{l.label}</button>
              ))}
            </nav>

            <div className="header__actions">
              <a className="header__call" href={`tel:${SHOP_PHONE_TEL}`}>
                <IconPhone size={16} /> Call us
              </a>
              <button className="btn btn--red btn--sm header__book" onClick={book}>
                Book an eye test
              </button>
              <button
                className="header__menu"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <IconClose size={20} /> : <IconMenu size={20} />}
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
              <div className="drawer__cta">
                <a className="btn btn--line" href={`tel:${SHOP_PHONE_TEL}`}><IconPhone size={16} /> Call</a>
                <button className="btn btn--red" onClick={book}>Book eye test</button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
