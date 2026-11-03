import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection, scrollToTopInstant, type HomeState } from '../hooks/useNav'
import { useReveal } from '../hooks/useReveal'
import { Hero } from './Hero'
import { Marquee } from './Marquee'
import { About } from './About'
import { Quest } from './Quest'
import { Achievements } from './Achievements'
import { StageSelect } from './StageSelect'
import { Contact } from './Contact'

export function Home() {
  const location = useLocation()
  const ref = useReveal<HTMLDivElement>()

  useEffect(() => {
    document.title = 'Guilherme Israel — Desenvolvedor Full-Stack'
  }, [])

  // Volta de um projeto: rola direto para a seção pedida (a cortina cobre o salto)
  useLayoutEffect(() => {
    const target = (location.state as HomeState | null)?.scrollTo ?? location.hash.slice(1)
    if (target) scrollToSection(target, false)
    else scrollToTopInstant()
  }, [location.key]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref}>
      <Hero />
      <Marquee />
      <About />
      <Quest />
      <Achievements />
      <StageSelect />
      <Contact />
    </div>
  )
}
