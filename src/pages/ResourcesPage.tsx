import { useState } from 'react';
import { BookOpen, Leaf, Sprout, FlaskConical, Shield, Droplets, Package, TrendingUp, Download, FileText, ChevronDown, ArrowRight, Lightbulb, ExternalLink, HelpCircle } from 'lucide-react';
import { BRAND_ASSETS, COMPANY, type PageId } from '@/data/company';
import { COMPANY_ACTIVITY_PHOTOS } from '@/data/companyActivities';
import { PageHero, SectionTitle, CTASection } from '@/components/ui';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

const resourceCategories = [
  { icon: Sprout, logo: BRAND_ASSETS.quality, title: 'Seed Selection & Planting', desc: 'Selecting quality seeds, choosing varieties, planting methods, spacing and seed rates.', topics: 'Maize, beans, cowpeas, vegetables' },
  { icon: Leaf, logo: BRAND_ASSETS.quality, title: 'Soil Fertility & Fertilizer', desc: 'Soil fertility, preparation, organic manure, fertilizer types and nutrient management.', topics: 'DAP, NPK, CAN, urea, organic manure' },
  { icon: FlaskConical, logo: BRAND_ASSETS.quality, title: 'Crop Pests & Diseases', desc: 'Identify common pests and diseases, understand effects and learn control methods.', topics: 'Maize, beans, tomatoes, cabbage' },
  { icon: Shield, logo: BRAND_ASSETS.quality, title: 'Safe Use of Agrochemicals', desc: 'Pesticide safety, product labels, PPE, safe storage and disposal of containers.', topics: 'Herbicides, insecticides, fungicides' },
  { icon: Droplets, logo: BRAND_ASSETS.innovation, title: 'Climate-Smart Agriculture', desc: 'Farming practices for changing weather, water conservation and soil protection.', topics: 'Water conservation, mulching, rotation' },
  { icon: Package, logo: BRAND_ASSETS.farmerGroups, title: 'Harvesting & Post-Harvest', desc: 'Proper harvesting, drying, sorting, grading, storage and reducing losses.', topics: 'Maize, beans, groundnuts, cassava' },
  { icon: TrendingUp, logo: BRAND_ASSETS.partnership, title: 'Agricultural Marketing', desc: 'Plan enterprises, keep farm records, understand markets and explore opportunities.', topics: 'Farm business, value addition, markets' },
  { icon: Sprout, logo: BRAND_ASSETS.innovation, title: 'Vegetable Production', desc: 'Establishing, managing and harvesting vegetable crops for income and nutrition.', topics: 'Tomatoes, cabbage, onions, eggplants' },
];

