import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import {
  createContext,
  type MouseEvent,
  type PropsWithChildren,
  type ReactNode,
  useContext,
  useMemo,
  useRef,
} from 'react'
import { cn } from '@/utils/ui'

interface TiltCardContextValue {
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  scale: MotionValue<number>
}

const TiltCardContext = createContext<TiltCardContextValue | null>(null)

interface TiltCardProps extends PropsWithChildren {
  className?: string
  glareEnable?: boolean
  scale?: number
  tiltMaxAngle?: number
  tiltReverse?: boolean
}

export function TiltCard({
  children,
  className,
  tiltMaxAngle = 12,
  tiltReverse = false,
  scale = 1.05,
  ...props
}: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 300 })
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 300 })
  const scaleValue = useSpring(1, { damping: 30, stiffness: 300 })

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    tiltReverse ? [tiltMaxAngle, -tiltMaxAngle] : [-tiltMaxAngle, tiltMaxAngle]
  )
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    tiltReverse ? [-tiltMaxAngle, tiltMaxAngle] : [tiltMaxAngle, -tiltMaxAngle]
  )

  const containerRef = useRef<HTMLDivElement>(null)

  const moveMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return
    }

    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - left
    const mouseY = e.clientY - top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
    scaleValue.set(scale)
  }

  const leaveMouse = () => {
    x.set(0)
    y.set(0)
    scaleValue.set(1)
  }

  const tiltCardContextValue = useMemo<TiltCardContextValue>(
    () => ({ rotateX, rotateY, scale: scaleValue }),
    [rotateX, rotateY, scaleValue]
  )

  return (
    <TiltCardContext.Provider value={tiltCardContextValue}>
      <div
        className={cn('relative rounded-xl shadow-sm', className)}
        onMouseLeave={leaveMouse}
        onMouseMove={moveMouse}
        ref={containerRef}
        style={{ perspective: '1000px' }}
        {...props}
      >
        <div className='absolute inset-0 rounded-xl border' />
        {children}
      </div>
    </TiltCardContext.Provider>
  )
}

interface TiltCardContentProps {
  children: ReactNode
  className?: string
}

export function TiltCardContent({
  children,
  className,
  ...props
}: TiltCardContentProps) {
  const context = useContext(TiltCardContext)

  if (!context) {
    throw new Error('TiltCardContent must be used within TiltCard')
  }

  const { rotateX, rotateY, scale } = context

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-xl border bg-card text-card-foreground',
        className
      )}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
