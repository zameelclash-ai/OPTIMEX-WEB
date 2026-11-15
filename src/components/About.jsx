import React from 'react';

const OWNERS = [
  { name: 'Abdul Jaleel', initials: 'AJ' },
  { name: 'Muhammed Ashraf', initials: 'MA' },
];

const STORY =
  'For more than ten years, Optimex Opticals has looked after the eyesight of families in Alathur, Vadakkencherry and the villages around them.';

export const About = () => (
  <section className="section section--ink" id="about">
    <div className="wrap">
      <div className="about">
        <div data-reveal>
          <span className="eyebrow">About us</span>
          <div className="about__years" style={{ marginTop: 24 }}>
            <span data-count="10">10</span><sup>+</sup>
          </div>
          <div className="about__years-label">Years in Alathur &amp; Vadakkencherry</div>
        </div>

        <div>
          <div className="about__text">
            <p className="scrub" data-scrub>
              {STORY.split(' ').map((w, i) => (
                <span className="w" key={i}>{w} </span>
              ))}
            </p>
            <p data-reveal>
              We are a computerised eye clinic and optical showroom. Every pair we make starts
              with a proper eye test and ends with a frame adjusted to sit right on your face.
            </p>
          </div>

          <div className="owners" data-reveal>
            {OWNERS.map((o) => (
              <div className="owner" key={o.name}>
                <div className="owner__mono">{o.initials}</div>
                <div>
                  <b>{o.name}</b>
                  <span>Owner</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sister" data-reveal>
            <span>Our sister store</span>
            <b>Eyescan</b>
            <p>Vadakkencherry</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
