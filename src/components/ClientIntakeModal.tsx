import React, { useState, useRef } from 'react';
import { 
  X, 
  Building2, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  UploadCloud, 
  Image as ImageIcon, 
  Trash2, 
  Check, 
  Copy, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  PlusCircle, 
  RotateCcw, 
  CheckCircle2, 
  FileText, 
  Palette, 
  Info,
  AlertCircle,
  Coins,
  MapPin
} from 'lucide-react';
import { ClientProjectBrief, UploadedImageInfo, CustomInfoItem } from '../types';

interface ClientIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  developerPhone?: string;
  developerEmail?: string;
  initialIndustry?: string;
}

const INITIAL_BRIEF: ClientProjectBrief = {
  companyName: '',
  brandIndustry: '',
  slogan: '',
  motto: '',
  targetMarket: 'both',
  targetCountry: '',
  currencyPreference: 'NGN & USD',
  phoneCountryCode: '+234',
  aboutCompany: '',
  servicesProducts: '',
  targetAudience: '',
  contactPerson: '',
  email: '',
  phone: '',
  whatsapp: '',
  physicalAddress: '',
  facebook: '',
  instagram: '',
  twitter: '',
  tiktok: '',
  linkedin: '',
  otherSocials: '',
  preferredColors: '',
  logoNotes: '',
  uploadedImages: [],
  externalMediaLinks: '',
  keyFeaturesNeeded: ['Mobile Responsive', 'WhatsApp Contact Button', 'Admin Control Back-End'],
  referenceWebsites: '',
  additionalNotes: '',
  urgencyTimeline: 'Standard (1-2 Weeks)',
  customInfoItems: [],
  removedFields: []
};

const SAMPLE_DEMO_DATA: ClientProjectBrief = {
  companyName: 'Apex Prime Logistics & Retail',
  brandIndustry: 'E-Commerce, Freight & Express Delivery',
  slogan: 'Delivering Excellence at the Speed of Trust',
  motto: 'Integrity, Reliability, Speed',
  targetMarket: 'both',
  targetCountry: 'Nigeria & Worldwide (UK, US, Canada, EU)',
  currencyPreference: 'NGN (₦) & USD ($)',
  phoneCountryCode: '+234',
  aboutCompany: 'Apex Prime is a premier logistics and modern merchandise provider founded to simplify express shipments, online consumer goods delivery, and interstate parcel handling for individuals and businesses.',
  servicesProducts: 'Door-to-door express parcel delivery, Warehousing & distribution, Verified online retail merchandise store, Corporate fleet solutions',
  targetAudience: 'Online shoppers, e-commerce vendors, SMEs, corporate executives needing fast courier and logistics services.',
  contactPerson: 'Director / Client Manager',
  email: 'support@apexprimelogistics.com',
  phone: '08123456789',
  whatsapp: '08123456789',
  physicalAddress: 'Suite 12, Commercial Plaza, Lagos, Nigeria',
  facebook: 'facebook.com/ApexPrimeLogistics',
  instagram: '@apexprime_official',
  twitter: '@apex_prime',
  tiktok: '@apexprimetok',
  linkedin: 'linkedin.com/company/apex-prime-logistics',
  otherSocials: 'YouTube: @ApexPrimeChannel',
  preferredColors: 'Emerald Green, Deep Slate Navy & Crisp White',
  logoNotes: 'We have our official emblem logo in PNG format with transparent background and high-res product photos ready.',
  uploadedImages: [],
  externalMediaLinks: 'https://drive.google.com/drive/folders/sample-media-assets',
  keyFeaturesNeeded: [
    'Mobile Responsive',
    'WhatsApp Contact Button',
    'Admin Control Back-End',
    'Online Booking / Tracking Form',
    'Customer Testimonials Showcase',
    'Google Maps Location Integration'
  ],
  referenceWebsites: 'https://fedex.com, https://dhl.com, clean modern corporate style',
  additionalNotes: 'Please ensure our WhatsApp button is prominently placed on both mobile and desktop views. Fast loading speed is a high priority.',
  urgencyTimeline: 'Fast / Within 1 Week',
  customInfoItems: [
    { id: 'sample-custom-1', label: 'Business Working Hours', value: 'Monday - Saturday: 8:00 AM - 7:00 PM' },
    { id: 'sample-custom-2', label: 'CAC Registration Number', value: 'RC: 1849204' }
  ],
  removedFields: []
};

const FEATURE_OPTIONS = [
  'Mobile Responsive',
  'WhatsApp Contact Button',
  'Admin Control Back-End',
  'Online Payment / Store',
  'Contact Form & Inquiries',
  'Photo & Product Gallery',
  'Customer Testimonials',
  'Google Maps Integration',
  'Blog / News Section',
  'Booking / Appointment System'
];

const PRESET_CUSTOM_INFO = [
  { label: 'Business Working Hours', placeholder: 'e.g. Mon-Sat: 8:00 AM - 6:00 PM, Sunday: Closed' },
  { label: 'Bank Details for Payments', placeholder: 'e.g. Bank Name, Account Number, Account Name' },
  { label: 'CAC / Business Reg Number', placeholder: 'e.g. RC: 1234567 or BN: 987654' },
  { label: 'Branch / Store Locations', placeholder: 'e.g. Branch 1: Ikeja, Branch 2: Abuja Central' },
  { label: 'Target Launch Date / Deadline', placeholder: 'e.g. Must launch before October 25th' },
  { label: 'Special Promo / Discount Offer', placeholder: 'e.g. 10% discount for first 50 website visitors' },
  { label: 'Custom Domain Name Wanted', placeholder: 'e.g. www.apexlogistics.ng (already purchased / needed)' },
  { label: 'Certifications & Accreditations', placeholder: 'e.g. ISO 9001 Certified, Licensed Courier Provider' }
];

