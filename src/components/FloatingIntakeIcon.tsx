import React from 'react';
import { 
  ClipboardEdit, 
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingIntakeIconProps {
  onClick: () => void;
}

export const FloatingIntakeIcon: React.FC<FloatingIntakeIconProps> = ({ onClick }) => {
  return (
    <aside 
      id="floating-intake-container"
      aria-label="Client Website Information Intake"
      className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      {/* Main Floating Action Button - High Contrast, Pulsing & Unmissable */}
      <motion.button
        id="submit-info-floating-button"
        type="button"
        onClick={onClick}
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
