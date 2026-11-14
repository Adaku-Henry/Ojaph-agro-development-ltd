import { type ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = true, light = false }: SectionTitleProps) {
  return (
    <div
      className={`${center ? 'text-center mx-auto' : ''} relative isolate max-w-3xl mb-12 rounded-2xl p-6 md:p-8`}
      style={{
        backgroundImage: light
          ? 'linear-gradient(120deg, #1b4d20, #256528)'
          : 'linear-gradient(120deg, #ffffff, #e8f5e9)',
        border: light ? '1px solid rgba(255,255,255,.12)' : '1px solid #d8edda',
        boxShadow: light ? '0 12px 28px rgba(18,56,23,.12)' : '0 10px 24px rgba(27,77,32,.05)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-accent-300' : 'text-primary-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-primary-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, image, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/60" />
        <span className="absolute bottom-3 right-3 z-10 rounded bg-black/60 px-2.5 py-1 text-xs text-white">Illustrative photo</span>
      </div>
      <div className="container-page relative z-10 py-16">
        <div className="max-w-3xl rounded-2xl border border-white/15 bg-primary-950/25 p-6 shadow-2xl backdrop-blur-[2px] sm:p-8">
        {breadcrumb && (
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-accent-200 animate-fade-in">{breadcrumb}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-primary-100 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        {children}
        </div>
      </div>
    </section>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

export function CTASection({ title, description, primaryLabel, onPrimary, secondaryLabel, onSecondary }: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-primary-800"
      style={{ backgroundImage: 'linear-gradient(115deg, #2e7d32, #1b4d20)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="container-page relative z-10 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onPrimary} className="btn-accent">{primaryLabel}</button>
          {secondaryLabel && onSecondary && (
            <button onClick={onSecondary} className="btn-secondary !bg-white/10 !border-white/30 !text-white hover:!bg-white hover:!text-primary-700">{secondaryLabel}</button>
          )}
        </div>
      </div>
    </section>
  );
}
