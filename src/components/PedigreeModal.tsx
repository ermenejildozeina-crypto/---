import { X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';
import type { HorseRecord } from '../data/horses';
import type { TranslationDictionary } from '../data/i18n';
import { ResilientImage } from './ResilientImage';

interface PedigreeModalProps {
  horse: HorseRecord | null;
  currency: 'USD' | 'KGS';
  t: TranslationDictionary;
  onClose: () => void;
  onSelectForViewing: (horseId: string) => void;
}

export function PedigreeModal({
  horse,
  currency,
  t,
  onClose,
  onSelectForViewing,
}: PedigreeModalProps) {
  useEffect(() => {
    if (!horse) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [horse, onClose]);

  if (!horse) return null;

  const localized = t.horses[horse.id];
  const formattedPrice =
    currency === 'USD'
      ? `$${horse.priceUsd.toLocaleString('ru-RU')}`
      : `${horse.priceKgs.toLocaleString('ru-RU')} ${t.catalog.kgsUnit}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121110]/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pedigree-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F7F6F3] text-[#181715] border border-[#181715]/15 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#181715]/10 bg-[#EEECE7]">
          <div className="flex items-center gap-2 text-xs text-[#5E584F] min-w-0">
            <span className="truncate">{localized.breed}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums truncate">{localized.registryId}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.closeAria}
            className="inline-flex items-center justify-center w-10 h-10 text-[#181715] hover:bg-[#181715]/10 rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-5 aspect-[4/3] bg-[#EEECE7] rounded-sm overflow-hidden">
              <ResilientImage
                src={horse.imageUrl}
                alt={localized.imageAlt}
                fallbackTitle={localized.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="text-xs text-[#6B645A] flex flex-wrap items-center gap-2">
                  <span>{localized.gender}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {horse.birthYear} {t.catalog.yearSuffix}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{localized.coat}</span>
                </div>
                <h2
                  id="pedigree-modal-title"
                  className="font-display text-3xl sm:text-4xl font-semibold text-[#181715] mt-1"
                >
                  {localized.name}
                </h2>
                <p className="text-sm text-[#5E584F] mt-1">
                  {localized.line} · {localized.discipline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#36322D] leading-relaxed">
                {localized.description}
              </p>

              {/* Biometrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#181715]/10">
                <div>
                  <div className="text-xs text-[#6B645A]">{t.modal.withersHeight}</div>
                  <div className="font-mono text-base font-medium text-[#181715] tabular-nums mt-0.5">
                    {horse.heightCm} {t.modal.cmUnit}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6B645A]">{t.modal.chestGirth}</div>
                  <div className="font-mono text-base font-medium text-[#181715] tabular-nums mt-0.5">
                    {horse.chestCm} {t.modal.cmUnit}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6B645A]">{t.modal.cannonBone}</div>
                  <div className="font-mono text-base font-medium text-[#181715] tabular-nums mt-0.5">
                    {horse.cannonCm} {t.modal.cmUnit}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6B645A]">{t.modal.isoChip}</div>
                  <div className="font-mono text-xs font-medium text-[#181715] tabular-nums mt-1 truncate">
                    {horse.microchipId}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Veterinary Status */}
          <div className="p-4 sm:p-5 bg-[#EEECE7] border border-[#181715]/10 rounded-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#785A34] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <div className="text-sm font-semibold text-[#181715]">{t.modal.vetTitle}</div>
              <p className="text-sm text-[#4A4640] mt-1 leading-relaxed">
                {localized.vetSummary}
              </p>
            </div>
          </div>

          {/* 3-Generation Pedigree Tree */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#181715] mb-4">
              {t.modal.pedigreeTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Paternal Branch */}
              <div className="border border-[#181715]/12 rounded-sm p-4 bg-[#F7F6F3] space-y-3">
                <div className="text-xs font-medium text-[#785A34]">{t.modal.paternalBranch}</div>
                <div className="pb-3 border-b border-[#181715]/10">
                  <div className="text-xs text-[#6B645A]">{t.modal.sireLabel}</div>
                  <div className="text-base font-semibold text-[#181715]">
                    {localized.pedigree.sire.name}
                  </div>
                  <div className="text-xs text-[#5E584F]">{localized.pedigree.sire.origin}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="text-xs text-[#6B645A]">{t.modal.paternalGrandsireLabel}</div>
                    <div className="text-sm font-medium text-[#181715]">
                      {localized.pedigree.paternalGrandsire.name}
                    </div>
                    <div className="text-xs text-[#5E584F]">
                      {localized.pedigree.paternalGrandsire.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B645A]">{t.modal.paternalGranddamLabel}</div>
                    <div className="text-sm font-medium text-[#181715]">
                      {localized.pedigree.paternalGranddam.name}
                    </div>
                    <div className="text-xs text-[#5E584F]">
                      {localized.pedigree.paternalGranddam.origin}
                    </div>
                  </div>
                </div>
              </div>

              {/* Maternal Branch */}
              <div className="border border-[#181715]/12 rounded-sm p-4 bg-[#F7F6F3] space-y-3">
                <div className="text-xs font-medium text-[#785A34]">{t.modal.maternalBranch}</div>
                <div className="pb-3 border-b border-[#181715]/10">
                  <div className="text-xs text-[#6B645A]">{t.modal.damLabel}</div>
                  <div className="text-base font-semibold text-[#181715]">
                    {localized.pedigree.dam.name}
                  </div>
                  <div className="text-xs text-[#5E584F]">{localized.pedigree.dam.origin}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="text-xs text-[#6B645A]">{t.modal.maternalGrandsireLabel}</div>
                    <div className="text-sm font-medium text-[#181715]">
                      {localized.pedigree.maternalGrandsire.name}
                    </div>
                    <div className="text-xs text-[#5E584F]">
                      {localized.pedigree.maternalGrandsire.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B645A]">{t.modal.maternalGranddamLabel}</div>
                    <div className="text-sm font-medium text-[#181715]">
                      {localized.pedigree.maternalGranddam.name}
                    </div>
                    <div className="text-xs text-[#5E584F]">
                      {localized.pedigree.maternalGranddam.origin}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-[#181715]/10 bg-[#EEECE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#6B645A]">{t.modal.priceNote}</div>
            <div className="text-xl font-semibold text-[#181715] tabular-nums">
              {formattedPrice}
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectForViewing(horse.id)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#F7F6F3] bg-[#181715] hover:bg-[#2F2C27] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
          >
            <span>{t.modal.bookCta}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
