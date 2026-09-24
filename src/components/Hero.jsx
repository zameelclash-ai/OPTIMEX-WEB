import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { SunglassesMatrixCanvas } from './SunglassesMatrixCanvas';

export const Hero = () => {
  const { 
    setIsExamModalOpen, 
    setIsMapModalOpen
  } = useStore();

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
    <div className="relative overflow-hidden bg-slate-50 text-slate-900 min-h-[85vh] flex items-center border-b border-slate-200">
      
      {/* Background HTML5 Video Loop with Mobile Autoplay Optimization */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          className="w-full h-full object-cover object-center opacity-30 contrast-125 scale-105 transition-opacity duration-1000"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-optician-examining-a-clients-eyes-41489-large.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/70 to-slate-50/30" />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content Column (Pure Black & Red Text - ZERO White Text) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 font-mono block">
                COMPUTERISED EYE CLINIC & OPTICAL SHOWROOMS
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-slate-900 leading-tight">
                Precision Vision <br />
                <span className="text-3xl sm:text-5xl lg:text-6xl text-red-600">
                  & Executive Eyewear
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-800 font-normal max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Advanced computerized refraction testing, high-index prescription lenses, and branded spectacle collections in Vadakkencherry and Alathur, Kerala.
              </p>
            </div>

            {/* Action Buttons: Book Exam (RED), Visit Now, WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => setIsExamModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white hover:bg-red-700 font-black text-xs uppercase tracking-wider shadow-lg transition-all transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Eye Exam</span>
              </button>

              <button
                type="button"
                onClick={() => setIsMapModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-red-500 hover:bg-black font-black text-xs uppercase tracking-wider shadow-md transition-all transform hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-red-500">Visit Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-500" />
              </button>

              <a
                href="https://wa.me/919447997327?text=Hello%20Optimex%20Optical%2C%20I%20want%20to%20inquire%20about%20spectacle%20frames%20and%20eye%20testing"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 text-xs font-bold border border-slate-300 transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-red-600" />
                <span className="text-slate-900">WhatsApp</span>
              </a>
            </div>

            {/* Store Status Cards */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div 
                onClick={() => setIsMapModalOpen(true)}
                className="squircle-card p-3.5 cursor-pointer transition-all duration-300 hover:border-red-500/40 bg-white"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Vadakkencherry</span>
                </div>
                <div className="text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span>Open · Closes 7 pm</span>
                </div>
              </div>

              <div 
                onClick={() => setIsMapModalOpen(true)}
                className="squircle-card p-3.5 cursor-pointer transition-all duration-300 hover:border-red-500/40 bg-white"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Alathur</span>
                </div>
                <div className="text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span>Open · Closes 8 pm</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Sunglasses Matrix Canvas Wrapper */}
          <div className="lg:col-span-5 relative">
            <SunglassesMatrixCanvas />
          </div>

        </div>
      </div>
    </div>
  );
};
