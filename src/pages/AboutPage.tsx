import { Award, Shield, Users, Lightbulb, Leaf, Heart, TrendingUp, MapPin, GraduationCap, Building2, Sprout, CheckCircle2, Globe, TreePine, Handshake } from 'lucide-react';
import { BRAND_ASSETS, COMPANY, IMAGES, type PageId } from '@/data/company';
import { PageHero, SectionTitle, CTASection } from '@/components/ui';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const objectives = [
  { icon: Sprout, title: 'Supply Quality Agricultural Inputs', desc: 'Provide farmers with access to quality seeds, fertilizers, agrochemicals, farm tools and equipment.' },
  { icon: Users, title: 'Professional Extension Services', desc: 'Offer practical agricultural guidance and consultancy that helps farmers improve crop production.' },
  { icon: Leaf, title: 'Promote Climate-Smart Agriculture', desc: 'Support farmers in adopting practices that improve resilience to climate change.' },
  { icon: Sprout, title: 'Improve Crop Productivity', desc: 'Encourage improved seeds, appropriate crop nutrition, proper spacing and good agronomic practices.' },
  { icon: TrendingUp, title: 'Improve Market Access', desc: 'Support farmers and groups in identifying buyers and improving value-chain participation.' },
  { icon: GraduationCap, title: 'Strengthen Knowledge & Skills', desc: 'Organize farmer training, demonstrations, field visits and practical learning activities.' },
];

const values = [
  { icon: Award, title: 'Quality & Excellence', desc: 'We value quality in the agricultural inputs we supply and the services we provide.' },
  { icon: Shield, title: 'Integrity & Honesty', desc: 'We conduct business with honesty, transparency and accountability.' },
  { icon: Heart, title: 'Customer Commitment', desc: 'Farmers and customers are central to our business. We respond to their enquiries and needs.' },
  { icon: Lightbulb, title: 'Innovation & Learning', desc: 'We encourage continuous improvement, research and adoption of appropriate technologies.' },
  { icon: TreePine, title: 'Environmental Responsibility', desc: 'We promote sustainable farming, responsible agrochemical use and soil conservation.' },
  { icon: Handshake, title: 'Partnership & Collaboration', desc: 'We value working relationships with farmers, groups, suppliers and organizations.' },
  { icon: TrendingUp, title: 'Commitment to Development', desc: 'We believe agricultural development can improve livelihoods and create opportunities.' },
];

const approach = [
  { icon: Sprout, title: 'Access to Agricultural Inputs', desc: 'Making improved seeds, agrochemicals, fertilizers and tools accessible.' },
  { icon: Users, title: 'Practical Farmer Support', desc: 'Extension support, field visits and after-sales guidance for appropriate input use.' },
  { icon: Leaf, title: 'Demonstration & Learning', desc: 'Demonstration gardens where farmers observe crop performance and learn practically.' },
  { icon: Globe, title: 'Climate Resilience', desc: 'Encouraging climate-smart practices that reduce drought and weather effects.' },
  { icon: TrendingUp, title: 'Agricultural Market Development', desc: 'Linking farmers and groups with produce buyers and value-chain actors.' },
  { icon: Handshake, title: 'Collaboration', desc: 'Working with organizations, suppliers and community stakeholders.' },
];

const team = [
  {
    name: 'Ojandu Philliam',
    role: 'Founder & Managing Director',
    image: '/team/ojandu-philliam.png',
    category: 'Leadership',
    description: 'As founder and managing director, Ojandu provides overall leadership and strategic direction for OJAPH. This role connects the company’s agricultural product supply with its farmer-support and service priorities.',
  },
  {
    name: 'Oceni Kennedy',
    role: 'Operations Manager',
    image: '/team/oceni-kennedy.png',
    category: 'Operations',
    description: 'Oceni’s role focuses on the coordination of daily operations. Organized operations help support the company’s product supply, customer service and agricultural activities.',
  },
  {
    name: 'Candiru Alice',
    role: 'Finance Administrator',
    image: '/team/candiru-alice.png',
    category: 'Finance & administration',
    description: 'Candiru supports the company’s finance and administrative work. This important function helps maintain orderly business processes behind OJAPH’s day-to-day service.',
  },
  {
    name: 'Drileyo Kennedy',
    role: 'Extension Officer',
    image: '/team/drileyo-kennedy.png',
    category: 'Farmer support',
    description: 'Drileyo’s extension role connects agricultural information with practical farmer needs. Extension work supports learning, field engagement and informed crop-production decisions.',
  },
  {
    name: 'Saviour Sitaku',
    role: 'Agronomist',
    image: '/team/saviour-sitaku.png',
    category: 'Agronomy',
    description: 'Saviour brings an agronomy focus to OJAPH’s agricultural work. The role supports practical conversations about crops and inputs, with product use guided by current labels and locally appropriate advice.',
  },
  {
    name: 'Roymond Joku',
    role: 'Sales Agronomist',
    image: '/team/roymond-joku.png',
    category: 'Customer support',
    description: 'Roymond combines product enquiries and customer service with an agronomy perspective. His role helps connect customers with relevant product information and a clear path to confirm availability.',
  },
  {
    name: 'Hamida Bint',
    role: 'Sales Agronomist',
    image: '/team/hamida-bint.png',
    category: 'Customer support',
    description: 'Hamida supports customers exploring OJAPH’s agricultural products. As a sales agronomist, she helps make product conversations more informed while current stock and label details are confirmed directly.',
  },
];

