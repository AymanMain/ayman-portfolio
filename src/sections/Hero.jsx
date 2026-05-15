import styles from './Hero.module.css'

export default function Hero() {
  function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <p className={styles.tagline}>Full Stack Developer · Java · Spring Boot · Cloud</p>
        <h1 className={styles.name}>Ayman El Karroussi</h1>
        <p className={styles.subtitle}>Étudiant en Master Informatique à SUPINFO Paris</p>
        <p className={styles.description}>
          Je construis des APIs robustes, des interfaces modernes et des systèmes documentés.
          Je cherche un stage à partir de juin 2026 et une alternance à partir de septembre 2026
          en Île-de-France.
        </p>
        <div className={styles.ctas}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => scrollTo('#projets')}
          >
            Voir mes projets
          </button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => scrollTo('#contact')}
          >
            Me contacter
          </button>
          <a
            href="/cv-ayman.pdf"
            download
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
      <div className={styles.grid} aria-hidden="true" />
    </section>
  )
}
