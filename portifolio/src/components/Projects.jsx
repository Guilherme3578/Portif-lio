import { projects } from '../data/content'
import MediaPlaceholder from './MediaPlaceholder'

function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project.slug)}
    >
      {project.thumb ? (
        <img className="project-thumb" src={project.thumb} alt="" loading="lazy" />
      ) : (
        <MediaPlaceholder label={project.title} aspect="4 / 3" />
      )}
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-stackline">{project.stack.join(' · ')}</p>
        <p className="project-meta">
          {project.year} · {project.category}
        </p>
      </div>
    </button>
  )
}

function Projects({ onOpenProject }) {
  return (
    <section id="projetos" className="section projects-section">
      <p className="section-num">03 — Projetos</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
