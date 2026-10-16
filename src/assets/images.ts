import developerImg from './images/developer_holding_system_1785565545926.jpg';
import studioImg from './images/paul_web_studio_1789410240842.jpg';
import devicesImg from './images/responsive_devices_1789410254877.jpg';
import backendImg from './images/backend_control_panel_1789410267634.jpg';
import fashionImg from './images/nigerian_fashion_store_1789546788889.jpg';
import foodImg from './images/nigerian_jollof_food_1789546801249.jpg';
import packagedFoodImg from './images/packaged_food_snacks_1789546818222.jpg';
import fishImg from './images/smoked_catfish_fish_1789546829191.jpg';
import rawMaterialsImg from './images/local_raw_materials_1789546842824.jpg';
import logoImg from './images/logo.png';

export const APP_IMAGES = {
  logo: {
    src: logoImg || '/assets/images/logo.png',
    fallback: '/assets/images/logo.png',
    alt: 'Paul Web Design Official Brand Logo'
  },
  developer: {
    src: developerImg || '/assets/images/developer_holding_system_1785565545926.jpg',
    fallback: '/assets/images/developer_holding_system_1785565545926.jpg',
    alt: 'Paul Web Design - Lead Developer with Laptop System'
  },
  studio: {
    src: studioImg || '/assets/images/paul_web_studio_1789410240842.jpg',
    fallback: '/assets/images/paul_web_studio_1789410240842.jpg',
    alt: 'Paul Web Design Creative Studio & High-Speed Development Workstation'
  },
  devices: {
    src: devicesImg || '/assets/images/responsive_devices_1789410254877.jpg',
    fallback: '/assets/images/responsive_devices_1789410254877.jpg',
    alt: '100% Mobile Responsive Websites on Smartphones, Tablets & Desktops'
  },
  backend: {
    src: backendImg || '/assets/images/backend_control_panel_1789410267634.jpg',
    fallback: '/assets/images/backend_control_panel_1789410267634.jpg',
    alt: 'Custom Back-End System Setup & Admin Portal with Full Control'
  },
  fashion: {
    src: fashionImg,
    fallback: '/assets/images/nigerian_fashion_store_1789546788889.jpg',
    alt: 'Nigerian Clothes, Ankara & Boutique Fashion Stores'
  },
  food: {
    src: foodImg,
    fallback: '/assets/images/nigerian_jollof_food_1789546801249.jpg',
    alt: 'Nigerian Food, Restaurants & Catering Delivery Websites'
  },
  packagedFood: {
    src: packagedFoodImg,
    fallback: '/assets/images/packaged_food_snacks_1789546818222.jpg',
    alt: 'Packaged Foods, Plantain Chips, Snacks & Spices'
  },
  fish: {
    src: fishImg,
    fallback: '/assets/images/smoked_catfish_fish_1789546829191.jpg',
    alt: 'Local Edible Fishes, Smoked Catfish & Seafood Supply'
  },
  rawMaterials: {
    src: rawMaterialsImg,
    fallback: '/assets/images/local_raw_materials_1789546842824.jpg',
    alt: 'Local Raw Materials, Agro Commodities & Palm Oil Trade'
  }
};

export {
  developerImg,
  studioImg,
  devicesImg,
  backendImg,
  fashionImg,
  foodImg,
  packagedFoodImg,
  fishImg,
  rawMaterialsImg,
  logoImg
};

export function createSvgFallback(title: string, subtitle?: string): string {
  const safeTitle = title.replace(/[<>&"]/g, '');
  const safeSubtitle = (subtitle || 'Paul Web Design • 08106259457').replace(/[<>&"]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16"/>
        <stop offset="50%" stop-color="#064e3b"/>
        <stop offset="100%" stop-color="#022c22"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <circle cx="400" cy="240" r="56" fill="#10b981" opacity="0.2"/>
    <path d="M380 240l16 16 32-32" stroke="#34d399" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="400" y="350" fill="#f8fafc" font-size="26" font-family="system-ui, -apple-system, sans-serif" font-weight="900" text-anchor="middle">${safeTitle}</text>
    <text x="400" y="390" fill="#6ee7b7" font-size="16" font-family="system-ui, -apple-system, sans-serif" font-weight="600" text-anchor="middle">${safeSubtitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function handleImageFallback(
  imgElement: HTMLImageElement,
  publicFallbackUrl?: string,
  title?: string
) {
  const stage = parseInt(imgElement.dataset.fallbackStage || '0', 10);
  if (stage === 0 && publicFallbackUrl && !imgElement.src.endsWith(publicFallbackUrl)) {
    imgElement.dataset.fallbackStage = '1';
    imgElement.src = publicFallbackUrl;
  } else if (stage < 2) {
    imgElement.dataset.fallbackStage = '2';
    imgElement.src = createSvgFallback(title || 'Paul Web Design');
  }
}
