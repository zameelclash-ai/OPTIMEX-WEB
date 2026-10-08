import React, { useMemo, useState } from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';
import { useScrollLock, useEscape } from './Reveal';
import { STORE_LOCATIONS } from '../data/products';

const TIMES = ['10:00 AM', '11:00 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '06:30 PM'];
const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const Form = ({ initialBranch, onClose }) => {
  const { showToast } = useStore();
  const [branch, setBranch] = useState(initialBranch);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dates = useMemo(() => {
    const t = new Date();
    const min = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    const tomorrow = new Date(min); tomorrow.setDate(min.getDate() + 1);
    const max = new Date(min); max.setDate(min.getDate() + 60);
    return { min: iso(min), def: iso(tomorrow), max: iso(max) };
  }, []);
  const [date, setDate] = useState(dates.def);
  const [time, setTime] = useState('11:00 AM');
  const store = STORE_LOCATIONS.find((s) => s.id === branch) || STORE_LOCATIONS[0];

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) { showToast('Please enter your name and phone number'); return; }
    const msg = `Hello Optimex Optical ${store.town},\n\nI would like to book a computerized eye checkup appointment:\n- Patient Name: ${name}\n- Contact Number: ${phone}\n- Preferred Date: ${date}\n- Preferred Time: ${time}\n\nPlease confirm my slot. Thank you!`;
    window.open(`https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book an eye exam">
      <div className="modal__panel sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><Icon name="x" size={18} /></button>
        <div className="sheet__head">
          <span className="eyebrow">Computerized refraction clinic</span>
          <h2>Book Eye Exam via WhatsApp / Call</h2>
        </div>
        <form className="sheet__body" onSubmit={submit}>
          <div>
            <span className="label">Select showroom clinic</span>
            <div className="choice">
              {STORE_LOCATIONS.map((s) => (
                <button type="button" key={s.id} className={branch === s.id ? 'is-on' : ''} onClick={() => setBranch(s.id)}>
                  <b><Icon name="pin" size={16} style={{ color: 'var(--gold)' }} /> {s.town}</b>
                  <small>{s.statusText}</small>
                  <small style={{ color: 'var(--gold)', fontWeight: 700 }}>{s.rating} ★ ({s.reviewsCount} reviews)</small>
                </button>
              ))}
            </div>
          </div>
          <div className="fields">
            <div className="field"><label htmlFor="bx-name">Patient name</label><input id="bx-name" required placeholder="e.g. Ramesh Kumar" value={name} onChange={(e) => setName(e.target.value)} /></div>
            <div className="field"><label htmlFor="bx-phone">Mobile / WhatsApp number</label><input id="bx-phone" type="tel" required placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
            <div className="field"><label htmlFor="bx-date">Preferred date</label><input id="bx-date" type="date" value={date} min={dates.min} max={dates.max} onChange={(e) => setDate(e.target.value)} /></div>
            <div className="field"><label htmlFor="bx-time">Preferred time</label>
              <select id="bx-time" value={time} onChange={(e) => setTime(e.target.value)}>{TIMES.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
          </div>
          <p className="note">Appointment will be sent directly to <b>{store.name}</b> on WhatsApp for quick confirmation. No online advance payment required.</p>
          <div className="btnrow">
            <button type="submit" className="btn btn--wa"><Icon name="chat" size={16} /> Confirm on WhatsApp</button>
            <a className="btn btn--ghost" href={`tel:${store.phone}`}><Icon name="phone" size={16} /> Call Shop</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export const BookExamModal = () => {
  const { isExamModalOpen, setIsExamModalOpen, selectedBranchForExam } = useStore();
  const close = () => setIsExamModalOpen(false);
  useScrollLock(isExamModalOpen);
  useEscape(isExamModalOpen, close);
  if (!isExamModalOpen) return null;
  return <Form initialBranch={selectedBranchForExam || 'vadakkencherry'} onClose={close} />;
};
