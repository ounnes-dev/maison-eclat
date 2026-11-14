import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import { formatDuration, formatEurPrice } from '../utils/booking';
import { EditorialImage } from '../components/EditorialImage';
import { FaqAccordion } from '../components/FaqAccordion';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-5 md:px-10 py-20 md:py-28 text-center space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
          Soin introuvable
        </p>
        <h1 className="font-serif text-[32px] md:text-[42px] leading-tight text-[#2B211C]">
          Ce soin ne figure pas dans notre carte actuelle
        </h1>
        <p className="text-[15px] leading-relaxed text-[#4E4541]">
          L’adresse demandée semble inexacte ou le soin a été déplacé. Nous vous invitons à
          parcourir l’ensemble de nos soins disponibles.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8]"
          >
            Voir tous les soins
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C]"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-10 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Fil d’Ariane" className="mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[13px] text-[#4E4541] hover:text-[#2B211C] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Retour à la carte des soins
        </Link>
      </nav>

      {/* Top Editorial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-14 border-b border-[#2B211C]/12">
        <div className="lg:col-span-6">
          <EditorialImage
            src={service.image.src}
            alt={service.image.alt}
            loading="eager"
            containerClassName="aspect-[4/3] w-full"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-[#8A7A6B]">
            <span>{service.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{service.code}</span>
          </div>

          <h1 className="font-serif text-[32px] md:text-[44px] leading-[1.15] tracking-[-0.015em] text-[#2B211C]">
            {service.name}
          </h1>

          <div className="flex flex-wrap items-baseline gap-6 py-4 border-y border-[#2B211C]/12">
            <div>
              <span className="block text-[11px] uppercase tracking-[0.12em] text-[#8A7A6B]">
                Durée
              </span>
              <span className="font-serif text-xl text-[#2B211C] tabular-nums">
                {formatDuration(service.durationMinutes)}
              </span>
            </div>
            <div className="h-8 w-[1px] bg-[#2B211C]/12" aria-hidden="true" />
            <div>
              <span className="block text-[11px] uppercase tracking-[0.12em] text-[#8A7A6B]">
                Tarif
              </span>
              <span className="font-serif text-xl text-[#2B211C] tabular-nums">
                {formatEurPrice(service.priceEur)}
              </span>
            </div>
          </div>

          <p className="text-[16px] font-light leading-[1.75] text-[#4E4541]">
            {service.intro}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              to={`/reservation?service=${encodeURIComponent(service.slug)}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] transition-colors hover:bg-[#3B2E27]"
            >
              Demander ce soin
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C] transition-colors hover:bg-[#B76E79]/10"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 border-b border-[#2B211C]/12">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#2B211C]">Pour qui est pensé ce soin ?</h2>
          <ul className="space-y-3 text-[15px] leading-[1.65] text-[#4E4541]">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#B76E79]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#2B211C]">Ce que comprend la séance</h2>
          <ul className="space-y-3 text-[15px] leading-[1.65] text-[#4E4541]">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-[#2B211C]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 md:p-8 space-y-4">
          <h2 className="font-serif text-[22px] text-[#2B211C]">Conseils de préparation</h2>
          <ul className="space-y-2.5 text-[14px] leading-[1.65] text-[#4E4541]">
            {service.preparationAdvice.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-[#8A7A6B]">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 md:p-8 space-y-4">
          <h2 className="font-serif text-[22px] text-[#2B211C]">Après la séance</h2>
          <ul className="space-y-2.5 text-[14px] leading-[1.65] text-[#4E4541]">
            {service.aftercareAdvice.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-[#8A7A6B]">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Service FAQ & Final CTA */}
      {service.faqs.length > 0 && (
        <section className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Questions pratiques
            </p>
            <h2 className="font-serif text-2xl text-[#2B211C]">À propos de ce rendez-vous</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </section>
      )}
    </div>
  );
}
