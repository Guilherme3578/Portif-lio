import { profile } from '../data/profile'
import './PlayerCard.css'

export function PlayerCard() {
  return (
    <article className="player card" aria-label="Ficha do jogador">
      <header className="player__head">
        <span className="pixel player__p1">PLAYER 1</span>
        <span className="pixel player__online">
          <span className="blink">●</span> ONLINE
        </span>
      </header>
      <div className="player__photo">
        <img
          src={profile.photo}
          alt={profile.photoAlt}
          width={400}
          height={500}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <p className="pixel player__name">{profile.name.toUpperCase()}</p>
      <dl className="player__stats">
        {profile.stats.map((s) => (
          <div key={s.k} className="player__row">
            <dt className="pixel">{s.k}</dt>
            <dd className="term">{s.v}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
