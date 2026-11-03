import type { CSSProperties } from 'react'
import type { ToastMessage } from '../context/game'
import './Toast.css'

export function Toast({ message }: { message?: ToastMessage }) {
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {message && (
        <div
          key={message.id}
          className="toast"
          style={{ '--c': message.color ?? 'var(--yellow)' } as CSSProperties}
        >
          <p className="pixel toast__title">{message.title}</p>
          <p className="toast__text">{message.text}</p>
        </div>
      )}
    </div>
  )
}
