import { useCallback } from 'react'
import { certs } from '../data/certs'
import { useGame } from '../context/game'
import { useVisibility } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'
import './Achievements.css'

// Troféu em pixel art: cada caractere vira um "pixel" via box-shadow.
const TROPHY = [
  '...YYYYYYYY...',
  '.OOYWYYYYYYOO.',
  'O..YWYYYYYY..O',
  'O..YWYYYYYY..O',
  '.O.YYYYYYYY.O.',
  '..OOYYYYYYOO..',
  '....OYYYYO....',
  '.....OYYO.....',
  '......YY......',
  '......OO......',
  '....OOOOOO....',
  '...PPPPPPPP...',
  '...PPPPPPPP...',
]
const PX = 6
const PALETTE: Record<string, string> = { Y: '#ffd23f', W: '#f2eefe', O: '#ff8a5c', P: '#ff2e97' }
const trophyShadow = TROPHY.flatMap((row, y) =>
  [...row].flatMap((ch, x) => (PALETTE[ch] ? [`${(x + 1) * PX}px ${(y + 1) * PX}px 0 ${PALETTE[ch]}`] : [])),
).join(',')

function Trophy() {
  return (
    <div className="trophy" aria-hidden="true" style={{ width: (TROPHY[0].length + 1) * PX, height: (TROPHY.length + 1) * PX }}>
      <span style={{ width: PX, height: PX, boxShadow: trophyShadow }} />
    </div>
  )
}

export function Achievements() {
  const { unlockOnce, toast, addScore, play } = useGame()
  const featured = certs.find((c) => c.featured) ?? certs[0]
  const rest = certs.filter((c) => c !== featured)

  const onVisible = useCallback(
    (visible: boolean) => {
      if (!visible || !unlockOnce('certs')) return
      toast({ title: '★ CONQUISTA DESBLOQUEADA', text: featured.title })
      addScore(500)
      play('unlock')
    },
    [unlockOnce, toast, addScore, play, featured.title],
  )
  const ref = useVisibility<HTMLElement>(onVisible, 0.3)

  return (
    <section id="conquistas" className="section" aria-labelledby="conquistas-title" ref={ref}>
      <div className="container">
        <div className="sec-top">
          <SectionHead num="03" title="CONQUISTAS" id="conquistas" meta={`${certs.length}/${certs.length} DESBLOQUEADAS`} />
          <div className="reveal">
            <Trophy />
          </div>
        </div>

        <article className="ach ach--featured card reveal">
          <span className="pixel ach__seal">★ DESTAQUE</span>
          <p className="pixel ach__issuer">{featured.issuer}</p>
          <h3 className="ach__title">{featured.title}</h3>
          <p className="ach__desc">{featured.description}</p>
        </article>

        <div className="ach__grid">
          {rest.map((c) => (
            <article key={c.title} className="ach card reveal">
              <p className="pixel ach__issuer">
                <span className="ach__check" aria-hidden="true">
                  ✓
                </span>{' '}
                {c.issuer}
              </p>
              <h3 className="ach__title">{c.title}</h3>
              <p className="ach__desc">{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
