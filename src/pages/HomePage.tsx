import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sprout,
  Users,
  Wrench,
} from 'lucide-react';
import { BRAND_ASSETS, COMPANY, type PageId } from '@/data/company';
import { COMPANY_ACTIVITY_PHOTOS } from '@/data/companyActivities';
import { SectionTitle } from '@/components/ui';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const products = [
  { icon: Sprout, image: '/products/IMG-20261019-WA0009.jpg', title: 'Improved Seeds', description: 'Maize, beans, cowpeas and vegetable seed categories.', keywords: 'Varieties and availability depend on current stock.' },
  { icon: FlaskConical, image: '/products/Pestcides.jpeg', title: 'Crop Protection', description: 'Crop protection products and guidance on responsible handling.', keywords: 'Product details must be confirmed from each label.' },
  { icon: Leaf, image: '/products/vegimax.jpg', title: 'Fertilizers', description: 'Crop nutrition products for different farming needs.', keywords: 'Selected soil and foliar nutrition products.' },
  { icon: Wrench, image: '/products/Spray pump.png', title: 'Farm Tools & Equipment', description: 'Practical tools and equipment for everyday farm activities.', keywords: 'Ask about available equipment and specifications.' },
];

const services = [
  { icon: Users, title: 'Agricultural Extension', description: 'Practical crop production and farm management guidance.' },
  { icon: GraduationCap, title: 'Farmer Training', description: 'Learning on agronomy, responsible product use and sustainable practices.' },
  { icon: Sprout, title: 'Crop Production Support', description: 'Guidance on planting, crop care and production challenges.' },
  { icon: BookOpen, title: 'Farmer Resources', description: 'General farming information to support informed decisions.' },
];

