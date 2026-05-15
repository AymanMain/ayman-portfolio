# CLAUDE CODE — Portfolio Build Instructions
## Ayman El Karroussi | Full Stack Developer | Java · Spring Boot · Cloud

> **Status: v1.0 COMPLETE — Live at https://ayman-portfolio-woad.vercel.app/**  
> All 13 steps done. CV uploaded. Deployed to Vercel.  
> Last updated: 2026-05-15

> **How to use this file:**  
> Open Claude Code in your `portfolio-ayman/` folder.  
> Paste each prompt block one at a time.  
> Run the git commands after each step.  
> Do NOT skip steps or combine them.

---

## Pre-flight — Read this before starting

### Your positioning (non-negotiable)
```
Full Stack Software Engineer | Java · Spring Boot · Cloud
Master Informatique — SUPINFO Paris
Île-de-France | Looking for: Stage juin 2026 / Alternance septembre 2026
```

### Your real projects to feature
| Project | Role | Stack | Status |
|---|---|---|---|
| MyCampo | Solo dev | Spring Boot, React, REST API | In progress |
| PhableAI | Solo dev | Spring Boot, LLM integration, multiplayer | In progress |
| SUPFile | Chef de Projet + Tech Lead | Java, Docker, CI/CD | In progress (school) |

### What recruiters will look for in YOUR profile
- Java / Spring Boot backend
- REST API design
- Docker + CI/CD basics
- React frontend
- Git history that shows real progression
- Docs that prove you can plan before building

---

## STEP 0 ✅ — Local setup (do this before Claude Code)

Run these commands manually in your terminal:

```bash
mkdir portfolio-ayman
cd portfolio-ayman
git init
mkdir docs
touch README.md docs/cahier-des-charges.md docs/roadmap.md docs/decisions-techniques.md
git add .
git commit -m "chore(init): initialize portfolio repository"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then initialize Vite:

```bash
npm create vite@latest . -- --template react
npm install
```

Commit:

```bash
git add .
git commit -m "chore(setup): initialize react vite project"
git push
```

---

## STEP 1 ✅ — Documentation

### Claude Code prompt

```
You are helping me build a professional developer portfolio.

Before writing any code, create the documentation base for this repo.

Write complete content for these files:
- README.md
- docs/cahier-des-charges.md
- docs/roadmap.md
- docs/decisions-techniques.md

My profile:
- Name: Ayman El Karroussi
- School: Master Informatique at SUPINFO Paris
- Location: Île-de-France
- Looking for: Stage starting June 2026, Alternance starting September 2026
- Positioning: Full Stack Software Engineer | Java · Spring Boot · Cloud
- Main skills: Java, Spring Boot, REST APIs, Docker, JWT/Keycloak, React, Vite, Git/GitHub, CI/CD basics
- Real projects: MyCampo (esport tournament platform), PhableAI (multiplayer narrative game with LLM), SUPFile (school infra project, Chef de Projet + Tech Lead)
- Certification in progress: Oracle Java SE 17 (1Z0-829)

The portfolio must:
- Be recruiter-focused (French alternance/stage market)
- Show Java + backend skills as primary, React as secondary
- Be honest about student level
- Be organized and documented like a real project

Do not write any React code yet. Documentation files only.
```

### After this step

```bash
git add .
git commit -m "docs(spec): add complete portfolio documentation"
git push
```

**Verify:** Open `docs/roadmap.md`. It should show version progression from v0.1 to v1.0. If it's empty or vague, ask Claude Code to rewrite it.

---

## STEP 2 ✅ — Project structure + App skeleton

### Claude Code prompt

```
Clean the default Vite files and create the final project structure for my portfolio.

Create these folders and empty placeholder files:
- src/components/ (Header.jsx, Footer.jsx, SectionTitle.jsx, ProjectCard.jsx, SkillBadge.jsx)
- src/sections/ (Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Journey.jsx, Contact.jsx)
- src/data/ (projects.js, skills.js)
- src/assets/images/ (keep empty)
- public/ (add a placeholder cv-ayman.pdf note)

App.jsx should import and render all sections in order:
Hero → About → Skills → Projects → Journey → Contact

Clean index.css to remove all Vite defaults. Keep only a CSS reset and basic body font.

Remove App.css, the Vite counter, and all default content.
```

### After this step

```bash
git add .
git commit -m "chore(structure): clean vite defaults and create source structure"
git push
```

**Verify:** Run `npm run dev`. The app should render without errors. It's fine if sections are empty divs.

---

## STEP 3 ✅ — Design tokens + Global CSS

### Claude Code prompt

```
Set up the global CSS design system for my portfolio.

