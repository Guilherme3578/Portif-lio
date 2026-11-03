import { useEffect, useRef } from 'react'

const SEQUENCE = [
  'arrowup', 'arrowup', 'arrowdown', 'arrowdown',
  'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a',
]

export function useKonami(onUnlock: () => void) {
  const cb = useRef(onUnlock)

  useEffect(() => {
    cb.current = onUnlock
  })

  useEffect(() => {
    let pos = 0
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key === SEQUENCE[pos]) {
        pos += 1
        if (pos === SEQUENCE.length) {
          pos = 0
          cb.current()
        }
      } else {
        pos = key === SEQUENCE[0] ? 1 : 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
