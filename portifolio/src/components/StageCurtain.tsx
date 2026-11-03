import type { CurtainInfo } from '../context/game'
import './StageCurtain.css'

export type CurtainPhase = 'idle' | 'down' | 'up'

export function StageCurtain({ phase, info }: { phase: CurtainPhase; info: CurtainInfo | null }) {
  if (phase === 'idle' || !info) return null
  return (
    <div className={`curtain curtain--${phase}`} aria-live="polite">
      <div className="curtain__inner">
        <p className="pixel curtain__stage">{info.stage}</p>
        <p className="pixel curtain__title">{info.title}</p>
        <p className="pixel curtain__ready blink">READY?</p>
      </div>
    </div>
  )
}