Design direction:
- Dark background: #0a0f1e (deep navy)
- Surface: #111827 (cards, header)
- Accent: #3b82f6 (blue — primary)
- Accent secondary: #06b6d4 (cyan — highlights)
- Text primary: #f9fafb
- Text muted: #9ca3af
- Font: Use 'IBM Plex Mono' for code/tech elements, 'DM Sans' for body text (import from Google Fonts)
- Border radius: 8px standard, 4px small
- Max container width: 1100px centered

In index.css:
- Import Google Fonts
- Define all CSS variables on :root
- Add CSS reset
- Add base body styles
- Add a .container utility class
- Add basic section padding utility

This is the design system only. No components yet.
```

### After this step

```bash
git add .
git commit -m "style(tokens): add global CSS design system"
git push
```

---

## STEP 4 ✅ — Header + Footer

### Claude Code prompt

```
Create the Header and Footer components for my portfolio.

Header requirements:
- Fixed top, full width
- Left: my name "Ayman EK" as a logo link
- Right: navigation links — À propos, Compétences, Projets, Parcours, Contact
- Smooth scroll to section IDs on click
- Subtle border bottom, semi-transparent background with backdrop blur
- Mobile: hamburger menu that shows/hides nav links (useState)
- Use CSS variables from index.css

Footer requirements:
- Simple centered footer
- Text: "Ayman El Karroussi © 2026 — Built with React & Vite"
- Links: GitHub icon, LinkedIn icon (use Unicode or simple SVG, no icon library needed yet)
- Muted text, minimal padding

Both components must use CSS modules or scoped class names to avoid conflicts.
```

### After this step

```bash
git add .
git commit -m "feat(layout): add header and footer components"
git push
```

**Verify:** Mobile menu works on resize. Scroll links don't error out (sections are empty but IDs must exist).

---

## STEP 5 ✅ — Hero section

### Claude Code prompt

```
Build the Hero section for my portfolio.

Content:
- Tag line (small text above name): "Full Stack Developer · Java · Spring Boot · Cloud"
- Name: "Ayman El Karroussi"
- Subtitle: "Étudiant en Master Informatique à SUPINFO Paris"
- Description: "Je construis des APIs robustes, des interfaces modernes et des systèmes documentés. Je cherche un stage à partir de juin 2026 et une alternance à partir de septembre 2026 en Île-de-France."
- 3 buttons:
  1. "Voir mes projets" → scrolls to #projects
  2. "Me contacter" → scrolls to #contact
  3. "Télécharger mon CV" → links to /cv-ayman.pdf (download attribute)

Design:
- Full viewport height or at least 90vh
- Name should be large, bold, prominent
- Tag line in accent color (cyan or blue)
- Subtle background: use a very faint grid pattern or dot pattern with CSS
- Animate in: fade + slide up on load using CSS animation (no library)
- Do not add a photo placeholder — keep it text-based for now

Use the design tokens from index.css.
```

### After this step

```bash
git add .
git commit -m "feat(hero): add hero section with CTA buttons"
git push
```

---

## STEP 6 ✅ — About section

### Claude Code prompt

```
Build the About section.

Section ID: "about"
Section title: "À propos"

Content:
Left column (text):
- Paragraph 1: "Je suis étudiant en Master Informatique à SUPINFO Paris, basé en Île-de-France. Je me spécialise dans le développement backend Java/Spring Boot, les APIs REST, et l'outillage cloud et DevOps."
- Paragraph 2: "Je construis mes compétences à travers des projets concrets, documentés et versionnés sur GitHub. Chaque projet que je lance vise à reproduire des contraintes réelles : architecture, sécurité, déploiement."
- Paragraph 3: "Mon objectif est de rejoindre une équipe technique où je peux contribuer sur des projets backend ou full stack, apprendre vite, et progresser vers un rôle d'ingénieur logiciel confirmé."

Right column (quick facts cards):
- 🎓 SUPINFO Paris — Master Informatique
- 📍 Île-de-France (La Verrière, 78)
- 🔍 Stage: juin 2026 / Alternance: sept 2026
- 🏆 Oracle Java SE 17 (1Z0-829) — en cours
- 🌍 Français · Anglais · Arabe

