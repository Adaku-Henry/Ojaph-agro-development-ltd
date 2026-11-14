import { useState } from 'react';
import { Sprout, GraduationCap, Leaf, TrendingUp, BookOpen, MapPin, Calendar, ArrowRight, CheckCircle2, Image as ImageIcon, Users } from 'lucide-react';
import { IMAGES, type PageId } from '@/data/company';
import { PageHero, SectionTitle, CTASection } from '@/components/ui';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

const focusAreas = [
  { icon: Sprout, title: 'Crop Production Improvement', desc: 'Promoting improved crop varieties, appropriate planting methods and proper crop management.' },
  { icon: GraduationCap, title: 'Farmer Training & Extension', desc: 'Farmer education, practical demonstrations and knowledge-sharing activities.' },
  { icon: Leaf, title: 'Demonstration Gardens', desc: 'Practical learning where farmers observe agricultural practices and production methods.' },
  { icon: Leaf, title: 'Sustainable & Climate-Smart Agriculture', desc: 'Soil conservation, water management, crop diversification and environmentally responsible practices.' },
  { icon: TrendingUp, title: 'Agricultural Market Development', desc: 'Improving farmers\' understanding of markets, quality requirements and value addition.' },
  { icon: BookOpen, title: 'Agricultural Skills Development', desc: 'Practical learning and exposure opportunities for students, interns and aspiring professionals.' },
];

const projects = [
  {
    title: 'Agricultural Demonstration Gardens',
    image: IMAGES.cornfield,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Demonstration gardens providing farmers with practical opportunities to learn about improved agricultural practices. Farmers can observe different crop varieties, planting methods, spacing, fertilizer management and general crop care.',
    activities: ['Establishing demonstration plots', 'Introducing suitable crop varieties', 'Demonstrating appropriate planting techniques', 'Promoting soil fertility management', 'Organising practical farmer learning sessions'],
  },
  {
    title: 'Farmer Training & Capacity Building',
    image: IMAGES.farmersRice,
    location: 'West Nile region',
    status: 'Planned',
    desc: 'Improving agricultural knowledge and practical farming skills through training covering crop production, input use, pest management, soil fertility, harvesting and post-harvest handling.',
    activities: ['Farmer sensitisation meetings', 'Practical crop production training', 'Safe agrochemical handling education', 'Soil fertility management sessions', 'Post-harvest management education'],
  },
  {
    title: 'Improved Agricultural Input Access',
    image: IMAGES.seedPackets,
    location: 'Kubala, Terego District',
    status: 'Ongoing',
    desc: 'Making relevant agricultural inputs accessible to farmers while encouraging responsible product selection and use through our agricultural input supply operations.',
    activities: ['Supplying agricultural inputs', 'Providing basic product information', 'Guiding customers on safe handling', 'Promoting appropriate input selection', 'Supporting farmers with product enquiries'],
  },
  {
    title: 'Climate-Smart Agriculture Promotion',
    image: IMAGES.cornfieldSunset,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Encouraging farming practices that support agricultural productivity, climate resilience and sustainable natural resource management.',
    activities: ['Promoting soil conservation', 'Encouraging efficient water use', 'Sharing information on crop diversification', 'Promoting mulching and crop rotation', 'Educating farmers on climate risks'],
  },
  {
    title: 'Agricultural Market Linkages',
    image: IMAGES.vegetablesMarket,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Improving farmers\' awareness of agricultural marketing opportunities and encouraging better produce handling and market preparation.',
    activities: ['Sharing market information', 'Promoting produce quality and grading', 'Encouraging collective marketing', 'Providing information on value addition', 'Exploring connections with buyers'],
  },
  {
    title: 'Internship & Practical Learning',
    image: IMAGES.nurseryTray,
    location: 'Kubala, Terego District',
    status: 'Planned',
    desc: 'Practical agricultural learning opportunities for students to connect classroom knowledge with real farming and agribusiness activities.',
    activities: ['Agricultural input management', 'Crop production exposure', 'Farmer communication', 'Agricultural marketing', 'Farm management and extension'],
  },
];

const projectSections = [
  { status: 'Ongoing', title: 'Ongoing Activities' },
  { status: 'Planned', title: 'Planned Initiatives' },
] as const;

const galleryCategories = ['All', 'Agricultural Input Supply', 'Farmer Training', 'Demonstration Gardens', 'Crop Production', 'Community Engagements'];

const galleryImages = [
  { src: IMAGES.seedPackets, caption: 'Seed packets', category: 'Agricultural Input Supply' },
  { src: IMAGES.farmersRice, caption: 'Farmers in a field', category: 'Farmer Training' },
  { src: IMAGES.cornfield, caption: 'Maize field', category: 'Demonstration Gardens' },
  { src: IMAGES.farmerHarvest, caption: 'Produce harvesting', category: 'Crop Production' },
  { src: IMAGES.farmerInspect, caption: 'Crop inspection', category: 'Crop Production' },
  { src: IMAGES.fertilizerHands, caption: 'Fertilizer application', category: 'Demonstration Gardens' },
  { src: IMAGES.sprayer, caption: 'Agricultural spraying', category: 'Farmer Training' },
  { src: IMAGES.vegetablesBasket, caption: 'Harvested vegetables', category: 'Crop Production' },
  { src: IMAGES.nurseryWorker, caption: 'Plant nursery work', category: 'Demonstration Gardens' },
  { src: IMAGES.farmerHands, caption: 'Farmer field support', category: 'Community Engagements' },
  { src: IMAGES.plantingSeeds, caption: 'Seed planting', category: 'Farmer Training' },
  { src: IMAGES.beansBasket, caption: 'Harvested beans', category: 'Crop Production' },
];

