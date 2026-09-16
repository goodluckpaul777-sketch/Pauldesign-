import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShoppingBag, 
  Utensils, 
  Fish, 
  Package, 
  Wheat, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Megaphone, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Phone,
  Eye,
  Layers,
  Flame,
  BadgeCheck,
  TrendingUp
} from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface NigerianCommerceShowcaseProps {
  onOpenIntakeModal: (suggestedIndustry?: string) => void;
}

interface ProductWebsiteCategory {
  id: string;
  title: string;
  categoryLabel: string;
  badge: string;
  stickerText: string;
  stickerColor: string;
  image: string;
  fallbackImage: string;
  tagline: string;
  description: string;
  targetClients: string;
  websiteFeatures: string[];
  adFormat: {
    headline: string;
    hook: string;
    targetAudience: string;
    suggestedPlatform: string;
    sampleAdCopy: string;
  };
}

const NIGERIAN_CATEGORIES: ProductWebsiteCategory[] = [
  {
    id: 'clothes',
    title: 'Clothes, Fabrics & Fashion Boutiques',
    categoryLabel: 'Fashion & Apparel',
    badge: 'High Demand in Lagos & Worldwide',
    stickerText: '👗 Size Guide & WhatsApp Order',
    stickerColor: 'from-pink-500 to-rose-600',
    image: APP_IMAGES.fashion.src,
    fallbackImage: APP_IMAGES.fashion.fallback,
    tagline: 'Ankara Styles, Bespoke Couture, Ready-to-Wear & Shoes',
    description: 'Designed specifically for Nigerian fashion designers, cloth vendors, and boutique owners. Eliminates the endless "DM for price" friction by showcasing clothing collections with clear sizing, fabric close-ups, price tags in Naira (₦) or Dollars ($), and an instant 1-click WhatsApp order button.',
    targetClients: 'Fashion designers, tailor brands, ready-to-wear vendors, Aso-ebi coordinators, shoe & bag stores.',
    websiteFeatures: [
      'Interactive Size Guide (UK, US, Nigerian sizes)',
      'High-Resolution Zoom for fabric & embroidery details',
      'Instant "Order via WhatsApp" with pre-filled dress details',
      'Paystack / Debit Card & Direct Bank Transfer options',
      'Instagram Lookbook Gallery with video showcases'
    ],
    adFormat: {
      headline: 'Stop Losing Clothes Sales in the DMs!',
      hook: 'Turn Instagram scrollers into paying buyers with an automated boutique website.',
      targetAudience: 'Women 20-50, fashion lovers, diaspora Nigerians in UK/US/Canada looking for bespoke Ankara.',
      suggestedPlatform: 'Instagram Carousel & TikTok Outfit Transitions',
      sampleAdCopy: '👗 Tired of answering 50 "How much?" messages a day? Shop our latest ready-to-wear luxury collections directly online! Choose your size, select your color, and get doorstep delivery anywhere in Nigeria & abroad. Tap the link to view our catalog now! 👉 Call/WhatsApp 08106259457'
    }
  },
  {
    id: 'food',
    title: 'Food, Restaurants & Catering Delivery',
    categoryLabel: 'Culinary & Catering',
    badge: 'Massive Daily Online Orders',
    stickerText: '🍲 Live Menu & Chow Route Delivery',
    stickerColor: 'from-amber-500 to-orange-600',
    image: APP_IMAGES.food.src,
    fallbackImage: APP_IMAGES.food.fallback,
    tagline: 'Party Jollof Rice, Soup Bowls, Pastries & Restaurant Takeaway',
    description: 'A mouth-watering digital food menu and ordering platform for caterers, cloud kitchens, soup bowl chefs, and local restaurants. Customers can customize their bowls (Egusi, Ogbono, Afang, Oha), select protein toppings, calculate delivery costs to their local area, and pay securely.',
    targetClients: 'Restaurants, soup bowl sellers, party caterers, bakeries, fast food hubs, office meal delivery vendors.',
    websiteFeatures: [
      'Visual Digital Menu with appetizing meal pictures & prices',
      'Portion Selector (2L, 4L soup bowls, single meals, party coolers)',
      'Automated Delivery Fee Calculation by area or state',
      'Kitchen Order Printout & Instant WhatsApp Dispatch Alert',
      'Pre-Order Scheduling for weekend events & celebrations'
    ],
    adFormat: {
      headline: 'Hot, Delicious Meals Delivered to Your Doorstep!',
      hook: 'Solve the 12:00 PM office lunch hunger with a seamless 2-minute order.',
      targetAudience: 'Office professionals, busy families, students, party organizers in Lagos, Abuja & major cities.',
      suggestedPlatform: 'WhatsApp Status Flyers & Lunchtime Facebook Geo-Targeted Ads',
      sampleAdCopy: '🍛 Craving authentic party jollof rice with juicy peppered chicken, or a fresh 4L bowl of thick Egusi soup? Don\'t stress in the kitchen! Browse our mouth-watering digital menu, customize your order, and receive it piping hot at your door. Click to order now! 👉 Call/WhatsApp 08106259457'
    }
  },
  {
    id: 'raw-materials',
    title: 'Local Raw Materials & Agro-Allied Commodities',
    categoryLabel: 'B2B & Export Trade',
    badge: 'High-Value Contracts & Exports',
    stickerText: '🌾 B2B Bulk Supply & Export Quotes',
    stickerColor: 'from-emerald-500 to-teal-700',
    image: APP_IMAGES.rawMaterials.src,
    fallbackImage: APP_IMAGES.rawMaterials.fallback,
    tagline: 'Cocoa Beans, Palm Oil, Cassava Starch, Shea Butter, Ginger & Timber',
    description: 'A professional corporate B2B trading portal built to establish institutional credibility. Positions your commodity business to win lucrative corporate supply contracts with manufacturing plants across Nigeria and attract international export buyers in Europe, the Americas, and Asia.',
    targetClients: 'Agro-allied merchants, commodity brokers, farm aggregators, palm oil millers, export processing companies.',
    websiteFeatures: [
      'Metric Ton & Bag Bulk Price Calculator with MOQ specs',
      'Export Quality & Phytosanitary Specification Sheets',
      'Direct Formal Quotation Request & Sample Ordering Flow',
      'Warehouse & Port Delivery Logistics Documentation',
      'CAC, NEPC Export License & Corporate Trust Verification badges'
    ],
    adFormat: {
      headline: 'Verified Bulk Supplier of Premium Agro Commodities',
      hook: 'Direct-from-source agricultural commodities with guaranteed moisture and purity standards.',
      targetAudience: 'Food processing factories, cosmetic manufacturers, international commodity import agents.',
      suggestedPlatform: 'Google Search Ads & B2B LinkedIn Merchant Showcase',
      sampleAdCopy: '🌿 Source premium grade Nigerian raw materials directly from verified aggregators. We supply bulk Cocoa Beans, Grade-A Palm Oil, Raw Shea Butter, Dried Split Ginger, and High-Grade Cassava Starch with full laboratory analysis and export documentation. Request our quotation sheet today! 👉 Call/WhatsApp 08106259457'
    }
  },
  {
    id: 'packaged-foods',
    title: 'Packaged Foods, Snacks & Spices',
    categoryLabel: 'FMCG & Retail',
    badge: 'Supermarket & Distributor Ready',
    stickerText: '📦 Retail Packs & Wholesale Cartons',
    stickerColor: 'from-blue-500 to-indigo-600',
    image: APP_IMAGES.packagedFood.src,
    fallbackImage: APP_IMAGES.packagedFood.fallback,
    tagline: 'Plantain Chips, Roasted Chin-Chin, Packaged Garri/Poundo, Honey & Spices',
    description: 'A sleek commercial product showcase for packaged food producers and FMCG brands. Showcases clean packaging, NAFDAC certification, and nutritional information while enabling both single-pack online purchases and bulk carton ordering for wholesale supermarket distributors nationwide.',
    targetClients: 'Food processing SMEs, snack makers, packaged spice manufacturers, honey bottlers, flour millers.',
    websiteFeatures: [
      'Retail Single-Pack vs. Wholesale Carton Pricing Tiers',
      'Wholesale Distributor Registration & Account Portal',
      'Nutritional Facts & NAFDAC Certification Showcase',
      'Nationwide Courier & Waybill Delivery Integration',
      'Customer Product Reviews & Recipe Suggestions'
    ],
    adFormat: {
      headline: 'Crispy, Fresh & Naturally Packaged Nigerian Treats',
      hook: 'Stock your pantry or become a licensed distributor in your city today.',
      targetAudience: 'Snack lovers, moms, supermarket procurement managers, interstate retail shop owners.',
      suggestedPlatform: 'Facebook Carousel Ads & TikTok Crunch Sound Videos',
      sampleAdCopy: '🍿 Looking for the crunchiest plantain chips, perfectly spiced chin-chin, or 100% raw unadulterated honey? Packaged under strict hygienic standards with NAFDAC approval. We supply individual retail packs and wholesale cartons nationwide. Order online or become a distributor today! 👉 Call/WhatsApp 08106259457'
    }
  },
  {
    id: 'fish-seafood',
    title: 'Local Edible Fishes & Smoked Seafood',
    categoryLabel: 'Aquaculture & Fisheries',
    badge: 'Inter-State Waybill Delivery',
    stickerText: '🐟 Oven-Dried Catfish & Seafood Waybill',
    stickerColor: 'from-cyan-500 to-blue-700',
    image: APP_IMAGES.fish.src,
    fallbackImage: APP_IMAGES.fish.fallback,
    tagline: 'Oven-Dried Smoked Catfish, Live Tilapia, Crayfish Bags & Frozen Fish',
    description: 'A high-converting sales platform designed specifically for fish farmers, kiln-smoking operators, and seafood dealers. Customers can view fish sizes (Medium, Large, Jumbo), select vacuum-sealed packaging that lasts months without spoiling, and receive orders via inter-state transport parks.',
    targetClients: 'Catfish farmers, smoked fish processors, seafood cold-room owners, crayfish merchants, market associations.',
    websiteFeatures: [
      'Fish Size & Weight Grading (Medium, Large, Jumbo kg packs)',
      'Vacuum-Sealed Packaging Option for extended shelf-life & export',
      'Inter-State Transport Bus Park Waybill Delivery Calculator',
      'Wholesale Carton Discounts for caterers & restaurant chains',
      'Cold-chain and hygienic smoking method photo verification'
    ],
    adFormat: {
      headline: 'Sweet, Sand-Free Smoked Catfish & Fresh Seafood!',
      hook: '100% hygienically oven-dried fish that gives your soups and stews unmatched aroma.',
      targetAudience: 'Households, caterers, restaurant owners, diaspora buyers sending food parcels home.',
      suggestedPlatform: 'Facebook Groups (Lagos/Abuja Foodies) & WhatsApp Broadcasts',
      sampleAdCopy: '🐟 No smoke smell, no sand, no bitter taste! Our oven-dried catfish is properly seasoned, kiln-smoked to golden perfection, and vacuum-sealed to stay fresh for up to 6 months. Available in medium, large, and jumbo cartons with doorstep or bus-park delivery across Nigeria. Tap to order your pack! 👉 Call/WhatsApp 08106259457'
    }
  }
];

