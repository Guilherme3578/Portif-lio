import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { GameContext, type CurtainInfo, type GameApi, type ToastMessage } from './game'
import { useSound } from '../hooks/useSound'
import { prefersReducedMotion } from '../hooks/useReducedMotion'
import { StageCurtain, type CurtainPhase } from '../components/StageCurtain'
import { Toast } from '../components/Toast'

const CURTAIN_MOVE = 480
const CURTAIN_HOLD = 650
const TOAST_TIME = 3000

export function GameProvider({ children }: { children: ReactNode }) {
  const [soundOn, setSoundOn] = useState(false)
  const play = useSound(soundOn)

  // ---- Pontuação: maxScrollY/10 + bônus, escrita direto no DOM ----
  const scoreEl = useRef<HTMLElement | null>(null)
  const maxScroll = useRef(0)
  const bonus = useRef(0)

  const renderScore = useCallback(() => {
    if (!scoreEl.current) return
    const score = Math.min(999999, Math.round(maxScroll.current / 10) + bonus.current)
    scoreEl.current.textContent = String(score).padStart(6, '0')
  }, [])

  const registerScore = useCallback(
    (el: HTMLElement | null) => {
      scoreEl.current = el
      renderScore()
    },
    [renderScore],
  )

  const addScore = useCallback(
    (points: number) => {
      bonus.current += points
      renderScore()
    },
    [renderScore],
  )

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (window.scrollY > maxScroll.current) {
          maxScroll.current = window.scrollY
          renderScore()
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [renderScore])

  // ---- Toasts (fila, um por vez) ----
  const [toasts, setToasts] = useState<ToastMessage[]>([])
  const toastId = useRef(0)
  const toast = useCallback((msg: Omit<ToastMessage, 'id'>) => {
    toastId.current += 1
    setToasts((q) => [...q, { ...msg, id: toastId.current }])
  }, [])
  const current = toasts[0]
  useEffect(() => {
    if (!current) return
    const t = window.setTimeout(() => setToasts((q) => q.slice(1)), TOAST_TIME)
    return () => window.clearTimeout(t)
  }, [current])

  // ---- Cortina de transição ----
  const [curtain, setCurtain] = useState<{ phase: CurtainPhase; info: CurtainInfo | null }>({
    phase: 'idle',
    info: null,
  })
  const busy = useRef(false)
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const transition = useCallback((info: CurtainInfo, action: () => void) => {
    if (busy.current) return
    if (prefersReducedMotion()) {
      action()
      return
    }
    busy.current = true
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms))
    setCurtain({ phase: 'down', info })
    later(() => {
      action()
      setCurtain({ phase: 'up', info })
    }, CURTAIN_MOVE + CURTAIN_HOLD)
    later(() => {
      setCurtain({ phase: 'idle', info: null })
      busy.current = false
    }, CURTAIN_MOVE * 2 + CURTAIN_HOLD)
  }, [])

  const unlocked = useRef(new Set<string>())
  const unlockOnce = useCallback((key: string) => {
    if (unlocked.current.has(key)) return false
    unlocked.current.add(key)
    return true
  }, [])

  const api = useMemo<GameApi>(
    () => ({
      soundOn,
      toggleSound: () => {
        setSoundOn(!soundOn)
        if (!soundOn) play('click', true)
      },
      play,
      addScore,
      registerScore,
      toast,
      transition,
      unlockOnce,
    }),
    [soundOn, play, addScore, registerScore, toast, transition, unlockOnce],
  )

  return (
    <GameContext.Provider value={api}>
      {children}
      <StageCurtain phase={curtain.phase} info={curtain.info} />
      <Toast message={current} />
    </GameContext.Provider>
  )
}
