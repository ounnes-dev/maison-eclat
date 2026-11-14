import { Link } from 'react-router-dom';
import { studioConfig } from '../config/studioConfig';

export function Footer() {
  return (
    <footer className="border-t border-[#2B211C]/12 bg-[#EDE6DA] text-[#2B211C]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="font-serif text-2xl tracking-[-0.01em] text-[#2B211C] inline-block">
              {studioConfig.brandName}
            </Link>
            <p className="font-serif italic text-base text-[#4E4541]">
              {studioConfig.tagline}
            </p>
            <p className="text-[13px] leading-relaxed text-[#4E4541] max-w-xs">
              Studio parisien dédié aux soins manuels du visage, aux rituels corporels apaisants et à la mise en beauté naturelle.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link to="/services" className="text-[#2B211C] hover:text-[#8C4B55] transition-colors">
                  Carte des soins
                </Link>
              </li>
              <li>
                <Link to="/mariage" className="text-[#2B211C] hover:text-[#8C4B55] transition-colors">
                  Accompagnement Mariée
                </Link>
              </li>
              <li>
                <Link to="/notre-approche" className="text-[#2B211C] hover:text-[#8C4B55] transition-colors">
                  Notre approche
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-[#2B211C] hover:text-[#8C4B55] transition-colors">
                  Demande de rendez-vous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#2B211C] hover:text-[#8C4B55] transition-colors">
                  Contact &amp; Accès
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Le Studio
            </h2>
            <address className="not-italic text-[14px] leading-relaxed text-[#4E4541] space-y-1.5">
              <p className="text-[#2B211C] font-medium">{studioConfig.addressDisplay}</p>
              <p className="pt-1 text-[#2B211C]">{studioConfig.email}</p>
              <p className="text-[12px] text-[#8A7A6B]">
                {studioConfig.emailNote}
              </p>
            </address>
          </div>

          {/* Hours & Social */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              Horaires
            </h2>
            <ul className="space-y-2 text-[13px] text-[#4E4541]">
              {studioConfig.openingHours.map((row) => (
                <li key={row.days}>
                  <span className="block text-[#2B211C]">{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex items-center gap-4 text-[13px]">
              <a
                href={studioConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B]/50 hover:decoration-[#B76E79] transition-colors"
              >
                Instagram
              </a>
              <a
                href={studioConfig.socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B]/50 hover:decoration-[#B76E79] transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#8A7A6B]/25 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[12px] text-[#4E4541]">
          <p>© {new Date().getFullYear()} {studioConfig.brandName} — Paris. Tous droits réservés.</p>
          <p>Site de démonstration fictif — Coordonnées et tarifs présentés à titre d’exemple.</p>
        </div>
      </div>
    </footer>
  );
}
