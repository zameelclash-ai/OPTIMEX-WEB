import React, { useEffect, useState } from 'react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';
import { IconClose, IconWhatsApp, IconPhone } from './Icons';

const TIMES = ['10:00 am', '11:00 am', '12:00 pm', '2:30 pm', '4:00 pm', '5:30 pm', '6:30 pm'];

const today = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export const BookExamModal = () => {
  const { isExamModalOpen, setIsExamModalOpen, selectedBranchForExam, showToast } = useStore();

  const [branch, setBranch] = useState(selectedBranchForExam || STORE_LOCATIONS[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(today());
  const [time, setTime] = useState(TIMES[1]);

  useEffect(() => {
    if (isExamModalOpen && selectedBranchForExam) setBranch(selectedBranchForExam);
  }, [isExamModalOpen, selectedBranchForExam]);

  if (!isExamModalOpen) return null;

  const store = STORE_LOCATIONS.find((s) => s.id === branch) || STORE_LOCATIONS[0];
  const close = () => setIsExamModalOpen(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      showToast('Please add your name and phone number');
      return;
    }
    const msg = `Hello Optimex Opticals ${store.town},\n\nI'd like to book an eye test.\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\n\nPlease confirm. Thank you!`;
    window.open(`https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    close();
  };

  return (
    <div className="modal" onClick={close} role="dialog" aria-modal="true" aria-label="Book an eye test">
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={close} aria-label="Close"><IconClose size={18} /></button>
        <div className="modal__head">
          <span className="eyebrow eyebrow--red">Eye test</span>
          <h3>Book a time that suits you</h3>
          <p className="muted" style={{ margin: '8px 0 0', fontSize: 15 }}>
            This opens WhatsApp with your details filled in. We'll reply to confirm.
          </p>
        </div>

        <form className="modal__body" onSubmit={submit}>
          <div className="field">
            <label>Store</label>
            <div className="seg">
              {STORE_LOCATIONS.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  className={branch === s.id ? 'is-active' : ''}
                  onClick={() => setBranch(s.id)}
                >
                  {s.town}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label htmlFor="bk-name">Your name</label>
            <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="bk-phone">Phone / WhatsApp</label>
            <input id="bk-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="bk-date">Date</label>
              <input id="bk-date" type="date" min={today()} value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="bk-time">Time</label>
              <select id="bk-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn--wa"><IconWhatsApp size={18} /> Send booking on WhatsApp</button>
          <a className="btn btn--line" href={`tel:${store.phone.replace(/\s/g, '')}`}>
            <IconPhone size={16} /> Or call {store.phone}
          </a>
        </form>
      </div>
    </div>
  );
};
