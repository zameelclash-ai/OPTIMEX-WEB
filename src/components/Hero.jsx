import React, { useEffect, useRef } from 'react';
import { Icon } from './Icons';
import { useStore } from '../context/CartContext';
import { SunglassesMatrixCanvas } from './SunglassesMatrixCanvas';

export const Hero = () => {
  const { setIsExamModalOpen, setIsMapModalOpen } = useStore();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Mobile video autoplay prevented by browser policy:', err);
        });
      }
    }
  }, []);

  return (
    <section id="top" className="hero">
      {/* Background HTML5 video loop — unchanged from the original build */}
      <div className="hero__video">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          poster="/images/optical/gold-sunglasses.jpg"
          className="hero__video-el"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-optician-examining-a-clients-eyes-41489-large.mp4" type="video/mp4" />
        </video>
        <div className="hero__veil" />
      </div>
      <div className="hero__glow" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__fade" style={{ '--ad': '0.1s' }}>Computerised Eye Clinic &amp; Optical Showrooms</p>

          <h1 className="display">
            <span className="mask"><span style={{ '--i': 0 }}>Precision Vision</span></span>
            <span className="mask"><span style={{ '--i': 1 }}><em>&amp; Executive Eyewear</em></span></span>
          </h1>

          <p className="lede hero__fade" style={{ '--ad': '0.75s' }}>
            Advanced computerized refraction testing, high-index prescription lenses, and branded spectacle collections in Vadakkencherry and Alathur, Kerala.
          </p>

          <div className="hero__cta hero__fade" style={{ '--ad': '0.9s' }}>
            <button className="btn btn--ink" onClick={() => setIsExamModalOpen(true)}>
              <Icon name="calendar" size={16} /> Book Eye Exam <Icon name="arrow-right" size={16} />
            </button>
            <button className="btn btn--ghost" onClick={() => setIsMapModalOpen(true)}>
              <Icon name="pin" size={16} /> Visit Now
            </button>
            <a
              className="btn btn--ghost"
              href="https://wa.me/919447997327?text=Hello%20Optimex%20Optical%2C%20I%20want%20to%20inquire%20about%20spectacle%20frames%20and%20eye%20testing"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="chat" size={16} /> WhatsApp
            </a>
          </div>

          <div className="hero__stores hero__fade" style={{ '--ad': '1.05s' }}>
            <button className="store-chip" onClick={() => setIsMapModalOpen(true)}>
              <b>Vadakkencherry</b>
              <span><i className="dot" /> Open · Closes 7 pm</span>
            </button>
            <button className="store-chip" onClick={() => setIsMapModalOpen(true)}>
              <b>Alathur</b>
              <span><i className="dot" /> Open · Closes 8 pm</span>
            </button>
          </div>
        </div>

        <SunglassesMatrixCanvas />
      </div>

      <div className="hero__scroll" aria-hidden="true"><span>Scroll</span><i /></div>
    </section>
  );
};
