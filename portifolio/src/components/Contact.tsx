import { useEffect, useState, type CSSProperties } from 'react'
import { contacts, footer } from '../data/profile'
import { useGame } from '../context/game'
import { scrollToSection } from '../hooks/useNav'
import { SectionHead } from './SectionHead'
import './Contact.css'

function Countdown() {
  const [n, setN] = useState(9)
  useEffect(() => {
    const t = window.setInterval(() => setN((v) => (v === 0 ? 9 : v - 1)), 1000)
    return () => window.clearInterval(t)
  }, [])
  return (
    <span className="term continue__count" aria-hidden="true">
      {n}
    </span>
  )
}

export function Contact() {
  const { play } = useGame()

  return (
    <>
      <section id="contato" className="section" aria-labelledby="contato-title">
        <div className="container">
          <div className="sec-top">
            <SectionHead num="05" title="CONTATO" id="contato" />
          </div>

          <div className="continue card reveal">
            <div className="continue__top">
              <div>
                <p className="pixel continue__title glitch" data-text="CONTINUE?">
                  CONTINUE?
                </p>
                <p className="continue__lead">
                  Vamos construir algo <span className="continue__accent">juntos.</span>
                </p>
              </div>
              <Countdown />
            </div>

            <ul className="continue__grid">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    className="contact-btn"
                    href={c.href}
                    style={{ '--c': c.color } as CSSProperties}
                    onClick={() => play('click')}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="pixel contact-btn__label">{c.label}</span>
                    <span className="term contact-btn__value">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner term">
          <span>{footer.copy}</span>
          <span className="footer__tip">{footer.tip}</span>
          <a
            href="#top"
            className="footer__top"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('top')
            }}
          >
            {footer.top}
          </a>
        </div>
      </footer>
    </>
  )
}
