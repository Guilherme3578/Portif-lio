import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { projects, stageColor } from '../data/projects'
import { useGame } from '../context/game'
import { useNav } from '../hooks/useNav'
import { useVisibility } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'
import './StageSelect.css'

const KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter']

function columnCount(grid: HTMLElement | null) {
  if (!grid) return 1
  return getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length
}

export function StageSelect() {
  const { play } = useGame()
  const { openProject } = useNav()
  const [selected, setSelected] = useState(0)
  const visible = useRef(false)
  const grid = useRef<HTMLUListElement>(null)
  const cards = useRef<(HTMLAnchorElement | null)[]>([])
  const sectionRef = useVisibility<HTMLElement>((v) => {
    visible.current = v
  }, 0.35)

  const select = (i: number) => {
    setSelected((prev) => {
      if (prev !== i) play('move')
      return i
    })
  }

  // Navegação por teclado enquanto a seção estiver visível
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!visible.current || !KEYS.includes(e.key) || e.altKey || e.ctrlKey || e.metaKey) return
      const active = document.activeElement
      const focusOnCard = cards.current.includes(active as HTMLAnchorElement)
      // Enter em link/botão focado já dispara o clique nativo
      if (e.key === 'Enter') {
        if (active instanceof HTMLAnchorElement || active instanceof HTMLButtonElement) return
        e.preventDefault()
        openProject(projects[selected].slug)
        return
      }
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return
      e.preventDefault()
      const cols = columnCount(grid.current)
      const delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -cols, ArrowDown: cols }[e.key] ?? 0
      const next = selected + delta
      if (next < 0 || next >= projects.length) return
      setSelected(next)
      play('move')
      if (focusOnCard) cards.current[next]?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, openProject, play])

  const onOpen = (e: MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault()
    openProject(slug)
  }

  return (
    <section id="fases" className="section" aria-labelledby="fases-title" ref={sectionRef}>
      <div className="container">
        <div className="sec-top">
          <SectionHead num="04" title="SELECIONE A FASE" id="fases" meta={`${projects.length} FASES · ← ↑ → ↓ + ENTER`} />
        </div>
        <ul className="stages" ref={grid}>
          {projects.map((p, i) => {
            const isSel = i === selected
            return (
              <li key={p.slug} className="reveal" style={{ '--d': `${(i % 3) * 0.08}s` } as CSSProperties}>
                <a
                  ref={(el) => {
                    cards.current[i] = el
                  }}
                  href={`/projeto/${p.slug}`}
                  className={`stage ${isSel ? 'is-selected' : ''}`}
                  style={{ '--c': stageColor(i) } as CSSProperties}
                  onMouseEnter={() => select(i)}
                  onFocus={() => select(i)}
                  onClick={(e) => onOpen(e, p.slug)}
                  aria-current={isSel ? 'true' : undefined}
                >
                  <span className="stage__top">
                    <span className="pixel stage__num">STAGE {p.num}</span>
                    {isSel && (
                      <span className="pixel stage__cursor blink" aria-hidden="true">
                        ▶
                      </span>
                    )}
                  </span>
                  <span className="pixel stage__title">{p.title}</span>
                  <span className="stage__tagline">{p.tagline}</span>
                  <span className="term stage__stack">{p.stackline}</span>
                  <span className="pixel stage__cta">{isSel ? 'PRESS START' : 'SELECT'}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
