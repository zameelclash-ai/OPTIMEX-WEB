// Single place for shop contact details used across the site.
export const SHOP_PHONE_DISPLAY = '+91 94464 11327';
export const SHOP_PHONE_TEL = '+919446411327';
export const SHOP_WHATSAPP = '919446411327';

export const waLink = (text = 'Hello Optimex Opticals, I have a question.') =>
  `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(text)}`;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
