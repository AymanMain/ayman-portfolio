import SectionTitle from '../components/SectionTitle'
import styles from './Contact.module.css'

const CONTACT = {
  email: 'aymanelkarroussi@gmail.com',
  linkedin: 'https://linkedin.com/in/aymanelkarroussi',
  github: 'https://github.com/AymanMain',
  cv: '/cv-ayman.pdf',
}

const CARDS = [
  {
    icon: '✉️',
    label: 'Email',
    text: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    text: 'linkedin.com/in/aymanelkarroussi',
    href: CONTACT.linkedin,
    external: true,
  },
  {
    icon: '💻',
    label: 'GitHub',
    text: 'github.com/AymanMain',
    href: CONTACT.github,
    external: true,
  },
  {
    icon: '📄',
    label: 'CV',
    text: 'Télécharger mon CV',
    href: CONTACT.cv,
    download: true,
  },
  {
    icon: '📍',
    label: 'Localisation',
    text: 'Île-de-France',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section-padding`} style={{ scrollMarginTop: '64px' }}>
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <p className="section-subtitle">Disponible pour stage et alternance</p>

        <div className={styles.grid}>
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>Travaillons ensemble</h3>
            <p className={styles.ctaText}>
              Je suis disponible pour un stage à partir de juin 2026 et une alternance à partir
              de septembre 2026 en Île-de-France. N'hésitez pas à me contacter.
            </p>
          </div>

          <div className={styles.cards}>
            {CARDS.map(({ icon, label, text, href, external, download }) => {
              if (!href) {
                return (
                  <div key={label} className={`${styles.card} ${styles.cardStatic}`}>
                    <span className={styles.cardIcon}>{icon}</span>
                    <div>
                      <p className={styles.cardLabel}>{label}</p>
                      <p className={styles.cardText}>{text}</p>
                    </div>
                  </div>
                )
              }
              return (
                <a
                  key={label}
                  href={href}
                  className={styles.card}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  download={download || undefined}
                >
                  <span className={styles.cardIcon}>{icon}</span>
                  <div>
                    <p className={styles.cardLabel}>{label}</p>
                    <p className={styles.cardText}>{text}</p>
                  </div>
                  {external && <span className={styles.externalArrow}>↗</span>}
                  {download && <span className={styles.externalArrow}>↓</span>}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
