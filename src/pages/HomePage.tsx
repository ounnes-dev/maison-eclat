import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { studioConfig } from '../config/studioConfig';
import { homeFaqs, trustPillars } from '../data/homeContent';
import { studioMedia } from '../data/media';
import { servicesCatalog } from '../data/services';
import { EditorialImage } from '../components/EditorialImage';
import { FaqAccordion } from '../components/FaqAccordion';
import { ServiceCard } from '../components/ServiceCard';

export function HomePage() {
  const signatureTreatments = servicesCatalog.filter((service) => service.featuredOnHome);

  return (
    <div>
      {/* 2. Editorial Hero */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                {studioConfig.city} · {studioConfig.district}
              </p>
              <h1 className="mt-5 font-serif text-[38px] sm:text-[46px] lg:text-[56px] leading-[1.14] tracking-[-0.02em] text-[#2B211C]">
                La beauté, <em className="italic font-normal text-[#8C4B55]">avec intention.</em>
              </h1>
              <p className="mt-6 max-w-xl text-[16px] md:text-[17px] font-light leading-[1.7] text-[#4E4541]">
                Dans le calme d’un appartement parisien baigné de lumière naturelle, Maison Éclat
                propose des soins du visage sculptants, des rituels manuels lents et une mise en
                beauté fidèle à votre naturel.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link
                  to="/reservation"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap transition-colors hover:bg-[#3B2E27]"
                >
                  Demander un rendez-vous
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-[44px] items-center gap-2 text-[14px] text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B] hover:decoration-[#B76E79] transition-colors whitespace-nowrap"
                >
                  Explorer la carte des soins
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#2B211C]/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#4E4541]">
              <span>Sur rendez-vous uniquement</span>
              <span aria-hidden="true" className="text-[#8A7A6B]">·</span>
              <span>{studioConfig.addressDisplay}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <EditorialImage
              src={studioMedia.heroAtelier.src}
              alt={studioMedia.heroAtelier.alt}
              loading="eager"
              containerClassName="aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[540px] w-full"
            />
          </div>
        </div>
      </section>

      {/* 3. Four Trust Pillars */}
      <section className="border-y border-[#2B211C]/12 bg-[#EDE6DA]/60">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2B211C]/12">
            {trustPillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className={`${index === 0 ? 'lg:pr-8' : 'lg:px-8'} ${
                  index === trustPillars.length - 1 ? 'lg:pr-0' : ''
                } space-y-2.5`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B] tabular-nums">
                  {pillar.number}
                </p>
                <h2 className="font-serif text-[20px] leading-[1.35] text-[#2B211C]">
                  {pillar.title}
                </h2>
                <p className="text-[14px] leading-[1.65] text-[#4E4541]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Signature Treatments */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-[#2B211C]/12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Rituels signatures
            </p>
            <h2 className="mt-3 font-serif text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-[#2B211C]">
              Des soins pensés pour <em className="italic font-normal">ralentir le rythme</em>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B] hover:decoration-[#B76E79] transition-colors whitespace-nowrap shrink-0"
          >
            Voir toute la carte
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {signatureTreatments.map((service) => (
            <ServiceCard key={service.slug} service={service} surface="beige" />
          ))}
        </div>
      </section>

      {/* 5. Studio Philosophy and Approach */}
      <section className="border-y border-[#2B211C]/12 bg-[#EDE6DA]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <EditorialImage
                src={studioMedia.rituelCorps.src}
                alt={studioMedia.rituelCorps.alt}
                containerClassName="aspect-[4/3] w-full"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                Philosophie du studio
              </p>
              <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-[#2B211C]">
                Prendre le temps d’écouter ce dont votre peau a réellement besoin
              </h2>
              <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
                Chez Maison Éclat, aucun protocole n’est figé d’avance. Avant chaque geste, nous
                prenons quelques minutes pour observer la texture de votre peau, sentir les zones
                de tension et adapter nos huiles végétales ainsi que le rythme du toucher.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#4E4541]">
                Nous croyons à une esthétique douce, sans promesses irréalistes ni gestes invasifs,
                où le confort et la régularité l’emportent sur l’artifice.
              </p>
              <div className="pt-2">
                <Link
                  to="/notre-approche"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-[4px] border border-[#8A7A6B] px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
                >
                  Découvrir notre approche
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Specialist / Founder Introduction */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 lg:order-2">
            <EditorialImage
              src={studioMedia.founderPortrait.src}
              alt={studioMedia.founderPortrait.alt}
              containerClassName="aspect-[3/4] max-w-lg mx-auto lg:ml-auto w-full"
            />
          </div>

          <div className="lg:col-span-6 lg:order-1 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              La fondatrice
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-[#2B211C]">
              {studioConfig.founderName}, <em className="italic font-normal">praticienne et créatrice du lieu</em>
            </h2>
            <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
              Passionnée par le geste manuel, la botanique et la justesse des soins d’atelier,
              Camille Laurent a imaginé Maison Éclat comme un refuge lumineux loin des instituts
              pressés.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#4E4541]">
              Chaque rendez-vous est pensé en tête-à-tête, avec une attention portée à la respiration,
              à la chaleur du linge en lin et à la précision du mouvement, pour offrir une parenthèse
              sincèrement apaisante.
            </p>
            <div className="pt-2">
              <Link
                to="/notre-approche"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B] hover:decoration-[#B76E79] transition-colors"
              >
                Lire l’histoire du studio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Studio Atmosphere */}
      <section className="border-t border-[#2B211C]/12 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                L’atmosphère du studio
              </p>
              <h2 className="mt-3 font-serif text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-[#2B211C]">
                Une adresse confidentielle au cœur du Marais
              </h2>
            </div>
            <p className="lg:col-span-5 text-[15px] leading-[1.7] text-[#4E4541]">
              Murs à la chaux ivoire, pierre de travertin, rideaux de lin filtrant la lumière
              parisienne : tout a été dessiné pour apaiser le regard dès l’entrée.
            </p>
          </div>

          <EditorialImage
            src={studioMedia.studioInterior.src}
            alt={studioMedia.studioInterior.alt}
            containerClassName="aspect-[16/9] w-full"
          />
        </div>
      </section>

      {/* 8. Bridal Feature */}
      <section className="border-y border-[#2B211C]/12 bg-[#EDE6DA]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <EditorialImage
                src={studioMedia.bridalEditorial.src}
                alt={studioMedia.bridalEditorial.alt}
                containerClassName="aspect-[3/4] w-full"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8C4B55]">
                Accompagnement Mariée
              </p>
              <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.015em] text-[#2B211C]">
                Votre mise en beauté du jour J, <em className="italic font-normal">tout en justesse</em>
              </h2>
              <p className="text-[16px] font-light leading-[1.7] text-[#4E4541] max-w-2xl">
                Un teint lumineux qui traverse la journée sans se figer, un regard doux et une
                préparation de peau sur-mesure en amont. Nous accompagnons les futures mariées lors
                d’un essai calme au studio puis le matin de la cérémonie.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/mariage"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] transition-colors hover:bg-[#3B2E27]"
                >
                  Découvrir l’expérience mariée
                </Link>
                <Link
                  to="/reservation?service=accompagnement-beaute-mariee"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
                >
                  Demander une disponibilité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Questions fréquentes
            </p>
            <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.2] text-[#2B211C]">
              Préparer votre venue au studio
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4E4541]">
              Maison Éclat est un studio fictif de démonstration. Retrouvez ci-dessous les réponses
              aux questions courantes sur le fonctionnement du prototype.
            </p>
          </div>

          <div className="lg:col-span-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* 10. Final Booking CTA */}
      <section className="border-t border-[#2B211C]/12 bg-[#F7F1E8]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 pb-16 md:pb-24">
          <div className="border border-[#8A7A6B]/30 rounded-[4px] bg-[#EDE6DA] px-6 py-12 md:px-14 md:py-16 text-center space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Rendez-vous sur demande
            </p>
            <h2 className="mx-auto max-w-2xl font-serif text-[28px] md:text-[40px] leading-[1.2] text-[#2B211C]">
              Accorder un moment de calme à votre peau
            </h2>
            <p className="mx-auto max-w-xl text-[15px] leading-[1.7] text-[#4E4541]">
              Choisissez le soin qui vous appelle, indiquez votre date et le créneau souhaité :
              nous revenons vers vous personnellement pour confirmer votre séance.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/reservation"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-8 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] transition-colors hover:bg-[#3B2E27]"
              >
                Préparer ma demande
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
              >
                Coordonnées du studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