Design: two-column grid on desktop, stacked on mobile.
Each quick fact is a small card with icon, label, value.
Use accent color for icons.
```

### After this step

```bash
git add .
git commit -m "feat(about): add about section with profile cards"
git push
```

---

## STEP 7 ✅ — Skills section

### Claude Code prompt

```
Build the Skills section.

Section ID: "competences"
Section title: "Compétences"

Create src/data/skills.js with this data structure:

const skills = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: "Avancé" },
      { name: "Spring Boot", level: "Intermédiaire" },
      { name: "API REST", level: "Intermédiaire" },
      { name: "JWT / Keycloak", level: "Intermédiaire" },
      { name: "Architecture Hexagonale", level: "En progression" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Intermédiaire" },
      { name: "JavaScript", level: "Intermédiaire" },
      { name: "HTML / CSS", level: "Avancé" },
      { name: "Vite", level: "Intermédiaire" }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", level: "Intermédiaire" },
      { name: "CI/CD (GitHub Actions)", level: "En progression" },
      { name: "Git / GitHub", level: "Avancé" },
      { name: "Linux", level: "Bases" }
    ]
  },
  {
    category: "Bases de données",
    items: [
      { name: "MySQL", level: "Intermédiaire" },
      { name: "PostgreSQL", level: "Bases" },
      { name: "SQL", level: "Intermédiaire" }
    ]
  },
  {
    category: "Outils",
    items: [
      { name: "IntelliJ IDEA", level: "Avancé" },
      { name: "VS Code", level: "Avancé" },
      { name: "Postman", level: "Intermédiaire" },
      { name: "Vercel", level: "Intermédiaire" }
    ]
  },
  {
    category: "En cours d'acquisition",
    items: [
      { name: "Oracle Java SE 17 (1Z0-829)", level: "Certification" },
      { name: "Clean Architecture", level: "En formation" },
      { name: "Tests unitaires (JUnit)", level: "En progression" },
      { name: "Kubernetes basics", level: "En progression" }
    ]
  }
]

Display:
- Grid of category cards
- Each card has a category title + list of skill badges
- Badges use color coding: Avancé = accent blue, Intermédiaire = cyan, En progression = muted, Bases = muted, Certification = gold/yellow accent
- "En cours d'acquisition" category should be visually distinct (dashed border, slightly different bg)
```

### After this step

```bash
git add .
git commit -m "feat(skills): add skills section with categorized data"
git push
```

---

## STEP 8 ✅ — Projects section

### Claude Code prompt

```
Build the Projects section.

Section ID: "projets"
Section title: "Projets"

Create src/data/projects.js with this structure:

const projects = [
  {
    id: 1,
    title: "MyCampo",
    emoji: "🏆",
    description: "Plateforme de tournois esport. Gestion des équipes, brackets, inscriptions et résultats via une API REST Java/Spring Boot.",
    stack: ["Java", "Spring Boot", "REST API", "React", "MySQL", "Docker"],
    status: "En développement",
    statusType: "in-progress",
    highlights: [
      "Architecture REST avec Spring Boot",
      "Authentification JWT",
      "Containerisation Docker",
      "Frontend React connecté à l'API"
    ],
    github: "https://github.com/ayman-elkarroussi/mycampo",
    demo: null
  },
  {
    id: 2,
    title: "PhableAI",
    emoji: "🎭",
    description: "Jeu narratif multijoueur intégrant un LLM pour générer des scénarios dynamiques. Backend Spring Boot, intégration API Claude/OpenAI.",
    stack: ["Java", "Spring Boot", "LLM Integration", "React", "WebSocket"],
    status: "En développement",
    statusType: "in-progress",
    highlights: [
      "Intégration LLM (Claude/OpenAI API)",
      "Gestion de sessions multijoueur",
      "Génération de contenu dynamique",
      "Backend REST + WebSocket"
    ],
    github: "https://github.com/ayman-elkarroussi/phableai",
    demo: null
  },
  {
    id: 3,
    title: "SUPFile",
    emoji: "🏫",
    description: "Projet d'infrastructure scolaire SUPINFO. Gestion de fichiers et services internes. Rôle : Chef de Projet & Tech Lead DC2 Paris.",
    stack: ["Java", "Docker", "CI/CD", "Linux"],
    status: "En cours (école)",
    statusType: "school",
    highlights: [
      "Chef de Projet et Tech Lead",
      "Architecture et déploiement",
      "CI/CD pipeline",
      "Coordination technique équipe DC2 Paris"
    ],
    github: null,
    demo: null
  },
  {
    id: 4,
    title: "Portfolio Personnel",
    emoji: "💼",
    description: "Ce portfolio. Conçu avec React/Vite, documenté, versionné sur GitHub, et déployé sur Vercel.",
    stack: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    status: "Version 1.0",
    statusType: "done",
    highlights: [
      "Architecture par composants React",
      "Workflow Git documenté",
      "Déploiement automatique Vercel",
      "Design responsive"
    ],
    github: "https://github.com/ayman-elkarroussi/portfolio-ayman",
    demo: "https://portfolio-ayman.vercel.app"
  }
]

