import React, { useState } from 'react';
import { SERVICE_FEATURES, PORTFOLIO_SAMPLES } from '../data/platformsAndServices';
import { Smartphone, Zap, Search, ShoppingBag, Palette, PhoneCall, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, Phone, MessageSquare, Database, Globe, Sparkles, Wrench, Mail, Monitor, Laptop, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

const VISUAL_GALLERY = [
  {
    title: 'Creative Studio & Fast Delivery',
    subtitle: 'Paul Web Design Workstation',
    desc: 'Every layout is designed and coded with modern frameworks, high-speed loading, and high-contrast typography.',
    image: '/src/assets/images/paul_web_studio_1789410240842.jpg',
    tag: 'Studio Setup'
  },
  {
    title: '100% Mobile & Multi-Screen Tested',
    subtitle: 'Smartphones, Tablets & Desktops',
    desc: 'Tested across diverse screen sizes so your business looks immaculate on iPhones, Androids, iPads, and Laptops.',
    image: '/src/assets/images/responsive_devices_1789410254877.jpg',
    tag: 'Responsive'
  },
  {
    title: 'Back-End System & Admin Control',
    subtitle: 'Full Administrative Handover',
    desc: 'Complete control of your website. Manage contact inquiries, update images, and maintain data backups with ease.',
    image: '/src/assets/images/backend_control_panel_1789410267634.jpg',
    tag: 'Back-End Portal'
  }
];

export const FeaturesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visual' | 'features' | 'portfolio'>('visual');
  const [selectedSample, setSelectedSample] = useState<string | null>(null);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-6 h-6 text-indigo-500" />;
      case 'Globe': return <Globe className="w-6 h-6 text-teal-500" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-500" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-blue-500" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-emerald-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-slate-500" />;
    }
  };

  return (
    <div id="features-section" className="py-10 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Paul Web Design Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visual Craftsmanship & Core Capabilities
          </h2>
          <p className="text-slate-600 text-sm">
            Explore live device visuals, design studio capabilities, and the complete feature set provided by Paul Web Design.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('visual')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'visual' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Visual Showcase</span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'features' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Core Features
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'portfolio' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'hover:text-slate-900'
            }`}
          >
            Website Styles
          </button>
        </div>
      </div>

      {activeTab === 'visual' ? (
        /* Lively Visual Cards Showcase */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VISUAL_GALLERY.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 font-mono text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-500/30 shadow">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {item.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-500 font-mono">Paul Web Design</span>
                  <a
                    href="https://wa.me/2348106259457?text=Hi%20Paul!%20I%20want%20to%20build%20a%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : activeTab === 'features' ? (
        /* Features Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_FEATURES.map((feat) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors">
                  {getFeatureIcon(feat.icon)}
                </div>
                {feat.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {feat.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4" /> Included by default
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Sample Website Portfolio Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_SAMPLES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
                  {item.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="tel:08106259457"
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Request Similar Website (Call 08106259457)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Callout Banner with Paul Web Design, Phone Number 08106259457 & Email goodluckpaul777@gmail.com */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/30 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            Paul Web Design
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">
            Get Your Business Online with Paul Web Design
          </h3>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Call, WhatsApp, or send an email directly to discuss your website needs. Custom back-end system setup, live domain launch & 100% satisfaction guaranteed.
          </p>
          <div className="text-xs font-mono text-cyan-200 flex items-center gap-2 pt-1">
            <Mail className="w-3.5 h-3.5" />
            <span>goodluckpaul777@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:08106259457"
            className="px-5 py-3.5 rounded-2xl bg-white text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 font-mono active:scale-95"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>0810 625 9457</span>
          </a>

          <a
            href="https://wa.me/2348106259457?text=Hello%20Paul!%20I%20want%20to%20build%20a%20website%20with%20Paul%20Web%20Design"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:goodluckpaul777@gmail.com?subject=Website%20Design%20Order%20-%20Paul%20Web%20Design"
            className="px-5 py-3.5 rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg"
          >
            <Mail className="w-4 h-4 text-slate-950" />
            <span>Email Paul</span>
          </a>
        </div>
      </div>

    </div>
  );
};
