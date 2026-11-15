import React from 'react';
import { useStore } from '../context/CartContext';
import { IconArrow } from './Icons';

const STEPS = [
  { title: 'Get your eyes tested', text: 'A computerised reading, then a manual check to confirm the power feels right to you.' },
  { title: 'Choose frame and lenses', text: 'Try on as many frames as you like. We explain lens options and prices before you decide.' },
  { title: 'Collect and adjust', text: 'Lenses are fitted in our clinic and the frame is adjusted to sit properly on your face.' },
];

export const VisitSteps = () => {
  const { setIsExamModalOpen } = useStore();
  return (
    <section className="section section--ink">
      <div className="wrap">
        <div className="section__head">
          <div>
            <span className="eyebrow" style={{ color: '#b9b5ac' }}>Your visit</span>
            <h2 className="h-section">Simple, from <em>test to fitting.</em></h2>
          </div>
          <div style={{ justifySelf: 'start' }}>
            <button className="btn btn--red" onClick={() => setIsExamModalOpen(true)}>
              Book an eye test <IconArrow size={18} className="arr" />
            </button>
          </div>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step__no">{i + 1}.</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
