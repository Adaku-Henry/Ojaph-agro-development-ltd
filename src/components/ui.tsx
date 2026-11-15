import { type ReactNode } from 'react';
import { COMPANY } from '@/data/company';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = true, light = false }: SectionTitleProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} relative mb-12 max-w-4xl`}>
      {eyebrow && (
        <p className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
          light ? 'border border-white/20 bg-white/10 text-accent-300' : 'border border-accent-200 bg-accent-50 text-accent-700'
        }`}>
          <span className={`h-2 w-2 rounded-full ${light ? 'bg-accent-300' : 'bg-accent-500'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-sans text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-primary-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${light ? 'text-primary-100' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-16 rounded-full bg-accent-500 ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageCaption?: string;
  breadcrumb?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, image, imageCaption = 'Illustrative photo', breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef5f8] via-white to-primary-50">
      <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />
      <div className="container-page relative grid min-h-[420px] items-center gap-8 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-2xl">
          {breadcrumb && (
            <p className="mb-5 inline-flex items-center rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-sm">
              {breadcrumb}
            </p>
          )}
          <h1 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-primary-950 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
              {subtitle}
            </p>
          )}
          {children}
          <div className="mt-7 h-1.5 w-24 rounded-full bg-accent-500" aria-hidden="true" />
        </div>
        <figure className="relative min-h-[280px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl sm:min-h-[360px] lg:min-h-[390px]">
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-4 right-4 rounded-full bg-primary-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {imageCaption}
          </figcaption>
          <span className="absolute bottom-0 left-0 h-2 w-28 rounded-tr-full bg-accent-500" aria-hidden="true" />
        </figure>
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
    <section className="bg-white py-8 md:py-12">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-primary-100 bg-gradient-to-br from-[#edf5f8] via-white to-primary-50 px-6 py-12 text-center shadow-sm sm:px-10 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-accent-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-primary-100/80 blur-3xl" />
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
            {COMPANY.slogan}
          </p>
          <h2 className="mx-auto max-w-4xl font-sans text-3xl font-extrabold leading-tight tracking-tight text-primary-950 md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mb-8 mt-4 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">{description}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button onClick={onPrimary} className="btn-accent">{primaryLabel}</button>
          {secondaryLabel && onSecondary && (
              <button onClick={onSecondary} className="btn-secondary">{secondaryLabel}</button>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
