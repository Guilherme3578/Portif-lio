import { useCallback, useRef } from 'react'

export type SoundKind = 'move' | 'open' | 'unlock' | 'click' | 'konami'

// Sequências de notas (Hz) e duração de cada nota (s).
const SOUNDS: Record<SoundKind, { notes: number[]; step: number }> = {
  move: { notes: [660], step: 0.06 },
  click: { notes: [880, 1320], step: 0.05 },
  open: { notes: [440, 660, 880], step: 0.07 },
  unlock: { notes: [523, 659, 784, 1047], step: 0.08 },
  konami: { notes: [392, 523, 659, 784, 1047, 1319], step: 0.07 },
}

/** Beeps 8-bit via WebAudio (onda square, ganho 0.05, decaimento rápido). */
export function useSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null)

  return useCallback(
    (kind: SoundKind, force = false) => {
      if (!enabled && !force) return
      const ctx = (ctxRef.current ??= new AudioContext())
      if (ctx.state === 'suspended') void ctx.resume()
      const { notes, step } = SOUNDS[kind]
      const start = ctx.currentTime
      notes.forEach((freq, i) => {
        const t = start + i * step
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'square'
        osc.frequency.setValueAtTime(freq, t)
        gain.gain.setValueAtTime(0.05, t)
        gain.gain.exponentialRampToValueAtTime(0.0001, t + step * 1.6)
        osc.connect(gain).connect(ctx.destination)
        osc.start(t)
        osc.stop(t + step * 1.7)
      })
    },
    [enabled],
  )
}
