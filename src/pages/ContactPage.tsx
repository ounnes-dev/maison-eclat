import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin } from 'lucide-react';
import { studioConfig } from '../config/studioConfig';
import { studioMedia } from '../data/media';
import { EditorialImage } from '../components/EditorialImage';

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-12 md:py-20 space-y-14">
      <header className="max-w-3xl space-y-4 pb-10 border-b border-[#2B211C]/12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
          Contact &amp; Accès
        </p>
        <h1 className="font-serif text-[36px] md:text-[50px] leading-[1.15] tracking-[-0.02em] text-[#2B211C]">
          Maison Éclat, <em className="italic font-normal">projet de démonstration</em>
        </h1>
        <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
          Maison Éclat est une maison fictive conçue comme étude de portfolio. Aucune adresse
          physique, ligne téléphonique ni boîte de réception réelle n’est associée à ce site.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Contact Details Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>Localisation</span>
            </div>
            <p className="font-serif text-xl text-[#2B211C]">{studioConfig.addressDisplay}</p>
            <p className="text-[13px] text-[#8A7A6B] pt-1">{studioConfig.metroAccess}</p>
          </div>

          <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Horaires fictifs</span>
            </div>
            <ul className="space-y-2 text-[14px] text-[#4E4541]">
              {studioConfig.openingHours.map((row) => (
                <li key={row.days}>
                  <span className="block font-medium text-[#2B211C]">{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 space-y-3 sm:col-span-2">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Adresse e-mail de démonstration</span>
            </div>
            <p className="font-serif text-xl text-[#2B211C] break-all">{studioConfig.email}</p>
            <p className="text-[13px] leading-relaxed text-[#4E4541]">
              {studioConfig.emailNote}. Les messages ne sont ni acheminés ni traités par un véritable
              studio.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-5 text-[13px]">
              <a
                href={studioConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E4541] underline underline-offset-4 decoration-[#8A7A6B]/50 hover:text-[#2B211C]"
              >
                Instagram
              </a>
              <a
                href={studioConfig.socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E4541] underline underline-offset-4 decoration-[#8A7A6B]/50 hover:text-[#2B211C]"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Studio Visual + Demonstration Notice */}
        <div className="lg:col-span-5 space-y-6">
          <EditorialImage
            src={studioMedia.studioInterior.src}
            alt={studioMedia.studioInterior.alt}
            containerClassName="aspect-[16/9] w-full"
          />

          <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Note de démonstration
            </p>
            <h2 className="font-serif text-2xl text-[#2B211C]">
              {studioConfig.addressDisplay}
            </h2>
            <p className="text-[14px] leading-relaxed text-[#4E4541]">
              Cet espace présente l’interface complète d’un studio parisien fictif. Vous pouvez
              tester le simulateur de demande de rendez-vous sans qu’aucune donnée ne soit transmise
              à une entreprise réelle.
            </p>
            <div className="pt-2">
              <Link
                to="/reservation"
                className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#2B211C] px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] transition-colors hover:bg-[#3B2E27]"
              >
                Tester le formulaire de demande
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
