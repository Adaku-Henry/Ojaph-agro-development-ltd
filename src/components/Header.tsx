import { useMemo, useState, type FormEvent } from 'react';
import { ChevronDown, Mail, MapPin, Menu, Phone, Search, X } from 'lucide-react';
import { BRAND_ASSETS, COMPANY, NAV_LINKS, type PageId } from '@/data/company';
import { SEARCH_ENTRIES } from '@/data/search';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.trim().toLocaleLowerCase();
  const results = useMemo(() => {
    if (!query) return [];
    const terms = query.split(/\s+/);
    return SEARCH_ENTRIES.filter((entry) =>
      terms.every((term) => `${entry.title} ${entry.description} ${entry.keywords}`.toLocaleLowerCase().includes(term)),
    ).slice(0, 5);
  }, [query]);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    setLegalOpen(false);
    setSearchQuery('');
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (results[0]) handleNav(results[0].page);
  };

  const renderSearch = (id: string) => (
    <form onSubmit={handleSearch} className="relative w-full max-w-xl">
      <label className="sr-only" htmlFor={id}>Search products, resources, services and FAQs</label>
      <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white focus-within:border-primary-600 focus-within:ring-2 focus-within:ring-primary-100">
        <input
          id={id}
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setSearchQuery('');
          }}
          placeholder="Search products, services, resources..."
          className="min-w-0 flex-1 px-4 py-3 text-sm text-gray-700 outline-none"
          aria-autocomplete="list"
          aria-expanded={query.length > 0}
          aria-controls={`${id}-results`}
        />
        <button type="submit" className="flex items-center justify-center bg-primary-700 px-4 text-white transition-colors hover:bg-primary-800" aria-label="Search">
          <Search aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      {query && (
        <div id={`${id}-results`} role="listbox" className="absolute left-0 right-0 top-full z-[60] mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          {results.length ? results.map((result) => (
            <button
              key={`${result.page}-${result.title}`}
              type="button"
              role="option"
              aria-selected="false"
              onClick={() => handleNav(result.page)}
              className="block w-full border-b border-gray-100 px-4 py-3 text-left last:border-0 hover:bg-primary-50"
            >
              <span className="block text-sm font-semibold text-gray-800">{result.title}</span>
              <span className="mt-0.5 block text-xs text-gray-500">{result.description}</span>
            </button>
          )) : (
            <p className="px-4 py-3 text-sm text-gray-600">No matching pages found. Try a product or farming topic.</p>
          )}
        </div>
      )}
    </form>
  );

  return (
    <>
      <div className="bg-primary-700 text-sm text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-accent-200">
              <Phone aria-hidden="true" className="h-4 w-4" />
              {COMPANY.phone1}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hidden items-center gap-2 hover:text-accent-200 sm:inline-flex">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {COMPANY.email}
            </a>
          </div>
          <p className="hidden items-center gap-2 text-primary-50 md:inline-flex">
            <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
            {COMPANY.locationSummary}
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-page flex min-h-20 items-center justify-between gap-6 py-3">
          <button type="button" onClick={() => handleNav('home')} className="flex shrink-0 items-center gap-3 text-left" aria-label="OJAPH Agro home">
            <img src={BRAND_ASSETS.logo} alt="" aria-hidden="true" className="h-14 w-28 object-contain sm:h-16 sm:w-32" />
            <span className="hidden border-l border-gray-200 pl-3 sm:block">
              <span className="block font-display text-sm font-bold leading-tight text-primary-800">OJAPH AGRO</span>
              <span className="block text-xs font-semibold tracking-wide text-gray-600">DEVELOPMENT LIMITED</span>
              <span className="mt-1 block text-xs italic text-gray-500">{COMPANY.slogan}</span>
            </span>
          </button>

          <div className="hidden flex-1 justify-end lg:flex">
            {renderSearch('site-search-desktop')}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-primary-700 hover:bg-primary-50 lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden bg-primary-700 lg:block" aria-label="Main navigation">
          <div className="container-page flex items-center justify-between">
            <div className="flex items-center">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  aria-current={currentPage === link.id ? 'page' : undefined}
                  className={`border-r border-white/15 px-3 py-4 text-sm font-semibold text-white transition-colors xl:px-4 ${
                    currentPage === link.id ? 'bg-accent-500' : 'hover:bg-primary-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="relative">
                <button
                  type="button"
                  aria-expanded={legalOpen}
                  aria-haspopup="true"
                  onClick={() => setLegalOpen(!legalOpen)}
                  className="flex items-center gap-1 px-3 py-4 text-sm font-semibold text-white hover:bg-primary-800 xl:px-4"
                >
                  More <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </button>
                {legalOpen && (
                  <div className="absolute right-0 top-full z-50 w-48 rounded-b-lg border border-gray-100 bg-white py-2 shadow-xl">
                    {([
                      ['faq', 'FAQs'],
                      ['privacy', 'Privacy Policy'],
                      ['terms', 'Terms & Conditions'],
                    ] as const).map(([page, label]) => (
                      <button key={page} type="button" onClick={() => handleNav(page)} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-primary-50">
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button type="button" onClick={() => handleNav('contact')} className="ml-3 shrink-0 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600">
              Get in Touch
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div id="mobile-navigation" className="border-t border-gray-100 bg-white lg:hidden">
            <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile navigation">
              {renderSearch('site-search-mobile')}
              <div className="mt-2 grid grid-cols-2 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    aria-current={currentPage === link.id ? 'page' : undefined}
                    className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${
                      currentPage === link.id ? 'bg-accent-100 text-primary-800' : 'text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-3 border-t border-gray-100 pt-3">
                <button type="button" onClick={() => handleNav('faq')} className="text-sm text-gray-600">FAQs</button>
                <button type="button" onClick={() => handleNav('privacy')} className="text-sm text-gray-600">Privacy Policy</button>
                <button type="button" onClick={() => handleNav('terms')} className="text-sm text-gray-600">Terms & Conditions</button>
                <button type="button" onClick={() => handleNav('contact')} className="ml-auto rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white">Get in Touch</button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
