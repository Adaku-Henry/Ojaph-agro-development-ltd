import { useMemo, useState } from 'react';
import { CheckCircle2, ArrowRight, ShoppingCart, MessageCircle, Info, Shield, PackageSearch, Clock, Truck, Sun, Droplets, Beaker } from 'lucide-react';
import { COMPANY, type PageId } from '@/data/company';
import { COMPANY_ACTIVITY_PHOTOS } from '@/data/companyActivities';
import { SectionTitle, CTASection } from '@/components/ui';
import { productPhotos, productPhotoGuidance, type ProductPhotoCategory } from '@/data/productPhotos';

interface ProductsPageProps {
  onNavigate: (page: PageId) => void;
}

const futureProducts = [
  { icon: Droplets, title: 'Irrigation Equipment', desc: 'Drip irrigation lines, sprinkler systems and water delivery pipes for water management.' },
  { icon: Sun, title: 'Greenhouse Materials', desc: 'UV-treated polythene, insect nets, shade nets, profiles and supporting wires.' },
  { icon: Beaker, title: 'Solar Dryers', desc: 'Solar drying equipment for post-harvest handling and value addition.' },
];

const safetyGuidelines = [
  'Read the product label before use',
  'Follow approved application instructions',
  'Wear the recommended protective equipment',
  'Keep chemicals away from children, food and animal feed',
  'Avoid mixing products unless the label permits it',
  'Observe required pre-harvest intervals and re-entry periods',
  'Store products in their original containers',
  'Dispose of containers according to approved guidance',
];

const orderSteps = [
  { icon: PackageSearch, title: 'Choose the Product', desc: 'Browse our product categories and identify the agricultural product or equipment you require.' },
  { icon: MessageCircle, title: 'Contact Our Team', desc: 'Send us an enquiry through WhatsApp, telephone or our website contact form.' },
  { icon: Info, title: 'Confirm Availability & Price', desc: 'Our team confirms the product availability, package size and current price.' },
  { icon: ShoppingCart, title: 'Confirm Your Order', desc: 'Provide the required product, quantity and collection or delivery details.' },
  { icon: Truck, title: 'Receive Your Products', desc: 'Collect your order or arrange delivery where the service is available.' },
];

