export interface AdPlatform {
  id: string;
  name: string;
  category: 'freelance' | 'social' | 'local' | 'portfolio';
  description: string;
  url: string;
  bestFor: string;
  tips: string[];
  iconName: string;
  popularity: 'High' | 'Very High' | 'Medium';
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PortfolioSample {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  demoUrl?: string;
  techStack: string[];
}

export interface StickerConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsappMessage: string;
  themeColor: 'emerald' | 'indigo' | 'amber' | 'rose' | 'cyan';
  badgeText: string;
  servicesList: string[];
}

export interface UploadedImageInfo {
  id: string;
  name: string;
  size: number;
  dataUrl: string;
  type: string;
}

export interface CustomInfoItem {
  id: string;
  label: string;
  value: string;
}

export interface ClientProjectBrief {
  companyName: string;
  brandIndustry: string;
  slogan: string;
  motto: string;
  aboutCompany: string;
  servicesProducts: string;
  targetAudience: string;
  
  // Contact details
  contactPerson: string;
  email: string;
  phone: string;
  whatsapp: string;
  physicalAddress: string;

  // Social handles
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  linkedin: string;
  otherSocials: string;

  // Visuals & Branding
  preferredColors: string;
  logoNotes: string;
  uploadedImages: UploadedImageInfo[];
  externalMediaLinks: string;

  // Extra details & Custom items
  keyFeaturesNeeded: string[];
  referenceWebsites: string;
  additionalNotes: string;
  urgencyTimeline: string;
  customInfoItems?: CustomInfoItem[];
  removedFields?: string[];
}
