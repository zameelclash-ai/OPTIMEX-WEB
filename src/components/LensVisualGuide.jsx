import React from 'react';

const LENSES = [
  {
    title: 'Anti-glare',
    text: 'Cuts reflections from headlights, tube lights and screens. Your eyes look clearer in photos too.',
    for: 'night driving, office work',
  },
  {
    title: 'Blue-cut',
    text: 'Filters part of the blue light from phones and monitors. Helpful if your eyes feel tired after long screen hours.',
    for: 'students, computer users',
  },
  {
    title: 'Photochromic',
    text: 'Clear indoors, darkens outdoors in sunlight. One pair instead of carrying spectacles and sunglasses.',
    for: 'two-wheeler riders, outdoor work',
  },
  {
    title: 'Progressive',
    text: 'Distance, computer and reading power in one lens with no visible line. Needs careful measurement — we take our time.',
    for: 'age 40+, reading difficulty',
  },
];

export const LensVisualGuide = () => (
  <section className="section" id="lens-guide">
    <div className="wrap">
      <div className="section__head">
        <div>
          <span className="eyebrow">Lens guide</span>
          <h2 className="h-section">Not sure which lens? <em>Start here.</em></h2>
        </div>
        <p className="lead">
          The lens matters more than the frame. Here's a plain-language guide to the
          options we're asked about most — we'll help you choose in the store.
        </p>
      </div>

      <div className="lenses">
        {LENSES.map((l, i) => (
          <div className="lens" key={l.title}>
            <span className="lens__no">0{i + 1}</span>
            <h3>{l.title}</h3>
            <p>{l.text}</p>
            <div className="lens__for"><b>Good for:</b> {l.for}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
