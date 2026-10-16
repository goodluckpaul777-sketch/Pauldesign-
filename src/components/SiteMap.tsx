import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Copy, 
  Check, 
  Globe, 
  FileCode
} from 'lucide-react';
import { logoImg } from '../assets/images';

interface SiteMapProps {
  onOpenIntakeModal?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const SiteMap: React.FC<SiteMapProps> = () => {
  const [copiedXml, setCopiedXml] = useState(false);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://ais-pre-rx4zxh2mk5javbyp5umqrr-385736428140.europe-west3.run.app';

  const rawXmlCode = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>${baseUrl}/#nigerian-products-section</loc>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${baseUrl}/#features-section</loc>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
  <url>
    <loc>${baseUrl}/#calculator-section</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>${baseUrl}/#sitemap-section</loc>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>
  <url>
    <loc>${baseUrl}/sitemap.xml</loc>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>${baseUrl}/robots.txt</loc>
    <changefreq>monthly</changefreq>
    <priority>0.60</priority>
  </url>
</urlset>`;

  const handleCopyXml = () => {
    navigator.clipboard.writeText(rawXmlCode);
    setCopiedXml(true);
    setTimeout(() => setCopiedXml(false), 2000);
  };

  return (
    <section 
      id="sitemap-section" 
      aria-label="Website Site Map & Index Directory"
      className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden transition-all scroll-mt-24"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Website Navigation Directory</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black border border-slate-700/80 overflow-hidden shrink-0 flex items-center justify-center p-0.5 shadow-md">
                <img 
                  src={logoImg || "/assets/images/logo.png"} 
                  alt="Paul Web Design Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span>Site Map & Index Directory</span>
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200 font-medium">
              <Search className="w-4 h-4 text-emerald-400" />
              <span>Engineered for Users & Google Search Spiders • Motto: “Let Google see your product.”</span>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Every section, vertical commercial offering, interactive quotation calculator, and direct contact line across Paul Web Design is organized for rapid indexing by Google Search crawlers.
            </p>
          </div>

          {/* Quick Action Links for Googlebot & Users */}
          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2.5 self-start md:self-center shrink-0">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Open /sitemap.xml</span>
            </a>

            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-700/80 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open /robots.txt</span>
            </a>

            <button
              onClick={handleCopyXml}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedXml ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedXml ? 'Sitemap Copied!' : 'Copy Sitemap XML'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
