import { ArrowRight, ArrowUpRight, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ChatWidget } from './components/ChatWidget';
import { InquirySection } from './components/InquirySection';
import { Navbar } from './components/Navbar';
import { PedigreeModal } from './components/PedigreeModal';
import { ResilientImage } from './components/ResilientImage';
import {
  ESTATE_IMAGE,
  HERO_IMAGE,
  HORSES,
  type BreedFilter,
  type DisciplineFilter,
  type HorseRecord,
} from './data/horses';
import { LANGUAGE_OPTIONS, TRANSLATIONS, type Language } from './data/i18n';

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');
  const [breedFilter, setBreedFilter] = useState<BreedFilter>('all');
  const [disciplineFilter, setDisciplineFilter] = useState<DisciplineFilter>('all');
  const [currency, setCurrency] = useState<'USD' | 'KGS'>('USD');
  const [selectedHorse, setSelectedHorse] = useState<HorseRecord | null>(null);
  const [preselectedHorseId, setPreselectedHorseId] = useState<string>('');
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
  }, [language, t.metaTitle]);

  useEffect(() => {
    const handleQuotaExceeded = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

  const filteredHorses = useMemo(() => {
    return HORSES.filter((horse) => {
      const matchesBreed = breedFilter === 'all' || horse.breedCategory === breedFilter;
      const matchesDiscipline =
        disciplineFilter === 'all' || horse.disciplineCategory === disciplineFilter;
      return matchesBreed && matchesDiscipline;
    });
  }, [breedFilter, disciplineFilter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookViewing = (horseId?: string) => {
    if (horseId) {
      setPreselectedHorseId(horseId);
    }
    setSelectedHorse(null);
    scrollToSection('contact');
  };

  const formatPrice = (horse: HorseRecord) => {
    if (currency === 'USD') {
      return `$${horse.priceUsd.toLocaleString('ru-RU')}`;
    }
    return `${horse.priceKgs.toLocaleString('ru-RU')} ${t.catalog.kgsUnit}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3] text-[#181715]">
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}
      <Navbar t={t.nav} onBookViewing={() => handleBookViewing()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section aria-label={t.hero.ariaLabel} className="bg-[#121110] text-[#F7F6F3]">
          <div className="relative w-full min-h-[560px] lg:min-h-[650px] flex flex-col justify-between overflow-hidden">
            <ResilientImage
              src={HERO_IMAGE.url}
              alt={HERO_IMAGE.alt}
              fallbackTitle={t.hero.fallbackTitle}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#121110]/90 via-[#121110]/45 to-[#121110]/35"
              aria-hidden="true"
            />

            {/* Top Hero Utility Row: Trilingual Selector (keeps Top Bar strictly 3 zones) */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 flex justify-end">
              <div
                role="group"
                aria-label={t.languageSelectorLabel}
                className="inline-flex items-center gap-1 p-1 bg-[#121110]/75 backdrop-blur-md border border-[#F7F6F3]/18 rounded-sm"
              >
                {LANGUAGE_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setLanguage(option.id)}
                    aria-pressed={language === option.id}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A] ${
                      language === option.id
                        ? 'bg-[#F7F6F3] text-[#181715]'
                        : 'text-[#D8D2C8] hover:text-[#F7F6F3]'
                    }`}
                  >
                    <span className="sm:hidden">{option.shortLabel}</span>
                    <span className="hidden sm:inline">{option.nativeLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-18">
              <div className="max-w-2xl space-y-5">
                <p className="text-xs sm:text-sm font-medium tracking-wide text-[#D4B88C]">
                  {t.hero.kicker}
                </p>
                <h1 className="font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-semibold leading-[1.06] tracking-tight text-[#F7F6F3] text-balance">
                  {t.hero.title}
                </h1>
                <p className="text-base sm:text-lg text-[#E5E0D6] leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection('catalog')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E8E5DF] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A]"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('estate')}
                    className="inline-flex items-center gap-1.5 py-2 text-sm font-medium text-[#E5E0D6] hover:text-[#F7F6F3] underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{t.hero.secondaryCta}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Proof Strip Below Hero */}
          <div className="border-t border-[#F7F6F3]/12 bg-[#181715]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#F7F6F3]/12">
              {t.metrics.map((metric) => (
                <div key={metric.label} className="py-6 sm:py-7 px-3 sm:px-6 first:pl-0">
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-[#F7F6F3] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-[#DED9CF] mt-1">{metric.label}</div>
                  <div className="text-xs text-[#9E978C] mt-0.5">{metric.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Catalog Section */}
        <section id="catalog" className="py-20 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#181715]/10">
            <div className="space-y-3 max-w-xl">
              <p className="text-xs font-medium text-[#785A34]">{t.catalog.kicker}</p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#181715] leading-[1.08] text-balance">
                {t.catalog.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5E584F] leading-relaxed">
                {t.catalog.subtitle}
              </p>
            </div>

            {/* Currency Toggle inside Catalog Toolbar */}
            <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
              <span className="text-xs text-[#6B645A]">{t.catalog.currencyLabel}</span>
              <div
                role="group"
                aria-label={t.catalog.currencyGroupAria}
                className="inline-flex p-1 bg-[#EEECE7] border border-[#181715]/10 rounded-sm"
              >
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    currency === 'USD'
                      ? 'bg-[#181715] text-[#F7F6F3]'
                      : 'text-[#4A4640] hover:text-[#181715]'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('KGS')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                    currency === 'KGS'
                      ? 'bg-[#181715] text-[#F7F6F3]'
                      : 'text-[#4A4640] hover:text-[#181715]'
                  }`}
                >
                  {t.catalog.currencyKgsLabel}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Filters Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6">
            <div
              role="group"
              aria-label={t.catalog.breedGroupAria}
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EEECE7] border border-[#181715]/10 rounded-sm self-start"
            >
              {t.catalog.breedTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setBreedFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    breedFilter === tab.id
                      ? 'bg-[#F7F6F3] text-[#181715] shadow-xs'
                      : 'text-[#5E584F] hover:text-[#181715]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <label htmlFor="discipline-select" className="text-xs text-[#6B645A] whitespace-nowrap">
                {t.catalog.disciplineLabel}
              </label>
              <select
                id="discipline-select"
                value={disciplineFilter}
                onChange={(e) => setDisciplineFilter(e.target.value as DisciplineFilter)}
                className="px-3 py-2 text-xs font-medium bg-[#EEECE7] border border-[#181715]/12 text-[#181715] rounded-sm focus:outline-none focus:border-[#8C6D46] cursor-pointer"
              >
                {t.catalog.disciplineTabs.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Horse Cards Grid */}
          {filteredHorses.length === 0 ? (
            <div className="py-16 px-6 bg-[#EEECE7] border border-[#181715]/10 rounded-sm text-center space-y-4">
              <p className="font-display text-2xl font-semibold text-[#181715]">
                {t.catalog.emptyTitle}
              </p>
              <p className="text-sm text-[#5E584F] max-w-md mx-auto">{t.catalog.emptyBody}</p>
              <button
                type="button"
                onClick={() => {
                  setBreedFilter('all');
                  setDisciplineFilter('all');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#F7F6F3] bg-[#181715] hover:bg-[#2F2C27] rounded-sm transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>{t.catalog.resetFilters}</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredHorses.map((horse) => {
                const localized = t.horses[horse.id];
                return (
                  <article
                    key={horse.id}
                    className="group bg-[#EEECE7] border border-[#181715]/10 rounded-sm overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedHorse(horse)}
                      className="block w-full aspect-[4/3] overflow-hidden bg-[#181715] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                      aria-label={`${t.catalog.cardAriaPrefix} ${localized.name}`}
                    >
                      <ResilientImage
                        src={horse.imageUrl}
                        alt={localized.imageAlt}
                        fallbackTitle={localized.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </button>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        {/* Unboxed clean metadata with typographic separators */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E584F]">
                          <span>{localized.breed}</span>
                          <span aria-hidden="true">·</span>
                          <span>{localized.gender}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">
                            {horse.birthYear} {t.catalog.yearSuffix}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">
                            {horse.heightCm} {t.catalog.heightUnit}
                          </span>
                        </div>

                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-display text-3xl font-semibold text-[#181715]">
                            {localized.name}
                          </h3>
                          <span className="font-mono text-xs text-[#6B645A] tabular-nums whitespace-nowrap shrink-0">
                            {localized.registryId}
                          </span>
                        </div>

                        <p className="text-sm text-[#4A4640] leading-relaxed">
                          {localized.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#181715]/10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="text-xs text-[#6B645A]">{localized.coat}</div>
                          <div className="text-lg font-semibold text-[#181715] tabular-nums mt-0.5">
                            {formatPrice(horse)}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedHorse(horse)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#181715] bg-[#F7F6F3] border border-[#181715]/18 hover:bg-[#181715] hover:text-[#F7F6F3] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
                        >
                          <span>{t.catalog.passportCta}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* 3. Estate & Breeding Program */}
        <section
          id="estate"
          className="py-20 sm:py-24 bg-[#EEECE7] border-y border-[#181715]/10"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-medium text-[#785A34]">{t.estate.kicker}</p>
                <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#181715] leading-[1.08] text-balance">
                  {t.estate.title}
                </h2>
              </div>
              <div className="border-l-2 border-[#8C6D46] pl-4 py-0.5 shrink-0">
                <div className="text-xs font-medium text-[#785A34]">{t.estate.directorLabel}</div>
                <div className="text-base font-semibold text-[#181715] mt-0.5">
                  {t.estate.directorName}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 min-h-[320px] rounded-sm overflow-hidden border border-[#181715]/10 bg-[#181715]">
                <ResilientImage
                  src={ESTATE_IMAGE.url}
                  alt={t.estate.imageAlt}
                  fallbackTitle={t.estate.fallbackTitle}
                  className="w-full h-full lg:h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 bg-[#F7F6F3] border border-[#181715]/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between divide-y divide-[#181715]/10">
                {t.estate.capabilities.map((item) => (
                  <div key={item.index} className="py-5 first:pt-0 last:pb-0 space-y-1.5">
                    <h3 className="text-base font-semibold text-[#181715]">
                      <span className="font-mono text-xs text-[#785A34] mr-2 tabular-nums">
                        {item.index}.
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A4640] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Breed Standards & Proof */}
        <section id="standards" className="py-20 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium text-[#785A34]">{t.standards.kicker}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181715] text-balance">
                {t.standards.title}
              </h2>
            </div>

            <div className="overflow-x-auto border border-[#181715]/12 rounded-sm bg-[#EEECE7]/50">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="border-b border-[#181715]/12 bg-[#EEECE7] text-xs font-medium text-[#5E584F]">
                    <th className="py-3.5 px-5">{t.standards.columns.breed}</th>
                    <th className="py-3.5 px-5">{t.standards.columns.origin}</th>
                    <th className="py-3.5 px-5">{t.standards.columns.height}</th>
                    <th className="py-3.5 px-5">{t.standards.columns.focus}</th>
                    <th className="py-3.5 px-5">{t.standards.columns.documents}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#181715]/10 text-sm text-[#36322D]">
                  {t.standards.rows.map((row) => (
                    <tr key={row.breed} className="hover:bg-[#EEECE7]/60 transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#181715] whitespace-nowrap">
                        {row.breed}
                      </td>
                      <td className="py-4 px-5">{row.origin}</td>
                      <td className="py-4 px-5 font-mono text-xs tabular-nums whitespace-nowrap">
                        {row.height}
                      </td>
                      <td className="py-4 px-5">{row.focus}</td>
                      <td className="py-4 px-5 text-xs text-[#5E584F]">{row.documents}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attributable Testimonials adjacent to Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {t.standards.testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="p-6 sm:p-8 bg-[#EEECE7] border border-[#181715]/10 rounded-sm flex flex-col justify-between space-y-6"
              >
                <p className="text-base text-[#292622] leading-relaxed">«{item.quote}»</p>
                <footer className="pt-4 border-t border-[#181715]/10">
                  <div className="text-sm font-semibold text-[#181715]">{item.author}</div>
                  <div className="text-xs text-[#5E584F] mt-0.5">{item.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* 5. Private Viewing & Lead Capture */}
        <InquirySection preselectedHorseId={preselectedHorseId} language={language} t={t} />
      </main>

      {/* Quiet Footer */}
      <footer className="bg-[#121110] text-[#9E978C] border-t border-[#F7F6F3]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-display text-xl font-semibold text-[#F7F6F3]">Ала-Тоо Асыл Тукум</div>
            <div className="text-xs">{t.footer.tagline}</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#catalog" className="hover:text-[#F7F6F3] transition-colors">
              {t.footer.links.catalog}
            </a>
            <a href="#estate" className="hover:text-[#F7F6F3] transition-colors">
              {t.footer.links.estate}
            </a>
            <a href="#standards" className="hover:text-[#F7F6F3] transition-colors">
              {t.footer.links.standards}
            </a>
            <a href="#contact" className="hover:text-[#F7F6F3] transition-colors">
              {t.footer.links.contact}
            </a>
          </div>

          <div
            role="group"
            aria-label={t.languageSelectorLabel}
            className="inline-flex items-center gap-1 p-1 bg-[#181715] border border-[#F7F6F3]/12 rounded-sm"
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setLanguage(option.id)}
                aria-pressed={language === option.id}
                className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                  language === option.id
                    ? 'bg-[#F7F6F3] text-[#181715]'
                    : 'text-[#9E978C] hover:text-[#F7F6F3]'
                }`}
              >
                {option.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <PedigreeModal
        horse={selectedHorse}
        currency={currency}
        t={t}
        onClose={() => setSelectedHorse(null)}
        onSelectForViewing={(horseId) => handleBookViewing(horseId)}
      />

      <ChatWidget
        language={language}
        currency={currency}
        t={t.chat}
        onGoToBooking={() => handleBookViewing()}
      />
    </div>
  );
}
