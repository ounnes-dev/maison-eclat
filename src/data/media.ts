import heroAtelierImg from '../assets/images/hero_paris_atelier_1794653059648.jpg';
import soinVisageImg from '../assets/images/treatment_soin_visage_1794653061096.jpg';
import rituelCorpsImg from '../assets/images/treatment_rituel_corps_1794653061277.jpg';
import onglesManucureImg from '../assets/images/treatment_ongles_manucure_1794653062387.jpg';
import founderPortraitImg from '../assets/images/founder_studio_portrait_1794653063481.jpg';
import studioInteriorImg from '../assets/images/studio_interior_paris_1794653062832.jpg';
import bridalMaisonImg from '../assets/images/bridal_maison_eclat_1794653062725.jpg';
import type { MediaAsset } from '../types/studio';

export const studioMedia = {
  heroAtelier: {
    src: heroAtelierImg,
    alt: 'Praticienne réalisant un massage facial sculptant dans une cabine baignée de lumière naturelle chez Maison Éclat à Paris',
    aspectRatio: '3:4',
  } satisfies MediaAsset,

  soinVisage: {
    src: soinVisageImg,
    alt: 'Geste manuel précis lors d’un soin du visage Kobido avec huile botanique et linge en lin naturel',
    aspectRatio: '4:3',
  } satisfies MediaAsset,

  rituelCorps: {
    src: rituelCorpsImg,
    alt: 'Flacon d’huile botanique ambrée, bol en céramique artisanale et linge en lin posés sur du travertin',
    aspectRatio: '4:3',
  } satisfies MediaAsset,

  onglesManucure: {
    src: onglesManucureImg,
    alt: 'Mains soignées à la manucure minimaliste naturelle posées sur du lin écru et de la pierre de travertin',
    aspectRatio: '4:3',
  } satisfies MediaAsset,

  founderPortrait: {
    src: founderPortraitImg,
    alt: 'Camille Laurent, fondatrice de Maison Éclat, dans son studio parisien en tenue de lin ivoire',
    aspectRatio: '3:4',
  } satisfies MediaAsset,

  studioInterior: {
    src: studioInteriorImg,
    alt: 'Salon d’accueil de Maison Éclat dans le Marais à Paris avec fauteuils en bouclette beige, travertin et hautes fenêtres',
    aspectRatio: '16:9',
  } satisfies MediaAsset,

  bridalEditorial: {
    src: bridalMaisonImg,
    alt: 'Portrait de mariée à la mise en beauté naturelle et lumineuse devant une fenêtre haussmannienne à Paris',
    aspectRatio: '3:4',
  } satisfies MediaAsset,
};
