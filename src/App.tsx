/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroStickerBanner } from './components/HeroStickerBanner';
import { NigerianCommerceShowcase } from './components/NigerianCommerceShowcase';
import { AdPlatformsGuide } from './components/AdPlatformsGuide';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { QuotationCalculator } from './components/QuotationCalculator';
import { ProjectIntakeSection } from './components/ProjectIntakeSection';
import { ClientIntakeModal } from './components/ClientIntakeModal';
import { FloatingIntakeIcon } from './components/FloatingIntakeIcon';
import { Phone, MessageSquare, Globe, Sparkles, Menu, X, ShieldCheck, ArrowUpRight, Copy, Check, Mail, ClipboardEdit, ShoppingBag } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [suggestedIndustry, setSuggestedIndustry] = useState<string>('');
  const phoneNumber = '08106259457';
  const emailAddress = 'goodluckpaul777@gmail.com';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenIntakeWithIndustry = (industry?: string) => {
    if (industry) {
      setSuggestedIndustry(industry);
    }
    setIntakeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-slate-950">

      {/* Main Sticky Navbar - Starts directly from Company Name & Logo */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo & Company Name */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-emerald-400 flex items-center justify-center font-black text-lg border border-slate-800 shadow-sm">
              <span className="text-emerald-400 font-black">P</span>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base leading-tight">
                Paul <span className="text-emerald-600">Web Design</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
                <span>08106259457</span>
                <span>•</span>
                <span className="hidden sm:inline">goodluckpaul777@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <button
              onClick={() => scrollToSection('nigerian-products-section')}
              className="hover:text-emerald-700 transition-colors font-bold text-slate-800 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
              <span>Nigerian Products & Websites</span>
            </button>
            <button
              onClick={() => scrollToSection('platforms-section')}
              className="hover:text-slate-900 transition-colors"
            >
              Where To Advertise
            </button>
            <button
              onClick={() => scrollToSection('features-section')}
              className="hover:text-slate-900 transition-colors"
            >
              Visual Showcase
            </button>
            <button
              onClick={() => scrollToSection('intake-section')}
              className="text-emerald-700 font-bold hover:text-emerald-800 transition-colors flex items-center gap-1"
            >
              <ClipboardEdit className="w-3.5 h-3.5" />
              <span>Submit Business Info</span>
            </button>
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="hover:text-slate-900 transition-colors"
            >
              Order Scope
            </button>
          </div>

          {/* Call, Email, WhatsApp & Give Info Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="nav-give-info-button"
              type="button"
              onClick={() => handleOpenIntakeWithIndustry()}
              className="relative group px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all active:scale-95 ring-2 ring-emerald-500/40 cursor-pointer"
              title="Submit your company and website details"
            >
              <ClipboardEdit className="w-4 h-4 stroke-[2.5]" />
              <span>Give Me Your Info</span>
            </button>

            <a
              href={`mailto:${emailAddress}`}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              title={emailAddress}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <span>Email</span>
            </a>

            <a
              href={`https://wa.me/2348106259457?text=${encodeURIComponent('Hi Paul! I want to build a website with Paul Web Design.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-emerald-200/50"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-400 font-mono font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>0810 625 9457</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-fade-in">
            <button
              id="mobile-give-info-button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenIntakeWithIndustry();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <ClipboardEdit className="w-4 h-4 stroke-[2.5]" />
              <span>Give Me Your Info (Intake Form)</span>
            </button>

            <button
              onClick={() => scrollToSection('nigerian-products-section')}
              className="block w-full text-left py-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Nigerian Products & Websites</span>
            </button>
            <button
              onClick={() => scrollToSection('platforms-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Where To Advertise
            </button>
            <button
              onClick={() => scrollToSection('features-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Visual Showcase & Features
            </button>
            <button
              onClick={() => scrollToSection('intake-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Information Submission Section
            </button>
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600"
            >
              Order Scope & Inquiry
            </button>
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                <span>08106259457</span>
                <span className="text-[11px] text-cyan-600 font-sans">goodluckpaul777@gmail.com</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs text-center"
                >
                  Call 08106259457
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="px-3 py-2 rounded-xl bg-slate-900 text-cyan-300 font-bold text-xs text-center flex items-center justify-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Paul
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        
        {/* 1. Front Page Hero Section (Developer with system, live showcase & contact info) */}
        <HeroStickerBanner
          onNavigateToPlatforms={() => scrollToSection('platforms-section')}
          onNavigateToFeatures={() => scrollToSection('features-section')}
          onNavigateToCalculator={() => scrollToSection('calculator-section')}
          onOpenIntakeModal={() => handleOpenIntakeWithIndustry()}
        />

        {/* 2. Websites I Build For Nigerian Customers (Clothes, Food, Raw Materials, Packaged Foods, Edible Fish) */}
        <NigerianCommerceShowcase
          onOpenIntakeModal={handleOpenIntakeWithIndustry}
        />

        {/* 3. Directory of Advertising Platforms (Answering user query) */}
        <AdPlatformsGuide />

        {/* 4. Features & Website Portfolio Showcase */}
        <FeaturesShowcase />

        {/* 5. Client Information Submission Intake Section */}
        <ProjectIntakeSection onOpenIntakeModal={() => handleOpenIntakeWithIndustry()} />

        {/* 6. Client Price Quotation Calculator */}
        <QuotationCalculator />

      </main>

      {/* Floating Particular Icon for Client Information Intake */}
      <FloatingIntakeIcon onClick={() => handleOpenIntakeWithIndustry()} />

      {/* Client Information Intake Modal */}
      <ClientIntakeModal
        isOpen={intakeModalOpen}
        onClose={() => {
          setIntakeModalOpen(false);
          setSuggestedIndustry('');
        }}
        developerPhone={phoneNumber}
        developerEmail={emailAddress}
        initialIndustry={suggestedIndustry}
      />

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-base">
                P
              </div>
              <span className="text-lg font-bold">Paul Web Design</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Official portfolio and advertising showcase for custom website building, back-end system setup, and live domain launches.
            </p>
            <div className="text-xs text-slate-300 font-mono">
              <span>✉️ goodluckpaul777@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-center items-start sm:items-center gap-4 text-xs text-slate-300">
            <a href="tel:08106259457" className="hover:text-emerald-400 font-mono">
              📞 Call: 08106259457
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href="https://wa.me/2348106259457" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-mono">
              💬 WhatsApp: 08106259457
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href="mailto:goodluckpaul777@gmail.com" className="hover:text-cyan-400 font-mono">
              ✉️ Email Paul
            </a>
          </div>

          <div className="text-left md:text-right space-y-1">
            <div className="text-xs text-slate-400">
              © {new Date().getFullYear()} Paul Web Design • All Rights Reserved
            </div>
            <div className="text-[11px] text-emerald-400 font-mono">
              Mobile Responsive • Back-End System • Full Handover
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