export const ClientIntakeModal: React.FC<ClientIntakeModalProps> = ({
  isOpen,
  onClose,
  developerPhone = '08106259457',
  developerEmail = 'goodluckpaul777@gmail.com',
  initialIndustry
}) => {
  const [brief, setBrief] = useState<ClientProjectBrief>(INITIAL_BRIEF);

  React.useEffect(() => {
    if (initialIndustry && isOpen) {
      setBrief(prev => ({
        ...prev,
        brandIndustry: initialIndustry
      }));
    }
  }, [initialIndustry, isOpen]);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Custom Info Form State
  const [customLabel, setCustomLabel] = useState<string>('');
  const [customValue, setCustomValue] = useState<string>('');
  const [showCustomForm, setShowCustomForm] = useState<boolean>(false);

  const totalSteps = 6;

  const handleInputChange = (field: keyof ClientProjectBrief, value: any) => {
    setBrief(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Remove or Clear field value
  const handleClearField = (field: keyof ClientProjectBrief) => {
    setBrief(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  // Toggle field exclusion from submission
  const handleToggleExcludeField = (fieldName: string) => {
    setBrief(prev => {
      const removed = prev.removedFields || [];
      const isCurrentlyRemoved = removed.includes(fieldName);
      return {
        ...prev,
        removedFields: isCurrentlyRemoved 
          ? removed.filter(f => f !== fieldName)
          : [...removed, fieldName]
      };
    });
  };

  const isFieldExcluded = (fieldName: string): boolean => {
    return (brief.removedFields || []).includes(fieldName);
  };

  // Add Custom Info
  const handleAddCustomInfo = () => {
    if (!customLabel.trim() || !customValue.trim()) return;
    const newItem: CustomInfoItem = {
      id: Math.random().toString(36).substring(2, 9),
      label: customLabel.trim(),
      value: customValue.trim()
    };

    setBrief(prev => ({
      ...prev,
      customInfoItems: [...(prev.customInfoItems || []), newItem]
    }));

    setCustomLabel('');
    setCustomValue('');
    setShowCustomForm(false);
  };

  const handleQuickAddPreset = (preset: { label: string; placeholder: string }) => {
    setCustomLabel(preset.label);
    setCustomValue('');
    setShowCustomForm(true);
  };

  // Remove Custom Info
  const handleRemoveCustomInfo = (id: string) => {
    setBrief(prev => ({
      ...prev,
      customInfoItems: (prev.customInfoItems || []).filter(item => item.id !== id)
    }));
  };

  const handleToggleFeature = (feature: string) => {
    setBrief(prev => {
      const exists = prev.keyFeaturesNeeded.includes(feature);
      return {
        ...prev,
        keyFeaturesNeeded: exists 
          ? prev.keyFeaturesNeeded.filter(f => f !== feature)
          : [...prev.keyFeaturesNeeded, feature]
      };
    });
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setBrief(prev => ({
              ...prev,
              uploadedImages: [
                ...prev.uploadedImages,
                {
                  id: Math.random().toString(36).substring(2, 9),
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  dataUrl: e.target?.result as string
                }
              ]
            }));
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleRemoveImage = (id: string) => {
    setBrief(prev => ({
      ...prev,
      uploadedImages: prev.uploadedImages.filter(img => img.id !== id)
    }));
  };

  const handleClearAllImages = () => {
    setBrief(prev => ({
      ...prev,
      uploadedImages: []
    }));
  };

  const handleLoadSample = () => {
    setBrief(SAMPLE_DEMO_DATA);
  };

  const handleResetForm = () => {
    if (window.confirm('Clear all entered information and start fresh?')) {
      setBrief(INITIAL_BRIEF);
      setActiveStep(1);
      setSubmittedStatus(false);
    }
  };

  // Compile formatted text brief respecting active and removed fields
  const generateFormattedBriefText = (): string => {
    const isExcluded = (fieldKey: string) => (brief.removedFields || []).includes(fieldKey);

    const sections: string[] = [];

    sections.push(`📋 *WEBSITE PROJECT BRIEF FOR PAUL WEB DESIGN*
Recipient: Paul Web Design (Call/WhatsApp: ${developerPhone})
Date: ${new Date().toLocaleDateString()}`);

    // 1. Company & Brand
    const compLines: string[] = [];
    if (!isExcluded('companyName')) compLines.push(`• Company Name: ${brief.companyName || 'Not specified'}`);
    if (!isExcluded('brandIndustry')) compLines.push(`• Brand / Industry: ${brief.brandIndustry || 'Not specified'}`);
    if (!isExcluded('targetMarket')) {
      const marketLabel = brief.targetMarket === 'international' 
        ? 'International / Global Audience' 
        : brief.targetMarket === 'local' 
        ? 'Local / Domestic Audience' 
        : 'Both Local & International Audience';
      compLines.push(`• Market Reach: ${marketLabel}`);
    }
    if (!isExcluded('targetCountry') && brief.targetCountry) compLines.push(`• Target Countries / Location: ${brief.targetCountry}`);
    if (!isExcluded('currencyPreference') && brief.currencyPreference) compLines.push(`• Currency Preference: ${brief.currencyPreference}`);
    if (!isExcluded('slogan') && brief.slogan) compLines.push(`• Slogan: ${brief.slogan}`);
    if (!isExcluded('motto') && brief.motto) compLines.push(`• Motto: ${brief.motto}`);
    if (compLines.length > 0) {
      sections.push(`========================================\n1. COMPANY & BRAND IDENTITY\n========================================\n${compLines.join('\n')}`);
    }

    // 2. About & Services
    const aboutLines: string[] = [];
    if (!isExcluded('aboutCompany') && brief.aboutCompany) {
      aboutLines.push(`• About Company:\n${brief.aboutCompany}`);
    }
    if (!isExcluded('servicesProducts') && brief.servicesProducts) {
      aboutLines.push(`• Services & Products:\n${brief.servicesProducts}`);
    }
    if (!isExcluded('targetAudience') && brief.targetAudience) {
      aboutLines.push(`• Target Audience: ${brief.targetAudience}`);
    }
    if (aboutLines.length > 0) {
      sections.push(`========================================\n2. ABOUT & SERVICES\n========================================\n${aboutLines.join('\n\n')}`);
    }

    // 3. Contact Details
    const contactLines: string[] = [];
    const phonePrefix = (!isExcluded('phoneCountryCode') && brief.phoneCountryCode) ? `(${brief.phoneCountryCode}) ` : '';
    if (!isExcluded('contactPerson') && brief.contactPerson) contactLines.push(`• Contact Person: ${brief.contactPerson}`);
    if (!isExcluded('phone') && brief.phone) contactLines.push(`• Phone Number: ${phonePrefix}${brief.phone}`);
    if (!isExcluded('whatsapp') && (brief.whatsapp || brief.phone)) contactLines.push(`• WhatsApp Number: ${phonePrefix}${brief.whatsapp || brief.phone}`);
    if (!isExcluded('email') && brief.email) contactLines.push(`• Email: ${brief.email}`);
    if (!isExcluded('physicalAddress') && brief.physicalAddress) contactLines.push(`• Physical Address: ${brief.physicalAddress}`);
    if (contactLines.length > 0) {
      sections.push(`========================================\n3. CONTACT DETAILS\n========================================\n${contactLines.join('\n')}`);
    }

    // 4. Social Media
    const socialLines: string[] = [];
    if (!isExcluded('facebook') && brief.facebook) socialLines.push(`• Facebook: ${brief.facebook}`);
    if (!isExcluded('instagram') && brief.instagram) socialLines.push(`• Instagram: ${brief.instagram}`);
    if (!isExcluded('twitter') && brief.twitter) socialLines.push(`• Twitter/X: ${brief.twitter}`);
    if (!isExcluded('tiktok') && brief.tiktok) socialLines.push(`• TikTok: ${brief.tiktok}`);
    if (!isExcluded('linkedin') && brief.linkedin) socialLines.push(`• LinkedIn: ${brief.linkedin}`);
    if (!isExcluded('otherSocials') && brief.otherSocials) socialLines.push(`• Other Socials: ${brief.otherSocials}`);
    if (socialLines.length > 0) {
      sections.push(`========================================\n4. SOCIAL MEDIA HANDLES\n========================================\n${socialLines.join('\n')}`);
    }

    // 5. Visuals & Media
    const visualLines: string[] = [];
    if (!isExcluded('preferredColors') && brief.preferredColors) visualLines.push(`• Preferred Color Palette: ${brief.preferredColors}`);
    if (!isExcluded('logoNotes') && brief.logoNotes) visualLines.push(`• Logo Notes: ${brief.logoNotes}`);
    if (brief.uploadedImages.length > 0) visualLines.push(`• Image Files Attached: ${brief.uploadedImages.length} image(s) ready`);
    if (!isExcluded('externalMediaLinks') && brief.externalMediaLinks) visualLines.push(`• Cloud Media Link (Drive/Dropbox): ${brief.externalMediaLinks}`);
    if (visualLines.length > 0) {
      sections.push(`========================================\n5. VISUALS, LOGO & MEDIA ASSETS\n========================================\n${visualLines.join('\n')}`);
    }

    // 6. Additional Custom Info (Added by User)
    if (brief.customInfoItems && brief.customInfoItems.length > 0) {
      const customLines = brief.customInfoItems.map(item => `• ${item.label}:\n  ${item.value}`);
      sections.push(`========================================\n6. ADDITIONAL CUSTOM INFORMATION (ADDED BY CLIENT)\n========================================\n${customLines.join('\n\n')}`);
    }

    // 7. Key Features & Delivery
    const featureLines: string[] = [];
    if (brief.keyFeaturesNeeded.length > 0) featureLines.push(`• Key Features Needed: ${brief.keyFeaturesNeeded.join(', ')}`);
    if (!isExcluded('referenceWebsites') && brief.referenceWebsites) featureLines.push(`• Reference Websites: ${brief.referenceWebsites}`);
    if (brief.urgencyTimeline) featureLines.push(`• Urgency / Timeline: ${brief.urgencyTimeline}`);
    if (!isExcluded('additionalNotes') && brief.additionalNotes) featureLines.push(`• Additional Notes:\n${brief.additionalNotes}`);
    if (featureLines.length > 0) {
      sections.push(`========================================\n7. KEY WEBSITE FEATURES & DELIVERY\n========================================\n${featureLines.join('\n')}`);
    }

    sections.push(`----------------------------------------\nSent for Website Development by Paul Web Design.`);

    return sections.join('\n\n');
  };

  const handleSendWhatsApp = () => {
    const text = generateFormattedBriefText();
    const cleanPhone = developerPhone.replace(/\D/g, '');
    const internationalPhone = cleanPhone.startsWith('0') ? `234${cleanPhone.slice(1)}` : cleanPhone;
    const url = `https://wa.me/${internationalPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmittedStatus(true);
  };

  const handleSendEmail = () => {
    const text = generateFormattedBriefText();
    const subject = `Website Project Brief - ${brief.companyName || 'New Client'}`;
    const mailtoUrl = `mailto:${developerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoUrl;
    setSubmittedStatus(true);
  };

  const handleCopyToClipboard = () => {
    const text = generateFormattedBriefText();
    navigator.clipboard.writeText(text);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 3000);
  };

  const handleDownloadBriefFile = () => {
    const text = generateFormattedBriefText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Website_Project_Brief_${(brief.companyName || 'Company').replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  if (!isOpen) return null;

  // Render a field with Clear/Remove & Exclude actions
  const renderFieldControls = (fieldName: string, currentVal: string, onClear: () => void) => {
    const excluded = isFieldExcluded(fieldName);
    return (
      <div className="flex items-center gap-2">
        {currentVal && (
          <button
            type="button"
            onClick={onClear}
            className="text-[11px] text-slate-400 hover:text-red-500 flex items-center gap-1 font-semibold transition-colors"
            title="Clear this text"
          >
            <X className="w-3 h-3" />
            <span>Clear</span>
          </button>
        )}
        <button
          type="button"
          onClick={() => handleToggleExcludeField(fieldName)}
          className={`text-[11px] font-bold px-2 py-0.5 rounded transition-colors flex items-center gap-1 ${
            excluded 
              ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' 
              : 'text-slate-400 hover:text-red-600'
          }`}
          title={excluded ? 'Restore this field into submission' : 'Exclude/Remove this field from submission'}
        >
          {excluded ? (
            <>
              <RotateCcw className="w-3 h-3" />
              <span>Restore Field</span>
            </>
          ) : (
            <>
              <Trash2 className="w-3 h-3" />
              <span>Remove Field</span>
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <div 
      id="client-intake-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
    >
      <div 
        id="client-intake-modal-card"
        className="bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
              <FileText className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Provide Your Website Information
                </h3>
                <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                  Paul Web Design
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Add any other info or remove any info you don't need with 1 click before submitting.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetForm}
              className="text-xs text-slate-400 hover:text-red-400 font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-900 transition-colors flex items-center gap-1.5"
              title="Clear all fields and reset form"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear All Info</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSample}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 hidden sm:flex items-center gap-1.5 transition-colors"
              title="Pre-fill with sample demo business info"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fill Sample Data</span>
            </button>
            <button
              id="close-intake-modal-button"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Indicator Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 overflow-x-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[
              { num: 1, label: 'Company & Brand', short: '1. Brand' },
              { num: 2, label: 'About & Services', short: '2. About' },
              { num: 3, label: 'Contact & Socials', short: '3. Contact' },
              { num: 4, label: 'Photos & Visuals', short: '4. Photos' },
              { num: 5, label: 'Other Information', short: '5. Other Info' },
              { num: 6, label: 'Review & Send', short: '6. Send' }
            ].map((st) => (
              <button
                key={st.num}
                type="button"
                onClick={() => setActiveStep(st.num)}
                className={`px-3 sm:px-4 py-2 rounded-xl font-black text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  activeStep === st.num
                    ? 'bg-slate-950 text-emerald-400 shadow-md ring-2 ring-emerald-400/40'
                    : activeStep > st.num
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'text-slate-600 bg-slate-200/70 hover:bg-slate-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                  activeStep === st.num ? 'bg-emerald-400 text-slate-950' : 'bg-slate-300 text-slate-800'
                }`}>
                  {st.num}
                </span>
                <span className="hidden sm:inline">{st.label}</span>
                <span className="sm:hidden">{st.short}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveStep(5);
                setShowCustomForm(true);
              }}
              className="text-xs font-black text-emerald-800 hover:text-emerald-900 bg-emerald-200/80 hover:bg-emerald-200 px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>+ Add Info</span>
            </button>
          </div>
        </div>

        {/* Form Body - Scrollable */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">

          {/* STEP 1: COMPANY & BRAND IDENTITY */}
          {activeStep === 1 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 1: Company Name & Brand Identity</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Tell Paul the primary name and identity for your website.
                  </p>
                </div>
                <div className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 1 of 6
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Company Name */}
                <div className={`space-y-1.5 sm:col-span-2 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('companyName') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span>1. Company or Business Name *</span>
                      {isFieldExcluded('companyName') && <span className="text-[10px] text-amber-700 font-bold">(EXCLUDED)</span>}
                    </label>
                    {renderFieldControls('companyName', brief.companyName, () => handleClearField('companyName'))}
                  </div>
                  <input
                    type="text"
                    required
                    value={brief.companyName}
                    disabled={isFieldExcluded('companyName')}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="e.g. Apex Global Services, Paul Fashion Hub, Prime Realty"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* 2. Brand / Line of Business */}
                <div className={`space-y-1.5 sm:col-span-2 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('brandIndustry') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      2. Brand / Line of Business / Industry
                    </label>
                    {renderFieldControls('brandIndustry', brief.brandIndustry, () => handleClearField('brandIndustry'))}
                  </div>
                  <input
                    type="text"
                    value={brief.brandIndustry}
                    disabled={isFieldExcluded('brandIndustry')}
                    onChange={(e) => handleInputChange('brandIndustry', e.target.value)}
                    placeholder="e.g. Fashion, E-Commerce, Logistics, Restaurant, Real Estate, Consulting"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* 3. Market Scope: Local vs International */}
                <div className={`space-y-2.5 sm:col-span-2 p-3.5 rounded-2xl border transition-all ${
                  isFieldExcluded('targetMarket') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-emerald-50/40 border-emerald-200/90'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-emerald-600" />
                      <span>3. Market Reach / Client Audience (Local vs International)</span>
                    </label>
                    {renderFieldControls('targetMarket', brief.targetMarket, () => handleClearField('targetMarket'))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      disabled={isFieldExcluded('targetMarket')}
                      onClick={() => handleInputChange('targetMarket', 'local')}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                        brief.targetMarket === 'local'
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>Local Only</span>
                      </div>
                      <span className={`text-[10px] hidden sm:block ${brief.targetMarket === 'local' ? 'text-emerald-100' : 'text-slate-500'}`}>
                        City or Domestic country only
                      </span>
                    </button>

                    <button
                      type="button"
                      disabled={isFieldExcluded('targetMarket')}
                      onClick={() => handleInputChange('targetMarket', 'international')}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                        brief.targetMarket === 'international'
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span>International</span>
                      </div>
                      <span className={`text-[10px] hidden sm:block ${brief.targetMarket === 'international' ? 'text-emerald-100' : 'text-slate-500'}`}>
                        Overseas & Global reach
                      </span>
                    </button>

                    <button
                      type="button"
                      disabled={isFieldExcluded('targetMarket')}
                      onClick={() => handleInputChange('targetMarket', 'both')}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                        brief.targetMarket === 'both'
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>Both Local & Intl</span>
                      </div>
                      <span className={`text-[10px] hidden sm:block ${brief.targetMarket === 'both' ? 'text-emerald-100' : 'text-slate-500'}`}>
                        Domestic + Worldwide clients
                      </span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {/* Target Countries / Region */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                        Target Country / Locations:
                      </label>
                      <input
                        type="text"
                        value={brief.targetCountry || ''}
                        disabled={isFieldExcluded('targetCountry')}
                        onChange={(e) => handleInputChange('targetCountry', e.target.value)}
                        placeholder="e.g. Nigeria, Ghana, UK, US, Worldwide"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs text-slate-900 bg-white"
                      />
                    </div>

                    {/* Currency preference */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1 flex items-center gap-1">
                        <Coins className="w-3 h-3 text-emerald-600" />
                        <span>Website Currency Preference:</span>
                      </label>
                      <input
                        type="text"
                        value={brief.currencyPreference || ''}
                        disabled={isFieldExcluded('currencyPreference')}
                        onChange={(e) => handleInputChange('currencyPreference', e.target.value)}
                        placeholder="e.g. NGN (₦), USD ($), GBP (£), Multi-Currency"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs text-slate-900 bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Slogan */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('slogan') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      3. Company Slogan
                    </label>
                    {renderFieldControls('slogan', brief.slogan, () => handleClearField('slogan'))}
                  </div>
                  <input
                    type="text"
                    value={brief.slogan}
                    disabled={isFieldExcluded('slogan')}
                    onChange={(e) => handleInputChange('slogan', e.target.value)}
                    placeholder="e.g. Delivering Excellence at the Speed of Trust"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* 4. Motto */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('motto') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      4. Company Motto
                    </label>
                    {renderFieldControls('motto', brief.motto, () => handleClearField('motto'))}
                  </div>
                  <input
                    type="text"
                    value={brief.motto}
                    disabled={isFieldExcluded('motto')}
                    onChange={(e) => handleInputChange('motto', e.target.value)}
                    placeholder="e.g. Quality, Integrity, Reliability"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-xs text-emerald-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Tip from Paul:</strong> Don't have a slogan or motto? Simply click <em>"Remove Field"</em> on either item and Paul will generate clean branding concepts for you.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: ABOUT & SERVICES */}
          {activeStep === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>Step 2: About Company & Services</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Describe what your business does, your products/services, and your target audience.
                  </p>
                </div>
                <div className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 2 of 6
                </div>
              </div>

              <div className="space-y-4">
                {/* About Company */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('aboutCompany') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      1. About Your Company / Mission / Story
                    </label>
                    {renderFieldControls('aboutCompany', brief.aboutCompany, () => handleClearField('aboutCompany'))}
                  </div>
                  <textarea
                    rows={4}
                    value={brief.aboutCompany}
                    disabled={isFieldExcluded('aboutCompany')}
                    onChange={(e) => handleInputChange('aboutCompany', e.target.value)}
                    placeholder="Describe what your company does, who founded it, your vision, and why clients should choose you..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 resize-y bg-white"
                  />
                </div>

                {/* Services & Products */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('servicesProducts') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      2. List of Services or Products You Sell
                    </label>
                    {renderFieldControls('servicesProducts', brief.servicesProducts, () => handleClearField('servicesProducts'))}
                  </div>
                  <textarea
                    rows={3}
                    value={brief.servicesProducts}
                    disabled={isFieldExcluded('servicesProducts')}
                    onChange={(e) => handleInputChange('servicesProducts', e.target.value)}
                    placeholder="e.g. 1. Custom Men's Tailoring, 2. Ready-to-wear Suits, 3. Nationwide Delivery..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 resize-y bg-white"
                  />
                </div>

                {/* Target Audience */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('targetAudience') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      3. Target Audience / Ideal Customers
                    </label>
                    {renderFieldControls('targetAudience', brief.targetAudience, () => handleClearField('targetAudience'))}
                  </div>
                  <input
                    type="text"
                    value={brief.targetAudience}
                    disabled={isFieldExcluded('targetAudience')}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    placeholder="e.g. Small business owners, working professionals, youth, parents"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & SOCIAL MEDIA */}
          {activeStep === 3 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <span>Step 3: Phone, WhatsApp & Social Media</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Enter your contact numbers and handles for customers to reach you.
                  </p>
                </div>
                <div className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 3 of 6
                </div>
              </div>

              {/* International / Local Dialing Code Selector */}
              <div className={`p-3 rounded-2xl border transition-all ${
                isFieldExcluded('phoneCountryCode') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/70 border-slate-200'
              }`}>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Phone Country Dialing Code (Local or International)</span>
                  </label>
                  {renderFieldControls('phoneCountryCode', brief.phoneCountryCode, () => handleClearField('phoneCountryCode'))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { code: '+234', label: '🇳🇬 Nigeria (+234)' },
                    { code: '+1', label: '🇺🇸 / 🇨🇦 US/Canada (+1)' },
                    { code: '+44', label: '🇬🇧 UK (+44)' },
                    { code: '+233', label: '🇬🇭 Ghana (+233)' },
                    { code: '+27', label: '🇿🇦 S.Africa (+27)' },
                    { code: '+971', label: '🇦🇪 UAE (+971)' },
                  ].map((dial) => (
                    <button
                      key={dial.code}
                      type="button"
                      disabled={isFieldExcluded('phoneCountryCode')}
                      onClick={() => handleInputChange('phoneCountryCode', dial.code)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        brief.phoneCountryCode === dial.code
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      {dial.label}
                    </button>
                  ))}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <span className="text-[11px] text-slate-500 font-semibold">Custom Code:</span>
                    <input
                      type="text"
                      value={brief.phoneCountryCode || ''}
                      disabled={isFieldExcluded('phoneCountryCode')}
                      onChange={(e) => handleInputChange('phoneCountryCode', e.target.value)}
                      placeholder="+..."
                      className="w-20 px-2 py-1 rounded-lg border border-slate-300 text-xs font-mono text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Direct Contact Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('phone') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone (Calls)
                    </label>
                    {renderFieldControls('phone', brief.phone, () => handleClearField('phone'))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {brief.phoneCountryCode && !isFieldExcluded('phoneCountryCode') && (
                      <span className="px-2.5 py-2 rounded-xl bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-700 shrink-0">
                        {brief.phoneCountryCode}
                      </span>
                    )}
                    <input
                      type="tel"
                      value={brief.phone}
                      disabled={isFieldExcluded('phone')}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="e.g. 0810 123 4567"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('whatsapp') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Number
                    </label>
                    {renderFieldControls('whatsapp', brief.whatsapp, () => handleClearField('whatsapp'))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {brief.phoneCountryCode && !isFieldExcluded('phoneCountryCode') && (
                      <span className="px-2.5 py-2 rounded-xl bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-700 shrink-0">
                        {brief.phoneCountryCode}
                      </span>
                    )}
                    <input
                      type="tel"
                      value={brief.whatsapp}
                      disabled={isFieldExcluded('whatsapp')}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="e.g. 0810 123 4567"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-mono text-slate-900 bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('email') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-600" /> Official Email
                    </label>
                    {renderFieldControls('email', brief.email, () => handleClearField('email'))}
                  </div>
                  <input
                    type="email"
                    value={brief.email}
                    disabled={isFieldExcluded('email')}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="e.g. info@yourcompany.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                {/* Physical Address */}
                <div className={`space-y-1.5 p-3 rounded-2xl border transition-all ${
                  isFieldExcluded('physicalAddress') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-indigo-600" /> Physical Location
                    </label>
                    {renderFieldControls('physicalAddress', brief.physicalAddress, () => handleClearField('physicalAddress'))}
                  </div>
                  <input
                    type="text"
                    value={brief.physicalAddress}
                    disabled={isFieldExcluded('physicalAddress')}
                    onChange={(e) => handleInputChange('physicalAddress', e.target.value)}
                    placeholder="e.g. Suite 4B, Allen Avenue, Ikeja, Lagos"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>

              {/* Social Media Handles with Individual Clear & Remove */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Social Media Handles (Remove any you don't use):
                  </label>
                  <span className="text-[11px] text-slate-500">Only non-empty handles will appear on your website</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Facebook */}
                  <div className={`p-2.5 rounded-xl border ${isFieldExcluded('facebook') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/40 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-blue-600">Facebook</span>
                      {renderFieldControls('facebook', brief.facebook, () => handleClearField('facebook'))}
                    </div>
                    <input
                      type="text"
                      value={brief.facebook}
                      disabled={isFieldExcluded('facebook')}
                      onChange={(e) => handleInputChange('facebook', e.target.value)}
                      placeholder="facebook.com/yourpage"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>

                  {/* Instagram */}
                  <div className={`p-2.5 rounded-xl border ${isFieldExcluded('instagram') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/40 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-pink-600">Instagram</span>
                      {renderFieldControls('instagram', brief.instagram, () => handleClearField('instagram'))}
                    </div>
                    <input
                      type="text"
                      value={brief.instagram}
                      disabled={isFieldExcluded('instagram')}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                      placeholder="@yourbrand"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>

                  {/* Twitter / X */}
                  <div className={`p-2.5 rounded-xl border ${isFieldExcluded('twitter') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/40 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">Twitter / X</span>
                      {renderFieldControls('twitter', brief.twitter, () => handleClearField('twitter'))}
                    </div>
                    <input
                      type="text"
                      value={brief.twitter}
                      disabled={isFieldExcluded('twitter')}
                      onChange={(e) => handleInputChange('twitter', e.target.value)}
                      placeholder="@yourbrand"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>

                  {/* TikTok */}
                  <div className={`p-2.5 rounded-xl border ${isFieldExcluded('tiktok') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/40 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-950">TikTok</span>
                      {renderFieldControls('tiktok', brief.tiktok, () => handleClearField('tiktok'))}
                    </div>
                    <input
                      type="text"
                      value={brief.tiktok}
                      disabled={isFieldExcluded('tiktok')}
                      onChange={(e) => handleInputChange('tiktok', e.target.value)}
                      placeholder="@yourbrandtok"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>

                  {/* LinkedIn / Other */}
                  <div className={`p-2.5 rounded-xl border sm:col-span-2 ${isFieldExcluded('linkedin') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/40 border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-indigo-700">LinkedIn / YouTube / Other Handles</span>
                      {renderFieldControls('linkedin', brief.linkedin, () => handleClearField('linkedin'))}
                    </div>
                    <input
                      type="text"
                      value={brief.linkedin}
                      disabled={isFieldExcluded('linkedin')}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      placeholder="LinkedIn URL, YouTube channel, or any extra social links"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PICTURES, IMAGES & BRANDING */}
          {activeStep === 4 && (
            <div className="space-y-5 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-emerald-600" />
                    <span>Step 4: Pictures, Images & Brand Logo</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Upload your business photos, products, and logo files.
                  </p>
                </div>
                <div className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 4 of 6
                </div>
              </div>

              {/* Drag and Drop / Click File Upload Zone */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    1. Upload Images & Pictures (Drag & Drop or Click)
                  </label>
                  {brief.uploadedImages.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearAllImages}
                      className="text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove All Images ({brief.uploadedImages.length})</span>
                    </button>
                  )}
                </div>

                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragOver(false);
                    handleFileUpload(e.dataTransfer.files);
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDragOver
                      ? 'border-emerald-500 bg-emerald-50/80 scale-[1.01]'
                      : 'border-slate-300 hover:border-slate-400 bg-slate-50/70 hover:bg-slate-50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e.target.files)}
                  />
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <UploadCloud className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Click to browse files or drag and drop images here
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports PNG, JPG, JPEG, SVG, WebP. Logos, storefront photos, product catalogs, etc.
                  </p>
                </div>

                {/* Uploaded Files Preview List */}
                {brief.uploadedImages.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold text-slate-700">
                      Uploaded Images ({brief.uploadedImages.length}):
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {brief.uploadedImages.map((img) => (
                        <div 
                          key={img.id}
                          className="group relative rounded-xl border border-slate-200 overflow-hidden bg-slate-900 aspect-square flex items-center justify-center"
                        >
                          <img
                            src={img.dataUrl}
                            alt={img.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveImage(img.id);
                            }}
                            className="absolute top-1.5 right-1.5 p-1 rounded-lg bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove this image"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-1 text-[10px] text-white truncate text-center font-mono">
                            {img.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Cloud Drive Link */}
              <div className={`space-y-1.5 pt-2 p-3 rounded-2xl border ${isFieldExcluded('externalMediaLinks') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'}`}>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    2. Cloud Link to Photos (Google Drive / Dropbox / OneDrive)
                  </label>
                  {renderFieldControls('externalMediaLinks', brief.externalMediaLinks, () => handleClearField('externalMediaLinks'))}
                </div>
                <input
                  type="url"
                  value={brief.externalMediaLinks}
                  disabled={isFieldExcluded('externalMediaLinks')}
                  onChange={(e) => handleInputChange('externalMediaLinks', e.target.value)}
                  placeholder="e.g. https://drive.google.com/drive/folders/your-assets-folder"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs font-mono text-slate-900 bg-white"
                />
              </div>

              {/* Preferred Colors & Logo Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className={`space-y-1.5 p-3 rounded-2xl border ${isFieldExcluded('preferredColors') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'}`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-indigo-600" /> Preferred Colors
                    </label>
                    {renderFieldControls('preferredColors', brief.preferredColors, () => handleClearField('preferredColors'))}
                  </div>
                  <input
                    type="text"
                    value={brief.preferredColors}
                    disabled={isFieldExcluded('preferredColors')}
                    onChange={(e) => handleInputChange('preferredColors', e.target.value)}
                    placeholder="e.g. Royal Blue & Gold, Emerald & Black, or Clean White"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>

                <div className={`space-y-1.5 p-3 rounded-2xl border ${isFieldExcluded('logoNotes') ? 'bg-amber-50/60 border-amber-200 opacity-60' : 'bg-slate-50/50 border-slate-200'}`}>
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Logo Notes
                    </label>
                    {renderFieldControls('logoNotes', brief.logoNotes, () => handleClearField('logoNotes'))}
                  </div>
                  <input
                    type="text"
                    value={brief.logoNotes}
                    disabled={isFieldExcluded('logoNotes')}
                    onChange={(e) => handleInputChange('logoNotes', e.target.value)}
                    placeholder="e.g. Logo uploaded, or 'Please design a logo for me'"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: OTHER INFORMATION (HOURS, BANK, CAC, BRANCHES, CUSTOM DETAILS) */}
          {activeStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <span>Step 5: Other Information & Custom Details</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Add any extra details necessary for your website like working hours, bank payment details, branch locations, CAC number, or special instructions.
                  </p>
                </div>
                <span className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 5 of 6
                </span>
              </div>

              {/* 🌟 ADD OTHER INFO BUILDER */}
              <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-5 border-2 border-emerald-400/80 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-sm">
                      +
                    </span>
                    <div>
                      <h5 className="text-sm font-black text-white">
                        Add Other Information
                      </h5>
                      <p className="text-xs text-slate-300">
                        Include opening hours, branch addresses, CAC number, bank payment info, or any custom request.
                      </p>
                    </div>
                  </div>

                  {!showCustomForm && (
                    <button
                      type="button"
                      onClick={() => setShowCustomForm(true)}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>+ Add New Info Field</span>
                    </button>
                  )}
                </div>

                {/* Quick Presets for 1-Click Adding */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                    Quick Suggestion Presets (Click to add):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_CUSTOM_INFO.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleQuickAddPreset(preset)}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-emerald-900/60 border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-emerald-200 transition-all font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <PlusCircle className="w-3 h-3 text-emerald-400" />
                        <span>{preset.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inline Form to Add New Custom Info */}
                {showCustomForm && (
                  <div className="bg-slate-900/95 border border-emerald-500/50 p-4 rounded-2xl space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Enter Your Custom Information:
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowCustomForm(false)}
                        className="text-slate-400 hover:text-white text-xs p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Field Name / Title:
                        </label>
                        <input
                          type="text"
                          value={customLabel}
                          onChange={(e) => setCustomLabel(e.target.value)}
                          placeholder="e.g. Working Hours, Bank Details"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Details / Description:
                        </label>
                        <input
                          type="text"
                          value={customValue}
                          onChange={(e) => setCustomValue(e.target.value)}
                          placeholder="Enter details here (e.g. Mon-Fri 8am-5pm, Access Bank 0123456789...)"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowCustomForm(false)}
                        className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleAddCustomInfo}
                        disabled={!customLabel.trim() || !customValue.trim()}
                        className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Save & Add To Brief</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* List of Added Custom Info Items with Remove Button */}
                {brief.customInfoItems && brief.customInfoItems.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-emerald-300 block">
                      Custom Info Added ({brief.customInfoItems.length}):
                    </span>
                    <div className="space-y-2">
                      {brief.customInfoItems.map((item) => (
                        <div 
                          key={item.id}
                          className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/40 transition-colors"
                        >
                          <div className="space-y-0.5">
                            <span className="text-xs font-black text-emerald-400 block font-mono">
                              • {item.label}:
                            </span>
                            <p className="text-xs text-slate-200">
                              {item.value}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveCustomInfo(item.id)}
                            className="text-xs text-red-400 hover:text-red-300 hover:bg-red-950/50 p-1.5 rounded-lg border border-red-800/60 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                            title="Remove this custom info"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-dashed border-slate-700 text-center text-xs text-slate-400">
                    <span>No extra information added yet. Click "+ Add New Info Field" or select any preset above to add opening hours, bank details, branch offices, or custom notes.</span>
                  </div>
                )}
              </div>

              {/* Extra Instructions or Notes */}
              <div className="space-y-1.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Additional Instructions or Specific Notes
                  </label>
                  {brief.additionalNotes && (
                    <button
                      type="button"
                      onClick={() => handleClearField('additionalNotes')}
                      className="text-[11px] text-slate-400 hover:text-red-500 font-semibold"
                    >
                      Clear Notes
                    </button>
                  )}
                </div>
                <textarea
                  rows={3}
                  value={brief.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Tell Paul anything else specific about your project, domain preferences, target launch date, or questions..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 resize-none bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 6: REVIEW, REMOVE ANY INFO & SUBMIT */}
          {activeStep === 6 && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Step 6: Review & Send Website Details</span>
                  </h4>
                  <p className="text-sm font-semibold text-slate-600 mt-1">
                    Check your details and submit directly to Paul Web Design via WhatsApp or Email.
                  </p>
                </div>
                <span className="text-xs font-black font-mono text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Step 6 of 6
                </span>
              </div>

              {/* 🗑️ REVIEW & REMOVE ANY INFO BOARD */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-bold text-slate-900">
                      Remove Any Information You Don't Want Sent
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Click "Remove" on any item below to exclude it from the brief
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {/* Company Name */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Company Name</span>
                      <span className={`font-semibold ${isFieldExcluded('companyName') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.companyName || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('companyName', brief.companyName, () => handleClearField('companyName'))}
                  </div>

                  {/* Brand / Industry */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Brand / Industry</span>
                      <span className={`font-semibold ${isFieldExcluded('brandIndustry') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.brandIndustry || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('brandIndustry', brief.brandIndustry, () => handleClearField('brandIndustry'))}
                  </div>

                  {/* Market Reach (Local vs Intl) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Market Audience Reach</span>
                      <span className={`font-semibold capitalize ${isFieldExcluded('targetMarket') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.targetMarket === 'international' ? 'International / Global' : brief.targetMarket === 'local' ? 'Local Only' : 'Both Local & Intl'}
                      </span>
                    </div>
                    {renderFieldControls('targetMarket', brief.targetMarket, () => handleClearField('targetMarket'))}
                  </div>

                  {/* Target Country */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Target Countries</span>
                      <span className={`font-semibold ${isFieldExcluded('targetCountry') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.targetCountry || '(None specified)'}
                      </span>
                    </div>
                    {renderFieldControls('targetCountry', brief.targetCountry, () => handleClearField('targetCountry'))}
                  </div>

                  {/* Currency Preference */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Preferred Currency</span>
                      <span className={`font-semibold ${isFieldExcluded('currencyPreference') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.currencyPreference || '(None specified)'}
                      </span>
                    </div>
                    {renderFieldControls('currencyPreference', brief.currencyPreference, () => handleClearField('currencyPreference'))}
                  </div>

                  {/* Slogan */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Slogan</span>
                      <span className={`font-semibold ${isFieldExcluded('slogan') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.slogan || '(None)'}
                      </span>
                    </div>
                    {renderFieldControls('slogan', brief.slogan, () => handleClearField('slogan'))}
                  </div>

                  {/* Motto */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Motto</span>
                      <span className={`font-semibold ${isFieldExcluded('motto') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.motto || '(None)'}
                      </span>
                    </div>
                    {renderFieldControls('motto', brief.motto, () => handleClearField('motto'))}
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Phone Number</span>
                      <span className={`font-semibold ${isFieldExcluded('phone') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.phone || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('phone', brief.phone, () => handleClearField('phone'))}
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">WhatsApp Number</span>
                      <span className={`font-semibold ${isFieldExcluded('whatsapp') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.whatsapp || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('whatsapp', brief.whatsapp, () => handleClearField('whatsapp'))}
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Email Address</span>
                      <span className={`font-semibold ${isFieldExcluded('email') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.email || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('email', brief.email, () => handleClearField('email'))}
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Physical Location</span>
                      <span className={`font-semibold ${isFieldExcluded('physicalAddress') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.physicalAddress || '(Empty)'}
                      </span>
                    </div>
                    {renderFieldControls('physicalAddress', brief.physicalAddress, () => handleClearField('physicalAddress'))}
                  </div>

                  {/* Colors */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 sm:col-span-2">
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-500 text-[10px] block uppercase">Preferred Colors</span>
                      <span className={`font-semibold ${isFieldExcluded('preferredColors') ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                        {brief.preferredColors || '(Open to developer recommendation)'}
                      </span>
                    </div>
                    {renderFieldControls('preferredColors', brief.preferredColors, () => handleClearField('preferredColors'))}
                  </div>
                </div>

                {/* Excluded Fields Counter / Notice */}
                {(brief.removedFields && brief.removedFields.length > 0) && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs text-amber-900">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{brief.removedFields.length} field(s) have been removed from your final submission.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBrief(prev => ({ ...prev, removedFields: [] }))}
                      className="text-[11px] font-bold text-amber-800 underline hover:text-amber-950"
                    >
                      Restore All
                    </button>
                  </div>
                )}
              </div>

              {/* Special Features Checklist */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Desired Website Features:</span>
                  <span className="text-[11px] text-emerald-600 font-normal">Click to toggle / remove</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {FEATURE_OPTIONS.map((feat) => {
                    const isChecked = brief.keyFeaturesNeeded.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => handleToggleFeature(feat)}
                        className={`p-2 rounded-xl text-left text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 shadow-xs'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                        }`}>
                          {isChecked && '✓'}
                        </span>
                        <span className="truncate">{feat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes Box with Clear option */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Additional Notes or Specific Instructions
                  </label>
                  {brief.additionalNotes && (
                    <button
                      type="button"
                      onClick={() => handleClearField('additionalNotes')}
                      className="text-[11px] text-slate-400 hover:text-red-500 font-semibold"
                    >
                      Clear Notes
                    </button>
                  )}
                </div>
                <textarea
                  rows={2}
                  value={brief.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Any extra preferences, domain ideas, or instructions..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 resize-none"
                />
              </div>

              {/* Submission Hub Card */}
              <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase text-emerald-400 font-bold block">Ready to Build</span>
                    <span className="text-sm font-bold text-white">Send Details Directly to Paul Web Design</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    Direct Contact: {developerPhone}
                  </span>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                    <span>Send via WhatsApp ({developerPhone})</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full py-3.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    <Mail className="w-4 h-4 stroke-[2.5]" />
                    <span>Send via Email ({developerEmail})</span>
                  </button>
                </div>

                {/* Secondary Actions: Copy Text & Download File */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
                  >
                    {copiedStatus ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copiedStatus ? 'Brief Copied to Clipboard!' : 'Copy Full Brief Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadBriefFile}
                    className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download as File (.txt)</span>
                  </button>
                </div>
              </div>

              {submittedStatus && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-bold text-emerald-900">Brief Sent Successfully!</strong>
                    <span>Paul has received your project parameters. He will inspect your details, contact you via WhatsApp or Email, and begin your website design.</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Navigation Footer */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex items-center justify-between">
          <div>
            {activeStep > 1 && (
              <button
                type="button"
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Step {activeStep} of {totalSteps}
            </span>

            {activeStep < totalSteps ? (
              <button
                type="button"
                onClick={() => setActiveStep(prev => Math.min(totalSteps, prev + 1))}
                className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-emerald-400 font-black text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Continue to Step {activeStep + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                <span>SUBMIT VIA WHATSAPP</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
