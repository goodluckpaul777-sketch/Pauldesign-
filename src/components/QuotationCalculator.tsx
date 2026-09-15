import React, { useState } from 'react';
import { Layers, Check, Phone, MessageSquare, Sparkles, Copy, ShieldCheck, CheckCircle, RefreshCw, Globe, Server, Wrench, Palette, Mail } from 'lucide-react';

export const QuotationCalculator: React.FC = () => {
  const [siteType, setSiteType] = useState<'frontpage' | 'fullwebsite'>('frontpage');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    hostingDomain: true,
    technicalSetup: true,
    maintenance: false,
    aiImages: false,
  });
  const [orderId, setOrderId] = useState<string>(() => `PWD-${Math.floor(1000 + Math.random() * 9000)}`);
  const [copied, setCopied] = useState<boolean>(false);

  const siteTypeName = siteType === 'frontpage' 
    ? 'Front Page / Profile Website (Single-Page Layout)' 
    : 'Full Website Editing + Custom Icons (Multi-Section Custom Build)';

  const selectedDeliverables = [
    siteType === 'frontpage' ? 'Single-page responsive layout & profile sections' : 'Multi-page custom design & handcrafted SVG icons',
    ...(addons.hostingDomain ? ['Live hosting setup + Custom Domain registration'] : []),
    ...(addons.technicalSetup ? ['Back-end system architecture & admin management handover'] : []),
    ...(addons.maintenance ? ['Scheduled ongoing technical maintenance & content updates'] : []),
    ...(addons.aiImages ? ['Custom AI-generated graphics & thematic brand visuals'] : []),
    '100% Mobile responsiveness on all smartphones & tablets',
    'WhatsApp & direct phone click-to-call integration',
    'Full source code and ownership transfer to client',
  ];

  const fullOrderSummary = `*PAUL WEB DESIGN - PROJECT ORDER BRIEF #${orderId}*
------------------------------
Selected Package: ${siteTypeName}
Live Hosting & Domain: ${addons.hostingDomain ? 'Included' : 'Not Included'}
Technical Back-End System: ${addons.technicalSetup ? 'Included (Full Admin Control)' : 'Not Included'}
Ongoing Maintenance & Support: ${addons.maintenance ? 'Included' : 'Not Included'}
Custom Graphics / Imagery: ${addons.aiImages ? 'Included' : 'Not Included'}
------------------------------
*Deliverables Included:*
- Mobile Responsive Design
- Direct Call & WhatsApp Integration
- Complete Admin Access Handover

Paul Web Design
Phone / WhatsApp: 08106259457
Email: goodluckpaul777@gmail.com`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(fullOrderSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const regenerateId = () => {
    setOrderId(`PWD-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  return (
    <div id="calculator-section" className="py-8 space-y-6">
      
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Custom Scope & Order Inquiry
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Build Your Website Project Scope
          </h2>
          <p className="text-slate-600 text-sm">
            Select your desired website type and technical features to generate an instant project specification and order ID.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Website Type selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-600" /> 1. Select Website Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSiteType('frontpage')}
                  className={`p-4 rounded-2xl text-left border text-xs font-medium transition-all ${
                    siteType === 'frontpage'
                      ? 'border-emerald-500 bg-emerald-50/60 text-slate-900 ring-2 ring-emerald-500/30'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-slate-900 text-sm">Front Page / Profile Website</span>
                    {siteType === 'frontpage' && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Single-page showcase layout, responsive mobile design, service listings, and direct contact details.
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
                    <span>Fast Delivery</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSiteType('fullwebsite')}
                  className={`p-4 rounded-2xl text-left border text-xs font-medium transition-all ${
                    siteType === 'fullwebsite'
                      ? 'border-emerald-500 bg-emerald-50/60 text-slate-900 ring-2 ring-emerald-500/30'
                      : 'border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-slate-900 text-sm">Full Website Editing + Icons</span>
                    {siteType === 'fullwebsite' && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Complete multi-page custom build, dedicated brand icons, multi-section architecture, and styling.
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-700 bg-teal-100/60 px-2.5 py-1 rounded-lg">
                    <span>Full Customization</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-indigo-600" /> 2. Technical, Hosting & Back-End Deliverables
              </label>
              
              <div className="space-y-2.5">
                
                {/* Hosting & Domain */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.hostingDomain}
                      onChange={(e) => setAddons({ ...addons, hostingDomain: e.target.checked })}
                      className="w-4.5 h-4.5 text-emerald-600 rounded accent-emerald-500"
                    />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block">Live Hosting & Custom Domain Setup</span>
                      <span className="text-[11px] text-slate-500">Publish website live online with custom .com domain registration and SSL certificate</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded shrink-0">Included</span>
                </label>

                {/* Technical Setup */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.technicalSetup}
                      onChange={(e) => setAddons({ ...addons, technicalSetup: e.target.checked })}
                      className="w-4.5 h-4.5 text-emerald-600 rounded accent-emerald-500"
                    />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block">Technical Back-End System Setup</span>
                      <span className="text-[11px] text-slate-500">Database architecture, administrative dashboard & full management access handover</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded shrink-0">Admin Access</span>
                </label>

                {/* Maintenance */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.maintenance}
                      onChange={(e) => setAddons({ ...addons, maintenance: e.target.checked })}
                      className="w-4.5 h-4.5 text-emerald-600 rounded accent-emerald-500"
                    />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block">Ongoing Website Maintenance & Updates</span>
                      <span className="text-[11px] text-slate-500">Periodic text edits, imagery refreshes & technical server checkups</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded shrink-0">Optional</span>
                </label>

                {/* AI Images */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.aiImages}
                      onChange={(e) => setAddons({ ...addons, aiImages: e.target.checked })}
                      className="w-4.5 h-4.5 text-emerald-600 rounded accent-emerald-500"
                    />
                    <div>
                      <span className="text-xs font-semibold text-slate-800 block">Custom AI-Generated Visual Assets</span>
                      <span className="text-[11px] text-slate-500">Custom illustrations, banners & thematic high-definition visuals tailored for your brand</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.5 rounded shrink-0">Creative</span>
                </label>

              </div>
            </div>

            {/* Quality & Handover Guarantee Note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-0.5">Direct Developer Commitment:</span>
                Every website includes <strong>full source code ownership</strong>, <strong>complete admin access</strong>, and <strong>responsive mobile styling</strong> tested on real devices.
              </div>
            </div>

          </div>

          {/* Right Column: Project Scope & Order Card */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl sticky top-6">
            
            {/* Header with Generated Order ID */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Order Brief #{orderId}</span>
                <button 
                  onClick={regenerateId}
                  title="Generate New Reference ID"
                  className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
              <span className="text-[10px] bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-300 font-mono">
                Ready to Submit
              </span>
            </div>

            {/* Scope Heading */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Selected Solution:</div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {siteType === 'frontpage' ? 'Front Page / Profile Website' : 'Full Custom Website + Icons'}
              </div>
            </div>

            {/* Deliverable Highlights */}
            <div className="space-y-2.5 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>Included Deliverables</span>
                <span className="text-emerald-400 font-mono text-[11px]">{selectedDeliverables.length} Items</span>
              </div>
              <ul className="space-y-2">
                {selectedDeliverables.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Direct Line & Email Card */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-slate-400 block text-[11px]">Paul Web Design:</span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">0810 625 9457</span>
                </div>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/20">
                  Call / WhatsApp
                </span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Email:</span>
                <span className="text-cyan-300 font-mono">goodluckpaul777@gmail.com</span>
              </div>
            </div>

            {/* Actions: Copy Brief, WhatsApp & Email */}
            <div className="space-y-2.5">
              
              <button
                type="button"
                onClick={handleCopyOrder}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-all active:scale-95"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
                <span>{copied ? 'Project Brief & Order ID Copied!' : `Copy Order Brief (${orderId})`}</span>
              </button>

              <a
                href={`https://wa.me/2348106259457?text=${encodeURIComponent(fullOrderSummary)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Order via WhatsApp (08106259457)</span>
              </a>

              <a
                href={`mailto:goodluckpaul777@gmail.com?subject=${encodeURIComponent(`Website Project Order #${orderId} - Paul Web Design`)}&body=${encodeURIComponent(fullOrderSummary)}`}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email Order to Paul (goodluckpaul777@gmail.com)</span>
              </a>

              <a
                href="tel:08106259457"
                className="w-full py-2 rounded-xl bg-transparent hover:bg-slate-900 text-slate-400 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call 0810 625 9457 Directly</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
