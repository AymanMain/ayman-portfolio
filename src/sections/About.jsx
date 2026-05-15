import SectionTitle from '../components/SectionTitle'
import styles from './About.module.css'

const FACTS = [
  { icon: '🎓', label: 'Formation', value: 'SUPINFO Paris — Master Informatique' },
  { icon: '📍', label: 'Localisation', value: 'Île-de-France (La Verrière, 78)' },
  { icon: '🔍', label: 'Recherche', value: 'Stage: juin 2026 / Alternance: sept 2026' },
  { icon: '🏆', label: 'Certification', value: 'Oracle Java SE 17 (1Z0-829) — en cours' },
  { icon: '🌍', label: 'Langues', value: 'Français · Anglais · Arabe' },
]

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <SectionTitle><span>À</span> propos</SectionTitle>
        <p className="section-subtitle">Qui suis-je ?</p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Je suis étudiant en Master Informatique à SUPINFO Paris, basé en Île-de-France.
              Je me spécialise dans le développement backend Java/Spring Boot, les APIs REST,
              et l'outillage cloud et DevOps.
            </p>
            <p>
              Je construis mes compétences à travers des projets concrets, documentés et versionnés
              sur GitHub. Chaque projet que je lance vise à reproduire des contraintes réelles :
              architecture, sécurité, déploiement.
            </p>
            <p>
              Mon objectif est de rejoindre une équipe technique où je peux contribuer sur des
              projets backend ou full stack, apprendre vite, et progresser vers un rôle d'ingénieur
              logiciel confirmé.
            </p>
          </div>

          <div className={styles.facts}>
            {FACTS.map(({ icon, label, value }) => (
              <div key={label} className={styles.factCard}>
                <span className={styles.factIcon}>{icon}</span>
                <div>
                  <p className={styles.factLabel}>{label}</p>
                  <p className={styles.factValue}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