ProjectCard component:
- Title + emoji + status badge (colored by statusType: in-progress=blue, school=purple, done=green)
- Description text
- Stack badges (small pills)
- Highlights list (bullet points, short)
- Footer: GitHub link button (if github not null) + Demo button (if demo not null)
- If both null: show "Projet privé / école"

Section layout: 2-column grid on desktop, 1-column on mobile.
Cards should have hover effect (subtle lift/glow).
```

### After this step

```bash
git add .
git commit -m "feat(projects): add dynamic project cards with real projects"
git push
```

---

## STEP 9 ✅ — Journey section

### Claude Code prompt

```
Build the Journey / Parcours section.

Section ID: "parcours"
Section title: "Parcours"

Display as a vertical timeline on desktop and mobile.

Timeline entries (in reverse chronological order, most recent first):

1. Date: "2025 — 2026"
   Type: education
   Title: "Master Informatique — SUPINFO Paris"
   Detail: "Spécialisation Mobile & Cloud Development. Projets Java, Spring Boot, architecture logicielle, DevOps."
   Icon: 🎓

2. Date: "2025 — Présent"
   Type: project
   Title: "Chef de Projet & Tech Lead — SUPFile"
   Detail: "Responsable de l'infrastructure scolaire DC2 Paris. Architecture, déploiement, coordination technique."
   Icon: 🏗️

3. Date: "2025 — Présent"
   Type: project
   Title: "MyCampo & PhableAI"
   Detail: "Développement de projets personnels full stack. Java, Spring Boot, React, Docker, intégration LLM."
   Icon: 🚀

4. Date: "2025"
   Type: work
   Title: "Stage — Société Générale Maroc"
   Detail: "Développement backend Java. Première expérience en entreprise dans un environnement bancaire."
   Icon: 🏦

5. Date: "En cours"
   Type: certification
   Title: "Oracle Java SE 17 — 1Z0-829"
   Detail: "Préparation à la certification Oracle Java Developer. Approfondissement des fondamentaux Java."
   Icon: 🏆

6. Date: "2026 — Objectif"
   Type: goal
   Title: "Stage juin 2026 / Alternance sept 2026"
   Detail: "À la recherche d'une opportunité Full Stack Java/Cloud en Île-de-France pour contribuer sur des projets réels."
   Icon: 🎯

Timeline style:
- Left vertical line in accent color
- Dots on the line for each entry
- Entry cards to the right
- Color-code the dot by type: education=blue, project=cyan, work=green, certification=gold, goal=purple
- Animate entries in on scroll if possible (IntersectionObserver, no library)
```

### After this step

```bash
git add .
git commit -m "feat(journey): add timeline parcours section"
git push
```

---

## STEP 10 ✅ — Contact section

### Claude Code prompt

```
Build the Contact section.

Section ID: "contact"
Section title: "Contact"

No contact form. Just clean contact links.

Left column — CTA text:
- Heading: "Travaillons ensemble"
- Subtext: "Je suis disponible pour un stage à partir de juin 2026 et une alternance à partir de septembre 2026 en Île-de-France. N'hésitez pas à me contacter."

Right column — Contact cards:
Each card has an icon, label, and a link/button.

Cards:
1. Email — ayman.elkarroussi@gmail.com (use a mailto: link, icon: ✉️)
2. LinkedIn — linkedin.com/in/ayman-elkarroussi (link opens new tab, icon: 🔗)
3. GitHub — github.com/ayman-elkarroussi (link opens new tab, icon: 💻)
4. CV — Télécharger mon CV (download /cv-ayman.pdf, icon: 📄)
5. Localisation — Île-de-France (no link, just info, icon: 📍)

Replace placeholder emails/URLs with variables I can change easily — define them at the top of Contact.jsx as const CONTACT = { email: "...", linkedin: "...", github: "...", cv: "/cv-ayman.pdf" }

