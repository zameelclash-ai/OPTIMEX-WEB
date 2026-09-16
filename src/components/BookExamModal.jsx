import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Stethoscope, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_LOCATIONS, EXAM_SERVICES } from '../data/products';
import confetti from 'canvas-confetti';

export const BookExamModal = () => {
  const { 
    isExamModalOpen, 
    setIsExamModalOpen, 
    selectedBranchForExam, 
    setSelectedBranchForExam, 
    showToast 
  } = useCart();

  const [selectedClinic, setSelectedClinic] = useState(selectedBranchForExam || STORE_LOCATIONS[0].id);
  const [selectedService, setSelectedService] = useState(EXAM_SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-09-20');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isExamModalOpen) return null;

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'
  ];

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      showToast('Please enter patient name and mobile number');
      return;
    }

    const ref = `OPT-KL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSuccess(true);
    
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsExamModalOpen(false);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
  };

  const currentClinicObj = STORE_LOCATIONS.find(l => l.id === selectedClinic) || STORE_LOCATIONS[0];
  const currentServiceObj = EXAM_SERVICES.find(s => s.id === selectedService) || EXAM_SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-white/10"
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
                Optimex Clinical Eyecare • Kerala
              </span>
              <h2 className="text-xl font-bold text-white">
                Schedule Computerized Eye Exam
              </h2>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                Appointment Reserved!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your slot at <span className="font-semibold text-white">{currentClinicObj.name}</span> is confirmed for <span className="text-white font-bold">{selectedDate} at {selectedTime}</span>.
              </p>
            </div>

            <div className="bg-black/40 rounded-2xl p-5 border border-white/10 text-left space-y-2.5 text-xs">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Reference Number</span>
                <span className="font-mono font-bold text-optimex-red">{bookingRef}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Patient</span>
                <span className="font-bold text-white">{patientName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Store</span>
                <span className="font-bold text-white">{currentClinicObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Optometrist</span>
                <span className="font-bold text-slate-300">{currentClinicObj.optometrist}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${currentClinicObj.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20have%20booked%20an%20eye%20exam%20ref%20${bookingRef}%20for%20${encodeURIComponent(patientName)}%20on%20${selectedDate}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitBooking} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* 1. Branch selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Showroom Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STORE_LOCATIONS.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedClinic(loc.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      selectedClinic === loc.id 
                        ? 'border-optimex-blue bg-optimex-blue/15 text-white shadow-glow-blue' 
                        : 'border-white/10 bg-black/40 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-optimex-red" />
                      <span className="font-bold text-xs text-white">{loc.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{loc.statusText}</p>
                    <span className="text-[10px] text-amber-400 font-bold block mt-1">
                      {loc.rating} ★ ({loc.reviewsCount} reviews)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Service selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                2. Vision Examination Type
              </label>
              <div className="space-y-2">
                {EXAM_SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedService === srv.id 
                        ? 'border-optimex-red bg-optimex-red/10 text-white' 
                        : 'border-white/10 bg-black/40 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs text-white">{srv.title}</div>
                      <div className="text-[11px] text-slate-400">{srv.description}</div>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <div className="font-bold text-xs text-emerald-400">₹{srv.price}</div>
                      <div className="text-[10px] text-slate-400">{srv.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-09-17"
                  max="2026-10-31"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white font-medium focus:ring-1 focus:ring-optimex-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white font-medium focus:ring-1 focus:ring-optimex-blue cursor-pointer"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-neutral-900">{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Patient Info */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Patient Contact Information
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Patient Full Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile / WhatsApp Number"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-2.5 text-xs text-white focus:ring-1 focus:ring-optimex-blue"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-optimex-red hover:bg-optimex-redHover text-white font-bold text-xs uppercase tracking-wider shadow-glow-red transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm Clinic Reservation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
