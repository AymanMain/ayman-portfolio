import { useEffect, useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import styles from './Journey.module.css'

const ENTRIES = [
  {
    date: '2026 — Objectif',
    type: 'goal',
    title: 'Stage juin 2026 / Alternance sept 2026',
    detail: 'À la recherche d\'une opportunité Full Stack Java/Cloud en Île-de-France pour contribuer sur des projets réels.',
    icon: '🎯',
  },
  {
    date: 'En cours',
    type: 'certification',
    title: 'Oracle Java SE 17 — 1Z0-829',
    detail: 'Préparation à la certification Oracle Java Developer. Approfondissement des fondamentaux Java.',
    icon: '🏆',
  },
  {
    date: '2025 — Présent',
    type: 'project',
    title: 'MyCampo & PhableAI',
    detail: 'Développement de projets personnels full stack. Java, Spring Boot, React, Docker, intégration LLM.',
    icon: '🚀',
  },
  {
    date: '2025 — Présent',
    type: 'project',
    title: 'Chef de Projet & Tech Lead — SUPFile',
    detail: 'Responsable de l\'infrastructure scolaire DC2 Paris. Architecture, déploiement, coordination technique.',
    icon: '🏗️',
  },
  {
    date: 'Mars 2025 — Septembre 2025',
    type: 'work',
    featured: true,
    title: 'Développeur Backend Java — Société Générale Digital Factory',
    detail: 'Conception et livraison bout en bout d\'une plateforme de gestion d\'appels d\'offres immobiliers pour piloter la cession de 9 centres d\'affaires, ~300 agences, 15 filiales et +500 GAB vers le groupe Saham. Spring Boot 3, Keycloak multi-instances, CI/CD GitLab/Jenkins, couverture tests >80% SonarQube.',
    icon: '🏦',
  },
  {
    date: '2025 — 2026',
    type: 'education',
    title: 'Master Informatique — SUPINFO Paris',
    detail: 'Spécialisation Mobile & Cloud Development. Projets Java, Spring Boot, architecture logicielle, DevOps.',
    icon: '🎓',
  },
]

export default function Journey() {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.15 }
    )

    itemsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="parcours" className={`${styles.journey} section-padding`}>
      <div className="container">
        <SectionTitle>Parcours</SectionTitle>
        <p className="section-subtitle">Formation, expériences et objectifs</p>

        <div className={styles.timeline}>
          {ENTRIES.map((entry, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`${styles.entry} ${styles[`entry_${entry.type}`]} ${entry.featured ? styles.entryFeatured : ''}`}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{entry.icon}</span>
              </div>
              <div className={styles.content}>
                {entry.featured && (
                  <span className={styles.featuredTag}>Expérience Entreprise</span>
                )}
                <time className={styles.date}>{entry.date}</time>
                <h3 className={styles.title}>{entry.title}</h3>
                <p className={styles.detail}>{entry.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
