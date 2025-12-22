export const projects = [
  {
    id: 'cab-airport-paris',
    title: 'Cab Airport Paris',
    shortDescription: 'Plateforme de réservation de taxis pour faciliter les trajets entre l\'aéroport et Paris.',
    fullDescription: 'Cab Airport Paris est une plateforme de réservation de taxis, développée avec Vue.js et Laravel, pour faciliter les trajets entre l\'aéroport et Paris. Notre service propose une solution de transport pratique, sécurisée, et accessible en ligne, idéale pour les voyageurs souhaitant un déplacement confortable et sans tracas.',
    image: new URL('../assets/capture-principale.png', import.meta.url).href,
    technologies: [
      { name: 'VueJs', icon: 'fab fa-vuejs', color: '#42b883' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#e3342f' }
    ],
    problem: 'Les voyageurs à destination et en provenance des aéroports parisiens recherchent une solution de transport fiable, rapide et facile à réserver.',
    solution: 'CabAirportParis répond à ce besoin en proposant un service de réservation de taxis privés sur-mesure. Grâce à notre plateforme intuitive, les utilisateurs peuvent réserver leur course en quelques clics, suivre leur chauffeur en temps réel et bénéficier d\'un service client dédié.',
    features: [
      'Trajets uniques, aller-retour, transferts aéroport, mises à disposition',
      'Réservation en quelques clics grâce à une interface simple et efficace',
      'Paiement sécurisé via Stripe',
      'Suivi en temps réel du chauffeur'
    ],
    backend: 'Laravel a été utilisé pour le développement du back-end. Nous avons créé une API REST pour gérer les trajets, les utilisateurs et les paiements. La gestion du contenu ainsi que les prix des trajets sont gérés via une interface d\'administration. Nous avons également intégré des services externes comme GoogleAPI pour la géolocalisation et Stripe pour les paiements en ligne.',
    images: [
      { src: new URL('../assets/capture-principale.png', import.meta.url).href, alt: 'Aperçu du site' },
      { src: new URL('../assets/trajet-capture.png', import.meta.url).href, alt: 'Interface de trajet du site' },
      { src: new URL('../assets/administration-panel.png', import.meta.url).href, alt: 'Backend Laravel' }
    ],
    links: {
      website: 'https://cabairportparis.com',
      github: 'https://github.com/elhadi/cab-airport-paris'
    }
  },
  {
    id: 'mudamira',
    title: 'Mudamira',
    shortDescription: 'Plateforme de mise en relation entreprises-freelances avec système d\'anonymat innovant. Refactoring complet de l\'architecture Laravel et amélioration de la qualité du code.',
    fullDescription: 'Mudamira est une plateforme web de mise en relation entre entreprises et freelances, pensée autour d\'un principe central : l\'anonymat. Les freelances peuvent proposer leurs services et postuler à des projets sans révéler leur identité, celle-ci n\'étant dévoilée qu\'une fois l\'embauche confirmée. Ce positionnement, volontairement atypique, implique des enjeux forts de confiance, de sécurité et de clarté dans les parcours utilisateurs.\n\nLorsque j\'ai travaillé sur Mudamira, le principal défi n\'était pas tant technique que structurel : le projet ne disposait pas d\'un objectif produit clairement défini. La plateforme était riche en fonctionnalités, mais la vision globale restait mouvante. Dans ce contexte, j\'ai dû apprendre à avancer sans cadre figé, en adoptant une posture proactive : proposer des solutions, explorer plusieurs scénarios possibles, puis affiner les choix avec le Product Owner. Plutôt que de chercher à "exécuter un brief", mon rôle a consisté à aider à le construire.',
    image: new URL('../assets/mudamira_project.png', import.meta.url).href,
    technologies: [
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#e3342f' },
      { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#00758f' },
      { name: 'Pest', icon: 'fas fa-vial', color: '#7f3f98' }
    ],
    problem: 'Le projet Mudamira manquait d\'un objectif produit clairement défini. La plateforme était riche en fonctionnalités mais la vision globale restait mouvante, rendant le développement complexe et la maintenance difficile. Le code existant nécessitait une restructuration pour améliorer sa maintenabilité et sa capacité à évoluer.',
    solution: 'J\'ai adopté une approche proactive en proposant des solutions et en explorant plusieurs scénarios avec le Product Owner pour construire ensemble la vision du produit. En parallèle, j\'ai entrepris un important travail de refactoring : restructuration de l\'architecture backend Laravel avec séparation claire des responsabilités (services, repositories, events), amélioration de la couverture de tests avec Pest et PHPUnit, et intégration de pipelines CI pour sécuriser les déploiements.',
    features: [
      'Système d\'anonymat : identité révélée uniquement après embauche',
      'Gestion complète du cycle de vie des projets (embauche, paiements, cycles)',
      'Système de paiement multi-gateways (Stripe, Paystack, Instamojo)',
      'Gestion des projets long terme avec cycles de paiement',
      'Système de facturation automatique avec génération PDF',
      'Architecture modulaire : services, repositories, events',
      'Couverture de tests sur les parties sensibles (paiements, embauche)',
      'Pipelines CI pour sécuriser les déploiements'
    ],
    backend: 'En parallèle de la réflexion produit, j\'ai pris en charge un important travail de reprise et de nettoyage du code existant. Le projet ayant beaucoup évolué, certaines parties étaient devenues complexes à maintenir. J\'ai progressivement restructuré l\'architecture backend Laravel en mettant en place une séparation plus claire des responsabilités : centralisation de la logique métier dans des services, abstraction de l\'accès aux données via des repositories, utilisation d\'events pour découpler les actions critiques (paiements, notifications, changements d\'état des projets), et organisation de fichiers de queries dédiés afin de clarifier les interactions avec la base de données. Ce travail m\'a permis d\'améliorer significativement la lisibilité du code, sa maintenabilité et sa capacité à évoluer, sur un projet comptant plusieurs dizaines de modèles, contrôleurs et flux métier complexes (paiements, embauche, cycles de projets long terme, facturation, etc.).',
    challenges: [
      {
        title: 'Vision produit mouvante',
        description: 'Le projet ne disposait pas d\'un objectif produit clairement défini. J\'ai dû apprendre à avancer sans cadre figé, en adoptant une posture proactive : proposer des solutions, explorer plusieurs scénarios possibles, puis affiner les choix avec le Product Owner.',
        icon: 'fas fa-lightbulb'
      },
      {
        title: 'Refactoring d\'un code legacy',
        description: 'Le projet ayant beaucoup évolué, certaines parties étaient devenues complexes à maintenir. J\'ai restructuré l\'architecture en introduisant des services, repositories et events pour améliorer la maintenabilité.',
        icon: 'fas fa-code-branch'
      },
      {
        title: 'Complexité métier',
        description: 'Gestion de flux métier complexes : paiements multi-gateways, embauche avec anonymat, cycles de projets long terme, facturation automatique. Chaque flux nécessitait une attention particulière pour garantir la cohérence.',
        icon: 'fas fa-project-diagram'
      },
      {
        title: 'Qualité et tests',
        description: 'Renforcement de la qualité globale de l\'application en travaillant sur la couverture de tests avec Pest et PHPUnit, ciblant en priorité les parties sensibles : logique d\'embauche, paiements, gestion des cycles.',
        icon: 'fas fa-shield-alt'
      }
    ],
    learnings: [
      'Évoluer dans un environnement complexe sans vision produit figée',
      'Faire des choix techniques tout en tenant compte des enjeux produit',
      'Assumer une vraie responsabilité sur la structure d\'un projet existant',
      'Contribuer à poser des bases solides, aussi bien dans le code que dans la manière de penser le produit',
      'Architecture modulaire : services, repositories, events pour découpler les responsabilités',
      'Intégration de pipelines CI pour sécuriser les déploiements'
    ],
    images: [
      { src: new URL('../assets/mudamira_search_page.png', import.meta.url).href, alt: 'Search Page' },
      { src: new URL('../assets/mudamira_freelancer_dashboard.png', import.meta.url).href, alt: 'Freelancer Dashboard' },
      { src: new URL('../assets/mudamira_active_project.png', import.meta.url).href, alt: 'Active Project' },
      { src: new URL('../assets/mudamira_express_guide.png', import.meta.url).href, alt: 'Express Guide' }
    ],
    links: {
      website: 'https://mudamira.com',
      github: 'https://github.com/elhadi/mudamira'
    }
  },
  {
    id: 'demitour-paris',
    title: 'Demitour Paris',
    shortDescription: 'Refonte de l\'interface utilisateur et restructuration du backend pour une plateforme de réservation de services touristiques à Paris.',
    fullDescription: 'Demitour Paris est une plateforme de réservation de services touristiques et d\'expériences à Paris. Mon rôle sur ce projet a consisté à transformer l\'interface utilisateur en optant pour un design basé sur le drapeau tricolore français, créant ainsi une identité visuelle forte et reconnaissable. J\'ai enrichi l\'expérience utilisateur en intégrant des animations subtiles et des effets visuels soignés, rendant la navigation fluide et agréable. La page d\'accueil a été repensée avec de nouvelles sections interactives incluant un carrousel aux transitions douces et naturelles. J\'ai également conçu de nouvelles pages, notamment une page tarif contemporaine et intuitive qui facilite la compréhension des offres pour les utilisateurs. En parallèle, j\'ai restructuré le backend Laravel pour permettre la gestion d\'un catalogue de produits plus large, ce qui a nécessité des modifications importantes du code et de la structure de la base de données.',
    image: new URL('../assets/demitour_hero_section.png', import.meta.url).href,
    technologies: [
      { name: 'VueJs', icon: 'fab fa-vuejs', color: '#42b883' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#e3342f' },
      { name: 'PHP', icon: 'fab fa-php', color: '#777bb4' }
    ],
    problem: 'Le client ne disposait pas d\'un cahier des charges clairement défini, ce qui a impliqué une approche de travail plus souple et fortement collaborative. J\'ai ainsi mené une phase d\'analyse des besoins existants, formulé des propositions adaptées et contribué à la construction de la vision globale du projet aux côtés du client.\n\nL\'interface utilisateur de Demitour Paris nécessitait une refonte complète afin d\'améliorer l\'expérience utilisateur, de renforcer l\'identité visuelle de la marque et de proposer une navigation plus fluide et engageante. Certaines pages essentielles faisaient également défaut, notamment une page tarifaire claire et contemporaine, indispensable pour une meilleure compréhension des offres.\n\nEnfin, le backend devait être repensé afin de prendre en charge un catalogue de produits plus large et plus diversifié, garantissant ainsi l\'évolutivité de la plateforme.',
    solution: 'J\'ai transformé l\'interface utilisateur en concevant un design basé sur le drapeau tricolore français (bleu, blanc, rouge), apportant une identité visuelle forte et cohérente. Pour enrichir l\'expérience utilisateur, j\'ai intégré des animations subtiles et des effets visuels soignés qui rendent la navigation fluide et agréable, tout en maintenant des performances optimales. La page d\'accueil a été repensée avec de nouvelles sections interactives incluant un carrousel aux transitions douces et naturelles. J\'ai également développé de nouvelles pages, notamment une page tarif contemporaine et intuitive qui présente les offres de manière claire et engageante.\n\nPour le backend, j\'ai restructuré l\'architecture du code et adapté la base de données pour permettre la gestion d\'un nombre plus important de produits tout en maintenant les performances et la maintenabilité du système.',
    features: [
      'Design contemporain basé sur le drapeau tricolore (bleu, blanc, rouge)',
      'Animations subtiles et effets visuels soignés pour une navigation fluide',
      'Nouvelles sections interactives sur la page d\'accueil',
      'Carrousel aux transitions douces et naturelles',
      'Page tarif contemporaine et intuitive facilitant la compréhension des offres',
      'Interface utilisateur repensée et intuitive',
      'Catalogue de produits élargi et flexible',
      'Backend optimisé pour gérer plus de produits',
      'Système de réservation en temps réel',
      'Paiements sécurisés en ligne',
      'Gestion des disponibilités automatique'
    ],
    backend: 'J\'ai restructuré le backend Laravel pour permettre la gestion d\'un catalogue de produits plus large. Cela a nécessité des modifications importantes du code et de la structure de la base de données. J\'ai repensé l\'architecture des modèles et des contrôleurs pour améliorer la scalabilité, optimisé les requêtes pour maintenir les performances malgré l\'augmentation du nombre de produits, et adapté la structure de la base de données pour supporter cette évolution tout en préservant l\'intégrité des données existantes.',
    images: [
      { src: new URL('../assets/demitour_tarif.png', import.meta.url).href, alt: 'Page tarif moderne et intuitive' },
      { src: new URL('../assets/demitour_events.png', import.meta.url).href, alt: 'Page événements avec carrousel' },
      { src: new URL('../assets/demitour_mehari.png', import.meta.url).href, alt: 'Service Mehari - Expérience touristique' }
    ],
    links: {
      website: 'https://demitour-paris.com',
      github: 'https://github.com/elhadi/demitour-paris'
    }
  }
];
