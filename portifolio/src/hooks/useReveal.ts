import { useEffect, useRef } from 'react'

/**
 * Observa os elementos `.reveal` dentro do container e adiciona `.is-in`
 * quando entram na viewport. `key` permite reobservar ao trocar de conteúdo.
 */
export function useReveal<T extends HTMLElement>(key?: unknown) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    targets.forEach((el) => {
      el.classList.remove('is-in')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [key])

  return ref
}

/** Dispara `onVisible` enquanto o elemento estiver (ou não) visível. */
export function useVisibility<T extends HTMLElement>(
  onChange: (visible: boolean) => void,
  threshold = 0.25,
) {
  const ref = useRef<T>(null)
  const cb = useRef(onChange)

  useEffect(() => {
    cb.current = onChange
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => cb.current(entry.isIntersecting), { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return ref
}
