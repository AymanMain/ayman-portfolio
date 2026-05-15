# Décisions techniques — Portfolio Ayman El Karroussi

Log des décisions d'architecture et de stack. Chaque décision inclut le contexte, les options considérées et la justification.

---

## DT-001 — Framework : React + Vite

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Choix du framework frontend pour le portfolio.

**Options :**
| Option | Avantages | Inconvénients |
|---|---|---|
| React + Vite | Standard industrie, fast HMR, simple | SPA pure (SEO limité) |
| Next.js | SSR/SSG, SEO natif | Complexité excessive pour un portfolio |
| HTML/CSS/JS vanilla | Zéro dépendance | Long à développer, limité |
| Vue.js + Vite | Similaire à React | Moins demandé en Île-de-France |

**Décision :** React + Vite. Portfolio sans besoin SEO critique, React est plus demandé par les recruteurs, DX optimale avec Vite.

---

## DT-002 — Styling : CSS Modules + variables CSS

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Choix de la stratégie de style.

**Options :**
| Option | Avantages | Inconvénients |
|---|---|---|
| CSS Modules | Scoping natif, pas de dépendance | Verbeux |
| Tailwind CSS | Rapid prototyping | Dépendance externe, lisibilité HTML |
| Styled Components | CSS-in-JS, colocalisé | Bundle size, overhead runtime |
| SCSS | Variables, nesting | Build step supplémentaire |

**Décision :** CSS Modules avec variables CSS sur `:root`. Zéro dépendance externe, contrôle total, cohérence via design tokens.

---

## DT-003 — Icônes : SVG inline / Unicode

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Affichage d'icônes dans header, footer, cards.

**Options :**
| Option | Bundle impact | Complexité |
|---|---|---|
| React Icons | +50kb | Faible |
| Lucide React | +30kb | Faible |
| Heroicons | +25kb | Faible |
| SVG inline / Unicode | 0kb | Faible |

**Décision :** SVG inline et emojis Unicode pour les icônes simples. Portfolio limité en volume d'icônes, pas de justification pour une bibliothèque.

---

## DT-004 — Animations : CSS natif + IntersectionObserver

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Animations d'entrée sur les sections et la timeline.

**Options :**
| Option | Avantages | Inconvénients |
|---|---|---|
| GSAP | Puissant, fluide | Licence, 30kb+, overkill |
| Framer Motion | DX excellent | 40kb+, couplé React |
| CSS animations + IntersectionObserver | Natif, 0kb | Moins expressif |
| AOS | Simple | Dépendance externe |

**Décision :** CSS animations + IntersectionObserver. Démontre maîtrise des standards web sans dépendance externe.

---

## DT-005 — Déploiement : Vercel

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Hébergement et déploiement continu.

**Options :**
| Option | Avantages | Inconvénients |
|---|---|---|
| Vercel | GitHub native, preview branches, free | Vendor lock-in |
| Netlify | Similaire à Vercel | Interface moins intuitive |
| GitHub Pages | Natif GitHub | Configuration SPA complexe |
| VPS (OVH/Hetzner) | Contrôle total | Overhead ops inutile |

**Décision :** Vercel. Intégration GitHub en 2 clics, redéploiement automatique sur push, HTTPS natif. Optimal pour un portfolio React.

---

## DT-006 — Navigation : smooth scroll natif

**Date :** Mai 2026
**Statut :** ✅ Retenu

**Contexte :** Navigation entre sections.

**Options :**
| Option | Avantages | Inconvénients |
|---|---|---|
| React Router | SPA routing standard | Overkill pour un one-page |
| Smooth scroll natif (CSS + JS) | Zéro dépendance | Offset header à gérer manuellement |
| react-scroll | Simple | Dépendance externe |

**Décision :** Smooth scroll CSS (`scroll-behavior: smooth`) + `scroll-margin-top` sur chaque section pour compenser le header fixe. Zéro dépendance.
