import type { FaqItem } from '../types/studio';

export interface TrustPillar {
  number: string;
  title: string;
  description: string;
}

export const trustPillars: TrustPillar[] = [
  {
    number: '01',
    title: 'Approche sur-mesure',
    description:
      'Chaque rendez-vous débute par un temps d’écoute calme afin d’adapter gestuelle et textures à l’état réel de votre peau.',
  },
  {
    number: '02',
    title: 'Gestes manuels lents',
    description:
      'Nous privilégions la précision de la main, le drainage doux et la respiration plutôt que les protocoles standardisés.',
  },
  {
    number: '03',
    title: 'Formules choisies',
    description:
      'Huiles végétales pressées à froid, hydrolats floraux et soins minimalistes sélectionnés pour leur douceur et leur tolérance.',
  },
  {
    number: '04',
    title: 'Cabines confidentielles',
    description:
      'Un studio à taille humaine au cœur du Marais, conçu pour préserver le silence, la lumière du jour et l’intimité de chaque séance.',
  },
];

export const homeFaqs: FaqItem[] = [
  {
    id: 'faq-booking',
    question: 'Comment fonctionne la demande de rendez-vous en ligne ?',
    answer:
      'Le formulaire valide votre sélection localement et génère un aperçu de demande à titre de démonstration, sans paiement en ligne ni transmission vers un véritable établissement.',
  },
  {
    id: 'faq-arrival',
    question: 'À quelle heure arriver pour mon premier soin ?',
    answer:
      'Nous vous invitons à arriver 5 à 10 minutes avant l’heure convenue. Ce temps permet de vous installer avec une infusion tiède et d’échanger tranquillement sur vos attentes avant d’entrer en cabine.',
  },
  {
    id: 'faq-sensitive-skin',
    question: 'Vos soins sont-ils adaptés aux peaux sensibles ou réactives ?',
    answer:
      'Oui. Nos protocoles sont modulables sur place et nous disposons de soins neutres sans huiles essentielles ni parfum ajouté. Il vous suffit de nous mentionner vos sensibilités lors de votre arrivée.',
  },
  {
    id: 'faq-bridal',
    question: 'Comment préparer un accompagnement beauté mariée ?',
    answer:
      'Nous recommandons de prendre contact plusieurs mois avant la date prévue afin d’organiser un premier essai au studio, puis de planifier ensemble le déroulement du jour J.',
  },
  {
    id: 'faq-cancellation',
    question: 'Que faire si je dois déplacer ou annuler ma séance ?',
    answer:
      'Dans le cadre d’un studio réel, un délai de prévenance de 48 heures permettrait de réorganiser votre créneau avec souplesse.',
  },
];
