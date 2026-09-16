import developerImg from './images/developer_holding_system_1785565545926.jpg';
import studioImg from './images/paul_web_studio_1789410240842.jpg';
import devicesImg from './images/responsive_devices_1789410254877.jpg';
import backendImg from './images/backend_control_panel_1789410267634.jpg';
import fashionImg from './images/nigerian_fashion_store_1789546788889.jpg';
import foodImg from './images/nigerian_jollof_food_1789546801249.jpg';
import packagedFoodImg from './images/packaged_food_snacks_1789546818222.jpg';
import fishImg from './images/smoked_catfish_fish_1789546829191.jpg';
import rawMaterialsImg from './images/local_raw_materials_1789546842824.jpg';

export const APP_IMAGES = {
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
  rawMaterialsImg
};
