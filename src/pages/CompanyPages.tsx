import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  MapPin,
  Sprout,
  Users,
} from 'lucide-react';
import { BRAND_ASSETS, COMPANY, COMPANY_MAPS, IMAGES, type PageId } from '@/data/company';
import { CTASection, PageHero, SectionTitle } from '@/components/ui';
import WhatsAppLogo from '@/components/WhatsAppLogo';

interface NavigateProps {
  onNavigate: (page: PageId) => void;
}

const partnershipTypes = [
  {
    icon: Users,
    image: BRAND_ASSETS.farmerGroups,
    title: 'Farmer groups',
    description: 'Coordinate input enquiries, practical training and market information for organized farming communities.',
  },
  {
    icon: Building2,
    image: BRAND_ASSETS.partnership,
    title: 'Organizations & institutions',
    description: 'Explore agricultural supply, farmer education and community development opportunities together.',
  },
  {
    icon: Sprout,
    image: BRAND_ASSETS.partnership,
    title: 'Suppliers & agribusinesses',
    description: 'Build responsible relationships that improve access to useful agricultural products and services.',
  },
];

export function PartnersPage({ onNavigate }: NavigateProps) {
  return (
    <>
      <PageHero
        title="Growing Agriculture Through Partnership"
        subtitle="We welcome conversations with farmers, community organizations, suppliers and institutions working to strengthen agriculture in West Nile."
        image={IMAGES.handshake}
        breadcrumb="Home / Partners"
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Work with us"
            title="Stronger relationships. Better opportunities."
            subtitle="We are interested in practical collaborations that respond to farmers' needs and support sustainable agricultural development."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {partnershipTypes.map(({ icon: Icon, image, title, description }) => (
              <article key={title} className="card p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  {image ? (
                    <img src={image} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
                  ) : (
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-8 rounded-2xl bg-primary-50 p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-950">Have a collaboration idea?</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                Tell us about your organization, the community you serve and the agricultural outcome you would like to work toward. We will be clear about our capacity and next steps.
              </p>
            </div>
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Start a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      <CTASection
        title="Let’s grow better agriculture together"
        description="Reach out to discuss a potential partnership, supply arrangement or farmer-support activity."
        primaryLabel="Contact our team"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="Explore our services"
        onSecondary={() => onNavigate('services')}
      />
    </>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const topic = String(formData.get('topic') ?? 'General enquiry');
    const message = String(formData.get('message') ?? '').trim();
    const subject = encodeURIComponent(`${topic} — website enquiry`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Let’s Talk Agriculture"
        subtitle="Ask about product availability, agricultural support, training or a potential collaboration. Our team is ready to hear from you."
        image={IMAGES.twoFarmers}
        breadcrumb="Home / Contact Us"
      />
      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Get in touch"
            title="How can we support you?"
            subtitle="Contact us directly or prepare an email using the form. Product availability and prices may change, so please confirm current details with our team."
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="space-y-5">
              <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="card flex items-start gap-4 p-6">
                <img src={BRAND_ASSETS.phone} alt="" aria-hidden="true" className="mt-0.5 h-7 w-7 shrink-0 object-contain" />
                <span>
                  <span className="block font-semibold text-gray-900">Call our team</span>
                  <span className="mt-1 block text-gray-600">{COMPANY.phone1}</span>
                </span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="card flex items-start gap-4 p-6">
                <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="mt-0.5 h-7 w-7 shrink-0 object-contain" />
                <span className="min-w-0">
                  <span className="block font-semibold text-gray-900">Email</span>
                  <span className="mt-1 block break-all text-gray-600">{COMPANY.email}</span>
                </span>
              </a>
              <div className="card flex items-start gap-4 p-6">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary-700" />
                <span>
                  <span className="block font-semibold text-gray-900">Visit us</span>
                  <span className="mt-1 block leading-relaxed text-gray-600">{COMPANY.address}</span>
                </span>
              </div>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppLogo className="h-7 w-7 rounded-full object-cover" /> Message us on WhatsApp
              </a>
            </aside>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900">Send an enquiry</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Submitting opens your email app with your message addressed to our team. Nothing is sent through this website.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-gray-700">
                  Your name
                  <input className="input-field mt-2" name="name" autoComplete="name" required maxLength={100} />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                  <input className="input-field mt-2" name="email" type="email" autoComplete="email" required maxLength={254} />
                </label>
                <label className="block text-sm font-medium text-gray-700 sm:col-span-2">
                  What is your enquiry about?
                  <select className="input-field mt-2" name="topic" defaultValue="Products">
                    <option>Products</option>
                    <option>Agricultural services</option>
                    <option>Farmer training</option>
                    <option>Partnership</option>
                    <option>General enquiry</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-gray-700 sm:col-span-2">
                  Message
                  <textarea className="input-field mt-2 min-h-36 resize-y" name="message" required maxLength={3000} />
                </label>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Prepare email <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              {submitted && (
                <p role="status" className="mt-4 text-sm text-primary-800">
                  Your email app should open with the enquiry details. If it does not, contact us directly using the details shown.
                </p>
              )}
            </form>
          </div>
          <section className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm" aria-labelledby="company-map-title">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h2 id="company-map-title" className="font-display text-xl font-bold text-gray-900">Find us on Google Maps</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">{COMPANY.address}</p>
                </div>
              </div>
              <a
                href={COMPANY_MAPS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                Get directions <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="aspect-[4/3] min-h-72 border-t border-gray-200 bg-gray-100 sm:aspect-[16/7]">
              <iframe
                src={COMPANY_MAPS.embedUrl}
                title={`Google Maps location for ${COMPANY.name} at ${COMPANY.shortAddress}`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="px-6 py-3 text-xs leading-relaxed text-gray-500 sm:px-8">
              The map uses the published company address. Please check the Kubala Market landmark and map pin before travelling.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

const faqs = [
  {
    question: 'What products does OJAPH Agro supply?',
    answer: 'Our core categories include improved seeds, fertilizers, crop protection products, farm tools and selected agricultural equipment. Please contact us to confirm current availability, sizes and prices.',
  },
  {
    question: 'Where are you located?',
    answer: `${COMPANY.address}`,
  },
  {
    question: 'Do you provide farming advice and training?',
    answer: 'Yes. Our services include agricultural extension, farmer training, agronomy support, demonstration-based learning and guidance on responsible input use.',
  },
  {
    question: 'How can I check current product prices?',
    answer: 'Prices and stock can change. Call or message our team with the product and quantity you need so we can confirm current information.',
  },
  {
    question: 'Can farmer groups or institutions enquire about bulk orders?',
    answer: 'Yes. Contact us with your product requirements, quantities, preferred timing and location. We will discuss availability and possible arrangements.',
  },
  {
    question: 'Does the website submit my contact form to OJAPH?',
    answer: 'No. The enquiry form opens your own email application with a prepared message. You choose whether to send it. You can also call, email or message us directly.',
  },
];

export function FAQPage({ onNavigate }: NavigateProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about our products, services and how to get in touch."
        image={IMAGES.farmerInspect}
        breadcrumb="Home / FAQs"
      />
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <SectionTitle
            eyebrow="Helpful answers"
            title="What would you like to know?"
            subtitle="If you cannot find the information you need, please contact our team directly."
          />
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {faqs.map((item, index) => {
              const isOpen = openQuestion === index;
              const panelId = `faq-answer-${index}`;
              return (
                <div key={item.question} className="p-5 sm:p-6">
                  <h2>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-5 text-left font-semibold text-gray-900"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      {item.question}
                      <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-primary-700 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h2>
                  {isOpen && <p id={panelId} className="mt-4 leading-relaxed text-gray-600">{item.answer}</p>}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Ask us a question <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="A clear explanation of how this website handles information and how to contact us."
        image={IMAGES.seedlingPlant}
        breadcrumb="Home / Privacy Policy"
      />
      <section className="section-padding bg-white">
        <article className="container-page max-w-4xl">
          <SectionTitle eyebrow="Last reviewed: November 2026" title="Your information and this website" />
          <div className="space-y-8 leading-relaxed text-gray-600">
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Information you choose to share</h2>
              <p className="mt-3">This website has no account system or server-side enquiry form. If you use the enquiry form, it prepares an email in your own email application; information is sent to us only if you choose to send that email. Calls and WhatsApp messages are handled by those communication services.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Website data and cookies</h2>
              <p className="mt-3">The site does not currently use an account, advertising tracker or analytics feature. Your browser, internet provider or the service hosting this website may process technical information needed to deliver and secure web pages under their own policies.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">External services and links</h2>
              <p className="mt-3">This website links to services such as email, telephone, WhatsApp and externally hosted images. When you visit or use those services, their privacy practices apply. We do not control their processing of information.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Your choices and questions</h2>
              <p className="mt-3">You decide whether to contact us and what information to include. For questions about information you have sent to us, contact <a className="font-medium text-primary-700 underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
            </section>
            <p className="rounded-xl bg-primary-50 p-5 text-sm">This policy describes the website as currently provided. If its features change, this page should be updated to reflect those changes.</p>
          </div>
        </article>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="The basic terms for using the OJAPH Agro Development Limited website."
        image={IMAGES.farmerHands}
        breadcrumb="Home / Terms & Conditions"
      />
      <section className="section-padding bg-white">
        <article className="container-page max-w-4xl">
          <SectionTitle eyebrow="Last reviewed: November 2026" title="Using this website" />
          <div className="space-y-8 leading-relaxed text-gray-600">
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Website information</h2>
              <p className="mt-3">We aim to keep website information useful and current, but product descriptions, availability, prices, services and plans may change. Contact us to confirm details before making a purchase or other decision.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Agricultural information</h2>
              <p className="mt-3">Educational content is general information, not a substitute for advice tailored to your crop, location, soil, weather or product label. Follow applicable product instructions and local requirements, and seek qualified guidance where appropriate.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">External services</h2>
              <p className="mt-3">Links to third-party services are provided for convenience. Their availability, content and terms are managed by those providers.</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-gray-900">Contact</h2>
              <p className="mt-3">For questions about these terms or our products and services, contact us at <a className="font-medium text-primary-700 underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call {COMPANY.phone1}.</p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
