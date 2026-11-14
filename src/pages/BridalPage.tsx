import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { studioMedia } from '../data/media';
import { EditorialImage } from '../components/EditorialImage';
import { FaqAccordion } from '../components/FaqAccordion';
import type { FaqItem } from '../types/studio';

const bridalFaqs: FaqItem[] = [
  {
    id: 'bridal-timing',
    question: 'Quand programmer l’essai maquillage ?',
    answer:
      'Idéalement 4 à 8 semaines avant le mariage, en journée afin d’observer le rendu du teint à la lumière naturelle. Cela nous laisse aussi le temps d’ajuster la routine de soin de votre peau.',
  },
  {
    id: 'bridal-location',
    question: 'La préparation du jour J a-t-elle lieu au studio ou sur le lieu du mariage ?',
    answer:
      'Les deux options sont possibles à Paris et en proche banlieue. Nous confirmons la logistique et les horaires ensemble dès la préparation de votre dossier.',
  },
  {
    id: 'bridal-guests',
    question: 'Est-il possible d’inclure la mise en beauté de proches ?',
    answer:
      'Oui, sur demande préalable, nous pouvons prévoir un créneau supplémentaire pour votre mère ou vos témoins le matin même.',
  },
];

const includedItems = [
  'Échange préparatoire et conseils de routine douce 4 semaines avant le mariage',
  'Rendez-vous d’essai au studio Maison Éclat (1h30) avec fiche de teintes sur-mesure',
  'Préparation hydratante et massage défatiguant du visage le matin du jour J',
  'Mise en beauté lumineuse et longue tenue pensée pour la lumière naturelle et la photo',
  'Trousse discrète de retouche pour les lèvres et la matité au fil de la journée',
];

export function BridalPage() {
  return (
    <div>
      {/* Hero Editorial Bridal */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8C4B55]">
              Expérience Mariée · Paris
            </p>
            <h1 className="font-serif text-[36px] md:text-[52px] leading-[1.14] tracking-[-0.02em] text-[#2B211C]">
              Une allure fidèle à vous-même, <em className="italic font-normal">du premier essai au jour J</em>
            </h1>
            <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
              Maison Éclat accompagne les futures mariées avec calme, précision et mesure : un
              teint frais qui laisse respirer la peau, des textures soyeuses et une présence
              attentive le matin de votre célébration.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservation?service=accompagnement-beaute-mariee"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] transition-colors hover:bg-[#3B2E27]"
              >
                Demander une date mariée
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services/accompagnement-beaute-mariee"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
              >
                Tarif &amp; détails
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <EditorialImage
              src={studioMedia.bridalEditorial.src}
              alt={studioMedia.bridalEditorial.alt}
              loading="eager"
              containerClassName="aspect-[3/4] max-w-lg mx-auto lg:ml-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Two-step chapter: Essai & Jour J */}
      <section className="border-y border-[#2B211C]/12 bg-[#EDE6DA]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <article className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#F7F1E8] p-7 md:p-10 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                Étape 01 · Au studio
              </p>
              <h2 className="font-serif text-[26px] md:text-[30px] text-[#2B211C]">
                L’essai maquillage
              </h2>
              <p className="text-[15px] leading-[1.7] text-[#4E4541]">
                D’une durée d’environ 1h30 au cœur du Marais, l’essai est un temps de dialogue autant
                que de création. Nous étudions vos envies, la lumière du lieu de réception et les
                matières de votre tenue pour composer un teint naturel et nuancé.
              </p>
              <p className="text-[14px] text-[#8A7A6B]">
                Vous repartez avec une fiche personnalisée et des conseils simples pour préparer
                confortablement votre peau d’ici le mariage.
              </p>
            </article>

            <article className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#F7F1E8] p-7 md:p-10 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                Étape 02 · Le matin de la cérémonie
              </p>
              <h2 className="font-serif text-[26px] md:text-[30px] text-[#2B211C]">
                La mise en beauté du jour J
              </h2>
              <p className="text-[15px] leading-[1.7] text-[#4E4541]">
                Nous arrivons en avance pour installer un espace serein et commencer par quelques
                minutes de massage facial délassant. Le maquillage est posé par fines couches afin de
                résister aux émotions tout en restant imperceptible au toucher.
              </p>
              <p className="text-[14px] text-[#8A7A6B]">
                Forfait complet Essai + Jour J à partir de 340 € (ajusté selon le lieu de déplacement).
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* What's included & FAQ */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Ce qui est inclus
            </p>
            <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.2] text-[#2B211C]">
              Un parcours pensé sans précipitation
            </h2>
          </div>

          <ul className="lg:col-span-7 space-y-4 border-t border-[#2B211C]/12 pt-6">
            {includedItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 pb-4 border-b border-[#2B211C]/12 text-[15px] leading-relaxed text-[#4E4541]"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#B76E79]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Questions fréquentes
            </p>
            <h2 className="font-serif text-[26px] md:text-[32px] leading-[1.2] text-[#2B211C]">
              Organiser votre préparation
            </h2>
          </div>
          <div className="lg:col-span-7">
            <FaqAccordion items={bridalFaqs} />
          </div>
        </div>

        <div className="border border-[#8A7A6B]/30 rounded-[4px] bg-[#EDE6DA] px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2B211C]">
              Vérifier nos disponibilités pour votre date
            </h2>
            <p className="text-[15px] text-[#4E4541]">
              Précisez la date de votre mariage et votre lieu de préparation dans le formulaire.
            </p>
          </div>
          <Link
            to="/reservation?service=accompagnement-beaute-mariee"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#3B2E27]"
          >
            Faire une demande mariée
          </Link>
        </div>
      </section>
    </div>
  );
}
