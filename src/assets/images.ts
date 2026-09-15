import developerImg from './images/developer_holding_system_1785565545926.jpg';
import studioImg from './images/paul_web_studio_1789410240842.jpg';
import devicesImg from './images/responsive_devices_1789410254877.jpg';
import backendImg from './images/backend_control_panel_1789410267634.jpg';

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
  }
};

export {
  developerImg,
  studioImg,
  devicesImg,
  backendImg
};