Design: cards should look clean and clickable, subtle hover state.
Two-column layout on desktop, stacked on mobile.
```

### After this step

```bash
git add .
git commit -m "feat(contact): add contact section with links"
git push
```

---

## STEP 11 ✅ — Responsive audit + polish

### Claude Code prompt

```
Do a full responsive and visual polish pass on the portfolio.

Breakpoints to test:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px

Issues to fix:
1. Header hamburger menu: make sure it closes after clicking a link
2. Hero: heading should scale down gracefully on mobile (clamp font size)
3. Skills grid: 1 column on mobile, 2 on tablet, 3 on desktop
4. Projects grid: 1 column on mobile, 2 on desktop
5. About two-column: stacks to 1 column on mobile
6. Contact two-column: stacks to 1 column on mobile
7. Timeline: stays single column on mobile, centered

General polish:
- Add scroll-margin-top to all sections (for fixed header offset)
- Smooth scroll on html element
- Add a subtle active state to nav links based on scroll position (IntersectionObserver)
- Make sure all buttons have :focus-visible outline for accessibility
- Check that all color contrasts meet readable standards
- Add a simple "back to top" button that appears after scrolling 500px
```

### After this step

```bash
git add .
git commit -m "style(responsive): full responsive polish and accessibility pass"
git push
```

---

## STEP 12 ✅ — README final + deployment prep

### Claude Code prompt

```
Finalize the README.md and prepare the project for deployment.

README.md must include:
- Project title and one-line description
- Live URL (placeholder: YOUR_VERCEL_URL)
- Sections list with brief description of each
- Tech stack table
- How to run locally (npm install, npm run dev)
- How to build (npm run build)
- Project structure tree
- Roadmap checkboxes (all should be checked for v1.0)
- Author section with GitHub and LinkedIn links (placeholder URLs)

Also:
- Make sure vite.config.js has base: '/' set
- Add a vercel.json at root with: { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
- Make sure public/cv-ayman.pdf exists (create a placeholder text file renamed to .pdf if not)
- Check that npm run build exits with no errors before committing

Do not change any component code. Documentation and config only.
```

### After this step

```bash
git add .
git commit -m "docs(readme): finalize README and add deployment config"
git push
```

---

## STEP 13 ✅ — Deploy to Vercel

Do this manually (5 minutes):

1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **Add New Project**
3. Import your `portfolio-ayman` GitHub repository
4. Framework preset: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

After deployment:
- Copy your Vercel URL (e.g. `https://portfolio-ayman.vercel.app`)
- Update README.md with the real live URL
- Update `projects.js` — set the Portfolio project's demo URL to the real Vercel URL

```bash
git add .
git commit -m "chore(deploy): add live vercel URL to readme and project data"
git push
```

Every future `git push` to `main` will auto-redeploy.

---

## Definition of Done — v1.0 Checklist

```
[x] Site is live on Vercel → https://ayman-portfolio-woad.vercel.app/
[x] GitHub repo is public
[x] README has live URL
[x] docs/ folder has cahier-des-charges, roadmap, decisions-techniques
[x] Git history shows 13+ meaningful commits (15+ commits)
[x] Hero shows Full Stack Java/Cloud positioning (not "web/mobile dev")
[x] Skills section includes Java, Spring Boot, Docker, JWT, CI/CD
[x] Projects section shows MyCampo, PhableAI, SUPFile, Portfolio
[x] Journey shows SocGen internship + Oracle cert
[x] Contact links are functional
[x] Mobile layout is clean at 375px
[x] No console errors on npm run build
[x] CV PDF uploaded (cv-ayman.pdf in public/)
```

---

## Future improvements (v1.1+)

These are not blocking for v1.0 but will strengthen the portfolio:

- **Blog/Notes section** — Short technical writeups (Spring Boot tips, Docker setup, etc.) show you can communicate technically
- **GitHub stats widget** — Embed live GitHub contribution stats via API
- **Project live demos** — Deploy MyCampo/PhableAI backends on Railway or Render, link from project cards
- **Dark/light mode toggle** — Demonstrates React state + CSS variable management
- **CV updated** — Once deployed, put the real PDF at /public/cv-ayman.pdf and push
- **SEO basics** — Add meta tags in index.html (og:title, og:description, og:image)
- **Analytics** — Add Vercel Analytics (free, one line of code) to see recruiter traffic

---

## Maintenance rule

After any application period event (offer received, interview, etc.):
1. Update `projects.js` if a project has gone live
2. Update `skills.js` if you've acquired a new skill
3. Push and Vercel redeploys automatically

Your portfolio should never be "done" — it should always reflect where you are right now.
