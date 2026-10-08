import React, { useEffect, useState } from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';

const LINKS = [
  { id: 'eyeglasses', label: 'Eyeglasses', cat: true },
  { id: 'sunglasses', label: 'Sunglasses', cat: true },
  { id: 'contact-lenses', label: 'Contact Lenses', cat: true },
  { id: 'lens-guide', label: 'Lens Guide' },
  { id: 'store-locator', label: 'Showrooms' },
];

export const Navbar = ({ activeCategory, setActiveCategory }) => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (link) => {
    setOpen(false);
    if (link.cat) setActiveCategory(link.id);
    const el = document.getElementById(link.cat ? 'collection-section' : link.id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), open ? 250 : 0);
  };

  return (
    <>
      <header className={`nav ${stuck || open ? 'is-stuck' : ''}`}>
        <div className="wrap nav__bar">
          <button className="nav__logo" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Optimex Opticals — back to top">
            <img src="/images/optimex-official-logo.png" alt="Optimex Opticals & Computerised Eye Clinic" />
          </button>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => go(l)} className={l.cat && activeCategory === l.id ? 'is-active' : ''}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="nav__cta">
            <button className="btn btn--ghost btn--sm" onClick={() => setIsMapModalOpen(true)}>
              <Icon name="pin" size={15} /> Visit Now
            </button>
            <button className="btn btn--ink btn--sm" onClick={() => setIsExamModalOpen(true)}>
              <Icon name="calendar" size={15} /> Book Exam
            </button>
            <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              <Icon name={open ? 'x' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <button onClick={() => { setActiveCategory('all'); go({ id: 'collection-section' }); }}>All Collections</button>
        {LINKS.map((l) => (
          <button key={l.id} onClick={() => go(l)}>{l.label}</button>
        ))}
        <div className="drawer__foot">
          <button className="btn btn--ink" style={{ fontFamily: 'var(--sans)', fontSize: '.74rem', borderBottom: 0, padding: '16px 28px' }} onClick={() => { setOpen(false); setIsExamModalOpen(true); }}>
            <Icon name="calendar" size={16} /> Book Eye Exam
          </button>
          <button className="btn btn--ghost" style={{ fontFamily: 'var(--sans)', fontSize: '.74rem', padding: '16px 28px' }} onClick={() => { setOpen(false); setIsMapModalOpen(true); }}>
            <Icon name="pin" size={16} /> Visit Now (Maps)
          </button>
        </div>
      </div>
    </>
  );
};
