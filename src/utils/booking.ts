import type { BookingFieldErrors, BookingFormData } from '../types/studio';

export function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function isPastDate(isoDate: string): boolean {
  if (!isoDate) return false;
  return isoDate < getTodayIsoDate();
}

export function isValidPhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s().-]/g, '');
  // Accept standard French numbers (06..., 01..., +33...) and international numbers (8 to 15 digits)
  return /^(\+?[1-9]\d{7,14}|0[1-9]\d{8})$/.test(cleaned);
}

export function validateBookingForm(data: BookingFormData): BookingFieldErrors {
  const errors: BookingFieldErrors = {};

  if (!data.serviceSlug.trim()) {
    errors.serviceSlug = 'Veuillez sélectionner le soin souhaité.';
  }

  if (!data.preferredDate.trim()) {
    errors.preferredDate = 'Veuillez choisir une date souhaitée.';
  } else if (isPastDate(data.preferredDate)) {
    errors.preferredDate = 'La date choisie ne peut pas être antérieure à aujourd’hui.';
  }

  if (!data.preferredTime) {
    errors.preferredTime = 'Veuillez indiquer votre créneau horaire préféré.';
  }

  if (data.fullName.trim().length < 2) {
    errors.fullName = 'Veuillez renseigner votre nom et prénom (2 caractères minimum).';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Veuillez indiquer votre numéro de téléphone.';
  } else if (!isValidPhoneNumber(data.phone)) {
    errors.phone = 'Veuillez saisir un numéro de téléphone valide (ex. 06 12 34 56 78 ou +33 6 12 34 56 78).';
  }

  if (!data.contactMethod) {
    errors.contactMethod = 'Veuillez choisir votre mode de contact préféré.';
  }

  return errors;
}

export function formatFrenchDate(isoDate: string): string {
  if (!isoDate) return '';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  const [year, month, day] = parts.map(Number);
  const dateObj = new Date(year, month - 1, day);
  if (Number.isNaN(dateObj.getTime())) return isoDate;
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);
}

export function formatEurPrice(price: number): string {
  return `${price} €`;
}

export function formatDuration(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;
    return remaining === 0 ? `${hours}h00` : `${hours}h${String(remaining).padStart(2, '0')}`;
  }
  return `${minutes} min`;
}

export function buildInquiryMessage(data: BookingFormData, serviceName: string): string {
  const formattedDate = formatFrenchDate(data.preferredDate);
  const lines = [
    'Bonjour Maison Éclat,',
    '',
    'Je souhaite vous adresser une demande de rendez-vous :',
    `• Soin souhaité : ${serviceName}`,
    `• Date souhaitée : ${formattedDate}`,
    `• Créneau préféré : ${data.preferredTime}`,
    `• Nom complet : ${data.fullName.trim()}`,
    `• Téléphone : ${data.phone.trim()}`,
    `• Contact préféré : ${data.contactMethod}`,
  ];

  if (data.message.trim()) {
    lines.push(`• Précisions : ${data.message.trim()}`);
  }

  lines.push(
    '',
    'Note : aperçu généré à des fins de démonstration uniquement (aucun envoi vers un établissement réel).',
  );
  return lines.join('\n');
}
