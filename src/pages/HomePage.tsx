import {
  ArrowRight,
  BookOpen,
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
import { BRAND_ASSETS, COMPANY, IMAGES, type PageId } from '@/data/company';
import { SectionTitle } from '@/components/ui';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const products = [
  { icon: Sprout, title: 'Improved Seeds', description: 'Maize, beans, cowpeas and vegetable seed categories.', keywords: 'Seed selection and availability depend on current stock.' },
  { icon: FlaskConical, title: 'Agrochemicals', description: 'Crop protection products and guidance on responsible handling.', keywords: 'Pesticides, herbicides and fungicides.' },
  { icon: Leaf, title: 'Fertilizers', description: 'Crop nutrition products for different farming needs.', keywords: 'DAP, NPK, CAN, urea and selected foliar fertilizers.' },
  { icon: Wrench, title: 'Farm Tools & Equipment', description: 'Practical tools and equipment for everyday farm activities.', keywords: 'Hoes, sprayers, watering cans and accessories.' },
];

const services = [
  { icon: Users, title: 'Agricultural Extension', description: 'Practical crop production and farm management guidance.' },
  { icon: GraduationCap, title: 'Farmer Training', description: 'Learning on agronomy, safe input use and sustainable practices.' },
  { icon: Sprout, title: 'Crop Production Support', description: 'Guidance on planting, crop care and production challenges.' },
  { icon: BookOpen, title: 'Farmer Resources', description: 'General farming information to support informed decisions.' },
];

const reasons = [
  { icon: ShieldCheck, title: 'Responsible input guidance', description: 'We encourage customers to read and follow product labels and safe-use instructions.' },
  { icon: Users, title: 'Farmer-centred support', description: 'Our products and services focus on the needs of farmers and agricultural communities.' },
  { icon: MapPin, title: 'Based in Kubala', description: `Our listed main location is ${COMPANY.shortAddress}.` },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-primary-950">
        <img src={IMAGES.heroFarmer} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/80 to-primary-800/35" />
        <div className="container-page relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <Sprout aria-hidden="true" className="h-4 w-4 text-accent-300" />
              {COMPANY.slogan}
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
              Growing Better. <span className="text-accent-400">Harvesting More.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-50 md:text-xl">
              Quality agricultural inputs and practical support for productive farming.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => onNavigate('products')} className="btn-accent">
                Explore Our Products <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('contact')} className="btn-secondary !border-white/60 !bg-white !text-primary-800">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <span className="absolute bottom-3 right-4 rounded-md bg-black/55 px-3 py-1 text-xs text-white">Illustrative photo</span>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-700">Who we are</p>
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">Supporting farmers in West Nile and beyond</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              OJAPH Agro Development Limited supplies agricultural inputs and offers practical agricultural support. We aim to help farmers access products, information and services relevant to their farming activities.
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
          <SectionTitle eyebrow="Our products" title="Agricultural inputs for every stage" subtitle="Explore our main product categories and contact us to confirm current availability and prices." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ icon: Icon, title, description, keywords }) => (
              <button key={title} type="button" onClick={() => onNavigate('products')} className="card p-6 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="mt-4 block font-display text-lg font-bold text-gray-900">{title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-gray-600">{description}</span>
                <span className="mt-3 block text-xs text-gray-500">{keywords}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" onClick={() => onNavigate('products')} className="btn-primary">View all products</button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Beyond supply" title="Practical farmer support" subtitle="Explore the services and information available to support informed farming decisions." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }) => (
              <button key={title} type="button" onClick={() => onNavigate('services')} className="rounded-2xl border border-gray-200 bg-white p-6 text-left transition hover:border-primary-300 hover:shadow-md">
                <Icon aria-hidden="true" className="h-8 w-8 text-primary-700" />
                <span className="mt-4 block font-display font-bold text-gray-900">{title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-gray-600">{description}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" onClick={() => onNavigate('services')} className="btn-secondary">Explore our services</button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-page">
          <SectionTitle eyebrow="Why OJAPH" title="Support grounded in practical farming needs" />
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <Icon aria-hidden="true" className="h-8 w-8 text-primary-700" />
                <h3 className="mt-4 font-display text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-gray-900">Project photographs</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We do not yet have verified company activity photographs to publish here. Stock images elsewhere on this site are labeled as illustrative and are not evidence of OJAPH projects.
            </p>
            <button type="button" onClick={() => onNavigate('projects')} className="btn-secondary mt-5">View project information</button>
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-14 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">Farmer support</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Let’s talk about your farming needs</h2>
            <p className="mt-3 leading-relaxed text-primary-100">Contact our team about products, agricultural services or practical support.</p>
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
