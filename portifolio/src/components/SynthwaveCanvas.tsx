import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks/useReducedMotion'

interface Star {
  x: number
  y: number
  r: number
  phase: number
  speed: number
}

const PINK = '#ff2e97'
const CYAN = '#22e4ff'
const YELLOW = '#ffd23f'
const BG = '#07021a'
const HORIZON = 0.62
const MAX_DPR = 1.5

/** Fundo do hero: estrelas, sol synthwave e chão quadriculado em perspectiva. */
export function SynthwaveCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = prefersReducedMotion()
    let w = 0
    let h = 0
    let stars: Star[] = []
    let frame = 0
    let visible = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * HORIZON * 0.92,
        r: Math.random() < 0.15 ? 2 : 1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.8,
      }))
    }

    const drawSun = (horizonY: number) => {
      const r = Math.min(w * 0.2, h * 0.3)
      const cx = w * 0.5
      const cy = horizonY - r * 0.45
      const top = cy - r
      const bottom = horizonY

      ctx.save()
      // Recorte: metade de cima inteira + faixas horizontais cada vez mais finas embaixo
      ctx.beginPath()
      ctx.rect(cx - r, top, r * 2, cy - top)
      const bands = 6
      const span = bottom - cy
      for (let i = 0; i < bands; i++) {
        const y0 = cy + (span / bands) * i
        const gap = 2 + i * 2.2
        ctx.rect(cx - r, y0 + gap, r * 2, span / bands - gap)
      }
      ctx.clip()

      const grad = ctx.createLinearGradient(0, top, 0, cy + r)
      grad.addColorStop(0, YELLOW)
      grad.addColorStop(0.55, '#ff7a5c')
      grad.addColorStop(1, PINK)
      ctx.shadowColor = PINK
      ctx.shadowBlur = 40
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawGrid = (horizonY: number, t: number) => {
      const depth = h - horizonY
      const cx = w * 0.5
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, horizonY, w, depth)
      ctx.clip()
      ctx.fillStyle = BG
      ctx.fillRect(0, horizonY, w, depth)

      ctx.strokeStyle = PINK
      ctx.lineWidth = 1.5
      ctx.shadowColor = PINK
      ctx.shadowBlur = 8

      // Linhas verticais convergindo para o ponto de fuga
      const lines = 14
      ctx.beginPath()
      for (let i = -lines; i <= lines; i++) {
        const xFar = cx + i * (w * 0.02)
        const xNear = cx + i * (w * 0.16)
        ctx.moveTo(xFar, horizonY)
        ctx.lineTo(xNear, h)
      }
      ctx.globalAlpha = 0.7
      ctx.stroke()

      // Linhas horizontais vindo em direção ao usuário
      const rows = 14
      const offset = (t * 0.00035) % 1
      for (let i = 0; i < rows; i++) {
        const p = (i + offset) / rows
        const y = horizonY + depth * p * p * p
        ctx.globalAlpha = Math.min(1, 0.15 + p * 1.2)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }
      ctx.restore()

      // Linha do horizonte
      ctx.save()
      ctx.strokeStyle = CYAN
      ctx.lineWidth = 2
      ctx.shadowColor = CYAN
      ctx.shadowBlur = 16
      ctx.beginPath()
      ctx.moveTo(0, horizonY)
      ctx.lineTo(w, horizonY)
      ctx.stroke()
      ctx.restore()

      // Degradê para o fundo na base
      const fade = ctx.createLinearGradient(0, h * 0.8, 0, h)
      fade.addColorStop(0, 'rgba(7,2,26,0)')
      fade.addColorStop(1, BG)
      ctx.fillStyle = fade
      ctx.fillRect(0, h * 0.8, w, h * 0.2)
    }

    const draw = (t: number) => {
      const horizonY = h * HORIZON
      const sky = ctx.createLinearGradient(0, 0, 0, horizonY)
      sky.addColorStop(0, BG)
      sky.addColorStop(1, '#2a0b4a')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, w, horizonY)

      for (const s of stars) {
        ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(s.phase + (t / 1000) * s.speed))
        ctx.fillStyle = s.r > 1 ? CYAN : '#f2eefe'
        ctx.fillRect(s.x, s.y, s.r, s.r)
      }
      ctx.globalAlpha = 1

      drawSun(horizonY)
      drawGrid(horizonY, t)
    }

    const loop = (t: number) => {
      draw(t)
      frame = visible ? requestAnimationFrame(loop) : 0
    }

    const start = () => {
      if (reduced) {
        draw(0)
        return
      }
      if (!frame) frame = requestAnimationFrame(loop)
    }

    resize()
    draw(0)

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
    })
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      resize()
      draw(performance.now())
    })
    ro.observe(canvas)

    return () => {
      io.disconnect()
      ro.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />
}