const guides = [
  {
    title: 'How to Establish a Successful Maize Farm',
    image: COMPANY_ACTIVITY_PHOTOS.fieldVisit,
    intro: 'Maize is an important food and commercial crop in Uganda. Successful production requires proper planning, good-quality seeds, suitable land preparation and effective crop management.',
    steps: [
      { title: 'Select a suitable maize variety', desc: 'Consider maturity period, rainfall suitability, disease resistance, yield potential and certified seed availability. Purchase from reputable suppliers.' },
      { title: 'Prepare the land', desc: 'Remove unnecessary vegetation and manage weeds while avoiding soil erosion. Ensure the field is suitable for planting with proper drainage.' },
      { title: 'Plant at the appropriate time', desc: 'Plant when soil moisture is adequate. Follow recommendations for planting depth, row spacing, plant-to-plant spacing and seed rate.' },
      { title: 'Manage weeds', desc: 'Weeds compete for water, nutrients, sunlight and space. Monitor fields regularly and control weeds early using appropriate methods.' },
      { title: 'Monitor pests and diseases', desc: 'Inspect regularly for fall armyworm, stem borers, maize streak disease and other problems. Seek technical guidance before selecting control measures.' },
      { title: 'Manage soil fertility', desc: 'Maintain fertility through soil management, organic matter and recommended fertilizer application based on soil conditions and crop requirements.' },
      { title: 'Harvest and store properly', desc: 'Harvest at appropriate maturity. Dry grain adequately before storage. Use clean, dry, secure facilities protected from moisture, insects and rodents.' },
    ],
  },
  {
    title: 'How to Grow Beans Successfully',
    image: COMPANY_ACTIVITY_PHOTOS.fieldWorker,
    intro: 'Beans are an important source of protein and income. They can be grown for household consumption and commercial markets.',
    steps: [
      { title: 'Choose suitable seed', desc: 'Select healthy, quality seed of a variety suitable for local conditions.' },
      { title: 'Prepare the land', desc: 'Ensure the field is adequately prepared and free from excessive weeds.' },
      { title: 'Plant at the right time', desc: 'Plant when moisture conditions are suitable for germination.' },
      { title: 'Use recommended spacing', desc: 'Follow recommendations for the particular bean variety and production system.' },
      { title: 'Control weeds', desc: 'Keep the field free from excessive weed competition, particularly during early growth.' },
      { title: 'Monitor pests and diseases', desc: 'Inspect plants for symptoms of diseases and damage from insects.' },
      { title: 'Maintain soil fertility', desc: 'Use appropriate soil fertility management practices including organic matter.' },
      { title: 'Harvest, dry and store properly', desc: 'Harvest at the correct stage. Dry beans thoroughly and store in clean, dry conditions.' },
    ],
  },
  {
    title: 'Vegetable Production for Household Income',
    image: COMPANY_ACTIVITY_PHOTOS.tomatoInspection,
    intro: 'Vegetable farming provides opportunities for food production, nutrition improvement and income generation.',
    steps: [
      { title: 'Select the vegetable crop', desc: 'Choose based on climate, soil, water availability, market demand and household preferences.' },
      { title: 'Prepare the nursery', desc: 'Some vegetables are first established in a nursery. Use suitable materials, clean water and appropriate management.' },
      { title: 'Prepare the garden', desc: 'Prepare a suitable planting area with adequate drainage.' },
      { title: 'Transplant or direct-sow', desc: 'Follow the recommended planting method for each crop. Avoid damaging seedlings.' },
      { title: 'Water management', desc: 'Provide appropriate moisture without waterlogging the crops.' },
      { title: 'Weed and manage the crop', desc: 'Control weeds, monitor growth and remove unhealthy plant material.' },
      { title: 'Manage pests and diseases', desc: 'Inspect regularly and seek appropriate advice when signs of attack appear.' },
      { title: 'Harvest and market', desc: 'Harvest at the appropriate stage depending on the crop and market requirements.' },
    ],
  },
];

const fertilizerTable = [
  { name: 'DAP', nutrients: 'Nitrogen and phosphorus' },
  { name: 'NPK', nutrients: 'Nitrogen, phosphorus and potassium' },
  { name: 'CAN', nutrients: 'Nitrogen and calcium' },
  { name: 'Urea', nutrients: 'Concentrated nitrogen' },
  { name: 'Foliar fertilizers', nutrients: 'Plant nutrients through leaf application' },
];

const glossary = [
  { term: 'Agriculture', meaning: 'The practice of growing crops and rearing animals.' },
  { term: 'Agronomy', meaning: 'The science and practice of crop production and soil management.' },
  { term: 'Germination', meaning: 'The process through which a seed begins to grow.' },
  { term: 'Seedling', meaning: 'A young plant that has developed from a seed.' },
  { term: 'Fertilizer', meaning: 'A material used to supply nutrients to plants.' },
  { term: 'Soil fertility', meaning: 'The ability of soil to supply nutrients needed for plant growth.' },
  { term: 'Irrigation', meaning: 'Artificial application of water to crops.' },
  { term: 'Mulching', meaning: 'Covering soil with materials to conserve moisture and protect soil.' },
  { term: 'Crop rotation', meaning: 'Growing different crops on the same land in a planned sequence.' },
  { term: 'Intercropping', meaning: 'Growing two or more crops together on the same field.' },
  { term: 'Herbicide', meaning: 'A chemical product used to control weeds.' },
  { term: 'Insecticide', meaning: 'A chemical product used to control insects.' },
  { term: 'Fungicide', meaning: 'A product used to manage fungal diseases.' },
  { term: 'Post-harvest losses', meaning: 'Losses that occur after crops have been harvested.' },
  { term: 'Agribusiness', meaning: 'Business activities involving agricultural production and services.' },
  { term: 'Extension services', meaning: 'Agricultural education and advisory support for farmers.' },
  { term: 'Value addition', meaning: 'Improving a product to increase its usefulness or market value.' },
  { term: 'Climate-smart agriculture', meaning: 'Approaches that support productivity, resilience and sustainability.' },
];