const sustainability = [
  { title: 'Financial Sustainability', desc: 'Sustainable business through input sales, consultancy services and responsible financial management.', icon: TrendingUp },
  { title: 'Institutional Sustainability', desc: 'Strong management systems, defined staff responsibilities and continuous development.', icon: Building2 },
  { title: 'Market Sustainability', desc: 'Lasting relationships with farmers, groups, suppliers and stakeholders.', icon: Handshake },
  { title: 'Environmental Sustainability', desc: 'Climate-smart practices, soil conservation, water harvesting and responsible input use.', icon: TreePine },
];

const challenges = [
  'Limited access to improved and quality seeds',
  'Inadequate knowledge of modern crop production practices',
  'Misuse of agrochemicals due to insufficient technical guidance',
  'High costs of agricultural inputs',
  'Unpredictable rainfall, drought and climate-related challenges',
  'Limited access to reliable markets for agricultural produce',
  'Presence of fake or low-quality agricultural inputs',
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <PageHero
        title="About OJAPH Agro Development Limited"
        subtitle="An agricultural input supply and consultancy company established to support farmers, agricultural entrepreneurs, farmer groups and stakeholders through quality products and professional services."
        image={IMAGES.farmerInspect}
        breadcrumb="Home / About Us"
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={IMAGES.caringCrops} alt="" aria-hidden="true" className="w-full h-[520px] object-cover rounded-2xl shadow-2xl" />
              <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Illustrative photo</span>
              <div className="absolute -top-6 -left-6 bg-primary-700 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="font-display text-3xl font-bold">2022</p>
                <p className="text-sm text-primary-200">Year Established</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                When Farmers Succeed, Communities Grow
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OJAPH AGRO DEVELOPMENT LIMITED is an agricultural input supply and consultancy company established to support farmers, agricultural entrepreneurs, farmer groups and other stakeholders through access to quality agricultural products and professional agricultural services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our business is built around the understanding that farmers need more than land and labour to achieve successful agricultural production. They also require quality seeds, fertilizers, crop protection products, appropriate farming tools, technical knowledge and reliable agricultural support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We therefore combine agricultural input supply with extension and consultancy services to help farmers make informed decisions and improve their farming activities.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-lg p-6">
                <p className="font-display text-lg text-primary-900 font-semibold italic">
                  "When farmers succeed, communities grow and agricultural development becomes possible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Challenges */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Our History</p>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Company Background & Establishment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OJAPH AGRO DEVELOPMENT LIMITED was established in April 2022 and officially incorporated on 10 November 2022 as a private limited company. The company was established in response to the agricultural needs of farming communities, particularly challenges associated with accessing quality agricultural inputs, limited extension services, climate-related production challenges and difficulties in accessing markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since its establishment, the company has developed its business approach around providing agricultural products and services that respond to farmers' needs. Our long-term ambition is to grow into a recognized agricultural supply and consultancy company serving farmers throughout West Nile and beyond.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 mb-3">Challenges We Address</p>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Farming Community Challenges</h2>
              <ul className="space-y-3">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-8 text-white">
              <img src={BRAND_ASSETS.quality} alt="" aria-hidden="true" className="mb-4 h-14 w-14 rounded-lg bg-white object-contain" />
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-primary-100 leading-relaxed mb-6">
                To improve agricultural productivity, food security and household income through the provision of high-quality agricultural inputs, extension services and market support.
              </p>
              <ul className="space-y-2 text-sm text-primary-200">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />Improving agricultural productivity</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />Promoting food security</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />Improving household income</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />Providing agricultural knowledge</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />Strengthening market opportunities</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 p-8 text-white">
              <img src={BRAND_ASSETS.innovation} alt="" aria-hidden="true" className="mb-4 h-14 w-14 rounded-lg bg-white object-contain" />
              <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                To become one of the leading agro-input supply and agricultural consultancy companies in West Nile and beyond.
              </p>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />Supplying quality agricultural inputs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />Providing reliable extension services</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />Supporting farmers and organizations</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />Promoting modern, climate-smart practices</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />Contributing to food security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our Goals"
            title="Our Main Objectives"
            subtitle="Our objectives guide the company's activities, priorities and long-term development plans."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map(({ icon: Icon, ...obj }, i) => (
              <div key={i} className="card p-6 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <span className="font-display text-3xl font-bold text-primary-100 group-hover:text-primary-200">0{i + 1}</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2">{obj.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our Principles"
            title="Our Core Values"
            subtitle="The principles that guide how we conduct our business, serve customers and interact with agricultural communities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, ...v }, i) => (
              <div key={i} className="p-6 rounded-xl border-2 border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{v.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="container-page relative z-10">
          <SectionTitle
            light
            eyebrow="How We Work"
            title="Our Approach to Agricultural Development"
            subtitle="Agricultural development requires an integrated approach. Supplying inputs alone is not enough — we combine products with technical support, farmer education and market-oriented activities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approach.map(({ icon: Icon, ...a }, i) => (
              <div key={i} className="bg-white/5 backdrop-blur border border-primary-700/30 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary-700">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </div>
                <h4 className="font-display font-bold text-white mb-2">{a.title}</h4>
                <p className="text-sm text-primary-200 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographical Coverage */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Where We Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Our Geographical Coverage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The company information currently lists its main location in Kubala Trading Centre. Any additional outlets or production facilities are not advertised here until their operational status is confirmed.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {COMPANY.locations.map((location) => (
                  <div key={location.name} className="flex items-start gap-3 rounded-lg bg-primary-50 p-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-700" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{location.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={IMAGES.aerialFarms} alt="" aria-hidden="true" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
              <span className="absolute right-4 top-4 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Illustrative photo</span>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                  <p className="font-display font-bold text-gray-900">West Nile Region, Uganda</p>
                  <p className="text-sm text-gray-600">{COMPANY.shortAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="People of OJAPH · Team portraits"
            title="The people behind the work"
            subtitle="Meet the leaders and practitioners connecting agricultural products, agronomy and farmer support across the company."
          />
          <article className="mb-10 grid overflow-hidden rounded-3xl bg-primary-950 text-white shadow-xl lg:grid-cols-[1fr_1.05fr]">
            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[480px]">
              <img
                src={team[0].image}
                alt={`Portrait of ${team[0].name}, ${team[0].role}`}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-transparent to-primary-950/15" />
              <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                Leadership · 01
              </span>
              <p className="absolute bottom-6 left-6 font-display text-sm font-medium uppercase tracking-[0.18em] text-white/85">
                OJAPH Agro Development Limited
              </p>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-300">{team[0].category} · Founder profile</p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{team[0].name}</h3>
              <p className="mt-2 text-lg font-medium text-primary-200">{team[0].role}</p>
              <div className="my-7 h-px w-20 bg-accent-400" />
              <p className="max-w-xl text-base leading-relaxed text-primary-100">{team[0].description}</p>
              <p className="mt-8 font-display text-sm italic text-primary-200">
                Leadership rooted in agricultural development and practical farmer support.
              </p>
            </div>
          </article>

          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">Across the organization</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-gray-900">Meet the team</h3>
            </div>
            <span className="text-sm text-gray-500">{team.length} profiles</span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.slice(1).map((member, index) => (
              <article key={member.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-72 overflow-hidden bg-gray-100 sm:h-80">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-800 shadow-sm">
                    Profile · {String(index + 2).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">{member.category}</p>
                  <h4 className="mt-2 font-display text-2xl font-bold text-gray-900">{member.name}</h4>
                  <p className="mt-1 font-semibold text-primary-800">{member.role}</p>
                  <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Long-term Thinking"
            title="Our Commitment to Sustainability"
            subtitle="Agricultural development should benefit present communities while protecting the resources required by future generations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map(({ icon: Icon, ...s }, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-primary-50/30 border border-gray-100">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary-700">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2 text-sm">{s.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Our Purpose</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why OJAPH Exists</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that farmers are important contributors to food production, economic development and community wellbeing. OJAPH exists to connect farmers to agricultural products, knowledge and support services, contributing to an environment where better agricultural opportunities create stronger farming communities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {[
                'Farmers can access quality agricultural inputs',
                'Farmers receive practical agricultural knowledge',
                'Young people develop agricultural skills',
                'Communities adopt sustainable practices',
                'Organizations find reliable local service providers',
                'Farmers connect with produce buyers',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Together, We Can Build Better Agriculture"
        description="Whether you are a farmer seeking inputs, a farmer group looking for training, an organization interested in collaboration, or an individual interested in agricultural development, OJAPH welcomes your enquiry."
        primaryLabel="Work With Us"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="Explore Our Services"
        onSecondary={() => onNavigate('services')}
      />
    </div>
  );
}
