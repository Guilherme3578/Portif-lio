const query = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null

export function prefersReducedMotion(): boolean {
  return query?.matches ?? false
}
