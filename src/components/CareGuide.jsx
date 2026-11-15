import React from 'react';

const TIPS = [
  { title: 'Rest your eyes from screens', text: 'Every 20 minutes, look at something about 20 feet away for 20 seconds.' },
  { title: 'Clean lenses the right way', text: 'Rinse with water first, then wipe with a microfibre cloth — never your shirt or tissue paper.' },
  { title: 'Test once a year', text: 'Power changes slowly, so you may not notice. A yearly check catches it early.' },
  { title: 'Bring your frame in', text: 'Loose screws, bent arms or sore nose pads — drop in and we’ll adjust it for you.' },
];

export const CareGuide = () => (
  <section className="section section--tight">
    <div className="wrap">
      <div className="section__head">
        <div>
          <span className="eyebrow">Eye care</span>
          <h2 className="h-section">Small habits, <em>better eyes.</em></h2>
        </div>
      </div>
      <div className="tips">
        {TIPS.map((t) => (
          <div className="tip" key={t.title}>
            <div className="tip__rule" />
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
