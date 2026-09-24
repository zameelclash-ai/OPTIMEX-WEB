import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useStore } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { 
    setQuickViewProduct, 
    getImageSrc, 
    setIsImageEditModalOpen, 
    setEditingImageKey,
    imageOverrides 
  } = useStore();

  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  // Single Photo per product - NO Hover swapping or image scaling as requested by user
  const photoSrc = getImageSrc(product.id, product.images[0]);
  const isCustomPhoto = !!imageOverrides[product.id];

  // Auto-identified title if user updated photo
  const displayTitle = isCustomPhoto ? `Optimex Custom Eyewear (${product.brand})` : product.name;

  const handleWhatsAppInquire = (e) => {
    e.stopPropagation();
    const msg = `Hello Optimex Optical, I saw the ${displayTitle} on your website. Is this model available in your Vadakkencherry or Alathur showroom?`;
    window.open(`https://wa.me/919447997327?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleOpenEditModal = (e) => {
    e.stopPropagation();
    setEditingImageKey(product.id);
    setIsImageEditModalOpen(true);
  };

  const handleMouseMove3D = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setShinePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave3D = (e) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      onMouseMove={handleMouseMove3D}
      onMouseLeave={handleMouseLeave3D}
      onClick={() => setQuickViewProduct(product)}
      className="group squircle-card cursor-pointer flex flex-col justify-between bg-white border border-slate-200"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* 3D Specular Shimmer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 rounded-[2.2rem]"
        style={{
          background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,27,45,0.06) 0%, transparent 60%)`
        }}
      />

      {/* Top Inset Rounded Single Photo Window */}
      <div className="squircle-image-slot aspect-[16/11] w-full flex items-center justify-center bg-slate-100 relative">
        <img
          src={photoSrc}
          alt={displayTitle}
          className="w-full h-full object-cover object-center rounded-[1.6rem]"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/optical/classic-eyeglasses.jpg";
          }}
        />

        {/* Top Badges: Brand */}
        <div className="absolute top-3 left-3 z-20 flex items-center pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-900 border border-slate-300 shadow-sm">
            {product.brand}
          </span>
        </div>
      </div>

      {/* Bottom Content Area (NO White Text - Pure Black & Red Only) */}
      <div className="pt-4 pb-2 px-2 flex flex-col justify-between flex-1 space-y-3">
        <div>
          {/* Category Tag */}
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono block mb-1">
            {product.brand} • {product.category}
          </span>

          {/* Title */}
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
            {displayTitle}
          </h3>
        </div>

        {/* Action Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[10px] text-slate-800 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>Available in Showroom</span>
          </span>

          <button
            type="button"
            onClick={handleWhatsAppInquire}
            className="px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-[11px] font-extrabold transition-all duration-300 flex items-center gap-1 shadow-sm"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
