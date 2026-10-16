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
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      {/* Main Floating Action Button - Responsive & Non-blocking */}
      <motion.button
        id="submit-info-floating-button"
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 sm:gap-3 p-2.5 sm:px-4 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 shadow-[0_4px_25px_rgba(16,185,129,0.4)] border-2 border-white ring-2 ring-emerald-500/30 transition-all font-black text-xs sm:text-sm cursor-pointer"
        aria-label="Give Paul your website info: company name, slogan, motto, pictures, contacts and social media"
      >
        <span className="hidden sm:inline-block absolute -top-2.5 -right-2 bg-red-500 text-white font-mono font-black text-[9px] px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider border border-white">
          START HERE
        </span>

        {/* Glowing Icon */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-950 text-emerald-400 flex items-center justify-center font-black shadow-inner shrink-0">
          <ClipboardEdit className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </div>

        {/* Text Label - Compact on mobile */}
        <div className="text-left flex flex-col pr-1">
          <span className="hidden sm:block text-[9px] uppercase font-mono font-extrabold tracking-wider text-slate-900 leading-none">
            ⭐ 1-CLICK FORM
          </span>
          <span className="text-xs sm:text-sm font-black text-slate-950 leading-tight">
            Submit Info
          </span>
        </div>

        <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-current shrink-0" />
      </motion.button>
    </aside>
  );
};
