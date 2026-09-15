import React, { useState } from 'react';
import { 
  ClipboardEdit, 
  Sparkles, 
  X, 
  ArrowRight, 
  Building2, 
  Image as ImageIcon, 
  Phone, 
  Share2, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingIntakeIconProps {
  onClick: () => void;
}

export const FloatingIntakeIcon: React.FC<FloatingIntakeIconProps> = ({ onClick }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside 
      id="floating-intake-container"
      aria-label="Client Website Information Intake"
      className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      {/* High-Visibility Callout Box - Always Obvious */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            id="intake-floating-callout"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative bg-slate-950/95 text-white p-4 rounded-3xl shadow-2xl border-2 border-emerald-400 max-w-xs sm:max-w-sm mb-1 backdrop-blur-xl ring-4 ring-emerald-500/20"
          >
            {/* Minimize toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Minimize to icon only"
              aria-label="Minimize popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Glowing Accent Strip */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 fill-current" />
                VERY OBVIOUS TO SPOT
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-lg shadow-emerald-500/30">
                <ClipboardEdit className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5 pr-2">
                <h4 className="text-sm font-black text-white leading-tight">
                  Give Me Your Business Info!
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Click here to submit your:
                </p>
                
                {/* Visual Badges of what to submit */}
                <div className="flex flex-wrap gap-1 py-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                    🏢 Company Name
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                    ✨ Slogan & Motto
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                    📸 Pictures/Images
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                    📞 WhatsApp & Contacts
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300">
                    🌐 Social Media
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-300">
                    ➕ Add Other Info
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-950 border border-red-500 text-red-300">
                    ✕ Remove Any Info
                  </span>
                </div>

                <div className="pt-1.5">
                  <button
                    type="button"
                    onClick={onClick}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ring-2 ring-emerald-300/60"
                  >
                    <ClipboardEdit className="w-4 h-4 stroke-[2.5]" />
                    <span>CLICK HERE TO OPEN INTAKE FORM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pointer arrow pointing down to button */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-slate-950 border-r-2 border-b-2 border-emerald-400 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Action Button - High Contrast, Pulsing & Unmissable */}
      <motion.button
        id="submit-info-floating-button"
        type="button"
        onClick={() => {
          if (isMinimized) {
            setIsMinimized(false);
          }
          onClick();
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.5)] border-3 border-white ring-4 ring-emerald-500/40 transition-all font-black text-sm cursor-pointer"
        aria-label="Give Paul your website info: company name, slogan, motto, pictures, contacts and social media"
      >
        {/* Pulsing Radar Rings */}
        <span className="absolute -inset-1.5 rounded-2xl bg-emerald-400 opacity-50 group-hover:opacity-80 blur-md transition-opacity animate-ping pointer-events-none" />
        <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white font-mono font-black text-[10px] px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider animate-bounce border-2 border-white">
          START HERE
        </span>

        {/* Large Glowing Icon */}
        <div className="relative w-9 h-9 rounded-xl bg-slate-950 text-emerald-400 flex items-center justify-center font-black shadow-inner">
          <ClipboardEdit className="w-5 h-5 stroke-[2.8] group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* High-Contrast Bold Text Label */}
        <div className="text-left flex flex-col pr-1">
          <span className="text-[10px] uppercase font-mono font-extrabold tracking-wider text-slate-900 leading-none">
            ⭐ SUBMIT DETAILS
          </span>
          <span className="text-sm font-black text-slate-950 leading-tight">
            Give Me Your Info
          </span>
        </div>

        <Sparkles className="w-4 h-4 text-slate-950 fill-current animate-pulse" />
      </motion.button>
    </aside>
  );
};
