import { profile } from '../data/content'
import MediaPlaceholder from './MediaPlaceholder'

function Hero({ onNavigate }) {
  return (
    <section id="top" className="hero-section">
      <p className="kicker">{profile.kicker}</p>

      <h1 className="hero-title">
        <span className="line line-solid">FULL</span>
        <span className="line line-accent">STACK</span>
        <span className="line line-outline">DEV</span>
      </h1>

      <div className="hero-grid">
        <div className="hero-photo">
          {profile.photoReady ? (
            <img src={profile.photoSrc} alt={profile.name} />
          ) : (
            <MediaPlaceholder label="foto de perfil" aspect="1 / 1" />
          )}
        </div>

        <div className="hero-copy">
          <p className="hero-lead">
            Olá, sou o <strong>Guilherme Israel</strong>, desenvolvedor
            full-stack e estudante de{' '}
            <strong>Análise e Desenvolvimento de Sistemas</strong> no Centro
            Universitário Senac Nações Unidas.
          </p>
          <p className="hero-sub">
            Do backend em Java / Spring ao front em React &amp; Angular —
            transformando o que aprendo em aplicações reais.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onNavigate('projetos')}
            >
              Ver projetos
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => onNavigate('contato')}
            >
              Contato
            </button>
            <a className="btn btn-ghost" href={profile.cv} download>
              Baixar CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
