import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import {
  Toaster as Sonner,
  type ToasterProps as SonnerProps,
  useSonner,
} from 'sonner'

export type Theme = SonnerProps['theme']

/**
 * @summary Use toast theme.
 * @param onChange Callback to run when the theme changes.
 * @description Subscribe to theme changes.
 * @returns Function to unsubscribe from theme changes.
 */

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, {
    attributeFilter: ['class', 'data-theme'],
    attributes: true,
  })
  return () => observer.disconnect()
}

function getThemeSnapshot(): Theme {
  const root = document.documentElement
  return root.classList.contains('dark') || root.dataset.theme === 'dark'
    ? 'dark'
    : 'light'
}

function getServerThemeSnapshot(): Theme {
  return undefined
}

function useToastTheme() {
  return useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  )
}

/**
 * @summary Use toast sound.
 * @description Generate tones for different toast types.
 */

const tones = {
  error: [
    [440, 0],
    [330, 0.12],
  ],
  info: [[660, 0]],
  success: [
    [523.25, 0],
    [783.99, 0.12],
  ],
  warning: [
    [440, 0],
    [440, 0.16],
  ],
} as const

function useToastSound(enabled: boolean, volume: number, toasterId?: string) {
  const { toasts } = useSonner()
  const audio = useRef<AudioContext | null>(null)
  const previous = useRef(new Map<string | number, string | undefined>())

  useEffect(() => {
    if (!enabled || window.AudioContext === undefined) {
      return
    }

    // Unlock audio inside a user gesture; never queue sounds blocked by autoplay.
    const unlock = () => {
      try {
        const context = audio.current ?? new AudioContext()
        audio.current = context
        if (context.state === 'suspended') {
          context.resume().catch(() => {
            // Browser audio policy may reject this optional operation.
          })
        }
      } catch {
        // Audio is an enhancement; unavailable devices must not affect toasts.
      }
    }

    document.addEventListener('pointerdown', unlock, true)
    document.addEventListener('keydown', unlock, true)
    return () => {
      document.removeEventListener('pointerdown', unlock, true)
      document.removeEventListener('keydown', unlock, true)
      const context = audio.current
      audio.current = null
      if (context && context.state !== 'closed') {
        context.close().catch(() => {
          // Browser audio policy may reject this optional operation.
        })
      }
    }
  }, [enabled])

  useEffect(() => {
    const next = new Map<string | number, string | undefined>()
    for (const toast of toasts) {
      if (toast.toasterId !== toasterId || toast.delete) {
        continue
      }
      const type = toast.type ?? 'normal'
      const soundType = type === 'normal' || type === 'default' ? 'info' : type
      next.set(toast.id, type)
      if (previous.current.get(toast.id) === type) {
        continue
      }
      const context = audio.current
      if (
        !enabled ||
        !context ||
        context.state !== 'running' ||
        !(soundType in tones)
      ) {
        continue
      }

      const level = Number.isFinite(volume)
        ? Math.min(1, Math.max(0, volume))
        : 0.5
      if (level === 0) {
        continue
      }
      for (const [frequency, delay] of tones[soundType as keyof typeof tones]) {
        const start = context.currentTime + delay
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(frequency, start)
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(level * 0.2, start + 0.005)
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22)
        oscillator.connect(gain)
        gain.connect(context.destination)
        oscillator.addEventListener(
          'ended',
          () => {
            oscillator.disconnect()
            gain.disconnect()
          },
          { once: true }
        )
        oscillator.start(start)
        oscillator.stop(start + 0.25)
      }
    }
    previous.current = next
  }, [enabled, toasts, toasterId, volume])
}

/**
 * @summary Toaster component.
 * @description Wrapper for Sonner toast component.
 */

export type ToasterProps = SonnerProps & {
  sound?: boolean
  volume?: number
}

export const Toaster = ({
  id,
  richColors = true,
  closeButton = true,
  sound = true,
  volume = 0.5,
  ...props
}: ToasterProps) => {
  const theme = useToastTheme()
  useToastSound(sound, volume, id)

  return (
    <Sonner
      id={id}
      className='toaster group'
      richColors={richColors}
      closeButton={closeButton}
      icons={{
        error: <OctagonXIcon className='size-4' />,
        info: <InfoIcon className='size-4' />,
        loading: <Loader2Icon className='size-4 animate-spin' />,
        success: <CircleCheckIcon className='size-4' />,
        warning: <TriangleAlertIcon className='size-4' />,
      }}
      style={
        {
          '--border-radius': 'var(--radius)',
          '--normal-bg': 'var(--popover)',
          '--normal-border': 'var(--border)',
          '--normal-text': 'var(--popover-foreground)',
          '--toast-close-button-end': '0',
          '--toast-close-button-start': 'auto',
          '--toast-close-button-transform': 'translate(35%, -35%)',
        } as React.CSSProperties
      }
      theme={theme}
      toastOptions={{
        classNames: {
          closeButton: '!cursor-default',
          toast: 'cn-toast',
        },
        duration: 3000,
      }}
      {...props}
    />
  )
}
