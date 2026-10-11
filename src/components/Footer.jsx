import React from 'react';
import { Icon } from './Icons';
import { Reveal } from './Reveal';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';

export const Footer = () => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();
  const [vad, ala] = STORE_LOCATIONS;

  const Branch = ({ store, title, closes }) => (
    <div>
      <h4>{title}</h4>
      <p>{store.address.replace('Main Town, ', 'Main Town, ')}</p>
      <p style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 10, color: 'var(--gold-2)' }}><Icon name="clock" size={14} /> Open · Closes {closes}</p>
      <div className="mini-actions">
        <a href={store.mapUrl} target="_blank" rel="noreferrer">Google Maps <Icon name="external" size={13} /></a>
        <a href={`tel:${store.phone}`}><Icon name="phone" size={13} /> Call</a>
      </div>
    </div>
  );

  return (
    <footer className="footer">
      <div className="wrap">
        <Reveal className="offer">
          <p className="kicker" style={{ color: 'var(--gold-2)' }}>Our biggest discount ever</p>
          <h3>follow us now<br /><em>GET UP TO 22% OFF</em></h3>
          <p>Follow our official Instagram account and visit our optical showrooms in Alathur or Vadakkencherry to claim your 22% discount.</p>
          <div className="row">
            <a className="btn btn--light" href="https://www.instagram.com" target="_blank" rel="noreferrer"><Icon name="instagram" size={16} /> Follow on Instagram</a>
            <button className="btn btn--outline-light" onClick={() => setIsMapModalOpen(true)}><Icon name="pin" size={16} /> Visit Showroom (Maps)</button>
          </div>
        </Reveal>

        <div className="foot">
          <div>
            <span className="logo-plate"><img src="/images/optimex-official-logo.png" alt="Optimex Opticals" /></span>
            <p>Your trusted neighborhood opticians in Vadakkencherry and Alathur, Kerala. Computerized refraction, branded eyewear, and rapid lens fitting.</p>
            <div className="foot__links">
              <a className="round" href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a className="round" href="https://wa.me/919447997327" target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp"><Icon name="chat" size={18} /></a>
            </div>
          </div>
          <Branch store={vad} title="Vadakkencherry Showroom" closes="7:00 PM" />
          <Branch store={ala} title="Alathur Showroom" closes="8:00 PM" />
          <div>
            <h4>Clinical Services</h4>
            <ul>
              <li><button onClick={() => setIsExamModalOpen(true)} style={{ color: 'var(--gold-2)', fontWeight: 600, display: 'inline-flex', gap: 8, alignItems: 'center' }}><Icon name="calendar" size={15} /> Book Eye Exam</button></li>
              <li>Computerized Vision Testing</li>
              <li>Progressive &amp; Bifocal Consultation</li>
              <li>Free Frame Adjustments</li>
              <li>Contact Lens Fitting</li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© 2026 Optimex Opticals. Registered Optical Dispensary &amp; Clinic • Alathur &amp; Vadakkencherry, Kerala.</span>
          <span style={{ color: 'var(--gold-2)', fontWeight: 600 }}>Palakkad District, Kerala</span>
        </div>
      </div>
      <div className="bigword" aria-hidden="true">Optimex</div>
    </footer>
  );
};
