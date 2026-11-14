import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { studioConfig } from '../config/studioConfig';
import { studioMedia } from '../data/media';
import { EditorialImage } from '../components/EditorialImage';

export function AboutPage() {
  return (
    <div>
      {/* Header & Philosophy */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 pt-12 pb-16 md:pt-18 md:pb-24">
        <div className="max-w-3xl space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
            Notre approche
          </p>
          <h1 className="font-serif text-[36px] md:text-[52px] leading-[1.14] tracking-[-0.02em] text-[#2B211C]">
            Un refuge parisien dédié au geste juste et à la <em className="italic font-normal">lenteur</em>
          </h1>
          <p className="text-[16px] md:text-[17px] font-light leading-[1.75] text-[#4E4541]">
            Maison Éclat est née d’un constat simple : la beauté gagne à être abordée sans hâte ni
            surenchère. Au lieu d’enchaîner des protocoles mécaniques, nous consacrons chaque
            rendez-vous à l’écoute de votre peau et au relâchement des traits.
          </p>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="border-y border-[#2B211C]/12 bg-[#EDE6DA]">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <EditorialImage
                src={studioMedia.founderPortrait.src}
                alt={studioMedia.founderPortrait.alt}
                containerClassName="aspect-[3/4] w-full"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                Rencontre · {studioConfig.founderName}
              </p>
              <h2 className="font-serif text-[28px] md:text-[38px] leading-[1.2] text-[#2B211C]">
                Une pratique guidée par l’attention et la simplicité
              </h2>
              <p className="text-[15px] leading-[1.75] text-[#4E4541]">
                Fondatrice de Maison Éclat, Camille Laurent reçoit personnellement chaque cliente
                dans une atmosphère calme et chaleureuse. Son travail s’appuie sur le plaisir du
                toucher manuel, le respect des rythmes cutanés et le choix de formules botaniques
                douces.
              </p>
              <p className="text-[15px] leading-[1.75] text-[#4E4541]">
                Chaque séance est ajustée sur l’instant selon votre niveau de fatigue, la météo
                parisienne ou la sensibilité passagère de votre peau, sans jamais formuler de
                promesse médicale ni imposer de routine compliquée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Pillars */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t border-[#2B211C]/20 pt-6 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              01 · L’écoute
            </p>
            <h3 className="font-serif text-2xl text-[#2B211C]">Un échange avant chaque soin</h3>
            <p className="text-[14px] leading-[1.7] text-[#4E4541]">
              Nous prenons dix minutes autour d’une infusion tiède pour comprendre vos attentes du
              jour avant de commencer le soin.
            </p>
          </div>

          <div className="border-t border-[#2B211C]/20 pt-6 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              02 · Le geste
            </p>
            <h3 className="font-serif text-2xl text-[#2B211C]">La main plutôt que la machine</h3>
            <p className="text-[14px] leading-[1.7] text-[#4E4541]">
              Lissage Kobido, drainage léger, modelage crânien : la pression s’adapte finement à
              chaque zone du visage et des épaules.
            </p>
          </div>

          <div className="border-t border-[#2B211C]/20 pt-6 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
              03 · La matière
            </p>
            <h3 className="font-serif text-2xl text-[#2B211C]">Des textures pures et sobres</h3>
            <p className="text-[14px] leading-[1.7] text-[#4E4541]">
              Huiles végétales pressées à froid, hydrolats doux et linge en lin lavé composent un
              cadre sensoriel apaisant et respectueux.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Atmosphere */}
      <section className="border-t border-[#2B211C]/12 bg-[#EDE6DA]/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A7A6B]">
                Le lieu · {studioConfig.addressDisplay}
              </p>
              <h2 className="font-serif text-[28px] md:text-[38px] leading-[1.2] text-[#2B211C]">
                Une parenthèse lumineuse dans le Marais
              </h2>
            </div>
            <Link
              to="/reservation"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] bg-[#2B211C] px-7 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#F7F1E8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#3B2E27]"
            >
              Demander un rendez-vous
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <EditorialImage
            src={studioMedia.studioInterior.src}
            alt={studioMedia.studioInterior.alt}
            containerClassName="aspect-[16/9] w-full"
          />
        </div>
      </section>
    </div>
  );
}
