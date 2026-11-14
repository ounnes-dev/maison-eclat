import type { ServiceCategory, ServiceItem } from '../types/studio';
import { studioMedia } from './media';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'soins-du-visage',
    name: 'Soins du visage',
    subtitle: 'Gestes manuels sculptants, drainage doux et actifs botaniques adaptés à l’état de votre peau.',
  },
  {
    id: 'massage-et-rituels',
    name: 'Massage et rituels',
    subtitle: 'Parenthèses sensorielles pensées pour relâcher les tensions musculaires et apaiser le rythme.',
  },
  {
    id: 'ongles',
    name: 'Ongles',
    subtitle: 'Beauté naturelle des mains et des pieds avec soins doux des cuticules et finitions épurées.',
  },
  {
    id: 'regard',
    name: 'Regard',
    subtitle: 'Mise en valeur discrète de la ligne des sourcils et de la courbure des cils dans le respect du naturel.',
  },
  {
    id: 'maquillage',
    name: 'Maquillage',
    subtitle: 'Teint frais, textures secondes peaux et accompagnement sur-mesure pour vos moments précieux.',
  },
];

export const servicesCatalog: ServiceItem[] = [
  {
    slug: 'kobido-sculptant-eclat',
    code: 'VIS-01',
    categoryId: 'soins-du-visage',
    categoryLabel: 'Soins du visage',
    name: 'Kobido & Sculptant Éclat',
    shortDescription:
      'Soin manuel rythmé alliant lissage profond, drainage doux et pressions ciblées pour défatiguer les traits.',
    intro:
      'Inspiré de la gestuelle traditionnelle japonaise, ce soin signature travaille en finesse la détente des tensions du visage, de la mâchoire et de la nuque. Chaque séance commence par un temps d’échange calme afin d’ajuster la pression et le choix des huiles végétales à la sensibilité du jour.',
    durationMinutes: 75,
    priceEur: 145,
    featuredOnHome: true,
    image: studioMedia.soinVisage,
    suitableFor: [
      'Personnes ressentant des tensions au niveau de la mâchoire ou du front',
      'Peaux ternes ou fatiguées en quête de fraîcheur et de confort',
      'Celles et ceux qui privilégient un geste 100 % manuel sans appareil',
    ],
    includes: [
      'Diagnostic tactile et échange personnalisé (10 min)',
      'Double nettoyage doux aux hydrolats tièdes',
      'Modelage Kobido et drainage du visage, cou et trapèzes (50 min)',
      'Application d’un sérum botanique et infusion tiède offerte',
    ],
    preparationAdvice: [
      'Venez idéalement démaquillée si possible ; un démaquillage complet reste inclus au début du soin.',
      'Signalez toute sensibilité cutanée récente ou zone à éviter lors de notre échange d’accueil.',
    ],
    aftercareAdvice: [
      'Hydratez-vous régulièrement dans les heures suivant la séance.',
      'Évitez les gommages ou soins exfoliants le soir même pour laisser la peau profiter de l’huile botanique.',
    ],
    faqs: [
      {
        id: 'kobido-frequency',
        question: 'À quelle fréquence recommandez-vous ce soin ?',
        answer:
          'Beaucoup de clientes apprécient une séance ponctuelle avant un événement ou un rythme mensuel pour entretenir cette sensation de détente musculaire. Nous définissons ensemble ce qui convient à votre emploi du temps.',
      },
      {
        id: 'kobido-sensitive',
        question: 'Convient-il aux peaux réactives ou sensibles ?',
        answer:
          'Oui, la gestuelle et les huiles végétales neutres sans huiles essentielles sont modulées avec douceur selon la sensibilité de votre peau.',
      },
    ],
  },
  {
    slug: 'soin-botanique-sur-mesure',
    code: 'VIS-02',
    categoryId: 'soins-du-visage',
    categoryLabel: 'Soins du visage',
    name: 'Soin Botanique Sur-Mesure',
    shortDescription:
      'Protocole enveloppant dédié à l’hydratation et au confort de la barrière cutanée avec compresses chaudes.',
    intro:
      'Pensé pour les peaux assoiffées par le climat urbain ou les changements de saison, ce soin privilégie le réconfort, la douceur des textures crémeuses et la lenteur des gestes enveloppants.',
    durationMinutes: 60,
    priceEur: 120,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.rituelCorps,
    suitableFor: [
      'Peaux sèches, déshydratées ou inconfortables',
      'Moments de fatigue saisonnière nécessitant un soin apaisant',
      'Première découverte du studio Maison Éclat',
    ],
    includes: [
      'Lecture attentive des besoins de la peau et choix des formules',
      'Nettoyage lacté et serviettes chaudes infusées à la camomille',
      'Masque crème réconfortant et massage crânien pendant la pose',
      'Voile hydratant protecteur en fin de séance',
    ],
    preparationAdvice: [
      'Évitez d’appliquer un soin rétinoïde ou acide la veille de votre visite.',
      'Prévoyez quelques minutes d’avance pour savourer une tisane avant le soin.',
    ],
    aftercareAdvice: [
      'Protégez votre visage avec une crème adaptée ou un SPF doux le lendemain matin.',
      'Conservez une routine épurée pendant 24 heures.',
    ],
    faqs: [
      {
        id: 'botanique-makeup',
        question: 'Puis-je me maquiller juste après le soin ?',
        answer:
          'Il est préférable de laisser la peau respirer quelques heures après le soin, bien qu’un baume à lèvres ou une touche légère reste tout à fait possible.',
      },
    ],
  },
  {
    slug: 'rituel-drainant-lumiere',
    code: 'VIS-03',
    categoryId: 'soins-du-visage',
    categoryLabel: 'Soins du visage',
    name: 'Rituel Drainant & Lumière',
    shortDescription:
      'Mouvements lents à la pierre de quartz tiède et drainage léger du contour des yeux et de l’ovale.',
    intro:
      'Un rendez-vous tout en délicatesse axé sur la légèreté des traits et la détente du regard. Les manœuvres rythmées et très douces accompagnent la micro-circulation dans une atmosphère silencieuse.',
    durationMinutes: 60,
    priceEur: 125,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.heroAtelier,
    suitableFor: [
      'Regards fatigués ou marques de manque de sommeil',
      'Personnes appréciant les pressions très légères et cadencées',
      'Préparation douce avant une soirée ou une prise de parole',
    ],
    includes: [
      'Démaquillage minutieux et brume florale',
      'Drainage manuel lent du visage et du cou',
      'Travail doux du contour des yeux à la pierre de quartz poli',
      'Sérum éclat léger et pause calme',
    ],
    preparationAdvice: [
      'Retirez vos lentilles de contact avant la séance si vous en portez.',
    ],
    aftercareAdvice: [
      'Privilégiez un sommeil réparateur et évitez le sel excessif le soir même pour prolonger la sensation de légèreté.',
    ],
    faqs: [
      {
        id: 'drainant-stones',
        question: 'Les pierres sont-elles désinfectées entre chaque cliente ?',
        answer:
          'Oui, chaque accessoire minéral suit un protocole de nettoyage et de désinfection rigoureux après chaque utilisation.',
      },
    ],
  },
  {
    slug: 'massage-holistique-huiles-tiedes',
    code: 'RIT-01',
    categoryId: 'massage-et-rituels',
    categoryLabel: 'Massage et rituels',
    name: 'Rituel Corps aux Huiles Tièdes',
    shortDescription:
      'Massage lent et enveloppant de l’ensemble du corps aux huiles végétales tiédies de sésame et d’amande.',
    intro:
      'Conçu comme une véritable coupure hors de l’agitation parisienne, ce rituel associe des effleurages longs et continus à des pressions apaisantes pour inviter le corps à relâcher ses appuis.',
    durationMinutes: 75,
    priceEur: 140,
    featuredOnHome: true,
    image: studioMedia.rituelCorps,
    suitableFor: [
      'Fatigue physique ou surcharge mentale',
      'Besoin de chaleur et de continuité dans le toucher',
      'Offrir ou s’offrir un moment d’immobilité sereine',
    ],
    includes: [
      'Choix de la synergie d’huile tiède (neutre ou fleur d’oranger)',
      'Massage complet dos, jambes, bras, ventre et cuir chevelu selon vos souhaits',
      'Linge en lin chauffé et temps de réveil en douceur',
    ],
    preparationAdvice: [
      'Évitez un repas trop copieux juste avant votre rendez-vous.',
      'Indiquez les zones que vous préférez privilégier ou éviter dès votre arrivée.',
    ],
    aftercareAdvice: [
      'Prenez le temps de vous relever doucement et buvez un grand verre d’eau ou une tisane.',
      'L’huile végétale nourrit la peau : patientez quelques heures avant la douche si possible.',
    ],
    faqs: [
      {
        id: 'massage-medical',
        question: 'S’agit-il d’un massage thérapeutique ou médical ?',
        answer:
          'Non, nos massages sont exclusivement des rituels esthétiques de bien-être et de détente, sans visée médicale ou kinésithérapeutique.',
      },
    ],
  },
  {
    slug: 'rituel-delassant-dos-nuque',
    code: 'RIT-02',
    categoryId: 'massage-et-rituels',
    categoryLabel: 'Massage et rituels',
    name: 'Délassement Dos, Nuque & Crâne',
    shortDescription:
      'Soin ciblé sur le haut du corps pour soulager les tensions posturales liées au travail sur écran.',
    intro:
      'Un format concentré sur les zones les plus sollicitées au quotidien — omoplates, trapèzes, nuque et cuir chevelu — à l’aide de baumes fondants et de manœuvres profondes mais toujours respectueuses.',
    durationMinutes: 45,
    priceEur: 90,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.soinVisage,
    suitableFor: [
      'Tensions dans les épaules et la nuque',
      'Pause régénérante en milieu de journée',
      'Complément idéal après un soin du visage',
    ],
    includes: [
      'Application de serviette chaude sur le haut du dos',
      'Travail ciblé des trapèzes, de la nuque et des épaules',
      'Modelage apaisant du cuir chevelu sans graisser les longueurs',
    ],
    preparationAdvice: [
      'Détachez vos cheveux si vous souhaitez profiter pleinement du massage crânien.',
    ],
    aftercareAdvice: [
      'Étirez doucement les épaules et évitez les courants d’air froid juste après la sortie du studio.',
    ],
    faqs: [
      {
        id: 'dos-pression',
        question: 'Puis-je demander une pression plus douce ou plus appuyée ?',
        answer:
          'Bien sûr, la pression est ajustée en temps réel selon votre ressenti tout au long de la séance.',
      },
    ],
  },
  {
    slug: 'manucure-minimaliste-soin-cuticules',
    code: 'ONG-01',
    categoryId: 'ongles',
    categoryLabel: 'Ongles',
    name: 'Manucure Minimaliste & Soin',
    shortDescription:
      'Limage précis, travail soigné des cuticules, massage des mains et pose d’un vernis transparent ou nude.',
    intro:
      'Une approche épurée de la manucure qui met la santé et l’aspect net de l’ongle naturel au premier plan, loin des poses artificielles épaisses. Les mains ressortent souples, soignées et discrètement satinées.',
    durationMinutes: 45,
    priceEur: 60,
    featuredOnHome: true,
    image: studioMedia.onglesManucure,
    suitableFor: [
      'Adeptes d’ongles courts ou mi-longs à l’allure naturelle',
      'Mains sèches ou fragilisées par le froid',
      'Préparation sobre avant un mariage ou un rendez-vous professionnel',
    ],
    includes: [
      'Limage sur-mesure respectant la forme naturelle de l’ongle',
      'Soin doux des cuticules sans agression',
      'Modelage des mains au baume de karité et huile de noyau d’abricot',
      'Base fortifiante ou vernis classique éco-sourcé (nuancier nude, ivoire, rose poudré)',
    ],
    preparationAdvice: [
      'Merci d’arriver avec des ongles nus (sans semi-permanent posé en extérieur) ou de le préciser lors de votre demande.',
    ],
    aftercareAdvice: [
      'Appliquez une goutte d’huile végétale sur le pourtour des ongles chaque soir pour préserver leur souplesse.',
    ],
    faqs: [
      {
        id: 'ongles-semi',
        question: 'Proposez-vous des poses en gel ou capsules ?',
        answer:
          'Maison Éclat se consacre exclusivement à la beauté de l’ongle naturel avec des bases soins et vernis classiques respirants.',
      },
    ],
  },
  {
    slug: 'beaute-des-pieds-botanique',
    code: 'ONG-02',
    categoryId: 'ongles',
    categoryLabel: 'Ongles',
    name: 'Beauté des Pieds Botanique',
    shortDescription:
      'Bain tiède aux sels minéraux, soin délicat des ongles, lissage doux et modelage délassant des pieds.',
    intro:
      'Installée dans un fauteuil enveloppant, profitez d’un rituel complet qui redonne douceur et légèreté aux pieds tout en prenant soin des ongles naturels avec retenue.',
    durationMinutes: 60,
    priceEur: 80,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.onglesManucure,
    suitableFor: [
      'Pieds fatigués après de longues journées de marche à Paris',
      'Préparation estivale ou avant un départ en voyage',
    ],
    includes: [
      'Bain tiède apaisant aux pétales et sels doux',
      'Travail précis des ongles et des cuticules',
      'Lissage délicat des talons et gommage au sucre fin',
      'Modelage enveloppant jusqu’aux chevilles et pose de base soin ou vernis',
    ],
    preparationAdvice: [
      'Prévoyez des chaussures ouvertes si vous choisissez une pose de vernis classique en fin de soin.',
    ],
    aftercareAdvice: [
      'Laissez sécher tranquillement le vernis au studio autour d’une infusion avant de repartir.',
    ],
    faqs: [
      {
        id: 'pieds-podo',
        question: 'Ce soin remplace-t-il une consultation de podologie ?',
        answer:
          'Non, il s’agit uniquement d’un soin esthétique et de confort. En cas d’affection particulière, un suivi chez un podologue reste recommandé.',
      },
    ],
  },
  {
    slug: 'restructuration-naturelle-sourcils',
    code: 'REG-01',
    categoryId: 'regard',
    categoryLabel: 'Regard',
    name: 'Architecture Naturelle des Sourcils',
    shortDescription:
      'Étude des proportions du visage, épilation de précision à la pince et coiffage au gel nourrissant.',
    intro:
      'Plutôt que de transformer la ligne, nous cherchons à révéler l’équilibre déjà présent sur votre visage. Le travail se fait exclusivement à la pince de précision pour respecter la peau fine du contour de l’œil.',
    durationMinutes: 35,
    priceEur: 50,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.founderPortrait,
    suitableFor: [
      'Sourcils à rééquilibrer avec douceur sans affinement excessif',
      'Peaux sensibles qui tolèrent mal la cire sur le visage',
    ],
    includes: [
      'Observation de la symétrie et échange sur le rendu souhaité',
      'Épilation minutieuse à la pince et coupe sélective aux ciseaux fins',
      'Application d’un soin apaisant et brossage disciplinant',
    ],
    preparationAdvice: [
      'Laissez idéalement vos sourcils repousser 2 à 3 semaines avant la première séance de restructuration.',
    ],
    aftercareAdvice: [
      'Évitez les produits parfumés ou auto-bronzants sur l’arcade sourcilière pendant 24 heures.',
    ],
    faqs: [
      {
        id: 'sourcils-teinture',
        question: 'Peut-on ajouter une teinture douce sur place ?',
        answer:
          'Oui, une nuance subtile ton sur ton peut être ajoutée sur demande lors de votre prise de rendez-vous.',
      },
    ],
  },
  {
    slug: 'rehaussement-soin-cils',
    code: 'REG-02',
    categoryId: 'regard',
    categoryLabel: 'Regard',
    name: 'Rehaussement & Soin des Cils',
    shortDescription:
      'Courbure douce dès la racine avec soin nourrissant à la kératine végétale pour ouvrir le regard.',
    intro:
      'Pensé pour celles qui souhaitent alléger leur routine matinale tout en conservant un rendu très aérien, ce protocole soulève les cils naturels avec subtilité sans effet figé.',
    durationMinutes: 55,
    priceEur: 95,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.bridalEditorial,
    suitableFor: [
      'Cils droits souhaitant une courbure souple et naturelle',
      'Préparation avant des vacances ou un mariage',
    ],
    includes: [
      'Choix du galbe selon la longueur de vos cils',
      'Protocole de rehaussement doux et teinture noire ou brun profond optionnelle',
      'Bain de soin nourrissant en fin de séance',
    ],
    preparationAdvice: [
      'Venez les yeux parfaitement démaquillés et sans lentilles de contact.',
    ],
    aftercareAdvice: [
      'Évitez l’eau, la vapeur et le mascara pendant les premières 24 heures afin de fixer harmonieusement la courbure.',
    ],
    faqs: [
      {
        id: 'cils-duree',
        question: 'Combien de temps dure l’effet du rehaussement ?',
        answer:
          'La courbure s’estompe progressivement avec le cycle naturel du cil, généralement sur 5 à 7 semaines selon chacun.',
      },
    ],
  },
  {
    slug: 'mise-en-beaute-naturelle',
    code: 'MAQ-01',
    categoryId: 'maquillage',
    categoryLabel: 'Maquillage',
    name: 'Mise en Beauté Naturelle',
    shortDescription:
      'Teint lumineux, textures fines et touches nuancées adaptées à votre carnation et à votre tenue.',
    intro:
      'Un maquillage pensé comme une lumière posée sur la peau : fini seconde peau, pommettes fraîches, regard souligné avec légèreté et lèvres veloutées, pour un dîner, un événement ou un portrait.',
    durationMinutes: 50,
    priceEur: 95,
    featuredOnHome: false,
    isDemoCatalogItem: true,
    image: studioMedia.founderPortrait,
    suitableFor: [
      'Événements privés, dîners, séances photo ou cérémonies',
      'Personnes souhaitant rester fidèles à leur visage sans surcharge',
    ],
    includes: [
      'Préparation hydratante de la peau par un court massage',
      'Travail sur-mesure du teint, du regard et de la bouche',
      'Conseils personnalisés pour les retouches au fil de la soirée',
    ],
    preparationAdvice: [
      'Hydratez bien votre peau la veille et venez avec un visage propre et hydraté.',
    ],
    aftercareAdvice: [
      'Un démaquillage doux à l’huile végétale le soir permettra de retirer les pigments tout en préservant le confort cutané.',
    ],
    faqs: [
      {
        id: 'maq-products',
        question: 'Quelles marques utilisez-vous au studio ?',
        answer:
          'Nous sélectionnons des formules propres, confortables et reconnues pour la finesse de leurs textures, adaptées aux peaux sensibles.',
      },
    ],
  },
  {
    slug: 'accompagnement-beaute-mariee',
    code: 'MAR-01',
    categoryId: 'maquillage',
    categoryLabel: 'Maquillage',
    name: 'Accompagnement Beauté Mariée',
    shortDescription:
      'Parcours complet incluant un essai approfondi au studio et la mise en beauté sereine du jour J.',
    intro:
      'Un accompagnement calme et attentionné pour traverser vos préparatifs en confiance. Nous prenons le temps lors de l’essai d’écouter l’atmosphère de votre mariage, le tombé de votre robe et votre envie de naturel.',
    durationMinutes: 150,
    priceEur: 340,
    featuredOnHome: false,
    image: studioMedia.bridalEditorial,
    suitableFor: [
      'Futures mariées à Paris et en Île-de-France',
      'Celles qui recherchent un teint lumineux et fidèle à la lumière naturelle comme en photo',
    ],
    includes: [
      'Rendez-vous d’essai au studio (1h30) avec fiche teinte personnalisée',
      'Conseils de préparation de peau dans les semaines précédentes',
      'Mise en beauté complète le matin du mariage (au studio ou sur lieu à Paris)',
      'Kit de retouche discret pour les lèvres et la brillance',
    ],
    preparationAdvice: [
      'Lors de votre demande, indiquez la date de votre mariage et le quartier ou lieu de préparation souhaité.',
      'Pour l’essai, n’hésitez pas à apporter des photos de votre robe et de votre coiffure envisagée.',
    ],
    aftercareAdvice: [
      'Gardez un brumisateur d’eau florale et votre baume teinté à portée de main pour profiter de la journée sans y penser.',
    ],
    faqs: [
      {
        id: 'mariee-delai',
        question: 'Combien de temps à l’avance faut-il faire la demande ?',
        answer:
          'Pour la saison de mai à septembre, nous conseillons de nous contacter 4 à 8 mois avant la date afin de réserver votre essai puis la matinée du jour J.',
      },
      {
        id: 'mariee-proches',
        question: 'Pouvez-vous également maquiller une témoin ou ma mère ?',
        answer:
          'Oui, selon le calendrier de la matinée, nous pouvons organiser une ou deux mises en beauté supplémentaires sur demande.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesCatalog.find((service) => service.slug === slug);
}

export function getServicesByCategory(categoryId: ServiceCategory['id']): ServiceItem[] {
  return servicesCatalog.filter((service) => service.categoryId === categoryId);
}
