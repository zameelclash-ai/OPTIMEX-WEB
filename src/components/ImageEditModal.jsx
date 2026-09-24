import React, { useState } from 'react';
import { X, Upload, Link, Check, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const ImageEditModal = () => {
  const { 
    isImageEditModalOpen, 
    setIsImageEditModalOpen, 
    editingImageKey, 
    setEditingImageKey,
    updateImageOverride,
    getImageSrc,
    showToast 
  } = useStore();

  const [selectedKey, setSelectedKey] = useState(editingImageKey || 'hero-banner');
  const [urlInput, setUrlInput] = useState('');

  if (!isImageEditModalOpen) return null;

  const imageTargets = [
    { key: 'hero-banner', label: 'Hero Right Showcase Banner Photo', defaultSrc: '/images/optical/gold-sunglasses.jpg' },
    { key: 'rb-01', label: 'Ray-Ban Classic Wayfarer', defaultSrc: '/images/optical/rayban-wayfarer.jpg' },
    { key: 'rb-02', label: 'Ray-Ban Aviator Gold', defaultSrc: '/images/optical/gold-sunglasses.jpg' },
    { key: 'opt-01', label: 'Optimex Beta-Titanium Specs', defaultSrc: '/images/optical/classic-eyeglasses.jpg' },
    { key: 'vog-01', label: 'Vogue Lumina Cat-Eye', defaultSrc: '/images/optical/womens-eyewear.jpg' },
    { key: 'oak-01', label: 'Oakley Sport Holbrook', defaultSrc: '/images/optical/clubmaster-shades.jpg' },
    { key: 'opt-02', label: 'Optimex CyberShield Screen', defaultSrc: '/images/optical/bluecut-glasses.jpg' },
    { key: 'opt-03', label: 'Heritage Tortoise Acetate', defaultSrc: '/images/optical/clubmaster-spectacles.jpg' },
    { key: 'showcase-01', label: 'Hero Card 1 (Optical Specs)', defaultSrc: '/images/optical/classic-eyeglasses.jpg' },
    { key: 'showcase-02', label: 'Hero Card 2 (Ray-Ban Solar)', defaultSrc: '/images/optical/rayban-wayfarer.jpg' },
    { key: 'showcase-03', label: 'Hero Card 3 (Vogue Lumina)', defaultSrc: '/images/optical/womens-eyewear.jpg' },
  ];

  const currentTarget = imageTargets.find(t => t.key === selectedKey) || imageTargets[0];
  const currentSrc = getImageSrc(currentTarget.key, currentTarget.defaultSrc);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const dataUrl = uploadEvent.target?.result;
        if (dataUrl) {
          updateImageOverride(currentTarget.key, dataUrl);
          showToast(`Photo for "${currentTarget.label}" updated from laptop!`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      updateImageOverride(currentTarget.key, urlInput.trim());
      setUrlInput('');
      showToast(`Photo for "${currentTarget.label}" updated via URL!`);
    }
  };

  const handleResetToDefault = () => {
    updateImageOverride(currentTarget.key, null);
    showToast(`Reset "${currentTarget.label}" to original photo`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white text-slate-900 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500 font-mono">
                LIVE PHOTO EDITOR / ഇമേജ് മാറ്റി നൽകുക
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white font-sans">
                Replace Website Photos in Real-Time
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsImageEditModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Target Select */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Select Photo to Replace on Website:
            </label>
            <select
              value={selectedKey}
              onChange={(e) => setSelectedKey(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none cursor-pointer"
            >
              {imageTargets.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Current Live Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-300 relative flex items-center justify-center p-2 shadow-inner">
              <img 
                src={currentSrc} 
                alt="Current Preview"
                className="w-full h-full object-contain"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-black bg-slate-900 text-red-500 shadow">
                Live Preview
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900">{currentTarget.label}</h4>
              <p className="text-xs text-slate-700 font-normal">
                Choose a new photo from your laptop or enter an image link to replace this picture instantly on the live site.
              </p>

              <button
                type="button"
                onClick={handleResetToDefault}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-red-600" />
                <span>Reset to Original Photo</span>
              </button>
            </div>
          </div>

          {/* Option 1: Upload from Laptop */}
          <div className="border-t border-slate-200 pt-5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Option A: Upload Photo from Your Laptop / Mobile
            </label>
            <label className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border-2 border-dashed border-red-500/40 bg-red-50/50 hover:bg-red-50 text-red-600 font-extrabold text-xs cursor-pointer transition-colors shadow-sm">
              <Upload className="w-4 h-4 text-red-600" />
              <span>Click to Select & Upload Photo File from Computer</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
            </label>
          </div>

          {/* Option 2: Paste Image Link */}
          <form onSubmit={handleUrlSubmit} className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800">
              Option B: Paste Online Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://images.unsplash.com/... or image link"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-red-500 font-black text-xs uppercase tracking-wider shadow transition-colors"
              >
                Apply URL
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 text-center text-xs text-slate-700 font-bold">
          Changes take effect instantly on your live browser screen!
        </div>
      </div>
    </div>
  );
};
