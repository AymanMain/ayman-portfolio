import SectionTitle from '../components/SectionTitle'
import skills from '../data/skills'
import styles from './Skills.module.css'

const LEVEL_LABEL = {
  avance: 'Avancé',
  intermediaire: 'Intermédiaire',
  progression: 'En progression',
  bases: 'Bases',
  certification: 'Certification',
  formation: 'En formation',
}

export default function Skills() {
  return (
    <section id="competences" className={`${styles.skills} section-padding`} style={{ scrollMarginTop: '64px' }}>
      <div className="container">
        <SectionTitle>Compétences</SectionTitle>
        <p className="section-subtitle">Stack technique et niveaux</p>

        <div className={styles.grid}>
          {skills.map(({ category, items, learning }) => (
            <div
              key={category}
              className={`${styles.card} ${learning ? styles.cardLearning : ''}`}
            >
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.badges}>
                {items.map(({ name, level }) => (
                  <span key={name} className={`${styles.badge} ${styles[`badge_${level}`]}`}>
                    {name}
                    <span className={styles.badgeLevel}>{LEVEL_LABEL[level]}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