export const NigerianCommerceShowcase: React.FC<NigerianCommerceShowcaseProps> = ({ onOpenIntakeModal }) => {
  const [activeTab, setActiveTab] = useState<string>('clothes');
  const [showAdFormatView, setShowAdFormatView] = useState<boolean>(false);
  const [copiedAdId, setCopiedAdId] = useState<string | null>(null);

  const selectedCategory = NIGERIAN_CATEGORIES.find(c => c.id === activeTab) || NIGERIAN_CATEGORIES[0];

  const handleCopyAd = (adText: string, id: string) => {
    navigator.clipboard.writeText(adText);
    setCopiedAdId(id);
    setTimeout(() => setCopiedAdId(null), 3000);
  };

  return (
    <section id="nigerian-products-section" className="py-8 space-y-8 scroll-mt-20">
      
      {/* Moving Sticker Header & Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Moving Stickers Banner */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>🇳🇬 Built for Nigerian Commerce & Exporters</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold"
          >
            <Truck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Lagos • Abuja • Nationwide Delivery</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.8 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast 1-Click WhatsApp Ordering</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 1.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/30 text-pink-300 text-xs font-bold hidden sm:inline-flex"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
            <span>Paystack & Bank Transfer Verified</span>
          </motion.div>

        </div>

        {/* Section Heading & Context */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            The Kinds of Websites I Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Nigerian Businesses</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Nigerian customers frequently need websites for <strong>Clothes & Fashion</strong>, <strong>Food & Catering</strong>, <strong>Local Raw Materials</strong>, <strong>Packaged Foods</strong>, and <strong>Local Edible Fishes</strong>. Here is how I build them with stunning photography, fast mobile speed, inter-state waybill calculation, and ready-to-run advertising formats.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-800 pt-6">
          {NIGERIAN_CATEGORIES.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-lg font-black scale-105 ring-2 ring-emerald-300'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                {cat.id === 'clothes' && <ShoppingBag className="w-4 h-4" />}
                {cat.id === 'food' && <Utensils className="w-4 h-4" />}
                {cat.id === 'raw-materials' && <Wheat className="w-4 h-4" />}
                {cat.id === 'packaged-foods' && <Package className="w-4 h-4" />}
                {cat.id === 'fish-seafood' && <Fish className="w-4 h-4" />}
                <span>{cat.title.split(',')[0]}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Main Selected Category Showcase Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
        
        {/* Top Control Bar: Toggle Between Website Features & Advertising Format */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              {selectedCategory.categoryLabel}
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">•</span>
            <span className="text-slate-600 text-xs font-semibold hidden sm:inline">
              {selectedCategory.badge}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setShowAdFormatView(false)}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                !showAdFormatView 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span>Website Features & Mockup</span>
            </button>
            <button
              onClick={() => setShowAdFormatView(true)}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                showAdFormatView 
                  ? 'bg-emerald-600 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Advertising Format & Copy</span>
            </button>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Image with Moving Sticker Badge */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 aspect-4/3">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== selectedCategory.fallbackImage) {
                    target.src = selectedCategory.fallbackImage;
                  }
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Moving Sticker on Top of Image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-xl text-white text-xs font-black shadow-lg flex items-center gap-1.5 bg-gradient-to-r ${selectedCategory.stickerColor} border border-white/20`}
              >
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>{selectedCategory.stickerText}</span>
              </motion.div>

              {/* Bottom Info Bar inside image */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-mono font-semibold text-emerald-300">
                  {selectedCategory.tagline}
                </div>
                <div className="text-sm font-bold leading-tight">
                  High-converting layouts built by Paul Web Design
                </div>
              </div>
            </div>

            {/* Thumbnail mini-strip of all 5 items to encourage exploration */}
            <div className="grid grid-cols-5 gap-2 pt-1">
              {NIGERIAN_CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer ${
                    activeTab === item.id 
                      ? 'border-emerald-500 ring-2 ring-emerald-400/40 scale-105' 
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                  title={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                  <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white truncate text-center drop-shadow-md">
                    {item.id === 'clothes' && '👗 Clothes'}
                    {item.id === 'food' && '🍲 Food'}
                    {item.id === 'raw-materials' && '🌾 Raw'}
                    {item.id === 'packaged-foods' && '📦 Snacks'}
                    {item.id === 'fish-seafood' && '🐟 Fish'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {!showAdFormatView ? (
              /* VIEW 1: Website Architecture & Note */
              <div className="space-y-6 animate-fade-in">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <BadgeCheck className="w-4 h-4 text-emerald-600" />
                    <span>Specialized Local Solution</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-snug">
                    {selectedCategory.title}
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                    {selectedCategory.description}
                  </p>
                </div>

                {/* Little note under the item */}
                <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-sm sm:text-base space-y-2 shadow-xs">
                  <div className="font-bold text-amber-950 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="font-black">Why Nigerian Customers Love This Setup:</span>
                  </div>
                  <p className="text-amber-900 leading-relaxed">
                    Most Nigerian buyers drop off when forced to fill lengthy 5-step registration forms. With this layout, buyers click a prominent WhatsApp button or Paystack card checkout with instant SMS/WhatsApp alerts sent directly to you with their exact order items and delivery location.
                  </p>
                </div>

                {/* Core Website Features Checklist with larger text */}
                <div className="space-y-3">
                  <span className="text-sm font-black text-slate-900 uppercase tracking-wider block">
                    What Paul Builds Into This Website:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCategory.websiteFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 font-semibold">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* VIEW 2: Ready Advertising Format & Strategy */
              <div className="space-y-5 animate-fade-in">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                    <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Tested Advertising Blueprint</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-snug">
                    How to Advertise {selectedCategory.title.split(',')[0]}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Once your website is ready, use this proven advertising format on Facebook, Instagram, WhatsApp status, and Google to generate continuous inbound buyer orders.
                  </p>
                </div>

                {/* Ad Specs Pill Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">Best Ad Channel:</span>
                    <span className="text-slate-900 font-semibold">{selectedCategory.adFormat.suggestedPlatform}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 font-bold block text-[10px] uppercase">Audience Target:</span>
                    <span className="text-slate-900 font-semibold">{selectedCategory.adFormat.targetAudience}</span>
                  </div>
                </div>

                {/* Sample Ready Ad Copy */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5 shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                      <Megaphone className="w-3.5 h-3.5" />
                      <span>Ready-to-Post Ad Copy</span>
                    </span>
                    <button
                      onClick={() => handleCopyAd(selectedCategory.adFormat.sampleAdCopy, selectedCategory.id)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 transition-colors font-mono cursor-pointer flex items-center gap-1"
                    >
                      {copiedAdId === selectedCategory.id ? 'Copied to Clipboard!' : 'Copy Ad Text'}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed italic bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    "{selectedCategory.adFormat.sampleAdCopy}"
                  </p>
                </div>

              </div>
            )}

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenIntakeModal(selectedCategory.title)}
                className="flex-1 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer"
              >
                <span>Order Website for {selectedCategory.title.split(',')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/2348106259457?text=${encodeURIComponent(`Hello Paul! I saw your Nigerian commerce showcase. I want to build a website for my ${selectedCategory.title} business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-300/80"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Quick-Nav Banner */}
        <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Have specific requirements for your business? Call or WhatsApp Paul directly:</span>
            <a href="tel:08106259457" className="text-emerald-400 font-mono font-bold hover:underline">
              08106259457
            </a>
          </div>
          <div className="text-slate-400 font-mono text-[11px]">
            Delivery: 3 - 7 Days • Domain & Hosting Setup Included
          </div>
        </div>

      </div>

      {/* Visual Image Showcase of All 5 Nigerian Commerce Niches */}
      <div className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Showcase of All 5 Nigerian Commerce Formats
            </h3>
            <p className="text-slate-600 text-base">
              Click any photo to load its full website architecture and ready-to-use advertisement blueprint.
            </p>
          </div>
          <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shrink-0 self-start sm:self-auto">
            ⚡ High-Speed Progressive Images
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NIGERIAN_CATEGORIES.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  document.getElementById('nigerian-products-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group rounded-3xl overflow-hidden bg-white border-2 transition-all cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between ${
                  isSelected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== cat.fallbackImage) {
                          target.src = cat.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-300 text-xs font-black px-3 py-1 rounded-full border border-emerald-500/30 shadow-md">
                      {cat.categoryLabel}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {cat.tagline}
                    </p>
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium leading-relaxed">
                      💡 <strong>Note:</strong> {cat.websiteFeatures[0]} & {cat.websiteFeatures[2]}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    className={`w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-100 group-hover:bg-emerald-50 text-slate-800 group-hover:text-emerald-800'
                    }`}
                  >
                    <span>{isSelected ? 'Currently Viewing' : 'Explore This Setup'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
