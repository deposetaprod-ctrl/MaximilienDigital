export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_mobile: "Mobile",
    nav_saas: "SaaS",
    nav_web: "Sites Web",
    nav_financement: "Financement",
    nav_offer: "Offre",
    nav_blog: "Blog",

    // Creation Site Web page
    web_hero_badge: "🚀 Offre de lancement — Places limitées",
    web_hero_title: "Votre site web professionnel",
    web_hero_title_gradient: "livré en 7 à 15 jours",
    web_hero_sub: "Sur-mesure, rapide, optimisé SEO — sans exploser votre budget.",
    web_hero_cta1: "Voir les offres",
    web_hero_cta2: "Appel visio gratuit",
    web_trust_fast: "Livraison express",
    web_trust_custom: "100% sur-mesure",
    web_trust_code: "Code source inclus",
    web_trust_ai: "Boosté par l'IA",

    web_problem_title: "Un site mal conçu vous coûte",
    web_problem_title_gradient: "des clients chaque jour",
    web_problem_bad_title: "Sans site professionnel",
    web_problem_bad_1: "Vos prospects partent chez la concurrence",
    web_problem_bad_2: "Vous perdez en crédibilité",
    web_problem_bad_3: "Impossible d'être trouvé sur Google",
    web_problem_bad_4: "Pas d'automatisation, tout est manuel",
    web_problem_good_title: "Avec votre site sur-mesure",
    web_problem_good_1: "Vous inspirez confiance dès le premier clic",
    web_problem_good_2: "Vos clients vous trouvent sur Google",
    web_problem_good_3: "Vous recevez des demandes 24h/24",
    web_problem_good_4: "Votre business tourne même quand vous dormez",

    web_usp_title: "Pourquoi me choisir",
    web_usp_title_gradient: "plutôt qu'un autre ?",
    web_usp_sub: "Je ne suis pas qu'un développeur. Je suis aussi entrepreneur.",
    web_usp1_title: "Vision business",
    web_usp1_desc: "Formé en entrepreneuriat et en finance, je challenge votre projet pour maximiser vos résultats.",
    web_usp2_title: "Rapidité IA",
    web_usp2_desc: "Grâce à l'IA, je code 3x plus vite qu'un développeur classique. Votre site est prêt en jours, pas en mois.",
    web_usp3_title: "100% sur-mesure",
    web_usp3_desc: "Pas de template générique. Chaque page est conçue spécifiquement pour votre activité et vos objectifs.",
    web_usp4_title: "Pensé pour convertir",
    web_usp4_desc: "SEO optimisé, design responsive, vitesse de chargement — votre site est un outil de croissance.",
    web_usp5_title: "Vous êtes propriétaire",
    web_usp5_desc: "Code source livré sur GitHub. Aucune dépendance, aucun abonnement caché. Le site est 100% à vous.",
    web_usp6_title: "Accompagnement réel",
    web_usp6_desc: "Je vous conseille sur votre stratégie, votre modèle économique et la structuration de votre projet.",

    web_packs_title: "Choisissez l'offre",
    web_packs_title_gradient: "qui vous correspond",
    web_packs_sub: "Tous les packs incluent : design responsive, SEO de base, code source livré, et un PDF explicatif.",
    web_pack_popular: "Le plus choisi",
    web_pack_cta: "Choisir ce pack",
    web_packs_note: "Besoin de quelque chose de spécifique ?",
    web_packs_note_link: "Contactez-moi pour une offre personnalisée.",

    web_pack1_name: "Essentiel",
    web_pack1_tagline: "Idéal pour démarrer votre présence en ligne",
    web_pack1_f1: "Site one-page professionnel",
    web_pack1_f2: "Jusqu'à 5 sections personnalisées",
    web_pack1_f3: "Design responsive (mobile, tablette, PC)",
    web_pack1_f4: "Formulaire de contact intégré",
    web_pack1_f5: "Liens vers vos réseaux sociaux",
    web_pack1_f6: "SEO de base (balises, titres, descriptions)",
    web_pack1_f7: "3 retouches incluses",
    web_pack1_f8: "Livré en <strong>7 jours</strong>",

    web_pack2_name: "Pro",
    web_pack2_tagline: "Pour structurer et développer votre activité",
    web_pack2_f1: "Site multi-pages (jusqu'à 5 pages)",
    web_pack2_f2: "Design premium + micro-animations",
    web_pack2_f3: "Formulaire avancé (devis / prise de RDV)",
    web_pack2_f4: "Bouton WhatsApp / Messenger flottant",
    web_pack2_f5: "SEO optimisé + soumission Google",
    web_pack2_f6: "Google Analytics connecté",
    web_pack2_f7: "5 retouches incluses",
    web_pack2_f8: "Livré en <strong>10 jours</strong>",

    web_pack3_name: "Business",
    web_pack3_tagline: "Le site complet pour scaler votre business",
    web_pack3_f1: "Jusqu'à 10 pages sur-mesure",
    web_pack3_f2: "Design haut de gamme + animations",
    web_pack3_f3: "Module de paiement (Stripe)",
    web_pack3_f4: "Dashboard administrateur",
    web_pack3_f5: "Blog intégré + 2 articles SEO",
    web_pack3_f6: "SEO avancé + audit de mots-clés",
    web_pack3_f7: "Fonctionnalités IA sur demande",
    web_pack3_f8: "10 retouches incluses",
    web_pack3_f9: "Livré en <strong>15 jours</strong>",

    web_process_title: "Comment ça se passe",
    web_process_title_gradient: "concrètement ?",
    web_step1_title: "Découverte",
    web_step1_desc: "Vous me présentez votre projet. Je challenge vos idées pour m'assurer que le résultat vous satisfera à 100%.",
    web_step2_title: "Maquette",
    web_step2_desc: "Je modélise votre site avant de coder. Vous validez le design et la structure avant le développement.",
    web_step3_title: "Développement",
    web_step3_desc: "Votre site prend vie. On échange régulièrement pour rester alignés avec votre vision.",
    web_step4_title: "Livraison",
    web_step4_desc: "Je vous transfère le code (GitHub), les accès, et un PDF explicatif. Vous êtes 100% autonome.",

    web_integ_title: "Ce que je peux",
    web_integ_title_gradient: "intégrer à votre site",
    web_integ_1: "Formulaire de contact",
    web_integ_2: "Prise de rendez-vous",
    web_integ_3: "Paiement en ligne",
    web_integ_4: "Newsletter",
    web_integ_5: "Chat en direct",
    web_integ_6: "Galerie photos / vidéos",
    web_integ_7: "Blog",
    web_integ_8: "Tableau de bord",
    web_integ_9: "Géolocalisation",
    web_integ_10: "Téléchargement PDF",
    web_integ_11: "Statistiques",
    web_integ_12: "Connexion CRM",
    web_integ_13: "Intelligence Artificielle",
    web_integ_14: "Réseaux sociaux",
    web_integ_15: "Multi-langue",

    web_faq_title: "Questions",
    web_faq_title_gradient: "fréquentes",
    web_faq1_q: "Combien ça coûte après la livraison ?",
    web_faq1_a: "Rien de ma part. Le site est 100% à vous. Les seuls frais récurrents sont votre nom de domaine et hébergement (environ 50-80€/an). Je vous guide gratuitement dans le choix du meilleur hébergeur.",
    web_faq2_q: "Est-ce que je peux modifier le site moi-même ?",
    web_faq2_a: "Oui. Vous recevez le code source complet et un guide PDF. Pour les modifications simples (textes, images), je vous montre comment faire. Pour les modifications complexes, je reste disponible.",
    web_faq3_q: "En combien de temps mon site est-il prêt ?",
    web_faq3_a: "Entre 7 et 15 jours selon le pack choisi. Grâce à l'IA, je développe beaucoup plus vite qu'un développeur classique, sans sacrifier la qualité.",
    web_faq4_q: "Mon site sera-t-il visible sur Google ?",
    web_faq4_a: "Oui. Tous les sites incluent une optimisation SEO de base. À partir du Pack Pro, je soumets votre site à Google et connecte Analytics pour suivre vos performances.",
    web_faq5_q: "Quelle est la différence avec un site WordPress ?",
    web_faq5_a: "Un site codé sur-mesure est plus rapide, plus sécurisé, et 100% personnalisable — sans les limitations des templates. Vous n'avez pas de plugins à mettre à jour ni de risques de bugs liés aux mises à jour WordPress.",
    web_faq6_q: "Et si j'ai besoin d'une application mobile ?",
    web_faq6_a: "Je peux aussi développer des applications mobiles (App Store & Google Play). Contactez-moi pour une offre personnalisée adaptée à votre projet.",
    web_faq7_q: "Que se passe-t-il si je ne suis pas satisfait ?",
    web_faq7_a: "Chaque pack inclut des retouches (3 à 10 selon le pack). On valide ensemble chaque étape avant de passer à la suivante. Votre satisfaction est ma priorité.",

    web_cta_title: "Prêt à lancer votre site ?",
    web_cta_sub: "Envoyez-moi un message pour discuter de votre projet. Je vous réponds dans l'heure.",
    web_cta_message: "M'envoyer un message",
    web_cta_whatsapp: "Appel visio gratuit",
    web_cta_bonus: "Offre de lancement : recevez un aperçu visuel personnalisé de votre futur site, gratuitement.",

    // Hero
    hero_tagline: "Studio de Développement",
    hero_form_title: "Construisons votre produit web.",
    hero_form_gift_subtitle: "Recevez une <strong class=\"text-primary\">maquette gratuite</strong> de votre projet sous 24h par email.",
    hero_form_success_title: "C'est parti ! 🎉",
    hero_form_success_sub: "Votre maquette gratuite est en préparation.",
    hero_form_success_desc: "Vous recevrez un lien vers votre maquette personnalisée directement par email sous <strong class=\"text-foreground\">24 heures</strong>.",
    hero_form_success_btn: "Découvrir l'agence en attendant",
    hero_form_step1_q: "Quel type d'application souhaitez-vous créer ?",
    hero_form_step1_opt1: "Application Web / PWA",
    hero_form_step1_opt2: "Application Mobile Native",
    hero_form_step2_q: "À qui se destine cet outil ?",
    hero_form_step2_opt1: "Grand public (B2C)",
    hero_form_step2_opt2: "Outil interne / B2B",
    hero_form_step3_q: "Quel est votre secteur d'activité ?",
    hero_form_step3_opt1: "Experts-Comptables / Finance",
    hero_form_step3_opt2: "Commerçants / E-commerce",
    hero_form_step3_opt3: "Services B2B",
    hero_form_step3_opt4: "Artisanat / BTP",
    hero_form_step3_opt5: "Autre",
    hero_form_step4_q: "Quel est votre budget estimé ?",
    hero_form_step4_opt1: "Moins de 500 €",
    hero_form_step4_opt2: "Moins de 1 000 €",
    hero_form_step4_opt3: "Entre 1 000 € et 5 000 €",
    hero_form_step4_opt4: "Entre 5 000 € et 15 000 €",
    hero_form_step4_opt5: "Plus de 15 000 €",
    hero_form_step5_q: "Décrivez votre projet en quelques mots",
    hero_form_step5_sub: "Plus vous êtes précis, plus votre maquette gratuite sera fidèle à votre vision.",
    hero_form_step5_ph: "Ex : Je souhaite un tableau de bord pour suivre les ventes de mes 3 boutiques, avec des alertes quand le stock est bas...",
    hero_form_step5_btn: "Continuer",
    hero_form_step6_q: "Où vous envoyer votre maquette ?",
    hero_form_step6_sub: "Vous recevrez votre maquette gratuite sous 24h par email.",
    hero_form_step6_email: "Email professionnel",
    hero_form_step6_phone: "Numéro de téléphone (optionnel)",
    hero_form_sending: "Envoi en cours...",
    hero_form_submit_btn: "Recevoir ma maquette gratuite 🎁",
    hero_form_back: "Retour",
    hero_form_scroll: "Plus d'informations",
    hero_subtitle:
      "Je développe des Applications Web Métier (PWA), Tableaux de bord et CRM sur-mesure pour PME, Experts-Comptables et Commerçants. Automatisation de vos processus complexes et connexion API.",
    hero_cta: "Estimer le coût de mon application",
    hero_dev_role: "Créateur d'Applications Web Métier & PWA",
    hero_projects: "+ 30 applications",

    // Services section
    services_title: "Mes spécialités métier",
    services_subtitle:
      "Des applications de gestion (PWA), connexions API et portails sur-mesure pour fluidifier et automatiser votre activité.",

    // Services data
    service_portal_title: "Tableau de Bord & KPIs",
    service_portal_desc:
      "Visualisez en temps réel l'état de votre activité. Idéal pour les commerçants ou la direction, avec centralisation des données.",
    service_automation_title: "CRM & Gestion de la Clientèle",
    service_automation_desc:
      "Oubliez les fichiers Excel éparpillés. Un outil métier dédié pour gérer vos clients, suivre les interactions et automatiser vos emails.",
    service_mvp_title: "Formulaires Dynamiques & API",
    service_mvp_desc:
      "Formulaires intelligents qui envoient des emails automatisés, génèrent des devis et se connectent via API à vos autres logiciels.",
    service_excel_title: "Portail Client (Extranet)",
    service_excel_desc:
      "Espaces sécurisés pour que vos clients puissent consulter leurs documents, factures, et échanger avec votre équipe en toute simplicité.",

    // Projects section
    projects_title: "Mes réalisations",
    projects_subtitle: "Quelques projets sur lesquels j'ai travaillé récemment.",

    // Projects data
    project_invoices_title: "Traitement de factures OCR",
    project_invoices_desc:
      "Une application web interne pour automatiser la lecture, le traitement et la validation de factures grâce à l'intelligence artificielle.",
    project_crm_title: "CRM Sur-Mesure",
    project_crm_desc:
      "Un logiciel SaaS de gestion de la relation client adapté aux commerciaux. Suivi des mandats, relances automatisées, et connexion API avec les outils de facturation.",
    project_rh_title: "Portail Extranet Sécurisé",
    project_rh_desc:
      "Espace collaboratif sur-mesure permettant l'échange sécurisé de documents sensibles, la signature électronique et le suivi de dossiers clients.",
    project_stock_title: "Dashboard de Gestion & APIs",
    project_stock_desc:
      "Application métier connectée à un ERP existant pour visualiser l'état des stocks en temps réel et générer des rapports de performance (KPIs).",

    // Testimonials section
    testimonials_title: "Ce que disent mes clients",
    testimonials_subtitle: "Des retours concrets de ceux qui m'ont fait confiance.",
    testimonials_see_more: "Voir plus d'avis sur ComeUp",
    testimonials_based_on: "Basé sur plus de 10 avis 5 étoiles",

    // Final CTA section
    finalcta_title: "Nous parler de votre projet",
    finalcta_subtitle:
      "Décrivez-nous votre idée en quelques mots. Nous vous recontactons pour concrétiser votre vision digitale.",
    finalcta_cta: "Nous parler de votre projet",

    // Footer
    footer_rights: "Tous droits réservés.",

    // Team Section
    team_title: "L'Équipe Maximilien Digital",
    team_subtitle: "Trois développeurs passionnés pour donner vie à vos idées les plus ambitieuses.",
    team_role_architect: "Architecte Logiciel & Accompagnateur Entrepreneurial",
    team_role_fullstack: "Ingénieur Fullstack",
    footer_reviews: "Avis ComeUp",

    // Scroll notification popup
    popup_title: "Votre projet mérite mieux 💡",
    popup_subtitle: "Discutons maintenant — réponse sous 24h.",
    popup_cta: "Parler de mon projet",

    // Quick contact modal
    qc_title: "Être rappelé rapidement",
    qc_subtitle:
      "Laissez simplement votre numéro de téléphone ou rejoignez le groupe WhatsApp pour échanger directement.",
    qc_phone_label: "Numéro de téléphone",
    qc_phone_placeholder: "+33 6 12 34 56 78",
    qc_submit: "Envoyer mon numéro",
    qc_whatsapp: "Rejoindre le groupe WhatsApp",

    // Contact form modal
    cf_title: "Parler de votre projet",
    cf_subtitle: "Décrivez votre idée, je vous recontacte rapidement.",
    cf_name: "Votre prénom",
    cf_email: "Email",
    cf_phone: "Téléphone (optionnel)",
    cf_description: "Décrivez votre projet",
    cf_description_placeholder: "Parlez-moi de votre idée, vos objectifs, votre calendrier...",
    cf_budget: "Budget estimé",
    cf_submit: "Envoyer ma demande",
    cf_sending: "Envoi en cours…",
    cf_budget_placeholder: "Sélectionnez un budget",
    cf_success_title: "Message envoyé !",
    cf_success_subtitle: "Je vous recontacte dans les plus brefs délais.",
    cf_error: "Une erreur est survenue. Réessayez ou contactez-moi directement.",

    // Budget options
    budget_500: "Moins de 1 000 €",
    budget_1k: "Environ 1 000 €",
    budget_2k: "Environ 2 000 €",
    budget_3k: "Environ 3 000 €",
    budget_lt5k: "Moins de 5 000 €",
    budget_5k10k: "5 000 - 10 000 €",
    budget_10k25k: "10 000 - 25 000 €",
    budget_25k50k: "25 000 - 50 000 €",
    budget_gt50k: "Plus de 50 000 €",
    budget_unknown: "Je ne sais pas encore",

    // Estimation modal - developers
    dev_jules_desc: "Un peu plus cher · Très réactif · Fullstack · Très disponible",
    dev_mathieu_desc: "Un peu moins cher · Fullstack · Un peu moins disponible",

    // Estimation modal general
    est_title: "Estimez votre projet",
    est_subtitle: "Quelques questions pour vous proposer un budget indicatif.",
    est_project_type: "Type de projet",
    est_choose_dev: "Choisissez votre développeur",
    est_next: "Suivant",
    est_prev: "Précédent",
    est_contact: "Être contacté",
    est_budget_title: "Budget estimé",

    // Financement page
    fin_tag: "Financement",
    fin_title: "Trouver un financement pour votre application.",
    fin_desc:
      "Vous avez une idée d'application SaaS ou mobile, mais vous devez encore valider le budget, rassurer des partenaires ou obtenir un financement (banque, aides, investisseurs, BPI, etc.) ? Je peux vous aider à transformer votre idée en un projet clair, chiffré et crédible techniquement. Pour toute question liée au financement, vous pouvez me contacter directement au",
    fin_cta_call: "Appeler le 07 66 07 47 46",
    fin_cta_estimate: "Estimer le budget de mon app",

    // SaaS page
    saas_tag: "SaaS & plateformes web · MVP en 30 jours",
    saas_h1: "Une application SaaS fonctionnelle en 30 jours.",
    saas_intro:
      "Je m'adresse aux entreprises et fondateurs qui veulent transformer une idée en une vraie plateforme SaaS : backoffice, API, comptes clients, paiements… Je privilégie un MVP rapide, exploitable, que l'on peut faire évoluer plutôt qu'une démo impossible à maintenir.",
    saas_cta1: "Estimer mon projet SaaS",
    saas_cta2: "Parler de ma plateforme",
    saas_cta3: "Trouver un financement",
    saas_li1: "MVP SaaS en moins de 30 jours, focalisé sur vos fonctionnalités cœur.",
    saas_li2: "Architecture prête à évoluer (multi-tenant, rôles, permissions).",
    saas_li3: "Intégration IA, paiements, emails transactionnels et automatisations.",
    saas_li4: "Hébergement moderne (Vercel, services managés) pour rester serein.",
    saas_approach_title: "Une approche produit, pas seulement technique",
    saas_approach_desc:
      "L'objectif n'est pas d'empiler des fonctionnalités, mais de livrer un produit que vos clients comprennent et utilisent réellement. On clarifie le cœur de votre proposition de valeur, puis on construit autour.",
    saas_step1_title: "1. Cadrage & maquette",
    saas_step1_desc: "Identification des personas, des parcours clés et des premiers écrans à livrer.",
    saas_step2_title: "2. MVP en production",
    saas_step2_desc:
      "Une première version exploitable, sécurisée et monitorée, prête pour vos premiers utilisateurs.",
    saas_step3_title: "3. Itérations & scalabilité",
    saas_step3_desc:
      "Améliorations continues, nouvelles features et optimisation des performances.",
    saas_process_title: "Comment on construit votre SaaS",
    saas_process_desc:
      "Mon rôle est de vous aider à sortir un produit fonctionnel, qui traite un problème bien identifié chez vos clients, avec une base technique saine.",
    saas_phase1_title: "Phase 1 · Découverte",
    saas_phase1_desc:
      "Analyse du besoin, de votre modèle d'abonnement, des rôles utilisateurs et des premiers écrans indispensables (dashboard, backoffice, etc.).",
    saas_phase2_title: "Phase 2 · Développement (30 jours)",
    saas_phase2_desc:
      "Mise en place de l'architecture (API, base de données, authentification), développement des fonctionnalités essentielles et mise en ligne d'un MVP exploitable.",
    saas_phase3_title: "Phase 3 · Retours & itérations",
    saas_phase3_desc:
      "Recueil des retours utilisateurs, corrections, ajout de fonctionnalités secondaires et accompagnement sur la suite.",
    saas_phase4_title: "Phase 4 · Maintenance & Évolution",
    saas_phase4_desc:
      "Surveillance de l'application, résolution de bugs et développement continu de nouvelles fonctionnalités selon vos besoins.",
    saas_stack:
      "Stack principale : React, Next.js, Node.js / TypeScript, PostgreSQL, Redis, TailwindCSS, intégrations IA (OpenAI, Azure, Google…) et éventuellement Bubble.io pour certains modules.",
    saas_projects_title: "Projets proches d'un produit SaaS",
    saas_projects_subtitle:
      "Plateformes web, interfaces d'administration, intégrations de données en temps réel et fonctionnalités avancées côté backoffice.",
    saas_cta_title: "Vous préparez un SaaS ou une plateforme B2B ?",
    saas_cta_desc:
      "Parlez-moi de votre produit, de vos clients et de vos enjeux techniques. Nous voyons ensemble comment structurer un premier MVP solide.",
    saas_cta_whatsapp: "Discuter sur WhatsApp",
    saas_cta_home: "Voir la page principale",

    // Mobile page
    mob_tag: "Applications mobiles · MVP en 30 jours",
    mob_h1: "Une application mobile fonctionnelle en 30 jours.",
    mob_intro:
      "Je m'adresse aux entreprises, porteurs de projets et entrepreneurs qui souhaitent lancer une application mobile ou une PWA, simple ou complexe. iOS, Android ou les deux : je conçois et développe des apps rapides à mettre sur le marché, avec la possibilité d'intégrer de l'intelligence artificielle.",
    mob_cta1: "Discuter de mon app sur WhatsApp",
    mob_cta2: "Estimer le budget de mon app",
    mob_cta3: "Trouver un financement",
    mob_li1: "MVP d'application en moins de 30 jours.",
    mob_li2: "Un seul code pour iOS & Android (React Native / Expo) ou Bubble.io.",
    mob_li3: "Intégration IA (chatbots, assistants, génération de contenu…).",
    mob_li4: "Publication sur l'App Store, Google Play ou en PWA.",
    mob_approach_title: "Un accompagnement complet pour votre application",
    mob_approach_desc:
      "Nous clarifions ensemble les fonctionnalités prioritaires, puis je construis un MVP robuste que l'on peut faire évoluer. L'objectif : publier rapidement une première version, mesurer l'usage, puis itérer.",
    mob_step1_title: "1. Cadrage produit",
    mob_step1_desc:
      "Atelier rapide pour clarifier la cible, les parcours utilisateurs et identifier les écrans essentiels.",
    mob_step2_title: "2. Prototype & design",
    mob_step2_desc: "Maquettes interactives pour valider les parcours avant de coder.",
    mob_step3_title: "3. Développement & lancement",
    mob_step3_desc: "Développement, tests, publication, puis suivi pour les premières versions.",
    mob_process_title: "Ce que je fais pour votre app mobile",
    mob_process_desc:
      "Mon objectif est de livrer une application réellement utilisable par vos clients, pas seulement une maquette. Nous allons traiter un problème à la fois et prioriser les fonctionnalités qui créent de la valeur.",
    mob_phase1_title: "Phase 1 · Découverte",
    mob_phase1_desc:
      "Présentation de votre projet, compréhension de votre modèle économique et des cas d'usage. On clarifie ensemble la version 1 de l'application.",
    mob_phase2_title: "Phase 2 · Développement (30 jours)",
    mob_phase2_desc:
      "Développement en React Native / Expo ou Bubble.io, avec échanges réguliers pour rester alignés sur votre vision.",
    mob_phase3_title: "Phase 3 · Retours & retouches",
    mob_phase3_desc:
      "Mise en production, analyse des premiers retours utilisateurs et série de retouches pour ajuster l'app sans repartir de zéro.",
    mob_formulas_title: "Formules possibles pour votre app",
    mob_formula_landing_title: "Formule MVP landing.",
    mob_formula_landing_desc:
      "Une page de vente en ligne pour tester l'intérêt avant de développer l'application complète.",
    mob_formula_mvp_title: "Formule MVP app.",
    mob_formula_mvp_desc:
      "Une première version simplifiée avec les fonctionnalités essentielles, idéale pour valider votre idée auprès de vrais utilisateurs.",
    mob_formula_template_title: "Formule template.",
    mob_formula_template_desc:
      "App basée sur une template existante, personnalisée à votre cas, pour réduire le temps de développement et le budget.",
    mob_formula_unlimited_title: "Formule illimitée.",
    mob_formula_unlimited_desc:
      "Application plus poussée, avec ensemble des fonctionnalités essentielles et secondaires, publication sur les stores et accompagnement dans la durée.",
    mob_stack:
      "Stack principale : React / React Native, TypeScript, Node.js, Next.js, TailwindCSS, PostgreSQL, Firebase, Bubble.io, intégration IA (OpenAI, Azure, Google…).",
    mob_projects_title: "Exemples d'applications mobiles",
    mob_projects_subtitle:
      "Quelques projets sur lesquels j'ai travaillé, mêlant expérience utilisateur, temps réel et intégrations métier.",
    mob_cta_title: "Vous avez une idée d'application mobile ?",
    mob_cta_desc:
      "Envoyez-moi un message avec quelques mots sur votre projet. On voit ensemble comment passer de l'idée à une application utilisée par vos clients.",
    mob_cta_talk: "Parler de mon projet",
    mob_cta_home: "Voir la page principale",

    // Offer page
    off_tag: "Offre Spéciale · Durée limitée",
    off_h1: "Votre MVP Gratuit & Aperçu Immédiat.",
    off_intro: "Obtenez un premier aperçu fonctionnel de votre projet sans frais. Domaine offert et lancement de votre application mobile ou SaaS à partir de 1000€.",
    off_preview_title: "MVP Gratuit & Aperçu Immédiat",
    off_preview_desc: "Je réalise un premier aperçu fonctionnel (MVP) de votre projet gratuitement et immédiatement pour valider votre idée.",
    off_domain_title: "Domaine Offert",
    off_domain_desc: "Votre nom de domaine (.fr, .com, .net) est offert pour la première année de lancement.",
    off_reactivity_title: "Livraison en 30 jours",
    off_reactivity_desc: "Un MVP fonctionnel livré en un mois maximum pour tester votre marché sans attendre.",
    off_price_title: "À partir de 1000€",
    off_price_desc: "Des tarifs imbattables pour votre application ou site web, sans compromis sur la qualité. Le prix juste pour votre lancement.",
    off_cta_main: "Profiter de l'offre maintenant",
    off_cta_whatsapp: "Discuter sur WhatsApp",
    off_services_title: "Une offre valable sur tous nos services",
    off_saas_link: "Développement SaaS",
    off_mobile_link: "Applications Mobiles",
    off_web_link: "Sites Internet Vitrine",

    // Blog
    blog_title: "Le Blog Digital",
    blog_subtitle: "Conseils, stratégies et retours d'expérience pour réussir votre produit digital.",
    blog_read_more: "Lire l'article",
    blog_back: "Retour au blog",

    // Article: MVP
    article_mvp_title: "Comment créer un MVP en 3 étapes",
    article_mvp_description: "La méthode pour valider votre idée sans gaspiller de ressources et s'assurer d'un marché dynamique.",
    article_mvp_date: "26 Mars 2026",
    article_mvp_content: `
      <p>Un MVP, ou <strong>Produit Minimum Viable</strong>, n'est pas une version "dégradée" de votre vision. C'est l'outil le plus puissant pour transformer une intuition en un produit que les gens achètent réellement. Son rôle unique ? Vérifier si votre idée répond à un vrai besoin avant d'investir massivement.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Étape 1 : Identifier la fonctionnalité "cœur"</h2>
        <p>Posez-vous la question fatidique : <em>"Sans quelle fonctionnalité mon application perd-elle tout son sens ?"</em></p>
        <p>C'est votre cœur de produit. Avec cette seule fonctionnalité, l'application doit déjà résoudre le problème principal de l'utilisateur. Tout le reste (design ultra-poussé, options de personnalisation, parrainage) n'est que du bruit à ce stade.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">Étape 2 : Simplifier pour vérifier le marché</h2>
        <p>Une fois l'essentiel identifié, demandez-vous comment vérifier sa pertinence avec le moins d'efforts possible. L'objectif est d'obtenir un signal clair du marché.</p>
        <p><strong>Exemple :</strong> Vous voulez lancer un service de conciergerie ? Créez une simple page de vente (Landing Page) expliquant votre offre avec un bouton "Acheter". Même si le bouton mène à une liste d'attente, le nombre de clics est une preuve de marché bien plus réelle que n'importe quelle étude théorique.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h2 class="text-2xl font-bold mb-4 italic">Étape 3 : Valider par l'action (le paiement)</h2>
        <p>Un MVP est réellement validé quand un utilisateur effectue une action concrète et "coûteuse" : laisser son email, son numéro, ou mieux encore, <strong>sortir sa carte bancaire</strong>.</p>
        <p>C'est à ce moment précis que l'on sait si l'idée est rentable. Si personne n'est prêt à payer pour le cœur de votre produit, ajouter des options secondaires ne changera rien au résultat.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Conclusion : Itérer ou pivoter</h2>
      <p>Si la fonctionnalité essentielle attire des clients, doublez la mise : améliorez l'expérience et ajoutez des features. Sinon ? Vous avez économisé des mois de développement et des milliers d'euros. Vous pouvez maintenant pivoter sereinement vers une meilleure idée.</p>
    `,

    // Article: Free MVP
    article_free_mvp_title: "MVP Gratuit : La meilleure stratégie pour lancer votre business",
    article_free_mvp_description: "Comment nous vous accompagnons de l'idée au premier paiement client, sans barrière financière.",
    article_free_mvp_date: "27 Mars 2026",
    article_free_mvp_content: `
      <p>Lancer une startup ou un nouveau produit digital est souvent freiné par deux obstacles majeurs : le <strong>coût de développement</strong> et l'<strong>incertitude du marché</strong>. Chez Maximilien Digital, nous avons supprimé ces barrières avec une approche radicale : nous créons votre MVP gratuitement.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">1. Un MVP créé gratuitement</h2>
        <p>Pourquoi ? Parce que nous croyons en la puissance de la validation par l'usage. Nous développons le cœur de votre produit sans frais initiaux pour vous permettre de le mettre entre les mains de vos utilisateurs le plus vite possible.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">2. On vous trouve le financement</h2>
        <p>Vous n'avez pas les fonds pour passer à l'échelle supérieure ? Pas de panique. Si votre MVP montre des signes de traction, nous vous accompagnons dans la recherche de financements externes pour financer le développement de la version complète.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 italic">3. Vitesse éclair : 2 mois max</h2>
        <p>Le temps est votre ressource la plus précieuse. Notre processus est optimisé pour passer de l'idée au produit fonctionnel en <strong>moins de 8 semaines</strong>. C'est le délai idéal pour garder le momentum et tester votre marché en temps réel.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/10 border border-secondary/20 text-center">
        <h3 class="text-xl font-bold mb-4">Bonus : On vous offre le nom de domaine</h3>
        <p>Pour tout lancement d'un MVP gratuit, nous vous offrons votre nom de domaine pour la première année. Un détail qui compte pour démarrer sans aucun frais.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Accompagnement jusqu'au succès</h2>
      <p>Notre engagement ne s'arrête pas au code. Nous restons à vos côtés et vous coachons jusqu'à ce que vous receviez votre <strong>premier paiement client</strong>. C'est pour nous la seule et unique preuve que votre business est sur les bons rails.</p>
      
      <p><strong>C'est, selon nous, le meilleur moyen de vérifier si une idée fonctionne avant de s'engager sur le long terme.</strong></p>
    `,

    // Article: Website Creation
    article_website_title: "Comment créer son site internet en 3 étapes",
    article_website_description: "La méthode Maximilien Digital pour transformer votre idée en un business en ligne rentable et pérenne.",
    article_website_date: "28 Mars 2026",
    article_website_content: `
      <p>Créer un site internet ne devrait pas être un saut dans l'inconnu. Chez Maximilien Digital, nous avons structuré une méthode en 3 étapes pour vous garantir un produit qui non seulement fonctionne techniquement, mais qui répond surtout à un vrai besoin du marché.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Étape 1 : Identifier la fonctionnalité "cœur"</h2>
        <p>Trop de projets échouent car ils veulent tout faire tout de suite. Notre première mission est de vous aider à identifier le service essentiel, celui qui apporte la plus grande valeur à vos clients.</p>
        <p><em>Besoin d'aide pour isoler ce besoin ? Contactez-nous pour une session stratégique.</em></p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4 font-bold">Étape 2 : Aperçu Gratuit & MVP</h2>
        <p>Avant d'investir massivement, nous validons l'idée. Cela commence par un <strong>aperçu gratuit</strong> (notre offre phare) pour visualiser votre futur site. Ensuite, nous passons au développement du MVP (Produit Minimum Viable) à moindre coût pour tester la pertinence sur le terrain.</p>
        <div class="mt-6">
          <a href="/offre" class="text-primary font-bold hover:underline">Découvrir l'aperçu gratuit →</a>
        </div>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Étape 3 : Développement, Maintenance & Croissance</h2>
        <p>Une fois le MVP validé par vos premiers clients, nous déployons l'artillerie lourde. Développement complet, optimisation des performances, et mise en place d'une maintenance rigoureuse. Nous restons votre partenaire technique pour faire évoluer votre plateforme au rythme de votre croissance.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Prêt à lancer votre vision ?</h2>
      <p>Ne laissez pas la technique freiner vos ambitions. Contactez-nous dès aujourd'hui pour faire de votre idée un succès digital concret.</p>
    `,

    // Article: Cost of Mobile App
    article_app_cost_title: "Combien coûte une application mobile en 2026",
    article_app_cost_description: "Découvrez pourquoi développer une application mobile (React Native / No-Code) coûte aujourd'hui entre 1 000 € et 10 000 € avec un accompagnement A à Z.",
    article_app_cost_date: "29 Mars 2026",
    article_app_cost_content: `
      <p>L'époque où une application mobile coûtait systématiquement 50 000 € est révolue. En 2026, avec l'essor du No-Code, du Low-Code et des frameworks comme React Native, le développement est devenu beaucoup plus accessible et rapide.</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">La vraie réponse ? Ça dépend.</h2>
        <p>Impossible de donner un prix fixe sans connaître vos besoins. En fonction de la complexité de votre projet, le coût s'adapte. Un projet simple peut démarrer à moins de 1 000 €, tandis qu'une application complexe avec de nombreuses intégrations (IA, base de données avancée, fonctionnalités en temps réel) se situera le plus souvent sous la barre des 10 000 €.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">L'accompagnement de A à Z</h2>
        <p>L'avantage indiscutable de faire appel à un expert plutôt qu'à une agence classique, c'est l'accompagnement personnalisé. Chez Maximilien Digital, nous vous accompagnons du premier croquis jusqu'au premier encaissement, en passant par le conseil sur la rentabilité de l'application.</p>
      </div>
      
      <div class="my-12 p-8 rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all text-center shadow-sm">
        <h2 class="text-3xl font-bold mb-6 italic">Le MVP Offert</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          Pour réduire encore le risque financier, nous proposons la création de votre MVP (Minimum Viable Product) <strong>gratuitement</strong>. Vous validez l'idée technique et l'intérêt marché sans avancer de frais lourds avant la version finale.
        </p>
        <div class="mt-8">
          <a href="/offre" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
            Découvrir l'offre MVP Gratuit
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Conclusion : Lancez-vous sans risque</h2>
      <p>N'attendez plus que les devis d'agences freinent votre ambition. Testez votre marché rapidement, de manière professionnelle et à moindre coût.</p>
    `,

    // Article: Quick MVP without Developer
    article_no_code_mvp_title: "Créer un MVP rapidement sans développeur",
    article_no_code_mvp_description: "L'essor du No-Code est indéniable, mais voici pourquoi la solution la plus rapide reste souvent de confier votre MVP gratuit à un expert.",
    article_no_code_mvp_date: "30 Mars 2026",
    article_no_code_mvp_content: `
      <p>L'écosystème du développement web et mobile a radicalement évolué. Il existe désormais une multitude d'outils et de méthodes permettant de créer des applications complètes sans écrire une seule ligne de code ou en déléguant cette tâche à l'Intelligence Artificielle. Face à cette abondance, quelle est réellement la méthode la plus efficace pour un entrepreneur dont la seule priorité est d'aller vite sur le marché ?</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Le No-Code et ses outils phares</h2>
        <p>Le terme "No-Code" est bien plus qu'un simple buzzword. Des plateformes très performantes permettent aujourd'hui de concevoir des interfaces et des logiques métier complexes visuellement. Voici quelques références incontournables :</p>
        <ul class="list-disc pl-6 mt-6 mb-6 space-y-3 text-muted-foreground">
          <li><a href="https://bubble.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">Bubble.io</a> : Le leader mondial pour le développement rapide d'applications web complexes.</li>
          <li><a href="https://flutterflow.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">FlutterFlow</a> : Idéal pour générer de vraies applications mobiles natives performantes.</li>
          <li><a href="https://glideapps.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">Glide</a> : L'outil parfait pour transformer un simple tableur de données en application en quelques minutes.</li>
        </ul>
        <p>Ces outils sont extrêmement puissants, mais ils demandent tout de même un temps d'adaptation important pour comprendre la structuration des bases de données et des workflows.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">Le "Vibe Coding" : Coder avec l'IA</h2>
        <p>Une nouvelle révolution vient bousculer le développement : le <strong>"Vibe Coding"</strong>. Il s'agit d'utiliser des intelligences artificielles avancées pour générer du code à votre place, simplement en leur parlant. Les résultats sont souvent stupéfiants. Vous décrivez l'interface que vous souhaitez, et l'IA (comme Cursor, Lovable ou v0) l'écrit instantanément.</p>
        <p class="mt-4"><strong>Mais attention au mythe du clic magique :</strong> Bien que la création initiale soit fulgurante, l'assemblage des modules, le déploiement en ligne, la gestion des authentifications et des bases de données, ainsi que la correction d'erreurs générées par l'IA demandent des compétences très solides. Il y a une véritable courbe d'apprentissage technique et un risque de perdre énormément de temps en étant bloqué sur un bug subtil caché dans le code généré.</p>
      </div>
      
      <div class="my-16 p-10 rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all shadow-sm">
        <h2 class="text-3xl font-bold mb-6">La vraie solution rapide : Notre offre MVP</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          La méthode la plus performante pour tester une idée consiste en réalité à <strong>déléguer la technique</strong> à un acteur qui maîtrise déjà l'outil classique, les plateformes No-Code et le code assisté par IA.
        </p>
        <p class="mt-6 text-lg text-muted-foreground leading-relaxed">
          C'est précisément pour cette raison que nous proposons l'offre <strong class="text-foreground">"MVP Gratuit et Aperçu Immédiat"</strong>. Pourquoi apprendre un nouvel outil de zéro ou lutter avec une IA capricieuse, quand nous pouvons réaliser la première version tangible de votre concept gratuitement et immédiatement ?
        </p>
        <div class="mt-8">
          <a href="/offre" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
            Découvrir l'offre MVP Gratuit
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Concentrez-vous sur votre business</h2>
      <p>Le temps d'un entrepreneur est sa ressource la plus précieuse et la plus limitée. Économisez de précieuses semaines d'apprentissage ou de tâtonnement, et laissez des experts s'occuper sereinement de la technique. Votre priorité absolue doit obligatoirement rester la validation de votre marché cible et l'acquisition de vos tous premiers clients.</p>
    `,

    // Article: Accounting Digitalization
    article_accounting_digital_title: "Pourquoi les experts-comptables doivent digitaliser",
    article_accounting_digital_description: "La digitalisation des cabinets comptables : gagner du temps, arrêter la saisie manuelle et intégrer les factures électroniques intelligemment.",
    article_accounting_digital_date: "31 Mars 2026",
    article_accounting_digital_content: `
      <p>Le métier d'expert-comptable est en pleine mutation. La digitalisation de votre fonctionnement interne et externe n'est plus une option facultative, c'est devenu une question de survie, de compétitivité et de confort de travail.</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Gagner un temps précieux</h2>
        <p>La récupération, le tri et la saisie des factures sont des processus extrêmement chronophages. Mettre en place un logiciel intelligent de lecture OCR et d'automatisation libère un temps considérable pour vos collaborateurs. L'objectif ? Se recentrer sur l'essentiel : le <strong>conseil personnalisé aux clients</strong>.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">La facturation électronique</h2>
        <p>Avec l'arrivée inévitable des obligations de facturation électronique (e-invoicing), les flux de données transigeront de manière totalement différente. S'équiper des bons outils digitaux et des bonnes API (PDP/PPF) dès aujourd'hui permet d'anticiper très sereinement cette transition majeure.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h2 class="text-2xl font-bold mb-4 italic">La fin de la saisie manuelle</h2>
        <p>Soyons honnêtes : plus aucun collaborateur social ou comptable n'aime faire de la saisie manuelle à longueur de journée. Utiliser des portails collaboratifs et intégrer l'intelligence artificielle pour la pré-imputation rendra le travail bien plus gratifiant, précis et attractif pour vos équipes.</p>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Faites le pas vers une automatisation sur mesure</h2>
      <p>L'expertise comptable de demain s'appuie sur la technologie. Avec l'expérience de Maximilien Digital dans la digitalisation avancée de documents administratifs, nous pouvons vous accompagner pour créer les outils internes d'automatisation qui feront décoller votre cabinet.</p>
    `,
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_mobile: "Mobile",
    nav_saas: "SaaS",
    nav_web: "Websites",
    nav_financement: "Funding",
    nav_offer: "Offer",
    nav_blog: "Blog",

    // Creation Site Web page
    web_hero_badge: "🚀 Launch offer — Limited spots",
    web_hero_title: "Your professional website",
    web_hero_title_gradient: "delivered in 7 to 15 days",
    web_hero_sub: "Custom-made, fast, SEO-optimized — without blowing your budget.",
    web_hero_cta1: "View the offers",
    web_hero_cta2: "Free video call",
    web_trust_fast: "Express delivery",
    web_trust_custom: "100% custom",
    web_trust_code: "Source code included",
    web_trust_ai: "AI-powered",

    web_problem_title: "A poorly designed site costs you",
    web_problem_title_gradient: "clients every day",
    web_problem_bad_title: "Without a professional site",
    web_problem_bad_1: "Your prospects go to competitors",
    web_problem_bad_2: "You lose credibility",
    web_problem_bad_3: "Impossible to be found on Google",
    web_problem_bad_4: "No automation, everything is manual",
    web_problem_good_title: "With your custom site",
    web_problem_good_1: "You inspire trust from the first click",
    web_problem_good_2: "Your clients find you on Google",
    web_problem_good_3: "You receive inquiries 24/7",
    web_problem_good_4: "Your business runs even while you sleep",

    web_usp_title: "Why choose me",
    web_usp_title_gradient: "over someone else?",
    web_usp_sub: "I'm not just a developer. I'm also an entrepreneur.",
    web_usp1_title: "Business vision",
    web_usp1_desc: "Trained in entrepreneurship and finance, I challenge your project to maximize your results.",
    web_usp2_title: "AI speed",
    web_usp2_desc: "Thanks to AI, I code 3x faster than a traditional developer. Your site is ready in days, not months.",
    web_usp3_title: "100% custom",
    web_usp3_desc: "No generic template. Every page is designed specifically for your business and goals.",
    web_usp4_title: "Built to convert",
    web_usp4_desc: "SEO optimized, responsive design, fast loading — your site is a growth tool.",
    web_usp5_title: "You own it",
    web_usp5_desc: "Source code delivered on GitHub. No dependency, no hidden subscription. The site is 100% yours.",
    web_usp6_title: "Real support",
    web_usp6_desc: "I advise you on your strategy, business model, and project structuring.",

    web_packs_title: "Choose the offer",
    web_packs_title_gradient: "that fits you",
    web_packs_sub: "All packs include: responsive design, basic SEO, source code delivered, and an explanatory PDF.",
    web_pack_popular: "Most popular",
    web_pack_cta: "Choose this pack",
    web_packs_note: "Need something specific?",
    web_packs_note_link: "Contact me for a custom offer.",

    web_pack1_name: "Essential",
    web_pack1_tagline: "Ideal to start your online presence",
    web_pack1_f1: "Professional one-page site",
    web_pack1_f2: "Up to 5 custom sections",
    web_pack1_f3: "Responsive design (mobile, tablet, PC)",
    web_pack1_f4: "Integrated contact form",
    web_pack1_f5: "Links to your social networks",
    web_pack1_f6: "Basic SEO (tags, titles, descriptions)",
    web_pack1_f7: "3 revisions included",
    web_pack1_f8: "Delivered in <strong>7 days</strong>",

    web_pack2_name: "Pro",
    web_pack2_tagline: "To structure and grow your business",
    web_pack2_f1: "Multi-page site (up to 5 pages)",
    web_pack2_f2: "Premium design + micro-animations",
    web_pack2_f3: "Advanced form (quote / booking)",
    web_pack2_f4: "Floating WhatsApp / Messenger button",
    web_pack2_f5: "Optimized SEO + Google submission",
    web_pack2_f6: "Google Analytics connected",
    web_pack2_f7: "5 revisions included",
    web_pack2_f8: "Delivered in <strong>10 days</strong>",

    web_pack3_name: "Business",
    web_pack3_tagline: "The complete site to scale your business",
    web_pack3_f1: "Up to 10 custom pages",
    web_pack3_f2: "High-end design + animations",
    web_pack3_f3: "Payment module (Stripe)",
    web_pack3_f4: "Admin dashboard",
    web_pack3_f5: "Integrated blog + 2 SEO articles",
    web_pack3_f6: "Advanced SEO + keyword audit",
    web_pack3_f7: "AI features on demand",
    web_pack3_f8: "10 revisions included",
    web_pack3_f9: "Delivered in <strong>15 days</strong>",

    web_process_title: "How it works",
    web_process_title_gradient: "in practice",
    web_step1_title: "Discovery",
    web_step1_desc: "You present your project. I challenge your ideas to ensure the result satisfies you 100%.",
    web_step2_title: "Mockup",
    web_step2_desc: "I model your site before coding. You validate the design and structure before development.",
    web_step3_title: "Development",
    web_step3_desc: "Your site comes to life. We exchange regularly to stay aligned with your vision.",
    web_step4_title: "Delivery",
    web_step4_desc: "I transfer the code (GitHub), access, and an explanatory PDF. You're 100% autonomous.",

    web_integ_title: "What I can",
    web_integ_title_gradient: "integrate into your site",
    web_integ_1: "Contact form",
    web_integ_2: "Appointment booking",
    web_integ_3: "Online payment",
    web_integ_4: "Newsletter",
    web_integ_5: "Live chat",
    web_integ_6: "Photo / video gallery",
    web_integ_7: "Blog",
    web_integ_8: "Dashboard",
    web_integ_9: "Geolocation",
    web_integ_10: "PDF download",
    web_integ_11: "Statistics",
    web_integ_12: "CRM connection",
    web_integ_13: "Artificial Intelligence",
    web_integ_14: "Social networks",
    web_integ_15: "Multi-language",

    web_faq_title: "Frequently",
    web_faq_title_gradient: "asked questions",
    web_faq1_q: "How much does it cost after delivery?",
    web_faq1_a: "Nothing from me. The site is 100% yours. The only recurring costs are your domain name and hosting (about €50-80/year). I guide you for free in choosing the best host.",
    web_faq2_q: "Can I modify the site myself?",
    web_faq2_a: "Yes. You receive the complete source code and a PDF guide. For simple changes (texts, images), I show you how. For complex changes, I remain available.",
    web_faq3_q: "How quickly will my site be ready?",
    web_faq3_a: "Between 7 and 15 days depending on the chosen pack. Thanks to AI, I develop much faster than a traditional developer, without sacrificing quality.",
    web_faq4_q: "Will my site be visible on Google?",
    web_faq4_a: "Yes. All sites include basic SEO optimization. From the Pro Pack, I submit your site to Google and connect Analytics to track your performance.",
    web_faq5_q: "What's the difference with a WordPress site?",
    web_faq5_a: "A custom-coded site is faster, more secure, and 100% customizable — without template limitations. No plugins to update, no risk of bugs from WordPress updates.",
    web_faq6_q: "What if I need a mobile app?",
    web_faq6_a: "I can also develop mobile applications (App Store & Google Play). Contact me for a custom offer tailored to your project.",
    web_faq7_q: "What happens if I'm not satisfied?",
    web_faq7_a: "Each pack includes revisions (3 to 10 depending on the pack). We validate each step together before moving to the next. Your satisfaction is my priority.",

    web_cta_title: "Ready to launch your site?",
    web_cta_sub: "Send me a message to discuss your project. I'll respond within the hour.",
    web_cta_message: "Send me a message",
    web_cta_whatsapp: "Free video call",
    web_cta_bonus: "Launch offer: receive a personalized visual preview of your future site, for free.",


    // Hero
    hero_tagline: "Development Studio",
    hero_form_title: "Let's build your web product.",
    hero_form_gift_subtitle: "Receive a <strong class=\"text-primary\">free mockup</strong> of your project by email within 24h.",
    hero_form_success_title: "Here we go! 🎉",
    hero_form_success_sub: "Your free mockup is being prepared.",
    hero_form_success_desc: "You will receive a link to your personalized mockup directly by email within <strong class=\"text-foreground\">24 hours</strong>.",
    hero_form_success_btn: "Discover the agency in the meantime",
    hero_form_step1_q: "What type of application do you want to build?",
    hero_form_step1_opt1: "Web App / PWA",
    hero_form_step1_opt2: "Native Mobile App",
    hero_form_step2_q: "Who is this tool for?",
    hero_form_step2_opt1: "General public (B2C)",
    hero_form_step2_opt2: "Internal tool / B2B",
    hero_form_step3_q: "What is your industry?",
    hero_form_step3_opt1: "Accounting / Finance",
    hero_form_step3_opt2: "Retail / E-commerce",
    hero_form_step3_opt3: "B2B Services",
    hero_form_step3_opt4: "Craftsmanship / Construction",
    hero_form_step3_opt5: "Other",
    hero_form_step4_q: "What is your estimated budget?",
    hero_form_step4_opt1: "Under 500 €",
    hero_form_step4_opt2: "Under 1,000 €",
    hero_form_step4_opt3: "Between 1,000 € and 5,000 €",
    hero_form_step4_opt4: "Between 5,000 € and 15,000 €",
    hero_form_step4_opt5: "More than 15,000 €",
    hero_form_step5_q: "Describe your project in a few words",
    hero_form_step5_sub: "The more precise you are, the closer your free mockup will be to your vision.",
    hero_form_step5_ph: "E.g.: I want a dashboard to track sales across my 3 stores, with alerts when stock is low...",
    hero_form_step5_btn: "Continue",
    hero_form_step6_q: "Where should we send your mockup?",
    hero_form_step6_sub: "You will receive your free mockup within 24h by email.",
    hero_form_step6_email: "Professional Email",
    hero_form_step6_phone: "Phone Number (optional)",
    hero_form_sending: "Sending...",
    hero_form_submit_btn: "Get my free mockup 🎁",
    hero_form_back: "Back",
    hero_form_scroll: "More information",
    hero_subtitle:
      "I develop Custom Web Applications (PWA), Dashboards and CRMs for SMEs, Accountants and Retailers. Automation of your complex processes and API connections.",
    hero_cta: "Estimate the cost of my application",
    hero_dev_role: "B2B Web Apps & PWA Creator",
    hero_projects: "+ 30 applications",

    // Services section
    services_title: "What I do",
    services_subtitle:
      "Micro-business tools, automations, and custom portals to replace your broken processes.",

    // Services data
    service_portal_title: "Smart Client Portal",
    service_portal_desc:
      "Custom portals for accountants, lawyers, agencies, and craftsmen. Centralize exchanges and make your clients' lives easier.",
    service_automation_title: "Administrative AI Automation",
    service_automation_desc:
      "Automation of email processing, invoices, reminders, documents, and OCR. Free up valuable time for your team.",
    service_mvp_title: "Business MVP in 14 days",
    service_mvp_desc:
      "Ultra-fast launch of a functional first version for entrepreneurs. Test your market without waiting months.",
    service_excel_title: "Excel Replacement with a real app",
    service_excel_desc:
      "Transformation of your complex Excel files into a real secure, collaborative, and scalable application.",

    // Projects section
    projects_title: "My work",
    projects_subtitle: "A few projects I've worked on recently.",

    // Projects data
    project_invoices_title: "OCR Invoice Processing",
    project_invoices_desc:
      "An internal web application to automate reading, processing, and validating invoices using artificial intelligence.",
    project_crm_title: "Custom CRM",
    project_crm_desc:
      "A bespoke SaaS CRM for sales teams. Mandate tracking, automated follow-ups, and API connection with invoicing tools.",
    project_rh_title: "Secure Extranet Portal",
    project_rh_desc:
      "A custom collaborative space for secure document exchange, electronic signatures, and client file tracking.",
    project_stock_title: "Management Dashboard & APIs",
    project_stock_desc:
      "A business application connected to an existing ERP to visualize stock levels in real time and generate KPI performance reports.",

    // Testimonials section
    testimonials_title: "What my clients say",
    testimonials_subtitle: "Real feedback from those who trusted me.",
    testimonials_see_more: "See more reviews on ComeUp",
    testimonials_based_on: "Based on 10+ five-star reviews",

    // Final CTA section
    finalcta_title: "Talk to us about your project",
    finalcta_subtitle:
      "Tell us your idea in a few words. We'll get back to you to bring your digital vision to life.",
    finalcta_cta: "Talk to us about your project",

    // Footer
    footer_rights: "All rights reserved.",

    // Team Section
    team_title: "The Maximilien Digital Team",
    team_subtitle: "Three passionate developers bringing your most ambitious ideas to life.",
    team_role_architect: "Software Architect & Entrepreneurial Guide",
    team_role_fullstack: "Fullstack Engineer",
    footer_reviews: "ComeUp Reviews",

    // Scroll notification popup
    popup_title: "Your project deserves better 💡",
    popup_subtitle: "Let's talk now — reply within 24h.",
    popup_cta: "Talk about my project",

    // Quick contact modal
    qc_title: "Get a callback quickly",
    qc_subtitle:
      "Simply leave your phone number or join the WhatsApp group to chat directly.",
    qc_phone_label: "Phone number",
    qc_phone_placeholder: "+1 234 567 8901",
    qc_submit: "Send my number",
    qc_whatsapp: "Join the WhatsApp group",

    // Contact form modal
    cf_title: "Tell me about your project",
    cf_subtitle: "Describe your idea and I'll get back to you quickly.",
    cf_name: "Your first name",
    cf_email: "Email",
    cf_phone: "Phone (optional)",
    cf_description: "Describe your project",
    cf_description_placeholder: "Tell me about your idea, your goals, your timeline...",
    cf_budget: "Estimated budget",
    cf_submit: "Send my request",
    cf_sending: "Sending…",
    cf_budget_placeholder: "Select a budget",
    cf_success_title: "Message sent!",
    cf_success_subtitle: "I'll get back to you as soon as possible.",
    cf_error: "Something went wrong. Please try again or contact me directly.",

    // Budget options
    budget_500: "Less than €1,000",
    budget_1k: "Around €1,000",
    budget_2k: "Around €2,000",
    budget_3k: "Around €3,000",
    budget_lt5k: "Less than €5,000",
    budget_5k10k: "€5,000 - €10,000",
    budget_10k25k: "€10,000 - €25,000",
    budget_25k50k: "€25,000 - €50,000",
    budget_gt50k: "More than €50,000",
    budget_unknown: "Not sure yet",

    // Estimation modal - developers
    dev_jules_desc: "Slightly more expensive · Very responsive · Fullstack · Highly available",
    dev_mathieu_desc: "Slightly less expensive · Fullstack · Less available",

    // Estimation modal general
    est_title: "Estimate your project",
    est_subtitle: "A few questions to give you an indicative budget.",
    est_project_type: "Project type",
    est_choose_dev: "Choose your developer",
    est_next: "Next",
    est_prev: "Back",
    est_contact: "Get in touch",
    est_budget_title: "Estimated budget",

    // Financement page
    fin_tag: "Funding",
    fin_title: "Find funding for your application.",
    fin_desc:
      "You have a SaaS or mobile app idea but still need to validate the budget, reassure partners, or secure funding (bank, grants, investors, etc.)? I can help you turn your idea into a clear, costed, and technically credible project. For any funding-related questions, you can reach me directly at",
    fin_cta_call: "Call 07 66 07 47 46",
    fin_cta_estimate: "Estimate my app budget",

    // SaaS page
    saas_tag: "SaaS & web platforms · MVP in 30 days",
    saas_h1: "A functional SaaS application in 30 days.",
    saas_intro:
      "I work with companies and founders who want to turn an idea into a real SaaS platform: back-office, API, customer accounts, payments… I prioritise a fast, usable MVP that can evolve rather than an unmaintainable demo.",
    saas_cta1: "Estimate my SaaS project",
    saas_cta2: "Talk about my platform",
    saas_cta3: "Find funding",
    saas_li1: "SaaS MVP in under 30 days, focused on your core features.",
    saas_li2: "Scalable architecture (multi-tenant, roles, permissions).",
    saas_li3: "AI integration, payments, transactional emails, and automations.",
    saas_li4: "Modern hosting (Vercel, managed services) for peace of mind.",
    saas_approach_title: "A product mindset, not just technical",
    saas_approach_desc:
      "The goal is not to pile up features, but to deliver a product your customers actually understand and use. We clarify the core of your value proposition, then build around it.",
    saas_step1_title: "1. Scoping & wireframe",
    saas_step1_desc: "Identifying personas, key user flows, and the first screens to deliver.",
    saas_step2_title: "2. MVP in production",
    saas_step2_desc:
      "A first usable, secure, and monitored version ready for your early users.",
    saas_step3_title: "3. Iterations & scalability",
    saas_step3_desc: "Continuous improvements, new features, and performance optimisation.",
    saas_process_title: "How we build your SaaS",
    saas_process_desc:
      "My role is to help you ship a working product that solves a well-identified problem for your customers, on a solid technical foundation.",
    saas_phase1_title: "Phase 1 · Discovery",
    saas_phase1_desc:
      "Analysing your needs, subscription model, user roles, and the first essential screens (dashboard, back-office, etc.).",
    saas_phase2_title: "Phase 2 · Development (30 days)",
    saas_phase2_desc:
      "Setting up the architecture (API, database, auth), building essential features, and shipping a usable MVP.",
    saas_phase3_title: "Phase 3 · Feedback & iterations",
    saas_phase3_desc:
      "Collecting user feedback, bug fixes, adding secondary features, and ongoing support.",
    saas_phase4_title: "Phase 4 · Maintenance & Evolution",
    saas_phase4_desc:
      "Application monitoring, bug resolution, and continuous development of new features based on your needs.",
    saas_stack:
      "Main stack: React, Next.js, Node.js / TypeScript, PostgreSQL, Redis, TailwindCSS, AI integrations (OpenAI, Azure, Google…) and optionally Bubble.io for certain modules.",
    saas_projects_title: "Projects close to a SaaS product",
    saas_projects_subtitle:
      "Web platforms, admin interfaces, real-time data integrations, and advanced back-office features.",
    saas_cta_title: "Building a SaaS or B2B platform?",
    saas_cta_desc:
      "Tell me about your product, your customers, and your technical challenges. Together we'll figure out how to structure a solid first MVP.",
    saas_cta_whatsapp: "Chat on WhatsApp",
    saas_cta_home: "View main page",

    // Mobile page
    mob_tag: "Mobile apps · MVP in 30 days",
    mob_h1: "A functional mobile app in 30 days.",
    mob_intro:
      "I work with companies, project owners, and entrepreneurs who want to launch a mobile app or PWA — simple or complex. iOS, Android, or both: I design and develop apps that get to market fast, with the option to integrate artificial intelligence.",
    mob_cta1: "Chat about my app on WhatsApp",
    mob_cta2: "Estimate my app budget",
    mob_cta3: "Find funding",
    mob_li1: "App MVP in under 30 days.",
    mob_li2: "Single codebase for iOS & Android (React Native / Expo) or Bubble.io.",
    mob_li3: "AI integration (chatbots, assistants, content generation…).",
    mob_li4: "Published on the App Store, Google Play, or as a PWA.",
    mob_approach_title: "Full support for your application",
    mob_approach_desc:
      "We clarify priority features together, then I build a robust MVP that can evolve. The goal: ship a first version quickly, measure usage, then iterate.",
    mob_step1_title: "1. Product scoping",
    mob_step1_desc:
      "A quick workshop to clarify the target audience, user flows, and identify essential screens.",
    mob_step2_title: "2. Prototype & design",
    mob_step2_desc: "Interactive mockups to validate flows before writing a single line of code.",
    mob_step3_title: "3. Development & launch",
    mob_step3_desc: "Development, testing, publishing, then follow-up for early versions.",
    mob_process_title: "What I do for your mobile app",
    mob_process_desc:
      "My goal is to deliver an app your customers can actually use — not just a mockup. We tackle one problem at a time and prioritise features that create real value.",
    mob_phase1_title: "Phase 1 · Discovery",
    mob_phase1_desc:
      "Presenting your project, understanding your business model and use cases. We define version 1 of the app together.",
    mob_phase2_title: "Phase 2 · Development (30 days)",
    mob_phase2_desc:
      "Development in React Native / Expo or Bubble.io, with regular check-ins to stay aligned with your vision.",
    mob_phase3_title: "Phase 3 · Feedback & tweaks",
    mob_phase3_desc:
      "Going live, analysing early user feedback, and a round of tweaks to refine the app without starting over.",
    mob_formulas_title: "Packages for your app",
    mob_formula_landing_title: "MVP landing package.",
    mob_formula_landing_desc:
      "An online sales page to test interest before building the full app.",
    mob_formula_mvp_title: "MVP app package.",
    mob_formula_mvp_desc:
      "A simplified first version with essential features — ideal for validating your idea with real users.",
    mob_formula_template_title: "Template package.",
    mob_formula_template_desc:
      "App built on an existing template, customised to your use case, to reduce development time and budget.",
    mob_formula_unlimited_title: "Unlimited package.",
    mob_formula_unlimited_desc:
      "A more advanced app with all essential and secondary features, store publishing, and ongoing support.",
    mob_stack:
      "Main stack: React / React Native, TypeScript, Node.js, Next.js, TailwindCSS, PostgreSQL, Firebase, Bubble.io, AI integration (OpenAI, Azure, Google…).",
    mob_projects_title: "Mobile app examples",
    mob_projects_subtitle:
      "A few projects I've worked on, blending user experience, real-time features, and business integrations.",
    mob_cta_title: "Got a mobile app idea?",
    mob_cta_desc:
      "Send me a message with a few words about your project. Let's figure out together how to go from idea to an app your customers love.",
    mob_cta_talk: "Talk about my project",
    mob_cta_home: "View main page",

    // Offer page
    off_tag: "Special Offer · Limited Time",
    off_h1: "Free MVP & Immediate Preview.",
    off_intro: "Get a first functional preview of your project at no cost. Free domain name and launch of your mobile or SaaS app starting from 1000€.",
    off_preview_title: "Free MVP & Immediate Preview",
    off_preview_desc: "I'll create a first functional MVP of your project for free and immediately to validate your idea.",
    off_domain_title: "Free Domain Name",
    off_domain_desc: "Your domain name (.fr, .com, .net) is included for the first year of launch.",
    off_reactivity_title: "30-Day Delivery",
    off_reactivity_desc: "A functional MVP delivered in 30 days maximum to test your market without waiting.",
    off_price_title: "From 1000€",
    off_price_desc: "Unbeatable rates for your app or website, without compromising on quality. The right price for your launch.",
    off_cta_main: "Get this offer now",
    off_cta_whatsapp: "Chat on WhatsApp",
    off_services_title: "Offer valid across all our services",
    off_saas_link: "SaaS Development",
    off_mobile_link: "Mobile Applications",
    off_web_link: "Showcase Websites",

    // Blog
    blog_title: "Digital Blog",
    blog_subtitle: "Advice, strategies, and feedback to make your digital product a success.",
    blog_read_more: "Read article",
    blog_back: "Back to blog",

    // Article: MVP
    article_mvp_title: "How to Create an MVP in 3 Steps",
    article_mvp_description: "The method to validate your idea without wasting resources and ensuring a strong market fit.",
    article_mvp_date: "March 26, 2026",
    article_mvp_content: `
      <p>An MVP, or <strong>Minimum Viable Product</strong>, is not a "stripped-down" version of your vision. It is the most powerful tool to turn an intuition into a product people actually buy. Its sole role? To verify if your idea meets a real need before investing heavily.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Step 1: Identify the "Core" functionality</h2>
        <p>Ask yourself: <em>"Which feature, if removed, would make my application completely meaningless?"</em></p>
        <p>This is your core product. With this single feature, the app must already solve the user's primary problem. Everything else (fancy design, customization, referral systems) is just noise at this stage.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">Step 2: Simplify to verify the market</h2>
        <p>Once the essential is identified, ask yourself how to verify its relevance with the least effort. The goal is to get a clear signal from the market.</p>
        <p><strong>Example:</strong> Want to launch a concierge service? Create a simple Landing Page explaining your offer with a "Buy" button. Even if it leads to a waitlist, the number of clicks is proof of market far more real than any theoretical study.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h2 class="text-2xl font-bold mb-4 italic">Step 3: Validate by action (payment)</h2>
        <p>An MVP is truly validated when a user takes a concrete and "costly" action: leaving their email, phone number, or better yet, <strong>taking out their credit card</strong>.</p>
        <p>That's when you know if the idea is profitable. If no one is willing to pay for your core product, adding secondary features won't change the outcome.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Conclusion: Iterate or Pivot</h2>
      <p>If the core feature attracts customers, double down: improve the experience and add features. If not? You've saved months of development and thousands of euros. You can now pivot calmly to a better idea.</p>
    `,

    // Article: Free MVP
    article_free_mvp_title: "Free MVP: The Best Strategy to Launch Your Business",
    article_free_mvp_description: "How we support you from idea to first customer payment, without financial barriers.",
    article_free_mvp_date: "March 27, 2026",
    article_free_mvp_content: `
      <p>Launching a startup or a new digital product is often slowed down by two major obstacles: <strong>development cost</strong> and <strong>market uncertainty</strong>. At Maximilien Digital, we've removed these barriers with a radical approach: we create your MVP for free.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">1. A Free MVP Creation</h2>
        <p>Why? Because we believe in the power of validation through usage. We develop the core of your product with no initial fees to allow you to put it in your users' hands as quickly as possible.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">2. We Find Your Financing</h2>
        <p>Don't have the funds to scale up? Don't panic. If your MVP shows signs of traction, we assist you in finding external financing to fund the development of the full version.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 italic">3. Lightning Speed: 2 Months Max</h2>
        <p>Time is your most precious resource. Our process is optimized to go from idea to functional product in <strong>less than 8 weeks</strong>. It's the perfect timeframe to keep the momentum and test your market in real-time.</p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/10 border border-secondary/20 text-center">
        <h3 class="text-xl font-bold mb-4">Bonus: Free Domain Name</h3>
        <p>For every free MVP launch, we offer your domain name for the first year. A detail that matters to start with zero costs.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Support Until Success</h2>
      <p>Our commitment doesn't end with code. We stay by your side and coach you until you receive your <strong>first customer payment</strong>. For us, this is the one and only proof that your business is on the right track.</p>
      
      <p><strong>In our view, this is the best way to verify if an idea works before committing for the long term.</strong></p>
    `,

    // Article: Website Creation
    article_website_title: "How to Create Your Website in 3 Steps",
    article_website_description: "The Maximilien Digital method to turn your idea into a profitable and sustainable online business.",
    article_website_date: "March 28, 2026",
    article_website_content: `
      <p>Building a website shouldn't be a leap into the unknown. At Maximilien Digital, we've structured a 3-step method to guarantee a product that not only works technically but, above all, meets a real market need.</p>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Step 1: Identify the "Core" functionality</h2>
        <p>Too many projects fail because they want to do everything at once. Our first mission is to help you identify the essential service, the one that provides the greatest value to your customers.</p>
        <p><em>Need help isolating this need? Contact us for a strategic session.</em></p>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">Step 2: Free Preview & MVP</h2>
        <p>Before investing heavily, we validate the idea. This starts with a <strong>free preview</strong> (our flagship offer) to visualize your future site. Then, we move on to developing a low-cost MVP (Minimum Viable Product) to test relevance in the field.</p>
        <div class="mt-6">
          <a href="/offre" class="text-primary font-bold hover:underline">Discover the Free Preview →</a>
        </div>
      </div>

      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Step 3: Development, Maintenance & Growth</h2>
        <p>Once the MVP is validated by your first clients, we deploy the heavy artillery. Full development, performance optimization, and rigorous maintenance. We remain your technical partner to evolve your platform at the pace of your growth.</p>
      </div>

      <h2 class="text-2xl font-bold mt-16 mb-6">Ready to launch your vision?</h2>
      <p>Don't let technology hinder your ambitions. Contact us today to turn your idea into a concrete digital success.</p>
    `,

    // Article: Cost of Mobile App
    article_app_cost_title: "How much does a mobile app cost in 2026",
    article_app_cost_description: "Discover why developing a mobile app (React Native / No-Code) costs today between €1,000 and €10,000 with end-to-end support.",
    article_app_cost_date: "March 29, 2026",
    article_app_cost_content: `
      <p>The era where a mobile app systematically cost €50,000 is over. In 2026, with the boom of No-Code, Low-Code, and modern frameworks like React Native, mobile development has become much more accessible and fast.</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">The real answer? It depends.</h2>
        <p>It's impossible to give a fixed price without knowing your needs. The cost adapts precisely to the complexity of your project. A simple validated app project can start at less than €1,000, while a complex application with deep integrations (AI, advanced databases, real-time features) will most often stay below the €10,000 mark.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">A to Z Guidance</h2>
        <p>The undeniable advantage of using an independent expert over a classic huge agency is the personalized guidance. At Maximilien Digital, we accompany you closely from the first sketch directly to the first cash flow of your business, providing valuable advice on the product's profitability constraints.</p>
      </div>
      
      <div class="my-12 p-8 rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all text-center shadow-sm">
        <h2 class="text-3xl font-bold mb-6 italic">The Free MVP</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          To reduce your financial risk even further, we offer the creation of your MVP (Minimum Viable Product) <strong>for free</strong>. You can validate the technical idea and initial market interest without advancing heavy fees immediately.
        </p>
        <div class="mt-8">
          <a href="/offre" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
            Discover the Free MVP Offer
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Conclusion: Launch without risk</h2>
      <p>Do not wait for agency quotes to curb your ambitious vision anymore. Test your actual business logic market fast, professionally, and cheaply today.</p>
    `,

    // Article: Quick MVP without Developer
    article_no_code_mvp_title: "Create an MVP quickly without a developer",
    article_no_code_mvp_description: "The rise of No-Code is undeniable, but discover why the fastest solution is still delegating your free MVP to an expert.",
    article_no_code_mvp_date: "March 30, 2026",
    article_no_code_mvp_content: `
      <p>The web and mobile development ecosystem has radically evolved. There are now numerous tools and methods designed to build fully featured applications without writing a single line of code, or by delegating the complex work to Artificial Intelligence. Amidst this abundance, what is actually the most efficient strategy for an entrepreneur whose sole priority is speed to market?</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">No-Code and its flagship tools</h2>
        <p>The term "No-Code" is now much more than just a buzzword. Highly capable platforms allow founders to visually design advanced user interfaces and underlying complex logic. Here are some key references:</p>
        <ul class="list-disc pl-6 mt-6 mb-6 space-y-3 text-muted-foreground">
          <li><a href="https://bubble.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">Bubble.io</a>: The absolute global leader in building fast, complex web applications.</li>
          <li><a href="https://flutterflow.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">FlutterFlow</a>: The ideal platform for generating true native and fast mobile apps.</li>
          <li><a href="https://glideapps.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-bold">Glide</a>: The perfect application to magically transform a plain spreadsheet into a working mobile app within minutes.</li>
        </ul>
        <p>These specialized tools are remarkably powerful, yet they inevitably require a harsh learning phase to master database structures, integrations, and complex workflows properly without prior experience.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">"Vibe Coding": Developing with AI</h2>
        <p>An amazing new revolution is seriously shaking up the industry: <strong>"Vibe Coding"</strong>. It involves utilizing advanced artificial intelligence to generate raw code for you simply by giving it human prompts. The early results are frequently stunning. You describe the exact screen you desperately want, and the AI (like Cursor, Lovable, or v0) writes it instantly.</p>
        <p class="mt-4"><strong>But beware of the magic click delusion:</strong> While initial creation seems blazing fast, securely assembling these fragmented code blocks, deploying them online, properly handling databases, and correcting confusing bugs generated by the AI require extremely solid technical skills. There is a deep learning curve and severe risk of losing huge swaths of time hopelessly stuck on obscure AI-generated errors.</p>
      </div>
      
      <div class="my-16 p-10 rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all shadow-sm">
        <h2 class="text-3xl font-bold mb-6">The true fast solution: Our MVP Offer</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          The highest performing approach to rapidly test a business idea fundamentally involves <strong>delegating the technical execution</strong> to a partner who already inherently masters classical coding, No-Code platforms, and AI-assisted engineering at scale.
        </p>
        <p class="mt-6 text-lg text-muted-foreground leading-relaxed">
          It is precisely for this distinct reason that we highly feature our <strong class="text-foreground">"Free MVP and Immediate Preview"</strong> offer. Why painfully learn a new complicated tool from zero or continuously battle a stubborn AI, when we can actively build the tangible first version of your concept completely for free and immediately?
        </p>
        <div class="mt-8">
          <a href="/offre" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
            Discover the Free MVP Offer
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Focus specifically on your business</h2>
      <p>An entrepreneur's time is undeniably their single most precious and limited resource in existence. Radically save weeks of tedious technical learning or frustrating trial and error, and confidently let seasoned experts handle the technical systems. Your absolute priority must unconditionally remain efficiently validating your target market and rapidly acquiring your very first clients.</p>
    `,

    // Article: Accounting Digitalization
    article_accounting_digital_title: "Why accounting firms must digitalize",
    article_accounting_digital_description: "Digital transformation for accounting firms: saving time, stopping manual data entry, and integrating smart e-invoicing pipelines.",
    article_accounting_digital_date: "March 31, 2026",
    article_accounting_digital_content: `
      <p>The work of chartered accountants and traditional accounting bodies is currently under massive transformation worldwide. Digitalizing entirely both the internal workflows and external client interactions is not merely optional, it is increasingly a major matter of corporate survival, firm competitiveness, and comfortable working conditions.</p>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">Saving highly precious time</h2>
        <p>The repetitive cycle of acquiring, categorizing, and continuously doing data entry for customer invoices is incredibly time-consuming. Using intelligent smart software equipped with advanced OCR document reading automates this, thus unlocking great amounts of time for all your employees. The fundamental goal? Re-focusing their skill sets exactly on what truly matters: <strong>personalized actionable advice for clients</strong>.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
        <h2 class="text-2xl font-bold mb-4">Electronic Invoicing and E-Reporting</h2>
        <p>With newly mandated modern e-invoicing laws inevitably rolling in, structured data flows will happen fully differently than PDF attachments via emails. Providing your particular firm with the necessary secure digital pipeline endpoints right now makes overcoming this monumental transition surprisingly peaceful and totally prepared.</p>
      </div>
      
      <div class="my-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <h2 class="text-2xl font-bold mb-4 italic">The true end to all manual typing</h2>
        <p>Let us all be candid: basically no accounting assistant fundamentally enjoys undertaking pure repetitive manual data entry all day long. Actually adopting smart collaborative portals and tightly integrating AI algorithms for clever pre-accounting will confidently make the collective work deeply more reliable, modern, and engaging for your capable teams in the long haul.</p>
      </div>
      
      <h2 class="text-2xl font-bold mt-16 mb-6">Fully step into bespoke automation</h2>
      <p>Great accounting practices of the impending future strongly utilize cutting-edge technology as their spine. Through the very proven experience of Maximilien Digital building highly advanced systems handling automated administrative documents directly via AI, our solid consulting can heavily assist you in producing custom in-house tools tailored beautifully for causing your specific accounting firm growth today.</p>
    `,
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
