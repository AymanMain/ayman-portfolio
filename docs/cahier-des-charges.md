# Cahier des charges — Portfolio Ayman El Karroussi

## 1. Contexte et objectif

Création d'un portfolio web professionnel destiné aux recruteurs du marché français (stage / alternance).

**Cible :** Responsables techniques, RH et managers en Île-de-France cherchant un profil Full Stack Java/Cloud junior.

**Objectif principal :** Démontrer les compétences backend Java/Spring Boot, la rigueur de documentation, et la capacité à livrer un projet de A à Z.

---

## 2. Profil

| Champ | Valeur |
|---|---|
| Nom | Ayman El Karroussi |
| Formation | Master Informatique — SUPINFO Paris |
| Localisation | Île-de-France (La Verrière, 78) |
| Disponibilité | Stage : juin 2026 / Alternance : sept 2026 |
| Positionnement | Full Stack Software Engineer · Java · Spring Boot · Cloud |

---

## 3. Exigences fonctionnelles

### 3.1 Sections obligatoires

| Section | Priorité | Description |
|---|---|---|
| Hero | P0 | Nom, titre, CTA, CV downloadable |
| À propos | P0 | Bio, quick facts (école, localisation, langues) |
| Compétences | P0 | Grille catégorisée avec niveaux |
| Projets | P0 | Cards pour MyCampo, PhableAI, SUPFile, Portfolio |
| Parcours | P1 | Timeline verticale (formation, stage, projets, certif) |
| Contact | P0 | Liens email, LinkedIn, GitHub, CV |

### 3.2 Fonctionnalités

- Navigation smooth scroll avec offset fixe (header)
- Menu hamburger sur mobile
- CV téléchargeable (PDF)
- Liens GitHub / LinkedIn ouvrent dans un nouvel onglet
- Indicateur de scroll actif sur les liens de navigation

---

## 4. Exigences non-fonctionnelles

| Critère | Cible |
|---|---|
| Performance | Score Lighthouse > 85 |
| Responsive | 375px · 768px · 1280px |
| Accessibilité | Focus visible, contrastes lisibles |
| SEO | Balises meta de base dans index.html |
| Build | npm run build sans erreur |
| Déploiement | Vercel, auto-deploy sur push main |

---

## 5. Stack technique

| Couche | Choix | Justification |
|---|---|---|
| Framework | React 18 + Vite 6 | Standard industrie, écosystème riche |
| Styling | CSS Modules + variables CSS | Pas de dépendance externe, contrôle total |
| Polices | IBM Plex Mono + DM Sans | Lisible, connotation technique |
| Déploiement | Vercel | Intégration GitHub native, preview branches |
| Icônes | SVG inline / Unicode | Pas de bibliothèque externe |

---

## 6. Hors périmètre v1.0

- Formulaire de contact avec backend
- Blog / articles techniques
- Mode clair/sombre
- Animations complexes (GSAP, Framer Motion)
- Analytics avancés

---

## 7. Livrables

- [ ] Site live sur Vercel
- [ ] Repo GitHub public avec historique propre
- [ ] CV PDF disponible à `/cv-ayman.pdf`
- [ ] Documentation complète dans `/docs`
- [ ] README avec instructions de démarrage
