import { useEffect, useRef, useState } from 'react';
import { Sprout, GraduationCap, Leaf, TrendingUp, BookOpen, MapPin, Calendar, ArrowRight, CheckCircle2, Image as ImageIcon, Users, X } from 'lucide-react';
import { type PageId } from '@/data/company';
import { COMPANY_ACTIVITY_GALLERY, COMPANY_ACTIVITY_PHOTOS } from '@/data/companyActivities';
import { PageHero, SectionTitle, CTASection } from '@/components/ui';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

const focusAreas = [
  { icon: Sprout, image: COMPANY_ACTIVITY_PHOTOS.fieldWorker, title: 'Crop Production Improvement', desc: 'Promoting improved crop varieties, appropriate planting methods and proper crop management.' },
  { icon: GraduationCap, image: COMPANY_ACTIVITY_PHOTOS.fieldLearning, title: 'Farmer Training & Extension', desc: 'Farmer education, practical demonstrations and knowledge-sharing activities.' },
  { icon: Leaf, image: COMPANY_ACTIVITY_PHOTOS.vegetableBeds, title: 'Demonstration Gardens', desc: 'Practical learning where farmers observe agricultural practices and production methods.' },
  { icon: Leaf, image: COMPANY_ACTIVITY_PHOTOS.mulchedRows, title: 'Sustainable & Climate-Smart Agriculture', desc: 'Soil conservation, water management, crop diversification and environmentally responsible practices.' },
  { icon: TrendingUp, image: COMPANY_ACTIVITY_PHOTOS.shopDisplay, title: 'Agricultural Market Development', desc: 'Improving farmers\' understanding of markets, quality requirements and value addition.' },
  { icon: BookOpen, image: COMPANY_ACTIVITY_PHOTOS.seedlingTrays, title: 'Agricultural Skills Development', desc: 'Practical learning and exposure opportunities for students, interns and aspiring professionals.' },
];

const projects = [
  {
    title: 'Agricultural Demonstration Gardens',
    image: COMPANY_ACTIVITY_PHOTOS.vegetableBeds,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Demonstration gardens providing farmers with practical opportunities to learn about improved agricultural practices. Farmers can observe different crop varieties, planting methods, spacing, fertilizer management and general crop care.',
    activities: ['Establishing demonstration plots', 'Introducing suitable crop varieties', 'Demonstrating appropriate planting techniques', 'Promoting soil fertility management', 'Organising practical farmer learning sessions'],
  },
  {
    title: 'Farmer Training & Capacity Building',
    image: COMPANY_ACTIVITY_PHOTOS.fieldDemonstration,
    location: 'West Nile region',
    status: 'Planned',
    desc: 'Improving agricultural knowledge and practical farming skills through training covering crop production, input use, pest management, soil fertility, harvesting and post-harvest handling.',
    activities: ['Farmer sensitisation meetings', 'Practical crop production training', 'Safe agrochemical handling education', 'Soil fertility management sessions', 'Post-harvest management education'],
  },
  {
    title: 'Access to Agricultural Products',
    image: COMPANY_ACTIVITY_PHOTOS.productShopVisit,
    location: 'Kubala, Terego District',
    status: 'Ongoing',
    desc: 'Connecting farmers with relevant agricultural products and clear product information while encouraging responsible selection and use.',
    activities: ['Connecting farmers with agricultural products', 'Providing basic product information', 'Guiding customers on safe handling', 'Promoting appropriate product selection', 'Supporting farmers with product enquiries'],
  },
  {
    title: 'Climate-Smart Agriculture Promotion',
    image: COMPANY_ACTIVITY_PHOTOS.mulchedRows,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Encouraging farming practices that support agricultural productivity, climate resilience and sustainable natural resource management.',
    activities: ['Promoting soil conservation', 'Encouraging efficient water use', 'Sharing information on crop diversification', 'Promoting mulching and crop rotation', 'Educating farmers on climate risks'],
  },
  {
    title: 'Agricultural Market Linkages',
    image: COMPANY_ACTIVITY_PHOTOS.shopDisplay,
    location: 'To be confirmed',
    status: 'Planned',
    desc: 'Improving farmers\' awareness of agricultural marketing opportunities and encouraging better produce handling and market preparation.',
    activities: ['Sharing market information', 'Promoting produce quality and grading', 'Encouraging collective marketing', 'Providing information on value addition', 'Exploring connections with buyers'],
  },
  {
    title: 'Internship & Practical Learning',
    image: COMPANY_ACTIVITY_PHOTOS.greenhouseNursery,
    location: 'Kubala, Terego District',
    status: 'Planned',
    desc: 'Practical agricultural learning opportunities for students to connect classroom knowledge with real farming and agribusiness activities.',
    activities: ['Agricultural product management', 'Crop production exposure', 'Farmer communication', 'Agricultural marketing', 'Farm management and extension'],
  },
];

