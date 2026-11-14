import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { servicesCatalog } from '../data/services';
import { studioConfig } from '../config/studioConfig';
import type {
  BookingFieldErrors,
  BookingFormData,
  PreferredContactMethod,
  PreferredTimeSlot,
} from '../types/studio';
import {
  buildInquiryMessage,
  formatDuration,
  formatEurPrice,
  formatFrenchDate,
  getTodayIsoDate,
  validateBookingForm,
} from '../utils/booking';

interface BookingFormProps {
  initialServiceSlug?: string;
}

const TIME_SLOTS: PreferredTimeSlot[] = ['Matin', 'Après-midi', "Fin d'après-midi"];
const CONTACT_METHODS: PreferredContactMethod[] = ['WhatsApp', 'Téléphone'];

export function BookingForm({ initialServiceSlug = '' }: BookingFormProps) {
  const validInitialSlug = servicesCatalog.some((s) => s.slug === initialServiceSlug)
    ? initialServiceSlug
    : '';

  const [formData, setFormData] = useState<BookingFormData>({
    serviceSlug: validInitialSlug,
    preferredDate: '',
    preferredTime: '',
    fullName: '',
    phone: '',
    message: '',
    contactMethod: 'WhatsApp',
  });

  const [errors, setErrors] = useState<BookingFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    if (initialServiceSlug && servicesCatalog.some((s) => s.slug === initialServiceSlug)) {
      setFormData((prev) => ({ ...prev, serviceSlug: initialServiceSlug }));
      setErrors((prev) => ({ ...prev, serviceSlug: undefined }));
    }
  }, [initialServiceSlug]);

  const todayIso = getTodayIsoDate();
  const selectedService = servicesCatalog.find((s) => s.slug === formData.serviceSlug);

  const handleFieldChange = <K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validateBookingForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    window.setTimeout(() => {
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
      setCopiedMessage(false);
    }, 350);
  };

  const handleCopyMessage = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(true);
      window.setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setCopiedMessage(false);
  };

  if (submittedData) {
    const confirmedService = servicesCatalog.find((s) => s.slug === submittedData.serviceSlug);
    const serviceLabel = confirmedService
      ? `${confirmedService.name} (${formatDuration(confirmedService.durationMinutes)} · ${formatEurPrice(confirmedService.priceEur)})`
      : submittedData.serviceSlug;

    const previewMessage = buildInquiryMessage(submittedData, serviceLabel);

    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-[#8A7A6B]/30 rounded-[4px] bg-[#EDE6DA] p-6 md:p-10 space-y-6"
      >
        <div className="space-y-2 border-b border-[#8A7A6B]/25 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8C4B55]">
            Simulation de demande — Portfolio
          </p>
          <h2 className="font-serif text-2xl md:text-[28px] text-[#2B211C]">
            Aperçu de votre demande préparé localement.
          </h2>
          <p className="text-[15px] leading-relaxed text-[#4E4541]">
            Maison Éclat est un site de démonstration fictif : aucune demande n’a été envoyée à une
            entreprise réelle, aucun rendez-vous n’est enregistré et aucun rappel ne sera effectué.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.1em] text-[#8A7A6B]">Soin choisi</dt>
            <dd className="mt-1 font-medium text-[#2B211C]">{serviceLabel}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.1em] text-[#8A7A6B]">Date &amp; créneau</dt>
            <dd className="mt-1 font-medium text-[#2B211C] capitalize">
              {formatFrenchDate(submittedData.preferredDate)} · {submittedData.preferredTime}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.1em] text-[#8A7A6B]">Coordonnées saisies</dt>
            <dd className="mt-1 text-[#2B211C]">
              {submittedData.fullName} — {submittedData.phone}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.1em] text-[#8A7A6B]">Préférence indiquée</dt>
            <dd className="mt-1 text-[#2B211C]">{submittedData.contactMethod}</dd>
          </div>
        </dl>

        <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#F7F1E8] p-5 space-y-4">
          <p className="text-[14px] leading-relaxed text-[#4E4541]">
            Dans une version reliée à un studio réel, ce récapitulatif pourrait être transmis au
            secrétariat ou vers l’adresse de démonstration ({studioConfig.email}, boîte non active).
            Vous pouvez copier l’aperçu ci-dessous pour tester le format généré.
          </p>
          <div>
            <button
              type="button"
              onClick={() => handleCopyMessage(previewMessage)}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[4px] border border-[#8A7A6B] px-5 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
            >
              {copiedMessage ? (
                <>
                  <Check className="h-4 w-4 text-[#8C4B55]" aria-hidden="true" />
                  Aperçu copié
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  Copier l’aperçu du message
                </>
              )}
            </button>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B] mb-2">
            Aperçu du message formaté (démonstration locale)
          </p>
          <pre className="whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-[#4E4541] bg-[#F7F1E8] border border-[#8A7A6B]/20 rounded-[4px] p-4">
            {previewMessage}
          </pre>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="text-[13px] font-medium text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B] hover:decoration-[#B76E79] transition-colors"
          >
            Modifier la simulation
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 md:p-10 space-y-7"
    >
      {/* 1. Service selection */}
      <div>
        <label
          htmlFor="booking-service"
          className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2"
        >
          1. Soin souhaité <span className="text-[#8C4B55]">*</span>
        </label>
        <select
          id="booking-service"
          name="serviceSlug"
          value={formData.serviceSlug}
          onChange={(e) => handleFieldChange('serviceSlug', e.target.value)}
          aria-invalid={Boolean(errors.serviceSlug)}
          aria-describedby={errors.serviceSlug ? 'error-serviceSlug' : undefined}
          className="w-full min-h-[48px] rounded-[4px] border border-[#8A7A6B]/45 bg-[#F7F1E8] px-4 py-3 text-[15px] text-[#2B211C] focus:border-[#2B211C] focus:outline-none"
        >
          <option value="">Sélectionner un soin ou rituel…</option>
          {servicesCatalog.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name} — {formatDuration(service.durationMinutes)} · {formatEurPrice(service.priceEur)}
            </option>
          ))}
        </select>
        {selectedService && !errors.serviceSlug && (
          <p className="mt-2 text-[13px] text-[#4E4541]">
            {selectedService.categoryLabel} · {formatDuration(selectedService.durationMinutes)} ·{' '}
            <span className="tabular-nums font-medium text-[#2B211C]">
              {formatEurPrice(selectedService.priceEur)}
            </span>
          </p>
        )}
        {errors.serviceSlug && (
          <p id="error-serviceSlug" role="alert" className="mt-2 text-[13px] text-[#93000A]">
            {errors.serviceSlug}
          </p>
        )}
      </div>

      {/* 2. Preferred date & 3. Preferred time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="booking-date"
            className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2"
          >
            2. Date souhaitée <span className="text-[#8C4B55]">*</span>
          </label>
          <input
            id="booking-date"
            name="preferredDate"
            type="date"
            min={todayIso}
            value={formData.preferredDate}
            onChange={(e) => handleFieldChange('preferredDate', e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? 'error-preferredDate' : undefined}
            className="w-full min-h-[48px] rounded-[4px] border border-[#8A7A6B]/45 bg-[#F7F1E8] px-4 py-3 text-[15px] text-[#2B211C] focus:border-[#2B211C] focus:outline-none"
          />
          {errors.preferredDate && (
            <p id="error-preferredDate" role="alert" className="mt-2 text-[13px] text-[#93000A]">
              {errors.preferredDate}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2">
            3. Créneau préféré <span className="text-[#8C4B55]">*</span>
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelected = formData.preferredTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleFieldChange('preferredTime', slot)}
                  className={`min-h-[48px] rounded-[4px] border px-2 py-2 text-[13px] transition-colors ${
                    isSelected
                      ? 'border-[#2B211C] bg-[#2B211C] text-[#F7F1E8] font-medium'
                      : 'border-[#8A7A6B]/45 bg-[#F7F1E8] text-[#2B211C] hover:border-[#2B211C]'
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
          {errors.preferredTime && (
            <p role="alert" className="mt-2 text-[13px] text-[#93000A]">
              {errors.preferredTime}
            </p>
          )}
        </fieldset>
      </div>

      {/* 4. Full name & 5. Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="booking-fullname"
            className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2"
          >
            4. Nom et prénom <span className="text-[#8C4B55]">*</span>
          </label>
          <input
            id="booking-fullname"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Claire Moreau"
            value={formData.fullName}
            onChange={(e) => handleFieldChange('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            className="w-full min-h-[48px] rounded-[4px] border border-[#8A7A6B]/45 bg-[#F7F1E8] px-4 py-3 text-[15px] text-[#2B211C] placeholder:text-[#8A7A6B]/70 focus:border-[#2B211C] focus:outline-none"
          />
          {errors.fullName && (
            <p id="error-fullName" role="alert" className="mt-2 text-[13px] text-[#93000A]">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="booking-phone"
            className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2"
          >
            5. Numéro de téléphone <span className="text-[#8C4B55]">*</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={(e) => handleFieldChange('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            className="w-full min-h-[48px] rounded-[4px] border border-[#8A7A6B]/45 bg-[#F7F1E8] px-4 py-3 text-[15px] text-[#2B211C] placeholder:text-[#8A7A6B]/70 focus:border-[#2B211C] focus:outline-none"
          />
          {errors.phone && (
            <p id="error-phone" role="alert" className="mt-2 text-[13px] text-[#93000A]">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* 6. Optional message */}
      <div>
        <label
          htmlFor="booking-message"
          className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2"
        >
          6. Message ou précisions (optionnel)
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={3}
          placeholder="Sensibilités particulières, disponibilités alternatives, date d’un mariage…"
          value={formData.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          className="w-full rounded-[4px] border border-[#8A7A6B]/45 bg-[#F7F1E8] px-4 py-3 text-[15px] text-[#2B211C] placeholder:text-[#8A7A6B]/70 focus:border-[#2B211C] focus:outline-none"
        />
      </div>

      {/* 7. Preferred contact method */}
      <fieldset>
        <legend className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2B211C] mb-2">
          7. Mode de contact préféré <span className="text-[#8C4B55]">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CONTACT_METHODS.map((method) => {
            const isSelected = formData.contactMethod === method;
            return (
              <label
                key={method}
                className={`flex min-h-[50px] cursor-pointer items-center gap-3 rounded-[4px] border px-4 py-3 text-[14px] transition-colors ${
                  isSelected
                    ? 'border-[#2B211C] bg-[#F7F1E8] text-[#2B211C] font-medium'
                    : 'border-[#8A7A6B]/45 bg-[#F7F1E8]/60 text-[#4E4541] hover:border-[#2B211C]'
                }`}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={isSelected}
                  onChange={() => handleFieldChange('contactMethod', method)}
                  className="h-4 w-4 accent-[#2B211C]"
                />
                <span>
                  {method === 'WhatsApp'
                    ? 'WhatsApp (préférence simulée)'
                    : 'Téléphone (préférence simulée)'}
                </span>
              </label>
            );
          })}
        </div>
        {errors.contactMethod && (
          <p role="alert" className="mt-2 text-[13px] text-[#93000A]">
            {errors.contactMethod}
          </p>
        )}
      </fieldset>

      <div className="pt-2 border-t border-[#8A7A6B]/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[12px] leading-relaxed text-[#4E4541]">
          Formulaire de démonstration : aucune donnée n’est envoyée à un établissement réel.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#3B2E27] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Préparation en cours…' : 'Simuler la demande'}
        </button>
      </div>
    </form>
  );
}
