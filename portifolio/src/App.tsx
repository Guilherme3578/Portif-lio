import { useCallback, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useGame } from './context/game'
import { useKonami } from './hooks/useKonami'
import { prefersReducedMotion } from './hooks/useReducedMotion'
import { BootScreen } from './components/BootScreen'
import { CRTOverlay } from './components/CRTOverlay'
import { HUD } from './components/HUD'
import { Home } from './components/Home'
import { ProjectDetail } from './components/ProjectDetail'

export default function App() {
  const [booting, setBooting] = useState(() => !prefersReducedMotion())
  const [rainbow, setRainbow] = useState(false)
  const rainbowOn = useRef(false)
  const { toast, addScore, play } = useGame()

  useKonami(
    useCallback(() => {
      rainbowOn.current = !rainbowOn.current
      setRainbow(rainbowOn.current)
      if (rainbowOn.current) {
        toast({ title: '↑↑↓↓←→←→BA', text: '+30 vidas · modo arco-íris ativado', color: 'var(--purple)' })
        addScore(3000)
        play('konami')
      }
    }, [toast, addScore, play]),
  )

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <HUD />
      {/* Filtros só no conteúdo, para não afetar elementos fixos */}
      <main id="conteudo" className={rainbow ? 'rainbow' : undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <CRTOverlay />
      {booting && <BootScreen onDone={() => setBooting(false)} />}
    </>
  )
}
