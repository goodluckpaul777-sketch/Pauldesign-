import React, { useState } from 'react';
import { AD_PLATFORMS } from '../data/platformsAndServices';
import { Globe, Briefcase, MessageSquare, Facebook, MapPin, Megaphone, Instagram, ExternalLink, Sparkles, Lightbulb, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const AdPlatformsGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-500" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'Facebook': return <Facebook className="w-5 h-5 text-blue-500" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-red-500" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-amber-500" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-pink-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      default: return <Globe className="w-5 h-5 text-slate-500" />;
    }
  };

  const filteredPlatforms = selectedCategory === 'all'
    ? AD_PLATFORMS
    : AD_PLATFORMS.filter(p => p.category === selectedCategory);

  return (
    <div id="platforms-section" className="py-10 space-y-10">
      
      {/* Header section with larger font */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> Direct Marketing Channels
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Where to Advertise Your Web Building Services
        </h2>
        <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
          High-traffic platforms and local Nigerian commerce channels to post your web design services, receive direct calls to <strong className="text-emerald-700 font-mono">0810 625 9457</strong>, and close client contracts.
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
          onClick={() => setSelectedCategory('nigerian-commerce')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
            selectedCategory === 'nigerian-commerce'
              ? 'bg-emerald-600 text-white shadow-md font-bold'
              : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Nigerian Products (Clothes, Food, Fish)</span>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPlatforms.map((platform) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 shrink-0">
                    {getIcon(platform.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {platform.name}
                    </h3>
                    <div className="text-sm font-semibold text-slate-500 mt-1">
                      Best for: <span className="text-emerald-700 font-bold">{platform.bestFor}</span>
                    </div>
                  </div>
                </div>

                <span className={`text-xs font-black px-3 py-1.5 rounded-full shrink-0 ${
                  platform.popularity === 'Very High' 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-blue-100 text-blue-800 border border-blue-300'
                }`}>
                  {platform.popularity}
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {platform.description}
              </p>

              {/* Practical tips */}
              <div className="bg-slate-50 rounded-2xl p-5 space-y-3 border border-slate-200/80">
                <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Pro Tips to Get Clients Here:</span>
                </div>
                <ul className="space-y-2">
                  {platform.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-slate-700 flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visit Link */}
            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Contact: <strong className="text-slate-800">08106259457</strong>
              </span>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                <span>Visit {platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
