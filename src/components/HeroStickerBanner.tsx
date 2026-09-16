import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, Sparkles, ShieldCheck, Zap, Globe, ArrowRight, Share2, Award, Mail, Laptop, Monitor, Server, Palette, ClipboardEdit } from 'lucide-react';
import { motion } from 'motion/react';
import { developerImg, studioImg, devicesImg, backendImg } from '../assets/images';

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
    path: developerImg || '/assets/images/developer_holding_system_1785565545926.jpg',
    fallback: '/assets/images/developer_holding_system_1785565545926.jpg',
    badge: 'Lead Developer'
  },
  {
    id: 'studio',
    title: 'Paul Web Design Creative Studio',
    subtitle: 'High-Performance Workstation',
    path: studioImg || '/assets/images/paul_web_studio_1789410240842.jpg',
    fallback: '/assets/images/paul_web_studio_1789410240842.jpg',
    badge: 'Design Studio'
  },
  {
    id: 'devices',
    title: '100% Mobile & Multi-Device Tested',
    subtitle: 'Smartphones, Tablets & Desktops',
    path: devicesImg || '/assets/images/responsive_devices_1789410254877.jpg',
    fallback: '/assets/images/responsive_devices_1789410254877.jpg',
    badge: 'All Devices'
  },
  {
    id: 'backend',
    title: 'Custom Back-End System & Admin Portal',
    subtitle: 'Complete Database & Control Setup',
    path: backendImg || '/assets/images/backend_control_panel_1789410267634.jpg',
    fallback: '/assets/images/backend_control_panel_1789410267634.jpg',
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

      <div className="p-6 sm:p-10 md:p-14">
        {/* Top Header & Main Headline with Spacious Typography */}
        <div className="space-y-6 max-w-5xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 text-sm font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Paul Web Design • Available for New Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Paul Web Design — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Custom Websites, Back-End Setup</span> & Live Launch
          </h1>

          <p className="text-slate-200 text-lg sm:text-2xl leading-relaxed font-normal">
            Clean, high-speed website creation tailored for your business by <strong>Paul Web Design</strong>. Complete back-end system setup for your full control & management, custom icons, live hosting, domain setup, and vibrant visual graphics.
          </p>
        </div>

        {/* Spacious 2-Column Section: Left (Actions & Direct Contact) | Right (Multi-Image Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">

          {/* Left Column: Intake Spotlight & Direct Contact (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">

            {/* UNMISSABLE SPOTLIGHT CARD: CLIENT INFORMATION INTAKE */}
            <div 
              id="hero-intake-spotlight-card"
              onClick={onOpenIntakeModal}
              className="relative bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 p-1 rounded-3xl shadow-[0_0_35px_rgba(16,185,129,0.35)] cursor-pointer group transition-all hover:scale-[1.01]"
            >
              <div className="bg-slate-950 p-6 sm:p-7 rounded-[22px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                      ⭐ 1-Click Project Form
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Give Paul The Information For Your Website
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Submit your company name, slogan, products, pictures, phone number, and social handles to start building immediately.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenIntakeModal();
                  }}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-black text-base flex items-center justify-center gap-2 shadow-xl shrink-0 group-hover:scale-105 transition-all ring-2 ring-white/90 cursor-pointer"
                >
                  <ClipboardEdit className="w-5 h-5 stroke-[2.8]" />
                  <span>SUBMIT INFO NOW</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.8]" />
                </button>
              </div>
            </div>

            {/* Prominent Direct Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border-2 border-emerald-500/50 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="text-sm text-emerald-400 uppercase font-black tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Direct Contact Line</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  Ready to Chat
                </span>
              </div>

              {/* Phone Row with Large Font */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Call or WhatsApp Paul</span>
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 tracking-wider hover:underline block"
                  >
                    {formattedPhone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/50 font-black text-sm transition-all active:scale-95 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    title="Copy Phone Number"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="text-base sm:text-lg font-bold font-mono text-cyan-300 hover:text-cyan-200 hover:underline flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{emailAddress}</span>
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              {copiedPhone && (
                <div className="text-sm text-emerald-400 font-semibold flex items-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4" /> 
                  <span>Phone number (08106259457) copied to clipboard!</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Multi-Image Showcase Display (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Featured Active Image */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src={currentImage.path}
                alt={currentImage.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== currentImage.fallback) {
                    e.currentTarget.src = currentImage.fallback;
                  }
                }}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-300"
              />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 px-3.5 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentImage.badge}</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5">
                <div className="text-white font-extrabold text-lg sm:text-xl flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{currentImage.title}</span>
                </div>
                <div className="text-emerald-300 text-sm font-medium mt-0.5">
                  {currentImage.subtitle}
                </div>
              </div>
            </div>

            {/* Showcase More Images Grid: 4 Interactive Images Grid */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider px-1">
                <span>Showcase of System & Studio Images ({GALLERY_IMAGES.length})</span>
                <span className="text-emerald-400 font-mono">Click to preview</span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {GALLERY_IMAGES.map((img, idx) => {
                  const isActive = activeImageIdx === idx;
                  return (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative rounded-2xl overflow-hidden border-2 transition-all cursor-pointer group aspect-4/3 ${
                        isActive
                          ? 'border-emerald-400 ring-2 ring-emerald-500/50 scale-102 shadow-lg shadow-emerald-500/30'
                          : 'border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
                      }`}
                    >
                      <img
                        src={img.path}
                        alt={img.title}
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (e.currentTarget.src !== img.fallback) {
                            e.currentTarget.src = img.fallback;
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white truncate drop-shadow-md">
                        {img.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
