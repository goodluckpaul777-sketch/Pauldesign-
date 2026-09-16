import { AdPlatform, ServiceFeature, PortfolioSample } from '../types';

export const AD_PLATFORMS: AdPlatform[] = [
  {
    id: 'fiverr',
    name: 'Fiverr',
    category: 'freelance',
    description: 'Global marketplace to offer website design gigs starting from basic landing pages to full web applications.',
    url: 'https://www.fiverr.com',
    bestFor: 'Getting quick international client orders with defined packages',
    tips: [
      'Create gigs titled "I will build a responsive modern website for your business"',
      'Include video or clear portfolio pictures of your web projects',
      'Detail the features included in your packages'
    ],
    iconName: 'Globe',
    popularity: 'Very High'
  },
  {
    id: 'upwork',
    name: 'Upwork',
    category: 'freelance',
    description: 'Premier freelancing platform for long-term web development contracts, hourly jobs, and project proposals.',
    url: 'https://www.upwork.com',
    bestFor: 'High-paying client contracts and business website projects',
    tips: [
      'Complete 100% of your profile with your phone number and portfolio links',
      'Apply to jobs with custom, concise proposals mentioning how you solve their problem',
      'Take skill certification tests to stand out'
    ],
    iconName: 'Briefcase',
    popularity: 'Very High'
  },
  {
    id: 'whatsapp-business',
    name: 'WhatsApp Business & Status',
    category: 'local',
    description: 'The #1 direct channel to convert friends, contacts, local business owners, and referral networks into web design clients.',
    url: 'https://www.whatsapp.com/business',
    bestFor: 'High-conversion local clients & word-of-mouth referrals',
    tips: [
      'Post flyer stickers on your daily Status showing recent website designs',
      'Set up an automated Greeting Message with your portfolio link and number 08106259457',
      'Create a WhatsApp Catalog with website packages and price ranges'
    ],
    iconName: 'MessageSquare',
    popularity: 'Very High'
  },
  {
    id: 'facebook-groups',
    name: 'Facebook Groups & Marketplace',
    category: 'social',
    description: 'Massive community groups like "Small Business Owners", "Entrepreneurs", and local business directories.',
    url: 'https://www.facebook.com',
    bestFor: 'Reaching small business owners needing their first website',
    tips: [
      'Join groups like "Small Business Owners Nigeria/Global" or "Website Design Requests"',
      'Share helpful posts analyzing why businesses lose clients without a website',
      'Leave your phone 08106259457 on all promotional posts'
    ],
    iconName: 'Facebook',
    popularity: 'Very High'
  },
  {
    id: 'google-business',
    name: 'Google Business Profile (Local Map Listing)',
    category: 'local',
    description: 'Free Google Maps listing for your web design agency. When local business owners search "web developer near me", you show up!',
    url: 'https://www.google.com/business',
    bestFor: 'Inbound calls from local business owners searching online',
    tips: [
      'List your business as "Web Designer & Website Builder"',
      'Add phone number 08106259457 and your office/remote location',
      'Ask satisfied clients to leave 5-star Google reviews'
    ],
    iconName: 'MapPin',
    popularity: 'High'
  },
  {
    id: 'jiji-nairaland',
    name: 'Jiji & Nairaland Forum (Local Ads)',
    category: 'local',
    description: 'High-traffic local classifieds and forums where thousands of business owners post daily looking for service providers.',
    url: 'https://jiji.ng',
    bestFor: 'Direct phone calls from clients ready to build immediately',
    tips: [
      'Post under "Services > Computer & IT Services"',
      'Use catchy headline: "Professional Website Builder - Call/WhatsApp 08106259457"',
      'Highlight your portfolio and comprehensive website features'
    ],
    iconName: 'Megaphone',
    popularity: 'High'
  },
  {
    id: 'instagram',
    name: 'Instagram & TikTok Tech Reels',
    category: 'social',
    description: 'Visual platforms to showcase screen-recorded website walkthroughs, before/after designs, and client testimonials.',
    url: 'https://www.instagram.com',
    bestFor: 'Visual branding, e-commerce stores, and fashion/restaurant website leads',
    tips: [
      'Show 15-second screen recordings of smooth website scrolling animations',
      'Put your WhatsApp link `wa.me/2348106259457` in your Bio link',
      'Use hashtags like #WebDeveloper #WebsiteBuilder #SmallBusinessWebsite'
    ],
    iconName: 'Instagram',
    popularity: 'High'
  },
  {
    id: 'nigerian-commerce-channels',
    name: 'Nigerian Local Products Ad Format (Clothes, Food, Fish, Raw Materials)',
    category: 'nigerian-commerce',
    description: 'Specialized ad formats tailored for Nigerian vendors selling clothes, party food, smoked catfish, packaged plantain chips, and raw agro-commodities.',
    url: '#nigerian-products-section',
    bestFor: 'Daily WhatsApp orders, inter-state waybills, and domestic & diaspora retail sales',
    tips: [
      'Clothes: Run short video ads showing fabric quality + "Click link to select your UK/NG size and order on WhatsApp"',
      'Food: Run geo-targeted lunch-hour ads (11 AM - 1:30 PM) showing sizzling jollof/soup bowls with automatic delivery fee calculation',
      'Smoked Fish: Showcase sand-free, oven-dried golden catfish with vacuum-sealed packaging and inter-state bus park delivery',
      'Raw Materials & Packaged Foods: Display bulk MOQ specs, NAFDAC certification, and distributor carton pricing'
    ],
    iconName: 'ShoppingBag',
    popularity: 'Very High'
  }
];

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    id: 'backend-backup',
    title: 'Back-End Backup System & Full Handover',
    description: 'Your website code and data are safely backed up in a secure back-end system. You get full control and management to edit, update, or transfer whenever you want.',
    icon: 'Database',
    badge: 'Full Control'
  },
  {
    id: 'hosting-domain',
    title: 'Live Website Posting & Domain Registration',
    description: 'I will post your website online, set up your custom domain name (.com or preferred extension), and configure live hosting for you.',
    icon: 'Globe',
    badge: 'Live Posting'
  },
  {
    id: 'full-editing',
    title: 'Full Website Customization & Icons',
    description: 'Complete custom website building with matching icons, organized sections, responsive layout, and beautiful typography tailored for your brand.',
    icon: 'Palette',
    badge: 'Custom Built'
  },
  {
    id: 'ai-images',
    title: 'AI-Generated Images & Visuals',
    description: 'In case you need specific high-quality visuals, I can generate custom AI images suited for your website content.',
    icon: 'Sparkles',
    badge: 'Visual Assets'
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance & Future Updates',
    description: 'Ongoing support, content edits, and technical maintenance whenever you want to update text, photos, or features.',
    icon: 'Wrench',
    badge: 'Ongoing Support'
  },
  {
    id: 'whatsapp-direct',
    title: 'WhatsApp & Direct Phone Contact Button',
    description: 'Direct call and WhatsApp button connected to your phone number so clients reach you with one tap.',
    icon: 'PhoneCall',
    badge: 'Instant Leads'
  }
];

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  description: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'front-page',
    name: 'Front Page / Single Page Website',
    badge: 'Starter Profile',
    description: 'A clean, simple single-page website or online profile page for your business or personal brand.',
    features: [
      'Front Page / Profile Website',
      'Mobile Responsive & Clean Design',
      'Direct Phone & WhatsApp Button',
      'Secure Back-End Backup System',
      'Full Code & Control Handover'
    ],
    recommendedFor: 'Small businesses, personal profiles & simple landing pages'
  },
  {
    id: 'full-website',
    name: 'Full Website Editing & Customization',
    badge: 'Complete Solution',
    isPopular: true,
    description: 'Comprehensive multi-page website with custom icons, detailed service sections, and full layout design.',
    features: [
      'Full Website Editing & Customization',
      'Custom Icons & Styling Design',
      'Multiple Pages / Sections',
      'Secure Back-End System & Full Control',
      'Optional AI-Generated Custom Images',
      'WhatsApp & Direct Contact Integration'
    ],
    recommendedFor: 'Growing businesses, online services, and companies wanting a complete site'
  },
  {
    id: 'hosting-domain',
    name: 'Live Hosting & Domain Registration',
    badge: 'Web Deployment',
    description: 'Posting your website live on the web and registering your custom domain name.',
    features: [
      'Post Website Live Online',
      'Domain Name Registration (.com or preferred)',
      'SSL Security Setup (https://)',
      'DNS & Server Setup',
      'Full Admin Control Access'
    ],
    recommendedFor: 'Anyone needing their created website put live on the internet'
  }
];

