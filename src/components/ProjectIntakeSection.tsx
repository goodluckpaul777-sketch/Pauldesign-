import React from 'react';
import { 
  ClipboardEdit, 
  Building2, 
  Sparkles, 
  Image as ImageIcon, 
  Phone, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  MessageSquare,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectIntakeSectionProps {
  onOpenIntakeModal: () => void;
}

export const ProjectIntakeSection: React.FC<ProjectIntakeSectionProps> = ({ onOpenIntakeModal }) => {
  const checklists = [
    {
      title: 'Company & Brand',
      desc: 'Company Name, Industry brand, Slogan & Motto',
      icon: <Building2 className="w-4 h-4 text-emerald-500" />
    },
    {
      title: 'About & Services',
      desc: 'What you do, products/services, target customers',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />
    },
    {
      title: 'Pictures & Logos',
      desc: 'Images, product photos, logo files or cloud drive link',
      icon: <ImageIcon className="w-4 h-4 text-indigo-500" />
    },
    {
      title: 'Contacts & Details',
      desc: 'Email address, phone number, WhatsApp & physical location',
      icon: <Phone className="w-4 h-4 text-teal-500" />
    },
    {
      title: 'Social Media Accounts',
      desc: 'Facebook handle, Instagram, Twitter/X, TikTok & LinkedIn',
      icon: <Share2 className="w-4 h-4 text-blue-500" />
    },
    {
      title: 'Special Website Features',
      desc: 'Payment store, booking forms, testimonials & color schemes',
      icon: <CheckCircle2 className="w-4 h-4 text-pink-500" />
    }
  ];

  return (
    <div id="intake-section" className="py-8 scroll-mt-24">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-10 border-4 border-emerald-400 text-white shadow-[0_0_50px_rgba(16,185,129,0.3)] relative overflow-hidden space-y-8 ring-4 ring-emerald-500/30">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 border-b-2 border-slate-800/90 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                <Sparkles className="w-4 h-4 fill-current" /> VERY OBVIOUS TO SPOT
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                ⭐ Website Intake Portal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Give Me Your Business Info — Let's Build Your Website!
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Have a company or business that needs a website? Click below to submit your <strong className="text-emerald-300">Company Name</strong>, <strong className="text-emerald-300">Brand/Industry</strong>, <strong className="text-emerald-300">Slogan</strong>, <strong className="text-emerald-300">Motto</strong>, <strong className="text-emerald-300">Pictures/Images</strong>, <strong className="text-emerald-300">WhatsApp & Phone Contacts</strong>, and <strong className="text-emerald-300">Social Media Handles</strong>.
            </p>

            {/* Visual Callouts: Add Any Other Info & Remove Any Info */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-black flex items-center gap-1.5">
                <span>➕</span> Add Any Other Info (Hours, Bank Details, Branches, CAC)
              </span>
              <span className="px-3 py-1 rounded-xl bg-red-500/20 border border-red-400/50 text-red-300 text-xs font-black flex items-center gap-1.5">
                <span>✕</span> Remove Any Info (Skip or omit unneeded fields with 1 click)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <motion.button
              type="button"
              onClick={onOpenIntakeModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-base flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/40 ring-4 ring-white/90 transition-all cursor-pointer"
            >
              <ClipboardEdit className="w-6 h-6 stroke-[2.8]" />
              <div className="text-left">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-900 leading-none">
                  Customize Brief
                </span>
                <span className="text-base font-black">CLICK TO SUBMIT YOUR INFO</span>
              </div>
              <ArrowRight className="w-5 h-5 stroke-[2.8]" />
            </motion.button>
          </div>
        </div>

        {/* Dynamic Freedom Callout Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 relative z-10">
          <div 
            onClick={onOpenIntakeModal}
            className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-400 transition-all cursor-pointer flex items-start gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-lg shrink-0 group-hover:scale-110 transition-transform">
              ➕
            </div>
            <div>
              <h4 className="text-sm font-black text-emerald-300 flex items-center gap-1.5">
                <span>Add Any Other Info</span>
                <span className="text-xs text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Easily add custom details like Business Working Hours, CAC registration, Bank accounts, store branches, or special discount codes.
              </p>
            </div>
          </div>

          <div 
            onClick={onOpenIntakeModal}
            className="p-4 rounded-2xl bg-slate-900/90 border border-red-500/40 hover:border-red-400 transition-all cursor-pointer flex items-start gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-black text-lg shrink-0 group-hover:scale-110 transition-transform">
              ✕
            </div>
            <div>
              <h4 className="text-sm font-black text-red-300 flex items-center gap-1.5">
                <span>Remove Any Info</span>
                <span className="text-xs text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                No slogan? No TikTok? No worries! Click "Remove Field" on any item to cleanly exclude it from your final website submission.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Key Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
          {checklists.map((item, idx) => (
            <div 
              key={idx}
              onClick={onOpenIntakeModal}
              className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer group flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>{item.title}</span>
                  <span className="text-slate-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Direct Contact Info */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">Fast & Direct Delivery:</span>
            <span>All details are transmitted straight to Paul Web Design for immediate setup.</span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <a href="tel:08106259457" className="text-emerald-400 hover:underline flex items-center gap-1">
              <span>📞 08106259457</span>
            </a>
            <span className="text-slate-700">•</span>
            <a href="mailto:goodluckpaul777@gmail.com" className="text-cyan-300 hover:underline flex items-center gap-1">
              <span>✉️ goodluckpaul777@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
