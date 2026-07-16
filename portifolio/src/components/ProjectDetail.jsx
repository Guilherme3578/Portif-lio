import { VideoBlock, PrintBlock } from './MediaPlaceholder'

function ProjectDetail({ project, onBack }) {
  return (
    <section className="project-detail fade-up">
      <button type="button" className="back-link" onClick={onBack}>
        ← voltar aos projetos
      </button>

      <p className="section-num">{project.number}</p>

      <h1 className="project-title">{project.title}</h1>
      <p className="project-tagline-lg">{project.tagline}</p>
      <p className="project-meta">
        {project.year} · {project.category}
      </p>

      <ul className="stack-list stack-list-detail">
        {project.stack.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>

      <div className="project-body-grid">
        <div className="project-about">
          <h2>Sobre o projeto</h2>
          {project.about.map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="project-highlights">
          <h2>Destaques</h2>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.github && (
            <a
              className="btn btn-ghost"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <div className="project-media">
        <VideoBlock video={project.media.video} />
        <div className="project-prints">
          {project.media.prints.map((print, index) => (
            <PrintBlock key={index} print={print} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
