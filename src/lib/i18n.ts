export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_mobile: "Mobile",
    nav_saas: "SaaS",
    nav_financement: "Financement",
    nav_offer: "Offre",

    // Hero
    hero_tagline: "Développeur SaaS · Mobile · IA",
    hero_subtitle:
      "Je transforme vos idées en produits digitaux performants. Applications SaaS, mobiles et solutions d'intelligence artificielle sur mesure.",
    hero_cta: "C'est combien pour mon projet ?",
    hero_dev_role: "Développeur SaaS · Mobile · IA",
    hero_projects: "+ 30 projets",

    // Services section
    services_title: "Ce que je fais",
    services_subtitle:
      "Des solutions techniques adaptées à vos besoins, de la conception au déploiement.",

    // Services data
    service_saas_title: "Développement SaaS",
    service_saas_desc:
      "Applications web sur mesure, performantes et scalables. De l'idée au déploiement, je construis votre plateforme SaaS avec les technologies les plus modernes.",
    service_mobile_title: "Applications Mobiles",
    service_mobile_desc:
      "Applications iOS et Android intuitives et fluides. Une expérience utilisateur soignée pour fidéliser vos clients et simplifier votre activité.",
    service_ai_title: "Solutions IA",
    service_ai_desc:
      "Intégration d'intelligence artificielle dans vos outils existants. Automatisation, analyse de données et chatbots intelligents pour optimiser vos processus.",

    // Projects section
    projects_title: "Mes réalisations",
    projects_subtitle: "Quelques projets sur lesquels j'ai travaillé récemment.",

    // Projects data
    project_dating_title: "Application de rencontre",
    project_dating_desc:
      "Une application mobile repensant l'expérience de dating avec une interface moderne, intuitive et des algorithmes de connexion.",
    project_coach_title: "Assistant pour coach sportif",
    project_coach_desc:
      "Une plateforme complète permettant à un coach sportif de suivre ses élèves, partager des plans d'entrainement et analyser leurs performances.",
    project_invoices_title: "Traitement de factures",
    project_invoices_desc:
      "Une application web interne pour automatiser la lecture, le traitement et la validation de factures grâce à l'intelligence artificielle.",
    project_majordome_title: "Application Majordome",
    project_majordome_desc:
      "Une application de service haut de gamme offrant des prestations de conciergerie privée, avec une interface très premium.",
    project_esport_title: "EsportNews.fr",
    project_esport_desc:
      "Plateforme média dédiée à l'esport, proposant actualités, suivi des scores en direct et analyses approfondies de la scène compétitive.",

    // Testimonials section
    testimonials_title: "Ce que disent mes clients",
    testimonials_subtitle: "Des retours concrets de ceux qui m'ont fait confiance.",
    testimonials_see_more: "Voir plus d'avis sur ComeUp",
    testimonials_based_on: "Basé sur plus de 10 avis 5 étoiles",

    // Final CTA section
    finalcta_title: "Prêt à concrétiser votre projet ?",
    finalcta_subtitle:
      "Discutons ensemble de votre idée. Je vous accompagne de la conception au lancement de votre produit digital.",
    finalcta_cta: "Discutons ensemble",

    // Footer
    footer_rights: "Tous droits réservés.",
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
    cf_budget: "Budget estimé",
    cf_submit: "Envoyer ma demande",
    cf_sending: "Envoi en cours…",
    cf_budget_placeholder: "Sélectionnez un budget",
    cf_success_title: "Message envoyé !",
    cf_success_subtitle: "Je vous recontacte dans les plus brefs délais.",
    cf_error: "Une erreur est survenue. Réessayez ou contactez-moi directement.",

    // Budget options
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
    saas_formulas_title: "Des formules adaptées à la maturité de votre projet",
    saas_formula_landing_title: "Formule MVP landing.",
    saas_formula_landing_desc:
      "Une page de vente pour tester l'intérêt du marché avant d'investir dans tout le produit.",
    saas_formula_mvp_title: "Formule MVP SaaS.",
    saas_formula_mvp_desc:
      "Première version simplifiée de votre plateforme avec les fonctionnalités essentielles et les premiers abonnés.",
    saas_formula_template_title: "Formule template.",
    saas_formula_template_desc:
      "Basée sur une base existante (template ou boilerplate) personnalisée pour vos besoins, pour limiter le temps de développement.",
    saas_formula_unlimited_title: "Formule illimitée.",
    saas_formula_unlimited_desc:
      "Développement plus poussé, incluant fonctionnalités avancées, automatisations et intégrations spécifiques à votre métier.",
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
    off_h1: "Votre projet digital à partir de 1000€.",
    off_intro: "MVP gratuit, aperçu immédiat et livraison sous 30 jours. Profitez d'une offre exceptionnelle pour lancer votre SaaS ou application mobile.",
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
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_mobile: "Mobile",
    nav_saas: "SaaS",
    nav_financement: "Funding",
    nav_offer: "Offer",

    // Hero
    hero_tagline: "SaaS · Mobile · AI Developer",
    hero_subtitle:
      "I turn your ideas into high-performance digital products. Custom SaaS apps, mobile applications, and AI-powered solutions.",
    hero_cta: "How much does my project cost?",
    hero_dev_role: "SaaS · Mobile · AI Developer",
    hero_projects: "+ 30 projects",

    // Services section
    services_title: "What I do",
    services_subtitle:
      "Technical solutions tailored to your needs, from design to deployment.",

    // Services data
    service_saas_title: "SaaS Development",
    service_saas_desc:
      "Custom, performant, and scalable web applications. From idea to deployment, I build your SaaS platform using the most modern technologies.",
    service_mobile_title: "Mobile Applications",
    service_mobile_desc:
      "Intuitive and fluid iOS & Android applications. A polished user experience to retain your customers and streamline your business.",
    service_ai_title: "AI Solutions",
    service_ai_desc:
      "AI integration into your existing tools. Automation, data analysis, and smart chatbots to optimize your processes.",

    // Projects section
    projects_title: "My work",
    projects_subtitle: "A few projects I've worked on recently.",

    // Projects data
    project_dating_title: "Dating App",
    project_dating_desc:
      "A mobile application reimagining the dating experience with a modern, intuitive interface and smart matching algorithms.",
    project_coach_title: "Sports Coach Assistant",
    project_coach_desc:
      "A full platform allowing a sports coach to track clients, share training plans, and analyse their performance.",
    project_invoices_title: "Invoice Processing",
    project_invoices_desc:
      "An internal web application to automate reading, processing, and validating invoices using artificial intelligence.",
    project_majordome_title: "Majordome App",
    project_majordome_desc:
      "A premium service application offering private concierge services with a very high-end interface.",
    project_esport_title: "EsportNews.fr",
    project_esport_desc:
      "A media platform dedicated to esports, featuring news, live score tracking, and in-depth competitive analysis.",

    // Testimonials section
    testimonials_title: "What my clients say",
    testimonials_subtitle: "Real feedback from those who trusted me.",
    testimonials_see_more: "See more reviews on ComeUp",
    testimonials_based_on: "Based on 10+ five-star reviews",

    // Final CTA section
    finalcta_title: "Ready to bring your project to life?",
    finalcta_subtitle:
      "Let's discuss your idea. I'll guide you from concept to launch of your digital product.",
    finalcta_cta: "Let's talk",

    // Footer
    footer_rights: "All rights reserved.",
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
    cf_budget: "Estimated budget",
    cf_submit: "Send my request",
    cf_sending: "Sending…",
    cf_budget_placeholder: "Select a budget",
    cf_success_title: "Message sent!",
    cf_success_subtitle: "I'll get back to you as soon as possible.",
    cf_error: "Something went wrong. Please try again or contact me directly.",

    // Budget options
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
    saas_formulas_title: "Packages adapted to your project's maturity",
    saas_formula_landing_title: "MVP landing package.",
    saas_formula_landing_desc:
      "A sales page to test market interest before investing in the full product.",
    saas_formula_mvp_title: "MVP SaaS package.",
    saas_formula_mvp_desc:
      "A simplified first version of your platform with essential features and first subscribers.",
    saas_formula_template_title: "Template package.",
    saas_formula_template_desc:
      "Built on an existing template or boilerplate customised to your needs, to reduce development time.",
    saas_formula_unlimited_title: "Unlimited package.",
    saas_formula_unlimited_desc:
      "More in-depth development including advanced features, automations, and business-specific integrations.",
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
    off_h1: "Your digital project from 1000€.",
    off_intro: "Free MVP, immediate preview, and 30-day delivery. Take advantage of an exceptional offer to launch your SaaS or mobile app.",
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
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
