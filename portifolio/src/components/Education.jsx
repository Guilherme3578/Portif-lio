import { education } from '../data/content'

function Education() {
  return (
    <section id="formacao" className="section education-section">
      <p className="section-num">02 — Formação</p>

      <div className="education-row">
        <span className="chip chip-status">{education.status}</span>
        <div className="education-info">
          <strong>{education.course}</strong>
          <span className="education-institution">
            {education.institution}
          </span>
        </div>
        <span className="education-finish">{education.finish}</span>
      </div>
    </section>
  )
}

export default Education
