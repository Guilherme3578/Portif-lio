import { education } from '../data/profile'
import { SectionHead } from './SectionHead'
import './Quest.css'

export function Quest() {
  return (
    <section id="missao" className="section" aria-labelledby="missao-title">
      <div className="container sec-grid">
        <SectionHead num="02" title="MISSÃO PRINCIPAL" id="missao" />
        <article className="quest card reveal">
          <div className="quest__top">
            <div>
              <p className="pixel quest__flag blink">! QUEST ATIVA</p>
              <h3 className="quest__course">{education.course}</h3>
              <p className="quest__school">{education.school}</p>
            </div>
            <div className="quest__end">
              <span className="pixel quest__end-label">CONCLUSÃO</span>
              <span className="term quest__end-date">{education.end}</span>
            </div>
          </div>
          <div className="quest__progress">
            <div className="quest__bar" aria-hidden="true" />
            <span className="pixel quest__status">EM ANDAMENTO</span>
          </div>
        </article>
      </div>
    </section>
  )
}
