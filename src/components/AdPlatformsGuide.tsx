import React, { useState } from 'react';
import { AD_PLATFORMS, READY_COPY_TEMPLATES } from '../data/platformsAndServices';
import { AdPlatform } from '../types';
import { Globe, Briefcase, MessageSquare, Facebook, MapPin, Megaphone, Instagram, ExternalLink, Copy, Check, Sparkles, Lightbulb, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const AdPlatformsGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-500" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'Facebook': return <Facebook className="w-5 h-5 text-blue-500" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-red-500" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-amber-500" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-pink-500" />;
      default: return <Globe className="w-5 h-5 text-slate-500" />;
    }
  };

  const filteredPlatforms = selectedCategory === 'all'
    ? AD_PLATFORMS
    : AD_PLATFORMS.filter(p => p.category === selectedCategory);

  const handleCopyTemplate = (text: string, index: number) => {
    const trackingId = `COPY-${Math.floor(1000 + Math.random() * 9000)}`;
    const copyWithId = `${text}\n\n[Ref Copy ID: ${trackingId}]`;
    navigator.clipboard.writeText(copyWithId);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <div id="platforms-section" className="py-8 space-y-10">
      
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Direct Marketing Channels
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Best Websites & Platforms to Advertise Your Web Building Services
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Here is a curated directory of high-traffic platforms where you can post your services, get direct phone calls to <strong className="text-slate-900 font-mono">08106259457</strong>, and land paying web clients.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          All Channels ({AD_PLATFORMS.length})
        </button>
        <button
          onClick={() => setSelectedCategory('freelance')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCategory === 'freelance'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          Global Freelance Sites
        </button>
        <button
          onClick={() => setSelectedCategory('local')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCategory === 'local'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          Local Directories & WhatsApp
        </button>
        <button
          onClick={() => setSelectedCategory('social')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            selectedCategory === 'social'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          Social Media Networks
        </button>
      </div>

      {/* Grid of Advertising Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredPlatforms.map((platform) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    {getIcon(platform.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      {platform.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-500">
                      Best for: <span className="text-slate-700 font-semibold">{platform.bestFor}</span>
                    </span>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  platform.popularity === 'Very High' 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {platform.popularity} Traffic
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {platform.description}
              </p>

              {/* Practical tips */}
              <div className="bg-slate-50 rounded-xl p-3.5 space-y-2 border border-slate-100">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Pro Tips to get clients here:
                </div>
                <ul className="space-y-1.5">
                  {platform.tips.map((tip, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visit Link */}
            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Add phone: 08106259457
              </span>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <span>Visit {platform.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ready-to-use Ad Pitch Copy Templates section */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Copy className="w-3.5 h-3.5" /> Ready Copy Templates
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Copy & Paste Ad Messages (Pre-loaded with 08106259457)
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Copy these proven text messages to post immediately on WhatsApp Status, Facebook Groups, or Nairaland.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {READY_COPY_TEMPLATES.map((tmpl, idx) => (
            <div key={idx} className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-emerald-400 border-b border-slate-800 pb-2">
                  {tmpl.title}
                </h4>
                <pre className="text-xs font-sans text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {tmpl.text}
                </pre>
              </div>

              <button
                onClick={() => handleCopyTemplate(tmpl.text, idx)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 border border-slate-700 transition-all active:scale-95"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Text Message</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
