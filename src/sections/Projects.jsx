import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projets" className={`${styles.projects} section-padding`}>
      <div className="container">
        <SectionTitle>Projets</SectionTitle>
        <p className="section-subtitle">Ce que je construis</p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
