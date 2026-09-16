import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import { useStore } from '../context/CartContext';
import { STORE_LOCATIONS } from '../data/products';

export const BookExamModal = () => {
  const { 
    isExamModalOpen, 
    setIsExamModalOpen, 
    selectedBranchForExam, 
    setSelectedBranchForExam,
    showToast 
  } = useStore();

  const [selectedBranch, setSelectedBranch] = useState(selectedBranchForExam || 'vadakkencherry');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-09-20');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');

  if (!isExamModalOpen) return null;

  const currentStore = STORE_LOCATIONS.find(s => s.id === selectedBranch) || STORE_LOCATIONS[0];

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      showToast('Please enter your name and phone number');
      return;
    }

    const branchName = currentStore.town;
    const phone = currentStore.whatsappNumber;

    const message = `Hello Optimex Optical ${branchName},\n\nI would like to book a computerized eye checkup appointment:\n- Patient Name: ${patientName}\n- Contact Number: ${patientPhone}\n- Preferred Date: ${preferredDate}\n- Preferred Time: ${preferredTime}\n\nPlease confirm my slot. Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setIsExamModalOpen(false);
  };

  const handleDirectCall = () => {
    window.location.href = `tel:${currentStore.phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface text-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black/60 p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-optimex-red/20 text-optimex-red flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
                COMPUTERIZED REFRACTION CLINIC
              </span>
              <h2 className="text-xl font-bold text-white">
                Book Eye Exam via WhatsApp / Call
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsExamModalOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppBooking} className="p-6 sm:p-8 space-y-5">
          {/* 1. Branch Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Showroom Clinic
            </label>
            <div className="grid grid-cols-2 gap-3">
              {STORE_LOCATIONS.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setSelectedBranch(store.id)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    selectedBranch === store.id 
                      ? 'border-optimex-blue bg-optimex-blue/20 text-white shadow-glow-blue' 
                      : 'border-white/10 bg-black/40 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                    <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                    <span>{store.town}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{store.statusText}</p>
                  <p className="text-[10px] text-amber-400 font-bold mt-1">{store.rating} ★ ({store.reviewsCount} reviews)</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Patient Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Patient Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Mobile / WhatsApp Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue focus:outline-none"
              />
            </div>
          </div>

          {/* 3. Preferred Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Preferred Date</label>
              <input
                type="date"
                value={preferredDate}
                min="2026-09-17"
                max="2026-10-31"
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue focus:outline-none cursor-pointer"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Preferred Time</label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue focus:outline-none cursor-pointer"
              >
                <option value="10:00 AM" className="bg-neutral-900">10:00 AM</option>
                <option value="11:00 AM" className="bg-neutral-900">11:00 AM</option>
                <option value="12:00 PM" className="bg-neutral-900">12:00 PM</option>
                <option value="02:30 PM" className="bg-neutral-900">02:30 PM</option>
                <option value="04:00 PM" className="bg-neutral-900">04:00 PM</option>
                <option value="05:30 PM" className="bg-neutral-900">05:30 PM</option>
                <option value="06:30 PM" className="bg-neutral-900">06:30 PM</option>
              </select>
            </div>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-slate-400">
            Appointment will be sent directly to <strong className="text-white">{currentStore.name}</strong> on WhatsApp for quick confirmation. No online advance payment required.
          </div>

          {/* Action Buttons: WhatsApp & Phone */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleDirectCall}
              className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Shop</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
