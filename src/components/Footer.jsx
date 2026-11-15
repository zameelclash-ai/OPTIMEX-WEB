import React from 'react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';
import { IconInstagram, IconArrow } from './Icons';
import { SHOP_PHONE_DISPLAY, SHOP_PHONE_TEL, waLink, scrollToId } from '../lib/site';

export const Footer = ({ setActiveCategory }) => {
  const { setIsExamModalOpen } = useStore();
  const year = new Date().getFullYear();

  const cat = (c) => {
    setActiveCategory(c);
    scrollToId('collection-section');
  };

  return (
    <>
      <div className="offer">
        <div className="wrap">
          <div>
            <h3>Follow us on Instagram, get up to 22% off.</h3>
            <p>Show us that you follow our page when you visit either store and we'll apply the discount to your order.</p>
          </div>
          <a className="btn" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <IconInstagram size={18} /> Follow us <IconArrow size={16} className="arr" />
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div>
              <span className="footer__logo">
                <img src="/images/optimex-official-logo.png" alt="Optimex Opticals" />
              </span>
              <p style={{ marginTop: 18, maxWidth: 320 }}>
                Opticians and computerised eye clinic serving Alathur, Vadakkencherry and nearby towns.
              </p>
            </div>

            <div>
              <h4>Shop</h4>
              <ul>
                <li><button onClick={() => cat('eyeglasses')}>Eyeglasses</button></li>
                <li><button onClick={() => cat('sunglasses')}>Sunglasses</button></li>
                <li><button onClick={() => cat('contact-lenses')}>Contact lenses</button></li>
                <li><button onClick={() => scrollToId('lens-guide')}>Lens guide</button></li>
              </ul>
            </div>

            <div>
              <h4>Stores</h4>
              <ul>
                {STORE_LOCATIONS.map((s) => (
                  <li key={s.id}>
                    <a href={s.mapUrl} target="_blank" rel="noreferrer">{s.town}</a>
                  </li>
                ))}
                <li><button onClick={() => setIsExamModalOpen(true)}>Book an eye test</button></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE_DISPLAY}</a></li>
                <li><a href={waLink()} target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {year} Optimex Opticals</span>
            <span>Swathy Jn., Court Road, Alathur</span>
          </div>
        </div>
      </footer>
    </>
  );
};
