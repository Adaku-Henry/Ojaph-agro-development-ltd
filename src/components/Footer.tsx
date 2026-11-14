import { MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND_ASSETS, COMPANY, COMPANY_MAPS, NAV_LINKS, type PageId } from '@/data/company';
import WhatsAppLogo from '@/components/WhatsAppLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const products = ['Improved Seeds', 'Agrochemicals', 'Fertilizers', 'Farm Tools & Equipment'];
  const services = ['Agricultural Extension', 'Farmer Training', 'Agronomy Support', 'Demonstration Gardens', 'Climate-Smart Agriculture', 'Market Linkages'];

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-primary-100">
      {/* Main footer */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <img src={BRAND_ASSETS.logo} alt="OJAPH Agro Development Limited" className="mb-4 h-20 w-40 rounded-lg bg-white object-contain" />
            <p className="text-sm text-primary-100 leading-relaxed mb-4">
              {COMPANY.slogan}. We are committed to supporting farmers through agricultural input supply, extension services, farmer training and sustainable agricultural development.
            </p>
            <div className="flex gap-3">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <WhatsAppLogo className="h-7 w-7 rounded-full object-cover" />
              </a>
              <a href={`mailto:${COMPANY.email}`} aria-label="Email OJAPH Agro" className="w-9 h-9 rounded-lg bg-primary-800 hover:bg-primary-700 flex items-center justify-center transition-colors">
                <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="text-sm text-primary-100 hover:text-accent-300 transition-colors flex items-center gap-1 group">
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Our Products</h4>
              <ul className="space-y-2">
                {products.map((p) => (
                  <li key={p}>
                    <button onClick={() => onNavigate('products')} className="text-sm text-primary-100 hover:text-accent-300 transition-colors text-left">{p}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services + Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 mb-6">
              {services.slice(0, 4).map((s) => (
                <li key={s}>
                  <button onClick={() => onNavigate('services')} className="text-sm text-primary-100 hover:text-accent-300 transition-colors text-left">{s}</button>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-400" />
                <a
                  href={COMPANY_MAPS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary-600 underline-offset-2 transition-colors hover:text-accent-300"
                >
                  {COMPANY.shortAddress} · Get directions
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={BRAND_ASSETS.phone} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />
                <span>{COMPANY.phone1}</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={BRAND_ASSETS.email} alt="" aria-hidden="true" className="h-4 w-4 shrink-0 object-contain" />
                <span className="break-all">{COMPANY.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-10 pt-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-200 text-center sm:text-left">
            &copy; 2026 {COMPANY.name}. All rights reserved. {COMPANY.slogan}.
          </p>
          <div className="flex gap-4 text-xs">
            <button onClick={() => onNavigate('privacy')} className="text-primary-200 hover:text-accent-300 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="text-primary-200 hover:text-accent-300 transition-colors">Terms & Conditions</button>
            <button onClick={() => onNavigate('faq')} className="text-primary-200 hover:text-accent-300 transition-colors">FAQs</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