const projectSections = [
  { status: 'Ongoing', title: 'Ongoing Activities' },
  { status: 'Planned', title: 'Planned Initiatives' },
] as const;

const galleryCategories = [
  'All',
  'Crop Production',
  'Farmer Training',
  'Nursery & Greenhouse',
  'Products & Customer Service',
  'Livestock',
];

const impact = [
  'Connecting farmers with agricultural products',
  'Strengthening agricultural knowledge among farmers',
  'Building understanding of crop production practices',
  'Promoting sustainable farming',
  'Raising awareness of post-harvest management',
  'Encouraging agricultural market participation',
  'Supporting practical agricultural skills development',
];

const updates = [
  { title: 'Preparing for the Next Planting Season', date: 'Seasonal', location: 'West Nile', desc: 'Agricultural advice and product information for upcoming planting activities.', status: 'Upcoming' },
  { title: 'Farmer Training on Safe Agrochemical Use', date: 'To be announced', location: 'Terego District', desc: 'Practical training sessions on responsible handling and application of agricultural chemicals.', status: 'Planned' },
  { title: 'Demonstration Garden Establishment', date: 'To be announced', location: 'To be confirmed', desc: 'Setting up demonstration plots for practical farmer learning and crop comparison.', status: 'Planned' },
];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof COMPANY_ACTIVITY_GALLERY)[number] | null>(null);
  const photoDialogRef = useRef<HTMLDialogElement>(null);
  const filteredImages = activeCategory === 'All'
    ? COMPANY_ACTIVITY_GALLERY
    : COMPANY_ACTIVITY_GALLERY.filter((img) => img.category === activeCategory);

  useEffect(() => {
    if (selectedPhoto && photoDialogRef.current && !photoDialogRef.current.open) {
      photoDialogRef.current.showModal();
    }
  }, [selectedPhoto]);

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
        subtitle="Explore company activity photographs alongside ongoing and planned agricultural initiatives."
        image={COMPANY_ACTIVITY_PHOTOS.cassavaFieldTeam.src}
        imageCaption="Company activity · Cassava field"
        breadcrumb="Home / Projects & Gallery"
      />

      {/* Focus Areas */}
      <section className="section-padding relative isolate overflow-hidden bg-white">
        <img src={COMPANY_ACTIVITY_PHOTOS.fieldDemonstration.src} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/85 via-white/80 to-primary-50/85" aria-hidden="true" />
        <div className="container-page relative">
          <SectionTitle
            eyebrow="Longer-Term Priorities"
            title="Future Development Areas"
            subtitle="Potential areas for future agricultural development; these are not presented as completed projects."
          />
          <div className="mb-7 flex items-start gap-3 rounded-2xl border border-primary-200 bg-white/90 p-4 text-sm leading-relaxed text-gray-700 shadow-sm">
            <ImageIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
            <p>These images are from the company activities archive and provide visual context only; they do not represent proof that each future development area has been completed.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ icon: Icon, image, ...area }) => (
              <article key={area.title} className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <figure className="relative h-48 overflow-hidden">
                  <img src={image.src} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-transparent to-primary-950/10" aria-hidden="true" />
                  <figcaption className="absolute bottom-3 left-4 text-xs font-medium text-white drop-shadow">{image.caption}</figcaption>
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-700 shadow-lg">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-primary-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Future focus</span>
                </figure>
                <div className="p-6">
                  <h4 className="font-display text-sm font-bold text-primary-950">{area.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">{area.desc}</p>
                </div>
              </article>
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
            <strong>Photo note:</strong> These photographs come from the supplied company activities archive and may not correspond to each named initiative below. Captions describe visible scenes only; dates, specific locations and measured outcomes have not been provided.
          </div>
          <div className="space-y-10">
            {projectSections.map(({ status, title }) => (
              <section key={status} aria-labelledby={`projects-${status.toLowerCase()}`}>
                <h3 id={`projects-${status.toLowerCase()}`} className="mb-5 font-display text-2xl font-bold text-gray-900">{title}</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projects.filter((project) => project.status === status).map((project) => (
                    <article key={project.title} className="card group">
                      <div className="relative h-52 overflow-hidden">
                      <img src={project.image.src} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2.5 py-1 text-xs font-medium text-white">Company activity photo</span>
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
            eyebrow="From the company archive"
            title="Company Activities Gallery"
            subtitle="Real photographs from OJAPH crop production, training, nursery work, customer service and other activities."
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
            {filteredImages.map((img) => (
              <figure key={img.src} className="group overflow-hidden rounded-xl bg-gray-950 shadow-md">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(img)}
                  aria-label={`View larger photo: ${img.caption}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-400 focus-visible:ring-inset"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-contain ${
                      img.cropThirdPartySignage ? 'origin-right scale-[2]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/10 to-transparent" aria-hidden="true" />
                  <span className="absolute left-3 top-3 rounded bg-primary-950/75 px-2.5 py-1 text-xs font-medium text-white">OJAPH activity</span>
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-primary-900 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ImageIcon aria-hidden="true" className="h-3.5 w-3.5" />
                    View larger photo
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="block text-sm font-semibold text-white">{img.caption}</span>
                    <span className="mt-1 block text-xs text-primary-100">{img.category}</span>
                  </span>
                </button>
              </figure>
            ))}
          </div>
          <div className="mt-8 bg-accent-50 border-l-4 border-accent-500 rounded-r-lg p-4 flex items-start gap-3 max-w-2xl mx-auto">
            <ImageIcon className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
            <p className="text-sm text-accent-800">
              These photographs come from the company activities archive. Captions describe visible scenes only; a visible event banner or logo does not imply an official partnership, and dates, locations and outcomes are not inferred.
            </p>
          </div>
        </div>
      </section>

      <dialog
        ref={photoDialogRef}
        aria-labelledby="activity-photo-caption"
        onClose={() => setSelectedPhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) photoDialogRef.current?.close();
        }}
        className="m-0 h-screen max-h-screen w-screen max-w-none border-0 bg-transparent p-4 backdrop:bg-gray-950/95 sm:p-8"
      >
        {selectedPhoto && (
          <figure className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => photoDialogRef.current?.close()}
              aria-label="Close photo viewer"
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-accent-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-400"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="relative flex max-h-[calc(100vh-8rem)] max-w-full items-center justify-center overflow-hidden rounded-lg shadow-2xl">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className={`block max-h-[calc(100vh-8rem)] max-w-full object-contain ${
                  selectedPhoto.cropThirdPartySignage ? 'origin-right scale-[2]' : ''
                }`}
                decoding="async"
              />
            </div>
            <figcaption id="activity-photo-caption" className="mt-4 text-center text-sm font-medium text-white">
              {selectedPhoto.caption} · {selectedPhoto.category}
            </figcaption>
          </figure>
        )}
      </dialog>

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
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="rounded-[2rem] border border-primary-100 bg-gradient-to-br from-[#edf5f8] via-white to-primary-50 p-8 text-center shadow-sm sm:p-12">
            <Users aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-primary-700" />
            <h2 className="font-sans text-3xl font-extrabold text-primary-950 mb-4">Let Us Work Together for Agricultural Development</h2>
            <p className="mx-auto max-w-3xl text-gray-700 leading-relaxed mb-8">
              We welcome enquiries from individuals, farmer groups, institutions and organisations interested in agricultural development. We are interested in discussions around farmer education, agricultural products, demonstration activities, climate-smart practices, market development and student internship opportunities.
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
