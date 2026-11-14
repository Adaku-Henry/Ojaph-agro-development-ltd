import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutPage from '@/pages/AboutPage';
import {
  ContactPage,
  FAQPage,
  PartnersPage,
  PrivacyPage,
  TermsPage,
} from '@/pages/CompanyPages';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ServicesPage from '@/pages/ServicesPage';
import type { PageId } from '@/data/company';

const pageIds: PageId[] = [
  'home',
  'about',
  'products',
  'services',
  'resources',
  'projects',
  'partners',
  'contact',
  'faq',
  'privacy',
  'terms',
];

const pageTitles: Record<PageId, string> = {
  home: 'OJAPH Agro Development Limited | Farming for Development',
  about: 'About Us | OJAPH Agro',
  products: 'Products | OJAPH Agro',
  services: 'Services | OJAPH Agro',
  resources: 'Farmer Resources | OJAPH Agro',
  projects: 'Projects & Gallery | OJAPH Agro',
  partners: 'Partners | OJAPH Agro',
  contact: 'Contact Us | OJAPH Agro',
  faq: 'FAQs | OJAPH Agro',
  privacy: 'Privacy Policy | OJAPH Agro',
  terms: 'Terms & Conditions | OJAPH Agro',
};

function pageFromPath(pathname: string): PageId {
  const slug = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return pageIds.find((page) => page === slug) ?? 'home';
}

function pathForPage(page: PageId): string {
  return page === 'home' ? '/' : `/${page}`;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    pageFromPath(window.location.pathname),
  );

  useEffect(() => {
    const syncPageFromUrl = () => {
      const page = pageFromPath(window.location.pathname);
      const canonicalPath = pathForPage(page);
      if (window.location.pathname !== canonicalPath) {
        window.history.replaceState(window.history.state, '', `${canonicalPath}${window.location.search}${window.location.hash}`);
      }
      setCurrentPage(page);
    };

    syncPageFromUrl();
    window.addEventListener('popstate', syncPageFromUrl);
    return () => window.removeEventListener('popstate', syncPageFromUrl);
  }, []);

  useEffect(() => {
      document.title = pageTitles[currentPage];
      window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage]);

  const navigate = (page: PageId) => {
    const path = pathForPage(page);
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    setCurrentPage(page);
  };

  let page;
  switch (currentPage) {
    case 'about':
      page = <AboutPage onNavigate={navigate} />;
      break;
    case 'products':
      page = <ProductsPage onNavigate={navigate} />;
      break;
    case 'services':
      page = <ServicesPage onNavigate={navigate} />;
      break;
    case 'resources':
      page = <ResourcesPage onNavigate={navigate} />;
      break;
    case 'projects':
      page = <ProjectsPage onNavigate={navigate} />;
      break;
    case 'partners':
      page = <PartnersPage onNavigate={navigate} />;
      break;
    case 'contact':
      page = <ContactPage />;
      break;
    case 'faq':
      page = <FAQPage onNavigate={navigate} />;
      break;
    case 'privacy':
      page = <PrivacyPage />;
      break;
    case 'terms':
      page = <TermsPage />;
      break;
    default:
      page = <HomePage onNavigate={navigate} />;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-primary-800 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main id="main-content" tabIndex={-1} className="bg-gray-100">
        {page}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </>
  );
}

export default App;
