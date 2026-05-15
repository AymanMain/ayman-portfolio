const projects = [
  {
    id: 1,
    title: 'MyCampo',
    emoji: '🏆',
    description:
      'Plateforme de tournois esport. Gestion des équipes, brackets, inscriptions et résultats via une API REST Java/Spring Boot.',
    stack: ['Java', 'Spring Boot', 'REST API', 'React', 'MySQL', 'Docker'],
    status: 'En développement',
    statusType: 'in-progress',
    highlights: [
      'Architecture REST avec Spring Boot',
      'Authentification JWT',
      'Containerisation Docker',
      'Frontend React connecté à l\'API',
    ],
    github: 'https://github.com/AymanMain/mycampo',
    demo: null,
  },
  {
    id: 2,
    title: 'PhableAI',
    emoji: '🎭',
    description:
      'Jeu narratif multijoueur intégrant un LLM pour générer des scénarios dynamiques. Backend Spring Boot, intégration API Claude/OpenAI.',
    stack: ['Java', 'Spring Boot', 'LLM Integration', 'React', 'WebSocket'],
    status: 'En développement',
    statusType: 'in-progress',
    highlights: [
      'Intégration LLM (Claude/OpenAI API)',
      'Gestion de sessions multijoueur',
      'Génération de contenu dynamique',
      'Backend REST + WebSocket',
    ],
    github: 'https://github.com/AymanMain/phableai',
    demo: null,
  },
  {
    id: 3,
    title: 'SUPFile',
    emoji: '🏫',
    description:
      'Projet d\'infrastructure scolaire SUPINFO. Gestion de fichiers et services internes. Rôle : Chef de Projet & Tech Lead DC2 Paris.',
    stack: ['Java', 'Docker', 'CI/CD', 'Linux'],
    status: 'En cours (école)',
    statusType: 'school',
    highlights: [
      'Chef de Projet et Tech Lead',
      'Architecture et déploiement',
      'CI/CD pipeline',
      'Coordination technique équipe DC2 Paris',
    ],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: 'Portfolio Personnel',
    emoji: '💼',
    description:
      'Ce portfolio. Conçu avec React/Vite, documenté, versionné sur GitHub, et déployé sur Vercel.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    status: 'Version 1.0',
    statusType: 'done',
    highlights: [
      'Architecture par composants React',
      'Workflow Git documenté',
      'Déploiement automatique Vercel',
      'Design responsive',
    ],
    github: 'https://github.com/AymanMain/ayman-portfolio',
    demo: 'https://ayman-portfolio.vercel.app',
  },
]

export default projects
