import { useSearchParams, Link } from 'react-router-dom';
import { Clock, Mail, MapPin } from 'lucide-react';
import { studioConfig } from '../config/studioConfig';
import { BookingForm } from '../components/BookingForm';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const initialServiceSlug = searchParams.get('service') ?? '';

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-12 md:py-20">
      <div className="max-w-3xl space-y-4 pb-10 border-b border-[#2B211C]/12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
          Demande de rendez-vous · Démonstration
        </p>
        <h1 className="font-serif text-[34px] md:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#2B211C]">
          Préparer votre <em className="italic font-normal">prochaine séance</em>
        </h1>
        <p className="text-[16px] font-light leading-[1.7] text-[#4E4541]">
          Ce formulaire est une démonstration de portfolio : il valide vos choix localement dans
          votre navigateur et génère un aperçu de demande, sans envoi vers un véritable studio ni
          blocage de créneau réel.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-8">
          <BookingForm initialServiceSlug={initialServiceSlug} />
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-[#8A7A6B]/25 rounded-[4px] bg-[#EDE6DA] p-6 space-y-5">
            <h2 className="font-serif text-xl text-[#2B211C]">Informations de démonstration</h2>

            <div className="space-y-4 text-[14px] text-[#4E4541]">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#8A7A6B] mt-1 shrink-0" aria-hidden="true" />
                <div className="space-y-1">
                  <p className="font-medium text-[#2B211C]">Horaires fictifs</p>
                  {studioConfig.openingHours.map((row) => (
                    <p key={row.days}>
                      {row.days} : {row.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#8A7A6B] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[#2B211C]">{studioConfig.addressDisplay}</p>
                  <p className="text-[13px] text-[#8A7A6B] mt-1">{studioConfig.metroAccess}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#8A7A6B] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[#2B211C]">E-mail de démonstration</p>
                  <p className="break-all">{studioConfig.email}</p>
                  <p className="text-[12px] text-[#8A7A6B] mt-0.5">{studioConfig.emailNote}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#8A7A6B]/20 text-[13px] leading-relaxed text-[#4E4541]">
              Vous souhaitez revoir les soins proposés ?{' '}
              <Link
                to="/services"
                className="text-[#2B211C] underline underline-offset-4 decoration-[#8A7A6B] hover:decoration-[#B76E79]"
              >
                Consulter la carte complète
              </Link>
              .
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
