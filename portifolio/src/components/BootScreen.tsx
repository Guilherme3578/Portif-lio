import { useEffect, useRef, useState } from 'react'
import './BootScreen.css'

type Phase = 'coin' | 'load' | 'ready' | 'off'

const BLOCKS = 20
const TIMES = { coin: 1300, load: 1500, ready: 700, off: 520 }

function blockColor(i: number) {
  if (i < 7) return 'var(--cyan)'
  if (i < 14) return 'var(--yellow)'
  return 'var(--pink)'
}

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('coin')
  const [progress, setProgress] = useState(0)
  const done = useRef(onDone)

  useEffect(() => {
    done.current = onDone
  })

  // Bloqueia o scroll durante a abertura
  useEffect(() => {
    const html = document.documentElement
    html.style.overflow = 'hidden'
    return () => {
      html.style.overflow = ''
    }
  }, [])

  // Sequência de fases
  useEffect(() => {
    if (phase === 'load') {
      let frame = 0
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / TIMES.load)
        setProgress(p)
        if (p < 1) frame = requestAnimationFrame(tick)
        else setPhase('ready')
      }
      frame = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(frame)
    }
    const next: Record<Exclude<Phase, 'load'>, () => void> = {
      coin: () => setPhase('load'),
      ready: () => setPhase('off'),
      off: () => done.current(),
    }
    const t = window.setTimeout(next[phase], TIMES[phase])
    return () => window.clearTimeout(t)
  }, [phase])

  // Clique ou qualquer tecla pula
  useEffect(() => {
    const skip = () => setPhase('off')
    window.addEventListener('keydown', skip, { once: true })
    window.addEventListener('pointerdown', skip, { once: true })
    return () => {
      window.removeEventListener('keydown', skip)
      window.removeEventListener('pointerdown', skip)
    }
  }, [])

  const filled = Math.round(progress * BLOCKS)

  return (
    <div className={`boot boot--${phase}`} role="status" aria-label="Carregando portfólio">
      <div className="boot__screen">
        {phase === 'coin' && <p className="boot__coin pixel blink">INSERT COIN</p>}

        {phase === 'load' && (
          <div className="boot__load">
            <p className="pixel boot__label">CARREGANDO PLAYER 1</p>
            <div className="boot__bar" aria-hidden="true">
              {Array.from({ length: BLOCKS }, (_, i) => (
                <span key={i} style={{ background: i < filled ? blockColor(i) : undefined }} />
              ))}
            </div>
            <p className="term boot__pct">{String(Math.round(progress * 100)).padStart(3, '0')}%</p>
          </div>
        )}

        {(phase === 'ready' || phase === 'off') && <p className="boot__ready pixel">PLAYER 1 READY</p>}
      </div>
      <p className="boot__hint term">CLIQUE OU PRESSIONE QUALQUER TECLA PARA PULAR</p>
    </div>
  )
}
