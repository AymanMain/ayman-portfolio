const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 'avance' },
      { name: 'Spring Boot', level: 'intermediaire' },
      { name: 'API REST', level: 'intermediaire' },
      { name: 'JWT / Keycloak', level: 'intermediaire' },
      { name: 'Architecture Hexagonale', level: 'progression' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'intermediaire' },
      { name: 'JavaScript', level: 'intermediaire' },
      { name: 'HTML / CSS', level: 'avance' },
      { name: 'Vite', level: 'intermediaire' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', level: 'intermediaire' },
      { name: 'CI/CD (GitHub Actions)', level: 'progression' },
      { name: 'Git / GitHub', level: 'avance' },
      { name: 'Linux', level: 'bases' },
    ],
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'MySQL', level: 'intermediaire' },
      { name: 'PostgreSQL', level: 'bases' },
      { name: 'SQL', level: 'intermediaire' },
    ],
  },
  {
    category: 'Outils',
    items: [
      { name: 'IntelliJ IDEA', level: 'avance' },
      { name: 'VS Code', level: 'avance' },
      { name: 'Postman', level: 'intermediaire' },
      { name: 'Vercel', level: 'intermediaire' },
    ],
  },
  {
    category: "En cours d'acquisition",
    learning: true,
    items: [
      { name: 'Oracle Java SE 17 (1Z0-829)', level: 'certification' },
      { name: 'Clean Architecture', level: 'formation' },
      { name: 'Tests unitaires (JUnit)', level: 'progression' },
      { name: 'Kubernetes basics', level: 'progression' },
    ],
  },
]

export default skills
