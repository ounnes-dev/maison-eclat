import { useState } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories, servicesCatalog } from '../data/services';
import type { ServiceCategoryId } from '../types/studio';
import { ServiceCard } from '../components/ServiceCard';

type FilterValue = 'all' | ServiceCategoryId;

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterValue>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-12 md:py-20">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4 pb-10 border-b border-[#2B211C]/12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
          Carte des soins · Paris
        </p>
        <h1 className="font-serif text-[36px] md:text-[50px] leading-[1.15] tracking-[-0.02em] text-[#2B211C]">
          Soins &amp; rituels <em className="italic font-normal">sur-mesure</em>
        </h1>
        <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
          Chaque prestation est réalisée dans le calme d’une cabine privée. Tous nos soins relèvent
          exclusivement de l’esthétique et du bien-être, sans acte ni promesse médicale.
        </p>
      </header>

      {/* Interactive Category Filter Controls */}
      <nav
        aria-label="Filtrer par catégorie de soin"
        className="py-6 border-b border-[#2B211C]/12 flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`min-h-[40px] rounded-[4px] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#2B211C] text-[#F7F1E8]'
              : 'bg-[#EDE6DA] text-[#4E4541] hover:text-[#2B211C] border border-[#8A7A6B]/25'
          }`}
        >
          Tous les soins
        </button>

        {serviceCategories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`min-h-[40px] rounded-[4px] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#2B211C] text-[#F7F1E8]'
                  : 'bg-[#EDE6DA] text-[#4E4541] hover:text-[#2B211C] border border-[#8A7A6B]/25'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </nav>

      {/* Categorized Services */}
      <div className="divide-y divide-[#2B211C]/12">
        {visibleCategories.map((category) => {
          const items = servicesCatalog.filter((service) => service.categoryId === category.id);
          return (
            <section
              key={category.id}
              id={category.id}
              className="py-12 md:py-16 space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-[26px] md:text-[34px] leading-[1.25] text-[#2B211C]">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#4E4541]">
                    {category.subtitle}
                  </p>
                </div>
                <span className="text-[12px] uppercase tracking-[0.1em] text-[#8A7A6B] tabular-nums">
                  {items.length} {items.length > 1 ? 'prestations' : 'prestation'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
                {items.map((service) => (
                  <ServiceCard key={service.slug} service={service} surface="beige" />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Notice & Booking CTA */}
      <section className="mt-6 border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-serif text-2xl text-[#2B211C]">
            Besoin d’un conseil avant de choisir votre soin ?
          </h2>
          <p className="text-[14px] leading-relaxed text-[#4E4541]">
            Indiquez vos attentes dans votre demande de rendez-vous : nous ajusterons volontiers
            le protocole lors de votre accueil au studio. (Les tarifs et prestations complémentaires
            sont présentés à titre de démonstration fictive.)
          </p>
        </div>
        <Link
          to="/reservation"
          className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#3B2E27]"
        >
          Demander un rendez-vous
        </Link>
      </section>
    </div>
  );
}
