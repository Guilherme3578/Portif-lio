import { about, stacks } from '../data/content'

function About() {
  return (
    <section id="sobre" className="section about-section">
      <p className="section-num">01 — Sobre</p>

      <div className="about-grid">
        <div className="about-text">
          <h2 className="statement">{about.statement}</h2>
          <p className="paragraph">{about.paragraph}</p>
        </div>

        <ul className="stack-list">
          {stacks.map((stack) => (
            <li key={stack} className="chip">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
