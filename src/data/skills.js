const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java 17', level: 'production' },
      { name: 'Spring Boot 3', level: 'production' },
      { name: 'Keycloak / OAuth2', level: 'production' },
      { name: 'REST API', level: 'production' },
      { name: 'JUnit / Mockito', level: 'production' },
      { name: 'Architecture Hexagonale', level: 'personal' },
      { name: 'WebSocket', level: 'personal' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'personal' },
      { name: 'JavaScript', level: 'personal' },
      { name: 'HTML / CSS', level: 'personal' },
      { name: 'Vite', level: 'personal' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'CI/CD (GitLab / Jenkins)', level: 'production' },
      { name: 'SonarQube', level: 'production' },
      { name: 'Git / GitHub', level: 'production' },
      { name: 'Docker', level: 'personal' },
      { name: 'Linux', level: 'personal' },
    ],
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'MySQL', level: 'production' },
      { name: 'SQL', level: 'production' },
      { name: 'PostgreSQL', level: 'personal' },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'IntelliJ IDEA', level: 'production' },
      { name: 'Postman', level: 'production' },
      { name: 'VS Code', level: 'personal' },
      { name: 'Vercel', level: 'personal' },
    ],
  },
  {
    category: "En cours d'acquisition",
    learning: true,
    items: [
      { name: 'Oracle Java SE 17 (1Z0-829)', level: 'learning' },
      { name: 'Clean Architecture', level: 'learning' },
      { name: 'Kubernetes basics', level: 'learning' },
    ],
  },
]

export default skills