export const PORTFOLIO_SAMPLES: PortfolioSample[] = [
  {
    id: 'ecom-store',
    title: 'Fashion & Retail E-Commerce Store',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description: 'Modern shopping site featuring online payment gateway, product filters, and automated order receipts.',
    techStack: ['React', 'Tailwind CSS', 'Paystack/Stripe', 'Mobile Friendly']
  },
  {
    id: 'corporate-biz',
    title: 'Corporate & Logistics Business Portal',
    category: 'Business Landing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'High-converting business landing page with service quotes, team showcase, and live chat widget.',
    techStack: ['TypeScript', 'Fast Loading', 'Lead Forms', 'Clean Code']
  },
  {
    id: 'restaurant-menu',
    title: 'Gourmet Restaurant & Delivery Site',
    category: 'Food & Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive online menu, table reservation system, and direct WhatsApp order button.',
    techStack: ['Visual Gallery', 'WhatsApp Checkout', 'Google Maps']
  },
  {
    id: 'real-estate',
    title: 'Real Estate & Property Listings',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    description: 'Property search portal with virtual tour galleries, agent contact cards, and inquiry forms.',
    techStack: ['Filter Search', 'High-Res Media', 'Mortgage Calc']
  }
];

export const READY_COPY_TEMPLATES = [
  {
    title: 'WhatsApp Status / Facebook Post Template',
    text: `🚀 NEED A PROFESSIONAL WEBSITE FOR YOUR BUSINESS?
Stop losing customers to your competitors! I build clean, sleek, and high-performing websites tailored for your business.

✅ 100% Mobile Responsive
✅ Secure Back-End System & Full Control
✅ Clean Code & Fast Loading Performance
✅ WhatsApp Chat & Direct Call Button

📞 Call or WhatsApp me now: 08106259457
🌐 Let's build your website today!`
  },
  {
    title: 'Client Pitch Message (For Small Businesses)',
    text: `Hello! I noticed your business is doing great, but you could reach more customers with a modern website.

I create clean websites tailored to your specifications, with a secure back-end system and full control management.

Check out how we can build yours!
📞 Call / WhatsApp: 08106259457
Let's talk about your business goal!`
  },
  {
    title: 'Forum / Freelance Bio Template',
    text: `Website Developer crafting digital solutions. Specializing in single-page front pages, full website editing with custom icons, back-end backup system, and domain setup.

Contact: 08106259457 (Call & WhatsApp)
Clean code, full handover, and guaranteed satisfaction!`
  },
  {
    title: 'Nigerian Local Products Ad Template (Clothes, Food, Fish, Raw Materials)',
    text: `🇳🇬 ATTENTION NIGERIAN MERCHANTS & BUSINESS OWNERS!
Are you selling Clothes, Food/Catering, Packaged Snacks, Smoked Catfish, or Local Raw Materials?

Stop answering 100 "How much?" messages manually every day! Let's build you a modern website that:
✅ Displays all your products with prices in Naira (₦) & Dollars ($)
✅ Lets customers select sizes, food portions, or fish cartons
✅ Calculates inter-state delivery & bus-park waybill automatically
✅ Lets customers checkout directly via WhatsApp or instant Bank Transfer

📞 Call / WhatsApp Paul: 08106259457
Let's launch your online store this week!`
  },
  {
    title: 'WhatsApp Status Direct Pitch (For Clothes & Food Vendors)',
    text: `👗🍲 Selling Clothes, Soup Bowls or Packaged Food?
Your business deserves more than just replying DMs on Instagram!

With your own website:
1. Customers view your menu / clothing rack anytime
2. They place orders with 1-click straight to your WhatsApp
3. You get instant payments with payment receipts

Let me build your official website for you!
📞 Call / WhatsApp: 08106259457`
  }
];