const cropGuides = [
  { name: 'Maize Production', icon: Sprout, logo: BRAND_ASSETS.innovation },
  { name: 'Bean Production', icon: Sprout, logo: BRAND_ASSETS.innovation },
  { name: 'Cowpea Production', icon: Leaf, logo: BRAND_ASSETS.innovation },
  { name: 'Tomato Production', icon: Sprout, logo: BRAND_ASSETS.innovation },
  { name: 'Cabbage Production', icon: Leaf, logo: BRAND_ASSETS.innovation },
  { name: 'Groundnut Production', icon: Sprout, logo: BRAND_ASSETS.innovation },
  { name: 'Cassava Production', icon: Sprout, logo: BRAND_ASSETS.innovation },
  { name: 'Other Vegetables', icon: Leaf, logo: BRAND_ASSETS.innovation },
];

const externalResources = [
  { name: 'Ministry of Agriculture, Animal Industry and Fisheries (MAAIF)', desc: 'Government information on agricultural policies, programmes and technical guidance.' },
  { name: 'National Agricultural Research Organisation (NARO)', desc: 'Agricultural research and information on improved technologies and farming practices.' },
  { name: 'National Agricultural Advisory Services (NAADS)', desc: 'Information about agricultural advisory and development programmes in Uganda.' },
  { name: 'Food and Agriculture Organization (FAO)', desc: 'International agricultural information, food security resources and technical publications.' },
];

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [openGuide, setOpenGuide] = useState(0);
  const [openGlossary, setOpenGlossary] = useState(false);

  return (
    <div>
      <PageHero
        title="Farmer Resources Centre"
        subtitle="Knowledge and information for better farming. Practical agricultural guides, educational materials and advice to help farmers improve their activities."
        image={COMPANY_ACTIVITY_PHOTOS.mulchedRows.src}
        imageCaption="Company activity · Mulched crop rows"
        breadcrumb="Home / Farmer Resources"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to the OJAPH Farmer Resources Centre</h2>
            <p className="text-gray-600 leading-relaxed">
              Agriculture plays an important role in food security, employment and income generation. However, successful farming requires more than land and inputs — farmers need reliable information, practical skills and knowledge of appropriate practices. Our Farmer Resources Centre provides educational information, farming guides and agricultural knowledge to support farmers throughout the production process.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="pb-16 bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Explore Topics"
            title="Agricultural Resource Categories"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resourceCategories.map((cat, i) => (
              <div key={i} className="card p-6 group hover:-translate-y-1">
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img src={cat.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{cat.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{cat.desc}</p>
                <p className="text-xs font-medium text-primary-600">{cat.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Practical Knowledge"
            title="Featured Farming Guides"
            subtitle="Find useful agricultural information you can apply immediately in your fields."
          />
          <div className="space-y-6">
            {guides.map((guide, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img src={guide.image.src} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent lg:bg-gradient-to-r" />
                    <span className="absolute right-3 top-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Company activity · {guide.image.caption}</span>
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-primary-600" />
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Guide {i + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{guide.intro}</p>
                    <button
                      onClick={() => setOpenGuide(openGuide === i ? -1 : i)}
                      className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {openGuide === i ? 'Hide steps' : 'View detailed steps'}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openGuide === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openGuide === i && (
                      <div className="mt-4 space-y-3 animate-fade-in">
                        {guide.steps.map((step, j) => (
                          <div key={j} className="flex gap-3 p-3 bg-primary-50/50 rounded-lg">
                            <span className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{j + 1}</span>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                              <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fertilizer Guide */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Guide 4</p>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Understanding Fertilizers and Their Uses</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fertilizers are agricultural inputs used to supply nutrients required for crop growth and development. Different fertilizers contain different nutrients and serve different purposes.
              </p>
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-display font-bold text-gray-900 mb-4">Important Management Practices</h4>
                <div className="space-y-2">
                  {[
                    'Understand the crop\'s nutrient requirements',
                    'Consider soil testing where available',
                    'Select the appropriate fertilizer formulation',
                    'Follow recommended application rates',
                    'Apply fertilizer at the recommended stage',
                    'Avoid unnecessary or excessive application',
                    'Store fertilizers in a dry and secure place',
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronDown className="w-4 h-4 text-primary-600 shrink-0 mt-0.5 rotate-270" />
                      <p className="text-sm text-gray-700">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 bg-accent-50 border-l-4 border-accent-500 rounded-r-lg p-4">
                <p className="text-sm text-accent-800 font-medium">
                  Remember: More fertilizer does not automatically mean more production. Appropriate selection, correct application and good crop management are essential.
                </p>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                <img src={COMPANY_ACTIVITY_PHOTOS.vegetableBeds.src} alt="" aria-hidden="true" className="w-full h-64 object-cover" loading="lazy" />
                <span className="absolute right-3 top-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Company activity · Vegetable garden beds</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-primary-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Fertilizer</th>
                      <th className="px-4 py-3 text-left font-semibold">Main Nutrients</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fertilizerTable.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900">{f.name}</td>
                        <td className="px-4 py-3 text-gray-600">{f.nutrients}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Calendar */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Seasonal Planning"
            title="Farming Calendar & Seasonal Planning"
            subtitle="Agricultural activities depend on rainfall, soil conditions, crop type and market opportunities. Plan before each planting season."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src={BRAND_ASSETS.innovation} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <h4 className="font-display font-bold text-gray-900 mb-3">Before Planting</h4>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['Identify crops to grow', 'Select appropriate seed varieties', 'Estimate seed required', 'Prepare land and tools', 'Plan fertilizer requirements', 'Identify labour requirements', 'Prepare a farm budget', 'Consider market demand', 'Monitor weather advisories'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><ChevronDown className="w-3.5 h-3.5 text-primary-500 mt-1 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src={BRAND_ASSETS.quality} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <h4 className="font-display font-bold text-gray-900 mb-3">During Crop Growth</h4>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['Monitor crop establishment', 'Control weeds', 'Assess soil fertility and nutrition', 'Inspect for pests and diseases', 'Monitor water availability', 'Maintain farm records'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><ChevronDown className="w-3.5 h-3.5 text-accent-500 mt-1 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img src={BRAND_ASSETS.partnership} alt="" aria-hidden="true" className="h-full w-full object-contain" />
              </div>
              <h4 className="font-display font-bold text-gray-900 mb-3">After Harvesting</h4>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {['Dry and store produce properly', 'Sort and grade produce', 'Identify potential buyers', 'Record sales and production costs', 'Evaluate farming performance', 'Plan for the next season'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><ChevronDown className="w-3.5 h-3.5 text-primary-500 mt-1 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-accent-50 border border-accent-200 rounded-xl p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
            <p className="text-sm text-accent-800">
              Planting dates and rainfall patterns vary between locations. Farmers in Terego, Arua and the wider West Nile region should consult current local weather information and district agricultural extension officers before making planting decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Crop-specific guides */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Crop Information"
            title="Crop-Specific Farming Guides"
            subtitle="Dedicated information for the crops commonly grown by farmers in our target market."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cropGuides.map((crop, i) => (
              <div key={i} className="card p-5 text-center group">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img src={crop.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                </div>
                <p className="font-display font-bold text-gray-900 text-sm">{crop.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Management */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Treat Farming as a Business"
            title="Farm Management & Agribusiness Education"
            subtitle="Agriculture can be an important source of household income when farmers manage their activities effectively."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, logo: BRAND_ASSETS.quality, title: 'Farm Budgeting', desc: 'Estimate costs and possible income. Include land preparation, seeds, fertilizers, agrochemicals, labour, transport, equipment, harvesting and storage.' },
              { icon: BookOpen, logo: BRAND_ASSETS.quality, title: 'Record Keeping', desc: 'Track farm expenditure, seed and input records, labour, production, harvest, sales, and profit and loss records.' },
              { icon: TrendingUp, logo: BRAND_ASSETS.partnership, title: 'Understanding Markets', desc: 'Consider market demand, produce quality, seasonal prices, transport costs, storage, available buyers and market information.' },
              { icon: Package, logo: BRAND_ASSETS.quality, title: 'Value Addition', desc: 'Cleaning and sorting grain, drying produce, packaging, processing cassava, and grading and packaging vegetables.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img src={item.logo} alt="" aria-hidden="true" className="h-full w-full object-contain" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Materials */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Learning Materials"
            title="Downloadable Farming Resources"
            subtitle="Educational documents that farmers can read online or download for use during farm activities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {['Maize Production Guide', 'Bean Production Guide', 'Vegetable Production Guide', 'Fertilizer Management Guide', 'Agrochemical Safety Guide', 'Pest & Disease Guide', 'Climate-Smart Farming Guide', 'Farm Record Book', 'Farm Business Plan Template', 'Post-Harvest Handling Guide'].map((doc, i) => (
              <div key={i} className="card p-5 group">
                <FileText className="w-8 h-8 text-primary-600 mb-3" />
                <p className="text-sm font-medium text-gray-900 mb-3">{doc}</p>
                <button className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1 font-medium opacity-60 cursor-not-allowed">
                  <Download className="w-3.5 h-3.5" />
                  Coming soon
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-accent-50 border-l-4 border-accent-500 rounded-r-lg p-4">
            <p className="text-sm text-accent-800">
              Only publish downloadable files after the company has prepared or verified their contents. Educational materials should be reviewed for technical accuracy before being presented as official OJAPH guides.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Understanding Farming Terms</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agricultural Glossary</h2>
            <button onClick={() => setOpenGlossary(!openGlossary)} className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-2 mx-auto">
              {openGlossary ? 'Hide glossary' : 'Show full glossary'}
              <ChevronDown className={`w-4 h-4 transition-transform ${openGlossary ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {openGlossary && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in">
              {glossary.map((g, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-primary-700 text-sm mb-1">{g.term}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{g.meaning}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* External Resources */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Useful Links"
            title="External Agricultural Resources"
            subtitle="Recognised agricultural information providers. Their inclusion does not imply official partnership with OJAPH."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {externalResources.map((r, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1 text-sm">{r.name}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a question */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary-100 bg-gradient-to-br from-[#edf5f8] via-white to-primary-50 p-8 text-center shadow-sm sm:p-12">
            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary-700" />
            <h2 className="font-sans text-3xl font-extrabold text-primary-950 mb-4">Do You Have a Farming Challenge?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Every farmer experiences different agricultural challenges. Whether you are struggling with poor germination, crop diseases, declining soil fertility, pest attacks or post-harvest handling, we encourage you to seek appropriate information before making important decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6">
              <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 rounded-xl border border-primary-100 bg-white p-4 shadow-sm transition-all hover:border-accent-300 hover:shadow-md">
                <img src={BRAND_ASSETS.phone} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                <span className="text-sm font-semibold text-primary-950">{COMPANY.phone1}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center justify-center gap-2 rounded-xl border border-primary-100 bg-white p-4 shadow-sm transition-all hover:border-accent-300 hover:shadow-md">
                <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                <span className="text-sm font-semibold text-primary-950">Email Us</span>
              </a>
            </div>
            <button onClick={() => onNavigate('contact')} className="btn-accent">
              Submit a Farming Question <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Grow Your Knowledge. Improve Your Farming."
        description="Explore our agricultural resources, learn better farming practices and take informed steps towards improving your agricultural activities."
        primaryLabel="Contact Our Team"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="View Our Products"
        onSecondary={() => onNavigate('products')}
      />
    </div>
  );
}
