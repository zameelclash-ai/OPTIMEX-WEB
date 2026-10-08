import React from 'react';
import { Icon } from './Icons';

export const FloatingButtons = () => (
  <div className="fab">
    <a className="wa" href="https://wa.me/919447012345?text=Hello%20Optimex%20Optical%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20know%20more." target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">
      <Icon name="chat" size={24} />
    </a>
    <a className="tel" href="tel:+919447012345" title="Call Optimex Optical" aria-label="Call Store">
      <Icon name="phone" size={22} />
    </a>
  </div>
);
