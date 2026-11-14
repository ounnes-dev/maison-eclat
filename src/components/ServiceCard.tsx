import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../types/studio';
import { formatDuration, formatEurPrice } from '../utils/booking';
import { EditorialImage } from './EditorialImage';

interface ServiceCardProps {
  service: ServiceItem;
  surface?: 'ivory' | 'beige';
}

export function ServiceCard({ service, surface = 'beige' }: ServiceCardProps) {
  const bgClass = surface === 'ivory' ? 'bg-[#F7F1E8]' : 'bg-[#EDE6DA]';

  return (
    <article
      className={`group flex flex-col justify-between border border-[#8A7A6B]/25 rounded-[4px] ${bgClass} transition-colors duration-200 hover:border-[#8A7A6B]/50`}
    >
      <div>
        <Link to={`/services/${service.slug}`} className="block overflow-hidden">
          <EditorialImage
            src={service.image.src}
            alt={service.image.alt}
            containerClassName="aspect-[4/3] w-full"
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        <div className="p-6 md:p-7">
          {/* Unboxed metadata with typographic separators */}
          <div className="flex flex-wrap items-center gap-2 text-[12px] tracking-[0.06em] uppercase text-[#8A7A6B]">
            <span>{service.code}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{formatDuration(service.durationMinutes)}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums text-[#2B211C] font-medium">
              {formatEurPrice(service.priceEur)}
            </span>
          </div>

          <h3 className="mt-3 font-serif text-[22px] leading-[1.3] text-[#2B211C]">
            <Link
              to={`/services/${service.slug}`}
              className="hover:text-[#8C4B55] transition-colors duration-200"
            >
              {service.name}
            </Link>
          </h3>

          <p className="mt-2.5 text-[14px] leading-[1.65] text-[#4E4541]">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="px-6 md:px-7 pb-6 pt-3 border-t border-[#8A7A6B]/15 flex items-center justify-between gap-4">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B]/60 hover:decoration-[#B76E79] transition-colors whitespace-nowrap shrink-0"
        >
          Découvrir le soin
        </Link>

        <Link
          to={`/reservation?service=${encodeURIComponent(service.slug)}`}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#8C4B55] hover:text-[#2B211C] transition-colors whitespace-nowrap shrink-0"
        >
          Demander
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
