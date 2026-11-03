import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { useNav } from '../hooks/useNav'
import { SynthwaveCanvas } from './SynthwaveCanvas'
import { PlayerCard } from './PlayerCard'
import './Hero.css'

const lineClass = ['hero__l1', 'hero__l2', 'hero__l3']

export function Hero() {
  const { goToSection } = useNav()
  const lead = profile.heroLead

  return (
    <section id="top" className="hero">
      <SynthwaveCanvas />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__badge pixel reveal">● {profile.badge}</p>

          <h1 className="hero__title pixel reveal reveal-mask" aria-label={profile.heroLines.join(' ')}>
            {profile.heroLines.map((line, i) => (
              <span key={line} className="mask" aria-hidden="true">
                <span className={lineClass[i]} style={{ '--d': `${0.15 + i * 0.15}s` } as CSSProperties}>
                  {i === 0 ? (
                    <span className="glitch" data-text={line}>
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                  {i === 2 && <span className="hero__cursor blink">_</span>}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lead reveal" style={{ '--d': '0.5s' } as CSSProperties}>
            {lead.pre}
            <strong>{lead.name}</strong>
            {lead.mid}
            <strong>{lead.apis}</strong>
            {lead.mid2}
            <strong>{lead.ui}</strong>
            {lead.post}
          </p>
          <p className="hero__sub reveal" style={{ '--d': '0.6s' } as CSSProperties}>
            {profile.heroSub}
          </p>

          <div className="hero__cta reveal" style={{ '--d': '0.7s' } as CSSProperties}>
            <a
              className="btn"
              href="#fases"
              onClick={(e) => {
                e.preventDefault()
                goToSection('fases')
              }}
            >
              ▶ START
            </a>
            <a
              className="btn btn--ghost btn--cyan"
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                goToSection('contato')
              }}
            >
              CONTATO
            </a>
          </div>
        </div>

        <div className="hero__card reveal" style={{ '--d': '0.4s' } as CSSProperties}>
          <PlayerCard />
        </div>
      </div>
    </section>
  )
}
