import { COMPANY } from '@/data/company';
import WhatsAppLogo from '@/components/WhatsAppLogo';

export default function WhatsAppButton() {
  const message = encodeURIComponent('Hello OJAPH Agro Development Limited, I am interested in your agricultural products and services. I would like to enquire about your available products, prices and other agricultural support services.');
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppLogo className="relative z-10 h-12 w-12 rounded-full object-cover" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
