import { createContext, useContext } from 'react'
import type { SoundKind } from '../hooks/useSound'

export interface ToastMessage {
  id: number
  title: string
  text: string
  color?: string
}

export interface CurtainInfo {
  stage: string
  title: string
}

export interface GameApi {
  soundOn: boolean
  toggleSound: () => void
  play: (kind: SoundKind, force?: boolean) => void
  /** Soma bônus à pontuação do HUD (sem re-render). */
  addScore: (points: number) => void
  /** Registra o elemento onde a pontuação é escrita. */
  registerScore: (el: HTMLElement | null) => void
  toast: (msg: Omit<ToastMessage, 'id'>) => void
  /** Fecha a cortina, executa `action` com a tela coberta e reabre. */
  transition: (info: CurtainInfo, action: () => void) => void
  /** Conquista desbloqueada só uma vez por sessão. */
  unlockOnce: (key: string) => boolean
}

export const GameContext = createContext<GameApi | null>(null)

export function useGame(): GameApi {
  const api = useContext(GameContext)
  if (!api) throw new Error('useGame precisa estar dentro de <GameProvider>')
  return api
}
