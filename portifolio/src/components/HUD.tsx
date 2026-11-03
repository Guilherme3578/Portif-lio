import type { MouseEvent } from 'react'
import { useGame } from '../context/game'
import { useNav } from '../hooks/useNav'
import { sections } from '../data/profile'
import './HUD.css'

export function HUD() {
  const { soundOn, toggleSound, registerScore } = useGame()
  const { goToSection } = useNav()

  const onLink = (e: MouseEvent<HTMLAnchorElement>, id: string, label: string) => {
    e.preventDefault()
    goToSection(id, label)
  }

  return (
    <header className="hud">
      <div className="hud__inner">
        <a className="hud__score" href="/" onClick={(e) => onLink(e, 'top', 'INÍCIO')} aria-label="Voltar ao início">
          <span className="pixel hud__1up blink">1UP</span>
          <span className="term hud__points" ref={registerScore}>
            000000
          </span>
        </a>

        <nav className="hud__nav" aria-label="Seções">
          {sections.map((s, i) => (
            <span key={s.id} className="hud__item">
              {i > 0 && (
                <span className="hud__sep" aria-hidden="true">
                  ·
                </span>
              )}
              <a className="pixel hud__link" href={`/#${s.id}`} onClick={(e) => onLink(e, s.id, s.label)}>
                {s.label}
              </a>
            </span>
          ))}
        </nav>

        <button
          type="button"
          className={`pixel hud__sound ${soundOn ? 'is-on' : ''}`}
          onClick={toggleSound}
          aria-pressed={soundOn}
        >
          ♪ SOM {soundOn ? 'ON' : 'OFF'}
        </button>
      </div>
    </header>
  )
}
