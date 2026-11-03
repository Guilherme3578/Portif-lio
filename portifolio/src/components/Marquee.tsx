import { marqueeStacks } from '../data/stack'
import './Marquee.css'

function Track({ sep }: { sep: string }) {
  // Duas cópias seguidas para o loop infinito sem emenda
  const items = [...marqueeStacks, ...marqueeStacks]
  return (
    <div className="marquee__track">
      {items.map((s, i) => (
        <span key={i} className="pixel marquee__item">
          {s}
          <span className="marquee__sep">{sep}</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-label={`Stacks: ${marqueeStacks.join(', ')}`} role="img">
      <div className="marquee__band marquee__band--cyan">
        <Track sep="★" />
      </div>
      <div className="marquee__band marquee__band--pink">
        <Track sep="◆" />
      </div>
    </div>
  )
}
