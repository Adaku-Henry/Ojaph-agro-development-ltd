import { Users, GraduationCap, Leaf, Sprout, Droplets, TrendingUp, MessageCircle, BookOpen, CheckCircle2, ArrowRight, Target, Heart, Globe, Lightbulb, Building2, Handshake } from 'lucide-react';
import { BRAND_ASSETS, COMPANY, type PageId } from '@/data/company';
import { COMPANY_ACTIVITY_PHOTOS } from '@/data/companyActivities';
import { PageHero, SectionTitle, CTASection } from '@/components/ui';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

const services = [
  {
    icon: Users,
    title: 'Agricultural Extension & Consultancy',
    image: COMPANY_ACTIVITY_PHOTOS.tomatoInspection,
    desc: 'Agricultural guidance and advisory support to farmers on different aspects of crop production and farm management.',
    details: [
      'Guidance on selecting suitable crop varieties',
      'Advice on land preparation and planting methods',
      'Guidance on proper spacing and seed rates',
      'Advice on fertilizer application and crop nutrition',
      'Identification and management of crop production challenges',
      'Guidance on harvesting and post-harvest handling',
      'General farm management advice',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Farmer Training & Capacity Building',
    image: COMPANY_ACTIVITY_PHOTOS.fieldLearning,
    desc: 'Training, sensitisation and practical learning activities that strengthen farmers\' ability to manage agricultural enterprises.',
    details: [
      'Good agricultural practices',
      'Proper use and handling of agricultural products',
      'Safe handling and application of agrochemicals',
      'Soil fertility management',
      'Crop pest and disease management',
      'Improved planting and crop management techniques',
      'Post-harvest handling and storage',
      'Farm planning and record keeping',
      'Climate-smart agricultural practices',
    ],
  },
  {
    icon: Leaf,
    title: 'Demonstration Gardens & Practical Learning',
    image: COMPANY_ACTIVITY_PHOTOS.vegetableBeds,
    desc: 'Opportunities for farmers to observe and learn how recommended agricultural practices can be applied in real farming situations.',
    details: [
      'Improved crop varieties',
      'Recommended planting methods',
      'Fertilizer application techniques',
      'Crop spacing and field management',
      'Integrated pest and disease management',
      'Vegetable production',
      'Soil and water conservation',
    ],
  },
  {
    icon: Sprout,
    title: 'Agronomy & Crop Production Support',
    image: COMPANY_ACTIVITY_PHOTOS.fieldWorker,
    desc: 'Technical guidance on the different stages of crop production, from land preparation to post-harvest handling.',
    details: [
      'Land preparation guidance',
      'Seed selection advice',
      'Planting time, spacing and seed rates',
      'Crop nutrition and fertilizer selection',
      'Pest management guidance',
      'Disease management support',
      'Weed management practices',
      'Harvesting advice',
      'Post-harvest handling guidance',
    ],
  },
  {
    icon: Droplets,
    title: 'Climate-Smart Agriculture',
    image: COMPANY_ACTIVITY_PHOTOS.mulchedRows,
    desc: 'Practical approaches that help farmers manage climate-related risks while protecting natural resources.',
    details: [
      'Promoting drought-tolerant crop varieties',
      'Encouraging water conservation',
      'Promoting efficient water-use practices',
      'Encouraging soil conservation',
      'Supporting sustainable land management',
      'Supporting appropriate crop diversification',
      'Promoting environmentally responsible farming',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Agricultural Market Linkages',
    image: COMPANY_ACTIVITY_PHOTOS.shopDisplay,
    desc: 'Connecting farmers with agricultural market opportunities and improving their participation in value chains.',
    details: [
      'Providing information about potential produce markets',
      'Encouraging collective marketing among farmers',
      'Promoting better produce handling and quality',
      'Supporting farmers to understand market requirements',
      'Encouraging agricultural value addition',
      'Facilitating connections with potential buyers',
    ],
  },
  {
    icon: MessageCircle,
    title: 'After-Sales Support & Customer Guidance',
    image: COMPANY_ACTIVITY_PHOTOS.shopService,
    desc: 'Our relationship with customers should not end after they purchase an agricultural product.',
    details: [
      'Basic guidance on product use',
      'Information on product labels and instructions',
      'Advice on appropriate storage of agricultural products',
      'Guidance on safe handling of agrochemicals',
      'Responding to customer questions',
      'Directing customers to qualified technical assistance',
    ],
  },
  {
    icon: BookOpen,
    title: 'Internship & Practical Agricultural Learning',
    image: COMPANY_ACTIVITY_PHOTOS.seedlingTrays,
    desc: 'Practical experience opportunities for students and aspiring agricultural professionals, subject to availability.',
    details: [
      'Agricultural product management',
      'Basic crop production practices',
      'Farmer communication and extension activities',
      'Agricultural marketing',
      'Farm management',
      'Demonstration activities',
      'Customer service in agricultural product businesses',
    ],
  },
];

const beneficiaries = [
  { icon: Sprout, title: 'Individual Farmers', desc: 'People engaged in crop production who need inputs, information and technical guidance.' },
  { icon: Users, title: 'Farmer Groups & Cooperatives', desc: 'Groups interested in improving farming practices, knowledge sharing and collective activities.' },
  { icon: TrendingUp, title: 'Agricultural Entrepreneurs', desc: 'Individuals involved in production, input distribution and related businesses.' },
  { icon: Building2, title: 'Educational Institutions', desc: 'Schools and training institutions interested in agricultural learning and practical exposure.' },
  { icon: Handshake, title: 'Development Organisations', desc: 'Organisations working in agricultural development, food security and community livelihoods.' },
  { icon: GraduationCap, title: 'Students & Interns', desc: 'Learners interested in gaining practical agricultural experience, subject to available opportunities.' },
];

const deliveryApproach = [
  { title: 'Understanding Farmers\' Needs', desc: 'We begin by understanding the farmer\'s agricultural activities, challenges and support requirements.' },
  { title: 'Identifying Appropriate Support', desc: 'We identify relevant agricultural information, products, training or consultancy support.' },
  { title: 'Providing Guidance & Support', desc: 'We share practical information and guidance relevant to the farmer\'s needs.' },
  { title: 'Encouraging Proper Application', desc: 'We encourage farmers to apply appropriate agricultural practices and follow product instructions.' },
  { title: 'Follow-up & Continued Engagement', desc: 'Where arrangements allow, we maintain communication to respond to questions and provide further guidance.' },
];

const whyChoose = [
  { icon: Target, title: 'Agricultural Focus', desc: 'Our activities are centred on agricultural development and farmer support.' },
  { icon: BookOpen, title: 'Practical Guidance', desc: 'We emphasise useful agricultural knowledge and application.' },
  { icon: Heart, title: 'Customer Commitment', desc: 'We value farmers and seek to understand their needs.' },
  { icon: Leaf, title: 'Sustainable Farming', desc: 'We encourage responsible use of agricultural resources.' },
  { icon: Globe, title: 'Community Development', desc: 'We recognise agriculture\'s contribution to food security and income.' },
  { icon: Lightbulb, title: 'Continuous Learning', desc: 'We value knowledge sharing and improvement in agricultural practices.' },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Agricultural services that support better farming. We provide knowledge, guidance and practical support to help farmers improve crop production, manage challenges and strengthen livelihoods."
        image={COMPANY_ACTIVITY_PHOTOS.fieldVisit.src}
        imageCaption="Company activity · Field visit"
        breadcrumb="Home / Services"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agricultural Services That Support Better Farming</h2>
            <p className="text-gray-600 leading-relaxed">
              At OJAPH, we believe that successful agriculture requires more than access to quality farming inputs. Farmers also need reliable information, practical skills, technical guidance and access to agricultural markets. Whether you are an individual farmer, a farmer group, an institution or a development organisation, we aim to provide relevant agricultural support to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image.src} alt="" aria-hidden="true" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <span className="absolute right-3 top-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Company activity · {service.image.caption}</span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur">
                      <service.icon aria-hidden="true" className="h-7 w-7 text-primary-700" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                  <div className="space-y-2 mb-4">
                    {service.details.slice(0, 4).map((d, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600">{d}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1 group/btn"
                  >
                    Enquire Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Who Benefits"
            title="Who Can Benefit From Our Services?"
            subtitle="Our services are intended to support different categories of agricultural stakeholders."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiaries.map(({ icon: Icon, ...b }) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery approach */}
      <section className="section-padding bg-gradient-to-br from-[#eef5f8] via-white to-primary-50">
        <div className="container-page relative z-10">
          <SectionTitle
            eyebrow="Our Approach"
            title="How We Deliver Our Services"
            subtitle="We aim to make agricultural support practical, accessible and relevant to farmers' needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {deliveryApproach.map((step, i) => (
              <div key={i} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-3 font-sans text-3xl font-extrabold text-accent-600">0{i + 1}</p>
                <h4 className="mb-2 font-sans text-sm font-bold text-primary-950">{step.title}</h4>
                <p className="text-xs leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Your Partner"
            title="Why Choose OJAPH Agro Development Limited?"
            subtitle="Farmers need dependable support to make informed agricultural decisions. We build strong relationships through these commitments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map(({ icon: Icon, ...item }) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Let Us Support Your Agricultural Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Are you a farmer looking for agricultural guidance? Do you represent a farmer group, school or organisation interested in agricultural training or consultancy? Contact us to discuss your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img src={BRAND_ASSETS.phone} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                <span className="text-sm font-semibold text-gray-900">{COMPANY.phone1}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
                <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
                <span className="text-sm font-semibold text-gray-900">{COMPANY.email}</span>
              </a>
            </div>
            <button onClick={() => onNavigate('contact')} className="btn-primary mt-8">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Let Us Support Your Agricultural Journey"
        description="Whether you are looking for agricultural products, farming advice, farmer training or opportunities for collaboration, our team welcomes your enquiry."
        primaryLabel="Request Our Services"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="View Our Products"
        onSecondary={() => onNavigate('products')}
      />
    </div>
  );
}