const faqs = [
  { q: 'What agricultural products are available through OJAPH?', a: 'Our product categories include improved seeds, crop-protection products, fertilizers, farm tools and selected agricultural equipment.' },
  { q: 'Are seeds for vegetable production available?', a: 'Vegetable seeds are among our product categories. Availability depends on the variety and current stock.' },
  { q: 'Do you sell fertilizers?', a: 'Yes. Our fertilizer range includes DAP, NPK, CAN, urea and selected foliar fertilizer products, subject to availability.' },
  { q: 'Can I buy agricultural products in small quantities?', a: 'You can contact our team to enquire about available package sizes and quantities.' },
  { q: 'Do you provide guidance on the use of agricultural products?', a: 'Yes. Agricultural extension support and product-use guidance are among the services we provide.' },
  { q: 'Can farmer groups make bulk orders?', a: 'Farmer groups and institutions can contact our team to discuss product requirements, quantities and supply arrangements.' },
  { q: 'Are irrigation equipment and greenhouse materials available?', a: 'These are identified as future product areas. Customers should contact us to confirm availability.' },
  { q: 'How can I find out the current prices?', a: 'Contact our team directly for updated prices because product prices and availability may change.' },
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'All photos' | ProductPhotoCategory>('All photos');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const categories = useMemo(
    () => ['All photos', ...new Set(productPhotos.map(({ category }) => category))] as ('All photos' | ProductPhotoCategory)[],
    [],
  );
  const visiblePhotos = useMemo(
    () => activeCategory === 'All photos'
      ? productPhotos
      : productPhotos.filter(({ category }) => category === activeCategory),
    [activeCategory],
  );

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef5f8] via-white to-primary-50">
        <div className="container-page grid min-h-[470px] items-center gap-8 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">The OJAPH Product Journal · Field Edition</p>
            <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-primary-950 md:text-5xl lg:text-6xl">
              A closer look at the products that help a farm <span className="text-accent-600">grow.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
              Explore the complete photo collection—from seed packets and crop-care products to practical field notes. Each entry pairs the image with helpful context, without assuming stock, specifications or results that the photo cannot confirm.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#product-journal" className="btn-accent">
                Browse {productPhotos.length} photographs <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <span className="text-sm font-medium text-gray-600">A visual catalogue · Availability by enquiry</span>
            </div>
          </div>
          <figure className="relative min-h-[280px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl sm:min-h-[360px]">
            <img src="/products/Agri-Products.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/25 to-transparent" aria-hidden="true" />
            <figcaption className="absolute bottom-4 right-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              Product assortment photo from the supplied archive
            </figcaption>
            <span className="absolute bottom-0 left-0 h-2 w-28 rounded-tr-full bg-accent-500" aria-hidden="true" />
          </figure>
        </div>
      </section>

      <section className="section-padding bg-white" id="product-journal">
        <div className="container-page">
          <SectionTitle
            eyebrow="The collection"
            title="A product catalogue, told one photograph at a time"
            subtitle="Browse the photographs supplied for this catalogue. Read the notes for context, then confirm the label, product details and current availability directly with OJAPH."
          />
          <div className="mb-8 grid gap-6 rounded-2xl border border-primary-100 bg-primary-50/70 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-700">A note for readers</p>
              <p className="max-w-4xl text-sm leading-relaxed text-gray-700">
                Some photographs show product packaging; others are crop, planting or seed-quality references. Descriptions identify what is visible or named in the supplied images, not verified stock or technical recommendations. Product labels and local professional guidance take precedence.
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 ring-1 ring-primary-200">
              {productPhotos.length} archive photographs
            </span>
          </div>

          <div className="sticky top-20 z-20 -mx-4 mb-10 border-y border-gray-200 bg-white/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-5">
            <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter product photographs">
              {categories.map((category) => {
                const count = category === 'All photos'
                  ? productPhotos.length
                  : productPhotos.filter((photo) => photo.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      activeCategory === category
                        ? 'border-primary-700 bg-primary-700 text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-400 hover:text-primary-800'
                    }`}
                  >
                    {category} <span className="ml-1 opacity-75">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">From the archive</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-gray-900 md:text-3xl">{activeCategory}</h2>
            </div>
            <span className="text-sm text-gray-500">{visiblePhotos.length} {visiblePhotos.length === 1 ? 'entry' : 'entries'}</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePhotos.map((photo, index) => {
              const featured = activeCategory === 'All photos' && index % 12 === 0;
              const imageUrl = `/products/${encodeURIComponent(photo.file)}`;
              const enquiryText = encodeURIComponent(`Hello, I would like to ask about ${photo.title}. Please confirm current availability and product details.`);
              return (
                <article
                  key={photo.file}
                  className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    featured ? 'md:col-span-2 xl:col-span-2' : ''
                  }`}
                >
                  <div className={`relative flex items-center justify-center overflow-hidden bg-gray-100 p-4 ${featured ? 'h-72 md:h-96' : 'h-64'}`}>
                    <img
                      src={imageUrl}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-800 shadow-sm">
                      {photo.category}
                    </span>
                    <span className="absolute bottom-4 right-4 font-display text-4xl font-bold leading-none text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]">
                      {String(productPhotos.indexOf(photo) + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-accent-700">Product journal · {photo.category}</p>
                    <h3 className={`font-display font-bold leading-tight text-gray-900 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{photo.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700">{photo.story}</p>
                    <p className="mt-3 border-l-2 border-primary-300 pl-4 text-sm leading-relaxed text-gray-600">
                      {productPhotoGuidance[photo.category]}
                    </p>
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}?text=${enquiryText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-800 transition-colors hover:text-accent-700"
                    >
                      Ask about this item <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Products */}
      <section className="py-16 bg-primary-50/50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Coming Soon"
            title="Additional & Future Products"
            subtitle="We identify opportunities to expand our product range to respond to changing farmer needs. These are proposed future areas shown as coming soon or available on request."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {futureProducts.map(({ icon: Icon, ...p }, i) => (
              <div key={i} className="card p-6 border-2 border-dashed border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <span className="text-xs bg-accent-100 text-accent-700 px-2.5 py-1 rounded-full font-medium">Future Range</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Quality */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">Our Commitment</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">Product Quality & Sourcing</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We recognize that fake, expired or poorly handled agricultural products can expose farmers to financial losses and production challenges. Our approach emphasizes responsible product handling and service delivery.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Shield, title: 'Reliable Sourcing', desc: 'Seeking agricultural products from reliable suppliers.' },
                  { icon: CheckCircle2, title: 'Product Inspection', desc: 'Checking products when they are received.' },
                  { icon: PackageSearch, title: 'Stock Management', desc: 'Maintaining records of products received and sold.' },
                  { icon: Clock, title: 'Expiry Monitoring', desc: 'Checking expiry dates, particularly for limited shelf-life products.' },
                  { icon: PackageSearch, title: 'Proper Storage', desc: 'Keeping products in appropriate conditions, separating chemicals, seeds and tools.' },
                  { icon: Info, title: 'Customer Guidance', desc: 'Providing relevant information to help customers understand products.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      <item.icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img src={COMPANY_ACTIVITY_PHOTOS.shopDisplay.src} alt="" aria-hidden="true" className="w-full h-80 object-cover" loading="lazy" />
                <span className="absolute right-3 top-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Company activity · Products on display</span>
              </div>
              <div className="bg-accent-50 border-l-4 border-accent-500 rounded-r-lg p-6">
                <h4 className="font-display font-bold text-accent-800 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" /> Safe Agrochemical Use
                </h4>
                <p className="text-sm text-accent-700 mb-4">We encourage customers to follow these essential safety guidelines:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {safetyGuidelines.map((g, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-accent-700">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding bg-gradient-to-br from-[#eef5f8] via-white to-primary-50">
        <div className="container-page relative z-10">
          <SectionTitle
            eyebrow="Simple Process"
            title="How to Order Products"
            subtitle="We aim to make it easy for customers to enquire about agricultural products and confirm availability."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {orderSteps.map(({ icon: Icon, ...step }, i) => (
              <div key={i} className="relative">
                <div className="h-full rounded-2xl border border-primary-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <p className="mb-2 font-sans text-2xl font-extrabold text-accent-600">0{i + 1}</p>
                  <h4 className="mb-2 font-sans text-sm font-bold text-primary-950">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-600">{step.desc}</p>
                </div>
                {i < orderSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-accent-500 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Product Questions"
            title="Frequently Asked Questions"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                  <span className={`text-primary-600 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Info className="w-5 h-5" />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Agricultural Products?"
        description="Whether you need improved seeds, fertilizers, crop-protection products or farm tools, tell us what you need and our team can help you check availability and obtain relevant product information."
        primaryLabel="Enquire About Products"
        onPrimary={() => onNavigate('contact')}
        secondaryLabel="Explore Our Services"
        onSecondary={() => onNavigate('services')}
      />
    </div>
  );
}
