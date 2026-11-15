import type { PageId } from '@/data/company';

export interface SearchEntry {
  title: string;
  description: string;
  keywords: string;
  page: PageId;
}

export const SEARCH_ENTRIES: SearchEntry[] = [
  { title: 'Improved seeds', description: 'Maize, beans, cowpeas and vegetable seeds.', keywords: 'products seed seeds maize beans cowpeas vegetables planting varieties', page: 'products' },
  { title: 'Fertilizers', description: 'Explore fertilizer categories and ask about current availability.', keywords: 'products fertilizer fertilizers DAP NPK CAN urea foliar crop nutrients soil fertility', page: 'products' },
  { title: 'Agrochemicals and crop protection', description: 'Information about pesticides, herbicides, fungicides and safe handling.', keywords: 'products agrochemicals pesticides herbicides fungicides insecticides spraying crop protection safety', page: 'products' },
  { title: 'Farm tools and equipment', description: 'Hoes, sprayers, watering cans, planting lines and protective equipment.', keywords: 'products tools equipment hoes pumps sprayers watering irrigation gumboots', page: 'products' },
  { title: 'Agricultural extension and consultancy', description: 'Practical guidance on crop production and farm management.', keywords: 'services extension consultancy agronomy advice crop production farm management', page: 'services' },
  { title: 'Farmer training', description: 'Training topics include good agricultural practices and safe input use.', keywords: 'services training farmers capacity building safe chemical agrochemical soil fertility postharvest', page: 'services' },
  { title: 'Demonstration gardens', description: 'Practical learning and demonstration-based agricultural support.', keywords: 'services demonstration gardens learning practical field crops', page: 'services' },
  { title: 'Climate-smart agriculture', description: 'Soil conservation, water management and climate resilience practices.', keywords: 'services climate smart drought rainfall resilience water soil conservation sustainability', page: 'services' },
  { title: 'Agricultural market linkages', description: 'Information about produce markets, quality and value chains.', keywords: 'services market linkages buyers produce marketing value chain', page: 'services' },
  { title: 'Farming guides and crop production', description: 'General crop production information and practical farming guidance.', keywords: 'resources guides farming crop production planting harvest maize beans vegetables cassava', page: 'resources' },
  { title: 'Pest and disease management', description: 'Find general information on crop pests and diseases.', keywords: 'resources pest pests disease insects crop protection spraying', page: 'resources' },
  { title: 'Soil fertility and fertilizer use', description: 'Learn about soil health, crop nutrition and fertilizer practices.', keywords: 'resources soil fertility fertilizer nutrients compost manure', page: 'resources' },
  { title: 'Post-harvest handling', description: 'Guidance on harvesting, storage and reducing post-harvest losses.', keywords: 'resources postharvest harvest storage drying losses grain', page: 'resources' },
  { title: 'Frequently asked questions', description: 'Answers about products, location, services and contacting OJAPH.', keywords: 'faq FAQs questions answers prices stock location contact delivery', page: 'faq' },
  { title: 'Contact OJAPH', description: 'Contact details and the website enquiry email handoff.', keywords: 'contact email phone telephone WhatsApp enquiry message', page: 'contact' },
  { title: 'Projects and company activities gallery', description: 'View company activity photographs alongside ongoing and planned initiatives.', keywords: 'projects gallery planned ongoing photographs pictures activities initiatives', page: 'projects' },
];