const reasons = [
  { icon: ShieldCheck, image: COMPANY_ACTIVITY_PHOTOS.shopService, title: 'Responsible product guidance', description: 'We encourage customers to read and follow product labels and safe-use instructions.' },
  { icon: Users, image: COMPANY_ACTIVITY_PHOTOS.fieldLearning, title: 'Farmer-centred support', description: 'Our products and services focus on the needs of farmers and agricultural communities.' },
  { icon: MapPin, image: COMPANY_ACTIVITY_PHOTOS.cassavaFieldTeam, title: 'Based in Kubala', description: `Our listed main location is ${COMPANY.shortAddress}.` },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef5f8] via-white to-primary-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent-100/70 blur-3xl" />
        <div className="container-page relative grid min-h-[500px] items-center gap-10 py-12 md:py-16 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
              <Sprout aria-hidden="true" className="h-4 w-4" />
              {COMPANY.slogan}
            </p>
            <h1 className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-primary-950 md:text-5xl lg:text-6xl">
              Growing better.<br />Harvesting <span className="text-accent-600">more.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
              An agricultural company connecting practical support, products and services for stronger farming communities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => onNavigate('products')} className="btn-accent">
                Explore our products <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('contact')} className="btn-secondary">
                Contact us
              </button>
            </div>
          </div>
          <figure className="relative min-h-[300px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl sm:min-h-[390px] lg:min-h-[430px]">
            <img src={COMPANY_ACTIVITY_PHOTOS.cassavaFieldTeam.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/35 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute bottom-4 right-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              Company activity · Cassava field
            </figcaption>
            <span className="absolute bottom-0 left-0 h-2 w-28 rounded-tr-full bg-accent-500" aria-hidden="true" />
          </figure>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-700">Who we are</p>
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">Supporting farmers in West Nile and beyond</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              OJAPH Agro Development Limited is an agricultural company working with farmers, groups and stakeholders. Our Products and Services bring together agricultural products, extension, training, agronomy, market support and practical information for farming activities.
            </p>
            <button type="button" onClick={() => onNavigate('about')} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-900">
              Learn about OJAPH <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-7">
            <h3 className="font-display text-xl font-bold text-gray-900">Farming for Development</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              We bring agricultural products and farmer support together, with current availability confirmed directly by our team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <div className="mb-10 grid overflow-hidden rounded-[2rem] border border-primary-100 bg-gradient-to-br from-[#edf5f8] via-white to-primary-50 shadow-sm lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                <Sprout aria-hidden="true" className="h-4 w-4" />
                Our Products
              </p>
              <h2 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-primary-950 md:text-4xl lg:text-5xl">
                Products for <span className="text-accent-600">every stage</span> of farming
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-gray-700">
                Explore agricultural products for different farming needs. Contact our team to confirm current availability, sizes and prices.
              </p>
              <span className="mt-6 h-1.5 w-20 rounded-full bg-accent-500" aria-hidden="true" />
            </div>
            <figure className="relative min-h-[260px] overflow-hidden sm:min-h-[330px] lg:min-h-full">
              <img src={COMPANY_ACTIVITY_PHOTOS.productShopVisit.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-primary-950/10" aria-hidden="true" />
              <figcaption className="absolute bottom-4 right-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                Company activity · Agricultural products shop
              </figcaption>
              <span className="absolute bottom-0 left-0 h-2 w-28 rounded-tr-full bg-accent-500" aria-hidden="true" />
            </figure>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ icon: Icon, image, title, description, keywords }) => (
              <button key={title} type="button" onClick={() => onNavigate('products')} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl">
                <span className="relative flex h-36 items-center justify-center overflow-hidden bg-[#f7faf8] sm:h-40">
                  <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute bottom-0 left-5 flex h-12 w-12 translate-y-1/4 items-center justify-center rounded-full border-4 border-white bg-accent-500 text-white shadow-md">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </span>
                <span className="block p-5 pt-7">
                  <span className="block font-sans text-lg font-bold text-primary-950">{title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-gray-600">{description}</span>
                  <span className="mt-4 flex min-h-9 items-center justify-between gap-2 border-t border-gray-100 pt-3">
                    <span className="flex items-start gap-1.5 text-xs leading-relaxed text-gray-500">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-600" />
                      {keywords}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white transition-transform group-hover:translate-x-1">
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" onClick={() => onNavigate('products')} className="btn-accent">View all products <ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid overflow-hidden rounded-[2rem] border border-accent-100 bg-gradient-to-br from-[#fff7ed] via-white to-primary-50 shadow-lg lg:grid-cols-[0.82fr_1.18fr]">
            <figure className="relative min-h-[360px] overflow-hidden sm:min-h-[430px] lg:min-h-full">
                <img src={COMPANY_ACTIVITY_PHOTOS.fieldDemonstration.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  Company activity · Field learning
              </figcaption>
              <span className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-[5rem] border-l-[10px] border-t-[10px] border-accent-500" aria-hidden="true" />
            </figure>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                <Users aria-hidden="true" className="h-4 w-4" />
                Farmer Support
              </p>
              <h2 className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-primary-950 md:text-4xl">
                Practical <span className="text-accent-600">farmer support</span>
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-700">
                Explore the services and information available to support informed farming decisions.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map(({ icon: Icon, title, description }) => (
                  <button key={title} type="button" onClick={() => onNavigate('services')} className="group flex gap-3 rounded-xl border border-gray-200 bg-white/90 p-4 text-left transition-all hover:border-accent-300 hover:shadow-md">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-sans text-sm font-bold text-primary-950">{title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-gray-600">{description}</span>
                    </span>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => onNavigate('services')} className="btn-secondary mt-6">
                Explore our services <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative isolate overflow-hidden bg-primary-50">
        <img src={COMPANY_ACTIVITY_PHOTOS.vegetableBeds.src} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-50/85 via-primary-50/80 to-white/85" aria-hidden="true" />
        <div className="container-page relative">
          <SectionTitle eyebrow="Why OJAPH" title="Support grounded in practical farming needs" />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, image, title, description }) => (
              <article key={title} className="group overflow-hidden rounded-2xl border border-white/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <figure className="relative h-44 overflow-hidden">
                  <img src={image.src} alt="" aria-hidden="true" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-transparent to-primary-950/10" aria-hidden="true" />
                  <figcaption className="absolute bottom-3 left-4 text-xs font-medium text-white drop-shadow">{image.caption}</figcaption>
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-lg">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </figure>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid overflow-hidden rounded-[2rem] border border-primary-100 bg-primary-50/70 shadow-sm md:grid-cols-[1fr_1.2fr]">
            <figure className="relative min-h-[260px] overflow-hidden md:min-h-full">
              <img src={COMPANY_ACTIVITY_PHOTOS.fieldDemonstration.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/35 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                Company activity · Field learning
              </figcaption>
            </figure>
            <div className="p-7 sm:p-10">
              <p className="mb-4 inline-flex rounded-full border border-accent-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-700">From the field</p>
              <h2 className="font-sans text-2xl font-extrabold text-primary-950 md:text-3xl">Company activities</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                A look at OJAPH field learning, crop production, nursery work and customer service through photographs from the company activities archive.
              </p>
              <button type="button" onClick={() => onNavigate('projects')} className="btn-secondary mt-6">
                View project information <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-12">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-primary-100 bg-gradient-to-br from-[#edf5f8] via-white to-primary-50 p-7 shadow-sm sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">Farmer support</p>
            <h2 className="mt-3 font-sans text-2xl font-extrabold text-primary-950 md:text-3xl">Let’s talk about your farming needs</h2>
            <p className="mt-3 leading-relaxed text-gray-700">Contact our team about products, agricultural services or practical support.</p>
          </div>
          <button type="button" onClick={() => onNavigate('contact')} className="btn-accent shrink-0">Get in touch <ArrowRight aria-hidden="true" className="h-4 w-4" /></button>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Contact" title="We’re ready to hear from you" subtitle="Confirm product details, availability and services directly with our team." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="card flex items-center gap-3 p-5">
              <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-700" />
              <span className="font-semibold text-gray-800">{COMPANY.phone1}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="card flex items-center gap-3 p-5">
              <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />
              <span className="break-all font-semibold text-gray-800">{COMPANY.email}</span>
            </a>
            <div className="card flex items-center gap-3 p-5">
              <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-primary-700" />
              <span className="text-sm font-semibold text-gray-800">{COMPANY.shortAddress}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
