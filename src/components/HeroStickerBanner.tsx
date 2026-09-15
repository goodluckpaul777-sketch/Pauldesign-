import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, Sparkles, ShieldCheck, Zap, Globe, ArrowRight, Share2, Award, Mail, Laptop, Monitor, Server, Palette, ClipboardEdit } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroStickerBannerProps {
  onNavigateToPlatforms: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToCalculator: () => void;
  onOpenIntakeModal: () => void;
}

const GALLERY_IMAGES = [
  {
    id: 'developer',
    title: 'Web Developer with Laptop System',
    subtitle: 'Direct Developer Partnership',
    path: '/src/assets/images/developer_holding_system_1785565545926.jpg',
    badge: 'Lead Developer'
  },
  {
    id: 'studio',
    title: 'Paul Web Design Creative Studio',
    subtitle: 'High-Performance Workstation',
    path: '/src/assets/images/paul_web_studio_1789410240842.jpg',
    badge: 'Design Studio'
  },
  {
    id: 'devices',
    title: '100% Mobile & Multi-Device Tested',
    subtitle: 'Smartphones, Tablets & Desktops',
    path: '/src/assets/images/responsive_devices_1789410254877.jpg',
    badge: 'All Devices'
  },
  {
    id: 'backend',
    title: 'Custom Back-End System & Admin Portal',
    subtitle: 'Complete Database & Control Setup',
    path: '/src/assets/images/backend_control_panel_1789410267634.jpg',
    badge: 'Admin Control'
  }
];

