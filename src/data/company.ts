export const COMPANY = {
  name: 'OJAPH AGRO DEVELOPMENT LIMITED',
  slogan: 'Farming for Development',
  phone1: '0773 566 620',
  email: 'ojanduphilliam@gmail.com',
  address: 'Kubala Market, opposite the main gate, Kubala Trading Centre, Omugo Sub-County, Terego District, Uganda.',
  shortAddress: 'Kubala Trading Centre, Omugo Sub-County, Terego District',
  locations: [
    { name: 'Kubala Trading Centre', description: 'Kubala Market, opposite the main gate, Omugo Sub-County, Terego District, Uganda.' },
    { name: 'Uleppi Trading Centre', description: 'Madi-Okollo District, Uganda.' },
    { name: 'Lazeebu Trading Centre', description: 'Arua District, Uganda.' },
    { name: 'Farmer Learning Centre · Greenhouse Production', description: 'Arua City, Uganda.' },
  ],
  established: 'April 2022',
  incorporated: '10 November 2022',
  whatsapp: '256773566620',
};

const encodedCompanyAddress = encodeURIComponent(COMPANY.address);

export const COMPANY_MAPS = {
  embedUrl: `https://www.google.com/maps?q=${encodedCompanyAddress}&output=embed`,
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodedCompanyAddress}`,
};

export const BRAND_ASSETS = {
  logo: '/ojaph-logo.png',
  sloganSprout: '/slogan-sprout.png',
  phone: '/assets/phone-icon.png',
  email: '/assets/email-icon.png',
  partnership: '/assets/partnership-icon.png',
  farmerGroups: '/assets/farmer-groups-icon.png',
  innovation: '/assets/innovation-value.png',
  quality: '/assets/quality-value.png',
  contactButton: '/assets/contact-button.png',
};

export const IMAGES = {
  heroFarmer: 'https://images.pexels.com/photos/38668660/pexels-photo-38668660.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerInspect: 'https://images.pexels.com/photos/38668659/pexels-photo-38668659.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerCorn: 'https://images.pexels.com/photos/38668657/pexels-photo-38668657.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  youngFarmer: 'https://images.pexels.com/photos/38520455/pexels-photo-38520455.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  cornfield: 'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  cornfieldSunset: 'https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  seedlings: 'https://images.pexels.com/photos/12407449/pexels-photo-12407449.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  seedlingSprout: 'https://images.pexels.com/photos/17497507/pexels-photo-17497507.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  seedPackets: 'https://images.pexels.com/photos/7782153/pexels-photo-7782153.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  plantingSeeds: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  plantingField: 'https://images.pexels.com/photos/38025875/pexels-photo-38025875.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerHands: 'https://images.pexels.com/photos/37345040/pexels-photo-37345040.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  fertilizerHands: 'https://images.pexels.com/photos/31673795/pexels-photo-31673795.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  soilHands: 'https://images.pexels.com/photos/33995853/pexels-photo-33995853.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  nurseryPlant: 'https://images.pexels.com/photos/36151356/pexels-photo-36151356.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  sprayer: 'https://images.pexels.com/photos/36027197/pexels-photo-36027197.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  sprayerBackpack: 'https://images.pexels.com/photos/37218952/pexels-photo-37218952.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerHarvest: 'https://images.pexels.com/photos/34705724/pexels-photo-34705724.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmersWheat: 'https://images.pexels.com/photos/14314173/pexels-photo-14314173.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  footerBackground: 'https://images.pexels.com/photos/14314173/pexels-photo-14314173.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmersRice: 'https://images.pexels.com/photos/14314165/pexels-photo-14314165.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  cassavaField: 'https://images.pexels.com/photos/36846173/pexels-photo-36846173.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerHoe: 'https://images.pexels.com/photos/31327682/pexels-photo-31327682.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  beansBasket: 'https://images.pexels.com/photos/35553036/pexels-photo-35553036.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  vegetablesBasket: 'https://images.pexels.com/photos/4975380/pexels-photo-4975380.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  vegetablesMarket: 'https://images.pexels.com/photos/37321079/pexels-photo-37321079.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  pepperHarvest: 'https://images.pexels.com/photos/39163298/pexels-photo-39163298.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  handshake: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  handshake2: 'https://images.pexels.com/photos/9301860/pexels-photo-9301860.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  womanField: 'https://images.pexels.com/photos/28101457/pexels-photo-28101457.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  aerialFarms: 'https://images.pexels.com/photos/30255157/pexels-photo-30255157.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  caringCrops: 'https://images.pexels.com/photos/11588042/pexels-photo-11588042.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  manureHands: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  greenPlant: 'https://images.pexels.com/photos/10912895/pexels-photo-10912895.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  nurseryWorker: 'https://images.pexels.com/photos/29319112/pexels-photo-29319112.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  cornfieldBlue: 'https://images.pexels.com/photos/39234868/pexels-photo-39234868.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  farmerCattle: 'https://images.pexels.com/photos/33654811/pexels-photo-33654811.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  dryingCorn: 'https://images.pexels.com/photos/37976745/pexels-photo-37976745.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  freshBeans: 'https://images.pexels.com/photos/4148642/pexels-photo-4148642.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  seedlingPlant: 'https://images.pexels.com/photos/30545487/pexels-photo-30545487.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  twoFarmers: 'https://images.pexels.com/photos/16774464/pexels-photo-16774464.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  nurseryTray: 'https://images.pexels.com/photos/12407449/pexels-photo-12407449.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
};

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'services'
  | 'resources'
  | 'projects'
  | 'partners'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms';

export const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'resources', label: 'Farmer Resources' },
  { id: 'projects', label: 'Projects & Gallery' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact Us' },
];
