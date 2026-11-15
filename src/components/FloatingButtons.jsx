import React from 'react';
import { IconWhatsApp, IconPhone } from './Icons';
import { SHOP_PHONE_TEL, waLink } from '../lib/site';

export const FloatingButtons = () => (
  <div className="float">
    <a className="float__wa" href={waLink('Hello Optimex Opticals, I saw your website and have a question.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <IconWhatsApp size={24} />
    </a>
    <a className="float__call" href={`tel:${SHOP_PHONE_TEL}`} aria-label="Call the shop">
      <IconPhone size={21} />
    </a>
  </div>
);