const impact = [
  'Supporting access to agricultural inputs',
  'Strengthening agricultural knowledge among farmers',
  'Building understanding of crop production practices',
  'Promoting sustainable farming',
  'Raising awareness of post-harvest management',
  'Encouraging agricultural market participation',
  'Supporting practical agricultural skills development',
];

const updates = [
  { title: 'Preparing for the Next Planting Season', date: 'Seasonal', location: 'West Nile', desc: 'Agricultural advisory and input availability information for upcoming planting activities.', status: 'Upcoming' },
  { title: 'Farmer Training on Safe Agrochemical Use', date: 'To be announced', location: 'Terego District', desc: 'Practical training sessions on responsible handling and application of agricultural chemicals.', status: 'Planned' },
  { title: 'Demonstration Garden Establishment', date: 'To be announced', location: 'To be confirmed', desc: 'Setting up demonstration plots for practical farmer learning and crop comparison.', status: 'Planned' },
];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredImages = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  const statusColors: Record<string, string> = {
    'Ongoing': 'bg-primary-100 text-primary-800',
    'Planned': 'bg-accent-100 text-accent-800',
    'Upcoming': 'bg-earth-100 text-earth-800',
    'Completed': 'bg-gray-100 text-gray-700',
  };

  return (
    <div>
      <PageHero
        title="Projects & Gallery"
        subtitle="Explore ongoing and planned agricultural initiatives. Stock images are marked as illustrative and do not document OJAPH activities."
        image={IMAGES.farmersWheat}
        breadcrumb="Home / Projects & Gallery"
      />

      {/* Focus Areas */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Longer-Term Priorities"
            title="Future Development Areas"
            subtitle="Potential areas for future agricultural development; these are not presented as completed projects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="card p-6 group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <area.icon aria-hidden="true" className="h-7 w-7 text-primary-700" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{area.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our Initiatives"
            title="Featured Projects"
            subtitle="Ongoing and planned initiatives are labeled by status. No completed activities are presented without verified supporting records."
          />
          <div className="mb-8 rounded-xl border border-primary-200 bg-primary-50 p-5 text-sm leading-relaxed text-gray-700">
            <strong>Completed activities:</strong> No completed project records with verified dates, locations and genuine photographs have been supplied for publication.
          </div>
          <div className="space-y-10">
            {projectSections.map(({ status, title }) => (
              <section key={status} aria-labelledby={`projects-${status.toLowerCase()}`}>
                <h3 id={`projects-${status.toLowerCase()}`} className="mb-5 font-display text-2xl font-bold text-gray-900">{title}</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.filter((project) => project.status === status).map((project) => (
                    <article key={project.title} className="card group">
                      <div className="relative h-52 overflow-hidden">
                        <img src={project.image} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2.5 py-1 text-xs font-medium text-white">Illustrative image</span>
                        <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="p-6">
                        <h4 className="mb-2 font-display font-bold text-gray-900">{project.title}</h4>
                        <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                          <MapPin aria-hidden="true" className="h-3.5 w-3.5" /> {project.location}
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600">{project.desc}</p>
                        <div className="border-t border-gray-100 pt-3">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            {status === 'Planned' ? 'Proposed Activities' : 'Activity Areas'}
                          </p>
                          <ul className="space-y-1">
                            {project.activities.slice(0, 3).map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-xs text-gray-600">
                                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Visual Journey"
            title="Photo Gallery"
            subtitle="Illustrative agricultural stock photographs only. These images do not document OJAPH activities."
          />
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer">
                <img src={img.src} alt={`Illustrative stock image: ${img.caption}`} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute left-3 top-3 rounded bg-black/60 px-2.5 py-1 text-xs font-medium text-white">Illustrative</span>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">Illustrative image: {img.caption}</p>
                  <p className="text-primary-200 text-xs">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-accent-50 border-l-4 border-accent-500 rounded-r-lg p-4 flex items-start gap-3 max-w-2xl mx-auto">
            <ImageIcon className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
            <p className="text-sm text-accent-800">
              These are stock photographs for illustration only, not evidence of OJAPH activities. Replace them with genuine company photographs only when the activity, date, location and permissions have been verified.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Intended Outcomes"
            title="Potential Community Contribution"
            subtitle="These are intended benefits, not measured results from completed projects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {impact.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-2xl mx-auto bg-accent-50 border border-accent-200 rounded-xl p-4">
            <p className="text-sm text-accent-800 text-center">
              Do not publish numerical impact statistics (farmers trained, hectares covered, income increases) unless the company has supporting records.
            </p>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Stay Informed"
            title="Project Updates & Announcements"
            subtitle="Announcements for ongoing and planned agricultural activities. Planned events are identified as such."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((update, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[update.status]}`}>{update.status}</span>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{update.title}</h4>
                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {update.location}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{update.desc}</p>
                <p className="text-xs text-gray-400 mt-3">{update.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with us */}
      <section className="py-16 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Users aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-accent-300" />
            <h2 className="font-display text-3xl font-bold text-white mb-4">Let Us Work Together for Agricultural Development</h2>
            <p className="text-primary-100 leading-relaxed mb-8">
              We welcome enquiries from individuals, farmer groups, institutions and organisations interested in agricultural development. We are interested in discussions around farmer education, input supply, demonstration activities, climate-smart practices, consultancy, market development and student internship opportunities.
            </p>
            <button onClick={() => onNavigate('partners')} className="btn-accent">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Together, We Can Grow Agriculture"
        description="Explore our agricultural activities, learn about our initiatives and connect with OJAPH as we work towards sustainable agricultural development."
        primaryLabel="Submit a Project Enquiry"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="See Our Partners"
        onSecondary={() => onNavigate('partners')}
      />
    </div>
  );
}
