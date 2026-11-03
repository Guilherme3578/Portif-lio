import type { ReactNode } from 'react'

interface Props {
  num: string
  title: string
  id: string
  meta?: ReactNode
}

export function SectionHead({ num, title, id, meta }: Props) {
  return (
    <div className="sec-head reveal">
      <span className="sec-head__num">({num})</span>
      <h2 className="sec-head__title" id={`${id}-title`}>
        {title}
      </h2>
      {meta && <span className="sec-head__meta">{meta}</span>}
    </div>
  )
}
