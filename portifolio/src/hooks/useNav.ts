import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGame } from '../context/game'
import { projects } from '../data/projects'

export interface HomeState {
  scrollTo?: string
}

export function scrollToSection(id: string, smooth = true) {
  const el = document.getElementById(id)
  if (!el) return
  // 'instant' ignora o scroll-behavior: smooth do CSS (usado sob a cortina)
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' })
}

export function scrollToTopInstant() {
  window.scrollTo({ top: 0, behavior: 'instant' })
}

/** Navegação do jogo: seções da home e fases, sempre com a cortina entre telas. */
export function useNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { transition, play, addScore } = useGame()
  const onHome = pathname === '/'

  const goToSection = useCallback(
    (id: string, curtainTitle = 'MAPA DE FASES') => {
      if (onHome) {
        scrollToSection(id)
        return
      }
      transition({ stage: 'VOLTANDO AO', title: curtainTitle }, () => {
        navigate('/', { state: { scrollTo: id } satisfies HomeState })
      })
    },
    [onHome, navigate, transition],
  )

  const openProject = useCallback(
    (slug: string) => {
      const project = projects.find((p) => p.slug === slug)
      if (!project) return
      play('open')
      addScore(100)
      transition({ stage: `STAGE ${project.num}`, title: project.title.toUpperCase() }, () => {
        navigate(`/projeto/${slug}`)
      })
    },
    [navigate, transition, play, addScore],
  )

  return { onHome, goToSection, openProject }
}
