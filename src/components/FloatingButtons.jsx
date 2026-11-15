import React from 'react';
import { useStore } from '../context/CartContext';
import { IconWhatsApp, IconPhone } from './Icons';
import { SHOP_PHONE_TEL, waLink } from '../lib/site';

const WA_TEXT = 'Hello Optimex Opticals, I saw your website and have a question.';

// Mobile: fixed bottom bar (Call / WhatsApp / Book). Desktop: one WhatsApp button.
export const FloatingButtons = () => {
  const { setIsExamModalOpen } = useStore();
  return (
    <>
      <nav className="mbar" aria-label="Quick actions">
        <a href={`tel:${SHOP_PHONE_TEL}`}><IconPhone size={19} /> Call</a>
        <a className="mbar__wa" href={waLink(WA_TEXT)} target="_blank" rel="noreferrer"><IconWhatsApp size={20} /> WhatsApp</a>
        <button className="mbar__book" onClick={() => setIsExamModalOpen(true)}>Book eye test</button>
      </nav>
      <a className="float-wa" href={waLink(WA_TEXT)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <IconWhatsApp size={24} />
      </a>
    </>
  );
};
