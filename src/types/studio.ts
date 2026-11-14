export type ServiceCategoryId =
  | 'soins-du-visage'
  | 'massage-et-rituels'
  | 'ongles'
  | 'regard'
  | 'maquillage';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MediaAsset {
  src: string;
  alt: string;
  aspectRatio?: '3:4' | '4:3' | '16:9';
}

export interface ServiceItem {
  slug: string;
  code: string;
  categoryId: ServiceCategoryId;
  categoryLabel: string;
  name: string;
  shortDescription: string;
  intro: string;
  durationMinutes: number;
  priceEur: number;
  featuredOnHome?: boolean;
  isDemoCatalogItem?: boolean;
  image: MediaAsset;
  suitableFor: string[];
  includes: string[];
  preparationAdvice: string[];
  aftercareAdvice: string[];
  faqs: FaqItem[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  subtitle: string;
}

export type PreferredTimeSlot = 'Matin' | 'Après-midi' | "Fin d'après-midi";

export type PreferredContactMethod = 'Téléphone' | 'WhatsApp';

export interface BookingFormData {
  serviceSlug: string;
  preferredDate: string;
  preferredTime: PreferredTimeSlot | '';
  fullName: string;
  phone: string;
  message: string;
  contactMethod: PreferredContactMethod | '';
}

export type BookingFieldErrors = Partial<Record<keyof BookingFormData, string>>;

export interface OpeningHourRow {
  days: string;
  hours: string;
}

export interface StudioConfig {
  brandName: string;
  tagline: string;
  city: string;
  district: string;
  founderName: string;
  founderRole: string;
  email: string;
  emailNote: string;
  addressDisplay: string;
  metroAccess: string;
  openingHours: OpeningHourRow[];
  socialLinks: {
    instagram: string;
    pinterest: string;
  };
  isDemoConfiguration: boolean;
}
