import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  Palette, 
  Layers, 
  Image as ImageIcon, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  FolderDown, 
  Share2, 
  Smartphone, 
  Layout, 
  Award,
  ExternalLink,
  Eye,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  StickerRenderOptions, 
  THEME_PALETTES, 
  renderStickerToCanvas, 
  downloadStickerAsPng, 
  downloadStickerAsSvg 
} from '../utils/stickerRenderer';

interface StickerCustomizerProps {
  initialPhone?: string;
}

const AVAILABLE_PHOTOS = [
  {
    id: 'studio',
    label: 'Studio Workspace',
    path: '/src/assets/images/paul_web_studio_1789410240842.jpg'
  },
  {
    id: 'devices',
    label: 'Multi-Device View',
    path: '/src/assets/images/responsive_devices_1789410254877.jpg'
  },
  {
    id: 'backend',
    label: 'Back-End Portal',
    path: '/src/assets/images/backend_control_panel_1789410267634.jpg'
  },
  {
    id: 'developer',
    label: 'Developer with Laptop',
    path: '/src/assets/images/developer_holding_system_1785565545926.jpg'
  }
];

export const StickerCustomizer: React.FC<StickerCustomizerProps> = ({
  initialPhone = '08106259457'
}) => {
  const [options, setOptions] = useState<StickerRenderOptions>({
    title: 'Paul Web Design',
    tagline: 'Need a Professional Website for Your Business?',
    phone: initialPhone,
    email: 'goodluckpaul777@gmail.com',
    badgeText: '★ 100% Quality & Satisfaction Guaranteed',
    services: [
      'Front Page Profile & Business Websites',
      'Full Website Editing & Custom Icons',
      'Back-End System Setup & Full Control',
      '100% Mobile Responsive & High Speed'
    ],
    themeColor: 'emerald',
    template: 'showcase',
    includeAvatar: true,
    includeQrCode: false,
    avatarImgUrl: '/src/assets/images/paul_web_studio_1789410240842.jpg'
  });

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [textCopied, setTextCopied] = useState(false);
  const [customService, setCustomService] = useState('');
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const headlinePresets = [
    'Need a Professional Website for Your Business?',
    'Get Your Business Online With a High-Converting Website',
    'Custom Website Design, Back-End System & Full Handover',
    'Stop Losing Customers! Upgrade Your Online Presence Today'
  ];

  // Re-render offscreen preview on canvas when options change
  useEffect(() => {
    if (canvasRef.current) {
      renderStickerToCanvas(canvasRef.current, options);
    }
  }, [options]);

  const handleDownloadPng = async () => {
    setIsDownloading(true);
    const filename = `website-developer-advert-${options.template}.png`;
    const success = await downloadStickerAsPng(options, filename);
    setIsDownloading(false);

    if (success) {
      setDownloadSuccess(`Downloaded "${filename}" to your Files / Downloads folder!`);
      setTimeout(() => setDownloadSuccess(null), 5000);
    }
  };

  const handleDownloadSvg = () => {
    const filename = `website-developer-advert-${options.template}.svg`;
    downloadStickerAsSvg(options, filename);
    setDownloadSuccess(`Downloaded "${filename}" vector file to your Files folder!`);
    setTimeout(() => setDownloadSuccess(null), 5000);
  };

  const handleCopyText = () => {
    const advertText = `🚀 ${options.title.toUpperCase()}
${options.tagline}

Key Highlights (No Hidden Fees):
${options.services.map(s => `• ${s}`).join('\n')}

📞 Direct Call / WhatsApp: ${options.phone}
${options.badgeText}`;

    navigator.clipboard.writeText(advertText);
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 3000);
  };

  const handleToggleService = (service: string) => {
    if (options.services.includes(service)) {
      setOptions({
        ...options,
        services: options.services.filter(s => s !== service)
      });
    } else {
      setOptions({
        ...options,
        services: [...options.services, service]
      });
    }
  };

  const handleAddCustomService = (e: React.FormEvent) => {
    e.preventDefault();
    if (customService.trim() && !options.services.includes(customService.trim())) {
      setOptions({
        ...options,
        services: [...options.services, customService.trim()]
      });
      setCustomService('');
    }
  };

  const currentTheme = THEME_PALETTES[options.themeColor] || THEME_PALETTES.emerald;

  return (
    <div id="customizer-section" className="py-8 space-y-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <FolderDown className="w-3.5 h-3.5 text-emerald-600" /> Presentable Advert Sticker & File Downloader
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Create & Download Your Presentable Advert Sticker
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Clean, highly presentable promotional sticker focusing on your craftsmanship, verified reputation, and direct contact. <strong>100% price-free</strong> and ready to download as a high-res image file that opens directly in your device's Files, Photos, or WhatsApp!
        </p>
      </div>

      {/* Success Notification Bar */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-2xl bg-emerald-950 text-white border border-emerald-500/50 shadow-xl flex items-center justify-between gap-4 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-300">File Saved Successfully!</div>
                <div className="text-xs text-slate-300">{downloadSuccess}</div>
              </div>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 bg-emerald-900/60 px-3 py-1.5 rounded-lg border border-emerald-600/40">
              Ready in Files app
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Customization Controls */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Palette className="w-4 h-4 text-emerald-600" /> Customize Design & Content
            </h3>
            <span className="text-xs text-slate-400 font-mono">Price-free sticker</span>
          </div>

          {/* Template Format Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-indigo-600" /> 1. Select Layout Template
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setOptions({ ...options, template: 'showcase' })}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  options.template === 'showcase'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700 text-xs'
                }`}
              >
                <div className="font-bold text-xs">Showcase Card</div>
                <div className="text-[10px] text-slate-500">1:1 Square Poster</div>
              </button>

              <button
                type="button"
                onClick={() => setOptions({ ...options, template: 'story' })}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  options.template === 'story'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700 text-xs'
                }`}
              >
                <div className="font-bold text-xs">WhatsApp Story</div>
                <div className="text-[10px] text-slate-500">9:16 Vertical Status</div>
              </button>

              <button
                type="button"
                onClick={() => setOptions({ ...options, template: 'badge' })}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  options.template === 'badge'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700 text-xs'
                }`}
              >
                <div className="font-bold text-xs">Decal Badge</div>
                <div className="text-[10px] text-slate-500">Wide Contact Decal</div>
              </button>
            </div>
          </div>

          {/* Color Scheme Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 2. Sticker Color Theme
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {(Object.keys(THEME_PALETTES) as Array<keyof typeof THEME_PALETTES>).map((colorKey) => {
                const p = THEME_PALETTES[colorKey];
                const isSelected = options.themeColor === colorKey;
                return (
                  <button
                    key={colorKey}
                    type="button"
                    onClick={() => setOptions({ ...options, themeColor: colorKey })}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'border-slate-900 bg-slate-950 text-white shadow-sm ring-2 ring-emerald-500/40'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span 
                      className="w-3 h-3 rounded-full border border-black/20" 
                      style={{ backgroundColor: p.accent }}
                    />
                    <span>{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Phone Number & Email Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone / WhatsApp
              </label>
              <input
                type="text"
                value={options.phone}
                onChange={(e) => setOptions({ ...options, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm font-bold text-slate-900"
                placeholder="08106259457"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-600" /> Email Address
              </label>
              <input
                type="email"
                value={options.email || ''}
                onChange={(e) => setOptions({ ...options, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-xs font-mono text-slate-900"
                placeholder="goodluckpaul777@gmail.com"
              />
            </div>
          </div>

          {/* Headline Tagline with Quick Presets */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Main Presentation Headline
            </label>
            <textarea
              rows={2}
              value={options.tagline}
              onChange={(e) => setOptions({ ...options, tagline: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-semibold text-slate-900 resize-none"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {headlinePresets.map((preset, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOptions({ ...options, tagline: preset })}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors truncate max-w-[280px]"
                  title={preset}
                >
                  "{preset.slice(0, 32)}..."
                </button>
              ))}
            </div>
          </div>

          {/* Title & Trust Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase">
                Brand / Developer Title
              </label>
              <input
                type="text"
                value={options.title}
                onChange={(e) => setOptions({ ...options, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 uppercase">
                Trust Badge Banner
              </label>
              <input
                type="text"
                value={options.badgeText}
                onChange={(e) => setOptions({ ...options, badgeText: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-900"
              />
            </div>
          </div>

          {/* Service Feature Bullets */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
              <span>Included Services (Check to show)</span>
              <span className="text-[10px] text-slate-400 font-normal">Max 4 on sticker</span>
            </label>
            <div className="space-y-1.5">
              {[
                'Front Page Profile & Business Websites',
                'Full Website Editing & Custom Icons',
                'Back-End System Setup & Full Control',
                '100% Mobile Responsive & High Speed',
                'WhatsApp & Direct Call Integration',
                'Custom AI-Generated Images & Graphics'
              ].map((svc) => (
                <label 
                  key={svc} 
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer text-xs font-medium text-slate-800"
                >
                  <input
                    type="checkbox"
                    checked={options.services.includes(svc)}
                    onChange={() => handleToggleService(svc)}
                    className="w-4 h-4 text-emerald-600 rounded accent-emerald-500"
                  />
                  <span>{svc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Toggle Developer System Graphic & Photo Selector */}
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <ImageIcon className="w-4 h-4 text-indigo-600" />
                <span>Include System / Studio Photo</span>
              </div>
              <button
                type="button"
                onClick={() => setOptions({ ...options, includeAvatar: !options.includeAvatar })}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  options.includeAvatar ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    options.includeAvatar ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {options.includeAvatar && (
              <div className="space-y-1.5 pt-1">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Select Photo for Sticker:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {AVAILABLE_PHOTOS.map((photo) => {
                    const isSelected = options.avatarImgUrl === photo.path;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setOptions({ ...options, avatarImgUrl: photo.path })}
                        className={`flex items-center gap-2 p-1.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50 text-slate-900 ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                        }`}
                      >
                        <img
                          src={photo.path}
                          alt={photo.label}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-lg object-cover shrink-0 border border-slate-200"
                        />
                        <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                          {photo.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Live Interactive Preview & Instant Download Hub */}
        <div className="lg:col-span-7 space-y-6 sticky top-20">
          
          {/* Main Download Action Bar */}
          <div className="bg-slate-950 text-white p-5 sm:p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3.5">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">Ready for Download</span>
                <span className="text-sm font-bold text-white">Save Sticker File to Open on Files / Photos</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No Prices • 100% Presentable
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* High-Res PNG Button */}
              <button
                type="button"
                onClick={handleDownloadPng}
                disabled={isDownloading}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 disabled:opacity-50"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>{isDownloading ? 'Generating High-Res File...' : 'Download Sticker (PNG File)'}</span>
              </button>

              {/* Vector SVG Button */}
              <button
                type="button"
                onClick={handleDownloadSvg}
                className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2.5 border border-slate-700 transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Vector (SVG)</span>
              </button>

            </div>

            {/* Quick Share / WhatsApp / Copy Text */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
              <button
                type="button"
                onClick={handleCopyText}
                className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
              >
                {textCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{textCopied ? 'Advert Text Copied!' : 'Copy Caption / Bio Text'}</span>
              </button>

              <a
                href={`https://wa.me/234${options.phone.replace(/^0/, '')}?text=${encodeURIComponent(`Hi! I am contacting you regarding website building services for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Test WhatsApp Link ({options.phone})</span>
              </a>
            </div>

          </div>

          {/* Live Preview Card on Canvas */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-slate-400" /> Live Render Preview
              </span>
              <span className="font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {options.template === 'story' ? '1080 x 1920 Status' : options.template === 'badge' ? '1200 x 700 Decal' : '1200 x 1200 Square'}
              </span>
            </div>

            {/* Canvas Container with smooth scaling */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950 p-2 sm:p-4 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-auto rounded-2xl shadow-inner max-h-[580px] object-contain transition-all"
              />
            </div>
            
            <p className="text-center text-xs text-slate-500 pt-1">
              Click <strong>"Download Sticker (PNG File)"</strong> to save this high-resolution picture to your phone or computer. You can immediately open it in your Files app, send it to clients, or post it on your WhatsApp Status!
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
