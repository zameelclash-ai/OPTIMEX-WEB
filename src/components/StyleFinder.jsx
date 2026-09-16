import React, { useState } from 'react';
import { X, Sparkles, Check, Glasses } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const StyleFinder = ({ onSelectCategory }) => {
  const { isFaceGuideOpen, setIsFaceGuideOpen, setQuickViewProduct, formatPrice } = useCart();

  const [selectedShape, setSelectedShape] = useState('oval');

  if (!isFaceGuideOpen) return null;

  const faceShapes = [
    {
      id: 'oval',
      title: 'Oval',
      iconUrl: '🥚',
      desc: 'Balanced natural symmetry with softly curved jawline and slightly wider forehead.',
      bestFrames: ['Round', 'Aviator', 'Geometric', 'Cat-Eye'],
      tip: 'Almost all shapes pair seamlessly with oval facial contours.'
    },
    {
      id: 'round',
      title: 'Round',
      iconUrl: '⚪',
      desc: 'Soft angles with equal cheekbone width and jawline contours.',
      bestFrames: ['Rectangle', 'Cat-Eye', 'Square'],
      tip: 'Angular, square, and rectangular frames add structure and elongate facial features.'
    },
    {
      id: 'square',
      title: 'Square',
      iconUrl: '⬜',
      desc: 'Strong angular jawline, defined cheek contours and broad forehead.',
      bestFrames: ['Round', 'Aviator', 'Oval'],
      tip: 'Curved and round frames soften angular jawlines and introduce organic balance.'
    },
    {
      id: 'heart',
      title: 'Heart',
      iconUrl: '🤍',
      desc: 'Broad forehead and high cheekbones tapering gently down to a slender chin.',
      bestFrames: ['Aviator', 'Cat-Eye', 'Rimless', 'Lightweight Titanium'],
      tip: 'Delicate rimless or aviator frames provide harmonious proportion.'
    }
  ];

  const recommendedFrames = PRODUCTS.filter(p => 
    p.faceShapeFit?.includes(selectedShape) || p.faceShapeFit?.includes('all')
  ).slice(0, 3);

  const currentShapeObj = faceShapes.find(s => s.id === selectedShape) || faceShapes[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface text-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black/40 p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-optimex-blue/20 text-optimex-blue flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-blue">
                Aesthetic Eyewear Advisor
              </span>
              <h2 className="text-xl font-bold text-white">
                Face Shape & Frame Proportion Guide
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsFaceGuideOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Step 1: Select Your Facial Structure
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {faceShapes.map((shape) => (
                <div
                  key={shape.id}
                  onClick={() => setSelectedShape(shape.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all text-center flex flex-col items-center justify-center space-y-2 ${
                    selectedShape === shape.id 
                      ? 'border-optimex-blue bg-optimex-blue/20 shadow-glow-blue' 
                      : 'border-white/10 bg-black/40 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl">{shape.iconUrl}</span>
                  <div className="font-bold text-sm text-white">{shape.title}</div>
                  <span className="text-[10px] text-slate-400 leading-tight">{shape.bestFrames.slice(0, 2).join(', ')}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-black/40 border border-white/10 rounded-2xl p-4 text-xs space-y-1">
              <span className="font-bold text-white block">{currentShapeObj.title} Face Characteristics:</span>
              <p className="text-slate-400 leading-relaxed font-light">{currentShapeObj.desc}</p>
              <div className="pt-2 text-optimex-blue font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-optimex-blue shrink-0" />
                <span>Optician Recommendation: {currentShapeObj.tip}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Recommended Frames For {currentShapeObj.title} Face ({recommendedFrames.length})
              </label>
              <span className="text-[11px] text-optimex-blue font-bold">Calculated for Balance</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendedFrames.map((frame) => (
                <div
                  key={frame.id}
                  onClick={() => {
                    setIsFaceGuideOpen(false);
                    setQuickViewProduct(frame);
                  }}
                  className="p-3 bg-black/40 border border-white/10 hover:border-optimex-blue rounded-2xl cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div className="aspect-[4/3] bg-black/60 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                    <img
                      src={frame.images[0]}
                      alt={frame.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">{frame.shape}</span>
                    <h4 className="font-bold text-xs text-white group-hover:text-optimex-blue truncate">{frame.name}</h4>
                    <span className="text-xs font-bold font-mono text-white mt-1 block">{formatPrice(frame.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-light">
            Visit our Vadakkencherry or Alathur stores for in-person 3D frame trials.
          </p>
          <button
            onClick={() => setIsFaceGuideOpen(false)}
            className="px-6 py-2.5 rounded-xl bg-optimex-blue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Explore Frames
          </button>
        </div>

      </div>
    </div>
  );
};
