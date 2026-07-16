import { profile } from '../data/content'

function Contact() {
  return (
    <section id="contato" className="section contact-section">
      <p className="section-num">04 — Contato</p>

      <h2 className="contact-title">Vamos construir algo juntos.</h2>

      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className="btn btn-ghost"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn-ghost"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn btn-ghost"
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a className="btn btn-ghost" href={profile.cv} download>
          Baixar CV
        </a>
      </div>

      <footer className="footer">© {profile.name}</footer>
    </section>
  )
}

export default Contact
