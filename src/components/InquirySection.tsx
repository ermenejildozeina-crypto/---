import { CheckCircle2, MapPin, Phone, Clock, User } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { HORSES } from '../data/horses';
import type { Language, TranslationDictionary } from '../data/i18n';
import { StudLocationMap } from './StudLocationMap';

interface InquirySectionProps {
  preselectedHorseId: string;
  language: Language;
  t: TranslationDictionary;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function InquirySection({ preselectedHorseId, language, t }: InquirySectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestKey, setInterestKey] = useState('general');
  const [visitFormat, setVisitFormat] = useState<'onsite' | 'video'>('onsite');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedHorseId) {
      setInterestKey(preselectedHorseId);
      setSubmittedRef(null);
    }
  }, [preselectedHorseId]);

  const getInterestLabel = (key: string): string => {
    if (key === 'general') return t.contact.interestGeneral;
    if (key === 'youngstock') return t.contact.interestYoungstock;
    const localizedHorse = t.horses[key];
    if (localizedHorse) {
      return `${localizedHorse.name} (${localizedHorse.breed})`;
    }
    return t.contact.interestGeneral;
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = t.contact.errors.name;
    }
    const digitsCount = phone.replace(/\D/g, '').length;
    if (digitsCount < 9) {
      nextErrors.phone = t.contact.errors.phone;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t.contact.errors.email;
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const bookingCode = `AT-2026-${Math.floor(100 + Math.random() * 899)}`;
    setSubmittedRef(bookingCode);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#181715] text-[#F7F6F3] border-t border-[#F7F6F3]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Kichi-Jargylchak Stud Estate Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-wide text-[#C4A67A]">
                {t.contact.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#F7F6F3] leading-[1.1] text-balance">
                {t.contact.title}
              </h2>
              <p className="text-base text-[#C9C3B8] leading-relaxed max-w-md">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-[#F7F6F3]/12 text-sm text-[#DED9CF]">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-[#C4A67A] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="font-medium text-[#F7F6F3]">{t.contact.directorTitle}</div>
                  <div className="text-[#B5AFA5] mt-0.5">{t.contact.directorValue}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C4A67A] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="font-medium text-[#F7F6F3]">{t.contact.addressTitle}</div>
                  <div className="text-[#B5AFA5] mt-0.5">{t.contact.addressValue}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C4A67A] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="font-medium text-[#F7F6F3]">{t.contact.phoneTitle}</div>
                  <div className="text-[#B5AFA5] font-mono tabular-nums mt-0.5">
                    +996 (555) 840-210 · concierge@alatoo-asyl.kg
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C4A67A] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="font-medium text-[#F7F6F3]">{t.contact.hoursTitle}</div>
                  <div className="text-[#B5AFA5] mt-0.5">{t.contact.hoursValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#211F1C] border border-[#F7F6F3]/12 rounded-sm p-6 sm:p-8">
              {submittedRef ? (
                <div className="py-8 space-y-5">
                  <div className="inline-flex items-center gap-2.5 text-[#C4A67A]">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    <span className="font-mono text-sm tabular-nums">
                      {t.contact.successBadgePrefix} {submittedRef} {t.contact.successBadgeSuffix}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-[#F7F6F3]">
                    {t.contact.successTitlePrefix} {name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#C9C3B8] leading-relaxed max-w-xl">
                    {t.contact.successBodyBeforePhone}{' '}
                    <span className="font-mono text-[#F7F6F3] tabular-nums">{phone}</span>{' '}
                    {t.contact.successBodyBetweenPhoneAndInterest}
                    {getInterestLabel(interestKey)}
                    {t.contact.successBodyAfterInterest}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setComment('');
                    }}
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E5E2DC] rounded-sm transition-colors cursor-pointer"
                  >
                    {t.contact.submitAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-medium text-[#C9C3B8] mb-2">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#181715] border border-[#F7F6F3]/20 text-[#F7F6F3] placeholder-[#7C766D] rounded-sm focus:outline-none focus:border-[#C4A67A]"
                      />
                      {errors.name && (
                        <p className="text-xs text-[#E58D7A] mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-medium text-[#C9C3B8] mb-2">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-[#181715] border border-[#F7F6F3]/20 text-[#F7F6F3] placeholder-[#7C766D] rounded-sm focus:outline-none focus:border-[#C4A67A]"
                      />
                      {errors.phone && (
                        <p className="text-xs text-[#E58D7A] mt-1.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="lead-email" className="block text-xs font-medium text-[#C9C3B8] mb-2">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#181715] border border-[#F7F6F3]/20 text-[#F7F6F3] placeholder-[#7C766D] rounded-sm focus:outline-none focus:border-[#C4A67A]"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#E58D7A] mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-interest" className="block text-xs font-medium text-[#C9C3B8] mb-2">
                        {t.contact.interestLabel}
                      </label>
                      <select
                        id="lead-interest"
                        value={interestKey}
                        onChange={(e) => setInterestKey(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#181715] border border-[#F7F6F3]/20 text-[#F7F6F3] rounded-sm focus:outline-none focus:border-[#C4A67A]"
                      >
                        <option value="general">{t.contact.interestGeneral}</option>
                        {HORSES.map((horse) => {
                          const localizedHorse = t.horses[horse.id];
                          return (
                            <option key={horse.id} value={horse.id}>
                              {localizedHorse.name} ({localizedHorse.breed})
                            </option>
                          );
                        })}
                        <option value="youngstock">{t.contact.interestYoungstock}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-[#C9C3B8] mb-2">
                      {t.contact.visitFormatLabel}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1 bg-[#181715] border border-[#F7F6F3]/15 rounded-sm">
                      <button
                        type="button"
                        onClick={() => setVisitFormat('onsite')}
                        className={`py-2 px-3 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                          visitFormat === 'onsite'
                            ? 'bg-[#8C6D46] text-[#F7F6F3]'
                            : 'text-[#B5AFA5] hover:text-[#F7F6F3]'
                        }`}
                      >
                        {t.contact.visitOnsite}
                      </button>
                      <button
                        type="button"
                        onClick={() => setVisitFormat('video')}
                        className={`py-2 px-3 text-xs font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap ${
                          visitFormat === 'video'
                            ? 'bg-[#8C6D46] text-[#F7F6F3]'
                            : 'text-[#B5AFA5] hover:text-[#F7F6F3]'
                        }`}
                      >
                        {t.contact.visitVideo}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-comment" className="block text-xs font-medium text-[#C9C3B8] mb-2">
                      {t.contact.commentLabel}
                    </label>
                    <textarea
                      id="lead-comment"
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t.contact.commentPlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#181715] border border-[#F7F6F3]/20 text-[#F7F6F3] placeholder-[#7C766D] rounded-sm focus:outline-none focus:border-[#C4A67A] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-[#9B9489]">{t.contact.privacyNote}</p>
                    <button
                      type="submit"
                      className="px-6 py-3 text-sm font-medium text-[#181715] bg-[#F7F6F3] hover:bg-[#E5E2DC] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A67A]"
                    >
                      {t.contact.submitCta}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <StudLocationMap t={t} language={language} />
      </div>
    </section>
  );
}