export const HeroStickerBanner: React.FC<HeroStickerBannerProps> = ({
  onNavigateToPlatforms,
  onNavigateToFeatures,
  onNavigateToCalculator,
  onOpenIntakeModal
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const phoneNumber = '08106259457';
  const formattedPhone = '0810 625 9457';
  const emailAddress = 'goodluckpaul777@gmail.com';
  const whatsappUrl = `https://wa.me/2348106259457?text=${encodeURIComponent('Hello Paul! I saw your web design portfolio. I want to build a website with Paul Web Design.')}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const currentImage = GALLERY_IMAGES[activeImageIdx];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white rounded-3xl shadow-2xl border border-slate-800 my-4">
      {/* Background glow & subtle ambient shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 px-6 py-2.5 flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wide text-slate-950">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
          <span>PAUL WEB DESIGN • OFFICIAL ADVERT & SHOWCASE STUDIO</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-950 font-mono text-xs">
          <span>📞 0810 625 9457</span>
          <span>✉️ goodluckpaul777@gmail.com</span>
        </div>
      </div>

      <div className="p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Headline, Contact Card, Quick Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Paul Web Design • Available for New Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Paul Web Design — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Custom Websites, Back-End Setup</span> & Live Launch
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Clean website creation tailored for your brand by <strong>Paul Web Design</strong>. Complete back-end system setup for your full control & management, custom icons, live hosting, domain setup, and vibrant visual graphics.
            </p>

            {/* Feature Capability Highlights (Price-Free) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Front Page & Profile Sites</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-teal-500/40 text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Full Website + Custom Icons</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Post Live & Custom Domain</span>
              </div>
            </div>

            {/* UNMISSABLE SPOTLIGHT CARD: CLIENT INFORMATION INTAKE */}
            <div 
              id="hero-intake-spotlight-card"
              onClick={onOpenIntakeModal}
              className="relative bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 p-1 rounded-3xl shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer group transition-all hover:scale-[1.01]"
            >
              <div className="bg-slate-950 p-5 sm:p-6 rounded-[22px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 fill-current" />
                      VERY OBVIOUS TO SPOT
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      ⭐ 1-Click Intake Portal
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                    Give Paul The Information For Your Website
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs">
                      🏢 Company Name
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs">
                      ✨ Slogan & Motto
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs">
                      📸 Pictures & Images
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs">
                      📞 WhatsApp & Contacts
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-700 text-emerald-400 font-bold text-xs">
                      🌐 Social Media Handles
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-300 font-black text-xs">
                      ➕ Add Any Other Info
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-red-950 border border-red-500 text-red-300 font-black text-xs">
                      ✕ Remove Any Info
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenIntakeModal();
                  }}
                  className="w-full lg:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shrink-0 group-hover:scale-105 transition-all ring-2 ring-white/90 cursor-pointer"
                >
                  <ClipboardEdit className="w-5 h-5 stroke-[2.8]" />
                  <div className="text-left">
                    <span className="block text-[9px] uppercase font-mono tracking-wider text-slate-900 leading-none">
                      Add / Remove Details
                    </span>
                    <span>CLICK HERE TO SUBMIT INFO</span>
                  </div>
                  <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                </button>
              </div>
            </div>

            {/* Prominent Direct Contact Information with Phone and Email */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border-2 border-emerald-500/50 shadow-xl shadow-emerald-950/30 relative overflow-hidden space-y-4"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase rounded-bl-lg tracking-wider">
                Direct Inquiries
              </div>
              
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> Contact Paul Directly:
              </div>

              {/* Phone Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-b border-slate-800/80 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-slate-400 block font-mono">Phone / WhatsApp Line</span>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tracking-wider">
                    {formattedPhone}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs transition-all active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    WhatsApp
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all active:scale-95"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="text-base sm:text-lg font-bold font-mono text-cyan-300 hover:text-cyan-200 hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{emailAddress}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${emailAddress}?subject=Website%20Design%20Inquiry%20-%20Paul%20Web%20Design`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-bold text-xs transition-all active:scale-95"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Send Email
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all active:scale-95"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              
              {(copiedPhone || copiedEmail) && (
                <div className="text-xs text-emerald-400 pt-1 font-medium flex items-center gap-1.5 animate-fade-in">
                  <Check className="w-3.5 h-3.5" /> 
                  <span>{copiedPhone ? 'Phone number (08106259457) copied!' : 'Email address (goodluckpaul777@gmail.com) copied!'}</span>
                </div>
              )}
            </motion.div>

            {/* Key Bullet Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Back-End Setup</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">100% Mobile Ready</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">High Performance</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Full Handover</span>
              </div>
            </div>

            {/* Nav Quick Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-give-info-button"
                onClick={onOpenIntakeModal}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 group active:scale-95 border border-emerald-300 ring-2 ring-emerald-400/40"
              >
                <ClipboardEdit className="w-4 h-4 stroke-[2.5]" />
                <span>Give Me Your Info (Project Form)</span>
              </button>

              <button
                onClick={onNavigateToFeatures}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all border border-slate-700 flex items-center gap-2 group active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Explore Visual Showcase</span>
              </button>

              <button
                onClick={onNavigateToPlatforms}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all flex items-center gap-2"
              >
                <span>Where To Advertise</span>
                <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Lively Interactive Image Showcase with Thumbnail Switcher */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Outer Decorative Card Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md space-y-3">
              
              {/* Sticker Tag Floating Badge */}
              <div className="absolute -top-4 -left-4 z-20 bg-emerald-500 text-slate-950 px-4 py-2 rounded-2xl font-black text-xs shadow-lg uppercase tracking-wider transform -rotate-6 border-2 border-slate-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Paul Web Design
              </div>

              {/* Contact Pill floating on image */}
              <div className="absolute -bottom-2 -right-2 z-20 bg-slate-900/95 text-white px-3.5 py-2 rounded-2xl font-mono text-xs shadow-2xl border border-emerald-500/40 flex items-center gap-2 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-bold">0810 625 9457</span>
              </div>

              {/* Main Active Image Display */}
              <div className="overflow-hidden rounded-3xl border-4 border-slate-800 bg-slate-900 shadow-2xl relative group">
                <img
                  src={currentImage.path}
                  alt={currentImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill on top right of image */}
                <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full shadow-md font-mono">
                  {currentImage.badge}
                </div>

                {/* Gradient overlay at bottom of image with details */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent flex items-end p-4">
                  <div className="space-y-0.5">
                    <div className="text-white font-bold text-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{currentImage.title}</span>
                    </div>
                    <div className="text-emerald-400/90 text-xs font-medium">
                      {currentImage.subtitle}
                    </div>
                    <div className="text-slate-400 text-[11px] font-mono pt-1">
                      Paul Web Design • 08106259457 • goodluckpaul777@gmail.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Lively Image Gallery Thumbnail Bar */}
              <div className="p-2 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1 hidden sm:inline">
                  Gallery:
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-around">
                  {GALLERY_IMAGES.map((img, idx) => {
                    const isActive = activeImageIdx === idx;
                    return (
                      <button
                        key={img.id}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all group ${
                          isActive
                            ? 'border-emerald-400 ring-2 ring-emerald-500/40 scale-105 shadow-md shadow-emerald-500/20'
                            : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500'
                        }`}
                        title={img.title}
                      >
                        <img
                          src={img.path}
                          alt={img.title}
                          referrerPolicy="no-referrer"
                          className="w-12 h-10 object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
