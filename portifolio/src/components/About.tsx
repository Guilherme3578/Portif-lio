import type { CSSProperties } from 'react'
import { about } from '../data/profile'
import { categoryColor, inventory } from '../data/stack'
import { SectionHead } from './SectionHead'
import './About.css'

function Inventory() {
  return (
    <div className="inv">
      <div className="inv__head reveal">
        <h3 className="pixel inv__title">INVENTÁRIO</h3>
        <span className="term inv__count">{inventory.length} ITENS</span>
      </div>
      <ul className="inv__grid">
        {inventory.map((item, i) => (
          <li
            key={item.name}
            className="inv__tile reveal"
            style={{ '--c': categoryColor[item.cat], '--d': `${(i % 6) * 0.05}s` } as CSSProperties}
          >
            <span className="pixel inv__cat">{item.cat}</span>
            <span className="pixel inv__mono" aria-hidden="true">
              {item.mono}
            </span>
            <span className="term inv__name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className="container sec-grid">
        <SectionHead num="01" title="SOBRE O PLAYER" id="sobre" />
        <div className="about">
          <p className="about__highlight reveal">
            {about.highlight}
            <span className="about__accent">{about.highlightAccent}</span>
          </p>
          <p className="about__body reveal">{about.body}</p>
          <Inventory />
        </div>
      </div>
    </section>
  )
}
