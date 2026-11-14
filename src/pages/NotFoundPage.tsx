import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 md:px-10 py-24 md:py-32 text-center space-y-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
        Page introuvable
      </p>
      <h1 className="font-serif text-[34px] md:text-[46px] leading-tight text-[#2B211C]">
        Cette page n’existe pas
      </h1>
      <p className="text-[15px] leading-relaxed text-[#4E4541]">
        Le lien suivi semble déplacé ou incorrect. Vous pouvez revenir à l’accueil ou consulter notre
        carte des soins.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8]"
        >
          Retour à l’accueil
        </Link>
        <Link
          to="/services"
          className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-[#8A7A6B] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#2B211C]"
        >
          Voir les soins
        </Link>
      </div>
    </div>
  );
}
