import React, { useState } from 'react';
import { X, Check, Upload, FileText, ArrowRight, ArrowLeft, Glasses } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { LENS_PACKAGES } from '../data/products';

export const LensCustomizerModal = () => {
  const { 
    lensCustomizerProduct, 
    setLensCustomizerProduct, 
    addToCart, 
    formatPrice 
  } = useCart();

  const [step, setStep] = useState(1);
  const [lensType, setLensType] = useState('single-vision');
  const [selectedLensPackage, setSelectedLensPackage] = useState(LENS_PACKAGES[1]);
  
  const [prescriptionData, setPrescriptionData] = useState({
    odSphere: '-1.50',
    odCyl: '-0.50',
    odAxis: '180',
    osSphere: '-1.25',
    osCyl: '-0.25',
    osAxis: '175',
    pd: '63',
    uploadedFileName: null
  });

  const [prescriptionMethod, setPrescriptionMethod] = useState('manual');

  if (!lensCustomizerProduct) return null;

  const product = lensCustomizerProduct;
  const totalPrice = product.price + (selectedLensPackage?.price || 0);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionData(prev => ({ ...prev, uploadedFileName: file.name }));
    }
  };

  const handleFinishAndAdd = () => {
    addToCart(product, {
      color: product.colors[0]?.name || 'Standard',
      lensPackage: selectedLensPackage,
      prescription: {
        lensType,
        method: prescriptionMethod,
        data: prescriptionData
      },
      quantity: 1
    });
    setLensCustomizerProduct(null);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-optimex-surface text-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-optimex-red">
              Precision Optical Configurator
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Configure Lenses for {product.name}
            </h2>
          </div>
          <button
            onClick={() => setLensCustomizerProduct(null)}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress */}
        <div className="px-6 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 1 ? 'bg-optimex-blue text-white' : 'bg-white/10 text-slate-500'
            }`}>1</span>
            <span className={step >= 1 ? 'text-white' : 'text-slate-500'}>Lens Usage</span>
          </div>
          <div className="h-0.5 w-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 2 ? 'bg-optimex-blue text-white' : 'bg-white/10 text-slate-500'
            }`}>2</span>
            <span className={step >= 2 ? 'text-white' : 'text-slate-500'}>Filter & Coatings</span>
          </div>
          <div className="h-0.5 w-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 3 ? 'bg-optimex-blue text-white' : 'bg-white/10 text-slate-500'
            }`}>3</span>
            <span className={step >= 3 ? 'text-white' : 'text-slate-500'}>Prescription</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto space-y-6">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">
                How will you be using your eyeglasses?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'single-vision',
                    title: 'Single Vision',
                    badge: 'Popular',
                    desc: 'Distance vision, reading, or everyday driving correction.'
                  },
                  {
                    id: 'progressive',
                    title: 'Progressive / Multifocal',
                    badge: 'No Line',
                    desc: 'Smooth progression for computer, distance, and reading without lines.'
                  },
                  {
                    id: 'non-prescription',
                    title: 'Screen Blue Filter (Plano)',
                    badge: 'Zero Power',
                    desc: 'Zero prescription power with dedicated anti-fatigue screen protection.'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLensType(item.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      lensType === item.id 
                        ? 'border-optimex-blue bg-optimex-blue/15 shadow-glow-blue' 
                        : 'border-white/10 bg-black/40 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                          {item.badge}
                        </span>
                        {lensType === item.id && <Check className="w-4 h-4 text-optimex-blue" />}
                      </div>
                      <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">
                Choose your lens protection package
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {LENS_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedLensPackage(pkg)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                      selectedLensPackage?.id === pkg.id 
                        ? 'border-optimex-blue bg-optimex-blue/15 shadow-glow-blue' 
                        : 'border-white/10 bg-black/40 hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-white">{pkg.name}</h4>
                        {pkg.recommended && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-optimex-red text-white px-2 py-0.5 rounded-full">
                            Doctor Recommended
                          </span>
                        )}
                        <span className="text-xs text-slate-400">({pkg.thickness})</span>
                      </div>
                      <p className="text-xs text-slate-400 font-light max-w-xl">{pkg.description}</p>
                    </div>

                    <div className="text-right shrink-0 ml-4 font-mono">
                      <span className="font-bold text-sm text-white">
                        {pkg.price === 0 ? 'Included' : `+${formatPrice(pkg.price)}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  Prescription details
                </h3>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {[
                    { id: 'manual', label: 'Enter Manually' },
                    { id: 'upload', label: 'Upload Slip Photo' },
                    { id: 'later', label: 'WhatsApp / Call Later' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPrescriptionMethod(method.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        prescriptionMethod === method.id 
                          ? 'border-optimex-blue bg-optimex-blue/20 text-white' 
                          : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {prescriptionMethod === 'manual' && (
                <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Enter Prescription Values (OD / OS)
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-white">Right Eye (OD)</span>
                    <div className="grid grid-cols-3 gap-3 mt-1.5 font-mono text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Sphere (SPH)</label>
                        <input
                          type="text"
                          value={prescriptionData.odSphere}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, odSphere: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Cylinder (CYL)</label>
                        <input
                          type="text"
                          value={prescriptionData.odCyl}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, odCyl: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Axis (°)</label>
                        <input
                          type="text"
                          value={prescriptionData.odAxis}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, odAxis: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-white">Left Eye (OS)</span>
                    <div className="grid grid-cols-3 gap-3 mt-1.5 font-mono text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Sphere (SPH)</label>
                        <input
                          type="text"
                          value={prescriptionData.osSphere}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, osSphere: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Cylinder (CYL)</label>
                        <input
                          type="text"
                          value={prescriptionData.osCyl}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, osCyl: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Axis (°)</label>
                        <input
                          type="text"
                          value={prescriptionData.osAxis}
                          onChange={(e) => setPrescriptionData({ ...prescriptionData, osAxis: e.target.value })}
                          className="w-full bg-white/10 border border-white/15 rounded-lg p-2 font-bold text-white text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {prescriptionMethod === 'upload' && (
                <div className="border border-dashed border-white/20 rounded-2xl p-8 text-center bg-black/40">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <div className="text-sm font-bold text-white mb-1">
                    Upload Prescription Image / PDF
                  </div>
                  <p className="text-xs text-slate-400 mb-4 max-w-sm mx-auto">
                    Take a clear photo of your doctor's slip. Our refractionists in Vadakkencherry / Alathur will calibrate your lenses.
                  </p>
                  <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold cursor-pointer hover:bg-slate-200">
                    <FileText className="w-4 h-4" />
                    <span>Select File</span>
                    <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" />
                  </label>
                  {prescriptionData.uploadedFileName && (
                    <div className="mt-3 text-xs text-emerald-400 font-bold flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4" />
                      <span>{prescriptionData.uploadedFileName}</span>
                    </div>
                  )}
                </div>
              )}

              {prescriptionMethod === 'later' && (
                <div className="bg-optimex-blue/10 border border-optimex-blue/30 rounded-2xl p-5 text-slate-300 text-xs leading-relaxed">
                  <strong>Submit later via WhatsApp:</strong> Reserve your frame online now. Our optical dispensary team will message you on WhatsApp to request your doctor prescription prior to lens crafting.
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">Total:</span>
            <span className="text-xl font-mono font-bold text-white">{formatPrice(totalPrice)}</span>
          </div>

          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2.5 rounded-xl border border-white/15 text-slate-300 text-xs font-bold hover:bg-white/5 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 rounded-xl bg-optimex-blue hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-glow-blue"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinishAndAdd}
                className="px-6 py-2.5 rounded-xl bg-optimex-red hover:bg-optimex-redHover text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-glow-red"
              >
                <Glasses className="w-4 h-4" />
                <span>Add Customized Glasses to Bag</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
