import { useEffect, type CSSProperties } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects, stageColor } from '../data/projects'
import { scrollToTopInstant, useNav } from '../hooks/useNav'
import { useReveal } from '../hooks/useReveal'
import './ProjectDetail.css'

export function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const { goToSection, openProject } = useNav()
  const ref = useReveal<HTMLElement>(slug)

  useEffect(() => {
    scrollToTopInstant()
    if (project) document.title = `${project.title} — Guilherme Israel`
  }, [project])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return
      if (e.key === 'Escape') goToSection('fases')
      else if (e.key === 'ArrowRight' && next) openProject(next.slug)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goToSection, openProject, next])

  if (!project) return <Navigate to="/" replace />

  const color = stageColor(index)
  const meta = [
    { k: 'PAPEL', v: project.role },
    { k: 'ANO', v: project.year },
    { k: 'TIPO', v: project.kind },
  ]

  return (
    <article className="detail" ref={ref} style={{ '--c': color } as CSSProperties}>
      <div className="container">
        <a
          className="pixel detail__back"
          href="/#fases"
          onClick={(e) => {
            e.preventDefault()
            goToSection('fases')
          }}
        >
          ◀ MAPA DE FASES (ESC)
        </a>

        <header className="detail__head">
          <p className="pixel detail__kicker reveal">
            STAGE {project.num} · {project.year} · {project.kind.toUpperCase()}
          </p>
          <h1 className="pixel detail__title reveal reveal-mask">
            <span className="mask">
              <span>{project.title}</span>
            </span>
          </h1>
          <p className="detail__tagline reveal">{project.tagline}</p>
        </header>

        <section className="detail__block reveal" aria-labelledby="loadout">
          <h2 className="pixel detail__label" id="loadout">
            LOADOUT
          </h2>
          <ul className="detail__chips">
            {project.stacks.map((s) => (
              <li key={s} className="term detail__chip">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <dl className="detail__meta reveal">
          {meta.map((m) => (
            <div key={m.k} className="detail__meta-box">
              <dt className="pixel">{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>

        <div className="detail__cols">
          <section className="card detail__panel reveal" aria-labelledby="briefing">
            <h2 className="pixel detail__label" id="briefing">
              BRIEFING DA MISSÃO
            </h2>
            {project.description.map((d) => (
              <p key={d.slice(0, 24)} className="detail__text">
                {d}
              </p>
            ))}
          </section>

          <section className="card detail__panel reveal" aria-labelledby="powerups">
            <h2 className="pixel detail__label" id="powerups">
              POWER-UPS
            </h2>
            <ul className="detail__powerups">
              {project.highlights.map((h) => (
                <li key={h}>
                  <span className="pixel detail__plus" aria-hidden="true">
                    +
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            {project.github && (
              <a className="btn btn--cyan" href={project.github} target="_blank" rel="noopener noreferrer">
                VER NO GITHUB <span className="glyph">↗</span>
              </a>
            )}
          </section>
        </div>

        <section className="detail__block" aria-labelledby="walkthrough">
          <h2 className="pixel detail__label reveal" id="walkthrough">
            WALKTHROUGH
          </h2>
          <ol className="detail__steps">
            {project.steps.map((s, i) => (
              <li
                key={s.t}
                className="card detail__step reveal"
                style={{ '--d': `${i * 0.08}s` } as CSSProperties}
              >
                <span className="pixel detail__seal">
                  {index + 1}-{i + 1}
                </span>
                <h3 className="pixel detail__step-title">{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <a
          className="card detail__next reveal"
          href={`/projeto/${next.slug}`}
          onClick={(e) => {
            e.preventDefault()
            openProject(next.slug)
          }}
        >
          <span className="pixel detail__next-label">PRÓXIMA FASE (<span className="glyph">→</span>)</span>
          <span className="pixel detail__next-title">
            STAGE {next.num} · {next.title}
          </span>
          <span className="detail__next-tag">{next.tagline}</span>
        </a>
      </div>
    </article>
  )
}
