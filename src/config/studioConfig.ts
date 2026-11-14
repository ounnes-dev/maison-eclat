import type { StudioConfig } from '../types/studio';

/**
 * Configuration centralisée de Maison Éclat.
 * PROJET DE DÉMONSTRATION PORTFOLIO : Maison Éclat est un studio fictif.
 * Aucune coordonnée ci-dessous ne correspond à un établissement réel.
 */
export const studioConfig: StudioConfig = {
  brandName: 'Maison Éclat',
  tagline: 'La beauté, avec intention.',
  city: 'Paris',
  district: 'Paris, France — adresse fictive',
  founderName: 'Camille Laurent',
  founderRole: 'Fondatrice & Praticienne',

  // Adresse e-mail factice réservée à la démonstration (non fonctionnelle)
  email: 'bonjour@maison-eclat.example',
  emailNote: 'Adresse de démonstration uniquement (boîte non active)',

  // Adresse volontairement fictive pour ce portfolio
  addressDisplay: 'Paris, France — adresse fictive',
  metroAccess: 'Quartier du Marais (adresse fictive de démonstration)',

  openingHours: [
    { days: 'Mardi — Vendredi', hours: '10h00 — 19h30' },
    { days: 'Samedi', hours: '09h30 — 18h30' },
    { days: 'Dimanche & Lundi', hours: 'Fermé (sur demande mariée uniquement)' },
  ],

  socialLinks: {
    instagram: 'https://www.instagram.com/',
    pinterest: 'https://www.pinterest.fr/',
  },

  isDemoConfiguration: true,
};
